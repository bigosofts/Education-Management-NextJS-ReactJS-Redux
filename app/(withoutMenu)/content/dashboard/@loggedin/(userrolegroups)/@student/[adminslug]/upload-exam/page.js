"use client";

import { useSelector } from "react-redux";
import EnrollPlease from "@/components/dashboardPage/enrollPlease";
import WaitingApproval from "@/components/dashboardPage/WaitingApproval";
import { useState, useEffect } from "react";
import NotAllow from "@/components/dashboardPage/notAllow";
import UploadExamStudent from "@/components/uploadExamComponent/uploadExam";

function UploadExam() {
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
    "shishumaktab",
    "farzeayinnajera",
    "abacus_student",
  ];

  useEffect(() => {
    async function getData() {
      let course;

      if (data.data.userDetails.studentCourseCode.length > 0) {
        course =
          data.data.userDetails.studentCourseCode[
            data.data.userDetails.studentCourseCode.length - 1
          ].code;
      }

      if (allowList.some((item) => item == course)) {
        setShowPage(true);
      } else {
        setShowPage(false);
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
      return <UploadExamStudent />;
    } else if (!showPage) {
      return <NotAllow allowList={allowList} />;
    }
  }
}

export default UploadExam;
