"use client";

import { useSelector } from "react-redux";

import EnrollPlease from "@/components/dashboardPage/enrollPlease";
import WaitingApproval from "@/components/dashboardPage/WaitingApproval";
import { useState, useEffect, useRef } from "react";
import { selectDataTwo, updateData } from "@/apiservices/studentapiservices";
import NotAllow from "@/components/dashboardPage/notAllow";

function HifzPage() {
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
            }
          });
        }
      }
    }
    getData();
  }, []);

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

  let currentDate = new Date();
  let dayNames = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
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
          date: niceDate(currentDate),
          day: dayName,
          sabak: {
            para: sabakpararef.current.value,
            page: sabakpararef.current.value,
          },
        });
      } else {
        hifzArray.forEach((item) => {
          if (item.date == niceDate(currentDate)) {
            if (item.submitSabak == true) {
              return item;
            } else {
              let newSatSabak = { ...item.satsabak };

              let newAmukhta = { ...item.amukhta };
              let newTilwat = { ...item.dailytilwat };

              return {
                submitSabak: true,
                submitSatSabak: item.submitSatSabak,
                submitAmukhta: item.submitAmukhta,
                date: niceDate(currentDate),
                day: dayName,
                sabak: {
                  para: sabakpararef.current.value,
                  page: sabakpararef.current.value,
                },
                satsabak: newSatSabak,
                amukhta: newAmukhta,
                dailytilwat: newTilwat,
              };
            }
          }
        });
      }
    } else {
      hifzArray = [];
    }
  }

  async function satsabakSubmit() {
    alert(niceDate(currentDate));
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
      return (
        <>
          <div className="w-11/12 text-center md:w-9/12 mt-12 md:mt-[80px] rounded-3xl mx-auto p-4 text-4xl md:text-2x transition duration-500 ease-out mb-4">
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
                className="my-4 p-4 box-border w-full rounded-3xl"
                type="text"
                value={niceDate(currentDate)}
                disabled
              ></input>

              <div className="flex justify-between gap-10">
                <div className="w-full border-[2px] border-slate-300 rounded-2xl p-2">
                  <label className="font-bold text-2xl" htmlFor="sabakpara">
                    পারা:
                  </label>
                  <input
                    id="sabakpara"
                    ref={sabakpararef}
                    name="sabakpara"
                    className="my-4 p-4 box-border w-full rounded-3xl"
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
                    className="my-4 p-4 box-border w-full rounded-3xl"
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
                className="my-4 p-4 box-border w-full rounded-3xl"
                type="text"
                disabled
              ></input>

              <div className="flex justify-between gap-10">
                <div className="w-full border-[2px] border-slate-300 rounded-2xl p-2">
                  <label className="font-bold text-2xl" htmlFor="satsabakpara">
                    পারা:
                  </label>
                  <input
                    id="satsabakpara"
                    ref={satsabakpararef}
                    name="satsabakpara"
                    className="my-4 p-4 box-border w-full rounded-3xl text"
                    type="text"
                    placeholder="কত পারা সেটা লিখুন"
                  ></input>
                </div>
                <div className="w-full border-[2px] border-slate-300 rounded-2xl p-2">
                  <label className="font-bold text-2xl" htmlFor="satsabakpage">
                    পৃষ্ঠা:
                  </label>
                  <input
                    id="satsabakpage"
                    ref={satsabakpageref}
                    name="satsabakpage"
                    className="my-4 p-4 box-border w-full rounded-3xl"
                    type="text"
                    placeholder="কত পৃষ্ঠা লিখুন"
                  ></input>
                </div>
              </div>
              <div className="flex justify-between gap-10 mt-5">
                <div className="w-full border-[2px] border-slate-300 rounded-2xl p-2">
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
                    className="my-4 p-4 box-border w-full rounded-3xl text"
                    type="text"
                    placeholder="পৃষ্ঠার পরিমাণ লিখুন"
                  ></input>
                </div>
                <div className="w-full border-[2px] border-slate-300 rounded-2xl p-2">
                  <label className="font-bold text-2xl" htmlFor="satsabaklokma">
                    লোকমা:
                  </label>
                  <input
                    id="satsabaklokma"
                    ref={satsabaklokmaref}
                    name="satsabaklokma"
                    className="my-4 p-4 box-border w-full rounded-3xl"
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
                    className="my-4 p-4 box-border w-full rounded-3xl"
                    type="text"
                    placeholder="দোহরানার পরিমাণ লিখুন"
                  ></input>
                </div>
              </div>

              <button
                onClick={satsabakSubmit}
                className="bg-blue-500 text-white text-lg font-bold mt-6 rounded-3xl w-full overflow-hidden"
              >
                <div className="p-5">আজকের দোহরানার তথ্য দিন</div>
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
                className="my-4 p-4 box-border w-full rounded-3xl"
                type="text"
                disabled
              ></input>

              <div className="flex justify-between gap-10">
                <div className="w-full border-[2px] border-slate-300 rounded-2xl p-2">
                  <label className="font-bold text-2xl" htmlFor="amukhtapara">
                    পারা:
                  </label>
                  <input
                    id="amukhtapara"
                    ref={amukhtapararef}
                    name="amukhtapara"
                    className="my-4 p-4 box-border w-full rounded-3xl text"
                    type="text"
                    placeholder="কত পারা সেটা লিখুন"
                  ></input>
                </div>
                <div className="w-full border-[2px] border-slate-300 rounded-2xl p-2">
                  <label className="font-bold text-2xl" htmlFor="amukhtapage">
                    পৃষ্ঠা:
                  </label>
                  <input
                    id="amukhtapage"
                    ref={amukhtapageref}
                    name="amukhtapage"
                    className="my-4 p-4 box-border w-full rounded-3xl"
                    type="text"
                    placeholder="কত পৃষ্ঠা লিখুন"
                  ></input>
                </div>
              </div>
              <div className="flex justify-between gap-10 mt-5">
                <div className="w-full border-[2px] border-slate-300 rounded-2xl p-2">
                  <label className="font-bold text-2xl" htmlFor="amukhtaamount">
                    পরিমাণ:
                  </label>
                  <input
                    id="amukhtaamount"
                    ref={amukhtaamountref}
                    name="amukhtaamount"
                    className="my-4 p-4 box-border w-full rounded-3xl text"
                    type="text"
                    placeholder="পৃষ্ঠার পরিমাণ লিখুন"
                  ></input>
                </div>
                <div className="w-full border-[2px] border-slate-300 rounded-2xl p-2">
                  <label className="font-bold text-2xl" htmlFor="amukhtalokma">
                    লোকমা:
                  </label>
                  <input
                    id="amukhtalokma"
                    ref={amukhtalokmaref}
                    name="amukhtalokma"
                    className="my-4 p-4 box-border w-full rounded-3xl"
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
                    className="my-4 p-4 box-border w-full rounded-3xl"
                    type="text"
                    placeholder="আমুখতার পরিমাণ লিখুন"
                  ></input>
                </div>
              </div>

              <button
                type="submit"
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
                className="my-4 p-4 box-border w-full rounded-3xl"
                type="text"
                disabled
              ></input>

              <div className="flex justify-between gap-10">
                <div className="w-full border-[2px] border-slate-300 rounded-2xl p-2">
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
        </>
      );
    } else if (!showPage) {
      return <NotAllow allowList={allowList} />;
    }
  }
}

export default HifzPage;
