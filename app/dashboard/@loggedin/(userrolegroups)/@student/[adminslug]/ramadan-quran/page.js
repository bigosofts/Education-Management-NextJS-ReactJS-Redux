"use client";

import { useSelector } from "react-redux";

import EnrollPlease from "@/components/dashboardPage/enrollPlease";
import WaitingApproval from "@/components/dashboardPage/WaitingApproval";
import { useState, useEffect } from "react";
import { selectDataTwo } from "@/apiservices/studentapiservices";
import NotAllow from "@/components/dashboardPage/notAllow";
import RamadanQuranMainPage from "@/components/dashboardPage/abacusPage/ramadanQuranMainPage";

function AbacusPage(props) {
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
  const allowList = ["ramadanquranulkarim"];

  useEffect(() => {
    async function getData() {
      const res = await selectDataTwo(
        { userName: data.data.userDetails.userName },
        null
      );
      if (res.status == "Alhamdulillah") {
        if (res.data[0].studentCourseCode.length > 0) {
          res.data[0].studentCourseCode.forEach((item) => {
            if (item.code == "ramadanquranulkarim" && item.status == "active") {
              setShowPage(true);
            }
          });
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
      return <RamadanQuranMainPage />;
    } else if (!showPage) {
      return <NotAllow allowList={allowList} />;
    }
  }
}

export default AbacusPage;
