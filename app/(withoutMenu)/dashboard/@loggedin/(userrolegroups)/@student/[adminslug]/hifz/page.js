"use client";
import { updateData as updateClasses } from "@/apiservices/classapiservices";

import { useSelector, useDispatch } from "react-redux";
import { setInitialData } from "@/app/redux/features/isAdmin/isAdminSlice";
import "./hifz.css";
import { selectDataTwo as selectClasses } from "@/apiservices/classapiservices";

import EnrollPlease from "@/components/dashboardPage/enrollPlease";
import WaitingApproval from "@/components/dashboardPage/WaitingApproval";
import { useState, useEffect, useRef } from "react";
import { selectDataTwo, updateData } from "@/apiservices/studentapiservices";

import NotAllow from "@/components/dashboardPage/notAllow";
import mytoast from "@/components/toast/toast";
import { selectAllData } from "@/apiservices/teacherapiservices";

function HifzPage() {
  let data = useSelector((state) => state.isAdmin.value);
  const courseState = useSelector((state) => state.courseState.value);
  const dispatch = useDispatch();
  const [showPage, setShowPage] = useState();
  const [showMainPage, setShowMainPage] = useState();
  const [detailsC, setDetailsC] = useState();
  const [teachers, setTeacher] = useState();
  const [classes, setClasses] = useState();

  function getTeacherName(tid) {
    if (teachers) {
      let desiredData = teachers.find((item) => item.userName == tid);

      return desiredData.firstName.en + " " + desiredData.lastName.en;
    }
  }

  const AllList = [
    "alemalema",
    "abacus_student",
    "shishunajera",
    "shishumaktab",
    "farzeayinmaktab",
    "farzeayinnajera",
    "hifjulquran",
    "ezranahusorof",
    "urdu",
    "ramadanquranulkarim",
    "farzeayinampara",
    "abacus_teacher",
  ];

  const allowList = ["hifjulquran"];

  useEffect(() => {
    async function getData() {
      const res = await selectDataTwo(
        { userName: data.data.userDetails.userName },
        null
      );
      if (res.status == "Alhamdulillah") {
        if (res.data[0].studentCourseCode.length > 0) {
          res.data[0].studentCourseCode.forEach((item) => {
            if (item.code == "hifjulquran" && item.status == "active") {
              setShowPage(true);
              if (res.data[0].details.hifzClass) {
                setShowMainPage(true);
                setDetailsC(res.data[0].details);
              }
            }
          });
        }
      }

      const res2 = await selectAllData(null, null);

      if ((res2.status = "Alhamdulillah")) {
        setTeacher(res2.data);
      }

      const res3 = await selectClasses(
        { batchNo: data.data.userDetails.batchCount },
        null
      );

      if (res3.status == "Alhamdulillah") {
        setClasses(res3.data);
      }
    }
    getData();
  }, [data]);

  function niceDate(date) {
    var isoTime = date;
    var date = new Date(isoTime);

    var options = {
      month: "long",
      day: "numeric",
      year: "numeric",
    };

    var formattedDate = date.toLocaleDateString("en-US", options);
    return formattedDate;
  }

  const sabakpararef = useRef();
  const sabakpageref = useRef();

  const satsabakpararef = useRef();
  const satsabakpageref = useRef();
  const satsabakamountref = useRef();
  const satsabaklokmaref = useRef();
  const satsabakdohoranaref = useRef();

  const amukhtapararef = useRef();
  const amukhtapageref = useRef();
  const amukhtaamountref = useRef();
  const amukhtalokmaref = useRef();
  const amukhtadohoranaref = useRef();

  const tilwatref = useRef();
  const hifzClassref = useRef();

  const weekNumberref = useRef();

  let currentDate = new Date();
  let dayNames = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
  let dayIndex = currentDate.getDay();
  let dayName = dayNames[dayIndex];

  async function sabakSubmit(e) {
    e.preventDefault();

    let details = { ...data.data.userDetails.details };

    let hifzArray;

    if (details.hifzInfo) {
      hifzArray = [...details.hifzInfo];

      if (details.hifzInfo.length == 0) {
        hifzArray.push({
          submitSabak: true,
          submitSatSabak: false,
          submitAmukhta: false,
          submitDailyTilwat: false,
          submitWeekNumber: false,
          date: niceDate(currentDate),
          day: dayName,
          sabak: {
            para: sabakpararef.current.value,
            page: sabakpageref.current.value,
          },
          satsabak: null,
          amukhta: null,
          dailytilwat: null,
          weeknumber: null,
          signature: "",
        });
      } else {
        hifzArray = hifzArray.map((item) => {
          if (item.date == niceDate(currentDate)) {
            if (item.submitSabak == true) {
              return item;
            } else {
              let newSatSabak = { ...item.satsabak };
              let newWeekNumber = { ...item.weeknumber };
              let newAmukhta = { ...item.amukhta };
              let newTilwat = { ...item.dailytilwat };

              return {
                submitSabak: true,
                submitSatSabak: item.submitSatSabak,
                submitAmukhta: item.submitAmukhta,
                submitDailyTilwat: item.submitDailyTilwat,
                submitWeekNumber: item.submitWeekNumber,
                submitWeekNumber: item.submitWeekNumber,
                date: niceDate(currentDate),
                day: dayName,
                sabak: {
                  para: sabakpararef.current.value,
                  page: sabakpararef.current.value,
                },
                satsabak: newSatSabak || null,
                amukhta: newAmukhta || null,
                dailytilwat: newTilwat || null,
                weeknumber: newWeekNumber || null,
                signature: item.signature,
              };
            }
          } else {
            return item;
          }
        });

        if (hifzArray[hifzArray.length - 1].date != niceDate(currentDate)) {
          hifzArray.push({
            submitSabak: true,
            submitSatSabak: false,
            submitAmukhta: false,
            submitDailyTilwat: false,
            submitWeekNumber: false,
            date: niceDate(currentDate),
            day: dayName,
            sabak: {
              para: sabakpararef.current.value,
              page: sabakpageref.current.value,
            },
            satsabak: null,
            amukhta: null,
            dailytilwat: null,
            weeknumber: null,
            signature: "",
          });
        }
      }
    } else {
      hifzArray = [];

      hifzArray.push({
        submitSabak: true,
        submitSatSabak: false,
        submitAmukhta: false,
        submitDailyTilwat: false,
        submitWeekNumber: false,
        date: niceDate(currentDate),
        day: dayName,
        sabak: {
          para: sabakpararef.current.value,
          page: sabakpageref.current.value,
        },
        satsabak: null,
        amukhta: null,
        dailytilwat: null,
        weeknumber: null,
        signature: "",
      });
    }

    details.hifzInfo = hifzArray;

    const res = await updateData(
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
      data.data.userDetails.studentCourseCode,
      data.data.userDetails.studentJamatCode,
      data.data.userDetails.gender,
      data.data.userDetails.dateOfBirth,
      data.data.userDetails.countryName,
      data.data.userDetails.fullPresentAddress,
      data.data.userDetails.fullPermanentAddress,
      data.data.userDetails.admissionSession,
      data.data.userDetails.admissionDate,
      data.data.userDetails.studentMotive,
      details,
      data.data.userDetails.paymentStatus,
      data.data.userDetails.userRole,
      data.data.userDetails.extracurricular,
      data.data.userDetails.activeStatus,
      data.data.userDetails._id,
      data.data.userDetails.studentDepartment,
      data.data.userDetails.studentSemester
    );

    if (res.status == "Alhamdulillah") {
      mytoast.success("Sabak Data has been recorded");

      let userDetails2 = { ...data.data.userDetails };

      userDetails2.details = details;
      const desiredObj = {
        status: "Alhamdulillah",
        data: {
          userName: data.data.userDetails.userName,
          userRole: data.data.userDetails.userRole,
          isAdmin: data.data.userDetails.isAdmin,
          userDetails: userDetails2,
        },
      };

      dispatch(setInitialData(desiredObj));
      setDetailsC(details);
    }
  }

  async function satsabakSubmit(e) {
    e.preventDefault();

    let details = { ...data.data.userDetails.details };

    let hifzArray;

    if (details.hifzInfo) {
      hifzArray = [...details.hifzInfo];

      if (details.hifzInfo.length == 0) {
        hifzArray.push({
          submitSabak: false,
          submitSatSabak: true,
          submitAmukhta: false,
          submitDailyTilwat: false,
          submitWeekNumber: false,
          date: niceDate(currentDate),
          day: dayName,
          sabak: null,
          satsabak: {
            para: satsabakpararef.current.value,
            page: satsabakpageref.current.value,
            amount: satsabakamountref.current.value,
            lokma: satsabaklokmaref.current.value,
            dohorana: satsabakdohoranaref.current.value,
          },
          amukhta: null,
          dailytilwat: null,
          weeknumber: null,
          signature: "",
        });
      } else {
        hifzArray = hifzArray.map((item) => {
          if (item.date == niceDate(currentDate)) {
            if (item.submitSatSabak == true) {
              return item;
            } else {
              let newSabak = { ...item.sabak };
              let newAmukhta = { ...item.amukhta };
              let newTilwat = { ...item.dailytilwat };
              let newWeekNumber = { ...item.weeknumber };

              return {
                submitSabak: item.submitSabak,
                submitSatSabak: true,
                submitAmukhta: item.submitAmukhta,
                submitDailyTilwat: item.submitDailyTilwat,
                submitWeekNumber: item.submitWeekNumber,
                date: niceDate(currentDate),
                day: dayName,
                sabak: newSabak || null,
                satsabak: {
                  para: satsabakpararef.current.value,
                  page: satsabakpageref.current.value,
                  amount: satsabakamountref.current.value,
                  lokma: satsabaklokmaref.current.value,
                  dohorana: satsabakdohoranaref.current.value,
                },
                amukhta: newAmukhta || null,
                dailytilwat: newTilwat || null,
                weeknumber: newWeekNumber || null,
                signature: item.signature,
              };
            }
          } else {
            return item;
          }
        });

        if (hifzArray[hifzArray.length - 1].date != niceDate(currentDate)) {
          hifzArray.push({
            submitSabak: false,
            submitSatSabak: true,
            submitAmukhta: false,
            submitDailyTilwat: false,
            submitWeekNumber: false,
            date: niceDate(currentDate),
            day: dayName,
            sabak: null,
            satsabak: {
              para: satsabakpararef.current.value,
              page: satsabakpageref.current.value,
              amount: satsabakamountref.current.value,
              lokma: satsabaklokmaref.current.value,
              dohorana: satsabakdohoranaref.current.value,
            },
            amukhta: null,
            dailytilwat: null,
            weeknumber: null,
            signature: "",
          });
        }
      }
    } else {
      hifzArray = [];

      hifzArray.push({
        submitSabak: false,
        submitSatSabak: true,
        submitAmukhta: false,
        submitDailyTilwat: false,
        submitWeekNumber: false,
        date: niceDate(currentDate),
        day: dayName,
        sabak: null,
        satsabak: {
          para: satsabakpararef.current.value,
          page: satsabakpageref.current.value,
          amount: satsabakamountref.current.value,
          lokma: satsabaklokmaref.current.value,
          dohorana: satsabakdohoranaref.current.value,
        },
        amukhta: null,
        dailytilwat: null,
        weeknumber: null,
        signature: "",
      });
    }

    details.hifzInfo = hifzArray;

    const res = await updateData(
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
      data.data.userDetails.studentCourseCode,
      data.data.userDetails.studentJamatCode,
      data.data.userDetails.gender,
      data.data.userDetails.dateOfBirth,
      data.data.userDetails.countryName,
      data.data.userDetails.fullPresentAddress,
      data.data.userDetails.fullPermanentAddress,
      data.data.userDetails.admissionSession,
      data.data.userDetails.admissionDate,
      data.data.userDetails.studentMotive,
      details,
      data.data.userDetails.paymentStatus,
      data.data.userDetails.userRole,
      data.data.userDetails.extracurricular,
      data.data.userDetails.activeStatus,
      data.data.userDetails._id,
      data.data.userDetails.studentDepartment,
      data.data.userDetails.studentSemester
    );

    if (res.status == "Alhamdulillah") {
      mytoast.success("Sat Sabak Data has been recorded");

      let userDetails3 = { ...data.data.userDetails };

      userDetails3.details = details;
      const desiredObj = {
        status: "Alhamdulillah",
        data: {
          userName: data.data.userDetails.userName,
          userRole: data.data.userDetails.userRole,
          isAdmin: data.data.userDetails.isAdmin,
          userDetails: userDetails3,
        },
      };

      dispatch(setInitialData(desiredObj));
      setDetailsC(details);
    }
  }

  async function amukhtaSubmit(e) {
    e.preventDefault();

    let details = { ...data.data.userDetails.details };

    let hifzArray;

    if (details.hifzInfo) {
      hifzArray = [...details.hifzInfo];

      if (details.hifzInfo.length == 0) {
        hifzArray.push({
          submitSabak: false,
          submitSatSabak: false,
          submitAmukhta: true,
          submitDailyTilwat: false,
          submitWeekNumber: false,
          date: niceDate(currentDate),
          day: dayName,
          sabak: null,
          satsabak: null,
          amukhta: {
            para: amukhtapararef.current.value,
            page: amukhtapageref.current.value,
            amount: amukhtaamountref.current.value,
            lokma: amukhtalokmaref.current.value,
            dohorana: amukhtadohoranaref.current.value,
          },
          dailytilwat: null,
          weeknumber: null,
          signature: "",
        });
      } else {
        hifzArray = hifzArray.map((item) => {
          if (item.date == niceDate(currentDate)) {
            if (item.submitAmukhta == true) {
              return item;
            } else {
              let newSabak = { ...item.sabak };
              let newSatSabak = { ...item.satsabak };
              let newTilwat = { ...item.dailytilwat };
              let newWeekNumber = { ...item.weeknumber };

              return {
                submitSabak: item.submitSabak,
                submitSatSabak: item.submitSatSabak,
                submitAmukhta: true,
                submitDailyTilwat: item.submitDailyTilwat,
                submitWeekNumber: item.submitWeekNumber,
                date: niceDate(currentDate),
                day: dayName,
                sabak: newSabak || null,
                satsabak: newSatSabak || null,
                amukhta: {
                  para: amukhtapararef.current.value,
                  page: amukhtapageref.current.value,
                  amount: amukhtaamountref.current.value,
                  lokma: amukhtalokmaref.current.value,
                  dohorana: amukhtadohoranaref.current.value,
                },
                dailytilwat: newTilwat || null,
                weeknumber: newWeekNumber || null,
                signature: item.signature,
              };
            }
          } else {
            return item;
          }
        });

        if (hifzArray[hifzArray.length - 1].date != niceDate(currentDate)) {
          hifzArray.push({
            submitSabak: false,
            submitSatSabak: false,
            submitAmukhta: true,
            submitDailyTilwat: false,
            submitWeekNumber: false,
            date: niceDate(currentDate),
            day: dayName,
            sabak: null,
            satsabak: null,
            amukhta: {
              para: amukhtapararef.current.value,
              page: amukhtapageref.current.value,
              amount: amukhtaamountref.current.value,
              lokma: amukhtalokmaref.current.value,
              dohorana: amukhtadohoranaref.current.value,
            },
            dailytilwat: null,
            weeknumber: null,
            signature: "",
          });
        }
      }
    } else {
      hifzArray = [];

      hifzArray.push({
        submitSabak: false,
        submitSatSabak: false,
        submitAmukhta: true,
        submitDailyTilwat: false,
        submitWeekNumber: false,
        date: niceDate(currentDate),
        day: dayName,
        sabak: null,
        satsabak: null,
        amukhta: {
          para: amukhtapararef.current.value,
          page: amukhtapageref.current.value,
          amount: amukhtaamountref.current.value,
          lokma: amukhtalokmaref.current.value,
          dohorana: amukhtadohoranaref.current.value,
        },
        dailytilwat: null,
        weeknumber: null,
        signature: "",
      });
    }

    details.hifzInfo = hifzArray;

    const res = await updateData(
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
      data.data.userDetails.studentCourseCode,
      data.data.userDetails.studentJamatCode,
      data.data.userDetails.gender,
      data.data.userDetails.dateOfBirth,
      data.data.userDetails.countryName,
      data.data.userDetails.fullPresentAddress,
      data.data.userDetails.fullPermanentAddress,
      data.data.userDetails.admissionSession,
      data.data.userDetails.admissionDate,
      data.data.userDetails.studentMotive,
      details,
      data.data.userDetails.paymentStatus,
      data.data.userDetails.userRole,
      data.data.userDetails.extracurricular,
      data.data.userDetails.activeStatus,
      data.data.userDetails._id,
      data.data.userDetails.studentDepartment,
      data.data.userDetails.studentSemester
    );

    if (res.status == "Alhamdulillah") {
      mytoast.success("Amukhta Data has been recorded");
      let userDetails4 = { ...data.data.userDetails };

      userDetails4.details = details;
      const desiredObj = {
        status: "Alhamdulillah",
        data: {
          userName: data.data.userDetails.userName,
          userRole: data.data.userDetails.userRole,
          isAdmin: data.data.userDetails.isAdmin,
          userDetails: userDetails4,
        },
      };

      dispatch(setInitialData(desiredObj));
      setDetailsC(details);
    }
  }

  async function tilwatSubmit(e) {
    e.preventDefault();

    let details = { ...data.data.userDetails.details };

    let hifzArray;

    if (details.hifzInfo) {
      hifzArray = [...details.hifzInfo];

      if (details.hifzInfo.length == 0) {
        hifzArray.push({
          submitSabak: false,
          submitSatSabak: false,
          submitAmukhta: false,
          submitDailyTilwat: true,
          submitWeekNumber: false,
          date: niceDate(currentDate),
          day: dayName,
          sabak: null,
          satsabak: null,
          amukhta: null,
          dailytilwat: {
            text: tilwatref.current.value,
          },
          weeknumber: null,
          signature: "",
        });
      } else {
        hifzArray = hifzArray.map((item) => {
          if (item.date == niceDate(currentDate)) {
            if (item.submitDailyTilwat == true) {
              return item;
            } else {
              let newSabak = { ...item.sabak };
              let newSatSabak = { ...item.satsabak };
              let newAmukhta = { ...item.amukhta };
              let newWeekNumber = { ...item.weeknumber };

              return {
                submitSabak: item.submitSabak,
                submitSatSabak: item.submitSatSabak,
                submitAmukhta: item.submitAmukhta,
                submitDailyTilwat: true,
                submitWeekNumber: item.submitWeekNumber,
                date: niceDate(currentDate),
                day: dayName,
                sabak: newSabak || null,
                satsabak: newSatSabak || null,
                amukhta: newAmukhta || null,
                dailytilwat: {
                  text: tilwatref.current.value,
                },
                weeknumber: newWeekNumber || null,
                signature: item.signature,
              };
            }
          } else {
            return item;
          }
        });

        if (hifzArray[hifzArray.length - 1].date != niceDate(currentDate)) {
          hifzArray.push({
            submitSabak: false,
            submitSatSabak: false,
            submitAmukhta: false,
            submitDailyTilwat: true,
            submitWeekNumber: false,
            date: niceDate(currentDate),
            day: dayName,
            sabak: null,
            satsabak: null,
            amukhta: null,
            dailytilwat: {
              text: tilwatref.current.value,
            },
            weeknumber: null,
            signature: "",
          });
        }
      }
    } else {
      hifzArray = [];

      hifzArray.push({
        submitSabak: false,
        submitSatSabak: false,
        submitAmukhta: false,
        submitDailyTilwat: true,
        submitWeekNumber: false,
        date: niceDate(currentDate),
        day: dayName,
        sabak: null,
        satsabak: null,
        amukhta: null,
        dailytilwat: {
          text: tilwatref.current.value,
        },
        weeknumber: null,
        signature: "",
      });
    }

    details.hifzInfo = hifzArray;

    const res = await updateData(
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
      data.data.userDetails.studentCourseCode,
      data.data.userDetails.studentJamatCode,
      data.data.userDetails.gender,
      data.data.userDetails.dateOfBirth,
      data.data.userDetails.countryName,
      data.data.userDetails.fullPresentAddress,
      data.data.userDetails.fullPermanentAddress,
      data.data.userDetails.admissionSession,
      data.data.userDetails.admissionDate,
      data.data.userDetails.studentMotive,
      details,
      data.data.userDetails.paymentStatus,
      data.data.userDetails.userRole,
      data.data.userDetails.extracurricular,
      data.data.userDetails.activeStatus,
      data.data.userDetails._id,
      data.data.userDetails.studentDepartment,
      data.data.userDetails.studentSemester
    );

    if (res.status == "Alhamdulillah") {
      mytoast.success("Daily Tilwat Data has been recorded");
      let userDetails5 = { ...data.data.userDetails };

      userDetails5.details = details;
      const desiredObj = {
        status: "Alhamdulillah",
        data: {
          userName: data.data.userDetails.userName,
          userRole: data.data.userDetails.userRole,
          isAdmin: data.data.userDetails.isAdmin,
          userDetails: userDetails5,
        },
      };

      dispatch(setInitialData(desiredObj));
      setDetailsC(details);
    }
  }

  async function weekNumberSubmit(e) {
    e.preventDefault();

    let details = { ...data.data.userDetails.details };

    let hifzArray;

    if (details.hifzInfo) {
      hifzArray = [...details.hifzInfo];

      if (details.hifzInfo.length == 0) {
        hifzArray.push({
          submitSabak: false,
          submitSatSabak: false,
          submitAmukhta: false,
          submitDailyTilwat: false,
          submitWeekNumber: true,
          date: niceDate(currentDate),
          day: dayName,
          sabak: null,
          satsabak: null,
          amukhta: null,
          dailytilwat: null,
          weeknumber: {
            text: weekNumberref.current.value,
          },
          signature: "",
        });
      } else {
        hifzArray = hifzArray.map((item) => {
          if (item.date == niceDate(currentDate)) {
            if (item.submitWeekNumber == true) {
              return item;
            } else {
              let newSabak = { ...item.sabak };
              let newSatSabak = { ...item.satsabak };
              let newAmukhta = { ...item.amukhta };

              let newTilwat = { ...item.dailytilwat };

              return {
                submitSabak: item.submitSabak,
                submitSatSabak: item.submitSatSabak,
                submitAmukhta: item.submitAmukhta,
                submitDailyTilwat: item.submitDailyTilwat,
                submitWeekNumber: true,
                date: niceDate(currentDate),
                day: dayName,
                sabak: newSabak || null,
                satsabak: newSatSabak || null,
                amukhta: newAmukhta || null,
                dailytilwat: newTilwat || null,
                weeknumber: {
                  text: weekNumberref.current.value,
                },
                signature: item.signature,
              };
            }
          } else {
            return item;
          }
        });

        if (hifzArray[hifzArray.length - 1].date != niceDate(currentDate)) {
          hifzArray.push({
            submitSabak: false,
            submitSatSabak: false,
            submitAmukhta: false,
            submitDailyTilwat: false,
            submitWeekNumber: true,
            date: niceDate(currentDate),
            day: dayName,
            sabak: null,
            satsabak: null,
            amukhta: null,
            dailytilwat: null,
            weeknumber: {
              text: weekNumberref.current.value,
            },
            signature: "",
          });
        }
      }
    } else {
      hifzArray = [];

      hifzArray.push({
        submitSabak: false,
        submitSatSabak: false,
        submitAmukhta: false,
        submitDailyTilwat: false,
        submitWeekNumber: true,
        date: niceDate(currentDate),
        day: dayName,
        sabak: null,
        satsabak: null,
        amukhta: null,
        dailytilwat: null,
        weeknumber: {
          text: weekNumberref.current.value,
        },
        signature: "",
      });
    }

    details.hifzInfo = hifzArray;

    const res = await updateData(
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
      data.data.userDetails.studentCourseCode,
      data.data.userDetails.studentJamatCode,
      data.data.userDetails.gender,
      data.data.userDetails.dateOfBirth,
      data.data.userDetails.countryName,
      data.data.userDetails.fullPresentAddress,
      data.data.userDetails.fullPermanentAddress,
      data.data.userDetails.admissionSession,
      data.data.userDetails.admissionDate,
      data.data.userDetails.studentMotive,
      details,
      data.data.userDetails.paymentStatus,
      data.data.userDetails.userRole,
      data.data.userDetails.extracurricular,
      data.data.userDetails.activeStatus,
      data.data.userDetails._id,
      data.data.userDetails.studentDepartment,
      data.data.userDetails.studentSemester
    );

    if (res.status == "Alhamdulillah") {
      mytoast.success("WeeklyNumber Data has been recorded");
      let userDetails6 = { ...data.data.userDetails };

      userDetails6.details = details;
      const desiredObj = {
        status: "Alhamdulillah",
        data: {
          userName: data.data.userDetails.userName,
          userRole: data.data.userDetails.userRole,
          isAdmin: data.data.userDetails.isAdmin,
          userDetails: userDetails6,
        },
      };

      dispatch(setInitialData(desiredObj));
      setDetailsC(details);
    }
  }

  async function submitHifzClass(e) {
    e.preventDefault();

    let details = { ...data.data.userDetails.details };
    if (hifzClassref.current.value) {
      details.hifzClass = JSON.parse(hifzClassref.current.value);

      const res = await updateData(
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
        data.data.userDetails.studentCourseCode,
        data.data.userDetails.studentJamatCode,
        data.data.userDetails.gender,
        data.data.userDetails.dateOfBirth,
        data.data.userDetails.countryName,
        data.data.userDetails.fullPresentAddress,
        data.data.userDetails.fullPermanentAddress,
        data.data.userDetails.admissionSession,
        data.data.userDetails.admissionDate,
        data.data.userDetails.studentMotive,
        details,
        data.data.userDetails.paymentStatus,
        data.data.userDetails.userRole,
        data.data.userDetails.extracurricular,
        data.data.userDetails.activeStatus,
        data.data.userDetails._id,
        data.data.userDetails.studentDepartment,
        data.data.userDetails.studentSemester
      );

      if (res.status == "Alhamdulillah") {
        mytoast.success("Hifz Class Selection has been recorded");
        if (typeof window !== "undefined") {
          window.location.reload(true);
        }
      }
    }
  }

  if (classes && courseState) {
    if (courseState.hifjulquran == true) {
      let aMale = classes.filter((item) => {
        return (
          item.courseID == "hifjulquran" &&
          /hifjulquran-male-group1/i.test(item.classID)
        );
      });

      let aFemale1 = classes.filter((item) => {
        return (
          item.courseID == "hifjulquran" &&
          /hifjulquran-female-group1/i.test(item.classID)
        );
      });

      let aFemale2 = classes.filter((item) => {
        return (
          item.courseID == "hifjulquran" &&
          /hifjulquran-female-group2/i.test(item.classID)
        );
      });

      let aFemale3 = classes.filter((item) => {
        return (
          item.courseID == "hifjulquran" &&
          /hifjulquran-female-group3/i.test(item.classID)
        );
      });

      ///start here

      if (
        data.data.userDetails.details &&
        data.data.userDetails.details.hifzClass &&
        /hifjulquran-male-group1/i.test(
          data.data.userDetails.details.hifzClass.groupName
        )
      ) {
        if (aMale.length > 0) {
          aMale.forEach(async (item) => {
            if (item.students.length == 0) {
              let StudentsArray = item.students;

              //StudentsArray is students array inside single class item

              StudentsArray.push({
                SID: data.data.userName,
                sName:
                  data.data.userDetails.firstName.en +
                  " " +
                  data.data.userDetails.lastName.en,
                mobileNumber: data.data.userDetails.mobileNumber,
                attendance: [],
              });

              const res5 = await updateClasses({
                classID: item.classID,
                courseID: item.courseID,
                batchNo: item.batchNo,
                maleClassLink: item.maleClassLink,
                femaleClassLink: item.femaleClassLink,
                departmentID: item.departmentID,
                jamatID: item.jamatID,
                semesterID: item.semesterID,
                bookID: item.bookID,
                teacher: item.teacher,
                examQuestion: item.examQuestion,
                students: StudentsArray,
                classStartTime: item.classStartTime,
                classEndTime: item.classEndTime,
                activeStatus: item.activeStatus,
                idValue: item._id,
              });

              if (res5.status == "Alhamdulillah") {
                console.log(
                  "Blank - A student record has been created inside " +
                    item.classID
                );
              }
            } else if (
              !item.students.some((item2) => item2.SID == data.data.userName)
            ) {
              let StudentsArray = item.students;

              //StudentsArray is students array inside single class item

              StudentsArray.push({
                SID: data.data.userName,
                sName:
                  data.data.userDetails.firstName.en +
                  " " +
                  data.data.userDetails.lastName.en,
                mobileNumber: data.data.userDetails.mobileNumber,
                attendance: [],
              });

              const res5 = await updateClasses({
                classID: item.classID,
                courseID: item.courseID,
                batchNo: item.batchNo,
                maleClassLink: item.maleClassLink,
                femaleClassLink: item.femaleClassLink,
                departmentID: item.departmentID,
                jamatID: item.jamatID,
                semesterID: item.semesterID,
                bookID: item.bookID,
                teacher: item.teacher,
                examQuestion: item.examQuestion,
                students: StudentsArray,
                classStartTime: item.classStartTime,
                classEndTime: item.classEndTime,
                activeStatus: item.activeStatus,
                idValue: item._id,
              });

              if (res5.status == "Alhamdulillah") {
                console.log(
                  "Blank - A student record has been created inside " +
                    item.classID
                );
              }
            }
          });
        }
      }

      if (
        data.data.userDetails.details &&
        data.data.userDetails.details.hifzClass &&
        /hifjulquran-female-group1/i.test(
          data.data.userDetails.details.hifzClass.groupName
        )
      ) {
        if (aFemale1.length > 0) {
          aFemale1.forEach(async (item) => {
            if (item.students.length == 0) {
              let StudentsArray = item.students;

              //StudentsArray is students array inside single class item

              StudentsArray.push({
                SID: data.data.userName,
                sName:
                  data.data.userDetails.firstName.en +
                  " " +
                  data.data.userDetails.lastName.en,
                mobileNumber: data.data.userDetails.mobileNumber,
                attendance: [],
              });

              const res5 = await updateClasses({
                classID: item.classID,
                courseID: item.courseID,
                batchNo: item.batchNo,
                maleClassLink: item.maleClassLink,
                femaleClassLink: item.femaleClassLink,
                departmentID: item.departmentID,
                jamatID: item.jamatID,
                semesterID: item.semesterID,
                bookID: item.bookID,
                teacher: item.teacher,
                examQuestion: item.examQuestion,
                students: StudentsArray,
                classStartTime: item.classStartTime,
                classEndTime: item.classEndTime,
                activeStatus: item.activeStatus,
                idValue: item._id,
              });

              if (res5.status == "Alhamdulillah") {
                console.log(
                  "Blank - A student record has been created inside " +
                    item.classID
                );
              }
            } else if (
              !item.students.some((item2) => item2.SID == data.data.userName)
            ) {
              let StudentsArray = item.students;

              //StudentsArray is students array inside single class item

              StudentsArray.push({
                SID: data.data.userName,
                sName:
                  data.data.userDetails.firstName.en +
                  " " +
                  data.data.userDetails.lastName.en,
                mobileNumber: data.data.userDetails.mobileNumber,
                attendance: [],
              });

              const res5 = await updateClasses({
                classID: item.classID,
                courseID: item.courseID,
                batchNo: item.batchNo,
                maleClassLink: item.maleClassLink,
                femaleClassLink: item.femaleClassLink,
                departmentID: item.departmentID,
                jamatID: item.jamatID,
                semesterID: item.semesterID,
                bookID: item.bookID,
                teacher: item.teacher,
                examQuestion: item.examQuestion,
                students: StudentsArray,
                classStartTime: item.classStartTime,
                classEndTime: item.classEndTime,
                activeStatus: item.activeStatus,
                idValue: item._id,
              });

              if (res5.status == "Alhamdulillah") {
                console.log(
                  "Blank - A student record has been created inside " +
                    item.classID
                );
              }
            }
          });
        }
      }

      if (
        data.data.userDetails.details &&
        data.data.userDetails.details.hifzClass &&
        /hifjulquran-female-group2/i.test(
          data.data.userDetails.details.hifzClass.groupName
        )
      ) {
        if (aFemale2.length > 0) {
          aFemale2.forEach(async (item) => {
            if (item.students.length == 0) {
              let StudentsArray = item.students;

              //StudentsArray is students array inside single class item

              StudentsArray.push({
                SID: data.data.userName,
                sName:
                  data.data.userDetails.firstName.en +
                  " " +
                  data.data.userDetails.lastName.en,
                mobileNumber: data.data.userDetails.mobileNumber,
                attendance: [],
              });

              const res5 = await updateClasses({
                classID: item.classID,
                courseID: item.courseID,
                batchNo: item.batchNo,
                maleClassLink: item.maleClassLink,
                femaleClassLink: item.femaleClassLink,
                departmentID: item.departmentID,
                jamatID: item.jamatID,
                semesterID: item.semesterID,
                bookID: item.bookID,
                teacher: item.teacher,
                examQuestion: item.examQuestion,
                students: StudentsArray,
                classStartTime: item.classStartTime,
                classEndTime: item.classEndTime,
                activeStatus: item.activeStatus,
                idValue: item._id,
              });

              if (res5.status == "Alhamdulillah") {
                console.log(
                  "Blank - A student record has been created inside " +
                    item.classID
                );
              }
            } else if (
              !item.students.some((item2) => item2.SID == data.data.userName)
            ) {
              let StudentsArray = item.students;

              //StudentsArray is students array inside single class item

              StudentsArray.push({
                SID: data.data.userName,
                sName:
                  data.data.userDetails.firstName.en +
                  " " +
                  data.data.userDetails.lastName.en,
                mobileNumber: data.data.userDetails.mobileNumber,
                attendance: [],
              });

              const res5 = await updateClasses({
                classID: item.classID,
                courseID: item.courseID,
                batchNo: item.batchNo,
                maleClassLink: item.maleClassLink,
                femaleClassLink: item.femaleClassLink,
                departmentID: item.departmentID,
                jamatID: item.jamatID,
                semesterID: item.semesterID,
                bookID: item.bookID,
                teacher: item.teacher,
                examQuestion: item.examQuestion,
                students: StudentsArray,
                classStartTime: item.classStartTime,
                classEndTime: item.classEndTime,
                activeStatus: item.activeStatus,
                idValue: item._id,
              });

              if (res5.status == "Alhamdulillah") {
                console.log(
                  "Blank - A student record has been created inside " +
                    item.classID
                );
              }
            }
          });
        }
      }

      if (
        data.data.userDetails.details &&
        data.data.userDetails.details.hifzClass &&
        /hifjulquran-female-group3/i.test(
          data.data.userDetails.details.hifzClass.groupName
        )
      ) {
        if (aFemale3.length > 0) {
          aFemale3.forEach(async (item) => {
            if (item.students.length == 0) {
              let StudentsArray = item.students;

              //StudentsArray is students array inside single class item

              StudentsArray.push({
                SID: data.data.userName,
                sName:
                  data.data.userDetails.firstName.en +
                  " " +
                  data.data.userDetails.lastName.en,
                mobileNumber: data.data.userDetails.mobileNumber,
                attendance: [],
              });

              const res5 = await updateClasses({
                classID: item.classID,
                courseID: item.courseID,
                batchNo: item.batchNo,
                maleClassLink: item.maleClassLink,
                femaleClassLink: item.femaleClassLink,
                departmentID: item.departmentID,
                jamatID: item.jamatID,
                semesterID: item.semesterID,
                bookID: item.bookID,
                teacher: item.teacher,
                examQuestion: item.examQuestion,
                students: StudentsArray,
                classStartTime: item.classStartTime,
                classEndTime: item.classEndTime,
                activeStatus: item.activeStatus,
                idValue: item._id,
              });

              if (res5.status == "Alhamdulillah") {
                console.log(
                  "Blank - A student record has been created inside " +
                    item.classID
                );
              }
            } else if (
              !item.students.some((item2) => item2.SID == data.data.userName)
            ) {
              let StudentsArray = item.students;

              //StudentsArray is students array inside single class item

              StudentsArray.push({
                SID: data.data.userName,
                sName:
                  data.data.userDetails.firstName.en +
                  " " +
                  data.data.userDetails.lastName.en,
                mobileNumber: data.data.userDetails.mobileNumber,
                attendance: [],
              });

              const res5 = await updateClasses({
                classID: item.classID,
                courseID: item.courseID,
                batchNo: item.batchNo,
                maleClassLink: item.maleClassLink,
                femaleClassLink: item.femaleClassLink,
                departmentID: item.departmentID,
                jamatID: item.jamatID,
                semesterID: item.semesterID,
                bookID: item.bookID,
                teacher: item.teacher,
                examQuestion: item.examQuestion,
                students: StudentsArray,
                classStartTime: item.classStartTime,
                classEndTime: item.classEndTime,
                activeStatus: item.activeStatus,
                idValue: item._id,
              });

              if (res5.status == "Alhamdulillah") {
                console.log(
                  "Blank - A student record has been created inside " +
                    item.classID
                );
              }
            }
          });
        }
      }
    }
  }

  if (data) {
    if (data.data.userDetails.studentCourseCode.length < 1) {
      return <EnrollPlease />;
    } else if (
      data.data.userDetails.studentCourseCode[
        data.data.userDetails.studentCourseCode.length - 1
      ].status == "inactive"
    ) {
      return <WaitingApproval />;
    } else if (showPage) {
      if (showMainPage) {
        let myJson = [];
        if (detailsC.hifzInfo) {
          function niceDate2(startDate) {
            const startDateObj = new Date(startDate);

            // Check if the start date is valid
            if (isNaN(startDateObj.getTime())) {
              // Invalid start date string
              return null;
            }

            const endDate = new Date();
            endDate.setDate(endDate.getDate() + 30); // Set end date to 30 days after the start date

            const dates = [];

            // Loop through each day from start date to end date
            while (startDateObj <= endDate) {
              const options = {
                month: "long",
                day: "numeric",
                year: "numeric",
              };

              const formattedDate = startDateObj.toLocaleDateString(
                "en-US",
                options
              );
              dates.push(formattedDate);

              // Move to the next day
              startDateObj.setDate(startDateObj.getDate() + 1);
            }

            return dates;
          }

          // Example usage:
          const startingDate = detailsC && detailsC.hifzInfo[0].date; // Your choice of starting date
          const datesArray = niceDate2(startingDate);

          datesArray.forEach((item) => {
            const hifzInfoMatch = detailsC.hifzInfo.find(
              (item2) => item2.date === item
            );
            if (hifzInfoMatch) {
              myJson.push({
                date: item,
                day: hifzInfoMatch.day,
                week: hifzInfoMatch.weeknumber
                  ? hifzInfoMatch.weeknumber.text
                  : "--",
                sabak: {
                  para: hifzInfoMatch.sabak ? hifzInfoMatch.sabak.para : "--",
                  page: hifzInfoMatch.sabak ? hifzInfoMatch.sabak.page : "--",
                },

                satsabak: {
                  para: hifzInfoMatch.satsabak
                    ? hifzInfoMatch.satsabak.para
                    : "--",
                  page: hifzInfoMatch.satsabak
                    ? hifzInfoMatch.satsabak.page
                    : "--",
                  amount: hifzInfoMatch.satsabak
                    ? hifzInfoMatch.satsabak.amount
                    : "--",
                  lokma: hifzInfoMatch.satsabak
                    ? hifzInfoMatch.satsabak.lokma
                    : "--",
                  dohorana: hifzInfoMatch.satsabak
                    ? hifzInfoMatch.satsabak.dohorana
                    : "--",
                },
                amukhta: {
                  para: hifzInfoMatch.amukhta
                    ? hifzInfoMatch.amukhta.para
                    : "--",
                  page: hifzInfoMatch.amukhta
                    ? hifzInfoMatch.amukhta.page
                    : "--",
                  amount: hifzInfoMatch.amukhta
                    ? hifzInfoMatch.amukhta.amount
                    : "--",
                  lokma: hifzInfoMatch.amukhta
                    ? hifzInfoMatch.amukhta.lokma
                    : "--",
                  dohorana: hifzInfoMatch.amukhta
                    ? hifzInfoMatch.amukhta.dohorana
                    : "--",
                },
                dailyTilwat: hifzInfoMatch.dailytilwat
                  ? hifzInfoMatch.dailytilwat.text
                  : "--",
                signature: hifzInfoMatch.signature
                  ? hifzInfoMatch.signature
                  : "দেখে নাই",
              });
            } else {
              myJson.push({
                date: item,
                day: "--",
                week: "--",
                sabak: { para: "--", page: "--" },
                satsabak: {
                  para: "--",
                  page: "--",
                  amount: "--",
                  lokma: "--",
                  dohorana: "--",
                },
                amukhta: {
                  para: "--",
                  page: "--",
                  amount: "--",
                  lokma: "--",
                  dohorana: "--",
                },
                dailyTilwat: "--",
                signature: "--",
              });
            }
          });
        }

        return (
          <>
            <div>
              <div className="w-full text-center md:w-9/12 mt-12 md:mt-[80px] rounded-3xl mx-auto text-4xl md:text-2x transition duration-500 ease-out mb-4">
                প্রতিদিন হিফজের তথ্য লিখুন
              </div>
              <div className="w-[95%] md:w-[50%] mx-auto p-5 border-0 md:border-2 border-slate-300 rounded-3xl mt-5 md:mt-5 bg-white">
                <h2 className="font-bold text-center mb-5" htmlFor="todaydate">
                  সবকের তথ্য দিন
                </h2>
                <form>
                  <label className="font-bold text-2xl" htmlFor="todaydate">
                    Today's Date:
                  </label>
                  <input
                    id="todaydate"
                    name="todaydate"
                    className="my-4 p-0 md:p-4 box-border w-full rounded-3xl"
                    type="text"
                    value={niceDate(currentDate)}
                    disabled
                  ></input>

                  <div className="flex-row md:flex justify-between gap-2">
                    <div className="w-full border-[2px] border-slate-300 rounded-2xl p-2 mb-4">
                      <label className="font-bold text-2xl" htmlFor="sabakpara">
                        পারা:
                      </label>
                      <input
                        id="sabakpara"
                        ref={sabakpararef}
                        name="sabakpara"
                        className="my-4 p-0 md:p-4 box-border w-full rounded-3xl"
                        type="text"
                        placeholder="কত পারা সেটা লিখুন"
                      ></input>
                    </div>

                    <div className="w-full border-[2px] border-slate-300 rounded-2xl p-2">
                      <label className="font-bold text-2xl" htmlFor="sabakpage">
                        পৃষ্ঠা:
                      </label>
                      <input
                        id="sabakpage"
                        ref={sabakpageref}
                        name="sabakpage"
                        className="my-4 p-0 md:p-4 box-border w-full rounded-3xl"
                        type="text"
                        placeholder="কত পৃষ্ঠা লিখুন"
                      ></input>
                    </div>
                  </div>

                  <button
                    onClick={sabakSubmit}
                    className="bg-blue-500 text-white text-lg font-bold mt-6 rounded-3xl w-full overflow-hidden"
                  >
                    <div className="p-5">আজকের সবকের তথ্য দিন</div>
                  </button>
                </form>
              </div>
              <div className="w-[95%] md:w-[50%] mx-auto p-5 border-0 md:border-2 border-slate-300 rounded-3xl mt-5 md:mt-5 bg-white">
                <h2 className="font-bold text-center mb-5" htmlFor="todaydate">
                  সাতসবকের তথ্য দিন
                </h2>
                <form>
                  <label className="font-bold text-2xl" htmlFor="todaydate">
                    Today's Date:
                  </label>
                  <input
                    id="todaydate"
                    value={niceDate(currentDate)}
                    name="todaydate"
                    className="my-4 p-0 md:p-4 box-border w-full rounded-3xl"
                    type="text"
                    disabled
                  ></input>

                  <div className="flex-row md:flex justify-between gap-2">
                    <div className="w-full border-[2px] border-slate-300 rounded-2xl p-2 mb-4">
                      <label
                        className="font-bold text-2xl"
                        htmlFor="satsabakpara"
                      >
                        পারা:
                      </label>
                      <input
                        id="satsabakpara"
                        ref={satsabakpararef}
                        name="satsabakpara"
                        className="my-4 p-0 md:p-4 box-border w-full rounded-3xl text"
                        type="text"
                        placeholder="কত পারা সেটা লিখুন"
                      ></input>
                    </div>
                    <div className="w-full border-[2px] border-slate-300 rounded-2xl p-2 mb-4">
                      <label
                        className="font-bold text-2xl"
                        htmlFor="satsabakpage"
                      >
                        পৃষ্ঠা:
                      </label>
                      <input
                        id="satsabakpage"
                        ref={satsabakpageref}
                        name="satsabakpage"
                        className="my-4 p-0 md:p-4 box-border w-full rounded-3xl"
                        type="text"
                        placeholder="কত পৃষ্ঠা লিখুন"
                      ></input>
                    </div>
                  </div>
                  <div className="flex-row md:flex justify-between gap-2 mt-5">
                    <div className="w-full border-[2px] border-slate-300 rounded-2xl p-2 mb-4">
                      <label
                        className="font-bold text-2xl"
                        htmlFor="satsabakamount"
                      >
                        পরিমাণ:
                      </label>
                      <input
                        id="satsabakamount"
                        ref={satsabakamountref}
                        name="satsabakamount"
                        className="my-4 p-0 md:p-4 box-border w-full rounded-3xl text"
                        type="text"
                        placeholder="পৃষ্ঠার পরিমাণ লিখুন"
                      ></input>
                    </div>
                    <div className="w-full border-[2px] border-slate-300 rounded-2xl p-2 mb-4">
                      <label
                        className="font-bold text-2xl"
                        htmlFor="satsabaklokma"
                      >
                        লোকমা:
                      </label>
                      <input
                        id="satsabaklokma"
                        ref={satsabaklokmaref}
                        name="satsabaklokma"
                        className="my-4 p-0 md:p-4 box-border w-full rounded-3xl"
                        type="text"
                        placeholder="লোকমার পরিমাণ লিখুন"
                      ></input>
                    </div>
                    <div className="w-full border-[2px] border-slate-300 rounded-2xl p-2">
                      <label
                        className="font-bold text-2xl"
                        htmlFor="satsabakdohorana"
                      >
                        দোহরানা:
                      </label>

                      <input
                        id="satsabakdohorana"
                        ref={satsabakdohoranaref}
                        name="satsabakdohorana"
                        className="my-4 p-0 md:p-4 box-border w-full rounded-3xl"
                        type="text"
                        placeholder="দোহরানার পরিমাণ লিখুন"
                      ></input>
                    </div>
                  </div>

                  <button
                    onClick={satsabakSubmit}
                    className="bg-blue-500 text-white text-lg font-bold mt-6 rounded-3xl w-full overflow-hidden"
                  >
                    <div className="p-5">আজকের সাতসবকের তথ্য দিন</div>
                  </button>
                </form>
              </div>
              <div className="w-[95%] md:w-[50%] mx-auto p-5 border-0 md:border-2 border-slate-300 rounded-3xl mt-5 md:mt-5 bg-white">
                <h2 className="font-bold text-center mb-5" htmlFor="todaydate">
                  আমুখতার তথ্য দিন
                </h2>
                <form>
                  <label className="font-bold text-2xl" htmlFor="todaydate">
                    Today's Date:
                  </label>
                  <input
                    id="todaydate"
                    value={niceDate(currentDate)}
                    name="todaydate"
                    className="my-4 p-0 md:p-4 box-border w-full rounded-3xl"
                    type="text"
                    disabled
                  ></input>

                  <div className="flex-row md:flex justify-between gap-2">
                    <div className="w-full border-[2px] border-slate-300 rounded-2xl p-2 mb-4">
                      <label
                        className="font-bold text-2xl"
                        htmlFor="amukhtapara"
                      >
                        পারা:
                      </label>
                      <input
                        id="amukhtapara"
                        ref={amukhtapararef}
                        name="amukhtapara"
                        className="my-4 p-0 md:p-4 box-border w-full rounded-3xl text"
                        type="text"
                        placeholder="কত পারা সেটা লিখুন"
                      ></input>
                    </div>
                    <div className="w-full border-[2px] border-slate-300 rounded-2xl p-2 mb-4">
                      <label
                        className="font-bold text-2xl"
                        htmlFor="amukhtapage"
                      >
                        পৃষ্ঠা:
                      </label>
                      <input
                        id="amukhtapage"
                        ref={amukhtapageref}
                        name="amukhtapage"
                        className="my-4 p-0 md:p-4 box-border w-full rounded-3xl"
                        type="text"
                        placeholder="কত পৃষ্ঠা লিখুন"
                      ></input>
                    </div>
                  </div>
                  <div className="flex-row md:flex justify-between gap-2 mt-5">
                    <div className="w-full border-[2px] border-slate-300 rounded-2xl p-2 mb-4">
                      <label
                        className="font-bold text-2xl"
                        htmlFor="amukhtaamount"
                      >
                        পরিমাণ:
                      </label>
                      <input
                        id="amukhtaamount"
                        ref={amukhtaamountref}
                        name="amukhtaamount"
                        className="my-4 p-0 md:p-4 box-border w-full rounded-3xl text"
                        type="text"
                        placeholder="পৃষ্ঠার পরিমাণ লিখুন"
                      ></input>
                    </div>
                    <div className="w-full border-[2px] border-slate-300 rounded-2xl p-2 mb-4">
                      <label
                        className="font-bold text-2xl"
                        htmlFor="amukhtalokma"
                      >
                        লোকমা:
                      </label>
                      <input
                        id="amukhtalokma"
                        ref={amukhtalokmaref}
                        name="amukhtalokma"
                        className="my-4 p-0 md:p-4 box-border w-full rounded-3xl"
                        type="text"
                        placeholder="লোকমার পরিমাণ লিখুন"
                      ></input>
                    </div>
                    <div className="w-full border-[2px] border-slate-300 rounded-2xl p-2">
                      <label
                        className="font-bold text-2xl"
                        htmlFor="amukhtadohorana"
                      >
                        দোহরানা:
                      </label>

                      <input
                        id="amukhtadohorana"
                        ref={amukhtadohoranaref}
                        name="amukhtadohorana"
                        className="my-4 p-0 md:p-4 box-border w-full rounded-3xl"
                        type="text"
                        placeholder="আমুখতার পরিমাণ লিখুন"
                      ></input>
                    </div>
                  </div>

                  <button
                    onClick={amukhtaSubmit}
                    className="bg-blue-500 text-white text-lg font-bold mt-6 rounded-3xl w-full overflow-hidden"
                  >
                    <div className="p-5">আজকের আমুখতার তথ্য দিন</div>
                  </button>
                </form>
              </div>

              <div className="w-[95%] md:w-[50%] mx-auto p-5 border-0 md:border-2 border-slate-300 rounded-3xl mt-5 md:mt-5 bg-white">
                <h2 className="font-bold text-center mb-5" htmlFor="todaydate">
                  প্রতিদিনের তিলওয়াতের তথ্য দিন
                </h2>
                <form>
                  <label className="font-bold text-2xl" htmlFor="todaydate">
                    Today's Date:
                  </label>
                  <input
                    id="todaydate"
                    name="todaydate"
                    value={niceDate(currentDate)}
                    className="my-4 p-0 md:p-4 box-border w-full rounded-3xl"
                    type="text"
                    disabled
                  ></input>

                  <div className="flex-row md:flex justify-between gap-2">
                    <div className="w-full border-[2px] border-slate-300 rounded-2xl p-2 mb-4">
                      <label className="font-bold text-2xl" htmlFor="tilwat">
                        তিলওয়াত:
                      </label>
                      <input
                        id="tilwat"
                        ref={tilwatref}
                        name="tilwat"
                        className="my-4 p-4 box-border w-full rounded-3xl"
                        type="text"
                        placeholder="কতটুকু তিলওয়াত করেছেন লিখুন"
                      ></input>
                    </div>
                  </div>

                  <button
                    onClick={tilwatSubmit}
                    className="bg-blue-500 text-white text-lg font-bold mt-6 rounded-3xl w-full overflow-hidden"
                  >
                    <div className="p-5">আজকের তিলওয়াতের তথ্য দিন</div>
                  </button>
                </form>
              </div>

              <div className="w-[95%] md:w-[50%] mx-auto p-5 border-0 md:border-2 border-slate-300 rounded-3xl mt-5 md:mt-5 bg-white">
                <h2 className="font-bold text-center mb-5" htmlFor="todaydate">
                  সপ্তাহের তথ্য দিন
                </h2>
                <form>
                  <label className="font-bold text-2xl" htmlFor="todaydate">
                    Today's Date:
                  </label>
                  <input
                    id="todaydate"
                    name="todaydate"
                    value={niceDate(currentDate)}
                    className="my-4 p-0 md:p-4 box-border w-full rounded-3xl"
                    type="text"
                    disabled
                  ></input>

                  <div className="flex-row md:flex justify-between gap-2">
                    <div className="w-full border-[2px] border-slate-300 rounded-2xl p-2 mb-4">
                      <label
                        className="font-bold text-2xl"
                        htmlFor="weekNumber"
                      >
                        সপ্তাহ:
                      </label>
                      <select
                        id="weekNumber"
                        ref={weekNumberref}
                        name="weekNumber"
                        className="my-4 p-4 box-border w-full rounded-3xl"
                        required
                      >
                        <option value="">সপ্তাহ সিলেক্ট করুন</option>
                        <option value="1st week">১ম সপ্তাহ</option>
                        <option value="2nd week">২য় সপ্তাহ</option>
                        <option value="3rd week">৩য় সপ্তাহ</option>
                        <option value="4th week">৪র্থ সপ্তাহ</option>
                        <option value="5th week">৫ম সপ্তাহ</option>
                      </select>
                    </div>
                  </div>

                  <button
                    onClick={weekNumberSubmit}
                    className="bg-blue-500 text-white text-lg font-bold mt-6 rounded-3xl w-full overflow-hidden"
                  >
                    <div className="p-5">সপ্তাহের তথ্য দিন</div>
                  </button>
                </form>
              </div>
              <div className="mt-10 w-[100vw] p-5">
                <div className="hifz_table">
                  <h5 className="text-center">
                    শিক্ষার্থীর নাম:{" "}
                    {data.data.userDetails.firstName.en +
                      " " +
                      data.data.userDetails.lastName.en}
                  </h5>
                  <h5 className="text-center">
                    ক্লাস গ্রুপ: {detailsC && detailsC.hifzClass.groupName}
                  </h5>

                  <h5 className="text-center">
                    ওস্তাদ/ওস্তাজার নাম:{" "}
                    {detailsC && getTeacherName(detailsC.hifzClass.ostad)}
                  </h5>

                  <div class="table_container mt-10">
                    <table>
                      <thead className="sticky top-0">
                        <tr>
                          <th rowSpan={2}>তারিখ/Date</th>
                          <th rowSpan={2}>বার/Day</th>
                          <th rowSpan={2}>সপ্তাহ/Week</th>
                          <th colSpan={2}>সবক/Sabak</th>
                          <th colSpan={5}>সাতসবক/SatSabak</th>
                          <th colSpan={5}>আমুখতা/Amukhta</th>
                          <th rowSpan={2}>দৈনিক তিলওয়াত/Daily Tilawat</th>
                          <th rowSpan={2}>শিক্ষকের মন্তব্য/Teacher's Comment</th>
                        </tr>
                        <tr>
                          <th>পারা/Verse</th>
                          <th>পৃষ্ঠা/Page</th>
                          <th>পারা/Verse</th>
                          <th>পৃষ্ঠা/Page</th>
                          <th>পরিমাণ/Amount</th>
                          <th>লোকমা/Lokma</th>
                          <th>দোহরানা/Dohorana</th>

                          <th>পারা/Verse</th>
                          <th>পৃষ্ঠা/Page</th>
                          <th>পরিমাণ/Amount</th>
                          <th>লোকমা/Lokma</th>
                          <th>দোহরানা/Dohorana</th>
                        </tr>
                      </thead>
                      <tbody>
                        {myJson &&
                          myJson.map((item, i) => (
                            <tr key={i}>
                              <td>{item.date}</td>
                              <td>{item.day}</td>
                              <td>{item.week}</td>
                              <td>{item.sabak.para}</td>
                              <td>{item.sabak.page}</td>
                              <td>{item.satsabak.para}</td>
                              <td>{item.satsabak.page}</td>
                              <td>{item.satsabak.amount}</td>
                              <td>{item.satsabak.lokma}</td>
                              <td>{item.satsabak.dohorana}</td>
                              <td>{item.amukhta.para}</td>
                              <td>{item.amukhta.page}</td>
                              <td>{item.amukhta.amount}</td>
                              <td>{item.amukhta.lokma}</td>
                              <td>{item.amukhta.dohorana}</td>
                              <td>{item.dailyTilwat}</td>
                              <td>{item.signature}</td>
                            </tr>
                          ))}
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
            </div>
          </>
        );
      } else {
        return (
          <div>
            <div className="w-[95%] md:w-[50%] mx-auto p-5 border-0 md:border-2 border-slate-300 rounded-3xl mt-5 md:mt-5 bg-white">
              <form>
                <div className="flex-row md:flex justify-between gap-10 mb-4">
                  <div className="w-full border-[2px] border-slate-300 rounded-2xl p-2">
                    <label
                      className="font-bold text-2xl"
                      htmlFor="hifzClassSelector"
                    >
                      আপনি হিফজ বিভাগের কোন ক্লাসে অধ্যায়নরত ? :
                    </label>
                    <select
                      id="hifzClassSelector"
                      ref={hifzClassref}
                      name="hifzClassSelector"
                      className="my-4 p-4 box-border w-full rounded-3xl"
                      type="text"
                    >
                      <option value=""> Select option</option>

                      {classes &&
                        classes
                          .filter((item) => item.courseID == "hifjulquran")
                          .map((item, i) => (
                            <option
                              key={i}
                              value={JSON.stringify({
                                groupName: item.classID,
                                ostad: item.teacher.TID,
                              })}
                            >
                              {item.classID}
                            </option>
                          ))}
                    </select>
                  </div>
                </div>

                <button
                  onClick={submitHifzClass}
                  className="bg-blue-500 text-white text-lg font-bold mt-6 rounded-3xl w-full overflow-hidden"
                >
                  <div className="p-5">তথ্য দিন</div>
                </button>
              </form>
            </div>
          </div>
        );
      }
    } else if (!showPage) {
      return <NotAllow allowList={allowList} />;
    }
  }
}

export default HifzPage;
