"use client";

import { useSelector } from "react-redux";

import EnrollPlease from "@/components/dashboardPage/enrollPlease";
import WaitingApproval from "@/components/dashboardPage/WaitingApproval";
import { useState, useEffect } from "react";
import { selectDataTwo } from "@/apiservices/studentapiservices";
import NotAllow from "@/components/dashboardPage/notAllow";
import AbacusMainPageTeacher from "@/components/dashboardPage/abacusPage/abacusMainPageTeacher";

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

  const allowList = ["abacus_teacher"];

  useEffect(() => {
    async function getData() {
      const res = await selectDataTwo(
        { userName: data.data.userDetails.userName },
        null
      );
      if (res.status == "Alhamdulillah") {
        if (res.data[0].studentCourseCode.length > 0) {
          res.data[0].studentCourseCode.forEach((item) => {
            if (item.code == "abacus_teacher" && item.status == "active") {
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
      return (
        <>
          <div className="w-11/12 md:w-9/12 mt-12 md:mt-[80px] rounded-3xl mx-auto p-4 text-lg md:text-2xl bg-[#013030] text-white transition duration-500 ease-out mb-4">
            অ্যাবাকাস শিক্ষক প্রশিক্ষণ ক্ল্যাশটি করতে আপনার একটি কীট এবং বই
            লাগবে । যেটা নিচের "Abacus Books & kit" অপশনে যেয়ে অর্ডার করতে
            পারবেন। লাইভ ক্ল্যাস গ্রুপে যুক্ত হতে "Live Class Link & Schedule" এ
            প্রবেশ করুন।
          </div>

          <AbacusMainPageTeacher />
        </>
      );
    } else if (!showPage) {
      return <NotAllow allowList={allowList} />;
    }
  }
}

export default AbacusPage;
