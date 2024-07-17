"use client";

import { useSelector } from "react-redux";
import { useRef } from "react";
import "./hifz.css";
import Datetime from "react-datetime";
import "react-datetime/css/react-datetime.css";

import { useState, useEffect } from "react";
import Loader from "@/customComponents/loader/Loader";
import mytoast from "@/components/toast/toast";
import { updateData as updateClass } from "@/apiservices/classapiservices";
import { useRouter } from "next/navigation";

function UploadExam() {
  const [classes, setClasses] = useState();
  const [tableClasses, setTableClasses] = useState();
  const [showBtn, setShowBtn] = useState(true);
  const [books, setBooks] = useState();
  const [examQuestion, setExamQuestion] = useState();
  const router = useRouter();

  const fileInputRef = useRef();
  const [mainData, setMainData] = useState({
    examName: "",
    examStartedDate: "",
    batchNo: "",
    classID: "",
    examQuestionViewLink: "",
    examQuestionDownloadLink: "",
  });

  const data = useSelector((state) => state.isAdmin.value);

  const classesData = useSelector((state) => state.classes.classes);
  const booksData = useSelector((state) => state.books.books);

  const examName = [
    {
      name: "Weekly_Exam",
      startedDate: "",
    },
    {
      name: "Semester_Final_Exam",
      startedDate: "",
    },
  ];

  useEffect(() => {
    async function getData() {
      if (classesData.length > 0) {
        let desiredClasses = classesData
          .filter((item) => item.activeStatus == "active")
          .filter((item) => {
            return item.teacher.TID == data.data.userDetails.userName;
          });

        setClasses(JSON.parse(JSON.stringify(desiredClasses)));
        setTableClasses(JSON.parse(JSON.stringify(desiredClasses)));
      }
      if (booksData.length > 0) {
        setBooks(JSON.parse(JSON.stringify(booksData)));
      }
    }
    getData();
  }, [classesData, booksData]);

  function uniqueArray(mainArray) {
    let modifiedArray = new Set(mainArray);
    let uniqueArray = Array.from(modifiedArray);
    return uniqueArray;
  }

  function examChangeHandler(e) {
    e.preventDefault();
    setMainData((prev) => ({
      ...prev,
      examName: e.target.value,
    }));
    if (e.target.value == "Semester_Final_Exam") {
      setMainData((prev) => ({
        ...prev,
        examStartedDate: "",
      }));
    } else {
      setMainData((prev) => ({
        ...prev,
        examStartedDate: "",
      }));
    }
  }

  function datePickerHandler(date) {
    const formattedDate = date.format("YYYY-MM-DDTHH:mm:ssZ");

    setMainData((prev) => ({
      ...prev,
      examStartedDate: formattedDate,
    }));
  }

  function batchChangeHandler(e) {
    e.preventDefault();
    setMainData((prev) => ({
      ...prev,
      batchNo: e.target.value,
    }));
    if (e.target.value) {
      setTableClasses((prev) =>
        prev.filter((item) => item.batchNo == e.target.value)
      );
    } else {
      setTableClasses(classes);
    }
  }

  function findBooks(bookID) {
    if (books) {
      return books.find((item) => {
        return item.bookID == bookID;
      });
    }
  }

  function classChangeHandler(e) {
    e.preventDefault();
    setMainData((prev) => ({
      ...prev,
      classID: e.target.value,
    }));

    const examQuestionObj = classes.find(
      (item) => item._id == e.target.value
    ).examQuestion;
    setExamQuestion(examQuestionObj);

    if (e.target.value) {
      setTableClasses((prev) =>
        prev.filter((item) => item._id == e.target.value)
      );
    } else {
      setTableClasses(classes);
    }
  }

  async function submitFileHandler(e) {
    setShowBtn(false);
    e.preventDefault();
    if (
      mainData.examName &&
      mainData.classID &&
      mainData.batchNo &&
      mainData.examStartedDate &&
      fileInputRef.current.files[0]
    ) {
      const formData = new FormData();
      formData.append("file", fileInputRef.current.files[0]);

      try {
        const response = await fetch(
          `${process.env.NEXT_PUBLIC_URL}/apis/v1/pdf`,
          {
            method: "POST",
            body: formData,
          }
        );

        if (response.ok) {
          const result = await response.json();

          if (result.data.id) {
            mytoast.success("File Uploaded Successfully");
            setShowBtn(true);
            let examQuestionArray = [];
            if (
              (examQuestion.length == 1 &&
                examQuestion[examQuestion.length - 1] == "") ||
              examQuestion.length == 0
            ) {
              examQuestionArray.push({
                examQuestion: result.data.id,
                examType: mainData.examName,
                startedDate: mainData.examStartedDate,
              });
              setExamQuestion(examQuestionArray);
            } else {
              let array = [];
              examQuestion.forEach((item) => {
                array.push(item);
              });
              array.push({
                examQuestion: result.data.id,
                examType: mainData.examName,
                startedDate: mainData.examStartedDate,
              });
              examQuestionArray = array;
              setExamQuestion(examQuestionArray);
            }

            const res = await updateClass({
              examQuestion: examQuestionArray,
              idValue: mainData.classID,
            });

            if (res.status == "Alhamdulillah") {
              setTableClasses((prev) => {
                return prev.map((item) => {
                  if (item._id === mainData.classID) {
                    return {
                      ...item,
                      examQuestion: [
                        ...item.examQuestion, // Spread the existing examQuestion array of the item
                        {
                          examQuestion: result.data.id,
                          examType: mainData.examName,
                          startedDate: mainData.examStartedDate,
                        },
                      ],
                    };
                  } else {
                    return item;
                  }
                });
              });
              setClasses((prev) => {
                return prev.map((item) => {
                  if (item._id === mainData.classID) {
                    return {
                      ...item,
                      examQuestion: [
                        ...item.examQuestion,
                        {
                          examQuestion: result.data.id,
                          examType: mainData.examName,
                          startedDate: mainData.examStartedDate,
                        },
                      ],
                    };
                  } else {
                    return item;
                  }
                });
              });

              mytoast.success("Class Record has been updated");
            }
          }
        } else {
          mytoast.danger("File Uploading Failed. Try Again");
        }
      } catch (err) {
        console.error("Error:", err);
      }
    } else {
      mytoast.danger("Some Field is Empty");
      setShowBtn(true);
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

  function resetHandler() {
    setTableClasses(classes);
    setMainData({
      examName: "",
      examStartedDate: "",
      batchNo: "",
      classID: "",
      examQuestionViewLink: "",
      examQuestionDownloadLink: "",
    });
  }

  if (classesData.length > 0 && booksData.length > 0 && tableClasses) {
    return (
      <div>
        <h1 className="text-center mt-5 mb-10">Upload Exam</h1>

        <div className="w-[95%] md:w-[70%] mx-auto grid grid-cols-1 md:grid-cols-5 gap-4 md:gap-10 mb-10">
          <select
            onChange={examChangeHandler}
            className="p-4 text-slate-800 rounded-xl bg-white shadow-md"
            value={mainData.examName}
          >
            <option value="" className="">
              Select Exam
            </option>

            {examName.map((item) => (
              <option value={item.name} className="w-full p-4 text-slate-800">
                {item.name}
              </option>
            ))}
          </select>

          {mainData.examName != "" && (
            <Datetime
              onChange={datePickerHandler}
              className="p-4 text-slate-800 rounded-xl bg-white shadow-md"
              inputProps={{
                placeholder: "Select a date",

                style: {
                  width: "100%",
                  boxSizing: "border-box",
                },
              }}
            />
          )}

          <select
            onChange={batchChangeHandler}
            className="p-4 text-slate-800 rounded-xl bg-white shadow-md"
            value={mainData.batchNo}
          >
            <option value="" className="">
              Select Batch
            </option>
            {classes &&
              uniqueArray(classes.map((item) => item.batchNo)).map((item) => (
                <option value={item} className="">
                  {item}
                </option>
              ))}
          </select>

          {mainData.batchNo && (
            <select
              onChange={classChangeHandler}
              className="p-4 text-slate-800 rounded-xl bg-white shadow-md"
              value={mainData.classID}
            >
              <option value="" className="w-full">
                Select Book
              </option>

              {classes &&
                classes
                  .filter((item) => item.batchNo == mainData.batchNo)
                  .map((item) => (
                    <option value={item._id} className="w-full">
                      {findBooks(item.bookID).bookName.bn}-{item.classID}
                    </option>
                  ))}
            </select>
          )}
          {mainData.examName &&
            mainData.classID &&
            mainData.batchNo &&
            mainData.examStartedDate && (
              <div className="text-slate-800 rounded-xl bg-white shadow-md">
                <input
                  ref={fileInputRef}
                  className="p-4 w-full"
                  type="file"
                  accept="application/pdf"
                />
              </div>
            )}
        </div>

        {mainData.examName &&
          mainData.classID &&
          mainData.batchNo &&
          mainData.examStartedDate &&
          showBtn && (
            <div className="w-[95%] md:w-[40%] mx-auto grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-10 mb-10">
              <button
                onClick={submitFileHandler}
                className="p-4 text-slate-100 rounded-xl bg-green-600 hover:bg-sky-600 shadow-md cursor-pointer"
              >
                Upload Question
              </button>
              <button
                onClick={resetHandler}
                className="p-4 text-slate-100 rounded-xl bg-red-500 hover:bg-sky-600 shadow-md cursor-pointer"
              >
                Reset Everything
              </button>
            </div>
          )}

        {mainData.examName &&
          mainData.classID &&
          mainData.batchNo &&
          mainData.examStartedDate &&
          !showBtn && (
            <div className="w-[95%] md:w-[40%] mx-auto grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-10 mb-10">
              <button className="p-4 text-slate-100 rounded-xl bg-green-600 hover:bg-sky-600 shadow-md">
                <span className="animate__animated animate__infinite animate__flash">
                  Loading...
                </span>
              </button>
              <button
                onClick={resetHandler}
                className="p-4 text-slate-100 rounded-xl bg-red-500 hover:bg-sky-600 shadow-md cursor-pointer"
              >
                Reset Everything
              </button>
            </div>
          )}

        <div className="w-[95%] mx-auto grid grid-cols-1 gap-4 md:gap-10 mb-10">
          <div className="hifz_table">
            <div className="table_container mt-10">
              <table>
                <thead className="sticky top-0">
                  <tr>
                    <th>ক্ল্যাসের আইডি</th>
                    <th>কিতাবের নাম</th>
                    <th>ক্লাসের নাম</th>
                    <th>জামাতের নাম</th>
                    <th>সেমিস্টারের নাম</th>

                    <th>ব্যাচ নং</th>
                    <th>পরীক্ষার প্রশ্ন</th>
                  </tr>
                </thead>
                <tbody>
                  {tableClasses &&
                    tableClasses.map((item, i) => (
                      <tr key={i}>
                        <td>{item.classID}</td>
                        <td>{findBooks(item.bookID).bookName.bn}</td>
                        <td>{item.courseID}</td>
                        <td>{item.jamatID}</td>
                        <td>{item.semesterID}</td>

                        <td>{item.batchNo}</td>
                        <td>
                          {item.examQuestion.map(
                            (item2, i2) =>
                              item2.examQuestion && (
                                <div
                                  className="border-[1px] border-slate-300 p-2 mb-2"
                                  key={i2}
                                >
                                  <p>{item2.examType}</p>
                                  <p>{item2.startedDate}</p>
                                  <div className="flex gap-5 justify-between">
                                    <div
                                      onClick={() =>
                                        downloadPDF(item2.examQuestion)
                                      }
                                      className="w-[50%] bg-blue-400 text-white rounded-md cursor-pointer p-2"
                                    >
                                      {item2.examQuestion ? "Download" : ""}
                                    </div>
                                    <div
                                      onClick={() =>
                                        openPDF(item2.examQuestion)
                                      }
                                      className="w-[50%] bg-amber-300 text-slate-800 rounded-md cursor-pointer p-2"
                                    >
                                      {item2.examQuestion ? "Open" : ""}
                                    </div>
                                  </div>
                                </div>
                              )
                          )}
                        </td>
                      </tr>
                    ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>

        <h1 className="text-center mt-5">Download Answer Sheet</h1>
      </div>
    );
  } else {
    return <Loader />;
  }
}

export default UploadExam;
