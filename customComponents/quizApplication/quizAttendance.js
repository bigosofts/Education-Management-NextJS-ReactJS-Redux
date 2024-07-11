"use client";
import { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { updateData } from "@/apiservices/classapiservices";

import "./quiz.css";
import mytoast from "@/components/toast/toast";
import { fetchClasses } from "@/app/redux/features/classes/classesSlice";

function QuizAttendance({ classSelection, allsubmited }) {
  const dispatch = useDispatch();
  const [specificClass, setSpecificClass] = useState(() =>
    JSON.parse(JSON.stringify(classSelection))
  );

  useEffect(() => {
    setSpecificClass(JSON.parse(JSON.stringify(classSelection)));
  }, [classSelection]);

  const data = useSelector((state) => state.isAdmin.value);
  const [question, setQuestion] = useState([]);

  const [counter, setCounter] = useState(1);
  const [isPresent, setIsPresent] = useState();
  const [lastAttendanceDate, setLastAttendanceDate] = useState();
  const [render, setRender] = useState(true);
  const [showBtn, setShowBtn] = useState(true);

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
    setShowBtn(false);

    let classWant = specificClass;

    let specificStudent = classWant.students.find(
      (item) => item.SID == data.data.userDetails.userName
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

      setSpecificClass({ ...classWant });

      setRender((prev) => !prev);
      setShowBtn(true);
    }
  }

  async function absent() {
    setShowBtn(false);
    let classWant = specificClass;
    let specificStudent = classWant.students.find(
      (item) => item.SID == data.data.userDetails.userName
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
      setSpecificClass({ ...classWant });
      setRender((prev) => !prev);
      setShowBtn(true);
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
          let completionProgress = JSON.parse(
            JSON.stringify(
              specificClass.teacher.attendance[
                specificClass.teacher.attendance.length - 1
              ].completionProgress
            )
          );

          setQuestion(completionProgress);

          setLastAttendanceDate(
            specificClass.teacher.attendance[
              specificClass.teacher.attendance.length - 1
            ].presentTime
          );

          let specificStudent = specificClass.students.find(
            (item) => item.SID == data.data.userDetails.userName
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

  async function writeAnswer(answer, question, correct, counter, question2) {
    setShowBtn(false);
    let classWant = specificClass;

    let specificStudent = classWant.students.find(
      (item) => item.SID == data.data.userDetails.userName
    );

    let specificStdAttendance = specificStudent.attendance.find(
      (item) => item.presentTime == lastAttendanceDate
    );

    let completionProgress = specificStdAttendance.completionProgress;

    if (specificStdAttendance) {
      if (completionProgress.length >= 1) {
        if (counter == completionProgress.length) {
          setIsPresent("done");
          mytoast.danger("Data Already Recorded");
        } else if (completionProgress.length > counter) {
          setIsPresent("done");
          mytoast.danger("Data Already Recorded");
        } else {
          completionProgress.push({
            mark: answer == correct ? 1 : 0,
            answer: correct,
            question: question,
          });

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
            mytoast.success("Answer has been Recorded");
            setShowBtn(true);

            if (counter == question2.length) {
              mytoast.success("All Answer has been submitted");

              setIsPresent("done");
              allsubmited(completionProgress);
              dispatch(fetchClasses());
            } else {
              setCounter((prev) => prev + 1);
            }
          }
        }
      } else {
        completionProgress.push({
          mark: answer == correct ? 1 : 0,
          answer: correct,
          question: question,
        });

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
          mytoast.success("Answer has been Recorded");
          setShowBtn(true);
          if (question2.length == completionProgress.length) {
            setIsPresent("done");
            allsubmited(completionProgress);
            mytoast.success("All Answer has been submitted");
            dispatch(fetchClasses());
          } else {
            setCounter((prev) => prev + 1);
          }
        }
      }
    }
  }

  return (
    <div className="wrapperQuiz">
      {isPresent == "ok" && (
        <>
          {showBtn ? (
            <div id="quiz">
              <div className="insideQuiz">
                <p id="question">
                  {counter &&
                    question.length > 0 &&
                    question[counter - 1].question}
                </p>

                <div class="buttons">
                  <button
                    onClick={() =>
                      writeAnswer(
                        counter &&
                          question &&
                          question[counter - 1].multipleChoice.choice1,
                        counter && question && question[counter - 1].question,
                        counter &&
                          question &&
                          question[counter - 1].multipleChoice.answer,
                        counter,
                        question
                      )
                    }
                    id="btn0"
                  >
                    <span id="choice0">
                      {counter &&
                        question &&
                        question[counter - 1].multipleChoice.choice1}
                    </span>
                  </button>
                  <button
                    onClick={() =>
                      writeAnswer(
                        counter &&
                          question &&
                          question[counter - 1].multipleChoice.choice2,
                        counter && question && question[counter - 1].question,
                        counter &&
                          question &&
                          question[counter - 1].multipleChoice.answer,
                        counter,
                        question
                      )
                    }
                    id="btn1"
                  >
                    <span id="choice1">
                      {counter &&
                        question &&
                        question[counter - 1].multipleChoice.choice2}
                    </span>
                  </button>
                  <button
                    onClick={() =>
                      writeAnswer(
                        counter &&
                          question &&
                          question[counter - 1].multipleChoice.choice3,
                        counter && question && question[counter - 1].question,
                        counter &&
                          question &&
                          question[counter - 1].multipleChoice.answer,
                        counter,
                        question
                      )
                    }
                    id="btn2"
                  >
                    <span id="choice3">
                      {counter &&
                        question &&
                        question[counter - 1].multipleChoice.choice3}
                    </span>
                  </button>
                </div>
              </div>
            </div>
          ) : (
            <h2 className="mt-5 text-center text-white">
              Updating... <br /> Please wait
            </h2>
          )}

          <footer>
            <p id="progress">
              <div className="progress-number">
                {counter && question && counter}
              </div>{" "}
              of{" "}
              <div className="progress-number">
                {counter && question && question.length}
              </div>
            </p>
          </footer>
        </>
      )}

      {isPresent == "done" && (
        <div style={{ color: "#fff", textAlign: "center", fontSize: "24px" }}>
          আলহামদুলিল্লাহ, আপনি সকল প্রশ্নের উত্তর দিয়েছেন, আপনার প্রতিদিনের
          প্রাপ্ত মার্ক প্রতি সেমিস্টার শেষে মূল্যায়ন করা হবে।
        </div>
      )}

      {isPresent == "vaccant" && showBtn && (
        <div style={{ color: "#fff", textAlign: "center" }}>
          আপনি কি {lastAttendanceDate} তারিখের ক্লাসে, এই কিতাবের দারসে উপস্থিত
          ছিলেন?
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
      {isPresent == "vaccant" && !showBtn && (
        <h2 className="mt-5 text-center text-white">
          Updating... <br /> Please wait
        </h2>
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
