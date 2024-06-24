"use client";

import { useSelector } from "react-redux";
import EnrollPlease from "@/components/dashboardPage/enrollPlease";
import WaitingApproval from "@/components/dashboardPage/WaitingApproval";
import { useState, useEffect } from "react";
import { selectDataTwo } from "@/apiservices/studentapiservices";
import NotAllow from "@/components/dashboardPage/notAllow";
import BookPageDesign from "@/customComponents/bookPage/bookPage";

function BookPage() {
  const data = useSelector((state) => state.isAdmin.value);
  const studentsData = useSelector((state) => state.students.students);

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
      let res = { data: null };

      res.data =
        studentsData.length > 0 &&
        studentsData.filter(
          (item) => item.userName == data.data.userDetails.userName
        );

      if (res.data.length > 0) {
        if (res.data[0].studentCourseCode.length > 0) {
          setShowPage(true);
        }
      }
    }
    getData();
  }, [studentsData]);

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
      return <BookPageDesign />;
    } else if (!showPage) {
      return <NotAllow allowList={allowList} />;
    }
  }
}

export default BookPage;
