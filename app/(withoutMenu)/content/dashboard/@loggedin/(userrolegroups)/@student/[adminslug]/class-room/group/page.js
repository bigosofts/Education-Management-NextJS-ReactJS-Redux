"use client";
import { useSelector } from "react-redux";
import mytoast from "@/components/toast/toast";

import { useState, useEffect } from "react";
import { selectDataTwo } from "@/apiservices/studentapiservices";
import { useSearchParams } from "next/navigation";

import { FaTelegram } from "react-icons/fa";

function CombinedGroup() {
  const searchParams = useSearchParams();
  const code = searchParams.get("code");

  const data = useSelector((state) => state.isAdmin.value);

  const [isAlemalema, setIsAlemalema] = useState(false);
  const [Alemalema, setAlemalema] = useState(false);

  const [schoolAlemalema, setSchoolAlemalema] = useState(false);
  const [preAlemalema, setPreAlemalema] = useState(false);

  const [isUrdu, setIsUrdu] = useState(false);
  const [Urdu, setUrdu] = useState(false);

  const [isEzra, setIsEzra] = useState(false);
  const [Ezra, setEzra] = useState(false);

  const [isShishunajera, setIsShishunajera] = useState(false);
  const [Shishunajera, setShishunajera] = useState(false);

  const [isShishumaktab, setIsShishumaktab] = useState(false);
  const [Shishumaktab, setShishumaktab] = useState(false);

  const [isFarzeayinmaktab, setIsFarzeayinmaktab] = useState(false);
  const [Farzeayinmaktab, setFarzeayinmaktab] = useState(false);

  const [isFarzeayinnajera, setIsFarzeayinnajera] = useState(false);
  const [Farzeayinnajera, setFarzeayinnajera] = useState(false);

  const [isHifjulquran, setIsHifjulquran] = useState(false);
  const [Hifjulquran, setHifjulquran] = useState(false);

  const [isFarzeayinampara, setIsFarzeayinampara] = useState(false);
  const [Farzeayinampara, setFarzeayinampara] = useState(false);

  useEffect(() => {
    async function getData() {
      const res = await selectDataTwo(
        { userName: data.data.userDetails.userName },
        null
      );

      if (res.status == "Alhamdulillah") {
        if (res.data[0].studentCourseCode.length > 0) {
          res.data[0].studentCourseCode.forEach((item, i, array) => {
            if (item.code == "alemalema" && item.status == "active") {
              setAlemalema({
                class: "alemalema",
                jamat: res.data[0].studentJamatCode[i].code,
                semester: res.data[0].studentSemester[i].code,
              });
              setIsAlemalema(true);
            } else if (
              item.code == "schoolalemalema" &&
              item.status == "active"
            ) {
              setSchoolAlemalema({
                class: "schoolalemalema",
                jamat: res.data[0].studentJamatCode[i].code,
                semester: res.data[0].studentSemester[i].code,
              });
            } else if (item.code == "prealemalema" && item.status == "active") {
              setPreAlemalema({
                class: "prealemalema",
                jamat: res.data[0].studentJamatCode[i].code,
                semester: res.data[0].studentSemester[i].code,
              });
            } else if (item.code == "hifjulquran" && item.status == "active") {
              setHifjulquran(item);
              setIsHifjulquran(true);
            } else if (item.code == "shishunajera" && item.status == "active") {
              setShishunajera(item);
              setIsShishunajera(true);
            } else if (item.code == "shishumaktab" && item.status == "active") {
              setShishumaktab(item);
              setIsShishumaktab(true);
            } else if (
              item.code == "farzeayinmaktab" &&
              item.status == "active"
            ) {
              setFarzeayinmaktab(item);
              setIsFarzeayinmaktab(true);
            } else if (
              item.code == "farzeayinnajera" &&
              item.status == "active"
            ) {
              setFarzeayinnajera(item);
              setIsFarzeayinnajera(true);
            } else if (
              item.code == "ezranahusorof" &&
              item.status == "active"
            ) {
              setEzra(item);
              setIsEzra(true);
            } else if (item.code == "urdu" && item.status == "active") {
              setUrdu(item);
              setIsUrdu(true);
            } else if (
              item.code == "farzeayinampara" &&
              item.status == "active"
            ) {
              setFarzeayinampara(item);
              setIsFarzeayinampara(true);
            }
          });
        }
      }
    }
    getData();
  }, []);

  const hardRefresh = (link) => {
    if (typeof window !== "undefined") {
      window.location.href = link;
    }
  };

  function joinBoys(link) {
    if (data.data.userDetails.gender == "male") {
      hardRefresh(link);
    } else {
      mytoast.warning("You are not allowed to join this group");
    }
  }

  function joinGirls(link) {
    if (data.data.userDetails.gender == "female") {
      hardRefresh(link);
    } else {
      mytoast.warning("You are not allowed to join this group");
    }
  }

  return (
    <>
      {Alemalema && code == "alemalema" && (
        <div className="w-full">
          <h1 className="w-full md:w-[50%] mx-auto px-5 text-lg md:text-3xl mt-10 text-slate-500 mb-4 text-center">
            আপনি {Alemalema.class} ক্লাসের, {Alemalema.jamat},{" "}
            {Alemalema.semester} এ অধ্যয়নরত আছেন।
          </h1>

          <h1 className="w-full md:w-[50%] mx-auto px-5 text-lg md:text-3xl mt-10 text-slate-500 mb-4 text-center">
            আপনার ব্যাচ নাম্বারঃ {data.data.userDetails.batchCount}
          </h1>

          <div className="w-full md:w-[50%] mx-auto p-4 border-0 md:border-2 border-slate-300 rounded-3xl">
            <ul>
              {/* boys */}
              {Alemalema.semester === "semester01" &&
                data.data.userDetails.batchCount === "batch-20240420" && (
                  <li
                    onClick={() => joinBoys("https://t.me/+l24zcz27ZdUxN2I1")}
                    className="w-full p-4 border-[1px] border-slate-500 rounded-3xl text-lg md:text-2xl hover:bg-[#013030] cursor-pointer hover:text-white transition duration-500 ease-out mb-4"
                  >
                    <FaTelegram className="text-4xl inline-block mr-2" />
                    {Alemalema.jamat}, {Alemalema.semester} ক্লাসের পুরুষদের
                    টেলিগ্রাম গ্রুপ
                    <span className="float-right">
                      <i className="text-lg fa fa-arrow-right"></i>
                    </span>
                  </li>
                )}
              {Alemalema.semester === "semester01" &&
                data.data.userDetails.batchCount === "batch-20240605" && (
                  <li
                    onClick={() => joinBoys("https://t.me/+3h-FKB9xvS9jZDE1")}
                    className="w-full p-4 border-[1px] border-slate-500 rounded-3xl text-lg md:text-2xl hover:bg-[#013030] cursor-pointer hover:text-white transition duration-500 ease-out mb-4"
                  >
                    <FaTelegram className="text-4xl inline-block mr-2" />
                    {Alemalema.jamat}, {Alemalema.semester} ক্লাসের পুরুষদের
                    টেলিগ্রাম গ্রুপ
                    <span className="float-right">
                      <i className="text-lg fa fa-arrow-right"></i>
                    </span>
                  </li>
                )}
              {Alemalema.semester == "semester02" && (
                <li
                  onClick={() => joinBoys("https://t.me/+9JjDaPEifnAzZjVl")}
                  className="w-full p-4 border-[1px] border-slate-500 rounded-3xl text-lg md:text-2xl hover:bg-[#013030] cursor-pointer hover:text-white transition duration-500 ease-out mb-4"
                >
                  <FaTelegram className="text-4xl inline-block mr-2" />
                  {Alemalema.jamat}, {Alemalema.semester} ক্লাসের পুরুষদের
                  টেলিগ্রাম গ্রুপ
                  <span className="float-right">
                    <i className="text-lg fa fa-arrow-right"></i>
                  </span>
                </li>
              )}
              {Alemalema.semester == "semester03" && (
                <li
                  onClick={() => joinBoys("https://t.me/+EEQt3CWxAb44Mjg9")}
                  className="w-full p-4 border-[1px] border-slate-500 rounded-3xl text-lg md:text-2xl hover:bg-[#013030] cursor-pointer hover:text-white transition duration-500 ease-out mb-4"
                >
                  <FaTelegram className="text-4xl inline-block mr-2" />
                  {Alemalema.jamat}, {Alemalema.semester} ক্লাসের পুরুষদের
                  টেলিগ্রাম গ্রুপ
                  <span className="float-right">
                    <i className="text-lg fa fa-arrow-right"></i>
                  </span>
                </li>
              )}
              {Alemalema.semester == "semester04" && (
                <li
                  onClick={() => joinBoys()}
                  className="w-full p-4 border-[1px] border-slate-500 rounded-3xl text-lg md:text-2xl hover:bg-[#013030] cursor-pointer hover:text-white transition duration-500 ease-out mb-4"
                >
                  <FaTelegram className="text-4xl inline-block mr-2" />
                  {Alemalema.jamat}, {Alemalema.semester} ক্লাসের পুরুষদের
                  টেলিগ্রাম গ্রুপ
                  <span className="float-right">
                    <i className="text-lg fa fa-arrow-right"></i>
                  </span>
                </li>
              )}
              {Alemalema.semester == "semester05" && (
                <li
                  onClick={() => joinBoys()}
                  className="w-full p-4 border-[1px] border-slate-500 rounded-3xl text-lg md:text-2xl hover:bg-[#013030] cursor-pointer hover:text-white transition duration-500 ease-out mb-4"
                >
                  <FaTelegram className="text-4xl inline-block mr-2" />
                  {Alemalema.jamat}, {Alemalema.semester} ক্লাসের পুরুষদের
                  টেলিগ্রাম গ্রুপ
                  <span className="float-right">
                    <i className="text-lg fa fa-arrow-right"></i>
                  </span>
                </li>
              )}
              {Alemalema.semester == "semester06" && (
                <li
                  onClick={() => joinBoys()}
                  className="w-full p-4 border-[1px] border-slate-500 rounded-3xl text-lg md:text-2xl hover:bg-[#013030] cursor-pointer hover:text-white transition duration-500 ease-out mb-4"
                >
                  <FaTelegram className="text-4xl inline-block mr-2" />
                  {Alemalema.jamat}, {Alemalema.semester} ক্লাসের পুরুষদের
                  টেলিগ্রাম গ্রুপ
                  <span className="float-right">
                    <i className="text-lg fa fa-arrow-right"></i>
                  </span>
                </li>
              )}
              {Alemalema.semester == "semester07" && (
                <li
                  onClick={() => joinBoys()}
                  className="w-full p-4 border-[1px] border-slate-500 rounded-3xl text-lg md:text-2xl hover:bg-[#013030] cursor-pointer hover:text-white transition duration-500 ease-out mb-4"
                >
                  <FaTelegram className="text-4xl inline-block mr-2" />
                  {Alemalema.jamat}, {Alemalema.semester} ক্লাসের পুরুষদের
                  টেলিগ্রাম গ্রুপ
                  <span className="float-right">
                    <i className="text-lg fa fa-arrow-right"></i>
                  </span>
                </li>
              )}
              {Alemalema.semester == "semester08" && (
                <li
                  onClick={() => joinBoys()}
                  className="w-full p-4 border-[1px] border-slate-500 rounded-3xl text-lg md:text-2xl hover:bg-[#013030] cursor-pointer hover:text-white transition duration-500 ease-out mb-4"
                >
                  <FaTelegram className="text-4xl inline-block mr-2" />
                  {Alemalema.jamat}, {Alemalema.semester} ক্লাসের পুরুষদের
                  টেলিগ্রাম গ্রুপ
                  <span className="float-right">
                    <i className="text-lg fa fa-arrow-right"></i>
                  </span>
                </li>
              )}
              {Alemalema.semester == "semester09" && (
                <li
                  onClick={() => joinBoys()}
                  className="w-full p-4 border-[1px] border-slate-500 rounded-3xl text-lg md:text-2xl hover:bg-[#013030] cursor-pointer hover:text-white transition duration-500 ease-out mb-4"
                >
                  <FaTelegram className="text-4xl inline-block mr-2" />
                  {Alemalema.jamat}, {Alemalema.semester} ক্লাসের পুরুষদের
                  টেলিগ্রাম গ্রুপ
                  <span className="float-right">
                    <i className="text-lg fa fa-arrow-right"></i>
                  </span>
                </li>
              )}
              {Alemalema.semester == "semester10" && (
                <li
                  onClick={() => joinBoys("https://t.me/+0veKnZjtnqM1YjI1")}
                  className="w-full p-4 border-[1px] border-slate-500 rounded-3xl text-lg md:text-2xl hover:bg-[#013030] cursor-pointer hover:text-white transition duration-500 ease-out mb-4"
                >
                  <FaTelegram className="text-4xl inline-block mr-2" />
                  {Alemalema.jamat}, {Alemalema.semester} ক্লাসের পুরুষদের
                  টেলিগ্রাম গ্রুপ
                  <span className="float-right">
                    <i className="text-lg fa fa-arrow-right"></i>
                  </span>
                </li>
              )}
              {Alemalema.semester == "semester11" && (
                <li
                  onClick={() => joinBoys()}
                  className="w-full p-4 border-[1px] border-slate-500 rounded-3xl text-lg md:text-2xl hover:bg-[#013030] cursor-pointer hover:text-white transition duration-500 ease-out mb-4"
                >
                  <FaTelegram className="text-4xl inline-block mr-2" />
                  {Alemalema.jamat}, {Alemalema.semester} ক্লাসের পুরুষদের
                  টেলিগ্রাম গ্রুপ
                  <span className="float-right">
                    <i className="text-lg fa fa-arrow-right"></i>
                  </span>
                </li>
              )}
              {Alemalema.semester == "semester12" && (
                <li
                  onClick={() => joinBoys()}
                  className="w-full p-4 border-[1px] border-slate-500 rounded-3xl text-lg md:text-2xl hover:bg-[#013030] cursor-pointer hover:text-white transition duration-500 ease-out mb-4"
                >
                  <FaTelegram className="text-4xl inline-block mr-2" />
                  {Alemalema.jamat}, {Alemalema.semester} ক্লাসের পুরুষদের
                  টেলিগ্রাম গ্রুপ
                  <span className="float-right">
                    <i className="text-lg fa fa-arrow-right"></i>
                  </span>
                </li>
              )}
              {Alemalema.semester == "semester13" && (
                <li
                  onClick={() => joinBoys("https://t.me/+d2juDeVB6qpmMTY1")}
                  className="w-full p-4 border-[1px] border-slate-500 rounded-3xl text-lg md:text-2xl hover:bg-[#013030] cursor-pointer hover:text-white transition duration-500 ease-out mb-4"
                >
                  <FaTelegram className="text-4xl inline-block mr-2" />
                  {Alemalema.jamat}, {Alemalema.semester} ক্লাসের পুরুষদের
                  টেলিগ্রাম গ্রুপ
                  <span className="float-right">
                    <i className="text-lg fa fa-arrow-right"></i>
                  </span>
                </li>
              )}
              {Alemalema.semester == "semester14" && (
                <li
                  onClick={() => joinBoys()}
                  className="w-full p-4 border-[1px] border-slate-500 rounded-3xl text-lg md:text-2xl hover:bg-[#013030] cursor-pointer hover:text-white transition duration-500 ease-out mb-4"
                >
                  <FaTelegram className="text-4xl inline-block mr-2" />
                  {Alemalema.jamat}, {Alemalema.semester} ক্লাসের পুরুষদের
                  টেলিগ্রাম গ্রুপ
                  <span className="float-right">
                    <i className="text-lg fa fa-arrow-right"></i>
                  </span>
                </li>
              )}
              {Alemalema.semester == "semester15" && (
                <li
                  onClick={() => joinBoys("https://t.me/+v9Wmlk2vr7ZlZjRl")}
                  className="w-full p-4 border-[1px] border-slate-500 rounded-3xl text-lg md:text-2xl hover:bg-[#013030] cursor-pointer hover:text-white transition duration-500 ease-out mb-4"
                >
                  <FaTelegram className="text-4xl inline-block mr-2" />
                  {Alemalema.jamat}, {Alemalema.semester} ক্লাসের পুরুষদের
                  টেলিগ্রাম গ্রুপ
                  <span className="float-right">
                    <i className="text-lg fa fa-arrow-right"></i>
                  </span>
                </li>
              )}
              {Alemalema.semester == "semester16" && (
                <li
                  onClick={() => joinBoys("https://t.me/+UWLeGCf6kNwyZTll")}
                  className="w-full p-4 border-[1px] border-slate-500 rounded-3xl text-lg md:text-2xl hover:bg-[#013030] cursor-pointer hover:text-white transition duration-500 ease-out mb-4"
                >
                  <FaTelegram className="text-4xl inline-block mr-2" />
                  {Alemalema.jamat}, {Alemalema.semester} ক্লাসের পুরুষদের
                  টেলিগ্রাম গ্রুপ
                  <span className="float-right">
                    <i className="text-lg fa fa-arrow-right"></i>
                  </span>
                </li>
              )}
              {/* Girls */}
              {Alemalema.semester == "semester01" &&
                data.data.userDetails.batchCount === "batch-20240420" && (
                  <li
                    onClick={() => joinGirls("https://t.me/+ovhKd9sjA9UyM2Rl")}
                    className="w-full p-4 border-[1px] border-slate-500 rounded-3xl text-lg md:text-2xl hover:bg-[#013030] cursor-pointer hover:text-white transition duration-500 ease-out mb-4"
                  >
                    <FaTelegram className="text-4xl inline-block mr-2" />
                    {Alemalema.jamat}, {Alemalema.semester} ক্লাসের মহিলাদের
                    টেলিগ্রাম গ্রুপ
                    <span className="float-right">
                      <i className="text-lg fa fa-arrow-right"></i>
                    </span>
                  </li>
                )}
              {Alemalema.semester == "semester01" &&
                data.data.userDetails.batchCount === "batch-20240605" && (
                  <li
                    onClick={() => joinGirls("https://t.me/+odZv3asGAIAwNmE1")}
                    className="w-full p-4 border-[1px] border-slate-500 rounded-3xl text-lg md:text-2xl hover:bg-[#013030] cursor-pointer hover:text-white transition duration-500 ease-out mb-4"
                  >
                    <FaTelegram className="text-4xl inline-block mr-2" />
                    {Alemalema.jamat}, {Alemalema.semester} ক্লাসের মহিলাদের
                    টেলিগ্রাম গ্রুপ
                    <span className="float-right">
                      <i className="text-lg fa fa-arrow-right"></i>
                    </span>
                  </li>
                )}
              {Alemalema.semester == "semester02" && (
                <li
                  onClick={() => joinGirls("https://t.me/+KPH4PT51V7UzYTY1")}
                  className="w-full p-4 border-[1px] border-slate-500 rounded-3xl text-lg md:text-2xl hover:bg-[#013030] cursor-pointer hover:text-white transition duration-500 ease-out mb-4"
                >
                  <FaTelegram className="text-4xl inline-block mr-2" />
                  {Alemalema.jamat}, {Alemalema.semester} ক্লাসের মহিলাদের
                  টেলিগ্রাম গ্রুপ
                  <span className="float-right">
                    <i className="text-lg fa fa-arrow-right"></i>
                  </span>
                </li>
              )}
              {Alemalema.semester == "semester03" && (
                <li
                  onClick={() => joinGirls("https://t.me/+ROheKg-ynmQ3ZTA1")}
                  className="w-full p-4 border-[1px] border-slate-500 rounded-3xl text-lg md:text-2xl hover:bg-[#013030] cursor-pointer hover:text-white transition duration-500 ease-out mb-4"
                >
                  <FaTelegram className="text-4xl inline-block mr-2" />
                  {Alemalema.jamat}, {Alemalema.semester} ক্লাসের মহিলাদের
                  টেলিগ্রাম গ্রুপ
                  <span className="float-right">
                    <i className="text-lg fa fa-arrow-right"></i>
                  </span>
                </li>
              )}
              {Alemalema.semester == "semester04" && (
                <li
                  onClick={() => joinGirls()}
                  className="w-full p-4 border-[1px] border-slate-500 rounded-3xl text-lg md:text-2xl hover:bg-[#013030] cursor-pointer hover:text-white transition duration-500 ease-out mb-4"
                >
                  <FaTelegram className="text-4xl inline-block mr-2" />
                  {Alemalema.jamat}, {Alemalema.semester} ক্লাসের মহিলাদের
                  টেলিগ্রাম গ্রুপ
                  <span className="float-right">
                    <i className="text-lg fa fa-arrow-right"></i>
                  </span>
                </li>
              )}
              {Alemalema.semester == "semester05" && (
                <li
                  onClick={() => joinGirls()}
                  className="w-full p-4 border-[1px] border-slate-500 rounded-3xl text-lg md:text-2xl hover:bg-[#013030] cursor-pointer hover:text-white transition duration-500 ease-out mb-4"
                >
                  <FaTelegram className="text-4xl inline-block mr-2" />
                  {Alemalema.jamat}, {Alemalema.semester} ক্লাসের মহিলাদের
                  টেলিগ্রাম গ্রুপ
                  <span className="float-right">
                    <i className="text-lg fa fa-arrow-right"></i>
                  </span>
                </li>
              )}
              {Alemalema.semester == "semester06" && (
                <li
                  onClick={() => joinGirls()}
                  className="w-full p-4 border-[1px] border-slate-500 rounded-3xl text-lg md:text-2xl hover:bg-[#013030] cursor-pointer hover:text-white transition duration-500 ease-out mb-4"
                >
                  <FaTelegram className="text-4xl inline-block mr-2" />
                  {Alemalema.jamat}, {Alemalema.semester} ক্লাসের মহিলাদের
                  টেলিগ্রাম গ্রুপ
                  <span className="float-right">
                    <i className="text-lg fa fa-arrow-right"></i>
                  </span>
                </li>
              )}
              {Alemalema.semester == "semester07" && (
                <li
                  onClick={() => joinGirls()}
                  className="w-full p-4 border-[1px] border-slate-500 rounded-3xl text-lg md:text-2xl hover:bg-[#013030] cursor-pointer hover:text-white transition duration-500 ease-out mb-4"
                >
                  <FaTelegram className="text-4xl inline-block mr-2" />
                  {Alemalema.jamat}, {Alemalema.semester} ক্লাসের মহিলাদের
                  টেলিগ্রাম গ্রুপ
                  <span className="float-right">
                    <i className="text-lg fa fa-arrow-right"></i>
                  </span>
                </li>
              )}
              {Alemalema.semester == "semester08" && (
                <li
                  onClick={() => joinGirls()}
                  className="w-full p-4 border-[1px] border-slate-500 rounded-3xl text-lg md:text-2xl hover:bg-[#013030] cursor-pointer hover:text-white transition duration-500 ease-out mb-4"
                >
                  <FaTelegram className="text-4xl inline-block mr-2" />
                  {Alemalema.jamat}, {Alemalema.semester} ক্লাসের মহিলাদের
                  টেলিগ্রাম গ্রুপ
                  <span className="float-right">
                    <i className="text-lg fa fa-arrow-right"></i>
                  </span>
                </li>
              )}
              {Alemalema.semester == "semester09" && (
                <li
                  onClick={() => joinGirls()}
                  className="w-full p-4 border-[1px] border-slate-500 rounded-3xl text-lg md:text-2xl hover:bg-[#013030] cursor-pointer hover:text-white transition duration-500 ease-out mb-4"
                >
                  <FaTelegram className="text-4xl inline-block mr-2" />
                  {Alemalema.jamat}, {Alemalema.semester} ক্লাসের মহিলাদের
                  টেলিগ্রাম গ্রুপ
                  <span className="float-right">
                    <i className="text-lg fa fa-arrow-right"></i>
                  </span>
                </li>
              )}
              {Alemalema.semester == "semester10" && (
                <li
                  onClick={() => joinGirls("https://t.me/+tTzQaG_uWUM2ZjY9")}
                  className="w-full p-4 border-[1px] border-slate-500 rounded-3xl text-lg md:text-2xl hover:bg-[#013030] cursor-pointer hover:text-white transition duration-500 ease-out mb-4"
                >
                  <FaTelegram className="text-4xl inline-block mr-2" />
                  {Alemalema.jamat}, {Alemalema.semester} ক্লাসের মহিলাদের
                  টেলিগ্রাম গ্রুপ
                  <span className="float-right">
                    <i className="text-lg fa fa-arrow-right"></i>
                  </span>
                </li>
              )}
              {Alemalema.semester == "semester11" && (
                <li
                  onClick={() => joinGirls()}
                  className="w-full p-4 border-[1px] border-slate-500 rounded-3xl text-lg md:text-2xl hover:bg-[#013030] cursor-pointer hover:text-white transition duration-500 ease-out mb-4"
                >
                  <FaTelegram className="text-4xl inline-block mr-2" />
                  {Alemalema.jamat}, {Alemalema.semester} ক্লাসের মহিলাদের
                  টেলিগ্রাম গ্রুপ
                  <span className="float-right">
                    <i className="text-lg fa fa-arrow-right"></i>
                  </span>
                </li>
              )}
              {Alemalema.semester == "semester12" && (
                <li
                  onClick={() => joinGirls()}
                  className="w-full p-4 border-[1px] border-slate-500 rounded-3xl text-lg md:text-2xl hover:bg-[#013030] cursor-pointer hover:text-white transition duration-500 ease-out mb-4"
                >
                  <FaTelegram className="text-4xl inline-block mr-2" />
                  {Alemalema.jamat}, {Alemalema.semester} ক্লাসের মহিলাদের
                  টেলিগ্রাম গ্রুপ
                  <span className="float-right">
                    <i className="text-lg fa fa-arrow-right"></i>
                  </span>
                </li>
              )}
              {Alemalema.semester == "semester13" && (
                <li
                  onClick={() => joinGirls("https://t.me/+6SlntEtgpsIzMzJl")}
                  className="w-full p-4 border-[1px] border-slate-500 rounded-3xl text-lg md:text-2xl hover:bg-[#013030] cursor-pointer hover:text-white transition duration-500 ease-out mb-4"
                >
                  <FaTelegram className="text-4xl inline-block mr-2" />
                  {Alemalema.jamat}, {Alemalema.semester} ক্লাসের মহিলাদের
                  টেলিগ্রাম গ্রুপ
                  <span className="float-right">
                    <i className="text-lg fa fa-arrow-right"></i>
                  </span>
                </li>
              )}
              {Alemalema.semester == "semester14" && (
                <li
                  onClick={() => joinGirls()}
                  className="w-full p-4 border-[1px] border-slate-500 rounded-3xl text-lg md:text-2xl hover:bg-[#013030] cursor-pointer hover:text-white transition duration-500 ease-out mb-4"
                >
                  <FaTelegram className="text-4xl inline-block mr-2" />
                  {Alemalema.jamat}, {Alemalema.semester} ক্লাসের মহিলাদের
                  টেলিগ্রাম গ্রুপ
                  <span className="float-right">
                    <i className="text-lg fa fa-arrow-right"></i>
                  </span>
                </li>
              )}
              {Alemalema.semester == "semester15" && (
                <li
                  onClick={() => joinGirls("https://t.me/+ZmmcjXzaK7A3YmE1")}
                  className="w-full p-4 border-[1px] border-slate-500 rounded-3xl text-lg md:text-2xl hover:bg-[#013030] cursor-pointer hover:text-white transition duration-500 ease-out mb-4"
                >
                  <FaTelegram className="text-4xl inline-block mr-2" />
                  {Alemalema.jamat}, {Alemalema.semester} ক্লাসের মহিলাদের
                  টেলিগ্রাম গ্রুপ
                  <span className="float-right">
                    <i className="text-lg fa fa-arrow-right"></i>
                  </span>
                </li>
              )}
              {Alemalema.semester == "semester16" && (
                <li
                  onClick={() => joinGirls("https://t.me/+LmZ_AfVvC3k4NWI1")}
                  className="w-full p-4 border-[1px] border-slate-500 rounded-3xl text-lg md:text-2xl hover:bg-[#013030] cursor-pointer hover:text-white transition duration-500 ease-out mb-4"
                >
                  <FaTelegram className="text-4xl inline-block mr-2" />
                  {Alemalema.jamat}, {Alemalema.semester} ক্লাসের মহিলাদের
                  টেলিগ্রাম গ্রুপ
                  <span className="float-right">
                    <i className="text-lg fa fa-arrow-right"></i>
                  </span>
                </li>
              )}
            </ul>
            {/* <div className="rounded-3xl w-full p-4 text-lg md:text-2xl bg-[#013030] text-white transition duration-500 ease-out mb-4">
              আসসালামু আলাইকুম, ইন্টারনেট মাদ্রাসার {Alemalema.jamat},{" "}
              {Alemalema.semester} ক্লাসের শিডিউল দুপুর ২.০০ টায়।
            </div> */}
          </div>
        </div>
      )}

      {schoolAlemalema && code == "schoolalemalema" && (
        <div className="w-full">
          <h1 className="w-full md:w-[50%] mx-auto px-5 text-lg md:text-3xl mt-10 text-slate-500 mb-4 text-center">
            আপনি {schoolAlemalema.class} ক্লাসের, {schoolAlemalema.jamat},{" "}
            {schoolAlemalema.semester} এ অধ্যয়নরত আছেন।
          </h1>

          <h1 className="w-full md:w-[50%] mx-auto px-5 text-lg md:text-3xl mt-10 text-slate-500 mb-4 text-center">
            আপনার ব্যাচ নাম্বারঃ {data.data.userDetails.batchCount}
          </h1>

          <div className="w-full md:w-[50%] mx-auto p-4 border-0 md:border-2 border-slate-300 rounded-3xl">
            <ul>
              {/* boys */}
              {schoolAlemalema.semester === "school-year1semester1" &&
                data.data.userDetails.batchCount === "batch-20240713" && (
                  <li
                    onClick={() => joinBoys("https://t.me/+b4f-c4TJMwljODc1")}
                    className="w-full p-4 border-[1px] border-slate-500 rounded-3xl text-lg md:text-2xl hover:bg-[#013030] cursor-pointer hover:text-white transition duration-500 ease-out mb-4"
                  >
                    <FaTelegram className="text-4xl inline-block mr-2" />
                    {schoolAlemalema.jamat}, {schoolAlemalema.semester} ক্লাসের
                    পুরুষদের টেলিগ্রাম গ্রুপ
                    <span className="float-right">
                      <i className="text-lg fa fa-arrow-right"></i>
                    </span>
                  </li>
                )}

              {schoolAlemalema.semester === "school-year1semester2" &&
                data.data.userDetails.batchCount === "batch-20240713" && (
                  <li
                    onClick={() => joinBoys("")}
                    className="w-full p-4 border-[1px] border-slate-500 rounded-3xl text-lg md:text-2xl hover:bg-[#013030] cursor-pointer hover:text-white transition duration-500 ease-out mb-4"
                  >
                    <FaTelegram className="text-4xl inline-block mr-2" />
                    {schoolAlemalema.jamat}, {schoolAlemalema.semester} ক্লাসের
                    পুরুষদের টেলিগ্রাম গ্রুপ
                    <span className="float-right">
                      <i className="text-lg fa fa-arrow-right"></i>
                    </span>
                  </li>
                )}
              {/* girls */}
              {schoolAlemalema.semester == "school-year1semester1" &&
                data.data.userDetails.batchCount === "batch-20240713" && (
                  <li
                    onClick={() => joinGirls("https://t.me/+HT1cCoEWzK42N2Zl")}
                    className="w-full p-4 border-[1px] border-slate-500 rounded-3xl text-lg md:text-2xl hover:bg-[#013030] cursor-pointer hover:text-white transition duration-500 ease-out mb-4"
                  >
                    <FaTelegram className="text-4xl inline-block mr-2" />
                    {schoolAlemalema.jamat}, {schoolAlemalema.semester} ক্লাসের
                    মহিলাদের টেলিগ্রাম গ্রুপ
                    <span className="float-right">
                      <i className="text-lg fa fa-arrow-right"></i>
                    </span>
                  </li>
                )}
              {schoolAlemalema.semester == "school-year1semester2" &&
                data.data.userDetails.batchCount === "batch-20240713" && (
                  <li
                    onClick={() => joinGirls("")}
                    className="w-full p-4 border-[1px] border-slate-500 rounded-3xl text-lg md:text-2xl hover:bg-[#013030] cursor-pointer hover:text-white transition duration-500 ease-out mb-4"
                  >
                    <FaTelegram className="text-4xl inline-block mr-2" />
                    {schoolAlemalema.jamat}, {schoolAlemalema.semester} ক্লাসের
                    মহিলাদের টেলিগ্রাম গ্রুপ
                    <span className="float-right">
                      <i className="text-lg fa fa-arrow-right"></i>
                    </span>
                  </li>
                )}
            </ul>
            {/* <div className="rounded-3xl w-full p-4 text-lg md:text-2xl bg-[#013030] text-white transition duration-500 ease-out mb-4">
              আসসালামু আলাইকুম, ইন্টারনেট মাদ্রাসার {Alemalema.jamat},{" "}
              {Alemalema.semester} ক্লাসের শিডিউল দুপুর ২.০০ টায়।
            </div> */}
          </div>
        </div>
      )}

      {preAlemalema && code == "prealemalema" && (
        <div className="w-full">
          <h1 className="w-full md:w-[50%] mx-auto px-5 text-lg md:text-3xl mt-10 text-slate-500 mb-4 text-center">
            আপনি {preAlemalema.class} ক্লাসের, {preAlemalema.jamat},{" "}
            {preAlemalema.semester} এ অধ্যয়নরত আছেন।
          </h1>

          <h1 className="w-full md:w-[50%] mx-auto px-5 text-lg md:text-3xl mt-10 text-slate-500 mb-4 text-center">
            আপনার ব্যাচ নাম্বারঃ {data.data.userDetails.batchCount}
          </h1>

          <div className="w-full md:w-[50%] mx-auto p-4 border-0 md:border-2 border-slate-300 rounded-3xl">
            <ul>
              {/* boys */}
              {preAlemalema.semester === "pre-year1semester1" &&
                data.data.userDetails.batchCount === "batch-20240713" && (
                  <li
                    onClick={() => joinBoys("https://t.me/+b4f-c4TJMwljODc1")}
                    className="w-full p-4 border-[1px] border-slate-500 rounded-3xl text-lg md:text-2xl hover:bg-[#013030] cursor-pointer hover:text-white transition duration-500 ease-out mb-4"
                  >
                    <FaTelegram className="text-4xl inline-block mr-2" />
                    {preAlemalema.jamat}, {preAlemalema.semester} ক্লাসের
                    পুরুষদের টেলিগ্রাম গ্রুপ
                    <span className="float-right">
                      <i className="text-lg fa fa-arrow-right"></i>
                    </span>
                  </li>
                )}

              {preAlemalema.semester === "pre-year1semester2" &&
                data.data.userDetails.batchCount === "batch-20240713" && (
                  <li
                    onClick={() => joinBoys("")}
                    className="w-full p-4 border-[1px] border-slate-500 rounded-3xl text-lg md:text-2xl hover:bg-[#013030] cursor-pointer hover:text-white transition duration-500 ease-out mb-4"
                  >
                    <FaTelegram className="text-4xl inline-block mr-2" />
                    {preAlemalema.jamat}, {preAlemalema.semester} ক্লাসের
                    পুরুষদের টেলিগ্রাম গ্রুপ
                    <span className="float-right">
                      <i className="text-lg fa fa-arrow-right"></i>
                    </span>
                  </li>
                )}
              {/* girls */}
              {preAlemalema.semester == "pre-year1semester1" &&
                data.data.userDetails.batchCount === "batch-20240713" && (
                  <li
                    onClick={() => joinGirls("https://t.me/+HT1cCoEWzK42N2Zl")}
                    className="w-full p-4 border-[1px] border-slate-500 rounded-3xl text-lg md:text-2xl hover:bg-[#013030] cursor-pointer hover:text-white transition duration-500 ease-out mb-4"
                  >
                    <FaTelegram className="text-4xl inline-block mr-2" />
                    {preAlemalema.jamat}, {preAlemalema.semester} ক্লাসের
                    মহিলাদের টেলিগ্রাম গ্রুপ
                    <span className="float-right">
                      <i className="text-lg fa fa-arrow-right"></i>
                    </span>
                  </li>
                )}
              {preAlemalema.semester == "pre-year1semester2" &&
                data.data.userDetails.batchCount === "batch-20240713" && (
                  <li
                    onClick={() => joinGirls("")}
                    className="w-full p-4 border-[1px] border-slate-500 rounded-3xl text-lg md:text-2xl hover:bg-[#013030] cursor-pointer hover:text-white transition duration-500 ease-out mb-4"
                  >
                    <FaTelegram className="text-4xl inline-block mr-2" />
                    {preAlemalema.jamat}, {preAlemalema.semester} ক্লাসের
                    মহিলাদের টেলিগ্রাম গ্রুপ
                    <span className="float-right">
                      <i className="text-lg fa fa-arrow-right"></i>
                    </span>
                  </li>
                )}
            </ul>
            {/* <div className="rounded-3xl w-full p-4 text-lg md:text-2xl bg-[#013030] text-white transition duration-500 ease-out mb-4">
              আসসালামু আলাইকুম, ইন্টারনেট মাদ্রাসার {Alemalema.jamat},{" "}
              {Alemalema.semester} ক্লাসের শিডিউল দুপুর ২.০০ টায়।
            </div> */}
          </div>
        </div>
      )}

      {Shishumaktab && code == "shishumaktab" && (
        <div className="w-full">
          <h1 className="w-full md:w-[50%] mx-auto px-5 text-lg md:text-3xl mt-10 text-slate-500 mb-4 text-center">
            আপনি {Shishumaktab.code} ক্লাসে অধ্যয়নরত আছেন।
          </h1>

          <div className="w-full md:w-[50%] mx-auto p-4 border-0 md:border-2 border-slate-300 rounded-3xl">
            <ul>
              <li
                onClick={() => joinBoys("https://t.me/+0U517_3G9RI2MDZl")}
                className="w-full p-4 border-[1px] border-slate-500 rounded-3xl text-lg md:text-2xl hover:bg-[#013030] cursor-pointer hover:text-white transition duration-500 ease-out mb-4"
              >
                <FaTelegram className="text-4xl inline-block mr-2" />
                {Shishumaktab.code} ক্লাসের পুরুষদের টেলিগ্রাম গ্রুপ
                <span className="float-right">
                  <i className="text-lg fa fa-arrow-right"></i>
                </span>
              </li>
              <li
                onClick={() => joinGirls("https://t.me/+axbx9ro9mjVjMDM1")}
                className="w-full p-4 border-[1px] border-slate-500 rounded-3xl text-lg md:text-2xl hover:bg-[#013030] cursor-pointer hover:text-white transition duration-500 ease-out mb-4"
              >
                <FaTelegram className="text-4xl inline-block mr-2" />
                {Shishumaktab.code} ক্লাসের মহিলাদের টেলিগ্রাম গ্রুপ
                <span className="float-right">
                  <i className="text-lg fa fa-arrow-right"></i>
                </span>
              </li>
            </ul>
            {/* <div className="rounded-3xl w-full p-4 text-lg md:text-2xl bg-[#013030] text-white transition duration-500 ease-out mb-4">
              আসসালামু আলাইকুম, ইন্টারনেট মাদ্রাসার {Alemalema.jamat},{" "}
              {Alemalema.semester} ক্লাসের শিডিউল দুপুর ২.০০ টায়।
            </div> */}
          </div>
        </div>
      )}

      {Farzeayinnajera && code == "farzeayinnajera" && (
        <div className="w-full">
          <h1 className="w-full md:w-[50%] mx-auto px-5 text-lg md:text-3xl mt-10 text-slate-500 mb-4 text-center">
            আপনি {Farzeayinnajera.code} ক্লাসে অধ্যয়নরত আছেন।
          </h1>

          <div className="w-full md:w-[50%] mx-auto p-4 border-0 md:border-2 border-slate-300 rounded-3xl">
            <ul>
              <li
                onClick={() => joinBoys("https://t.me/+jMZ5qQmvpHJjZjRl")}
                className="w-full p-4 border-[1px] border-slate-500 rounded-3xl text-lg md:text-2xl hover:bg-[#013030] cursor-pointer hover:text-white transition duration-500 ease-out mb-4"
              >
                <FaTelegram className="text-4xl inline-block mr-2" />
                {Farzeayinnajera.code} ক্লাসের পুরুষদের টেলিগ্রাম গ্রুপ
                <span className="float-right">
                  <i className="text-lg fa fa-arrow-right"></i>
                </span>
              </li>
              <li
                onClick={() => joinGirls("https://t.me/+2M0MrBMlTAUwZmRl")}
                className="w-full p-4 border-[1px] border-slate-500 rounded-3xl text-lg md:text-2xl hover:bg-[#013030] cursor-pointer hover:text-white transition duration-500 ease-out mb-4"
              >
                <FaTelegram className="text-4xl inline-block mr-2" />
                {Farzeayinnajera.code} ক্লাসের মহিলাদের টেলিগ্রাম গ্রুপ
                <span className="float-right">
                  <i className="text-lg fa fa-arrow-right"></i>
                </span>
              </li>
            </ul>
            {/* <div className="rounded-3xl w-full p-4 text-lg md:text-2xl bg-[#013030] text-white transition duration-500 ease-out mb-4">
              আসসালামু আলাইকুম, ইন্টারনেট মাদ্রাসার {Alemalema.jamat},{" "}
              {Alemalema.semester} ক্লাসের শিডিউল দুপুর ২.০০ টায়।
            </div> */}
          </div>
        </div>
      )}

      {Hifjulquran && code == "hifjulquran" && (
        <div className="w-full">
          <h1 className="w-full md:w-[50%] mx-auto px-5 text-lg md:text-3xl mt-10 text-slate-500 mb-4 text-center">
            আপনি {Hifjulquran.code} ক্লাসে অধ্যয়নরত আছেন।
          </h1>

          <div className="w-full md:w-[50%] mx-auto p-4 border-0 md:border-2 border-slate-300 rounded-3xl">
            <ul>
              <li
                onClick={() => joinBoys("https://t.me/+F7PyDRFSYvtkYmNl")}
                className="w-full p-4 border-[1px] border-slate-500 rounded-3xl text-lg md:text-2xl hover:bg-[#013030] cursor-pointer hover:text-white transition duration-500 ease-out mb-4"
              >
                <FaTelegram className="text-4xl inline-block mr-2" />
                {Hifjulquran.code} ক্লাসের পুরুষদের টেলিগ্রাম গ্রুপ
                <span className="float-right">
                  <i className="text-lg fa fa-arrow-right"></i>
                </span>
              </li>
              <li
                onClick={() => joinGirls("https://t.me/+rpCzsPl1gIU1YTM1")}
                className="w-full p-4 border-[1px] border-slate-500 rounded-3xl text-lg md:text-2xl hover:bg-[#013030] cursor-pointer hover:text-white transition duration-500 ease-out mb-4"
              >
                <FaTelegram className="text-4xl inline-block mr-2" />
                {Hifjulquran.code} G-1 ক্লাসের মহিলাদের টেলিগ্রাম গ্রুপ
                <span className="float-right">
                  <i className="text-lg fa fa-arrow-right"></i>
                </span>
              </li>
              <li
                onClick={() => joinGirls("https://t.me/+49BTA4KtZNwxMTll")}
                className="w-full p-4 border-[1px] border-slate-500 rounded-3xl text-lg md:text-2xl hover:bg-[#013030] cursor-pointer hover:text-white transition duration-500 ease-out mb-4"
              >
                <FaTelegram className="text-4xl inline-block mr-2" />
                {Hifjulquran.code} G-2 ক্লাসের মহিলাদের টেলিগ্রাম গ্রুপ
                <span className="float-right">
                  <i className="text-lg fa fa-arrow-right"></i>
                </span>
              </li>
              <li
                onClick={() => joinGirls("https://t.me/+OAru51jXT1piMDE1")}
                className="w-full p-4 border-[1px] border-slate-500 rounded-3xl text-lg md:text-2xl hover:bg-[#013030] cursor-pointer hover:text-white transition duration-500 ease-out mb-4"
              >
                <FaTelegram className="text-4xl inline-block mr-2" />
                {Hifjulquran.code} G-3 ক্লাসের মহিলাদের টেলিগ্রাম গ্রুপ
                <span className="float-right">
                  <i className="text-lg fa fa-arrow-right"></i>
                </span>
              </li>
            </ul>
            {/* <div className="rounded-3xl w-full p-4 text-lg md:text-2xl bg-[#013030] text-white transition duration-500 ease-out mb-4">
              আসসালামু আলাইকুম, ইন্টারনেট মাদ্রাসার {Alemalema.jamat},{" "}
              {Alemalema.semester} ক্লাসের শিডিউল দুপুর ২.০০ টায়।
            </div> */}
          </div>
        </div>
      )}
    </>
  );
}

export default CombinedGroup;
