"use client";
import { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import { updateData } from "@/apiservices/classapiservices";

import "./quiz.css";
import mytoast from "@/components/toast/toast";

function QuizAttendance({ classSelection }) {
  const data = useSelector((state) => state.isAdmin.value);
  const [question, setQuestion] = useState([]);
  const [isPresent, setIsPresent] = useState();
  const [lastAttendanceDate, setLastAttendanceDate] = useState();
  const [attendanceID, setAttendanceID] = useState();
  const [complessionProgressID, setComplessionProgressID] = useState();
  const [render, setRender] = useState(true);

  const [anser, setAnswer] = useState({
    isPresent: false,
    answer: [],
  });
  let currentDate = new Date();

  function isWithinOneDay(currentDate, specificDate) {
    const oneDayInMillis = 24 * 60 * 60 * 1000; // Milliseconds in one day

    // Calculate the difference in time
    const timeDifference = new Date(currentDate) - new Date(specificDate);

    // Convert the time difference to days
    const dayDifference = timeDifference / oneDayInMillis;

    // Check if the difference is not more than 1 day
    return dayDifference <= 1;
  }

  async function present() {
    let classWant = specificClass;
    let specificStudent = classWant.students.find(
      (item) => (item.SID = data.data.userDetails.userName)
    );

    let specificStdAttendance = specificStudent.attendance.find(
      (item) => item.presentTime == lastAttendanceDate
    );

    if (specificStdAttendance) {
      specificStdAttendance.isPresent = ture;
    } else {
      specificStudent.attendance.push({
        month: niceDateMonth(new Date(lastAttendanceDate).toISOString()),
        dayName: niceDateDayName(lastAttendanceDate),
        dayNumber: niceDateDay(new Date(lastAttendanceDate).toISOString()),
        presentTime: lastAttendanceDate,
        isPresent: true,
        completionProgress: [],
      });
    }

    const res = await updateData({
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
      mytoast.success("Present has been counted for specific date");
      setRender((prev) => !prev);
    }
  }

  async function absent() {
    let classWant = specificClass;
    let specificStudent = classWant.students.find(
      (item) => (item.SID = data.data.userDetails.userName)
    );

    let specificStdAttendance = specificStudent.attendance.find(
      (item) => item.presentTime == lastAttendanceDate
    );

    if (specificStdAttendance) {
      specificStdAttendance.isPresent = false;
    } else {
      specificStudent.attendance.push({
        month: niceDateMonth(new Date(lastAttendanceDate).toISOString()),
        dayName: niceDateDayName(lastAttendanceDate),
        dayNumber: niceDateDay(new Date(lastAttendanceDate).toISOString()),
        presentTime: lastAttendanceDate,
        isPresent: false,
        completionProgress: [],
      });
    }

    const res = await updateData({
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
      mytoast.success("Submitted. Next time try to be present");
      setRender((prev) => !prev);
    }
  }

  useEffect(() => {
    if (specificClass) {
      if (specificClass.teacher.attendance.length >= 1) {
        if (
          isWithinOneDay(
            niceDate(currentDate.toISOString()),
            specificClass.teacher.attendance[
              specificClass.teacher.attendance.length - 1
            ].presentTime
          )
        ) {
          let completionProgress = [
            ...specificClass.teacher.attendance[
              specificClass.teacher.attendance.length - 1
            ].completionProgress,
          ];

          setQuestion(completionProgress);

          setAttendanceID(
            specificClass.teacher.attendance[
              specificClass.teacher.attendance.length - 1
            ]._id
          );

          setLastAttendanceDate(
            specificClass.teacher.attendance[
              specificClass.teacher.attendance.length - 1
            ].presentTime
          );

          let specificStudent = specificClass.students.find(
            (item) => (item.SID = data.data.userDetails.userName)
          );

          let specificStdAttendance = specificStudent.attendance.find(
            (item) =>
              item.presentTime ==
              specificClass.teacher.attendance[
                specificClass.teacher.attendance.length - 1
              ].presentTime
          );

          if (specificStdAttendance) {
            if (specificStdAttendance.isPresent) {
              setIsPresent("ok");
            } else {
              setIsPresent("ok");
            }
          } else {
            setIsPresent("vaccant");
          }
        } else {
          setIsPresent("no");
          mytoast.warning("There are no Questions for you to Answer");
        }
      } else {
        setIsPresent("no");
        mytoast.warning("There are no Questions for you to Answer");
      }
    }
  }, [render]);

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

  function niceDateDay(date) {
    var isoTime = date;
    var date = new Date(isoTime);

    var options = {
      day: "numeric",
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
  function niceDateDayName(date) {
    let cDate = new Date(date);
    let dayNames = [
      "Sunday",
      "Monday",
      "Tuesday",
      "Wednesday",
      "Thursday",
      "Friday",
      "Saturday",
    ];
    let dayIndex = cDate.getDay();
    let dayName = dayNames[dayIndex];
    return dayName;
  }

  let specificClass = classSelection;

  return (
    <div class="wrapperQuiz">
      {isPresent == "ok" && (
        <>
          <div id="quiz">
            <div className="insideQuiz">
              <p id="question"></p>

              <div class="buttons">
                <button id="btn0">
                  <span id="choice0"></span>
                </button>
                <button id="btn1">
                  <span id="choice1"></span>
                </button>
                <button id="btn2">
                  <span id="choice2"></span>
                </button>
              </div>
            </div>
          </div>
          <footer>
            <p id="progress">
              <div className="progress-number">1</div> of{" "}
              <div className="progress-number">5</div>
            </p>
          </footer>
        </>
      )}

      {isPresent == "vaccant" && (
        <div style={{ color: "#fff", textAlign: "center" }}>
          আপনি কি {lastAttendanceDate} তারিখে সম্পূর্ণ ক্লাসে উপস্থিত ছিলেন?
          <div
            style={{
              display: "flex",
              color: "#3b3b3b",
              textAlign: "center",
              gap: "10px",
              marginTop: "32px",
            }}
          >
            <div
              onClick={present}
              style={{
                width: "50%",
                backgroundColor: "#fff",
                padding: "20px",
                fontSize: "32px",
                borderRadius: "10px",
                cursor: "pointer",
              }}
              className="yes"
            >
              হ্যাঁ{" "}
            </div>
            <div
              onClick={absent}
              style={{
                width: "50%",
                backgroundColor: "#fff",
                padding: "20px",
                fontSize: "40px",
                borderRadius: "10px",
                cursor: "pointer",
              }}
              className="no"
            >
              না{" "}
            </div>
          </div>
        </div>
      )}

      {isPresent == "no" && (
        <div style={{ color: "#fff", textAlign: "center", fontSize: "24px" }}>
          আমরা দেখতে পাচ্ছি যে, এই কিতাবের গত ক্লাসের প্রশ্ন ওস্তাদ/ওস্তাজা এখনো
          সাবমিট করেন নি বা তিনি অনুপস্থিত ছিলেন।
        </div>
      )}
    </div>
  );
}

export default QuizAttendance;
