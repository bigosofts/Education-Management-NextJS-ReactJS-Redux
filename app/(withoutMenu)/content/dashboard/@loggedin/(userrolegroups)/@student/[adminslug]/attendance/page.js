"use client";
import { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import EnrollPlease from "@/components/dashboardPage/enrollPlease";
import WaitingApproval from "@/components/dashboardPage/WaitingApproval";
import NotAllow from "@/components/dashboardPage/notAllow";
import AttendancePageCustom from "@/components/attendance/attendance";

function AttendancePage() {
  const data = useSelector((state) => state.isAdmin.value);

  const [showPage, setShowPage] = useState();

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
  const allowList = [
    "alemalema",
    "schoolalemalema",
    "prealemalema",
    "abacus_student",

    "shishumaktab",

    "farzeayinnajera",
    "hifjulquran",

    "ramadanquranulkarim",
  ];

  useEffect(() => {
    async function getData() {
      if (data.status == "Alhamdulillah") {
        if (data.data.userDetails.studentCourseCode.length > 0) {
          setShowPage(true);
        }
      }
    }
    getData();
  }, []);

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
      return <AttendancePageCustom />;
    } else if (!showPage) {
      return <NotAllow allowList={allowList} />;
    }
  }
}

export default AttendancePage;
