"use client";
import { useSelector } from "react-redux";
import { useEffect, useState, useRef } from "react";
import {
  selectDataTwo as selectClasses,
  updateData as updateClass,
} from "@/apiservices/classapiservices";

import { selectDataTwo as selectBooks } from "@/apiservices/bookapiservices";
import mytoast from "@/components/toast/toast";
import QuizAttendance from "@/customComponents/quizApplication/quizAttendance";

function AttendancePageCustom() {
  const [books, setBooks] = useState();
  const [classes, setClasses] = useState();
  const data = useSelector((state) => state.isAdmin.value);
  const courseState = useSelector((state) => state.courseState.value);
  const [change, setChange] = useState(false);
  const [specificClass, setSpecificClass] = useState();
  const [show, setShow] = useState(true);

  const questionNoref = useRef();
  const questionref = useRef();
  const option1ref = useRef();
  const option2ref = useRef();
  const option3ref = useRef();
  const answerref = useRef();

  useEffect(() => {
    async function getData() {
      const res = await selectClasses({ activeStatus: "active" }, null);
      if (res.status == "Alhamdulillah") {
        setClasses(
          res.data.filter((item) => {
            if (
              item.batchNo == data.data.userDetails.batchCount &&
              item.courseID == (courseState.alemalema ? "alemalema" : "") &&
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
              item.courseID ==
                (courseState.abacus_student ? "abacus_student" : "")
            ) {
              return true;
            }
            if (
              item.batchNo == data.data.userDetails.batchCount &&
              item.courseID ==
                (courseState.abacus_teacher ? "abacus_teacher" : "")
            ) {
              return true;
            }
            if (
              item.batchNo == data.data.userDetails.batchCount &&
              item.courseID == (courseState.shishunajera ? "shishunajera" : "")
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
                (courseState.farzeayinmaktab ? "farzeayinmaktab" : "")
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
                (courseState.ezranahusorof ? "ezranahusorof" : "")
            ) {
              return true;
            }
            if (
              item.batchNo == data.data.userDetails.batchCount &&
              item.courseID == (courseState.urdu ? "urdu" : "")
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
            if (
              item.batchNo == data.data.userDetails.batchCount &&
              item.courseID ==
                (courseState.farzeayinampara ? "farzeayinampara" : "")
            ) {
              return true;
            }
          })
        );
      }

      const res2 = await selectBooks(null, null);
      if (res2.status == "Alhamdulillah") {
        setBooks(res2.data);
      }
    }
    getData();
  }, []);

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

  async function submitQuiz(specificClass) {
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
          isPresent: true,
          completionProgress: [questionData],
        });
      }

      specificClass.teacher.attendance = attendance;

      const res = await updateClass({
        classID: specificClass.classID,
        courseID: specificClass.courseID,
        batchNo: specificClass.batchNo,
        maleClassLink: specificClass.maleClassLink,
        femaleClassLink: specificClass.femaleClassLink,
        departmentID: specificClass.departmentID,
        jamatID: specificClass.jamatID,
        semesterID: specificClass.semesterID,
        bookID: specificClass.bookID,
        teacher: specificClass.teacher,
        examQuestion: specificClass.examQuestion,
        students: specificClass.students,
        classStartTime: specificClass.classStartTime,
        classEndTime: specificClass.classEndTime,
        activeStatus: specificClass.activeStatus,
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

  if (classes) {
    return (
      <div className="w-full">
        <div className="w-[95%] md:w-9/12 mx-auto h-screen mt-[-48px] pt-[48px]">
          <h1 className="mt-10 text-center">
            Student Attendance (Total Active Classes:{" "}
            {classes && classes.length})
          </h1>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mt-10">
            {classes.map((item, i) => (
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
                  <QuizAttendance classSelection={specificClass} />
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

export default AttendancePageCustom;
