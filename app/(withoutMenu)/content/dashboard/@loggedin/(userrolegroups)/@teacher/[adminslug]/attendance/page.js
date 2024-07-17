"use client";
import "./hifz.css";
import { useSelector } from "react-redux";
import { useEffect, useState, useRef } from "react";
import {
  selectDataTwo as selectClasses,
  updateData as updateClass,
} from "@/apiservices/classapiservices";

import { selectDataTwo as selectBooks } from "@/apiservices/bookapiservices";
import mytoast from "@/components/toast/toast";
import {
  selectAllData as selectStudetns,
  updateData as updateStudents,
} from "@/apiservices/studentapiservices";

import AttendanceSTableTA from "@/components/attendance/attendanceSTableTA";

function BookPage() {
  const [books, setBooks] = useState();
  const [currentID, setCurrentID] = useState();
  const [classes, setClasses] = useState();
  const data = useSelector((state) => state.isAdmin.value);
  const [change, setChange] = useState(false);
  const [specificClass, setSpecificClass] = useState();
  const [show, setShow] = useState(true);
  const [hifzClassStudent, setHifzClassStudent] = useState();
  const [render, setRender] = useState(true);

  const classesData = useSelector((state) => state.classes.classes);

  const booksData = useSelector((state) => state.books.books);

  // const studentsData = useSelector((state) => state.students.students);

  const questionNoref = useRef();
  const questionref = useRef();
  const option1ref = useRef();
  const option2ref = useRef();
  const option3ref = useRef();
  const answerref = useRef();

  useEffect(() => {
    async function getData() {
      let res = { data: null };

      res.data =
        classesData.length > 0 &&
        classesData.filter((item) => item.activeStatus == "active");

      if (res.data.length > 0) {
        setClasses(
          res.data.filter((item) => item.teacher.TID == data.data.userName)
        );

        let hifz = res.data
          .filter((item) => item.teacher.TID == data.data.userName)
          .filter((item) => item.courseID == "hifjulquran");

        let hifzStd = [];

        hifz.forEach((item) => {
          item.students.forEach((s) => {
            hifzStd.push(s.SID);
          });
        });

        const res2 = await selectStudetns({ userName: { $in: hifzStd } }, null);

        if (res2.status == "Alhamdulillah") {
          setHifzClassStudent(res2.data);
        }
      }

      let res2 = { data: null };
      res2.data = booksData.length > 0 && booksData;

      if (res2.data.length > 0) {
        setBooks(res2.data);
      }
    }
    getData();
  }, [render, booksData, classesData]);

  function findBooks(bookID) {
    return books.find((item) => {
      return item.bookID == bookID;
    });
  }

  function niceDate(date) {
    var isoTime = date;
    var date = new Date(isoTime);

    var options = {
      day: "numeric",
      month: "long",
      year: "numeric",
    };

    var formattedDate = date.toLocaleDateString("en-US", options);
    return formattedDate;
  }

  function niceDateMonth(date) {
    var isoTime = date;
    var date = new Date(isoTime);

    var options = {
      month: "long",
    };

    var formattedDate = date.toLocaleDateString("en-US", options);
    return formattedDate;
  }

  function niceDateDay(date) {
    var isoTime = date;
    var date = new Date(isoTime);

    var options = {
      day: "numeric",
    };

    var formattedDate = date.toLocaleDateString("en-US", options);
    return formattedDate;
  }

  function niceDateDayName() {
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
    return dayName;
  }

  function getTodayQuestion(classID, isoStringDate) {
    let specificClass = classes.find((item) => item.classID == classID);
    let specificQuestion;

    if (specificClass.teacher.attendance.length > 0) {
      specificQuestion = specificClass.teacher.attendance.find(
        (item) => item.presentTime == isoStringDate
      );
    } else {
      specificQuestion = undefined;
    }

    return specificQuestion
      ? specificQuestion.completionProgress.length
      : specificQuestion;
  }

  // function changeState(classID, setQuiz, setQues1, setQues2) {
  //   setChange((prev) => ({
  //     ...prev,
  //     [classID]: {
  //       setQuiz: setQuiz,
  //       setQues1: setQues1,
  //       setQues2: setQues2,
  //     },
  //   }));
  // }
  function changeState2(e) {
    e.preventDefault();
    setChange((prev) => !prev);
  }
  function changeState1(id) {
    setSpecificClass(classes.find((item) => item._id == id));
    setChange((prev) => !prev);
  }

  async function submitQuiz(specificClassData) {
    const specificClass = JSON.parse(JSON.stringify(specificClassData));

    setShow(false);

    setTimeout(() => {
      setShow(true);
    }, 5000);

    let attendance = specificClass.teacher.attendance;

    let currentDate = niceDate(Date.now());

    let haveData = attendance.find((item) => item.presentTime == currentDate);

    if (
      questionNoref.current.value &&
      questionref.current.value &&
      option1ref.current.value &&
      option2ref.current.value &&
      option3ref.current.value &&
      answerref.current.value
    ) {
      let questionData = {
        questionNo: questionNoref.current.value,
        question: questionref.current.value,
        multipleChoice: {
          choice1: option1ref.current.value,
          choice2: option2ref.current.value,
          choice3: option3ref.current.value,
          answer:
            answerref.current.value == "option1"
              ? option1ref.current.value
              : answerref.current.value == "option2"
              ? option2ref.current.value
              : option3ref.current.value,
        },
      };

      if (haveData) {
        let completionProgress = haveData.completionProgress;
        let havesame = completionProgress.find(
          (item) => item.questionNo == questionNoref.current.value
        );

        if (havesame) {
          completionProgress = completionProgress.map((item) =>
            item.questionNo == questionNoref.current.value ? questionData : item
          );
        } else {
          completionProgress.push(questionData);
        }

        haveData.completionProgress = completionProgress;
      } else {
        attendance.push({
          month: niceDateMonth(Date.now()),
          dayName: niceDateDayName(),
          dayNumber: niceDateDay(Date.now()),
          presentTime: currentDate,
          enterTime: "",
          exitTime: "",
          isPresent: true,
          completionProgress: [questionData],
        });
      }

      specificClass.teacher.attendance = attendance;

      const res = await updateClass({
        teacher: specificClass.teacher,
        examQuestion: specificClass.examQuestion,
        idValue: specificClass._id,
      });

      if (res.status == "Alhamdulillah") {
        mytoast.success("Question has been added");

        setSpecificClass(specificClass);
      }
    } else {
      mytoast.danger("One or more field is empty");
    }
  }

  function myJson(i) {
    let myJson = [];
    if (hifzClassStudent) {
      if (i.details.hifzInfo) {
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
        const startingDate = i.details.hifzInfo[0].date; // Your choice of starting date
        const datesArray = niceDate2(startingDate);

        datesArray.forEach((item) => {
          const hifzInfoMatch = i.details.hifzInfo.find(
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
                para: hifzInfoMatch.amukhta ? hifzInfoMatch.amukhta.para : "--",
                page: hifzInfoMatch.amukhta ? hifzInfoMatch.amukhta.page : "--",
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
    }
    return myJson;
  }

  function hifzStudentChanger(e) {
    e.preventDefault();

    const value = e.target.value;
    setCurrentID(value);
  }

  async function commentChanger(id, date, value) {
    let specificStudent = hifzClassStudent.find((item) => item.userName == id);

    let hifzInfo = specificStudent.details.hifzInfo;

    specificStudent.details.hifzInfo = hifzInfo.map((item) => {
      if (item.date == date) {
        return {
          submitSabak: item.submitSabak,
          submitSatSabak: item.submitSatSabak,
          submitAmukhta: item.submitAmukhta,
          submitDailyTilwat: item.submitDailyTilwat,
          submitWeekNumber: item.submitWeekNumber,
          date: item.date,
          day: item.day,
          sabak: item.sabak,
          satsabak: item.satsabak,
          amukhta: item.amukhta,
          dailytilwat: item.dailytilwat,
          weeknumber: item.weeknumber,
          signature: value,
        };
      } else {
        return item;
      }
    });

    const res = await updateStudents(
      specificStudent.userName,
      specificStudent.firstName.en,
      specificStudent.firstName.bn,
      specificStudent.lastName.en,
      specificStudent.lastName.bn,
      specificStudent.nidNumber,
      specificStudent.birthRegNumber,
      specificStudent.fatherName.en,
      specificStudent.fatherName.bn,
      specificStudent.emailAddress,
      undefined,
      specificStudent.mobileNumber,
      specificStudent.occupation,
      specificStudent.studentCourseCode,
      specificStudent.studentJamatCode,
      specificStudent.gender,
      specificStudent.dateOfBirth,
      specificStudent.countryName,
      specificStudent.fullPresentAddress,
      specificStudent.fullPermanentAddress,
      specificStudent.admissionSession,
      specificStudent.admissionDate,
      specificStudent.studentMotive,
      specificStudent.details,
      specificStudent.paymentStatus,
      specificStudent.userRole,
      specificStudent.extracurricular,
      specificStudent.activeStatus,
      specificStudent._id,
      specificStudent.studentDepartment,
      specificStudent.studentSemester,
      specificStudent.batchCount
    );

    if (res.status == "Alhamdulillah") {
      mytoast.success(`Comment Added for SID ${specificStudent.userName}`);
      setRender((prev) => !prev);
    }
  }

  if (classes) {
    return (
      <div className="w-full">
        <div className="w-[95%] md:w-9/12 mx-auto h-screen mt-[-48px] pt-[48px]">
          <h1 className="mt-10 text-center">
            Student Attendance (Total Active Classes:{" "}
            {classes && classes.length})
          </h1>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mt-10">
            {classes
              .filter((item) => item.courseID != "hifjulquran")
              .map((item, i) => (
                <div
                  key={i}
                  className="bg-[#e6e4e4] rounded-lg relative mb-5 md:mb-20 shadow-xl border-[1px] border-slate-300"
                >
                  {!change && (
                    <div className="">
                      <div className="text-white text-2xl bg-[#532d80] p-2 m-2 rounded-lg text-center">
                        {item.batchNo}
                      </div>
                      <div className="text-slate-900 mt-5 px-5 text-lg">
                        Class: {item.classID}
                      </div>
                      <div className="text-slate-900 px-5 text-lg">
                        Ostad: {item.teacher.tName}
                      </div>
                      <div className="text-slate-900 px-5 text-lg">
                        Total Students: {item.students.length}
                      </div>

                      <div className="text-slate-900 px-5 text-lg">
                        Today: {niceDate(Date.now())}
                      </div>

                      <div className="text-slate-900 px-5 text-lg">
                        Question Submited:{" "}
                        {getTodayQuestion(item.classID, niceDate(Date.now())) ||
                          "Not Found"}
                      </div>

                      <div
                        onClick={(e) => {
                          e.preventDefault();
                          changeState1(item._id);
                        }}
                        className="text-white w-2/3 mx-auto text-xl mt-5 mb-5 px-4 py-3 hover:bg-[#532d80] rounded-lg bg-green-800 cursor-pointer font-extrabold text-center"
                      >
                        কুইজের প্রশ্ন লিখুন
                      </div>

                      <div className="px-5 text-2xl py-5 bg-white text-slate-900 text-center rounded-b-lg">
                        {books &&
                          item.bookID &&
                          findBooks(item.bookID).bookName.bn}
                        {books && !item.bookID && "বই উল্ল্যেখিত নেই"}
                      </div>
                    </div>
                  )}
                </div>
              ))}
          </div>

          <div className="grid grid-cols-1 mt-10">
            {hifzClassStudent && hifzClassStudent.length > 0 && (
              <select
                onChange={hifzStudentChanger}
                className="p-4 bg-[#532d80] rounded-xl text-white mb-20"
              >
                <option value="">Select Hifz Student</option>
                {hifzClassStudent &&
                  hifzClassStudent.map((item, i) => (
                    <option key={i} value={item.userName}>
                      {item.firstName.en +
                        " " +
                        item.lastName.en +
                        " - " +
                        item.userName}
                    </option>
                  ))}
              </select>
            )}

            {hifzClassStudent &&
              hifzClassStudent.length > 0 &&
              hifzClassStudent
                .filter((item) => item.userName == currentID)
                .map((item, i) => (
                  <div key={i} className="">
                    <div className="hifz_table">
                      <h5 className="text-center">
                        শিক্ষার্থীর নাম:{" "}
                        {item.firstName.en + " " + item.lastName.en}
                      </h5>
                      <h5 className="text-center">
                        ক্লাস গ্রুপ: {item.details.hifzClass.groupName}
                      </h5>

                      <h5 className="text-center">
                        ওস্তাদ/ওস্তাজার নাম:{" "}
                        {data.data.userDetails.firstName.en +
                          " " +
                          data.data.userDetails.lastName.en}
                      </h5>

                      <div class="table_container mt-10">
                        <table>
                          <thead className="sticky top-0">
                            <tr>
                              <th rowSpan={2}>তারিখ</th>
                              <th rowSpan={2}>বার</th>
                              <th rowSpan={2}>সপ্তাহ</th>
                              <th colSpan={2}>সবক</th>
                              <th colSpan={5}>সাতসবক</th>
                              <th colSpan={5}>আমুখতা</th>
                              <th rowSpan={2}>দৈনিক তিলওয়াত</th>
                              <th rowSpan={2}>শিক্ষকের মন্তব্য</th>
                            </tr>
                            <tr>
                              <th>পারা</th>
                              <th>পৃষ্ঠা</th>
                              <th>পারা</th>
                              <th>পৃষ্ঠা</th>
                              <th>পরিমাণ</th>
                              <th>লোকমা</th>
                              <th>দোহরানা</th>

                              <th>পারা</th>
                              <th>পৃষ্ঠা</th>
                              <th>পরিমাণ</th>
                              <th>লোকমা</th>
                              <th>দোহরানা</th>
                            </tr>
                          </thead>
                          <tbody>
                            {myJson(item).map((item, i) => (
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
                                <td>
                                  <select
                                    onChange={(e) => {
                                      e.preventDefault();
                                      commentChanger(
                                        currentID,
                                        item.date,
                                        e.target.value
                                      );
                                    }}
                                    value={item.signature}
                                    className="p-4 bg-[#eaeaea] text-slate-900 rounded-lg"
                                  >
                                    {" "}
                                    <option value="">
                                      মন্তব্য সিলেক্ট করুন
                                    </option>
                                    <option value="চলবে">চলবে</option>
                                    <option value="হয় নাই">হয় নাই</option>
                                    <option value="ঠিক আছে">
                                      ঠিক আছে
                                    </option>{" "}
                                  </select>
                                </td>
                              </tr>
                            ))}
                          </tbody>
                        </table>
                      </div>
                    </div>
                  </div>
                ))}

            {classes.filter((item) => item.courseID != "hifjulquran").length !=
              0 && (
              <AttendanceSTableTA
                classes={classes.filter(
                  (item) => item.courseID != "hifjulquran"
                )}
                books={books}
                strDate="May 22, 2024"
              />
            )}
          </div>
        </div>

        {change && (
          <div className="w-full pt-[48px] text-lg md:text-2xl text-slate-800 p-5 fixed top-0 left-0 bg-[rgba(0,0,0,0.6)] z-5 h-screen overflow-y-scroll">
            <div
              onClick={changeState2}
              className="text-4xl text-white cursor-pointer text-right"
            >
              x
            </div>
            <div className="w-[95%] md:w-9/12 mx-auto mt-20 rounded-xl overflow-hidden animate__animated animate__fadeInDown">
              <div className="grid grid-cols-1 md:grid-cols-3 bg-slate-900 p-5">
                <div className="mb-20 md:mb-0 p-1 md:p-5">
                  <div className="w-full border-[2px] border-slate-300 rounded-xl">
                    <div className="text-white text-2xl bg-green-800 p-2 m-2 rounded-lg text-center">
                      {specificClass.batchNo}
                    </div>
                    <div className="text-white mt-5 px-5 text-lg">
                      Class: {specificClass.classID}
                    </div>
                    <div className="text-white px-5 text-lg">
                      Ostad: {specificClass.teacher.tName}
                    </div>
                    <div className="text-white px-5 text-lg">
                      Total Students: {specificClass.students.length}
                    </div>

                    <div className="text-white px-5 text-lg">
                      Today: {niceDate(Date.now())}
                    </div>

                    <div className="text-white px-5 mb-10 text-lg">
                      Question Submited:{" "}
                      {getTodayQuestion(
                        specificClass.classID,
                        niceDate(Date.now())
                      ) || "Not Found"}
                    </div>

                    <div className="px-5 text-2xl py-5 bg-white text-slate-900 text-center rounded-b-lg">
                      {books &&
                        specificClass.bookID &&
                        findBooks(specificClass.bookID).bookName.bn}
                      {books && !specificClass.bookID && "বই উল্ল্যেখিত নেই"}
                    </div>
                  </div>
                </div>

                <div className="mb-20 md:mb-0 p-1 md:p-5">
                  <form>
                    <div className="flex-row md:flex gap-5">
                      <div className="border-[2px] rounded-xl border-slate-300 w-full mx-auto p-5 text-white">
                        <div className="w-full mb-2">
                          <select
                            className="p-2 rounded-lg w-full text-slate-900"
                            ref={questionNoref}
                          >
                            <option value="">
                              প্রশ্ন নাম্বার নির্বাচন করুন
                            </option>
                            <option value="question1">প্রশ্নঃ ১</option>
                            <option value="question2">প্রশ্নঃ ২</option>
                            <option value="question3">প্রশ্নঃ ৩</option>
                            <option value="question4">প্রশ্নঃ ৪</option>
                            <option value="question5">প্রশ্নঃ ৫</option>
                            <option value="question6">প্রশ্নঃ ৬</option>
                            <option value="question7">প্রশ্নঃ ৭</option>
                            <option value="question8">প্রশ্নঃ ৮</option>
                            <option value="question9">প্রশ্নঃ ৯</option>
                            <option value="question10">প্রশ্নঃ ১০</option>
                          </select>
                        </div>
                        <div className="w-full mb-2">
                          <input
                            className="p-2 rounded-lg w-full text-slate-900"
                            ref={questionref}
                            type="text"
                            placeholder="প্রশ্ন ১ঃ আরবী শব্দসমূহ কয় প্রকার?"
                          ></input>
                        </div>
                        <div className="w-3/4 mb-2">
                          <input
                            className="p-2 rounded-lg w-full text-slate-900"
                            type="text"
                            ref={option1ref}
                            placeholder="অপশন ১ঃ এক প্রকার"
                          ></input>
                        </div>
                        <div className="w-3/4 mb-2">
                          <input
                            className="p-2 rounded-lg w-full text-slate-900"
                            type="text"
                            ref={option2ref}
                            placeholder="অপশন ২ঃ দুই প্রকার"
                          ></input>
                        </div>

                        <div className="w-3/4 mb-2">
                          <input
                            className="p-2 rounded-lg w-full text-slate-900"
                            type="text"
                            ref={option3ref}
                            placeholder="অপশন ৩ঃ তিন প্রকার"
                          ></input>
                        </div>
                        <div className="w-full mb-2">
                          <select
                            className="p-2 rounded-lg w-full text-slate-900"
                            ref={answerref}
                          >
                            <option value="">সঠিক উত্তর নির্বাচন করুন</option>
                            <option value="option1">অপশন ১</option>
                            <option value="option2"> অপশন ২ </option>
                            <option value="option3"> অপশন ৩ </option>
                          </select>
                        </div>
                      </div>
                    </div>
                  </form>
                  {show && (
                    <div
                      onClick={() => submitQuiz(specificClass)}
                      className="text-white w-2/3 mx-auto text-xl mt-5 mb-5 px-4 py-3 bg-green-800 rounded-lg hover:bg-orange-800 cursor-pointer font-extrabold text-center"
                    >
                      প্রশ্ন জমা দিন
                    </div>
                  )}
                </div>

                <div className="text-white p-1 md:p-5">
                  <div className="p-5 border-[2px] border-slate-300 rounded-xl h-[330px] overflow-y-scroll">
                    {specificClass.teacher.attendance &&
                      specificClass.teacher.attendance.find(
                        (item) => item.presentTime == niceDate(Date.now())
                      ) &&
                      specificClass.teacher.attendance
                        .find(
                          (item) => item.presentTime == niceDate(Date.now())
                        )
                        .completionProgress.map((item, i) => (
                          <div key={i}>
                            <p className="mt-5"> {item.question}</p>
                            <p className="text-sm">
                              {" "}
                              অপশন ১ঃ {item.multipleChoice.choice1}{" "}
                            </p>
                            <p className="text-sm">
                              {" "}
                              অপশন ২ঃ {item.multipleChoice.choice2}
                            </p>
                            <p className="text-sm">
                              {" "}
                              অপশন ৩ঃ {item.multipleChoice.choice3}
                            </p>

                            <p className="text-lg text-orange-200 mt-2">
                              {" "}
                              সঠিক উত্তরঃ {item.multipleChoice.answer}
                            </p>
                          </div>
                        ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    );
  }
}

export default BookPage;
