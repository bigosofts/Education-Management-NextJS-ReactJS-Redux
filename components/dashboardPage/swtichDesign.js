"use client";
import { useSearchParams } from "next/navigation";

import ShowPaymentDetails from "./showpaymentDetail";

import { updateData as updatePayment } from "@/apiservices/paymentapiservices";
import { updateData as updateStudents } from "@/apiservices/studentapiservices";
import { useEffect, useState } from "react";
import { IoIosArrowDroprightCircle } from "react-icons/io";
import { useSelector } from "react-redux";
import mytoast from "../toast/toast";

function SwitchDesign() {
  let pass2 = "talimulquranwassunnahinternetmadrasa";
  const [showbtn, setshowbtn] = useState();

  const courseData = useSelector((state) => state.courses.courses);
  const jamatData = useSelector((state) => state.djs.jamats);
  const semesterData = useSelector((state) => state.djs.semesters);
  const departmentData = useSelector((state) => state.djs.departments);
  const studentsData = useSelector((state) => state.students.students);
  const paymentData = useSelector((state) => state.djs.payments);

  const classData = useSelector((state) => state.classes.classes);

  const [primaryMoney, setPrimaryMoney] = useState({
    tk: "",
    us: "",
    mtk: "",
    mus: "",
  });
  const [money2, setMoney2] = useState({
    tk: "",
    us: "",
    mtk: "",
    mus: "",
  });
  const [counter, setCounter] = useState(0);
  const [showPayment, setShowPayment] = useState(false);
  const [course, setCourse] = useState();
  const [course2, setCourse2] = useState();
  const [jamat, setJamat] = useState();
  const [semester, setSemester] = useState();
  const [department, setDepartment] = useState();
  const [extraJamat, setExtraJamat] = useState(false);
  const [extraPayment, setExtraPayment] = useState(false);
  const [students, setStudents] = useState();
  const [payments, setPayments] = useState();
  const [trigger, setTrigger] = useState();
  const [extraBatch, setExtraBatch] = useState(false);

  const data = useSelector((state) => state.isAdmin.value);

  const [extraSemester, setExtraSemester] = useState(false);

  const [batchArray, setBatchArray] = useState();

  const searchParams = useSearchParams();
  const enroll = searchParams.get("enroll");

  const [mainData, setMainData] = useState({
    classes: enroll ? enroll : "",
    jamat: "",
    semester: "",
    department: "",
    amountPaid: "",
    transactionID: "",
    accountNo: "",
    paymentWay: "",
    extraTaka: "",
    credit: false,
    batch: "",
  });

  function PriceDecision(coursePriceData) {
    if (course2) {
      if (
        data.data.userDetails.countryName == "Bangladesh" ||
        data.data.userDetails.countryName == "India"
      ) {
        if (coursePriceData) {
          let [dObj] = course2.filter((item) => {
            if (item.code == coursePriceData) {
              return item;
            }
          });

          if (dObj) {
            let tkC = dObj.price.registration.tk;
            let usC = Math.round(dObj.price.registration.tk / 109);
            let mtkC = dObj.price.monthly.tk;
            let musC = Math.round(dObj.price.monthly.tk / 109);

            setPrimaryMoney({ tk: tkC, us: usC, mtk: mtkC, mus: musC });

            return { tk: tkC, us: usC, mtk: mtkC, mus: musC };
          }
        } else {
          return { tk: "", us: "", mtk: "", mus: "" };
        }
      } else {
        if (coursePriceData) {
          let [dObj] = course2.filter((item) => {
            if (item.code == coursePriceData) {
              return item;
            }
          });

          if (dObj) {
            let tkC = Math.round(dObj.price.registration.us * 109);

            let usC = dObj.price.registration.us;
            let mtkC = Math.round(dObj.price.monthly.us * 109);

            let musC = dObj.price.monthly.us;

            setPrimaryMoney({ tk: tkC, us: usC, mtk: mtkC, mus: musC });
            return { tk: tkC, us: usC, mtk: mtkC, mus: musC };
          }
        } else {
          return { tk: "", us: "", mtk: "", mus: "" };
        }
      }
    }
  }

  function PriceDecision2(coursePriceData) {
    if (course2) {
      if (
        data.data.userDetails.countryName == "Bangladesh" ||
        data.data.userDetails.countryName == "India"
      ) {
        if (coursePriceData) {
          let [dObj] = course2.filter((item) => {
            if (item.code == coursePriceData) {
              return item;
            }
          });

          if (dObj) {
            let tkC = dObj.price.registration.tk;
            let usC = Math.round(dObj.price.registration.tk / 109);
            let mtkC = dObj.price.monthly.tk;
            let musC = Math.round(dObj.price.monthly.tk / 109);

            setMoney2({ tk: tkC, us: usC, mtk: mtkC, mus: musC });
            return { tk: tkC, us: usC, mtk: mtkC, mus: musC };
          }
        } else {
          return { tk: "", us: "", mtk: "", mus: "" };
        }
      } else {
        if (coursePriceData) {
          let [dObj] = course2.filter((item) => {
            if (item.code == coursePriceData) {
              return item;
            }
          });

          if (dObj) {
            let tkC = Math.round(dObj.price.registration.us * 109);

            let usC = dObj.price.registration.us;
            let mtkC = Math.round(dObj.price.monthly.us * 109);

            let musC = dObj.price.monthly.us;
            setMoney2({ tk: tkC, us: usC, mtk: mtkC, mus: musC });
            return { tk: tkC, us: usC, mtk: mtkC, mus: musC };
          }
        } else {
          return { tk: "", us: "", mtk: "", mus: "" };
        }
      }
    }
  }

  function desiredCourse(courseName) {
    let desiredCourse =
      course &&
      course.find((item) => {
        return item.courseCode == courseName;
      });
    return desiredCourse;
  }

  async function submitData(e) {
    e.preventDefault();

    let NewStudentCourseCode =
      students && JSON.parse(JSON.stringify(students.studentCourseCode));
    let NewStudentDepartment =
      students && JSON.parse(JSON.stringify(students.studentDepartment));

    let NewStudentJamatCode = (students &&
      students.studentJamatCode.length != 0 &&
      JSON.parse(JSON.stringify(students.studentJamatCode))) || [
      {
        code: "none",
        startedDate: new Date(),
        endDate: new Date(),
        status: "active",
      },
    ];
    let NewStudentSemester = (students &&
      students.studentSemester.length != 0 &&
      JSON.parse(JSON.stringify(students.studentSemester))) || [
      {
        code: "none",
        startedDate: new Date(),
        endDate: new Date(),
        status: "active",
      },
    ];

    if (
      NewStudentCourseCode[NewStudentCourseCode.length - 1].status == "active"
    ) {
      if (
        desiredCourse(mainData.classes) &&
        PriceDecision(mainData.classes).tk >
          PriceDecision2(
            data.data.userDetails.studentCourseCode[
              data.data.userDetails.studentCourseCode.length - 1
            ].code
          ).tk
      ) {
        if (
          (mainData.classes == "alemalema" ||
            mainData.classes == "prealemalema" ||
            mainData.classes == "schoolalemalema") &&
          mainData.jamat &&
          mainData.semester &&
          mainData.department &&
          mainData.amountPaid &&
          mainData.transactionID &&
          mainData.accountNo &&
          mainData.paymentWay &&
          mainData.batch
        ) {
          debugger;
          NewStudentCourseCode[NewStudentCourseCode.length - 1].endDate =
            new Date(Date.now()).toISOString();

          NewStudentCourseCode.push({
            code: mainData.classes,
            startedDate: new Date(Date.now()).toISOString(),
            endDate: null,
            status: "inactive",
          });

          NewStudentDepartment[NewStudentDepartment.length - 1].endDate =
            new Date(Date.now()).toISOString();

          NewStudentDepartment.push({
            code: mainData.department,
            startedDate: new Date(Date.now()).toISOString(),
            endDate: null,
            status: "inactive",
          });

          NewStudentJamatCode[NewStudentJamatCode.length - 1].endDate =
            new Date(Date.now()).toISOString();
          NewStudentJamatCode.push({
            code: mainData.jamat,
            startedDate: new Date(Date.now()).toISOString(),
            endDate: null,
            status: "inactive",
          });

          NewStudentSemester[NewStudentSemester.length - 1].endDate = new Date(
            Date.now()
          ).toISOString();
          NewStudentSemester.push({
            code: mainData.semester,
            startedDate: new Date(Date.now()).toISOString(),
            endDate: null,
            status: "inactive",
          });

          const res = await updateStudents(
            data.data.userDetails.userName,
            data.data.userDetails.firstName.en,
            data.data.userDetails.firstName.bn,
            data.data.userDetails.lastName.en,
            data.data.userDetails.lastName.bn,
            data.data.userDetails.nidNumber,
            data.data.userDetails.birthRegNumber,
            data.data.userDetails.fatherName.en,
            data.data.userDetails.fatherName.bn,
            data.data.userDetails.emailAddress,
            undefined,
            data.data.userDetails.mobileNumber,
            data.data.userDetails.occupation,
            NewStudentCourseCode,
            NewStudentJamatCode,
            data.data.userDetails.gender,
            data.data.userDetails.dateOfBirth,
            data.data.userDetails.countryName,
            data.data.userDetails.fullPresentAddress,
            data.data.userDetails.fullPermanentAddress,
            data.data.userDetails.admissionSession,
            data.data.userDetails.admissionDate,
            data.data.userDetails.studentMotive,
            data.data.userDetails.details,
            {
              addmissionDueStatus: true,
              consequentDueStatus: true,
              paymentID: data.data.userDetails.paymentStatus.paymentID,
            },
            data.data.userDetails.userRole,
            data.data.userDetails.extracurricular,
            data.data.userDetails.activeStatus,
            data.data.userDetails._id,
            NewStudentDepartment,
            NewStudentSemester,
            mainData.batch
          );
          if (res.status == "Alhamdulillah") {
            let newAdmissionPaymentHistory = [
              ...payments.admissionPaymentHistory,
            ];
            let newMonthlyPaymentHistory = [...payments.monthlyPaymentHistory];
            newMonthlyPaymentHistory[newMonthlyPaymentHistory.length - 1] = {
              Date: newMonthlyPaymentHistory[
                newMonthlyPaymentHistory.length - 1
              ].Date,
              PaymentStatus: false,
              Price: null,
              currency: "",
              transactionID: "",
              senderNo: "",
              paymentWay: "",
            };

            let index = newAdmissionPaymentHistory.length - 1;

            newAdmissionPaymentHistory.splice(index, 0, {
              Date: new Date(Date.now()).toISOString(),
              PaymentStatus: false,
              Price: mainData.amountPaid,
              currency: "taka",
              transactionID: mainData.transactionID,
              senderNo: mainData.accountNo,
              paymentWay: mainData.paymentWay,
              nextAdmissionDate:
                payments.admissionPaymentHistory[
                  payments.admissionPaymentHistory.length - 1
                ].Date,
            });

            const resPay = await updatePayment({
              paymentID: payments.paymentID,
              paymentCurrency: payments.paymentCurrency,
              admissionDate: payments.admissionDate,
              admissionPrice: {
                tk: PriceDecision(mainData.classes).tk,
                us: PriceDecision(mainData.classes).us,
              },
              monthlyPaymentPrice: {
                tk: PriceDecision(mainData.classes).mtk,
                us: PriceDecision(mainData.classes).mus,
              },
              admissionPaymentHistory: newAdmissionPaymentHistory,
              monthlyPaymentHistory: newMonthlyPaymentHistory,
              activeStatus: payments.activeStatus,
              idValue: payments._id,
            });

            if (resPay.status == "Alhamdulillah") {
              mytoast.success(
                "Settings has been reset. Now your Account goes for verification"
              );
              const hardRefresh = () => {
                if (typeof window !== "undefined") {
                  window.location.href = `/content/dashboard/${data.data.userDetails.userName}`;
                }
              };
              hardRefresh();
            }
          }
        } else if (
          (mainData.classes == "hifjulquran" ||
            mainData.classes == "shishumaktab" ||
            mainData.classes == "farzeayinnajera" ||
            mainData.classes == "abacus_student" ||
            mainData.classes == "farzeayinnajera" ||
            mainData.classes == "ramadanquranulkarim") &&
          mainData.accountNo &&
          mainData.transactionID &&
          mainData.amountPaid &&
          mainData.paymentWay &&
          mainData.department &&
          mainData.batch
        ) {
          debugger;
          NewStudentCourseCode[NewStudentCourseCode.length - 1].endDate =
            new Date(Date.now()).toISOString();

          NewStudentCourseCode.push({
            code: mainData.classes,
            startedDate: new Date(Date.now()).toISOString(),
            endDate: null,
            status: "inactive",
          });

          NewStudentDepartment[NewStudentDepartment.length - 1].endDate =
            new Date(Date.now()).toISOString();

          NewStudentDepartment.push({
            code: mainData.department,
            startedDate: new Date(Date.now()).toISOString(),
            endDate: null,
            status: "inactive",
          });

          NewStudentJamatCode[NewStudentJamatCode.length - 1].endDate =
            new Date(Date.now()).toISOString();
          NewStudentJamatCode.push({
            code: mainData.jamat,
            startedDate: new Date(Date.now()).toISOString(),
            endDate: null,
            status: "inactive",
          });

          NewStudentSemester[NewStudentSemester.length - 1].endDate = new Date(
            Date.now()
          ).toISOString();
          NewStudentSemester.push({
            code: mainData.semester,
            startedDate: new Date(Date.now()).toISOString(),
            endDate: null,
            status: "inactive",
          });

          const res = await updateStudents(
            data.data.userDetails.userName,
            data.data.userDetails.firstName.en,
            data.data.userDetails.firstName.bn,
            data.data.userDetails.lastName.en,
            data.data.userDetails.lastName.bn,
            data.data.userDetails.nidNumber,
            data.data.userDetails.birthRegNumber,
            data.data.userDetails.fatherName.en,
            data.data.userDetails.fatherName.bn,
            data.data.userDetails.emailAddress,
            undefined,
            data.data.userDetails.mobileNumber,
            data.data.userDetails.occupation,
            NewStudentCourseCode,
            NewStudentJamatCode,
            data.data.userDetails.gender,
            data.data.userDetails.dateOfBirth,
            data.data.userDetails.countryName,
            data.data.userDetails.fullPresentAddress,
            data.data.userDetails.fullPermanentAddress,
            data.data.userDetails.admissionSession,
            data.data.userDetails.admissionDate,
            data.data.userDetails.studentMotive,
            data.data.userDetails.details,
            {
              addmissionDueStatus: true,
              consequentDueStatus: true,
              paymentID: data.data.userDetails.paymentStatus.paymentID,
            },
            data.data.userDetails.userRole,
            data.data.userDetails.extracurricular,
            data.data.userDetails.activeStatus,
            data.data.userDetails._id,
            NewStudentDepartment,
            NewStudentSemester,
            mainData.batch
          );
          if (res.status == "Alhamdulillah") {
            let newAdmissionPaymentHistory = [
              ...payments.admissionPaymentHistory,
            ];
            let newMonthlyPaymentHistory = [...payments.monthlyPaymentHistory];
            newMonthlyPaymentHistory[newMonthlyPaymentHistory.length - 1] = {
              Date: newMonthlyPaymentHistory[
                newMonthlyPaymentHistory.length - 1
              ].Date,
              PaymentStatus: false,
              Price: null,
              currency: "",
              transactionID: "",
              senderNo: "",
              paymentWay: "",
            };

            let index = newAdmissionPaymentHistory.length - 1;

            newAdmissionPaymentHistory.splice(index, 0, {
              Date: new Date(Date.now()).toISOString(),
              PaymentStatus: false,
              Price: mainData.amountPaid,
              currency: "taka",
              transactionID: mainData.transactionID,
              senderNo: mainData.accountNo,
              paymentWay: mainData.paymentWay,
              nextAdmissionDate:
                payments.admissionPaymentHistory[
                  payments.admissionPaymentHistory.length - 1
                ].Date,
            });

            const resPay = await updatePayment({
              paymentID: payments.paymentID,
              paymentCurrency: payments.paymentCurrency,
              admissionDate: payments.admissionDate,
              admissionPrice: {
                tk: PriceDecision(mainData.classes).tk,
                us: PriceDecision(mainData.classes).us,
              },
              monthlyPaymentPrice: {
                tk: PriceDecision(mainData.classes).mtk,
                us: PriceDecision(mainData.classes).mus,
              },
              admissionPaymentHistory: newAdmissionPaymentHistory,
              monthlyPaymentHistory: newMonthlyPaymentHistory,
              activeStatus: payments.activeStatus,
              idValue: payments._id,
            });

            if (resPay.status == "Alhamdulillah") {
              mytoast.success(
                "Settings has been reset. Now your Account goes for verification"
              );
              const hardRefresh = () => {
                if (typeof window !== "undefined") {
                  window.location.href = `/content/dashboard/${data.data.userDetails.userName}`;
                }
              };
              hardRefresh();
            }
          }
        } else {
          debugger;
          mytoast.danger("One or more field is empty");
        }
      } else if (
        desiredCourse(mainData.classes) &&
        PriceDecision(mainData.classes).tk <=
          PriceDecision2(
            data.data.userDetails.studentCourseCode[
              data.data.userDetails.studentCourseCode.length - 1
            ].code
          ).tk
      ) {
        if (desiredCourse(mainData.classes).coursePrice.registration.tk == 0) {
          if (mainData.classes && mainData.department && mainData.batch) {
            debugger;
            NewStudentCourseCode[NewStudentCourseCode.length - 1].endDate =
              new Date(Date.now()).toISOString();
            debugger;

            NewStudentCourseCode[NewStudentCourseCode.length - 1].status =
              "inactive";

            NewStudentCourseCode.push({
              code: mainData.classes,
              startedDate: new Date(Date.now()).toISOString(),
              endDate: null,
              status: "inactive",
            });

            NewStudentDepartment[NewStudentDepartment.length - 1].status =
              "inactive";

            NewStudentDepartment[NewStudentDepartment.length - 1].endDate =
              new Date(Date.now()).toISOString();

            NewStudentDepartment.push({
              code: mainData.department,
              startedDate: new Date(Date.now()).toISOString(),
              endDate: null,
              status: "inactive",
            });

            NewStudentJamatCode[NewStudentJamatCode.length - 1].status =
              "inactive";

            NewStudentJamatCode[NewStudentJamatCode.length - 1].endDate =
              new Date(Date.now()).toISOString();
            NewStudentJamatCode.push({
              code: mainData.jamat,
              startedDate: new Date(Date.now()).toISOString(),
              endDate: null,
              status: "inactive",
            });

            NewStudentSemester[NewStudentSemester.length - 1].status =
              "inactive";

            NewStudentSemester[NewStudentSemester.length - 1].endDate =
              new Date(Date.now()).toISOString();
            NewStudentSemester.push({
              code: mainData.semester,
              startedDate: new Date(Date.now()).toISOString(),
              endDate: null,
              status: "inactive",
            });

            const res = await updateStudents(
              data.data.userDetails.userName,
              data.data.userDetails.firstName.en,
              data.data.userDetails.firstName.bn,
              data.data.userDetails.lastName.en,
              data.data.userDetails.lastName.bn,
              data.data.userDetails.nidNumber,
              data.data.userDetails.birthRegNumber,
              data.data.userDetails.fatherName.en,
              data.data.userDetails.fatherName.bn,
              data.data.userDetails.emailAddress,
              undefined,
              data.data.userDetails.mobileNumber,
              data.data.userDetails.occupation,
              NewStudentCourseCode,
              NewStudentJamatCode,
              data.data.userDetails.gender,
              data.data.userDetails.dateOfBirth,
              data.data.userDetails.countryName,
              data.data.userDetails.fullPresentAddress,
              data.data.userDetails.fullPermanentAddress,
              data.data.userDetails.admissionSession,
              data.data.userDetails.admissionDate,
              data.data.userDetails.studentMotive,
              data.data.userDetails.details,
              {
                addmissionDueStatus: true,
                consequentDueStatus: true,
                paymentID: data.data.userDetails.paymentStatus.paymentID,
              },
              data.data.userDetails.userRole,
              data.data.userDetails.extracurricular,
              data.data.userDetails.activeStatus,
              data.data.userDetails._id,
              NewStudentDepartment,
              NewStudentSemester,
              mainData.batch
            );
            if (res.status == "Alhamdulillah") {
              let newAdmissionPaymentHistory = [
                ...payments.admissionPaymentHistory,
              ];
              let newMonthlyPaymentHistory = [
                ...payments.monthlyPaymentHistory,
              ];
              newMonthlyPaymentHistory[newMonthlyPaymentHistory.length - 1] = {
                Date: newMonthlyPaymentHistory[
                  newMonthlyPaymentHistory.length - 1
                ].Date,
                PaymentStatus: true,
                Price: 0,
                currency: "",
                transactionID: "",
                senderNo: "",
                paymentWay: "",
              };

              let index = newAdmissionPaymentHistory.length - 1;

              newAdmissionPaymentHistory.splice(index, 0, {
                Date: new Date(Date.now()).toISOString(),
                PaymentStatus: true,
                Price: PriceDecision(mainData.classes).tk,
                currency: "taka",
                transactionID: "",
                senderNo: "",
                paymentWay: "",
                nextAdmissionDate:
                  payments.admissionPaymentHistory[
                    payments.admissionPaymentHistory.length - 1
                  ].Date,
              });

              const resPay = await updatePayment({
                paymentID: payments.paymentID,
                paymentCurrency: payments.paymentCurrency,
                admissionDate: payments.admissionDate,
                admissionPrice: {
                  tk: PriceDecision(mainData.classes).tk,
                  us: PriceDecision(mainData.classes).us,
                },
                monthlyPaymentPrice: {
                  tk: PriceDecision(mainData.classes).mtk,
                  us: PriceDecision(mainData.classes).mus,
                },
                admissionPaymentHistory: newAdmissionPaymentHistory,
                monthlyPaymentHistory: newMonthlyPaymentHistory,
                activeStatus: payments.activeStatus,
                idValue: payments._id,
              });

              if (resPay.status == "Alhamdulillah") {
                mytoast.success(
                  "Settings has been reset. Now your Account goes for verification"
                );
                const hardRefresh = () => {
                  if (typeof window !== "undefined") {
                    window.location.href = `/content/dashboard/${data.data.userDetails.userName}`;
                  }
                };
                hardRefresh();
              }
            }
          } else {
            mytoast.danger("One or more field is empty");
          }
        } else if (
          desiredCourse(mainData.classes) &&
          PriceDecision(mainData.classes).tk ==
            PriceDecision2(
              data.data.userDetails.studentCourseCode[
                data.data.userDetails.studentCourseCode.length - 1
              ].code
            ).tk
        ) {
          if (
            (mainData.classes == "alemalema" ||
              mainData.classes == "prealemalema" ||
              mainData.classes == "schoolalemalema") &&
            mainData.jamat &&
            mainData.semester &&
            mainData.department &&
            mainData.batch
          ) {
            NewStudentCourseCode[NewStudentCourseCode.length - 1].endDate =
              new Date(Date.now()).toISOString();

            NewStudentCourseCode.push({
              code: mainData.classes,
              startedDate: new Date(Date.now()).toISOString(),
              endDate: null,
              status: "inactive",
            });

            NewStudentDepartment[NewStudentDepartment.length - 1].endDate =
              new Date(Date.now()).toISOString();

            NewStudentDepartment.push({
              code: mainData.department,
              startedDate: new Date(Date.now()).toISOString(),
              endDate: null,
              status: "inactive",
            });

            NewStudentJamatCode[NewStudentJamatCode.length - 1].endDate =
              new Date(Date.now()).toISOString();
            NewStudentJamatCode.push({
              code: mainData.jamat,
              startedDate: new Date(Date.now()).toISOString(),
              endDate: null,
              status: "inactive",
            });

            NewStudentSemester[NewStudentSemester.length - 1].endDate =
              new Date(Date.now()).toISOString();
            NewStudentSemester.push({
              code: mainData.semester,
              startedDate: new Date(Date.now()).toISOString(),
              endDate: null,
              status: "inactive",
            });

            const res = await updateStudents(
              data.data.userDetails.userName,
              data.data.userDetails.firstName.en,
              data.data.userDetails.firstName.bn,
              data.data.userDetails.lastName.en,
              data.data.userDetails.lastName.bn,
              data.data.userDetails.nidNumber,
              data.data.userDetails.birthRegNumber,
              data.data.userDetails.fatherName.en,
              data.data.userDetails.fatherName.bn,
              data.data.userDetails.emailAddress,
              undefined,
              data.data.userDetails.mobileNumber,
              data.data.userDetails.occupation,
              NewStudentCourseCode,
              NewStudentJamatCode,
              data.data.userDetails.gender,
              data.data.userDetails.dateOfBirth,
              data.data.userDetails.countryName,
              data.data.userDetails.fullPresentAddress,
              data.data.userDetails.fullPermanentAddress,
              data.data.userDetails.admissionSession,
              data.data.userDetails.admissionDate,
              data.data.userDetails.studentMotive,
              data.data.userDetails.details,
              {
                addmissionDueStatus: true,
                consequentDueStatus: true,
                paymentID: data.data.userDetails.paymentStatus.paymentID,
              },
              data.data.userDetails.userRole,
              data.data.userDetails.extracurricular,
              data.data.userDetails.activeStatus,
              data.data.userDetails._id,
              NewStudentDepartment,
              NewStudentSemester,
              mainData.batch
            );
            if (res.status == "Alhamdulillah") {
              let newAdmissionPaymentHistory = [
                ...payments.admissionPaymentHistory,
              ];
              let newMonthlyPaymentHistory = [
                ...payments.monthlyPaymentHistory,
              ];
              newMonthlyPaymentHistory[newMonthlyPaymentHistory.length - 1] = {
                Date: newMonthlyPaymentHistory[
                  newMonthlyPaymentHistory.length - 1
                ].Date,
                PaymentStatus: false,
                Price: null,
                currency: "",
                transactionID: "",
                senderNo: "",
                paymentWay: "",
              };

              let index = newAdmissionPaymentHistory.length - 1;

              newAdmissionPaymentHistory.splice(index, 0, {
                Date: new Date(Date.now()).toISOString(),
                PaymentStatus: false,
                Price: PriceDecision(mainData.classes).tk,
                currency: "taka",
                transactionID:
                  payments.admissionPaymentHistory[
                    payments.admissionPaymentHistory.length - 2
                  ].transactionID,
                senderNo:
                  payments.admissionPaymentHistory[
                    payments.admissionPaymentHistory.length - 2
                  ].senderNo,
                paymentWay:
                  payments.admissionPaymentHistory[
                    payments.admissionPaymentHistory.length - 2
                  ].paymentWay,
                nextAdmissionDate:
                  payments.admissionPaymentHistory[
                    payments.admissionPaymentHistory.length - 1
                  ].Date,
              });

              const resPay = await updatePayment({
                paymentID: payments.paymentID,
                paymentCurrency: payments.paymentCurrency,
                admissionDate: payments.admissionDate,
                admissionPrice: {
                  tk: PriceDecision(mainData.classes).tk,
                  us: PriceDecision(mainData.classes).us,
                },
                monthlyPaymentPrice: {
                  tk: PriceDecision(mainData.classes).mtk,
                  us: PriceDecision(mainData.classes).mus,
                },
                admissionPaymentHistory: newAdmissionPaymentHistory,
                monthlyPaymentHistory: newMonthlyPaymentHistory,
                activeStatus: payments.activeStatus,
                idValue: payments._id,
              });

              if (resPay.status == "Alhamdulillah") {
                mytoast.success(
                  "Settings has been reset. Now your Account goes for verification"
                );
                const hardRefresh = () => {
                  if (typeof window !== "undefined") {
                    window.location.href = `/content/dashboard/${data.data.userDetails.userName}`;
                  }
                };
                hardRefresh();
              }
            }
          } else if (
            (mainData.classes == "hifjulquran" ||
              mainData.classes == "shishumaktab" ||
              mainData.classes == "abacus_student" ||
              mainData.classes == "farzeayinnajera" ||
              mainData.classes == "abacus_student" ||
              mainData.classes == "ramadanquranulkarim") &&
            mainData.department &&
            mainData.batch
          ) {
            NewStudentCourseCode[NewStudentCourseCode.length - 1].endDate =
              new Date(Date.now()).toISOString();

            NewStudentCourseCode[NewStudentCourseCode.length - 1].status =
              "inactive";

            NewStudentCourseCode.push({
              code: mainData.classes,
              startedDate: new Date(Date.now()).toISOString(),
              endDate: null,
              status: "inactive",
            });

            NewStudentDepartment[NewStudentDepartment.length - 1].status =
              "inactive";
            NewStudentDepartment[NewStudentDepartment.length - 1].endDate =
              new Date(Date.now()).toISOString();

            NewStudentDepartment.push({
              code: mainData.department,
              startedDate: new Date(Date.now()).toISOString(),
              endDate: null,
              status: "inactive",
            });

            NewStudentJamatCode[NewStudentJamatCode.length - 1].status =
              "inactive";
            NewStudentJamatCode[NewStudentJamatCode.length - 1].endDate =
              new Date(Date.now()).toISOString();
            NewStudentJamatCode.push({
              code: mainData.jamat,
              startedDate: new Date(Date.now()).toISOString(),
              endDate: null,
              status: "inactive",
            });

            NewStudentSemester[NewStudentSemester.length - 1].status =
              "inactive";
            NewStudentSemester[NewStudentSemester.length - 1].endDate =
              new Date(Date.now()).toISOString();
            NewStudentSemester.push({
              code: mainData.semester,
              startedDate: new Date(Date.now()).toISOString(),
              endDate: null,
              status: "inactive",
            });

            const res = await updateStudents(
              data.data.userDetails.userName,
              data.data.userDetails.firstName.en,
              data.data.userDetails.firstName.bn,
              data.data.userDetails.lastName.en,
              data.data.userDetails.lastName.bn,
              data.data.userDetails.nidNumber,
              data.data.userDetails.birthRegNumber,
              data.data.userDetails.fatherName.en,
              data.data.userDetails.fatherName.bn,
              data.data.userDetails.emailAddress,
              undefined,
              data.data.userDetails.mobileNumber,
              data.data.userDetails.occupation,
              NewStudentCourseCode,
              NewStudentJamatCode,
              data.data.userDetails.gender,
              data.data.userDetails.dateOfBirth,
              data.data.userDetails.countryName,
              data.data.userDetails.fullPresentAddress,
              data.data.userDetails.fullPermanentAddress,
              data.data.userDetails.admissionSession,
              data.data.userDetails.admissionDate,
              data.data.userDetails.studentMotive,
              data.data.userDetails.details,
              {
                addmissionDueStatus: true,
                consequentDueStatus: true,
                paymentID: data.data.userDetails.paymentStatus.paymentID,
              },
              data.data.userDetails.userRole,
              data.data.userDetails.extracurricular,
              data.data.userDetails.activeStatus,
              data.data.userDetails._id,
              NewStudentDepartment,
              NewStudentSemester
            );
            if (res.status == "Alhamdulillah") {
              let newAdmissionPaymentHistory = [
                ...payments.admissionPaymentHistory,
              ];
              let newMonthlyPaymentHistory = [
                ...payments.monthlyPaymentHistory,
              ];
              newMonthlyPaymentHistory[newMonthlyPaymentHistory.length - 1] = {
                Date: newMonthlyPaymentHistory[
                  newMonthlyPaymentHistory.length - 1
                ].Date,
                PaymentStatus: false,
                Price: null,
                currency: "",
                transactionID: "",
                senderNo: "",
                paymentWay: "",
              };

              let index = newAdmissionPaymentHistory.length - 1;

              newAdmissionPaymentHistory.splice(index, 0, {
                Date: new Date(Date.now()).toISOString(),
                PaymentStatus: false,
                Price: PriceDecision(mainData.classes).tk,
                currency: "taka",
                transactionID:
                  payments.admissionPaymentHistory[
                    payments.admissionPaymentHistory.length - 2
                  ].transactionID,
                senderNo:
                  payments.admissionPaymentHistory[
                    payments.admissionPaymentHistory.length - 2
                  ].senderNo,
                paymentWay:
                  payments.admissionPaymentHistory[
                    payments.admissionPaymentHistory.length - 2
                  ].paymentWay,
                nextAdmissionDate:
                  payments.admissionPaymentHistory[
                    payments.admissionPaymentHistory.length - 1
                  ].Date,
              });

              const resPay = await updatePayment({
                paymentID: payments.paymentID,
                paymentCurrency: payments.paymentCurrency,
                admissionDate: payments.admissionDate,
                admissionPrice: {
                  tk: PriceDecision(mainData.classes).tk,
                  us: PriceDecision(mainData.classes).us,
                },
                monthlyPaymentPrice: {
                  tk: PriceDecision(mainData.classes).mtk,
                  us: PriceDecision(mainData.classes).mus,
                },
                admissionPaymentHistory: newAdmissionPaymentHistory,
                monthlyPaymentHistory: newMonthlyPaymentHistory,
                activeStatus: payments.activeStatus,
                idValue: payments._id,
              });

              if (resPay.status == "Alhamdulillah") {
                mytoast.success(
                  "Settings has been reset. Now your Account goes for verification"
                );
                const hardRefresh = () => {
                  if (typeof window !== "undefined") {
                    window.location.href = `/content/dashboard/${data.data.userDetails.userName}`;
                  }
                };
                hardRefresh();
              }
            }
          } else {
            mytoast.danger("One or more field is empty");
          }
        } else {
          // start

          if (
            (mainData.classes == "alemalema" ||
              mainData.classes == "prealemalema" ||
              mainData.classes == "schoolalemalema") &&
            mainData.jamat &&
            mainData.semester &&
            mainData.department &&
            mainData.batch
          ) {
            NewStudentCourseCode[NewStudentCourseCode.length - 1].endDate =
              new Date(Date.now()).toISOString();

            NewStudentCourseCode[NewStudentCourseCode.length - 1].status =
              "inactive";

            NewStudentCourseCode.push({
              code: mainData.classes,
              startedDate: new Date(Date.now()).toISOString(),
              endDate: null,
              status: "inactive",
            });

            NewStudentDepartment[NewStudentDepartment.length - 1].status =
              "inactive";
            NewStudentDepartment[NewStudentDepartment.length - 1].endDate =
              new Date(Date.now()).toISOString();

            NewStudentDepartment.push({
              code: mainData.department,
              startedDate: new Date(Date.now()).toISOString(),
              endDate: null,
              status: "inactive",
            });

            NewStudentJamatCode[NewStudentJamatCode.length - 1].status =
              "inactive";

            NewStudentJamatCode[NewStudentJamatCode.length - 1].endDate =
              new Date(Date.now()).toISOString();
            NewStudentJamatCode.push({
              code: mainData.jamat,
              startedDate: new Date(Date.now()).toISOString(),
              endDate: null,
              status: "inactive",
            });

            NewStudentSemester[NewStudentSemester.length - 1].status =
              "inactive";

            NewStudentSemester[NewStudentSemester.length - 1].endDate =
              new Date(Date.now()).toISOString();
            NewStudentSemester.push({
              code: mainData.semester,
              startedDate: new Date(Date.now()).toISOString(),
              endDate: null,
              status: "inactive",
            });

            const res = await updateStudents(
              data.data.userDetails.userName,
              data.data.userDetails.firstName.en,
              data.data.userDetails.firstName.bn,
              data.data.userDetails.lastName.en,
              data.data.userDetails.lastName.bn,
              data.data.userDetails.nidNumber,
              data.data.userDetails.birthRegNumber,
              data.data.userDetails.fatherName.en,
              data.data.userDetails.fatherName.bn,
              data.data.userDetails.emailAddress,
              undefined,
              data.data.userDetails.mobileNumber,
              data.data.userDetails.occupation,
              NewStudentCourseCode,
              NewStudentJamatCode,
              data.data.userDetails.gender,
              data.data.userDetails.dateOfBirth,
              data.data.userDetails.countryName,
              data.data.userDetails.fullPresentAddress,
              data.data.userDetails.fullPermanentAddress,
              data.data.userDetails.admissionSession,
              data.data.userDetails.admissionDate,
              data.data.userDetails.studentMotive,
              data.data.userDetails.details,
              {
                addmissionDueStatus: true,
                consequentDueStatus: true,
                paymentID: data.data.userDetails.paymentStatus.paymentID,
              },
              data.data.userDetails.userRole,
              data.data.userDetails.extracurricular,
              data.data.userDetails.activeStatus,
              data.data.userDetails._id,
              NewStudentDepartment,
              NewStudentSemester
            );
            if (res.status == "Alhamdulillah") {
              let newAdmissionPaymentHistory = [
                ...payments.admissionPaymentHistory,
              ];
              let newMonthlyPaymentHistory = [
                ...payments.monthlyPaymentHistory,
              ];
              newMonthlyPaymentHistory[newMonthlyPaymentHistory.length - 1] = {
                Date: newMonthlyPaymentHistory[
                  newMonthlyPaymentHistory.length - 1
                ].Date,
                PaymentStatus: false,
                Price: null,
                currency: "",
                transactionID: "",
                senderNo: "",
                paymentWay: "",
              };

              let index = newAdmissionPaymentHistory.length - 1;

              newAdmissionPaymentHistory.splice(index, 0, {
                Date: new Date(Date.now()).toISOString(),
                PaymentStatus: false,
                Price: PriceDecision(mainData.classes).tk,
                currency: "taka",
                transactionID:
                  payments.admissionPaymentHistory[
                    payments.admissionPaymentHistory.length - 2
                  ].transactionID,
                senderNo:
                  payments.admissionPaymentHistory[
                    payments.admissionPaymentHistory.length - 2
                  ].senderNo,
                paymentWay:
                  payments.admissionPaymentHistory[
                    payments.admissionPaymentHistory.length - 2
                  ].paymentWay,
                nextAdmissionDate:
                  payments.admissionPaymentHistory[
                    payments.admissionPaymentHistory.length - 1
                  ].Date,
              });

              const resPay = await updatePayment({
                paymentID: payments.paymentID,
                paymentCurrency: payments.paymentCurrency,
                admissionDate: payments.admissionDate,
                admissionPrice: {
                  tk: PriceDecision(mainData.classes).tk,
                  us: PriceDecision(mainData.classes).us,
                },
                monthlyPaymentPrice: {
                  tk: PriceDecision(mainData.classes).mtk,
                  us: PriceDecision(mainData.classes).mus,
                },
                admissionPaymentHistory: newAdmissionPaymentHistory,
                monthlyPaymentHistory: newMonthlyPaymentHistory,
                activeStatus: payments.activeStatus,
                idValue: payments._id,
              });

              if (resPay.status == "Alhamdulillah") {
                mytoast.success(
                  "Settings has been reset. Now your Account goes for verification"
                );
                const hardRefresh = () => {
                  if (typeof window !== "undefined") {
                    window.location.href = `/content/dashboard/${data.data.userDetails.userName}`;
                  }
                };
                hardRefresh();
              }
            }
          } else if (
            (mainData.classes == "hifjulquran" ||
              mainData.classes == "shishumaktab" ||
              mainData.classes == "abacus_student" ||
              mainData.classes == "farzeayinnajera" ||
              mainData.classes == "abacus_student" ||
              mainData.classes == "ramadanquranulkarim") &&
            mainData.department &&
            mainData.batch
          ) {
            NewStudentCourseCode[NewStudentCourseCode.length - 1].endDate =
              new Date(Date.now()).toISOString();

            NewStudentCourseCode[NewStudentCourseCode.length - 1].status =
              "inactive";

            NewStudentCourseCode.push({
              code: mainData.classes,
              startedDate: new Date(Date.now()).toISOString(),
              endDate: null,
              status: "inactive",
            });

            NewStudentDepartment[NewStudentDepartment.length - 1].status =
              "inactive";
            NewStudentDepartment[NewStudentDepartment.length - 1].endDate =
              new Date(Date.now()).toISOString();

            NewStudentDepartment.push({
              code: mainData.department,
              startedDate: new Date(Date.now()).toISOString(),
              endDate: null,
              status: "inactive",
            });

            NewStudentJamatCode[NewStudentJamatCode.length - 1].status =
              "inactive";
            NewStudentJamatCode[NewStudentJamatCode.length - 1].endDate =
              new Date(Date.now()).toISOString();
            NewStudentJamatCode.push({
              code: mainData.jamat,
              startedDate: new Date(Date.now()).toISOString(),
              endDate: null,
              status: "inactive",
            });

            NewStudentSemester[NewStudentSemester.length - 1].status =
              "inactive";
            NewStudentSemester[NewStudentSemester.length - 1].endDate =
              new Date(Date.now()).toISOString();
            NewStudentSemester.push({
              code: mainData.semester,
              startedDate: new Date(Date.now()).toISOString(),
              endDate: null,
              status: "inactive",
            });

            const res = await updateStudents(
              data.data.userDetails.userName,
              data.data.userDetails.firstName.en,
              data.data.userDetails.firstName.bn,
              data.data.userDetails.lastName.en,
              data.data.userDetails.lastName.bn,
              data.data.userDetails.nidNumber,
              data.data.userDetails.birthRegNumber,
              data.data.userDetails.fatherName.en,
              data.data.userDetails.fatherName.bn,
              data.data.userDetails.emailAddress,
              undefined,
              data.data.userDetails.mobileNumber,
              data.data.userDetails.occupation,
              NewStudentCourseCode,
              NewStudentJamatCode,
              data.data.userDetails.gender,
              data.data.userDetails.dateOfBirth,
              data.data.userDetails.countryName,
              data.data.userDetails.fullPresentAddress,
              data.data.userDetails.fullPermanentAddress,
              data.data.userDetails.admissionSession,
              data.data.userDetails.admissionDate,
              data.data.userDetails.studentMotive,
              data.data.userDetails.details,
              {
                addmissionDueStatus: true,
                consequentDueStatus: true,
                paymentID: data.data.userDetails.paymentStatus.paymentID,
              },
              data.data.userDetails.userRole,
              data.data.userDetails.extracurricular,
              data.data.userDetails.activeStatus,
              data.data.userDetails._id,
              NewStudentDepartment,
              NewStudentSemester
            );
            if (res.status == "Alhamdulillah") {
              let newAdmissionPaymentHistory = [
                ...payments.admissionPaymentHistory,
              ];
              let newMonthlyPaymentHistory = [
                ...payments.monthlyPaymentHistory,
              ];
              newMonthlyPaymentHistory[newMonthlyPaymentHistory.length - 1] = {
                Date: newMonthlyPaymentHistory[
                  newMonthlyPaymentHistory.length - 1
                ].Date,
                PaymentStatus: false,
                Price: null,
                currency: "",
                transactionID: "",
                senderNo: "",
                paymentWay: "",
              };

              let index = newAdmissionPaymentHistory.length - 1;

              newAdmissionPaymentHistory.splice(index, 0, {
                Date: new Date(Date.now()).toISOString(),
                PaymentStatus: false,
                Price: PriceDecision(mainData.classes).tk,
                currency: "taka",
                transactionID:
                  payments.admissionPaymentHistory[
                    payments.admissionPaymentHistory.length - 2
                  ].transactionID,
                senderNo:
                  payments.admissionPaymentHistory[
                    payments.admissionPaymentHistory.length - 2
                  ].senderNo,
                paymentWay:
                  payments.admissionPaymentHistory[
                    payments.admissionPaymentHistory.length - 2
                  ].paymentWay,
                nextAdmissionDate:
                  payments.admissionPaymentHistory[
                    payments.admissionPaymentHistory.length - 1
                  ].Date,
              });

              const resPay = await updatePayment({
                paymentID: payments.paymentID,
                paymentCurrency: payments.paymentCurrency,
                admissionDate: payments.admissionDate,
                admissionPrice: {
                  tk: PriceDecision(mainData.classes).tk,
                  us: PriceDecision(mainData.classes).us,
                },
                monthlyPaymentPrice: {
                  tk: PriceDecision(mainData.classes).mtk,
                  us: PriceDecision(mainData.classes).mus,
                },
                admissionPaymentHistory: newAdmissionPaymentHistory,
                monthlyPaymentHistory: newMonthlyPaymentHistory,
                activeStatus: payments.activeStatus,
                idValue: payments._id,
              });

              if (resPay.status == "Alhamdulillah") {
                mytoast.success(
                  "Settings has been reset. Now your Account goes for verification"
                );
                const hardRefresh = () => {
                  if (typeof window !== "undefined") {
                    window.location.href = `/content/dashboard/${data.data.userDetails.userName}`;
                  }
                };
                hardRefresh();
              }
            }
          } else {
            mytoast.danger("One or more field is empty");
          }
          //finish
        }
      }
    }
  }

  function classDecision(e) {
    e.preventDefault();
    PriceDecision(e.target.value);

    PriceDecision2(
      data.data.userDetails.studentCourseCode[
        data.data.userDetails.studentCourseCode.length - 1
      ].code
    );

    function findDepartment(classes) {
      let departmentID = department.find((item) => {
        return item.departmentName == classes;
      });
      return departmentID ? departmentID.departmentID : "";
    }

    setMainData((prev) => ({
      ...prev,
      classes: e.target.value,
      department: findDepartment(e.target.value),
    }));

    if (e.target.value == "alemalema") {
      setExtraJamat(true);
      setExtraSemester(false);
      setBatchArray([]);
      let jamatModified =
        jamat.length > 0 &&
        jamatData.filter((item) => item.activeStatus == "active");

      setJamat(jamatModified);

      let modifiedSemester =
        semesterData.length > 0 &&
        semesterData.filter((item) => {
          return (
            !item.semesterID.includes("pre") &&
            !item.semesterID.includes("school")
          );
        });

      setSemester(modifiedSemester);
    } else if (e.target.value == "prealemalema") {
      setExtraJamat(true);
      setExtraSemester(false);
      setBatchArray([]);

      let jamatModified =
        jamat.length > 0 &&
        jamatData
          .filter((item) => item.activeStatus == "active")
          .filter((item) => item.jamatID == "jamat1");

      setJamat(jamatModified);

      let modifiedSemester =
        semesterData.length > 0 &&
        semesterData.filter((item) => {
          return item.semesterID.includes("pre");
        });

      setSemester(modifiedSemester);
    } else if (e.target.value == "schoolalemalema") {
      setExtraJamat(true);
      setExtraSemester(false);
      setBatchArray([]);

      let jamatModified =
        jamat.length > 0 &&
        jamatData.filter((item) => item.activeStatus == "active");

      setJamat(jamatModified);

      let modifiedSemester =
        semesterData.length > 0 &&
        semesterData.filter((item) => {
          return item.semesterID.includes("school");
        });

      setSemester(modifiedSemester);
    } else if (e.target.value == "") {
      setExtraJamat(false);
      setExtraSemester(false);
      setExtraBatch(false);
      setBatchArray([]);

      setMainData((prev) => ({
        ...prev,
        classes: "",
        jamat: "",
        semester: "",
        department: "",
        amountPaid: "",
        transactionID: "",
        accountNo: "",
        paymentWay: "",
        extraTaka: "",
        credit: false,
        batch: "",
      }));
    } else {
      setExtraJamat(false);
      setExtraSemester(false);

      let batch =
        classData.length > 0 &&
        classData.filter((item) => {
          if (item.courseID == e.target.value) {
            return true;
          }
        });

      if (batch.length > 1) {
        let batchNo = uniqueArray(batch);
        setBatchArray(batchNo);
      }
      setExtraBatch(true);
    }

    if (
      PriceDecision(e.target.value).tk >
      PriceDecision2(
        data.data.userDetails.studentCourseCode[
          data.data.userDetails.studentCourseCode.length - 1
        ].code
      ).tk
    ) {
      setMainData((prev) => ({
        ...prev,
        extraTaka:
          PriceDecision(e.target.value).tk -
          PriceDecision2(
            data.data.userDetails.studentCourseCode[
              data.data.userDetails.studentCourseCode.length - 1
            ].code
          ).tk,
        credit: false,
      }));
      setExtraPayment(true);
    } else {
      setMainData((prev) => ({
        ...prev,
        extraTaka:
          PriceDecision2(
            data.data.userDetails.studentCourseCode[
              data.data.userDetails.studentCourseCode.length - 1
            ].code
          ).tk - PriceDecision(e.target.value).tk,
        credit: true,
      }));
      setExtraPayment(false);
    }
  }

  if (trigger && data && department) {
    if (counter == 0) {
      function classDecision2(codeC) {
        PriceDecision(codeC);

        PriceDecision2(
          data.data.userDetails.studentCourseCode[
            data.data.userDetails.studentCourseCode.length - 1
          ].code
        );

        function findDepartment(classes) {
          let departmentID = department.find((item) => {
            return item.departmentName == classes;
          });
          return departmentID ? departmentID.departmentID : "";
        }

        setMainData((prev) => ({
          ...prev,
          classes: codeC,
          department: findDepartment(codeC),
        }));

        if (codeC == "alemalema") {
          setExtraJamat(true);
          setExtraSemester(false);
        } else if (codeC == "prealemalema") {
          setExtraJamat(true);
          setExtraSemester(false);
        } else if (codeC == "schoolalemalema") {
          setExtraJamat(true);
          setExtraSemester(false);
        } else {
          setExtraJamat(false);
          setExtraSemester(false);
        }

        if (
          PriceDecision(codeC).tk >
          PriceDecision2(
            data.data.userDetails.studentCourseCode[
              data.data.userDetails.studentCourseCode.length - 1
            ].code
          ).tk
        ) {
          setMainData((prev) => ({
            ...prev,
            extraTaka:
              PriceDecision(codeC).tk -
              PriceDecision2(
                data.data.userDetails.studentCourseCode[
                  data.data.userDetails.studentCourseCode.length - 1
                ].code
              ).tk,
            credit: false,
          }));
          setExtraPayment(true);
        } else {
          setMainData((prev) => ({
            ...prev,
            extraTaka:
              PriceDecision2(
                data.data.userDetails.studentCourseCode[
                  data.data.userDetails.studentCourseCode.length - 1
                ].code
              ).tk - PriceDecision(codeC).tk,
            credit: true,
          }));
          setExtraPayment(false);
        }
      }
      classDecision2(trigger);
      setCounter((prev) => prev + 1);
    }
  }

  function jamatDecision(e) {
    e.preventDefault();
    setMainData((prev) => ({
      ...prev,
      jamat: e.target.value,
    }));

    if (!mainData.jamat) {
      setExtraSemester(true);
    } else {
      setExtraSemester(false);
    }
  }

  function semesterDecision(e) {
    e.preventDefault();
    setMainData((prev) => ({
      ...prev,
      semester: e.target.value,
    }));

    let batch =
      classData.length > 0 &&
      classData.filter((item) => {
        if (
          item.courseID == mainData.classes &&
          item.jamatID == mainData.jamat &&
          item.semesterID == e.target.value
        ) {
          return true;
        }
      });
    debugger;
    if (batch.length > 1) {
      let batchNo = uniqueArray(batch);
      setBatchArray(batchNo);
    }
    debugger;
    setExtraBatch(true);
  }

  function batchDecision(e) {
    e.preventDefault();
    setMainData((prev) => ({
      ...prev,
      batch: e.target.value,
    }));
  }
  function paymentWayDecision(e) {
    e.preventDefault();
    const paymentWay = e.target.value;
    setMainData((prev) => ({
      ...prev,
      paymentWay: paymentWay,
    }));
    if (paymentWay == "none") {
      setShowPayment(false);
    } else {
      setShowPayment(true);
    }
  }
  function transactionDecision(e) {
    e.preventDefault();
    const transactionID = e.target.value;
    setMainData((prev) => ({
      ...prev,
      transactionID: transactionID,
    }));
  }
  function accountNoDecision(e) {
    e.preventDefault();
    const accountNo = e.target.value;
    setMainData((prev) => ({
      ...prev,
      accountNo: accountNo,
    }));
  }

  function amountPaidDecision(e) {
    e.preventDefault();
    const amountPaid = e.target.value;
    setMainData((prev) => ({
      ...prev,
      amountPaid: amountPaid,
    }));
  }

  function uniqueArray(old) {
    const modifiedArray = old.map((item) => item.batchNo);

    const uniqueNamesSet = new Set(modifiedArray);
    const uniqueNamesArray = Array.from(uniqueNamesSet);

    return uniqueNamesArray;
  }

  useEffect(() => {
    async function getData() {
      let res = { data: null };
      res.data =
        courseData.length > 0 &&
        courseData.filter(
          (item) =>
            item.activeStatus == "active" && item.courseCode != "farzeayinclass"
        );

      let res2 = { data: null };
      res2.data =
        jamatData.length > 0 &&
        jamatData.filter((item) => item.activeStatus == "active");

      let res3 = { data: null };
      res3.data = semesterData.length > 0 && semesterData;

      let res4 = { data: null };
      res4.data = departmentData.length > 0 && departmentData;

      let res5 = { data: null };
      res5.data =
        studentsData.length > 0 &&
        studentsData.filter(
          (item) => item.userName == data.data.userDetails.userName
        );

      let res6 = { data: null };
      res6.data =
        paymentData.length > 0 &&
        paymentData.filter(
          (item) =>
            item.paymentID == data.data.userDetails.paymentStatus.paymentID
        );

      if (
        res.data.length > 0 &&
        res2.data.length > 0 &&
        res3.data.length > 0 &&
        res4.data.length > 0 &&
        res5.data.length > 0 &&
        res6.data.length > 0
      ) {
        setCourse(
          res.data.filter(
            (item) =>
              item.courseCode != "abacus_teacher" &&
              item.courseCode != "ezranahusorof" &&
              item.courseCode != "urdu"
          )
        );
        setCourse2(
          res.data.map((item) => {
            return {
              title: item.title.bn,
              code: item.courseCode,
              price: item.coursePrice,
            };
          })
        );
        setJamat(res2.data);
        setSemester(res3.data);
        setDepartment(res4.data);
        setStudents(res5.data[0]);
        setPayments(res6.data[0]);
      }
    }
    getData();

    if (enroll) {
      setTrigger(enroll);
    }
  }, [
    courseData,
    jamatData,
    semesterData,
    departmentData,
    studentsData,
    paymentData,
    classData,
  ]);

  function showButtonLogic(e) {
    e.preventDefault();
    let password2 = e.target.value;
    if (password2 == pass2) {
      setshowbtn(true);
    }
  }
  console.log(mainData);
  return (
    <div className="w-full md:w-[50%] mx-auto p-5 border-0 md:border-2 border-slate-300 rounded-3xl mt-0 md:mt-5">
      <div className="flex justify-center p-5 pb-10">
        <div className="">
          <form>
            <div className="courseSelector h-[150px] md:h-[200px]">
              <label htmlFor="course">
                <h1 className="w-full mx-auto text-sm md:text-3xl text-center mb-2 ">
                  আপনি পরিবর্তিত হয়ে কোন ক্ল্যাসে যেতে ইচ্ছুক?
                </h1>
              </label>

              <select
                value={mainData.classes}
                onChange={classDecision}
                id="course"
                name="course"
                className="bg-white my-4 p-4 box-border w-full rounded-3xl mb-10 md:mb-[100px] text-sm md:text-2xl"
              >
                <option value="">আপনার ক্ল্যাস নির্বাচন করুন</option>
                {course
                  ? course.map((item, i) => (
                      <option key={i} value={item.courseCode}>
                        {item.title.bn}
                      </option>
                    ))
                  : ""}
              </select>
            </div>

            {/* {mainData.credit && (
              <div className="h-[50px] md:h-[100px] mb-10 bg-red-500 p-5 rounded-3xl">
                <h1 className="w-full mx-auto text-sm md:text-3xl text-center mb-2 text-white">
                  আপনি বর্তমান ক্লাসটি থেকে নির্বাচিত ক্লাস পরিবর্তন করতে পারবেন
                </h1>
              </div>
            )} */}

            <div
              className={`JamatSelector ${
                extraJamat ? "h-[150px] md:h-[200px]" : "h-[0px]"
              } overflow-hidden transition-all duration-1000 ease-out`}
            >
              <label htmlFor="jamat">
                <h1 className="w-full mx-auto text-sm md:text-3xl text-center my-2">
                  আপনার জামাত নির্বাচন করুন?
                </h1>
              </label>

              <select
                value={mainData.jamat}
                onChange={jamatDecision}
                id="jamat"
                name="jamat"
                className="bg-white my-4 p-4 box-border w-full rounded-3xl mb-10 md:mb-[100px] text-sm md:text-2xl"
              >
                <option value="">আপনার জামাত নির্বাচন করুন</option>
                {jamat
                  ? jamat.map((item, i) => (
                      <option key={i} value={item.jamatID}>
                        {item.jamatName.toUpperCase()}
                      </option>
                    ))
                  : ""}
              </select>
            </div>

            <div
              className={`SemesterSelector ${
                extraSemester ? "h-[150px] md:h-[200px]" : "h-[0px]"
              } overflow-hidden transition-all duration-1000 ease-out`}
            >
              <label htmlFor="semester">
                <h1 className="w-full mx-auto text-sm md:text-3xl text-center my-2">
                  আপনি সেমিস্টার নির্বাচন করুন?
                </h1>
              </label>

              <select
                value={mainData.semester}
                onChange={semesterDecision}
                id="semester"
                name="semester"
                className="bg-white my-4 p-4 box-border w-full rounded-3xl mb-10 md:mb-[100px] text-sm md:text-2xl"
              >
                <option value="none">আপনার সেমিস্টার নির্বাচন করুন</option>
                {semester
                  ? semester.map((item, i) => (
                      <option key={i} value={item.semesterID}>
                        {item.semesterName} - ({item.semesterID})
                      </option>
                    ))
                  : ""}
              </select>
            </div>

            <div
              className={`SemesterSelector ${
                extraBatch ? "h-[150px] md:h-[200px]" : "h-[0px]"
              } overflow-hidden transition-all duration-1000 ease-out`}
            >
              <label htmlFor="semester">
                <h1 className="w-full mx-auto text-sm md:text-3xl text-center my-2">
                  আপনি ব্যাচ নির্বাচন করুন?
                </h1>
              </label>

              <select
                value={mainData.batch}
                onChange={batchDecision}
                id="semester"
                name="semester"
                className="bg-white my-4 p-4 box-border w-full rounded-3xl mb-10 md:mb-[100px] text-sm md:text-2xl"
              >
                <option value="none">আপনার ব্যাচ নির্বাচন করুন</option>
                {batchArray
                  ? batchArray.map((item, i) => (
                      <option key={i} value={item}>
                        {item}
                      </option>
                    ))
                  : ""}
              </select>
            </div>

            {extraPayment && (
              <>
                <label htmlFor="paymentWay">
                  <h1 className="w-full mx-auto text-sm md:text-3xl text-center my-2">
                    এই ক্লাসে যেতে চাইলে, {mainData.extraTaka} টাকা অথবা{" "}
                    {Math.round(mainData.extraTaka / 109)} ডলার জমা দিতে হবে
                  </h1>
                </label>
                <select
                  value={mainData.paymentWay}
                  onChange={paymentWayDecision}
                  id="paymentWay"
                  name="paymentWay"
                  className="bg-white my-4 p-4 box-border w-full rounded-3xl mb-10 md:mb-[100px] text-sm md:text-2xl"
                >
                  <option value="none">আপনার পেমেন্ট মেথড নির্বাচন করুন</option>

                  <option value="bkash-merchant">
                    bkash: 01791 845 122 (Merchant)
                  </option>

                  <option value="bKash-personal">
                    bKash: 01674 04 05 02 (Personal)
                  </option>

                  <option value="nagad-personal">
                    Nagad: 01674 04 05 02 (Personal)
                  </option>
                  <option value="rocket-personal">
                    Rocket:01674 04 05 023 (Personal)
                  </option>
                  <option value="paypal">
                    PayPal: internetmadrasa@outlook.com
                  </option>

                  <option value="dbbl-bank">
                    DBBL Bank Account No. 126 101 56434
                  </option>
                  <option value="ebl-bank">
                    EBL Bank Account No. 170 145 000 1520
                  </option>
                </select>
              </>
            )}

            {extraPayment && showPayment ? (
              <ShowPaymentDetails account={mainData.paymentWay} />
            ) : (
              ""
            )}

            {extraPayment && (
              <>
                <label htmlFor="transactionalID">
                  <h1 className="w-full mx-auto text-sm md:text-3xl text-center my-2">
                    আপনার ট্রানজ্যাকশন কোডটি লিখুন
                  </h1>
                </label>
                <input
                  onChange={transactionDecision}
                  value={mainData.transactionID}
                  type="text"
                  id="transactionalID"
                  name="transactionalID"
                  className="bg-white my-4 p-4 box-border w-full rounded-3xl mb-10 md:mb-[100px]"
                  placeholder="213C34OP54ST5GJI5"
                ></input>
              </>
            )}

            {extraPayment && (
              <>
                {" "}
                <label htmlFor="accountno">
                  <h1 className="w-full mx-auto text-sm md:text-3xl text-center my-2">
                    আপনি যেখান থেকে টাকা দিয়েছেন, মোবাইল ব্যাংকিং হলে প্রেরকের
                    নাম্বার, ব্যাংক হলে প্রেরকের ব্যাংক একাউন্ট নাম্বার, পেপাল
                    হলে প্রেরকের ইমেইল আইডি লিখুন
                  </h1>
                </label>
                <input
                  onChange={accountNoDecision}
                  value={mainData.accountNo}
                  type="text"
                  id="accountno"
                  name="accountno"
                  className="bg-white my-4 p-4 box-border w-full rounded-3xl mb-10 md:mb-[100px]"
                  placeholder="+8801746668432"
                ></input>
              </>
            )}

            {extraPayment && (
              <>
                <label htmlFor="payment">
                  <h1 className="w-full mx-auto text-sm md:text-3xl text-center mb-2">
                    আপনার জমাকৃত অর্থের পরিমাণ লিখুন
                  </h1>
                </label>
                <input
                  onChange={amountPaidDecision}
                  value={mainData.amountPaid}
                  type="number"
                  id="payment"
                  name="payment"
                  className="bg-white my-4 p-4 box-border w-full rounded-3xl mb-10 md:mb-[100px]"
                  placeholder="1530 Taka, 30 Dollar"
                ></input>
              </>
            )}

            <div className="submitSection">
              {showbtn && (
                <button
                  onClick={submitData}
                  className="bg-blue-500 hover:bg-blue-900 text-white text-lg font-bold mt-6 rounded-3xl w-full overflow-hidden"
                >
                  {enroll ? (
                    <p className="flex justify-between">
                      <span className="bg-pink-500 w-1/3 py-2 px-2">
                        (ক্লাস পরিবর্তন)
                      </span>{" "}
                      <span className="w-2/3 py-2 px-2 relative">
                        ক্লাস পরিবর্তন রিকোয়েস্ট দিন
                        <span className="absolute right-1 top-2">
                          <IoIosArrowDroprightCircle className="text-3xl" />
                        </span>
                      </span>
                    </p>
                  ) : (
                    <div className="p-5">ক্লাস পরিবর্তন রিকোয়েস্ট দিন</div>
                  )}
                </button>
              )}
              {!showbtn && (
                <div className="bg-blue-500 text-white text-xl font-bold mt-6 rounded-3xl w-full overflow-hidden p-3">
                  <input
                    onChange={showButtonLogic}
                    className="w-full rounded-2xl p-2 text-center text-slate-900"
                    type="password"
                    placeholder="পরিবর্তন করতে পাসওয়ার্ড দিন"
                  ></input>
                </div>
              )}
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default SwitchDesign;
