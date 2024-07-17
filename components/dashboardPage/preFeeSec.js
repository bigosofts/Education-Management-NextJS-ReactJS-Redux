"use client";
import { useState, useEffect, useRef } from "react";
import Image from "next/image";

import ShowPaymentDetails from "./showpaymentDetail";
import { useSearchParams } from "next/navigation";
import { IoIosArrowDroprightCircle } from "react-icons/io";

import {
  createData,
  updateData as upDatePayment,
} from "@/apiservices/paymentapiservices";
import { updateData } from "@/apiservices/studentapiservices";
import mytoast from "../toast/toast";
import { sendMail } from "@/apiservices/sendMailapiservices";
import { useSelector } from "react-redux";

function PreFeeSection({ profile }) {
  const coursesData = useSelector((state) => state.courses.courses);
  const semesterData = useSelector((state) => state.djs.semesters);
  const departmentData = useSelector((state) => state.djs.departments);
  const jamatData = useSelector((state) => state.djs.jamats);
  const paymentData2 = useSelector((state) => state.djs.payments);

  const searchParams = useSearchParams();
  const UnpaidRef = useRef();

  const enroll = searchParams.get("enroll");
  const [Unpaid, setUnpaid] = useState();
  const [money, setMoney] = useState();
  const [course, setCourse] = useState();
  const [department, setDepartment] = useState();
  const [jamat, setJamat] = useState();
  const [realJamat, setRealJamat] = useState();
  const [semester, setSemester] = useState();
  const [extrabatch, setExtraBatch] = useState();
  const [oSemester, setOSemester] = useState();

  const [batch, setBatch] = useState([]);

  //change when every new class published
  function batchChoice(course) {
    if (course == "alemalema") {
      setBatch([
        {
          name: "Batch-03-08-2024 (ক্লাস শুরু আগামী ৩ আগস্ট, ২০২৪)",
          value: "batch-20240803",
          startDate: "2024-08-03",
        },
      ]);
    } else if (course == "schoolalemalema") {
      setBatch([
        {
          name: "Batch-13-07-2024 (১৩ জুলাই, ২০২৪)",
          value: "batch-20240713",
          startDate: new Date().toISOString(),
        },
      ]);
    } else if (course == "prealemalema") {
      setBatch([
        {
          name: "Batch-13-07-2024 (১৩ জুলাই, ২০২৪)",
          value: "batch-20240713",
          startDate: new Date().toISOString(),
        },
      ]);
    } else if (course == "abacus_student") {
      setBatch([
        {
          name: "Batch-05-06-2024 (ক্লাস ৫ জুন, ২০২৪ থেকে চলমান)",
          value: "batch-20240605",
          startDate: new Date().toISOString(),
        },
      ]);
    } else if (course == "hifjulquran") {
      setBatch([
        {
          name: "Batch-20-04-2024",
          value: "batch-20240420",
          startDate: new Date().toISOString(),
        },
      ]);
    } else if (course == "abacus_teacher") {
      setBatch([]);
    } else if (course == "shishumaktab") {
      setBatch([
        {
          name: "Batch-20-04-2024",
          value: "batch-20240420",
          startDate: new Date().toISOString(),
        },
      ]);
    } else if (course == "farzeayinclass") {
      setBatch([
        {
          name: "Batch-13-07-2024 (১৩ জুলাই, ২০২৪ থেকে চলমান)",
          value: "batch-20240713",
          startDate: new Date().toISOString(),
        },
      ]);
    } else if (course == "farzeayinnajera") {
      setBatch([
        {
          name: "Batch-20-04-2024",
          value: "batch-20240420",
          startDate: new Date().toISOString(),
        },
      ]);
    } else if (course == "ezranahusorof") {
      setBatch([]);
    } else if (course == "urdu") {
      setBatch([]);
    } else if (course == "ramadanquranulkarim") {
      setBatch([]);
    }
  }

  //change area done
  let dollarPerTaka = 117;
  const [extraJamat, setExtraJamat] = useState(false);
  const [extraSemester, setExtraSemester] = useState(false);
  const [extraTransaction, setExtraTransaction] = useState(false);
  const [showPayment, setShowPayment] = useState(false);
  const [currencyrate, setCurrencyrate] = useState();

  const [mainData, setMainData] = useState({
    currency: "",
    course: "",
    department: "none",
    semester: "none",
    jamat: "none",
    amountPaid: "none",
    transactionID: "none",
    accountNo: "none",
    paymentWay: "none",
    batch: "",
    startDate: "",
  });

  function niceDate(date) {
    var isoTime = date;
    var date = new Date(isoTime);

    var options = {
      day: "numeric",
      month: "long",
      year: "numeric",
    };

    var formattedDate = date.toLocaleDateString("en-US", options);
    return formattedDate;
  }

  function transactionDecision(e) {
    e.preventDefault();
    const transactionID = e.target.value;
    setMainData((prev) => ({
      ...prev,
      transactionID: transactionID,
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

  function currencyDecision(e) {
    e.preventDefault();
    const currency = e.target.value;
    setMainData((prev) => ({
      ...prev,
      currency: currency,
    }));
  }

  function changeDepartment(name1) {
    if (name1 == "none") {
      return "";
    } else {
      const ID = department.filter((item) => {
        if (item.name == name1) {
          return item.ID;
        }
      });

      return ID[0].ID;
    }
  }

  function classDecision(e) {
    e.preventDefault();
    const classes = e.target.value;
    function PriceDecision(coursePriceData) {
      if (course) {
        if (
          profile.data.userDetails.countryName == "Bangladesh" ||
          profile.data.userDetails.countryName == "India"
        ) {
          if (coursePriceData) {
            let [dObj] = course.filter((item) => {
              if (item.code == coursePriceData) {
                return item.price;
              }
            });

            if (dObj) {
              if (currencyrate) {
                let tkC = dObj.price.registration.tk;
                let usC = Math.round(dObj.price.registration.tk / currencyrate);

                let mtkC = dObj.price.monthly.tk;
                let musC = Math.round(dObj.price.monthly.tk / currencyrate);

                setMoney({ tk: tkC, us: usC, mtk: mtkC, mus: musC });
              }
            }
          }
        } else {
          if (coursePriceData) {
            let [dObj] = course.filter((item) => {
              if (item.code == coursePriceData) {
                return item.price;
              }
            });

            if (dObj) {
              if (currencyrate) {
                let tkC = Math.round(dObj.price.registration.us * currencyrate);
                let usC = dObj.price.registration.us;
                let mtkC = Math.round(dObj.price.monthly.us * currencyrate);
                let musC = dObj.price.monthly.us;

                setMoney({ tk: tkC, us: usC, mtk: mtkC, mus: musC });
              }
            }
          }
        }
      }
    }
    PriceDecision(classes);

    batchChoice(classes);

    setMainData((prev) => ({
      ...prev,
      course: classes,
      department: changeDepartment(classes),
    }));
    if (classes == "alemalema") {
      setExtraJamat(true);
      setExtraTransaction(false);
      setExtraBatch(true);
      setJamat(realJamat && realJamat);
      setSemester(
        (prev) =>
          prev &&
          prev.filter(
            (item) => !item.ID.includes("school") && !item.ID.includes("pre")
          )
      );
    } else if (classes == "schoolalemalema") {
      setExtraJamat(true);
      setExtraTransaction(false);
      setExtraBatch(true);
      setJamat(realJamat && realJamat);

      setSemester(
        (prev) => prev && prev.filter((item) => item.ID.includes("school"))
      );
    } else if (classes == "prealemalema") {
      setExtraJamat(true);
      setExtraTransaction(false);
      setExtraBatch(true);

      setSemester(
        (prev) => prev && prev.filter((item) => item.ID.includes("pre"))
      );

      setJamat(realJamat && realJamat.filter((item) => item.ID == "jamat1"));
    } else if (classes == "abacus_student") {
      setMainData((prev) => ({
        ...prev,
        amountPaid: "none",
        transactionID: "none",
        accountNo: "none",
        paymentWay: "none",
      }));
      setExtraJamat(false);
      setExtraBatch(true);
      setMainData((prev) => ({
        ...prev,
        jamat: "none",
      }));
      setExtraSemester(false);

      setMainData((prev) => ({
        ...prev,
        semester: "none",
      }));
      setExtraTransaction(false);
    } else if (classes == "abacus_teacher") {
      setMainData((prev) => ({
        ...prev,
        amountPaid: "none",
        transactionID: "none",
        accountNo: "none",
        paymentWay: "none",
      }));
      setExtraBatch(true);
      setExtraJamat(false);
      setMainData((prev) => ({
        ...prev,
        jamat: "none",
      }));
      setExtraSemester(false);

      setMainData((prev) => ({
        ...prev,
        semester: "none",
      }));
      setExtraTransaction(false);
    } else if (classes == "ramadanquranulkarim") {
      setMainData((prev) => ({
        ...prev,
        amountPaid: "none",
        transactionID: "none",
        accountNo: "none",
        paymentWay: "none",
      }));
      setExtraBatch(true);
      setExtraJamat(false);
      setMainData((prev) => ({
        ...prev,
        jamat: "none",
      }));
      setExtraSemester(false);

      setMainData((prev) => ({
        ...prev,
        semester: "none",
      }));
      setExtraTransaction(false);
    } else if (classes == "none") {
      setExtraJamat(false);
      setMainData((prev) => ({
        ...prev,
        jamat: "none",
      }));
      setExtraSemester(false);

      setMainData((prev) => ({
        ...prev,
        semester: "none",
      }));
      setExtraTransaction(false);
      setSemester(
        semesterData.map((item) => {
          return { ID: item.semesterID, name: item.semesterName };
        })
      );
    } else {
      setExtraTransaction(true);
      setExtraJamat(false);
      setExtraSemester(false);
      setExtraBatch(true);
    }
  }

  function jamatDecision(e) {
    e.preventDefault();
    const jamat = e.target.value;

    setMainData((prev) => ({
      ...prev,
      jamat: jamat,
    }));
    if (jamat !== "none") {
      setExtraSemester(true);
    } else {
      setExtraSemester(false);

      setMainData((prev) => ({
        ...prev,
        semester: "none",
      }));
      setExtraTransaction(false);
    }
  }

  function semseterDecision(e) {
    e.preventDefault();
    const semester = e.target.value;

    setMainData((prev) => ({
      ...prev,
      semester: semester,
    }));
    if (semester !== "none") {
      setExtraTransaction(true);
    } else {
      setExtraTransaction(false);
    }
  }

  function batchChangeDecision(e) {
    e.preventDefault();
    const batch = JSON.parse(e.target.value).batch;

    const startDate = JSON.parse(e.target.value).startDate;

    setMainData((prev) => ({
      ...prev,
      batch: batch,
      startDate: startDate,
    }));
  }

  useEffect(() => {
    async function getData() {
      let course =
        coursesData.length > 0 &&
        coursesData.map((item) => {
          return {
            title: item.title,
            courseCode: item.courseCode,
            coursePrice: item.coursePrice,
          };
        });

      let department = departmentData;

      let jamat = jamatData;

      let semester = semesterData;

      let paymentData = paymentData2;

      if (
        course.length > 0 &&
        department.length > 0 &&
        jamat.length > 0 &&
        semester.length > 0
      ) {
        setCourse(
          course
            .filter(
              (item) =>
                item.courseCode != "abacus_teacher" &&
                item.courseCode != "ezranahusorof" &&
                item.courseCode != "urdu" &&
                item.courseCode != "ramadanquranulkarim" &&
                item.courseCode != "farzeayinclass"
            )
            .map((item) => {
              return {
                title: item.title.bn,
                code: item.courseCode,
                price: item.coursePrice,
              };
            })
        );

        setCurrencyrate(dollarPerTaka);

        function changeDepartment(name1) {
          const ID = department.filter((item) => {
            if (item.departmentName == name1) {
              return item.departmentID;
            }
          });

          return ID[0].departmentID;
        }

        setSemester(
          semester.map((item) => {
            return { ID: item.semesterID, name: item.semesterName };
          })
        );

        setJamat(
          jamat.map((item) => {
            return { ID: item.jamatID, name: item.jamatName };
          })
        );

        setRealJamat(
          jamat.map((item) => {
            return { ID: item.jamatID, name: item.jamatName };
          })
        );

        if (enroll) {
          setMainData((prev) => ({
            ...prev,
            course: enroll,
            department: changeDepartment(enroll),
          }));
          PriceDecision(enroll);
          batchChoice(enroll);
          if (enroll == "alemalema") {
            setExtraJamat(true);
            setExtraBatch(true);
            setSemester(
              (prev) =>
                prev &&
                prev.filter(
                  (item) =>
                    !item.ID.includes("school") && !item.ID.includes("pre")
                )
            );
          } else if (enroll == "schoolalemalema") {
            setExtraJamat(true);
            setExtraBatch(true);

            setSemester(
              (prev) =>
                prev && prev.filter((item) => item.ID.includes("school"))
            );
          } else if (enroll == "prealemalema") {
            setExtraJamat(true);
            setExtraBatch(true);

            setSemester(
              (prev) => prev && prev.filter((item) => item.ID.includes("pre"))
            );
            setJamat(
              jamat
                .filter((item) => item.jamatID == "jamat1")
                .map((item) => {
                  return { ID: item.jamatID, name: item.jamatName };
                })
            );
          } else {
            setExtraBatch(true);
            setExtraTransaction(true);
          }
        }

        function PriceDecision(coursePriceData) {
          if (course) {
            if (
              profile.data.userDetails.countryName == "Bangladesh" ||
              profile.data.userDetails.countryName == "India"
            ) {
              if (coursePriceData) {
                let [dObj] = course.filter((item) => {
                  if (item.courseCode == coursePriceData) {
                    return item;
                  }
                });

                if (dObj) {
                  let tkC = dObj.coursePrice.registration.tk;
                  let usC = Math.round(
                    dObj.coursePrice.registration.tk / dollarPerTaka
                  );
                  let mtkC = dObj.coursePrice.monthly.tk;
                  let musC = Math.round(
                    dObj.coursePrice.monthly.tk / dollarPerTaka
                  );

                  setMoney({ tk: tkC, us: usC, mtk: mtkC, mus: musC });
                }
              }
            } else {
              if (coursePriceData) {
                let [dObj] = course.filter((item) => {
                  if (item.courseCode == coursePriceData) {
                    return item;
                  }
                });

                if (dObj) {
                  let tkC = Math.round(
                    dObj.coursePrice.registration.us * dollarPerTaka
                  );

                  let usC = dObj.coursePrice.registration.us;
                  let mtkC = Math.round(
                    dObj.coursePrice.monthly.us * dollarPerTaka
                  );

                  let musC = dObj.coursePrice.monthly.us;
                  setMoney({ tk: tkC, us: usC, mtk: mtkC, mus: musC });
                }
              }
            }
          }
        }

        setDepartment(
          department.map((item) => {
            return { ID: item.departmentID, name: item.departmentName };
          })
        );

        setUnpaid(
          paymentData.filter((item) => {
            if (
              item.paymentID ==
              `${profile.data.userDetails.paymentStatus.paymentID}`
            )
              return item;
          })
        );
      }
    }
    getData();
  }, [coursesData, semesterData, departmentData, jamatData, paymentData2]);

  function oneMonthLaterToDesiredDate(dateString) {
    let desiredDate = new Date(dateString);
    var desiredMonth = desiredDate.getMonth();
    var desiredYear = desiredDate.getFullYear();

    var nextMonth = desiredMonth + 1;
    var nextYear = desiredYear;

    if (nextMonth > 11) {
      nextMonth = 0; // January (0-indexed)
      nextYear++;
    }

    // Calculate one month later date
    var oneMonthLater = new Date(
      nextYear,
      nextMonth,
      desiredDate.getDate(),
      desiredDate.getHours(),
      desiredDate.getMinutes(),
      desiredDate.getSeconds(),
      desiredDate.getMilliseconds()
    );

    // Check if month overflow occurred
    if (oneMonthLater.getMonth() !== nextMonth) {
      // Overflow, set to the last day of the previous month
      oneMonthLater = new Date(
        nextYear,
        nextMonth + 1,
        0,
        desiredDate.getHours(),
        desiredDate.getMinutes(),
        desiredDate.getSeconds(),
        desiredDate.getMilliseconds()
      );
    }

    return oneMonthLater;
  }

  async function submitData(e) {
    e.preventDefault();
    if (
      mainData.currency &&
      (mainData.course == "alemalema" ||
        mainData.course == "schoolalemalema" ||
        mainData.course == "prealemalema") &&
      mainData.jamat != "none" &&
      mainData.jamat != "" &&
      mainData.semester != "none" &&
      mainData.semester != "" &&
      mainData.department != "none" &&
      mainData.department != "" &&
      mainData.amountPaid != "none" &&
      mainData.amountPaid != "" &&
      mainData.transactionID != "none" &&
      mainData.transactionID != "" &&
      mainData.accountNo != "none" &&
      mainData.accountNo != "" &&
      mainData.paymentWay != "none" &&
      mainData.paymentWay != "" &&
      mainData.batch != ""
    ) {
      let currentDate = new Date();
      let oneYearLater = new Date(currentDate);

      oneYearLater.setFullYear(currentDate.getFullYear() + 1);

      function returnOneYear(date) {
        let currentDate = new Date(date);
        let oneYearLater = new Date(currentDate);
        oneYearLater.setFullYear(currentDate.getFullYear() + 1);

        return oneYearLater;
      }
      if (profile.data.userDetails.studentCourseCode.length < 1) {
        const resPayment = await createData({
          paymentID: "payment-" + profile.data.userName,
          paymentCurrency: mainData.currency,
          admissionDate: new Date(Date.now()).toISOString(),

          admissionPrice: money
            ? { tk: money.tk, us: money.us }
            : { tk: "", us: "" },
          monthlyPaymentPrice: money
            ? { tk: money.mtk, us: money.mus }
            : { tk: "", us: "" },
          admissionPaymentHistory: [
            {
              Date: new Date(Date.now()).toISOString(),
              PaymentStatus: false,
              Price: mainData.amountPaid,
              currency: mainData.currency,
              transactionID: mainData.transactionID,
              senderNo: mainData.accountNo,
              paymentWay: mainData.paymentWay,
              nextAdmissionDate: new Date(oneYearLater),
            },
            {
              Date: new Date(oneYearLater),
              PaymentStatus: false,
              Price: "",
              currency: "",
              transactionID: "",
              senderNo: "",
              paymentWay: "",
              nextAdmissionDate: undefined,
            },
          ],
          monthlyPaymentHistory: [
            {
              Date: mainData.startDate && new Date(mainData.startDate),
              PaymentStatus: false,
              Price: "",
              currency: "",
              transactionID: "",
              senderNo: "",
              paymentWay: "",
              nextMonthlyDate:
                mainData.startDate &&
                oneMonthLaterToDesiredDate(mainData.startDate).toISOString(),
            },
            {
              Date:
                mainData.startDate &&
                oneMonthLaterToDesiredDate(mainData.startDate).toISOString(),
              PaymentStatus: false,
              Price: "",
              currency: "",
              transactionID: "",
              senderNo: "",
              paymentWay: "",
              nextMonthlyDate: undefined,
            },
          ],
          activeStatus: "active",
        });
        if (resPayment.status == "Alhamdulillah") {
          mytoast.success(
            "Your Payment Request is Accepted. Please Wait for the verificiation"
          );
          const studentCourseCode = {
            code: mainData.course,
            startedDate: new Date(Date.now()).toISOString(),
            endDate: null,
            status: "inactive",
          };

          const studentDepartment = {
            code: mainData.department,
            startedDate: new Date(Date.now()).toISOString(),
            endDate: null,
            status: "inactive",
          };

          const studentJamatCode = {
            code: mainData.jamat,
            startedDate: new Date(Date.now()).toISOString(),
            endDate: null,
            status: "inactive",
          };

          const studentSemester = {
            code: mainData.semester,
            startedDate: new Date(Date.now()).toISOString(),
            endDate: null,
            status: "inactive",
          };

          const resStudent = await updateData(
            profile.data.userDetails.userName,
            profile.data.userDetails.firstName.en,
            profile.data.userDetails.firstName.bn,
            profile.data.userDetails.lastName.en,
            profile.data.userDetails.lastName.bn,
            profile.data.userDetails.nidNumber,
            profile.data.userDetails.birthRegNumber,
            profile.data.userDetails.fatherName.en,
            profile.data.userDetails.fatherName.bn,
            profile.data.userDetails.emailAddress,
            undefined,
            profile.data.userDetails.mobileNumber,
            profile.data.userDetails.occupation,
            studentCourseCode,
            mainData.jamat ? studentJamatCode : undefined,
            profile.data.userDetails.gender,
            profile.data.userDetails.dateOfBirth,
            profile.data.userDetails.countryName,
            profile.data.userDetails.fullPresentAddress,
            profile.data.userDetails.fullPermanentAddress,
            new Date(Date.now()).toISOString(),
            profile.data.userDetails.admissionDate,
            profile.data.userDetails.studentMotive,
            profile.data.userDetails.details,
            {
              addmissionDueStatus: true,
              consequentDueStatus: true,
              paymentID: resPayment.data.paymentID,
            },
            profile.data.userDetails.userRole,
            profile.data.userDetails.extracurricular,
            profile.data.userDetails.activeStatus,
            profile.data.userDetails._id,
            mainData.department ? studentDepartment : undefined,
            mainData.semester ? studentSemester : undefined,
            mainData.batch ? mainData.batch : undefined
          );
          if (resStudent.status == "Alhamdulillah") {
            mytoast.info("If verification Delays, Do not forget to reach us");

            // sendMail(
            //   profile.data.userDetails.emailAddress,
            //   "Payment request has been Recieved",
            //   `সুপ্রিয় শিক্ষার্থী ${profile.data.userDetails.firstName.en} ${profile.data.userDetails.lastName.en}, আপনার পেমেন্ট রিকোয়েস্টটি গ্রহণ করা হয়েছে, অনুগ্রহপূর্বক অপেক্ষা করুন। আপনার একাউন্ট ${profile.data.userDetails.userName} টি এপ্রুভ হলে আরেকটি কনফার্মেশন মেইল দেয়া হবে ইং শা আল্লাহ`,
            //   `<h1>সুপ্রিয় শিক্ষার্থী ${profile.data.userDetails.firstName.en} ${profile.data.userDetails.lastName.en},<br/><br/> আপনার পেমেন্ট রিকোয়েস্টটি গ্রহণ করা হয়েছে, অনুগ্রহপূর্বক অপেক্ষা করুন। আপনার একাউন্ট ${profile.data.userDetails.userName} টি এপ্রুভ হলে আরেকটি কনফার্মেশন মেইল দেয়া হবে ইং শা আল্লাহ</h1>`
            // );

            sendMail(
              [
                profile.data.userDetails.emailAddress,
                "internetmadrasa@outlook.com",
                "abdullah.limonbau@gmail.com",
              ],
              "Payment request has been Recieved",
              `সুপ্রিয় শিক্ষার্থী ${profile.data.userDetails.firstName.en} ${
                profile.data.userDetails.lastName.en
              }, আপনার পেমেন্ট রিকোয়েস্টটি গ্রহণ করা হয়েছে, অনুগ্রহপূর্বক অপেক্ষা করুন। আপনার একাউন্ট ${
                profile.data.userDetails.userName
              } টি এপ্রুভ হলে আরেকটি কনফার্মেশন মেইল দেয়া হবে ইং শা আল্লাহ \
              একাউন্ট আইডিঃ ${profile.data.userDetails.userName}, \
              একাউন্ট ইমেইলঃ ${profile.data.userDetails.emailAddress}, \
              মোবাইল নাম্বারঃ ${profile.data.userDetails.mobileNumber}, \
              কোর্সের নামঃ ${studentCourseCode.code}, \
              স্ট্যাটাসঃ ${studentCourseCode.status}, \
              পেমেন্টের তারিখঃ ${new Date(Date.now()).toISOString()}, \
              পেমেন্ট স্ট্যাটাসঃ false, \
              প্রাইসঃ ${mainData.amountPaid}, \
              কারেন্সিঃ  ${mainData.currency}, \
              ট্র্যান্সাকশন আইডিঃ  ${mainData.transactionID}, \
              সেন্ডার নাম্বারঃ ${mainData.accountNo}, \
              পেমেন্টের মাধ্যমঃ ${mainData.paymentWay}`,

              `<p>সুপ্রিয় শিক্ষার্থী ${profile.data.userDetails.firstName.en} ${
                profile.data.userDetails.lastName.en
              }, আপনার পেমেন্ট রিকোয়েস্টটি গ্রহণ করা হয়েছে, অনুগ্রহপূর্বক অপেক্ষা করুন। আপনার একাউন্ট ${
                profile.data.userDetails.userName
              } টি এপ্রুভ হলে আরেকটি কনফার্মেশন মেইল দেয়া হবে ইং শা আল্লাহ </p>
              <p>একাউন্ট আইডিঃ ${profile.data.userDetails.userName}</p>
              <p>একাউন্ট ইমেইলঃ ${profile.data.userDetails.emailAddress}</p>
              <p>মোবাইল নাম্বারঃ ${profile.data.userDetails.mobileNumber}</p>
              <p>কোর্সের নামঃ ${studentCourseCode.code}</p>
              <p>স্ট্যাটাসঃ ${studentCourseCode.status}</p>
              <p>পেমেন্টের তারিখঃ ${new Date(Date.now()).toISOString()}</p>
              <p>পেমেন্ট স্ট্যাটাসঃ false</p>
              <p>প্রাইসঃ ${mainData.amountPaid}</p>
              <p>কারেন্সিঃ  ${mainData.currency}</p>
              <p>ট্র্যান্সাকশন আইডিঃ  ${mainData.transactionID}</p>
              <p>সেন্ডার নাম্বারঃ ${mainData.accountNo}</p>
              <p>পেমেন্টের মাধ্যমঃ ${mainData.paymentWay}</p>`
            );

            const hardRefresh = () => {
              if (typeof window !== "undefined") {
                window.location.href = `/content/purchase-confirmation/${mainData.course}?username=${profile.data.userDetails.userName}&usd=${money.us}`;
              }
            };
            hardRefresh();
          }
        }
      } else {
        let currentAdmissionPaymentHistory =
          Unpaid[0].admissionPaymentHistory.map((item) => {
            if (item._id == UnpaidRef.current.value) {
              return {
                Date: item.Date,
                PaymentStatus: false,
                Price: mainData.amountPaid,
                currency: mainData.currency,
                transactionID: mainData.transactionID,
                senderNo: mainData.accountNo,
                paymentWay: mainData.paymentWay,
                nextAdmissionDate: returnOneYear(item.Date),
              };
            } else {
              return item;
            }
          });

        currentAdmissionPaymentHistory.push({
          Date: returnOneYear(
            Unpaid[0].admissionPaymentHistory[
              Unpaid[0].admissionPaymentHistory.length - 1
            ].Date
          ),
          PaymentStatus: false,
          Price: "",
          currency: "",
          transactionID: "",
          senderNo: "",
          paymentWay: "",
          nextAdmissionDate: undefined,
        });

        let CurrentID = Unpaid[0]._id;

        const resPayment = await upDatePayment({
          paymentID: "payment-" + profile.data.userName,
          paymentCurrency: undefined,
          admissionDate: undefined,

          admissionPrice: money
            ? { tk: money.tk, us: money.us }
            : { tk: "", us: "" },
          monthlyPaymentPrice: money
            ? { tk: money.mtk, us: money.mus }
            : { tk: "", us: "" },
          admissionPaymentHistory: currentAdmissionPaymentHistory,
          monthlyPaymentHistory: undefined,
          activeStatus: "active",
          idValue: CurrentID,
        });

        if (resPayment.status == "Alhamdulillah") {
          mytoast.success(
            "Your Payment Request is Accepted. Please Wait for the verificiation"
          );

          let studentCourseCode = profile.data.userDetails.studentCourseCode;
          const pushObjCourse = {
            code: mainData.course,
            startedDate: new Date(Date.now()).toISOString(),
            endDate: null,
            status: "inactive",
          };
          let studentCourseCodeTwoFinal = [...studentCourseCode];
          studentCourseCodeTwoFinal.push(pushObjCourse);

          let studentDepartment = profile.data.userDetails.studentDepartment;
          const pushObjDepartment = {
            code: mainData.department,
            startedDate: new Date(Date.now()).toISOString(),
            endDate: null,
            status: "inactive",
          };
          let studentDepartmentTwoFinal = [...studentDepartment];
          studentDepartmentTwoFinal.push(pushObjDepartment);

          let studentJamatCode = profile.data.userDetails.studentJamatCode;
          const pushObjJamat = {
            code: mainData.jamat,
            startedDate: new Date(Date.now()).toISOString(),
            endDate: null,
            status: "inactive",
          };
          let studentJamatCodeTwoFinal = [...studentJamatCode];
          studentJamatCodeTwoFinal.push(pushObjJamat);

          let studentSemester = profile.data.userDetails.studentSemester;
          const pushObjSemester = {
            code: mainData.semester,
            startedDate: new Date(Date.now()).toISOString(),
            endDate: null,
            status: "inactive",
          };
          let studentSemesterTwoFinal = [...studentSemester];
          studentSemesterTwoFinal.push(pushObjSemester);

          const resStudent = await updateData(
            profile.data.userDetails.userName,
            profile.data.userDetails.firstName.en,
            profile.data.userDetails.firstName.bn,
            profile.data.userDetails.lastName.en,
            profile.data.userDetails.lastName.bn,
            profile.data.userDetails.nidNumber,
            profile.data.userDetails.birthRegNumber,
            profile.data.userDetails.fatherName.en,
            profile.data.userDetails.fatherName.bn,
            profile.data.userDetails.emailAddress,
            undefined,
            profile.data.userDetails.mobileNumber,
            profile.data.userDetails.occupation,
            studentCourseCodeTwoFinal,
            mainData.jamat ? studentJamatCodeTwoFinal : undefined,
            profile.data.userDetails.gender,
            profile.data.userDetails.dateOfBirth,
            profile.data.userDetails.countryName,
            profile.data.userDetails.fullPresentAddress,
            profile.data.userDetails.fullPermanentAddress,
            profile.data.userDetails.admissionSession,
            profile.data.userDetails.admissionDate,
            profile.data.userDetails.studentMotive,
            profile.data.userDetails.details,
            {
              addmissionDueStatus: true,
              consequentDueStatus: true,
              paymentID: profile.data.userDetails.paymentStatus.paymentID,
            },
            profile.data.userDetails.userRole,
            profile.data.userDetails.extracurricular,
            profile.data.userDetails.activeStatus,
            profile.data.userDetails._id,
            mainData.department ? studentDepartmentTwoFinal : undefined,
            mainData.semester ? studentSemesterTwoFinal : undefined,
            mainData.batch ? mainData.batch : undefined
          );
          if (resStudent.status == "Alhamdulillah") {
            mytoast.info("If verification Delays, Do not forget to reach us");

            // sendMail(
            //   profile.data.userDetails.emailAddress,
            //   "Payment request has been Recieved",
            //   `সুপ্রিয় শিক্ষার্থী ${profile.data.userDetails.firstName.en} ${profile.data.userDetails.lastName.en}, আপনার পেমেন্ট রিকোয়েস্টটি গ্রহণ করা হয়েছে, অনুগ্রহপূর্বক অপেক্ষা করুন। আপনার একাউন্ট ${profile.data.userDetails.userName} টি এপ্রুভ হলে আরেকটি কনফার্মেশন মেইল দেয়া হবে ইং শা আল্লাহ`,
            //   `<h1>সুপ্রিয় শিক্ষার্থী ${profile.data.userDetails.firstName.en} ${profile.data.userDetails.lastName.en},<br/><br/> আপনার পেমেন্ট রিকোয়েস্টটি গ্রহণ করা হয়েছে, অনুগ্রহপূর্বক অপেক্ষা করুন। আপনার একাউন্ট ${profile.data.userDetails.userName} টি এপ্রুভ হলে আরেকটি কনফার্মেশন মেইল দেয়া হবে ইং শা আল্লাহ</h1>`
            // );

            sendMail(
              [
                profile.data.userDetails.emailAddress,
                "internetmadrasa@outlook.com",
                "abdullah.limonbau@gmail.com",
              ],
              "Payment request has been Recieved",
              `সুপ্রিয় শিক্ষার্থী ${profile.data.userDetails.firstName.en} ${
                profile.data.userDetails.lastName.en
              }, আপনার পেমেন্ট রিকোয়েস্টটি গ্রহণ করা হয়েছে, অনুগ্রহপূর্বক অপেক্ষা করুন। আপনার একাউন্ট ${
                profile.data.userDetails.userName
              } টি এপ্রুভ হলে আরেকটি কনফার্মেশন মেইল দেয়া হবে ইং শা আল্লাহ \
              একাউন্ট আইডিঃ ${profile.data.userDetails.userName}, \
              একাউন্ট ইমেইলঃ ${profile.data.userDetails.emailAddress}, \
              মোবাইল নাম্বারঃ ${profile.data.userDetails.mobileNumber}, \
              কোর্সের নামঃ ${
                studentCourseCodeTwoFinal[studentCourseCodeTwoFinal.length - 1]
                  .code
              }, \
              স্ট্যাটাসঃ ${
                studentCourseCodeTwoFinal[studentCourseCodeTwoFinal.length - 1]
                  .status
              }, \
              পেমেন্টের তারিখঃ ${new Date(Date.now()).toISOString()}, \
              পেমেন্ট স্ট্যাটাসঃ false, \
              প্রাইসঃ ${mainData.amountPaid}, \
              কারেন্সিঃ  ${mainData.currency}, \
              ট্র্যান্সাকশন আইডিঃ  ${mainData.transactionID}, \
              সেন্ডার নাম্বারঃ ${mainData.accountNo}, \
              পেমেন্টের মাধ্যমঃ ${mainData.paymentWay}`,

              `<p>সুপ্রিয় শিক্ষার্থী ${profile.data.userDetails.firstName.en} ${
                profile.data.userDetails.lastName.en
              }, আপনার পেমেন্ট রিকোয়েস্টটি গ্রহণ করা হয়েছে, অনুগ্রহপূর্বক অপেক্ষা করুন। আপনার একাউন্ট ${
                profile.data.userDetails.userName
              } টি এপ্রুভ হলে আরেকটি কনফার্মেশন মেইল দেয়া হবে ইং শা আল্লাহ </p>
              <p>একাউন্ট আইডিঃ ${profile.data.userDetails.userName}</p>
              <p>একাউন্ট ইমেইলঃ ${profile.data.userDetails.emailAddress}</p>
              <p>মোবাইল নাম্বারঃ ${profile.data.userDetails.mobileNumber}</p>
              <p>কোর্সের নামঃ ${
                studentCourseCodeTwoFinal[studentCourseCodeTwoFinal.length - 1]
                  .code
              }</p>
              <p>স্ট্যাটাসঃ ${
                studentCourseCodeTwoFinal[studentCourseCodeTwoFinal.length - 1]
                  .status
              }</p>
              <p>পেমেন্টের তারিখঃ ${new Date(Date.now()).toISOString()}</p>
              <p>পেমেন্ট স্ট্যাটাসঃ false</p>
              <p>প্রাইসঃ ${mainData.amountPaid}</p>
              <p>কারেন্সিঃ  ${mainData.currency}</p>
              <p>ট্র্যান্সাকশন আইডিঃ  ${mainData.transactionID}</p>
              <p>সেন্ডার নাম্বারঃ ${mainData.accountNo}</p>
              <p>পেমেন্টের মাধ্যমঃ ${mainData.paymentWay}</p>`
            );

            const hardRefresh = () => {
              if (typeof window !== "undefined") {
                window.location.href = `/content/purchase-confirmation/${mainData.course}?username=${profile.data.userDetails.userName}&usd=${money.us}`;
              }
            };
            hardRefresh();
          }
        }
      }
    } else if (
      mainData.currency &&
      (mainData.course == "hifjulquran" ||
        mainData.course == "shishumaktab" ||
        mainData.course == "farzeayinnajera" ||
        mainData.course == "abacus_student") &&
      mainData.jamat == "none" &&
      mainData.semester == "none" &&
      mainData.department != "none" &&
      mainData.department != "" &&
      mainData.amountPaid != "none" &&
      mainData.amountPaid != "" &&
      mainData.transactionID != "none" &&
      mainData.transactionID != "" &&
      mainData.accountNo != "none" &&
      mainData.accountNo != "" &&
      mainData.paymentWay != "none" &&
      mainData.paymentWay != "" &&
      mainData.batch != ""
    ) {
      let currentDate = new Date();
      let oneYearLater = new Date(currentDate);

      var currentMonth = currentDate.getMonth();
      var currentYear = currentDate.getFullYear();

      var nextMonth = currentMonth + 1;
      var nextYear = currentYear;
      if (nextMonth > 11) {
        nextMonth = 0; // January (0-indexed)
        nextYear++;
      }

      var oneMonthLater = new Date(
        nextYear,
        nextMonth,
        currentDate.getDate(),
        currentDate.getHours(),
        currentDate.getMinutes(),
        currentDate.getSeconds(),
        currentDate.getMilliseconds()
      );

      oneYearLater.setFullYear(currentDate.getFullYear() + 1);

      function returnOneYear(date) {
        let currentDate = new Date(date);
        let oneYearLater = new Date(currentDate);
        oneYearLater.setFullYear(currentDate.getFullYear() + 1);

        return oneYearLater;
      }
      if (profile.data.userDetails.studentCourseCode.length < 1) {
        const resPayment = await createData({
          paymentID: "payment-" + profile.data.userName,
          paymentCurrency: mainData.currency,
          admissionDate: new Date(Date.now()).toISOString(),

          admissionPrice: money
            ? { tk: money.tk, us: money.us }
            : { tk: "", us: "" },
          monthlyPaymentPrice: money
            ? { tk: money.mtk, us: money.mus }
            : { tk: "", us: "" },
          admissionPaymentHistory: [
            {
              Date: new Date(Date.now()).toISOString(),
              PaymentStatus: false,
              Price: mainData.amountPaid,
              currency: mainData.currency,
              transactionID: mainData.transactionID,
              senderNo: mainData.accountNo,
              paymentWay: mainData.paymentWay,
              nextAdmissionDate: new Date(oneYearLater),
            },
            {
              Date: new Date(oneYearLater),
              PaymentStatus: false,
              Price: "",
              currency: "",
              transactionID: "",
              senderNo: "",
              paymentWay: "",
              nextAdmissionDate: undefined,
            },
          ],
          monthlyPaymentHistory: [
            {
              Date: mainData.startDate && new Date(mainData.startDate),
              PaymentStatus: false,
              Price: "",
              currency: "",
              transactionID: "",
              senderNo: "",
              paymentWay: "",
              nextMonthlyDate:
                mainData.startDate &&
                oneMonthLaterToDesiredDate(mainData.startDate).toISOString(),
            },
            {
              Date:
                mainData.startDate &&
                oneMonthLaterToDesiredDate(mainData.startDate).toISOString(),
              PaymentStatus: false,
              Price: "",
              currency: "",
              transactionID: "",
              senderNo: "",
              paymentWay: "",
              nextMonthlyDate: undefined,
            },
          ],
          activeStatus: "active",
        });
        if (resPayment.status == "Alhamdulillah") {
          mytoast.success(
            "Your Payment Request is Accepted. Please Wait for the verificiation"
          );
          const studentCourseCode = {
            code: mainData.course,
            startedDate: new Date(Date.now()).toISOString(),
            endDate: null,
            status: "inactive",
          };

          const studentDepartment = {
            code: mainData.department,
            startedDate: new Date(Date.now()).toISOString(),
            endDate: null,
            status: "inactive",
          };

          const studentJamatCode = {
            code: mainData.jamat,
            startedDate: new Date(Date.now()).toISOString(),
            endDate: null,
            status: "inactive",
          };

          const studentSemester = {
            code: mainData.semester,
            startedDate: new Date(Date.now()).toISOString(),
            endDate: null,
            status: "inactive",
          };

          const resStudent = await updateData(
            profile.data.userDetails.userName,
            profile.data.userDetails.firstName.en,
            profile.data.userDetails.firstName.bn,
            profile.data.userDetails.lastName.en,
            profile.data.userDetails.lastName.bn,
            profile.data.userDetails.nidNumber,
            profile.data.userDetails.birthRegNumber,
            profile.data.userDetails.fatherName.en,
            profile.data.userDetails.fatherName.bn,
            profile.data.userDetails.emailAddress,
            undefined,
            profile.data.userDetails.mobileNumber,
            profile.data.userDetails.occupation,
            studentCourseCode,
            mainData.jamat ? studentJamatCode : undefined,
            profile.data.userDetails.gender,
            profile.data.userDetails.dateOfBirth,
            profile.data.userDetails.countryName,
            profile.data.userDetails.fullPresentAddress,
            profile.data.userDetails.fullPermanentAddress,
            new Date(Date.now()).toISOString(),
            profile.data.userDetails.admissionDate,
            profile.data.userDetails.studentMotive,
            profile.data.userDetails.details,
            {
              addmissionDueStatus: true,
              consequentDueStatus: true,
              paymentID: resPayment.data.paymentID,
            },
            profile.data.userDetails.userRole,
            profile.data.userDetails.extracurricular,
            profile.data.userDetails.activeStatus,
            profile.data.userDetails._id,
            mainData.department ? studentDepartment : undefined,
            mainData.semester ? studentSemester : undefined,
            mainData.batch ? mainData.batch : undefined
          );
          if (resStudent.status == "Alhamdulillah") {
            mytoast.info("If verification Delays, Do not forget to reach us");

            // sendMail(
            //   profile.data.userDetails.emailAddress,
            //   "Payment request has been Recieved",
            //   `সুপ্রিয় শিক্ষার্থী ${profile.data.userDetails.firstName.en} ${profile.data.userDetails.lastName.en}, আপনার পেমেন্ট রিকোয়েস্টটি গ্রহণ করা হয়েছে, অনুগ্রহপূর্বক অপেক্ষা করুন। আপনার একাউন্ট ${profile.data.userDetails.userName} টি এপ্রুভ হলে আরেকটি কনফার্মেশন মেইল দেয়া হবে ইং শা আল্লাহ`,
            //   `<h1>সুপ্রিয় শিক্ষার্থী ${profile.data.userDetails.firstName.en} ${profile.data.userDetails.lastName.en},<br/><br/> আপনার পেমেন্ট রিকোয়েস্টটি গ্রহণ করা হয়েছে, অনুগ্রহপূর্বক অপেক্ষা করুন। আপনার একাউন্ট ${profile.data.userDetails.userName} টি এপ্রুভ হলে আরেকটি কনফার্মেশন মেইল দেয়া হবে ইং শা আল্লাহ</h1>`
            // );

            sendMail(
              [
                profile.data.userDetails.emailAddress,
                "internetmadrasa@outlook.com",
                "abdullah.limonbau@gmail.com",
              ],
              "Payment request has been Recieved",
              `সুপ্রিয় শিক্ষার্থী ${profile.data.userDetails.firstName.en} ${
                profile.data.userDetails.lastName.en
              }, আপনার পেমেন্ট রিকোয়েস্টটি গ্রহণ করা হয়েছে, অনুগ্রহপূর্বক অপেক্ষা করুন। আপনার একাউন্ট ${
                profile.data.userDetails.userName
              } টি এপ্রুভ হলে আরেকটি কনফার্মেশন মেইল দেয়া হবে ইং শা আল্লাহ \
              একাউন্ট আইডিঃ ${profile.data.userDetails.userName}, \
              একাউন্ট ইমেইলঃ ${profile.data.userDetails.emailAddress}, \
              মোবাইল নাম্বারঃ ${profile.data.userDetails.mobileNumber}, \
              কোর্সের নামঃ ${studentCourseCode.code}, \
              স্ট্যাটাসঃ ${studentCourseCode.status}, \
              পেমেন্টের তারিখঃ ${new Date(Date.now()).toISOString()}, \
              পেমেন্ট স্ট্যাটাসঃ false, \
              প্রাইসঃ ${mainData.amountPaid}, \
              কারেন্সিঃ  ${mainData.currency}, \
              ট্র্যান্সাকশন আইডিঃ  ${mainData.transactionID}, \
              সেন্ডার নাম্বারঃ ${mainData.accountNo}, \
              পেমেন্টের মাধ্যমঃ ${mainData.paymentWay}`,

              `<p>সুপ্রিয় শিক্ষার্থী ${profile.data.userDetails.firstName.en} ${
                profile.data.userDetails.lastName.en
              }, আপনার পেমেন্ট রিকোয়েস্টটি গ্রহণ করা হয়েছে, অনুগ্রহপূর্বক অপেক্ষা করুন। আপনার একাউন্ট ${
                profile.data.userDetails.userName
              } টি এপ্রুভ হলে আরেকটি কনফার্মেশন মেইল দেয়া হবে ইং শা আল্লাহ </p>
              <p>একাউন্ট আইডিঃ ${profile.data.userDetails.userName}</p>
              <p>একাউন্ট ইমেইলঃ ${profile.data.userDetails.emailAddress}</p>
              <p>মোবাইল নাম্বারঃ ${profile.data.userDetails.mobileNumber}</p>
              <p>কোর্সের নামঃ ${studentCourseCode.code}</p>
              <p>স্ট্যাটাসঃ ${studentCourseCode.status}</p>
              <p>পেমেন্টের তারিখঃ ${new Date(Date.now()).toISOString()}</p>
              <p>পেমেন্ট স্ট্যাটাসঃ false</p>
              <p>প্রাইসঃ ${mainData.amountPaid}</p>
              <p>কারেন্সিঃ  ${mainData.currency}</p>
              <p>ট্র্যান্সাকশন আইডিঃ  ${mainData.transactionID}</p>
              <p>সেন্ডার নাম্বারঃ ${mainData.accountNo}</p>
              <p>পেমেন্টের মাধ্যমঃ ${mainData.paymentWay}</p>`
            );

            const hardRefresh = () => {
              if (typeof window !== "undefined") {
                window.location.href = `/content/purchase-confirmation/${mainData.course}?username=${profile.data.userDetails.userName}&usd=${money.us}`;
              }
            };
            hardRefresh();
          }
        }
      } else {
        let currentAdmissionPaymentHistory =
          Unpaid[0].admissionPaymentHistory.map((item) => {
            if (item._id == UnpaidRef.current.value) {
              return {
                Date: item.Date,
                PaymentStatus: false,
                Price: mainData.amountPaid,
                currency: mainData.currency,
                transactionID: mainData.transactionID,
                senderNo: mainData.accountNo,
                paymentWay: mainData.paymentWay,
                nextAdmissionDate: returnOneYear(item.Date),
              };
            } else {
              return item;
            }
          });

        currentAdmissionPaymentHistory.push({
          Date: returnOneYear(
            Unpaid[0].admissionPaymentHistory[
              Unpaid[0].admissionPaymentHistory.length - 1
            ].Date
          ),
          PaymentStatus: false,
          Price: "",
          currency: "",
          transactionID: "",
          senderNo: "",
          paymentWay: "",
          nextAdmissionDate: undefined,
        });

        let CurrentID = Unpaid[0]._id;

        const resPayment = await upDatePayment({
          paymentID: "payment-" + profile.data.userName,
          paymentCurrency: undefined,
          admissionDate: undefined,

          admissionPrice: money
            ? { tk: money.tk, us: money.us }
            : { tk: "", us: "" },
          monthlyPaymentPrice: money
            ? { tk: money.mtk, us: money.mus }
            : { tk: "", us: "" },
          admissionPaymentHistory: currentAdmissionPaymentHistory,
          monthlyPaymentHistory: undefined,
          activeStatus: "active",
          idValue: CurrentID,
        });

        if (resPayment.status == "Alhamdulillah") {
          mytoast.success(
            "Your Payment Request is Accepted. Please Wait for the verificiation"
          );

          let studentCourseCode = profile.data.userDetails.studentCourseCode;
          const pushObjCourse = {
            code: mainData.course,
            startedDate: new Date(Date.now()).toISOString(),
            endDate: null,
            status: "inactive",
          };
          let studentCourseCodeTwoFinal = [...studentCourseCode];
          studentCourseCodeTwoFinal.push(pushObjCourse);

          let studentDepartment = profile.data.userDetails.studentDepartment;
          const pushObjDepartment = {
            code: mainData.department,
            startedDate: new Date(Date.now()).toISOString(),
            endDate: null,
            status: "inactive",
          };
          let studentDepartmentTwoFinal = [...studentDepartment];
          studentDepartmentTwoFinal.push(pushObjDepartment);

          let studentJamatCode = profile.data.userDetails.studentJamatCode;
          const pushObjJamat = {
            code: mainData.jamat,
            startedDate: new Date(Date.now()).toISOString(),
            endDate: null,
            status: "inactive",
          };
          let studentJamatCodeTwoFinal = [...studentJamatCode];
          studentJamatCodeTwoFinal.push(pushObjJamat);

          let studentSemester = profile.data.userDetails.studentSemester;
          const pushObjSemester = {
            code: mainData.semester,
            startedDate: new Date(Date.now()).toISOString(),
            endDate: null,
            status: "inactive",
          };
          let studentSemesterTwoFinal = [...studentSemester];
          studentSemesterTwoFinal.push(pushObjSemester);

          const resStudent = await updateData(
            profile.data.userDetails.userName,
            profile.data.userDetails.firstName.en,
            profile.data.userDetails.firstName.bn,
            profile.data.userDetails.lastName.en,
            profile.data.userDetails.lastName.bn,
            profile.data.userDetails.nidNumber,
            profile.data.userDetails.birthRegNumber,
            profile.data.userDetails.fatherName.en,
            profile.data.userDetails.fatherName.bn,
            profile.data.userDetails.emailAddress,
            undefined,
            profile.data.userDetails.mobileNumber,
            profile.data.userDetails.occupation,
            studentCourseCodeTwoFinal,
            mainData.jamat ? studentJamatCodeTwoFinal : undefined,
            profile.data.userDetails.gender,
            profile.data.userDetails.dateOfBirth,
            profile.data.userDetails.countryName,
            profile.data.userDetails.fullPresentAddress,
            profile.data.userDetails.fullPermanentAddress,
            profile.data.userDetails.admissionSession,
            profile.data.userDetails.admissionDate,
            profile.data.userDetails.studentMotive,
            profile.data.userDetails.details,
            {
              addmissionDueStatus: true,
              consequentDueStatus: true,
              paymentID: profile.data.userDetails.paymentStatus.paymentID,
            },
            profile.data.userDetails.userRole,
            profile.data.userDetails.extracurricular,
            profile.data.userDetails.activeStatus,
            profile.data.userDetails._id,
            mainData.department ? studentDepartmentTwoFinal : undefined,
            mainData.semester ? studentSemesterTwoFinal : undefined,
            mainData.batch ? mainData.batch : undefined
          );
          if (resStudent.status == "Alhamdulillah") {
            mytoast.info("If verification Delays, Do not forget to reach us");
            // sendMail(
            //   profile.data.userDetails.emailAddress,
            //   "Payment request has been Recieved",
            //   `সুপ্রিয় শিক্ষার্থী ${profile.data.userDetails.firstName.en} ${profile.data.userDetails.lastName.en}, আপনার পেমেন্ট রিকোয়েস্টটি গ্রহণ করা হয়েছে, অনুগ্রহপূর্বক অপেক্ষা করুন। আপনার একাউন্ট ${profile.data.userDetails.userName} টি এপ্রুভ হলে আরেকটি কনফার্মেশন মেইল দেয়া হবে ইং শা আল্লাহ`,
            //   `<h1>সুপ্রিয় শিক্ষার্থী ${profile.data.userDetails.firstName.en} ${profile.data.userDetails.lastName.en},<br/><br/> আপনার পেমেন্ট রিকোয়েস্টটি গ্রহণ করা হয়েছে, অনুগ্রহপূর্বক অপেক্ষা করুন। আপনার একাউন্ট ${profile.data.userDetails.userName} টি এপ্রুভ হলে আরেকটি কনফার্মেশন মেইল দেয়া হবে ইং শা আল্লাহ</h1>`
            // );

            sendMail(
              [
                profile.data.userDetails.emailAddress,
                "internetmadrasa@outlook.com",
                "abdullah.limonbau@gmail.com",
              ],
              "Payment request has been Recieved",
              `সুপ্রিয় শিক্ষার্থী ${profile.data.userDetails.firstName.en} ${
                profile.data.userDetails.lastName.en
              }, আপনার পেমেন্ট রিকোয়েস্টটি গ্রহণ করা হয়েছে, অনুগ্রহপূর্বক অপেক্ষা করুন। আপনার একাউন্ট ${
                profile.data.userDetails.userName
              } টি এপ্রুভ হলে আরেকটি কনফার্মেশন মেইল দেয়া হবে ইং শা আল্লাহ \
              একাউন্ট আইডিঃ ${profile.data.userDetails.userName}, \
              একাউন্ট ইমেইলঃ ${profile.data.userDetails.emailAddress}, \
              মোবাইল নাম্বারঃ ${profile.data.userDetails.mobileNumber}, \
              কোর্সের নামঃ ${
                studentCourseCodeTwoFinal[studentCourseCodeTwoFinal.length - 1]
                  .code
              }, \
              স্ট্যাটাসঃ ${
                studentCourseCodeTwoFinal[studentCourseCodeTwoFinal.length - 1]
                  .status
              }, \
              পেমেন্টের তারিখঃ ${new Date(Date.now()).toISOString()}, \
              পেমেন্ট স্ট্যাটাসঃ false, \
              প্রাইসঃ ${mainData.amountPaid}, \
              কারেন্সিঃ  ${mainData.currency}, \
              ট্র্যান্সাকশন আইডিঃ  ${mainData.transactionID}, \
              সেন্ডার নাম্বারঃ ${mainData.accountNo}, \
              পেমেন্টের মাধ্যমঃ ${mainData.paymentWay}`,

              `<p>সুপ্রিয় শিক্ষার্থী ${profile.data.userDetails.firstName.en} ${
                profile.data.userDetails.lastName.en
              }, আপনার পেমেন্ট রিকোয়েস্টটি গ্রহণ করা হয়েছে, অনুগ্রহপূর্বক অপেক্ষা করুন। আপনার একাউন্ট ${
                profile.data.userDetails.userName
              } টি এপ্রুভ হলে আরেকটি কনফার্মেশন মেইল দেয়া হবে ইং শা আল্লাহ </p>
              <p>একাউন্ট আইডিঃ ${profile.data.userDetails.userName}</p>
              <p>একাউন্ট ইমেইলঃ ${profile.data.userDetails.emailAddress}</p>
              <p>মোবাইল নাম্বারঃ ${profile.data.userDetails.mobileNumber}</p>
              <p>কোর্সের নামঃ ${
                studentCourseCodeTwoFinal[studentCourseCodeTwoFinal.length - 1]
                  .code
              }</p>
              <p>স্ট্যাটাসঃ ${
                studentCourseCodeTwoFinal[studentCourseCodeTwoFinal.length - 1]
                  .status
              }</p>
              <p>পেমেন্টের তারিখঃ ${new Date(Date.now()).toISOString()}</p>
              <p>পেমেন্ট স্ট্যাটাসঃ false</p>
              <p>প্রাইসঃ ${mainData.amountPaid}</p>
              <p>কারেন্সিঃ  ${mainData.currency}</p>
              <p>ট্র্যান্সাকশন আইডিঃ  ${mainData.transactionID}</p>
              <p>সেন্ডার নাম্বারঃ ${mainData.accountNo}</p>
              <p>পেমেন্টের মাধ্যমঃ ${mainData.paymentWay}</p>`
            );

            const hardRefresh = () => {
              if (typeof window !== "undefined") {
                window.location.href = `/content/purchase-confirmation/${mainData.course}?username=${profile.data.userDetails.userName}&usd=${money.us}`;
              }
            };
            hardRefresh();
          }
        }
      }
    } else if (
      mainData.currency &&
      mainData.course == "ramadanquranulkarim" &&
      mainData.department != "none" &&
      mainData.department != "" &&
      mainData.jamat == "none" &&
      mainData.semester == "none" &&
      mainData.amountPaid == "none" &&
      mainData.transactionID == "none" &&
      mainData.accountNo == "none" &&
      mainData.paymentWay == "none" &&
      mainData.batch != ""
    ) {
      let currentDate = new Date();
      let oneYearLater = new Date(currentDate);

      var currentMonth = currentDate.getMonth();
      var currentYear = currentDate.getFullYear();

      var nextMonth = currentMonth + 1;
      var nextYear = currentYear;
      if (nextMonth > 11) {
        nextMonth = 0; // January (0-indexed)
        nextYear++;
      }

      oneYearLater.setFullYear(currentDate.getFullYear() + 1);

      function returnOneYear(date) {
        let currentDate = new Date(date);
        let oneYearLater = new Date(currentDate);
        oneYearLater.setFullYear(currentDate.getFullYear() + 1);

        return oneYearLater;
      }
      if (profile.data.userDetails.studentCourseCode.length < 1) {
        const resPayment = await createData({
          paymentID: "payment-" + profile.data.userName,
          paymentCurrency: mainData.currency,
          admissionDate: new Date(Date.now()).toISOString(),

          admissionPrice: money
            ? { tk: money.tk, us: money.us }
            : { tk: "", us: "" },
          monthlyPaymentPrice: money
            ? { tk: money.mtk, us: money.mus }
            : { tk: "", us: "" },
          admissionPaymentHistory: [
            {
              Date: new Date(Date.now()).toISOString(),
              PaymentStatus: true,
              Price: 0,
              currency: mainData.currency,
              transactionID: "",
              senderNo: "",
              paymentWay: "",
              nextAdmissionDate: new Date(oneYearLater),
            },
            {
              Date: new Date(oneYearLater),
              PaymentStatus: false,
              Price: "",
              currency: "",
              transactionID: "",
              senderNo: "",
              paymentWay: "",
              nextAdmissionDate: undefined,
            },
          ],
          monthlyPaymentHistory: [
            {
              Date: mainData.startDate && new Date(mainData.startDate),
              PaymentStatus: true,
              Price: 0,
              currency: "",
              transactionID: "",
              senderNo: "",
              paymentWay: "",
              nextMonthlyDate:
                mainData.startDate &&
                oneMonthLaterToDesiredDate(mainData.startDate).toISOString(),
            },
            {
              Date:
                mainData.startDate &&
                oneMonthLaterToDesiredDate(mainData.startDate).toISOString(),
              PaymentStatus: false,
              Price: "",
              currency: "",
              transactionID: "",
              senderNo: "",
              paymentWay: "",
              nextMonthlyDate: undefined,
            },
          ],
          activeStatus: "active",
        });
        if (resPayment.status == "Alhamdulillah") {
          mytoast.success(
            "Your Payment Request is Accepted. Please Wait for the verificiation"
          );
          const studentCourseCode = {
            code: mainData.course,
            startedDate: new Date(Date.now()).toISOString(),
            endDate: null,
            status: "inactive",
          };

          const studentDepartment = {
            code: mainData.department,
            startedDate: new Date(Date.now()).toISOString(),
            endDate: null,
            status: "inactive",
          };

          const studentJamatCode = {
            code: mainData.jamat,
            startedDate: new Date(Date.now()).toISOString(),
            endDate: null,
            status: "inactive",
          };

          const studentSemester = {
            code: mainData.semester,
            startedDate: new Date(Date.now()).toISOString(),
            endDate: null,
            status: "inactive",
          };

          const resStudent = await updateData(
            profile.data.userDetails.userName,
            profile.data.userDetails.firstName.en,
            profile.data.userDetails.firstName.bn,
            profile.data.userDetails.lastName.en,
            profile.data.userDetails.lastName.bn,
            profile.data.userDetails.nidNumber,
            profile.data.userDetails.birthRegNumber,
            profile.data.userDetails.fatherName.en,
            profile.data.userDetails.fatherName.bn,
            profile.data.userDetails.emailAddress,
            undefined,
            profile.data.userDetails.mobileNumber,
            profile.data.userDetails.occupation,
            studentCourseCode,
            mainData.jamat ? studentJamatCode : undefined,
            profile.data.userDetails.gender,
            profile.data.userDetails.dateOfBirth,
            profile.data.userDetails.countryName,
            profile.data.userDetails.fullPresentAddress,
            profile.data.userDetails.fullPermanentAddress,
            new Date(Date.now()).toISOString(),
            profile.data.userDetails.admissionDate,
            profile.data.userDetails.studentMotive,
            profile.data.userDetails.details,
            {
              addmissionDueStatus: true,
              consequentDueStatus: true,
              paymentID: resPayment.data.paymentID,
            },
            profile.data.userDetails.userRole,
            profile.data.userDetails.extracurricular,
            profile.data.userDetails.activeStatus,
            profile.data.userDetails._id,
            mainData.department ? studentDepartment : undefined,
            mainData.semester ? studentSemester : undefined,
            mainData.batch ? mainData.batch : undefined
          );
          if (resStudent.status == "Alhamdulillah") {
            mytoast.info("If verification Delays, Do not forget to reach us");

            // sendMail(
            //   profile.data.userDetails.emailAddress,
            //   "Payment request has been Recieved",
            //   `সুপ্রিয় শিক্ষার্থী ${profile.data.userDetails.firstName.en} ${profile.data.userDetails.lastName.en}, আপনার পেমেন্ট রিকোয়েস্টটি গ্রহণ করা হয়েছে, অনুগ্রহপূর্বক অপেক্ষা করুন। আপনার একাউন্ট ${profile.data.userDetails.userName} টি এপ্রুভ হলে আরেকটি কনফার্মেশন মেইল দেয়া হবে ইং শা আল্লাহ`,
            //   `<h1>সুপ্রিয় শিক্ষার্থী ${profile.data.userDetails.firstName.en} ${profile.data.userDetails.lastName.en},<br/><br/> আপনার পেমেন্ট রিকোয়েস্টটি গ্রহণ করা হয়েছে, অনুগ্রহপূর্বক অপেক্ষা করুন। আপনার একাউন্ট ${profile.data.userDetails.userName} টি এপ্রুভ হলে আরেকটি কনফার্মেশন মেইল দেয়া হবে ইং শা আল্লাহ</h1>`
            // );

            sendMail(
              [
                profile.data.userDetails.emailAddress,
                "internetmadrasa@outlook.com",
                "abdullah.limonbau@gmail.com",
              ],
              "Payment request has been Recieved",
              `সুপ্রিয় শিক্ষার্থী ${profile.data.userDetails.firstName.en} ${
                profile.data.userDetails.lastName.en
              }, আপনার পেমেন্ট রিকোয়েস্টটি গ্রহণ করা হয়েছে, অনুগ্রহপূর্বক অপেক্ষা করুন। আপনার একাউন্ট ${
                profile.data.userDetails.userName
              } টি এপ্রুভ হলে আরেকটি কনফার্মেশন মেইল দেয়া হবে ইং শা আল্লাহ \
              একাউন্ট আইডিঃ ${profile.data.userDetails.userName}, \
              একাউন্ট ইমেইলঃ ${profile.data.userDetails.emailAddress}, \
              মোবাইল নাম্বারঃ ${profile.data.userDetails.mobileNumber}, \
              কোর্সের নামঃ ${studentCourseCode.code}, \
              স্ট্যাটাসঃ ${studentCourseCode.status}, \
              পেমেন্টের তারিখঃ ${new Date(Date.now()).toISOString()}, \
              পেমেন্ট স্ট্যাটাসঃ false, \
              প্রাইসঃ ${mainData.amountPaid}, \
              কারেন্সিঃ  ${mainData.currency}, \
              ট্র্যান্সাকশন আইডিঃ  ${mainData.transactionID}, \
              সেন্ডার নাম্বারঃ ${mainData.accountNo}, \
              পেমেন্টের মাধ্যমঃ ${mainData.paymentWay}`,

              `<p>সুপ্রিয় শিক্ষার্থী ${profile.data.userDetails.firstName.en} ${
                profile.data.userDetails.lastName.en
              }, আপনার পেমেন্ট রিকোয়েস্টটি গ্রহণ করা হয়েছে, অনুগ্রহপূর্বক অপেক্ষা করুন। আপনার একাউন্ট ${
                profile.data.userDetails.userName
              } টি এপ্রুভ হলে আরেকটি কনফার্মেশন মেইল দেয়া হবে ইং শা আল্লাহ </p>
              <p>একাউন্ট আইডিঃ ${profile.data.userDetails.userName}</p>
              <p>একাউন্ট ইমেইলঃ ${profile.data.userDetails.emailAddress}</p>
              <p>মোবাইল নাম্বারঃ ${profile.data.userDetails.mobileNumber}</p>
              <p>কোর্সের নামঃ ${studentCourseCode.code}</p>
              <p>স্ট্যাটাসঃ ${studentCourseCode.status}</p>
              <p>পেমেন্টের তারিখঃ ${new Date(Date.now()).toISOString()}</p>
              <p>পেমেন্ট স্ট্যাটাসঃ false</p>
              <p>প্রাইসঃ ${mainData.amountPaid}</p>
              <p>কারেন্সিঃ  ${mainData.currency}</p>
              <p>ট্র্যান্সাকশন আইডিঃ  ${mainData.transactionID}</p>
              <p>সেন্ডার নাম্বারঃ ${mainData.accountNo}</p>
              <p>পেমেন্টের মাধ্যমঃ ${mainData.paymentWay}</p>`
            );

            const hardRefresh = () => {
              if (typeof window !== "undefined") {
                window.location.href = `/content/purchase-confirmation/${mainData.course}?username=${profile.data.userDetails.userName}&usd=${money.us}`;
              }
            };
            hardRefresh();
          }
        }
      } else {
        let currentAdmissionPaymentHistory =
          Unpaid[0].admissionPaymentHistory.map((item) => {
            if (item._id == UnpaidRef.current.value) {
              return {
                Date: item.Date,
                PaymentStatus: true,
                Price: 0,
                currency: mainData.currency,
                transactionID: "",
                senderNo: "",
                paymentWay: "",
                nextAdmissionDate: returnOneYear(item.Date),
              };
            } else {
              return item;
            }
          });

        currentAdmissionPaymentHistory.push({
          Date: returnOneYear(
            Unpaid[0].admissionPaymentHistory[
              Unpaid[0].admissionPaymentHistory.length - 1
            ].Date
          ),
          PaymentStatus: false,
          Price: 0,
          currency: "",
          transactionID: "",
          senderNo: "",
          paymentWay: "",
          nextAdmissionDate: undefined,
        });

        let CurrentID = Unpaid[0]._id;

        const resPayment = await upDatePayment({
          paymentID: "payment-" + profile.data.userName,
          paymentCurrency: undefined,
          admissionDate: undefined,

          admissionPrice: money
            ? { tk: money.tk, us: money.us }
            : { tk: "", us: "" },
          monthlyPaymentPrice: money
            ? { tk: money.mtk, us: money.mus }
            : { tk: "", us: "" },
          admissionPaymentHistory: currentAdmissionPaymentHistory,
          monthlyPaymentHistory: undefined,
          activeStatus: "active",
          idValue: CurrentID,
        });

        if (resPayment.status == "Alhamdulillah") {
          mytoast.success(
            "Your Payment Request is Accepted. Please Wait for the verificiation"
          );

          let studentCourseCode = profile.data.userDetails.studentCourseCode;
          const pushObjCourse = {
            code: mainData.course,
            startedDate: new Date(Date.now()).toISOString(),
            endDate: null,
            status: "inactive",
          };
          let studentCourseCodeTwoFinal = [...studentCourseCode];
          studentCourseCodeTwoFinal.push(pushObjCourse);

          let studentDepartment = profile.data.userDetails.studentDepartment;
          const pushObjDepartment = {
            code: mainData.department,
            startedDate: new Date(Date.now()).toISOString(),
            endDate: null,
            status: "inactive",
          };
          let studentDepartmentTwoFinal = [...studentDepartment];
          studentDepartmentTwoFinal.push(pushObjDepartment);

          let studentJamatCode = profile.data.userDetails.studentJamatCode;
          const pushObjJamat = {
            code: mainData.jamat,
            startedDate: new Date(Date.now()).toISOString(),
            endDate: null,
            status: "inactive",
          };
          let studentJamatCodeTwoFinal = [...studentJamatCode];
          studentJamatCodeTwoFinal.push(pushObjJamat);

          let studentSemester = profile.data.userDetails.studentSemester;
          const pushObjSemester = {
            code: mainData.semester,
            startedDate: new Date(Date.now()).toISOString(),
            endDate: null,
            status: "inactive",
          };
          let studentSemesterTwoFinal = [...studentSemester];
          studentSemesterTwoFinal.push(pushObjSemester);

          const resStudent = await updateData(
            profile.data.userDetails.userName,
            profile.data.userDetails.firstName.en,
            profile.data.userDetails.firstName.bn,
            profile.data.userDetails.lastName.en,
            profile.data.userDetails.lastName.bn,
            profile.data.userDetails.nidNumber,
            profile.data.userDetails.birthRegNumber,
            profile.data.userDetails.fatherName.en,
            profile.data.userDetails.fatherName.bn,
            profile.data.userDetails.emailAddress,
            undefined,
            profile.data.userDetails.mobileNumber,
            profile.data.userDetails.occupation,
            studentCourseCodeTwoFinal,
            mainData.jamat ? studentJamatCodeTwoFinal : undefined,
            profile.data.userDetails.gender,
            profile.data.userDetails.dateOfBirth,
            profile.data.userDetails.countryName,
            profile.data.userDetails.fullPresentAddress,
            profile.data.userDetails.fullPermanentAddress,
            profile.data.userDetails.admissionSession,
            profile.data.userDetails.admissionDate,
            profile.data.userDetails.studentMotive,
            profile.data.userDetails.details,
            {
              addmissionDueStatus: true,
              consequentDueStatus: true,
              paymentID: profile.data.userDetails.paymentStatus.paymentID,
            },
            profile.data.userDetails.userRole,
            profile.data.userDetails.extracurricular,
            profile.data.userDetails.activeStatus,
            profile.data.userDetails._id,
            mainData.department ? studentDepartmentTwoFinal : undefined,
            mainData.semester ? studentSemesterTwoFinal : undefined,
            mainData.batch ? mainData.batch : undefined
          );
          if (resStudent.status == "Alhamdulillah") {
            mytoast.info("If verification Delays, Do not forget to reach us");
            // sendMail(
            //   profile.data.userDetails.emailAddress,
            //   "Payment request has been Recieved",
            //   `সুপ্রিয় শিক্ষার্থী ${profile.data.userDetails.firstName.en} ${profile.data.userDetails.lastName.en}, আপনার পেমেন্ট রিকোয়েস্টটি গ্রহণ করা হয়েছে, অনুগ্রহপূর্বক অপেক্ষা করুন। আপনার একাউন্ট ${profile.data.userDetails.userName} টি এপ্রুভ হলে আরেকটি কনফার্মেশন মেইল দেয়া হবে ইং শা আল্লাহ`,
            //   `<h1>সুপ্রিয় শিক্ষার্থী ${profile.data.userDetails.firstName.en} ${profile.data.userDetails.lastName.en},<br/><br/> আপনার পেমেন্ট রিকোয়েস্টটি গ্রহণ করা হয়েছে, অনুগ্রহপূর্বক অপেক্ষা করুন। আপনার একাউন্ট ${profile.data.userDetails.userName} টি এপ্রুভ হলে আরেকটি কনফার্মেশন মেইল দেয়া হবে ইং শা আল্লাহ</h1>`
            // );

            sendMail(
              [
                profile.data.userDetails.emailAddress,
                "internetmadrasa@outlook.com",
                "abdullah.limonbau@gmail.com",
              ],
              "Payment request has been Recieved",
              `সুপ্রিয় শিক্ষার্থী ${profile.data.userDetails.firstName.en} ${
                profile.data.userDetails.lastName.en
              }, আপনার পেমেন্ট রিকোয়েস্টটি গ্রহণ করা হয়েছে, অনুগ্রহপূর্বক অপেক্ষা করুন। আপনার একাউন্ট ${
                profile.data.userDetails.userName
              } টি এপ্রুভ হলে আরেকটি কনফার্মেশন মেইল দেয়া হবে ইং শা আল্লাহ \
              একাউন্ট আইডিঃ ${profile.data.userDetails.userName}, \
              একাউন্ট ইমেইলঃ ${profile.data.userDetails.emailAddress}, \
              মোবাইল নাম্বারঃ ${profile.data.userDetails.mobileNumber}, \
              কোর্সের নামঃ ${
                studentCourseCodeTwoFinal[studentCourseCodeTwoFinal.length - 1]
                  .code
              }, \
              স্ট্যাটাসঃ ${
                studentCourseCodeTwoFinal[studentCourseCodeTwoFinal.length - 1]
                  .status
              }, \
              পেমেন্টের তারিখঃ ${new Date(Date.now()).toISOString()}, \
              পেমেন্ট স্ট্যাটাসঃ false, \
              প্রাইসঃ ${mainData.amountPaid}, \
              কারেন্সিঃ  ${mainData.currency}, \
              ট্র্যান্সাকশন আইডিঃ  ${mainData.transactionID}, \
              সেন্ডার নাম্বারঃ ${mainData.accountNo}, \
              পেমেন্টের মাধ্যমঃ ${mainData.paymentWay}`,

              `<p>সুপ্রিয় শিক্ষার্থী ${profile.data.userDetails.firstName.en} ${
                profile.data.userDetails.lastName.en
              }, আপনার পেমেন্ট রিকোয়েস্টটি গ্রহণ করা হয়েছে, অনুগ্রহপূর্বক অপেক্ষা করুন। আপনার একাউন্ট ${
                profile.data.userDetails.userName
              } টি এপ্রুভ হলে আরেকটি কনফার্মেশন মেইল দেয়া হবে ইং শা আল্লাহ </p>
              <p>একাউন্ট আইডিঃ ${profile.data.userDetails.userName}</p>
              <p>একাউন্ট ইমেইলঃ ${profile.data.userDetails.emailAddress}</p>
              <p>মোবাইল নাম্বারঃ ${profile.data.userDetails.mobileNumber}</p>
              <p>কোর্সের নামঃ ${
                studentCourseCodeTwoFinal[studentCourseCodeTwoFinal.length - 1]
                  .code
              }</p>
              <p>স্ট্যাটাসঃ ${
                studentCourseCodeTwoFinal[studentCourseCodeTwoFinal.length - 1]
                  .status
              }</p>
              <p>পেমেন্টের তারিখঃ ${new Date(Date.now()).toISOString()}</p>
              <p>পেমেন্ট স্ট্যাটাসঃ false</p>
              <p>প্রাইসঃ ${mainData.amountPaid}</p>
              <p>কারেন্সিঃ  ${mainData.currency}</p>
              <p>ট্র্যান্সাকশন আইডিঃ  ${mainData.transactionID}</p>
              <p>সেন্ডার নাম্বারঃ ${mainData.accountNo}</p>
              <p>পেমেন্টের মাধ্যমঃ ${mainData.paymentWay}</p>`
            );

            const hardRefresh = () => {
              if (typeof window !== "undefined") {
                window.location.href = `/content/purchase-confirmation/${mainData.course}?username=${profile.data.userDetails.userName}&usd=${money.us}`;
              }
            };
            hardRefresh();
          }
        }
      }
    } else {
      mytoast.warning("Admission Form: One or more field is emplty");
    }
  }

  return (
    <div className="w-full md:w-[50%] mx-auto p-5 border-0 md:border-2 border-slate-300 rounded-3xl mt-0 md:mt-5">
      <div className="flex justify-center p-5 pb-10">
        <div className="">
          <form>
            <div className="currencySelector">
              <h1 className="w-full mx-auto text-sm md:text-3xl text-center mb-2">
                আপনি কোন মুদ্রায় পেমেন্ট জমা দিতে চান?
              </h1>

              <div className="flex gap-5 justify-center mb-10 md:mb-[100px]">
                <div className="relative">
                  <input
                    onChange={currencyDecision}
                    className="absolute z-10 top-4 md:top-10 left-4 md:left-5 w-5 md:w-10 h-5 md:h-10"
                    type="radio"
                    id="option1"
                    name="currency"
                    value="taka"
                  />
                  <label htmlFor="option1">
                    <div className="w-full md:w-[300px] cursor-pointer shadow-md border-[1px] border-slate-200 bg-white m-1 md:mt-5 rounded-2xl border-box mx-0 p-5 md:p-12 relative">
                      <Image
                        className="m-auto h-12"
                        width={100}
                        height={100}
                        src="/images/taka.svg"
                      />
                      <h2 className="mt-5 text-[12px] md:text-2xl text-center">
                        <span id="checkoutPriceTaka">
                          {money ? money.tk : ""}
                        </span>{" "}
                        টাকা
                      </h2>
                    </div>
                  </label>
                </div>

                <div className="relative">
                  <input
                    onChange={currencyDecision}
                    className="absolute z-10 top-4 md:top-10 left-4 md:left-5 w-5 md:w-10 h-5 md:h-10"
                    type="radio"
                    id="option2"
                    name="currency"
                    value="dollar"
                  />
                  <label htmlFor="option2">
                    <div className="cursor-pointer w-full md:w-[300px] shadow-md border-[1px] border-slate-200 bg-white m-1 md:mt-5 rounded-2xl border-box mx-0 p-5 md:p-12 relative">
                      <Image
                        className="m-auto h-12"
                        width={100}
                        height={100}
                        src="/images/dollar.svg"
                      />
                      <h2 className="mt-5 text-[12px] md:text-2xl text-center">
                        <span id="checkoutPriceDollar">
                          {money ? money.us : ""}
                        </span>{" "}
                        ডলার
                      </h2>
                    </div>
                  </label>
                </div>
              </div>
            </div>
            <div className="courseSelector h-[150px] md:h-[200px]">
              <label htmlFor="course">
                <h1 className="w-full mx-auto text-sm md:text-3xl text-center mb-2 ">
                  আপনি কোন ক্ল্যাসে ভর্তি হতে ইচ্ছুক?
                </h1>
              </label>

              <select
                value={mainData.course}
                onChange={classDecision}
                id="course"
                name="course"
                className="bg-white my-4 p-4 box-border w-full rounded-3xl mb-10 md:mb-[100px] text-sm md:text-2xl"
              >
                <option className="p-4" value="none">
                  আপনার ক্ল্যাস নির্বাচন করুন
                </option>
                {course
                  ? course.map((item, i) => (
                      <option className="p-4" key={i} value={item.code}>
                        {item.title}
                      </option>
                    ))
                  : ""}
              </select>
            </div>

            <div
              className={`JamatSelector ${
                extraJamat ? "h-[150px] md:h-[200px]" : "h-[0px]"
              } overflow-hidden transition-all duration-1000 ease-out`}
            >
              <label htmlFor="jamat">
                <h1 className="w-full mx-auto text-sm md:text-3xl text-center my-2">
                  আপনি কোন জামাতে ভর্তি হতে ইচ্ছুক?
                </h1>
              </label>

              <select
                value={mainData.jamat}
                onChange={jamatDecision}
                id="jamat"
                name="jamat"
                className="bg-white my-4 p-4 box-border w-full rounded-3xl mb-10 md:mb-[100px] text-sm md:text-2xl"
              >
                <option className="p-4" value="none">
                  আপনার জামাত নির্বাচন করুন
                </option>
                {jamat
                  ? jamat.map((item, i) => (
                      <option className="p-4" key={i} value={item.ID}>
                        {item.name.toUpperCase()}
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
                  আপনি কোন সেমিস্টারে ভর্তি হতে ইচ্ছুক?
                </h1>
              </label>

              <select
                value={mainData.semester}
                onChange={semseterDecision}
                id="semester"
                name="semester"
                className="bg-white my-4 p-4 box-border w-full rounded-3xl mb-10 md:mb-[100px] text-sm md:text-2xl"
              >
                <option className="p-4" value="none">
                  আপনার সেমিস্টার নির্বাচন করুন
                </option>
                {semester
                  ? semester.map((item, i) => (
                      <option className="p-4" key={i} value={item.ID}>
                        {item.name}
                      </option>
                    ))
                  : ""}
              </select>
            </div>

            <div
              className={`SemesterSelector ${
                extrabatch ? "h-[150px] md:h-[200px]" : "h-[0px]"
              } overflow-hidden transition-all duration-1000 ease-out`}
            >
              <label htmlFor="batch">
                <h1 className="w-full mx-auto text-sm md:text-3xl text-center my-2">
                  আপনি কোন ব্যাচে ভর্তি হতে ইচ্ছুক?
                </h1>
              </label>
              <select
                onChange={batchChangeDecision}
                id="batch"
                name="batch"
                className="bg-white my-4 p-4 box-border w-full rounded-3xl mb-10 md:mb-[100px] text-sm md:text-2xl"
              >
                <option
                  className="p-4"
                  value={JSON.stringify({
                    batch: "",
                    startDate: "",
                  })}
                >
                  আপনার ব্যাচ নির্বাচন করুন
                </option>
                {batch &&
                  batch.map((item, i) => (
                    <option
                      className="p-4"
                      key={i}
                      value={JSON.stringify({
                        batch: item.value,
                        startDate: item.startDate,
                      })}
                    >
                      {item.name}
                    </option>
                  ))}
              </select>
            </div>

            <div
              className={`TransactionSelector ${
                extraTransaction ? "h-[300px]md:h-[400px]" : "h-[0px]"
              } overflow-hidden transition-all duration-1000 ease-out`}
            >
              {" "}
              {profile.data.userDetails.studentCourseCode.length >= 1 ? (
                <>
                  <label htmlFor="yearAdmission">
                    <h1 className="w-full mx-auto text-sm md:text-3xl text-center my-2">
                      কোন বছরের এডমিশন ফী দিতে চাচ্ছেন?
                    </h1>
                  </label>
                  <select
                    ref={UnpaidRef}
                    id="yearAdmission"
                    name="yearAdmission"
                    className="bg-white my-4 p-4 box-border w-full rounded-3xl mb-10 md:mb-[100px] text-sm md:text-2xl"
                  >
                    <option className="p-4" value="none">
                      এডমিশন ফী কোন বছরের তা নির্বাচন করুন?
                    </option>
                    {Unpaid
                      ? Unpaid[0].admissionPaymentHistory.map((item, i) =>
                          item.PaymentStatus == false ? (
                            <option className="p-4" key={i} value={item._id}>
                              {niceDate(item.Date)}
                            </option>
                          ) : (
                            ""
                          )
                        )
                      : ""}
                  </select>
                </>
              ) : (
                ""
              )}
              {money && money.tk != 0 && money.us != 0 && (
                <>
                  <label htmlFor="paymentWay">
                    <h1 className="w-full mx-auto text-sm md:text-3xl text-center my-2">
                      আপনি নিচের যেকোনো একটি অপশনে টাকা জমা দিতে পারবেন
                    </h1>
                  </label>
                  <select
                    value={mainData.paymentWay}
                    onChange={paymentWayDecision}
                    id="paymentWay"
                    name="paymentWay"
                    className="bg-white my-4 p-4 box-border w-full rounded-3xl mb-10 md:mb-[100px] text-sm md:text-2xl"
                  >
                    <option className="p-4" value="none">
                      আপনার পেমেন্ট মেথড নির্বাচন করুন
                    </option>

                    <option className="p-4" value="bkash-merchant">
                      bkash: 01791 845 122 (Merchant)
                    </option>

                    <option className="p-4" value="bKash-personal">
                      bKash: 01674 04 05 02 (Personal)
                    </option>

                    <option className="p-4" value="nagad-personal">
                      Nagad: 01674 04 05 02 (Personal)
                    </option>
                    <option className="p-4" value="rocket-personal">
                      Rocket:01674 04 05 023 (Personal)
                    </option>
                    <option className="p-4" value="paypal">
                      PayPal: internetmadrasa@outlook.com
                    </option>

                    <option className="p-4" value="dbbl-bank">
                      DBBL Bank Account No. 126 101 56434
                    </option>
                    <option className="p-4" value="ebl-bank">
                      EBL Bank Account No. 170 145 000 1520
                    </option>
                  </select>
                </>
              )}
              {showPayment ? (
                <ShowPaymentDetails account={mainData.paymentWay} />
              ) : (
                ""
              )}
              {money && money.tk != 0 && money.us != 0 && (
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
              {money && money.tk != 0 && money.us != 0 && (
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
              {money && money.tk != 0 && money.us != 0 && (
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
            </div>

            <div className="submitSection">
              <button
                onClick={submitData}
                className="bg-blue-500 text-white text-lg font-bold mt-6 rounded-3xl w-full overflow-hidden"
              >
                {enroll ? (
                  <p className="flex justify-between">
                    <span className="bg-pink-500 w-1/3 py-2 px-2">
                      (ধাপ ৩/৩)
                    </span>{" "}
                    <span className="w-2/3 py-2 px-2 relative">
                      ভর্তি রিকোয়েস্ট দিন{" "}
                      <span className="absolute right-1 top-2">
                        <IoIosArrowDroprightCircle className="text-3xl" />
                      </span>
                    </span>
                  </p>
                ) : (
                  <div className="p-5">ভর্তি রিকোয়েস্ট দিন</div>
                )}
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default PreFeeSection;
