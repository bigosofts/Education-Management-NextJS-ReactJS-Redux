"use client";
import { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import EnrollPlease from "@/components/dashboardPage/enrollPlease";
import WaitingApproval from "@/components/dashboardPage/WaitingApproval";
import { selectDataTwo } from "@/apiservices/studentapiservices";
import NotAllow from "@/components/dashboardPage/notAllow";

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
  ];
  const allowList = [
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
  ];

  useEffect(() => {
    async function getData() {
      const res = await selectDataTwo(
        { userName: data.data.userDetails.userName },
        null
      );
      if (res.status == "Alhamdulillah") {
        let course =
          res.data[0].studentCourseCode[
            res.data[0].studentCourseCode.length - 1
          ].code;
        if (allowList.some((item) => item == course)) {
          setShowPage(true);
        } else {
          setShowPage(false);
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
      return <div>Attendance Page</div>;
    } else {
      setTimeout(()=>{
        return <NotAllow allowList={allowList} />;
      },1000)
    }
  }
}

export default AttendancePage;
