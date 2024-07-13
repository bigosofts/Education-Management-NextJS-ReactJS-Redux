"use client";

import { useSelector } from "react-redux";

import EnrollPlease from "@/components/dashboardPage/enrollPlease";
import WaitingApproval from "@/components/dashboardPage/WaitingApproval";
import { useState, useEffect } from "react";
import { selectDataTwo } from "@/apiservices/studentapiservices";
import NotAllow from "@/components/dashboardPage/notAllow";
import AlemalemaMain from "@/components/dashboardPage/alemalemaPage/alemalemaMain";
import UrduMain from "@/components/dashboardPage/urdupage/urduMain";
import EzraMain from "@/components/dashboardPage/ezrapage/ezraMain";
import FarzeayinamparaMain from "@/components/dashboardPage/farzeayinamparapage/farzeayinamparaMain";
import FarzeayinmaktabMain from "@/components/dashboardPage/farzeayinmaktabpage/farzeayinmaktabMain";
import FarzeayinnajeraMain from "@/components/dashboardPage/farzeayinnajerapage/farzeayinnajetaMain";
import ShishumaktabMain from "@/components/dashboardPage/shishumaktabpage/shishumaktabMain";
import ShishunajeraMain from "@/components/dashboardPage/shishunajerapage/shishunajeraMain";
import HifjulquranMain from "@/components/dashboardPage/hifjulquranpage/hifjulquranMain";
import SchoolAlemalemaMain from "@/components/dashboardPage/schoolalemalemapage/alemalemaMain";
import PreAlemalemaMain from "@/components/dashboardPage/prealemalemapage/alemalemaMain";

function AbacusPage(props) {
  const data = useSelector((state) => state.isAdmin.value);
  const studentsData = useSelector((state) => state.students.students);

  const [showPage, setShowPage] = useState();
  const [isAlemalema, setIsAlemalema] = useState();
  const [isSchoolAlemalema, setIsSchoolAlemalema] = useState();
  const [isPreAlemalema, setIsPreAlemalema] = useState();
  const [isUrdu, setIsUrdu] = useState(false);
  const [isEzra, setIsEzra] = useState(false);
  const [isShishunajera, setIsShishunajera] = useState(false);
  const [isShishumaktab, setIsShishumaktab] = useState(false);
  const [isFarzeayinmaktab, setIsFarzeayinmaktab] = useState(false);
  const [isFarzeayinnajera, setIsFarzeayinnajera] = useState(false);
  const [isHifjulquran, setIsHifjulquran] = useState(false);
  const [isFarzeayinampara, setIsFarzeayinampara] = useState(false);

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
        studentsData &&
        studentsData.filter(
          (item) => item.userName == data.data.userDetails.userName
        );

      if (res.data.length > 0) {
        if (res.data[0].studentCourseCode.length > 0) {
          res.data[0].studentCourseCode.forEach((item, i) => {
            if (item.code == "alemalema" && item.status == "active") {
              setShowPage(true);
              setIsAlemalema(true);
            } else if (
              item.code == "schoolalemalema" &&
              item.status == "active"
            ) {
              setShowPage(true);
              setIsSchoolAlemalema(true);
            } else if (item.code == "prealemalema" && item.status == "active") {
              setShowPage(true);
              setIsPreAlemalema(true);
            } else if (item.code == "hifjulquran" && item.status == "active") {
              setShowPage(true);
              setIsHifjulquran(true);
            } else if (item.code == "shishunajera" && item.status == "active") {
              setShowPage(true);
              setIsShishunajera(true);
            } else if (item.code == "shishumaktab" && item.status == "active") {
              setShowPage(true);
              setIsShishumaktab(true);
            } else if (
              item.code == "farzeayinmaktab" &&
              item.status == "active"
            ) {
              setShowPage(true);
              setIsFarzeayinmaktab(true);
            } else if (
              item.code == "farzeayinnajera" &&
              item.status == "active"
            ) {
              setShowPage(true);
              setIsFarzeayinnajera(true);
            } else if (
              item.code == "ezranahusorof" &&
              item.status == "active"
            ) {
              setShowPage(true);
              setIsEzra(true);
            } else if (item.code == "urdu" && item.status == "active") {
              setShowPage(true);
              setIsUrdu(true);
            } else if (
              item.code == "farzeayinampara" &&
              item.status == "active"
            ) {
              setShowPage(true);
              setIsFarzeayinampara(true);
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
        <div>
          {/* <div className="w-11/12 md:w-9/12 mt-12 md:mt-[80px] rounded-3xl mx-auto p-4 text-lg md:text-2xl bg-[#013030] text-white transition duration-500 ease-out mb-4">
            অ্যাবাকাস শিক্ষক প্রশিক্ষণ ক্ল্যাশটি করতে আপনার একটি কীট এবং বই
            লাগবে । যেটা নিচের "Abacus Books & kit" অপশনে যেয়ে অর্ডার করতে
            পারবেন। লাইভ ক্ল্যাস গ্রুপে যুক্ত হতে "Live Class Link & Schedule" এ
            প্রবেশ করুন।
          </div> */}
          {isAlemalema && <AlemalemaMain />}
          {isSchoolAlemalema && <SchoolAlemalemaMain />}
          {isPreAlemalema && <PreAlemalemaMain />}
          {isUrdu && <UrduMain />}
          {isEzra && <EzraMain />}
          {isShishunajera && <ShishunajeraMain />}
          {isShishumaktab && <ShishumaktabMain />}
          {isFarzeayinmaktab && <FarzeayinmaktabMain />}
          {isFarzeayinnajera && <FarzeayinnajeraMain />}
          {isHifjulquran && <HifjulquranMain />}
          {isFarzeayinampara && <FarzeayinamparaMain />}
        </div>
      );
    } else if (!showPage) {
      return <NotAllow allowList={allowList} />;
    }
  }
}

export default AbacusPage;
