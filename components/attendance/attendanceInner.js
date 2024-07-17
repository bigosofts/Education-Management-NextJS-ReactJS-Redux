"use client";

import { useEffect, useState } from "react";
import AttendanceSTable from "./attendanceSTable";

import QuizAttendance from "@/customComponents/quizApplication/quizAttendance";

import { selectDataTwo as selectClasses } from "@/apiservices/classapiservices";

function AttendancePageCustomInner({ classesUp, booksUp, courseState, data }) {
  const [books, setBooks] = useState();
  const [classes, setClasses] = useState();

  const [change, setChange] = useState(false);
  const [specificClass, setSpecificClass] = useState();
  const [isSubmited, setIsSubmited] = useState();
  const [completion, setCompletion] = useState();
  const [isLoading, setIsLoading] = useState(true);

  function allsubmited(completion) {
    setIsSubmited(true);
    setCompletion(completion);
  }

  useEffect(() => {
    setClasses(
      classesUp.filter((item) => {
        if (
          item.batchNo == data.data.userDetails.batchCount &&
          item.courseID ==
            (courseState.alemalema
              ? "alemalema"
              : courseState.schoolalemalema
              ? "schoolalemalema"
              : courseState.prealemalema
              ? "prealemalema"
              : "") &&
          item.semesterID == courseState.semester
        ) {
          return true;
        }
        // if (
        //   item.batchNo == data.data.userDetails.batchCount &&
        //   item.courseID == (courseState.hifjulquran ? "hifjulquran" : "")
        // ) {
        //   return true;
        // }
        if (
          item.batchNo == data.data.userDetails.batchCount &&
          item.courseID == (courseState.abacus_student ? "abacus_student" : "")
        ) {
          return true;
        }

        if (
          item.batchNo == data.data.userDetails.batchCount &&
          item.courseID == (courseState.shishumaktab ? "shishumaktab" : "")
        ) {
          return true;
        }

        if (
          item.batchNo == data.data.userDetails.batchCount &&
          item.courseID ==
            (courseState.farzeayinnajera ? "farzeayinnajera" : "")
        ) {
          return true;
        }

        if (
          item.batchNo == data.data.userDetails.batchCount &&
          item.courseID ==
            (courseState.ramadanquranulkarim ? "ramadanquranulkarim" : "")
        ) {
          return true;
        }
      })
    );

    setBooks(booksUp);
  }, [classesUp, booksUp, courseState]);

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

  function isWithinOneDay(currentDate, specificDate) {
    const oneDayInMillis = 24 * 60 * 60 * 1000; // Milliseconds in one day

    // Calculate the difference in time
    const timeDifference = new Date(currentDate) - new Date(specificDate);

    // Convert the time difference to days
    const dayDifference = timeDifference / oneDayInMillis;

    // Check if the difference is not more than 1 day
    return dayDifference <= 1;
  }

  function getTodayQuestion(classID, isoStringDate) {
    let specificClass = classes.find((item) => item.classID == classID);
    let specificQuestion;

    if (specificClass.teacher.attendance.length > 0) {
      specificQuestion = specificClass.teacher.attendance.find((item) =>
        isWithinOneDay(isoStringDate, item.presentTime)
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
  async function changeState1(id) {
    setIsLoading(false);
    const res = await selectClasses({ _id: id }, null);
    if (res.status == "Alhamdulillah") {
      setSpecificClass(res.data[0]);
      setIsLoading(true);
      setChange((prev) => !prev);
    }
  }

  if (classes) {
    return (
      <div className="w-full">
        <div className="w-[95%] md:w-9/12 mx-auto h-screen mt-[-48px] pt-[48px]">
          <h1 className="mt-10 text-center  text-lg md:text-4xl">
            Student Attendance (Total Active Classes:{" "}
            {classes && classes.length})
          </h1>

          <div className="text-white text-2xl bg-[#532d80] p-2 m-2 rounded-lg text-center md:w-2/3 w-full mx-auto">
            {data.data.userDetails.batchCount}
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mt-10">
            {classes.map((item, i) => (
              <div
                key={i}
                className="bg-white rounded-lg relative mb-5 md:mb-20 shadow-xl border-[1px] border-slate-300"
              >
                {!change && (
                  <div className="">
                    <div className="text-white text-2xl bg-[#532d80] p-2 m-2 rounded-lg text-center">
                      {books &&
                        item.bookID &&
                        findBooks(item.bookID).bookName.bn}
                      {books && !item.bookID && "বই উল্ল্যেখিত নেই"}
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
                      Question Found:{" "}
                      {getTodayQuestion(item.classID, niceDate(Date.now())) ||
                        "Not Found"}
                    </div>
                    {isLoading ? (
                      <div
                        onClick={(e) => {
                          e.preventDefault();
                          changeState1(item._id);
                        }}
                        className="text-white w-2/3 mx-auto text-xl mt-5 mb-5 px-4 py-3 hover:bg-[#532d80] rounded-lg bg-green-800 cursor-pointer font-extrabold text-center"
                      >
                        কুইজের উত্তর দিন
                      </div>
                    ) : (
                      <div className="text-white w-2/3 mx-auto text-xl mt-5 mb-5 px-4 py-3 hover:bg-[#532d80] rounded-lg bg-green-800 font-extrabold text-center">
                        Loading ...
                      </div>
                    )}
                  </div>
                )}
              </div>
            ))}
          </div>

          <AttendanceSTable
            classes={classes}
            books={books}
            strDate="May 22, 2024"
          />
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
                {/* workishere */}
                <div className="mb-20 md:mb-0 p-1 md:p-5">
                  <QuizAttendance
                    classSelection={specificClass}
                    allsubmited={allsubmited}
                  />
                </div>

                <div className="text-white p-1 md:p-5">
                  <div className="p-5 border-[2px] border-slate-300 rounded-xl h-[330px] overflow-y-scroll">
                    {isSubmited &&
                      completion &&
                      completion.map((item, i, array) => (
                        <div key={i}>
                          <p className="mt-5"> {item.question}</p>

                          <p className="text-lg text-orange-200 mt-2">
                            {" "}
                            সঠিক উত্তরঃ {item.answer}
                          </p>
                          <p className="text-lg text-orange-200 mt-2">
                            {" "}
                            প্রাপ্ত মার্কঃ {item.mark}
                          </p>
                        </div>
                      ))}
                  </div>
                </div>

                {/* workishereend */}
              </div>
            </div>
          </div>
        )}
      </div>
    );
  }
}

export default AttendancePageCustomInner;
