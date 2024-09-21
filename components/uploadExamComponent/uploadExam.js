"use client";
import "./hifz.css";

import Loader from "@/customComponents/loader/Loader";
import { useSelector, useDispatch } from "react-redux";
import { useRouter } from "next/navigation";
import { useRef, useState, useEffect } from "react";
import mytoast from "../toast/toast";
import { updateData as updateClasses } from "@/apiservices/classapiservices";
import moment from "moment";
import { selectData as selectClasses } from "@/apiservices/classapiservices";
import { fetchClasses } from "@/app/redux/features/classes/classesSlice";

function UploadExamStudent() {
  const dispatch = useDispatch();
  const router = useRouter();
  const [file, setFile] = useState();
  const data = useSelector((state) => state.isAdmin.value);
  const courseState = useSelector((state) => state.courseState.value);
  const [classes, setClasses] = useState();
  const classesDatas = useSelector((state) => state.classes.classes);
  const books = useSelector((state) => state.books.books);
  const [showUpload, setShowUpload] = useState(true);

  useEffect(() => {
    setClasses(classesDatas);
  }, [classesDatas]);

  //   {
  //     "alemalema": true,
  //     "schoolalemalema": null,
  //     "prealemalema": null,
  //     "farzeayinclass": null,
  //     "hifjulquran": true,
  //     "abacus_student": true,
  //     "shishumaktab": null,
  //     "farzeayinnajera": null,
  //     "ramadanquranulkarim": true,
  //     "department": "department01",
  //     "jamat": "jamat1",
  //     "semester": "semester01"
  // }
  function findBooks(bookID) {
    return books.find((item) => {
      return item.bookID == bookID;
    });
  }

  function niceDate(date, timeZone) {
    var isoTime = date;
    var dateObj = new Date(isoTime);

    var options = {
      day: "numeric",
      month: "long",
      year: "numeric",
    };

    let formattedDate = `Date: ${dateObj.toLocaleDateString("en-US", options)}`;
    return formattedDate;
  }

  function niceTime(date, timeZone) {
    var isoTime = date;
    var dateObj = new Date(isoTime);

    var options2 = {
      hour: "numeric",
      minute: "numeric",
      second: "numeric",
      hour12: true, // For 12-hour format with AM/PM
      timeZone: timeZone,
    };

    let formattedDate = `Time: ${dateObj.toLocaleTimeString(
      "en-US",
      options2
    )}`;
    return formattedDate;
  }

  function colorDecision(date) {
    const givenDate = new Date(date);
    const currentDate = new Date();

    // Calculate the difference in milliseconds
    const timeDifference = givenDate.getTime() - currentDate.getTime();

    // Calculate the difference in days
    const dayDifference = timeDifference / (1000 * 60 * 60 * 24);

    // Determine the class based on the day difference
    if (dayDifference > 1) {
      return "text-blue-700 p-1 md:p-2 rounded-md text-xs md:text-2xl";
    } else if (dayDifference >= 0 && dayDifference <= 1) {
      return "text-red-700 animate__animated animate__infinite animate__flash p-1 md:p-2 rounded-md  text-xs md:text-2xl";
    } else {
      return "p-2";
    }
  }

  function colorDecisionButton(date) {
    const givenDate = new Date(date);
    const currentDate = new Date();

    // Calculate the difference in milliseconds
    const timeDifference = givenDate.getTime() - currentDate.getTime();

    // Calculate the difference in days
    const dayDifference = timeDifference / (1000 * 60 * 60 * 24);

    // Determine the class based on the day difference
    if (dayDifference > 1) {
      return "bg-blue-700 text-white rounded-md p-1 w-full";
    } else if (dayDifference >= 0 && dayDifference <= 1) {
      return "bg-red-700 text-white rounded-md p-1 w-full animate__animated animate__infinite animate__flash rounded-md";
    } else {
      return "hidden";
    }
  }

  function dayDecision(date) {
    const givenDate = new Date(date);
    const currentDate = new Date();

    // Calculate the difference in time (in milliseconds)
    const timeDifference = givenDate - currentDate;

    // Calculate the difference in days
    const dayDifference = timeDifference / (1000 * 60 * 60 * 24);

    if (dayDifference > 1) {
      return false;
    } else if (dayDifference > 0 && dayDifference <= 1) {
      return false;
    } else {
      return true;
    }
  }

  async function downloadPDF(fileID) {
    const res = await fetch(
      `${process.env.NEXT_PUBLIC_URL}/apis/v1/pdf/${fileID}`
    );
    const data = await res.json();
    router.push(data.webContentLink);
  }

  async function openPDF(fileID) {
    const res = await fetch(
      `${process.env.NEXT_PUBLIC_URL}/apis/v1/pdf/${fileID}`
    );
    const data = await res.json();
    router.push(data.webViewLink);
  }

  async function submitExamSheet(classID, examQuestionID, examType) {
    let singleClassDataQuery = await selectClasses({ _id: classID }, null);
    mytoast.success("Your Exam Sheet has been uploaded: 25%");

    let singleClassData = JSON.parse(
      JSON.stringify(singleClassDataQuery.data[0])
    );

    if (file) {
      setShowUpload(false);

      const formData = new FormData();
      formData.append("file", file);

      try {
        const response = await fetch(
          `${process.env.NEXT_PUBLIC_URL}/apis/v1/pdf-answer`,
          {
            method: "POST",
            body: formData,
          }
        );

        if (response.ok) {
          const result = await response.json();

          if (result.data.id) {
            mytoast.success("Your Exam Sheet has been uploaded: 50%");
            let singleStudents = singleClassData.students.find(
              (item) => item.SID == data.data.userDetails.userName
            );

            const timezoneOffset = 6 * 60; // Offset in minutes (6 hours * 60 minutes)
            const currentDate = moment()
              .utcOffset(timezoneOffset)
              .format("YYYY-MM-DDTHH:mm:ssZ");

            if (singleStudents.examSheet.length == 0) {
              singleStudents.examSheet.push({
                examID: examQuestionID,
                examSheet: result.data.id,
                examType: examType,
                submittedDate: currentDate,
              });
            } else {
              singleStudents.examSheet = singleStudents.examSheet.map(
                (item) => {
                  if (item.examID == examQuestionID) {
                    return {
                      examID: examQuestionID,
                      examSheet: result.data.id,
                      examType: examType,
                      submittedDate: currentDate,
                    };
                  } else {
                    return item;
                  }
                }
              );
            }
            mytoast.success("Your Exam Sheet has been uploaded: 75%");
            const res = await updateClasses({
              classID: singleClassData.classID,
              courseID: singleClassData.courseID,
              batchNo: singleClassData.batchNo,
              maleClassLink: singleClassData.maleClassLink,
              femaleClassLink: singleClassData.femaleClassLink,
              departmentID: singleClassData.departmentID,
              jamatID: singleClassData.jamatID,
              semesterID: singleClassData.semesterID,
              bookID: singleClassData.bookID,
              teacher: singleClassData.teacher,
              examQuestion: singleClassData.examQuestion,
              students: singleClassData.students,
              classStartTime: singleClassData.classStartTime,
              classEndTime: singleClassData.classEndTime,
              activeStatus: singleClassData.activeStatus,
              idValue: classID,
            });

            if (res.status == "Alhamdulillah") {
              mytoast.success("Your Exam Sheet has been uploaded: 100%");
              setShowUpload(true);
              setFile(null);
              dispatch(fetchClasses());
            }
          }
        } else {
          mytoast.danger("File not uploaded. Please Try again");
        }
      } catch (err) {
        console.error("Error:", err);
      }
    } else {
      mytoast.info("Choose a PDF file first");
    }
  }

  function checkAnswerSheet(classID, examQuestionID) {
    let classData = JSON.parse(JSON.stringify(classes));

    let singleClassData = classData.find((item) => item._id == classID);

    let singleStudents = singleClassData.students.find((item) => {
      return item.SID == data.data.userDetails.userName;
    });

    if (singleStudents.examSheet.length > 0) {
      let singleExamSheet = singleStudents.examSheet.find((item) => {
        return item.examID == examQuestionID;
      });

      return singleExamSheet?.examSheet || null;
    } else {
      return null;
    }
  }

  function fileChangeHandler(e) {
    e.preventDefault();
    setFile(e.target.files[0]);
  }

  if (courseState && data && classes && books) {
    return (
      <div>
        <h1 className="text-center mt-10">Exam Questions</h1>

        {courseState.alemalema && (
          <>
            <h2 className="p-4 mt-5 text-center border-[1px] border-slate-300 bg-green-800 text-white text-lg md:text-xl w-[95%] md:w-[40%] mx-auto rounded-lg">
              আলেম আলেমা ক্লাসের পরীক্ষাসমূহ
            </h2>
            <div className="w-[95%] mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 gap-5 md:gap-4 mt-10">
              {classes
                .filter(
                  (item) =>
                    item.batchNo == data.data.userDetails.batchCount &&
                    item.courseID == "alemalema" &&
                    item.jamatID == courseState.jamat &&
                    item.semesterID == courseState.semester
                )
                .map((item, i) => {
                  if (
                    item.examQuestion.length > 0 &&
                    item.examQuestion[0] != ""
                  ) {
                    return (
                      <div
                        key={i}
                        className="shadow-md p-5 border-[1px] border-slate-200 bg-white text-xs md:text-lg rounded-md font-extrabold"
                      >
                        <div className="w-[75%] md:w-[60%] mx-auto border-[1px] border-slate-300 p-4 rounded-lg text-sm xl:text-2xl">
                          <p> classID: {item.classID} </p>
                          <p>
                            {" "}
                            bookName: {findBooks(item.bookID).bookName.bn}{" "}
                          </p>
                          <p> Ostad: {item.teacher.tName} </p>
                        </div>

                        <div className="hifz_table">
                          <div className="table_container mt-2 md:mt-10">
                            <table>
                              <thead className="sticky top-0">
                                <tr>
                                  <th>পরীক্ষার নাম</th>
                                  <th>পরীক্ষার সময়</th>
                                  <th>পরীক্ষার প্রশ্ন</th>
                                  <th>খাতা আপলোড</th>
                                </tr>
                              </thead>
                              <tbody>
                                {item.examQuestion.map((item2, i2) => (
                                  <tr key={i2}>
                                    <td>{item2.examType}</td>
                                    <td>
                                      <span className="text-xs md:text-2xl">
                                        {niceDate(
                                          item2.startedDate,
                                          "Asia/Dhaka"
                                        )}
                                      </span>

                                      <br />
                                      <span
                                        style={{
                                          animationDuration: "3s",
                                          marginTop: "5px",
                                          display: "block",
                                        }}
                                        className={colorDecision(
                                          item2.startedDate
                                        )}
                                      >
                                        {niceTime(
                                          item2.startedDate,
                                          "Asia/Dhaka"
                                        )}
                                      </span>
                                    </td>
                                    <td>
                                      {dayDecision(item2.startedDate) ? (
                                        <div className="flex justify-between gap-4">
                                          <button
                                            onClick={() =>
                                              openPDF(item2.examQuestion)
                                            }
                                            className={
                                              "cursor-pointer p-1 bg-blue-700 text-white w-full"
                                            }
                                          >
                                            Open
                                          </button>

                                          <button
                                            onClick={() =>
                                              downloadPDF(item2.examQuestion)
                                            }
                                            className="cursor-pointer p-1 bg-red-500 text-white w-full"
                                          >
                                            Download
                                          </button>
                                        </div>
                                      ) : (
                                        <div
                                          style={{ animationDuration: "3s" }}
                                          className={colorDecisionButton(
                                            item2.startedDate
                                          )}
                                        >
                                          upcoming
                                        </div>
                                      )}
                                    </td>
                                    <td>
                                      {dayDecision(item2.startedDate) ? (
                                        <>
                                          <div className="flex justify-between gap-4">
                                            <input
                                              onChange={fileChangeHandler}
                                              type="file"
                                              id="fileInput"
                                              accept="application/pdf"
                                              style={{ display: "none" }}
                                            />
                                            <label
                                              htmlFor="fileInput"
                                              className="cursor-pointer p-1 bg-yellow-700 text-white w-full rounded-lg"
                                            >
                                              Choose
                                            </label>

                                            {showUpload && (
                                              <button
                                                onClick={() =>
                                                  submitExamSheet(
                                                    item._id,
                                                    item2._id,
                                                    item2.examType
                                                  )
                                                }
                                                className="cursor-pointer p-1 bg-purple-500 text-white w-full rounded-lg"
                                              >
                                                Upload
                                              </button>
                                            )}

                                            {!showUpload && (
                                              <button className="p-1 bg-red-500 text-white w-full">
                                                <span className="animate__animated animate__infinite animate__flash">
                                                  Uploading
                                                </span>
                                              </button>
                                            )}
                                          </div>

                                          {checkAnswerSheet(
                                            item._id,
                                            item2._id
                                          ) ? (
                                            <div className="mt-5 flex justify-between gap-4">
                                              <button
                                                onClick={() =>
                                                  openPDF(
                                                    checkAnswerSheet(
                                                      item._id,
                                                      item2._id
                                                    )
                                                  )
                                                }
                                                className={
                                                  "cursor-pointer p-1 bg-blue-700 text-white w-full rounded-lg"
                                                }
                                              >
                                                Open
                                              </button>

                                              <button
                                                onClick={() =>
                                                  downloadPDF(
                                                    checkAnswerSheet(
                                                      item._id,
                                                      item2._id
                                                    )
                                                  )
                                                }
                                                className="cursor-pointer p-1 bg-red-500 text-white w-full rounded-lg"
                                              >
                                                Download
                                              </button>
                                            </div>
                                          ) : (
                                            ""
                                          )}
                                        </>
                                      ) : (
                                        ""
                                      )}
                                    </td>
                                  </tr>
                                ))}
                              </tbody>
                            </table>
                          </div>
                        </div>

                        <div className="bg-slate-900 text-slate-100 p-2 text-center text-xs md:text-lg rounded-lg">
                          <marquee>
                            খাতা অবশ্যই পিডিএফ (.pdf) ফাইল হতে হবে ।
                            "camscanner" সফটওয়ারটির ডাউনলোড করতে নিচের বাটনটি
                            চাপুন। "camscanner" মোবাইল এপ ব্যাবহার করে আপনার
                            সম্পুর্ণ খাতার পেইজ এক এক করে স্ক্যান করবেন, অতঃপর
                            খাতাটি পিডিএফ হিসেবে সেইভ করবেন । সেই পিডিএফটি
                            আপনারা এখানে আপলোড করতে পারেন।
                          </marquee>
                          <a href="https://play.google.com/store/apps/details?id=com.intsig.camscanner">
                            <span className="p-[1px] bg-white text-slate-800 cursor-pointer rounded-md">
                              Download Now{" "}
                            </span>
                          </a>
                        </div>
                      </div>
                    );
                  }
                  return null;
                })}
            </div>
          </>
        )}

        {courseState.schoolalemalema && (
          <>
            <h2 className="p-4 mt-5 text-center border-[1px] border-slate-300 bg-green-800 text-white text-lg md:text-xl w-[95%] md:w-[40%] mx-auto rounded-lg">
              স্কুল আলেম আলেমা ক্লাসের পরীক্ষাসমূহ
            </h2>
            <div className="w-[95%] mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 gap-5 md:gap-4 mt-10">
              {classes
                .filter(
                  (item) =>
                    item.batchNo == data.data.userDetails.batchCount &&
                    item.courseID == "schoolalemalema" &&
                    item.jamatID == courseState.jamat &&
                    item.semesterID == courseState.semester
                )
                .map((item, i) => {
                  if (
                    item.examQuestion.length > 0 &&
                    item.examQuestion[0] != ""
                  ) {
                    return (
                      <div
                        key={i}
                        className="shadow-md p-5 border-[1px] border-slate-200 bg-white text-xs md:text-lg rounded-md font-extrabold"
                      >
                        <div className="w-[75%] md:w-[60%] mx-auto border-[1px] border-slate-300 p-4 rounded-lg text-sm xl:text-2xl">
                          <p> classID: {item.classID} </p>
                          <p>
                            {" "}
                            bookName: {findBooks(item.bookID).bookName.bn}{" "}
                          </p>
                          <p> Ostad: {item.teacher.tName} </p>
                        </div>

                        <div className="hifz_table">
                          <div className="table_container mt-2 md:mt-10">
                            <table>
                              <thead className="sticky top-0">
                                <tr>
                                  <th>পরীক্ষার নাম</th>
                                  <th>পরীক্ষার সময়</th>
                                  <th>পরীক্ষার প্রশ্ন</th>
                                  <th>খাতা আপলোড</th>
                                </tr>
                              </thead>
                              <tbody>
                                {item.examQuestion.map((item2, i2) => (
                                  <tr key={i2}>
                                    <td>{item2.examType}</td>
                                    <td>
                                      <span className="text-xs md:text-2xl">
                                        {niceDate(
                                          item2.startedDate,
                                          "Asia/Dhaka"
                                        )}
                                      </span>

                                      <br />
                                      <span
                                        style={{
                                          animationDuration: "3s",
                                          marginTop: "5px",
                                          display: "block",
                                        }}
                                        className={colorDecision(
                                          item2.startedDate
                                        )}
                                      >
                                        {niceTime(
                                          item2.startedDate,
                                          "Asia/Dhaka"
                                        )}
                                      </span>
                                    </td>
                                    <td>
                                      {dayDecision(item2.startedDate) ? (
                                        <div className="flex justify-between gap-4">
                                          <button
                                            onClick={() =>
                                              openPDF(item2.examQuestion)
                                            }
                                            className={
                                              "cursor-pointer p-1 bg-blue-700 text-white w-full"
                                            }
                                          >
                                            Open
                                          </button>

                                          <button
                                            onClick={() =>
                                              downloadPDF(item2.examQuestion)
                                            }
                                            className="cursor-pointer p-1 bg-red-500 text-white w-full"
                                          >
                                            Download
                                          </button>
                                        </div>
                                      ) : (
                                        <div
                                          style={{ animationDuration: "3s" }}
                                          className={colorDecisionButton(
                                            item2.startedDate
                                          )}
                                        >
                                          upcoming
                                        </div>
                                      )}
                                    </td>
                                    <td>
                                      {dayDecision(item2.startedDate) ? (
                                        <>
                                          <div className="flex justify-between gap-4">
                                            <input
                                              onChange={fileChangeHandler}
                                              type="file"
                                              id="fileInput"
                                              accept="application/pdf"
                                              style={{ display: "none" }}
                                            />
                                            <label
                                              htmlFor="fileInput"
                                              className="cursor-pointer p-1 bg-yellow-700 text-white w-full rounded-lg"
                                            >
                                              Choose
                                            </label>

                                            {showUpload && (
                                              <button
                                                onClick={() =>
                                                  submitExamSheet(
                                                    item._id,
                                                    item2._id,
                                                    item2.examType
                                                  )
                                                }
                                                className="cursor-pointer p-1 bg-purple-500 text-white w-full rounded-lg"
                                              >
                                                Upload
                                              </button>
                                            )}

                                            {!showUpload && (
                                              <button className="p-1 bg-red-500 text-white w-full">
                                                <span className="animate__animated animate__infinite animate__flash">
                                                  Uploading
                                                </span>
                                              </button>
                                            )}
                                          </div>

                                          {checkAnswerSheet(
                                            item._id,
                                            item2._id
                                          ) ? (
                                            <div className="mt-5 flex justify-between gap-4">
                                              <button
                                                onClick={() =>
                                                  openPDF(
                                                    checkAnswerSheet(
                                                      item._id,
                                                      item2._id
                                                    )
                                                  )
                                                }
                                                className={
                                                  "cursor-pointer p-1 bg-blue-700 text-white w-full rounded-lg"
                                                }
                                              >
                                                Open
                                              </button>

                                              <button
                                                onClick={() =>
                                                  downloadPDF(
                                                    checkAnswerSheet(
                                                      item._id,
                                                      item2._id
                                                    )
                                                  )
                                                }
                                                className="cursor-pointer p-1 bg-red-500 text-white w-full rounded-lg"
                                              >
                                                Download
                                              </button>
                                            </div>
                                          ) : (
                                            ""
                                          )}
                                        </>
                                      ) : (
                                        ""
                                      )}
                                    </td>
                                  </tr>
                                ))}
                              </tbody>
                            </table>
                          </div>
                        </div>

                        <div className="bg-slate-900 text-slate-100 p-2 text-center text-xs md:text-lg rounded-lg">
                          <marquee>
                            খাতা অবশ্যই পিডিএফ (.pdf) ফাইল হতে হবে ।
                            "camscanner" সফটওয়ারটির ডাউনলোড করতে নিচের বাটনটি
                            চাপুন। "camscanner" মোবাইল এপ ব্যাবহার করে আপনার
                            সম্পুর্ণ খাতার পেইজ এক এক করে স্ক্যান করবেন, অতঃপর
                            খাতাটি পিডিএফ হিসেবে সেইভ করবেন । সেই পিডিএফটি
                            আপনারা এখানে আপলোড করতে পারেন।
                          </marquee>
                          <a href="https://play.google.com/store/apps/details?id=com.intsig.camscanner">
                            <span className="p-[1px] bg-white text-slate-800 cursor-pointer rounded-md">
                              Download Now{" "}
                            </span>
                          </a>
                        </div>
                      </div>
                    );
                  }
                  return null;
                })}
            </div>
          </>
        )}

        {courseState.prealemalema && (
          <>
            <h2 className="p-4 mt-5 text-center border-[1px] border-slate-300 bg-green-800 text-white text-lg md:text-xl w-[95%] md:w-[40%] mx-auto rounded-lg">
              প্রি-আলেম আলেমা/ফরজে আইন ক্লাসের পরীক্ষাসমূহ
            </h2>
            <div className="w-[95%] mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 gap-5 md:gap-4 mt-10">
              {classes
                .filter(
                  (item) =>
                    item.batchNo == data.data.userDetails.batchCount &&
                    item.courseID == "prealemalema" &&
                    item.jamatID == courseState.jamat &&
                    item.semesterID == courseState.semester
                )
                .map((item, i) => {
                  if (
                    item.examQuestion.length > 0 &&
                    item.examQuestion[0] != ""
                  ) {
                    return (
                      <div
                        key={i}
                        className="shadow-md p-5 border-[1px] border-slate-200 bg-white text-xs md:text-lg rounded-md font-extrabold"
                      >
                        <div className="w-[75%] md:w-[60%] mx-auto border-[1px] border-slate-300 p-4 rounded-lg text-sm xl:text-2xl">
                          <p> classID: {item.classID} </p>
                          <p>
                            {" "}
                            bookName: {findBooks(item.bookID).bookName.bn}{" "}
                          </p>
                          <p> Ostad: {item.teacher.tName} </p>
                        </div>

                        <div className="hifz_table">
                          <div className="table_container mt-2 md:mt-10">
                            <table>
                              <thead className="sticky top-0">
                                <tr>
                                  <th>পরীক্ষার নাম</th>
                                  <th>পরীক্ষার সময়</th>
                                  <th>পরীক্ষার প্রশ্ন</th>
                                  <th>খাতা আপলোড</th>
                                </tr>
                              </thead>
                              <tbody>
                                {item.examQuestion.map((item2, i2) => (
                                  <tr key={i2}>
                                    <td>{item2.examType}</td>
                                    <td>
                                      <span className="text-xs md:text-2xl">
                                        {niceDate(
                                          item2.startedDate,
                                          "Asia/Dhaka"
                                        )}
                                      </span>

                                      <br />
                                      <span
                                        style={{
                                          animationDuration: "3s",
                                          marginTop: "5px",
                                          display: "block",
                                        }}
                                        className={colorDecision(
                                          item2.startedDate
                                        )}
                                      >
                                        {niceTime(
                                          item2.startedDate,
                                          "Asia/Dhaka"
                                        )}
                                      </span>
                                    </td>
                                    <td>
                                      {dayDecision(item2.startedDate) ? (
                                        <div className="flex justify-between gap-4">
                                          <button
                                            onClick={() =>
                                              openPDF(item2.examQuestion)
                                            }
                                            className={
                                              "cursor-pointer p-1 bg-blue-700 text-white w-full"
                                            }
                                          >
                                            Open
                                          </button>

                                          <button
                                            onClick={() =>
                                              downloadPDF(item2.examQuestion)
                                            }
                                            className="cursor-pointer p-1 bg-red-500 text-white w-full"
                                          >
                                            Download
                                          </button>
                                        </div>
                                      ) : (
                                        <div
                                          style={{ animationDuration: "3s" }}
                                          className={colorDecisionButton(
                                            item2.startedDate
                                          )}
                                        >
                                          upcoming
                                        </div>
                                      )}
                                    </td>
                                    <td>
                                      {dayDecision(item2.startedDate) ? (
                                        <>
                                          <div className="flex justify-between gap-4">
                                            <input
                                              onChange={fileChangeHandler}
                                              type="file"
                                              id="fileInput"
                                              accept="application/pdf"
                                              style={{ display: "none" }}
                                            />
                                            <label
                                              htmlFor="fileInput"
                                              className="cursor-pointer p-1 bg-yellow-700 text-white w-full rounded-lg"
                                            >
                                              Choose
                                            </label>

                                            {showUpload && (
                                              <button
                                                onClick={() =>
                                                  submitExamSheet(
                                                    item._id,
                                                    item2._id,
                                                    item2.examType
                                                  )
                                                }
                                                className="cursor-pointer p-1 bg-purple-500 text-white w-full rounded-lg"
                                              >
                                                Upload
                                              </button>
                                            )}

                                            {!showUpload && (
                                              <button className="p-1 bg-red-500 text-white w-full">
                                                <span className="animate__animated animate__infinite animate__flash">
                                                  Uploading
                                                </span>
                                              </button>
                                            )}
                                          </div>

                                          {checkAnswerSheet(
                                            item._id,
                                            item2._id
                                          ) ? (
                                            <div className="mt-5 flex justify-between gap-4">
                                              <button
                                                onClick={() =>
                                                  openPDF(
                                                    checkAnswerSheet(
                                                      item._id,
                                                      item2._id
                                                    )
                                                  )
                                                }
                                                className={
                                                  "cursor-pointer p-1 bg-blue-700 text-white w-full rounded-lg"
                                                }
                                              >
                                                Open
                                              </button>

                                              <button
                                                onClick={() =>
                                                  downloadPDF(
                                                    checkAnswerSheet(
                                                      item._id,
                                                      item2._id
                                                    )
                                                  )
                                                }
                                                className="cursor-pointer p-1 bg-red-500 text-white w-full rounded-lg"
                                              >
                                                Download
                                              </button>
                                            </div>
                                          ) : (
                                            ""
                                          )}
                                        </>
                                      ) : (
                                        ""
                                      )}
                                    </td>
                                  </tr>
                                ))}
                              </tbody>
                            </table>
                          </div>
                        </div>

                        <div className="bg-slate-900 text-slate-100 p-2 text-center text-xs md:text-lg rounded-lg">
                          <marquee>
                            খাতা অবশ্যই পিডিএফ (.pdf) ফাইল হতে হবে ।
                            "camscanner" সফটওয়ারটির ডাউনলোড করতে নিচের বাটনটি
                            চাপুন। "camscanner" মোবাইল এপ ব্যাবহার করে আপনার
                            সম্পুর্ণ খাতার পেইজ এক এক করে স্ক্যান করবেন, অতঃপর
                            খাতাটি পিডিএফ হিসেবে সেইভ করবেন । সেই পিডিএফটি
                            আপনারা এখানে আপলোড করতে পারেন।
                          </marquee>
                          <a href="https://play.google.com/store/apps/details?id=com.intsig.camscanner">
                            <span className="p-[1px] bg-white text-slate-800 cursor-pointer rounded-md">
                              Download Now{" "}
                            </span>
                          </a>
                        </div>
                      </div>
                    );
                  }
                  return null;
                })}
            </div>
          </>
        )}

        {courseState.abacus_student && (
          <>
            <h2 className="p-4 mt-5 text-center border-[1px] border-slate-300 bg-green-800 text-white text-lg md:text-xl w-[95%] md:w-[40%] mx-auto rounded-lg">
              অ্যাবাকাস স্টুডেন্ট ক্লাসের পরীক্ষাসমূহ
            </h2>
            <div className="w-[95%] mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 gap-5 md:gap-4 mt-10">
              {classes
                .filter(
                  (item) =>
                    item.batchNo == data.data.userDetails.batchCount &&
                    item.courseID == "abacus_student"
                )
                .map((item, i) => {
                  if (
                    item.examQuestion.length > 0 &&
                    item.examQuestion[0] != ""
                  ) {
                    return (
                      <div
                        key={i}
                        className="shadow-md p-5 border-[1px] border-slate-200 bg-white text-xs md:text-lg rounded-md font-extrabold"
                      >
                        <div className="w-[75%] md:w-[60%] mx-auto border-[1px] border-slate-300 p-4 rounded-lg text-sm xl:text-2xl">
                          <p> classID: {item.classID} </p>
                          <p>
                            {" "}
                            bookName: {findBooks(item.bookID).bookName.bn}{" "}
                          </p>
                          <p> Ostad: {item.teacher.tName} </p>
                        </div>

                        <div className="hifz_table">
                          <div className="table_container mt-2 md:mt-10">
                            <table>
                              <thead className="sticky top-0">
                                <tr>
                                  <th>পরীক্ষার নাম</th>
                                  <th>পরীক্ষার সময়</th>
                                  <th>পরীক্ষার প্রশ্ন</th>
                                  <th>খাতা আপলোড</th>
                                </tr>
                              </thead>
                              <tbody>
                                {item.examQuestion.map((item2, i2) => (
                                  <tr key={i2}>
                                    <td>{item2.examType}</td>
                                    <td>
                                      <span className="text-xs md:text-2xl">
                                        {niceDate(
                                          item2.startedDate,
                                          "Asia/Dhaka"
                                        )}
                                      </span>

                                      <br />
                                      <span
                                        style={{
                                          animationDuration: "3s",
                                          marginTop: "5px",
                                          display: "block",
                                        }}
                                        className={colorDecision(
                                          item2.startedDate
                                        )}
                                      >
                                        {niceTime(
                                          item2.startedDate,
                                          "Asia/Dhaka"
                                        )}
                                      </span>
                                    </td>
                                    <td>
                                      {dayDecision(item2.startedDate) ? (
                                        <div className="flex justify-between gap-4">
                                          <button
                                            onClick={() =>
                                              openPDF(item2.examQuestion)
                                            }
                                            className={
                                              "cursor-pointer p-1 bg-blue-700 text-white w-full"
                                            }
                                          >
                                            Open
                                          </button>

                                          <button
                                            onClick={() =>
                                              downloadPDF(item2.examQuestion)
                                            }
                                            className="cursor-pointer p-1 bg-red-500 text-white w-full"
                                          >
                                            Download
                                          </button>
                                        </div>
                                      ) : (
                                        <div
                                          style={{ animationDuration: "3s" }}
                                          className={colorDecisionButton(
                                            item2.startedDate
                                          )}
                                        >
                                          upcoming
                                        </div>
                                      )}
                                    </td>
                                    <td>
                                      {dayDecision(item2.startedDate) ? (
                                        <>
                                          <div className="flex justify-between gap-4">
                                            <input
                                              onChange={fileChangeHandler}
                                              type="file"
                                              id="fileInput"
                                              accept="application/pdf"
                                              style={{ display: "none" }}
                                            />
                                            <label
                                              htmlFor="fileInput"
                                              className="cursor-pointer p-1 bg-yellow-700 text-white w-full rounded-lg"
                                            >
                                              Choose
                                            </label>

                                            {showUpload && (
                                              <button
                                                onClick={() =>
                                                  submitExamSheet(
                                                    item._id,
                                                    item2._id,
                                                    item2.examType
                                                  )
                                                }
                                                className="cursor-pointer p-1 bg-purple-500 text-white w-full rounded-lg"
                                              >
                                                Upload
                                              </button>
                                            )}

                                            {!showUpload && (
                                              <button className="p-1 bg-red-500 text-white w-full">
                                                <span className="animate__animated animate__infinite animate__flash">
                                                  Uploading
                                                </span>
                                              </button>
                                            )}
                                          </div>

                                          {checkAnswerSheet(
                                            item._id,
                                            item2._id
                                          ) ? (
                                            <div className="mt-5 flex justify-between gap-4">
                                              <button
                                                onClick={() =>
                                                  openPDF(
                                                    checkAnswerSheet(
                                                      item._id,
                                                      item2._id
                                                    )
                                                  )
                                                }
                                                className={
                                                  "cursor-pointer p-1 bg-blue-700 text-white w-full rounded-lg"
                                                }
                                              >
                                                Open
                                              </button>

                                              <button
                                                onClick={() =>
                                                  downloadPDF(
                                                    checkAnswerSheet(
                                                      item._id,
                                                      item2._id
                                                    )
                                                  )
                                                }
                                                className="cursor-pointer p-1 bg-red-500 text-white w-full rounded-lg"
                                              >
                                                Download
                                              </button>
                                            </div>
                                          ) : (
                                            ""
                                          )}
                                        </>
                                      ) : (
                                        ""
                                      )}
                                    </td>
                                  </tr>
                                ))}
                              </tbody>
                            </table>
                          </div>
                        </div>

                        <div className="bg-slate-900 text-slate-100 p-2 text-center text-xs md:text-lg rounded-lg">
                          <marquee>
                            খাতা অবশ্যই পিডিএফ (.pdf) ফাইল হতে হবে ।
                            "camscanner" সফটওয়ারটির ডাউনলোড করতে নিচের বাটনটি
                            চাপুন। "camscanner" মোবাইল এপ ব্যাবহার করে আপনার
                            সম্পুর্ণ খাতার পেইজ এক এক করে স্ক্যান করবেন, অতঃপর
                            খাতাটি পিডিএফ হিসেবে সেইভ করবেন । সেই পিডিএফটি
                            আপনারা এখানে আপলোড করতে পারেন।
                          </marquee>
                          <a href="https://play.google.com/store/apps/details?id=com.intsig.camscanner">
                            <span className="p-[1px] bg-white text-slate-800 cursor-pointer rounded-md">
                              Download Now{" "}
                            </span>
                          </a>
                        </div>
                      </div>
                    );
                  }
                  return null;
                })}
            </div>
          </>
        )}

        {courseState.shishumaktab && (
          <>
            <h2 className="p-4 mt-5 text-center border-[1px] border-slate-300 bg-green-800 text-white text-lg md:text-xl w-[95%] md:w-[40%] mx-auto rounded-lg">
              শিশু মক্তব ক্লাসের পরীক্ষাসমূহ
            </h2>
            <div className="w-[95%] mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 gap-5 md:gap-4 mt-10">
              {classes
                .filter(
                  (item) =>
                    item.batchNo == data.data.userDetails.batchCount &&
                    item.courseID == "shishumaktab"
                )
                .map((item, i) => {
                  if (
                    item.examQuestion.length > 0 &&
                    item.examQuestion[0] != ""
                  ) {
                    return (
                      <div
                        key={i}
                        className="shadow-md p-5 border-[1px] border-slate-200 bg-white text-xs md:text-lg rounded-md font-extrabold"
                      >
                        <div className="w-[75%] md:w-[60%] mx-auto border-[1px] border-slate-300 p-4 rounded-lg text-sm xl:text-2xl">
                          <p> classID: {item.classID} </p>
                          <p>
                            {" "}
                            bookName: {findBooks(item.bookID).bookName.bn}{" "}
                          </p>
                          <p> Ostad: {item.teacher.tName} </p>
                        </div>

                        <div className="hifz_table">
                          <div className="table_container mt-2 md:mt-10">
                            <table>
                              <thead className="sticky top-0">
                                <tr>
                                  <th>পরীক্ষার নাম</th>
                                  <th>পরীক্ষার সময়</th>
                                  <th>পরীক্ষার প্রশ্ন</th>
                                  <th>খাতা আপলোড</th>
                                </tr>
                              </thead>
                              <tbody>
                                {item.examQuestion.map((item2, i2) => (
                                  <tr key={i2}>
                                    <td>{item2.examType}</td>
                                    <td>
                                      <span className="text-xs md:text-2xl">
                                        {niceDate(
                                          item2.startedDate,
                                          "Asia/Dhaka"
                                        )}
                                      </span>

                                      <br />
                                      <span
                                        style={{
                                          animationDuration: "3s",
                                          marginTop: "5px",
                                          display: "block",
                                        }}
                                        className={colorDecision(
                                          item2.startedDate
                                        )}
                                      >
                                        {niceTime(
                                          item2.startedDate,
                                          "Asia/Dhaka"
                                        )}
                                      </span>
                                    </td>
                                    <td>
                                      {dayDecision(item2.startedDate) ? (
                                        <div className="flex justify-between gap-4">
                                          <button
                                            onClick={() =>
                                              openPDF(item2.examQuestion)
                                            }
                                            className={
                                              "cursor-pointer p-1 bg-blue-700 text-white w-full"
                                            }
                                          >
                                            Open
                                          </button>

                                          <button
                                            onClick={() =>
                                              downloadPDF(item2.examQuestion)
                                            }
                                            className="cursor-pointer p-1 bg-red-500 text-white w-full"
                                          >
                                            Download
                                          </button>
                                        </div>
                                      ) : (
                                        <div
                                          style={{ animationDuration: "3s" }}
                                          className={colorDecisionButton(
                                            item2.startedDate
                                          )}
                                        >
                                          upcoming
                                        </div>
                                      )}
                                    </td>
                                    <td>
                                      {dayDecision(item2.startedDate) ? (
                                        <>
                                          <div className="flex justify-between gap-4">
                                            <input
                                              onChange={fileChangeHandler}
                                              type="file"
                                              id="fileInput"
                                              accept="application/pdf"
                                              style={{ display: "none" }}
                                            />
                                            <label
                                              htmlFor="fileInput"
                                              className="cursor-pointer p-1 bg-yellow-700 text-white w-full rounded-lg"
                                            >
                                              Choose
                                            </label>

                                            {showUpload && (
                                              <button
                                                onClick={() =>
                                                  submitExamSheet(
                                                    item._id,
                                                    item2._id,
                                                    item2.examType
                                                  )
                                                }
                                                className="cursor-pointer p-1 bg-purple-500 text-white w-full rounded-lg"
                                              >
                                                Upload
                                              </button>
                                            )}

                                            {!showUpload && (
                                              <button className="p-1 bg-red-500 text-white w-full">
                                                <span className="animate__animated animate__infinite animate__flash">
                                                  Uploading
                                                </span>
                                              </button>
                                            )}
                                          </div>

                                          {checkAnswerSheet(
                                            item._id,
                                            item2._id
                                          ) ? (
                                            <div className="mt-5 flex justify-between gap-4">
                                              <button
                                                onClick={() =>
                                                  openPDF(
                                                    checkAnswerSheet(
                                                      item._id,
                                                      item2._id
                                                    )
                                                  )
                                                }
                                                className={
                                                  "cursor-pointer p-1 bg-blue-700 text-white w-full rounded-lg"
                                                }
                                              >
                                                Open
                                              </button>

                                              <button
                                                onClick={() =>
                                                  downloadPDF(
                                                    checkAnswerSheet(
                                                      item._id,
                                                      item2._id
                                                    )
                                                  )
                                                }
                                                className="cursor-pointer p-1 bg-red-500 text-white w-full rounded-lg"
                                              >
                                                Download
                                              </button>
                                            </div>
                                          ) : (
                                            ""
                                          )}
                                        </>
                                      ) : (
                                        ""
                                      )}
                                    </td>
                                  </tr>
                                ))}
                              </tbody>
                            </table>
                          </div>
                        </div>

                        <div className="bg-slate-900 text-slate-100 p-2 text-center text-xs md:text-lg rounded-lg">
                          <marquee>
                            খাতা অবশ্যই পিডিএফ (.pdf) ফাইল হতে হবে ।
                            "camscanner" সফটওয়ারটির ডাউনলোড করতে নিচের বাটনটি
                            চাপুন। "camscanner" মোবাইল এপ ব্যাবহার করে আপনার
                            সম্পুর্ণ খাতার পেইজ এক এক করে স্ক্যান করবেন, অতঃপর
                            খাতাটি পিডিএফ হিসেবে সেইভ করবেন । সেই পিডিএফটি
                            আপনারা এখানে আপলোড করতে পারেন।
                          </marquee>
                          <a href="https://play.google.com/store/apps/details?id=com.intsig.camscanner">
                            <span className="p-[1px] bg-white text-slate-800 cursor-pointer rounded-md">
                              Download Now{" "}
                            </span>
                          </a>
                        </div>
                      </div>
                    );
                  }
                  return null;
                })}
            </div>
          </>
        )}

        {courseState.farzeayinnajera && (
          <>
            <h2 className="p-4 mt-5 text-center border-[1px] border-slate-300 bg-green-800 text-white text-lg md:text-xl w-[95%] md:w-[40%] mx-auto rounded-lg">
              প্রি-হিফজ/নাজেরা ক্লাসের পরীক্ষাসমূহ
            </h2>
            <div className="w-[95%] mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 gap-5 md:gap-4 mt-10">
              {classes
                .filter(
                  (item) =>
                    item.batchNo == data.data.userDetails.batchCount &&
                    item.courseID == "farzeayinnajera"
                )
                .map((item, i) => {
                  if (
                    item.examQuestion.length > 0 &&
                    item.examQuestion[0] != ""
                  ) {
                    return (
                      <div
                        key={i}
                        className="shadow-md p-5 border-[1px] border-slate-200 bg-white text-xs md:text-lg rounded-md font-extrabold"
                      >
                        <div className="w-[75%] md:w-[60%] mx-auto border-[1px] border-slate-300 p-4 rounded-lg text-sm xl:text-2xl">
                          <p> classID: {item.classID} </p>
                          <p>
                            {" "}
                            bookName: {findBooks(item.bookID).bookName.bn}{" "}
                          </p>
                          <p> Ostad: {item.teacher.tName} </p>
                        </div>

                        <div className="hifz_table">
                          <div className="table_container mt-2 md:mt-10">
                            <table>
                              <thead className="sticky top-0">
                                <tr>
                                  <th>পরীক্ষার নাম</th>
                                  <th>পরীক্ষার সময়</th>
                                  <th>পরীক্ষার প্রশ্ন</th>
                                  <th>খাতা আপলোড</th>
                                </tr>
                              </thead>
                              <tbody>
                                {item.examQuestion.map((item2, i2) => (
                                  <tr key={i2}>
                                    <td>{item2.examType}</td>
                                    <td>
                                      <span className="text-xs md:text-2xl">
                                        {niceDate(
                                          item2.startedDate,
                                          "Asia/Dhaka"
                                        )}
                                      </span>

                                      <br />
                                      <span
                                        style={{
                                          animationDuration: "3s",
                                          marginTop: "5px",
                                          display: "block",
                                        }}
                                        className={colorDecision(
                                          item2.startedDate
                                        )}
                                      >
                                        {niceTime(
                                          item2.startedDate,
                                          "Asia/Dhaka"
                                        )}
                                      </span>
                                    </td>
                                    <td>
                                      {dayDecision(item2.startedDate) ? (
                                        <div className="flex justify-between gap-4">
                                          <button
                                            onClick={() =>
                                              openPDF(item2.examQuestion)
                                            }
                                            className={
                                              "cursor-pointer p-1 bg-blue-700 text-white w-full"
                                            }
                                          >
                                            Open
                                          </button>

                                          <button
                                            onClick={() =>
                                              downloadPDF(item2.examQuestion)
                                            }
                                            className="cursor-pointer p-1 bg-red-500 text-white w-full"
                                          >
                                            Download
                                          </button>
                                        </div>
                                      ) : (
                                        <div
                                          style={{ animationDuration: "3s" }}
                                          className={colorDecisionButton(
                                            item2.startedDate
                                          )}
                                        >
                                          upcoming
                                        </div>
                                      )}
                                    </td>
                                    <td>
                                      {dayDecision(item2.startedDate) ? (
                                        <>
                                          <div className="flex justify-between gap-4">
                                            <input
                                              onChange={fileChangeHandler}
                                              type="file"
                                              id="fileInput"
                                              accept="application/pdf"
                                              style={{ display: "none" }}
                                            />
                                            <label
                                              htmlFor="fileInput"
                                              className="cursor-pointer p-1 bg-yellow-700 text-white w-full rounded-lg"
                                            >
                                              Choose
                                            </label>

                                            {showUpload && (
                                              <button
                                                onClick={() =>
                                                  submitExamSheet(
                                                    item._id,
                                                    item2._id,
                                                    item2.examType
                                                  )
                                                }
                                                className="cursor-pointer p-1 bg-purple-500 text-white w-full rounded-lg"
                                              >
                                                Upload
                                              </button>
                                            )}

                                            {!showUpload && (
                                              <button className="p-1 bg-red-500 text-white w-full">
                                                <span className="animate__animated animate__infinite animate__flash">
                                                  Uploading
                                                </span>
                                              </button>
                                            )}
                                          </div>

                                          {checkAnswerSheet(
                                            item._id,
                                            item2._id
                                          ) ? (
                                            <div className="mt-5 flex justify-between gap-4">
                                              <button
                                                onClick={() =>
                                                  openPDF(
                                                    checkAnswerSheet(
                                                      item._id,
                                                      item2._id
                                                    )
                                                  )
                                                }
                                                className={
                                                  "cursor-pointer p-1 bg-blue-700 text-white w-full rounded-lg"
                                                }
                                              >
                                                Open
                                              </button>

                                              <button
                                                onClick={() =>
                                                  downloadPDF(
                                                    checkAnswerSheet(
                                                      item._id,
                                                      item2._id
                                                    )
                                                  )
                                                }
                                                className="cursor-pointer p-1 bg-red-500 text-white w-full rounded-lg"
                                              >
                                                Download
                                              </button>
                                            </div>
                                          ) : (
                                            ""
                                          )}
                                        </>
                                      ) : (
                                        ""
                                      )}
                                    </td>
                                  </tr>
                                ))}
                              </tbody>
                            </table>
                          </div>
                        </div>

                        <div className="bg-slate-900 text-slate-100 p-2 text-center text-xs md:text-lg rounded-lg">
                          <marquee>
                            খাতা অবশ্যই পিডিএফ (.pdf) ফাইল হতে হবে ।
                            "camscanner" সফটওয়ারটির ডাউনলোড করতে নিচের বাটনটি
                            চাপুন। "camscanner" মোবাইল এপ ব্যাবহার করে আপনার
                            সম্পুর্ণ খাতার পেইজ এক এক করে স্ক্যান করবেন, অতঃপর
                            খাতাটি পিডিএফ হিসেবে সেইভ করবেন । সেই পিডিএফটি
                            আপনারা এখানে আপলোড করতে পারেন।
                          </marquee>
                          <a href="https://play.google.com/store/apps/details?id=com.intsig.camscanner">
                            <span className="p-[1px] bg-white text-slate-800 cursor-pointer rounded-md">
                              Download Now{" "}
                            </span>
                          </a>
                        </div>
                      </div>
                    );
                  }
                  return null;
                })}
            </div>
          </>
        )}

        {courseState.ramadanquranulkarim && (
          <>
            <h2 className="p-4 mt-5 text-center border-[1px] border-slate-300 bg-green-800 text-white text-lg md:text-xl w-[95%] md:w-[40%] mx-auto rounded-lg">
              কুরআনুল কারীম ক্লাসের পরীক্ষাসমূহ
            </h2>
            <div className="w-[95%] mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 gap-5 md:gap-4 mt-10">
              {classes
                .filter(
                  (item) =>
                    item.batchNo == data.data.userDetails.batchCount &&
                    item.courseID == "ramadanquranulkarim"
                )
                .map((item, i) => {
                  if (
                    item.examQuestion.length > 0 &&
                    item.examQuestion[0] != ""
                  ) {
                    return (
                      <div
                        key={i}
                        className="shadow-md p-5 border-[1px] border-slate-200 bg-white text-xs md:text-lg rounded-md font-extrabold"
                      >
                        <div className="w-[75%] md:w-[60%] mx-auto border-[1px] border-slate-300 p-4 rounded-lg text-sm xl:text-2xl">
                          <p> classID: {item.classID} </p>
                          <p>
                            {" "}
                            bookName: {findBooks(item.bookID).bookName.bn}{" "}
                          </p>
                          <p> Ostad: {item.teacher.tName} </p>
                        </div>

                        <div className="hifz_table">
                          <div className="table_container mt-2 md:mt-10">
                            <table>
                              <thead className="sticky top-0">
                                <tr>
                                  <th>পরীক্ষার নাম</th>
                                  <th>পরীক্ষার সময়</th>
                                  <th>পরীক্ষার প্রশ্ন</th>
                                  <th>খাতা আপলোড</th>
                                </tr>
                              </thead>
                              <tbody>
                                {item.examQuestion.map((item2, i2) => (
                                  <tr key={i2}>
                                    <td>{item2.examType}</td>
                                    <td>
                                      <span className="text-xs md:text-2xl">
                                        {niceDate(
                                          item2.startedDate,
                                          "Asia/Dhaka"
                                        )}
                                      </span>

                                      <br />
                                      <span
                                        style={{
                                          animationDuration: "3s",
                                          marginTop: "5px",
                                          display: "block",
                                        }}
                                        className={colorDecision(
                                          item2.startedDate
                                        )}
                                      >
                                        {niceTime(
                                          item2.startedDate,
                                          "Asia/Dhaka"
                                        )}
                                      </span>
                                    </td>
                                    <td>
                                      {dayDecision(item2.startedDate) ? (
                                        <div className="flex justify-between gap-4">
                                          <button
                                            onClick={() =>
                                              openPDF(item2.examQuestion)
                                            }
                                            className={
                                              "cursor-pointer p-1 bg-blue-700 text-white w-full"
                                            }
                                          >
                                            Open
                                          </button>

                                          <button
                                            onClick={() =>
                                              downloadPDF(item2.examQuestion)
                                            }
                                            className="cursor-pointer p-1 bg-red-500 text-white w-full"
                                          >
                                            Download
                                          </button>
                                        </div>
                                      ) : (
                                        <div
                                          style={{ animationDuration: "3s" }}
                                          className={colorDecisionButton(
                                            item2.startedDate
                                          )}
                                        >
                                          upcoming
                                        </div>
                                      )}
                                    </td>
                                    <td>
                                      {dayDecision(item2.startedDate) ? (
                                        <>
                                          <div className="flex justify-between gap-4">
                                            <input
                                              onChange={fileChangeHandler}
                                              type="file"
                                              id="fileInput"
                                              accept="application/pdf"
                                              style={{ display: "none" }}
                                            />
                                            <label
                                              htmlFor="fileInput"
                                              className="cursor-pointer p-1 bg-yellow-700 text-white w-full rounded-lg"
                                            >
                                              Choose
                                            </label>

                                            {showUpload && (
                                              <button
                                                onClick={() =>
                                                  submitExamSheet(
                                                    item._id,
                                                    item2._id,
                                                    item2.examType
                                                  )
                                                }
                                                className="cursor-pointer p-1 bg-purple-500 text-white w-full rounded-lg"
                                              >
                                                Upload
                                              </button>
                                            )}

                                            {!showUpload && (
                                              <button className="p-1 bg-red-500 text-white w-full">
                                                <span className="animate__animated animate__infinite animate__flash">
                                                  Uploading
                                                </span>
                                              </button>
                                            )}
                                          </div>

                                          {checkAnswerSheet(
                                            item._id,
                                            item2._id
                                          ) ? (
                                            <div className="mt-5 flex justify-between gap-4">
                                              <button
                                                onClick={() =>
                                                  openPDF(
                                                    checkAnswerSheet(
                                                      item._id,
                                                      item2._id
                                                    )
                                                  )
                                                }
                                                className={
                                                  "cursor-pointer p-1 bg-blue-700 text-white w-full rounded-lg"
                                                }
                                              >
                                                Open
                                              </button>

                                              <button
                                                onClick={() =>
                                                  downloadPDF(
                                                    checkAnswerSheet(
                                                      item._id,
                                                      item2._id
                                                    )
                                                  )
                                                }
                                                className="cursor-pointer p-1 bg-red-500 text-white w-full rounded-lg"
                                              >
                                                Download
                                              </button>
                                            </div>
                                          ) : (
                                            ""
                                          )}
                                        </>
                                      ) : (
                                        ""
                                      )}
                                    </td>
                                  </tr>
                                ))}
                              </tbody>
                            </table>
                          </div>
                        </div>

                        <div className="bg-slate-900 text-slate-100 p-2 text-center text-xs md:text-lg rounded-lg">
                          <marquee>
                            খাতা অবশ্যই পিডিএফ (.pdf) ফাইল হতে হবে ।
                            "camscanner" সফটওয়ারটির ডাউনলোড করতে নিচের বাটনটি
                            চাপুন। "camscanner" মোবাইল এপ ব্যাবহার করে আপনার
                            সম্পুর্ণ খাতার পেইজ এক এক করে স্ক্যান করবেন, অতঃপর
                            খাতাটি পিডিএফ হিসেবে সেইভ করবেন । সেই পিডিএফটি
                            আপনারা এখানে আপলোড করতে পারেন।
                          </marquee>
                          <a href="https://play.google.com/store/apps/details?id=com.intsig.camscanner">
                            <span className="p-[1px] bg-white text-slate-800 cursor-pointer rounded-md">
                              Download Now{" "}
                            </span>
                          </a>
                        </div>
                      </div>
                    );
                  }
                  return null;
                })}
            </div>
          </>
        )}
      </div>
    );
  } else {
    return <Loader />;
  }
}

export default UploadExamStudent;
