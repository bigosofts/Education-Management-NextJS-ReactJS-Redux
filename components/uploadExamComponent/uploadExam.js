"use client";
import "./hifz.css";

import Loader from "@/customComponents/loader/Loader";
import { useSelector } from "react-redux";
import { useRouter } from "next/navigation";

function UploadExamStudent() {
  const router = useRouter();
  const data = useSelector((state) => state.isAdmin.value);
  const courseState = useSelector((state) => state.courseState.value);
  const classes = useSelector((state) => state.classes.classes);
  const books = useSelector((state) => state.books.books);

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
      return "text-blue-700 p-2 rounded-md text-2xl";
    } else if (dayDifference >= 0 && dayDifference <= 1) {
      return "text-red-700 animate__animated animate__infinite animate__flash p-2 rounded-md text-2xl";
    } else {
      return "bg-slate-300 p-2";
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

  if (courseState && data && classes && books) {
    // return (
    //   <div>
    //     <h1 className="text-center mt-10">Exam Questions</h1>

    //     {courseState.alemalema && (
    //       <>
    //         <h2 className="p-4 mt-5 text-center border-[1px] border-slate-300 bg-green-800 text-white text-xl">
    //           আলেম আলেমা ক্লাসের পরীক্ষাসমূহ
    //         </h2>
    //         <div className="w-[95%] mx-auto grid grid-cols-1 md:grid-cols-3 gap-5 md:gap-4 mt-10">
    //           {classes
    //             .filter(
    //               (item) =>
    //                 item.batchNo == data.data.userDetails.batchCount &&
    //                 item.courseID == "alemalema" &&
    //                 item.jamatID == courseState.jamat &&
    //                 item.semesterID == courseState.semester
    //             )
    //             .map((item, i) => {
    //               if (
    //                 item.examQuestion.length > 0 &&
    //                 item.examQuestion[0] != ""
    //               ) {
    //                 return (
    //                   <div
    //                     key={i}
    //                     className="shadow-md p-5 border-[1px] border-slate-200 bg-white"
    //                   >
    //                     <div className="w-[75%] md:w-[50%] mx-auto border-[1px] border-slate-300 p-4 rounded-lg">
    //                       <p> classID: {item.classID} </p>
    //                       <p>
    //                         {" "}
    //                         bookName: {findBooks(item.bookID).bookName.bn}{" "}
    //                       </p>
    //                     </div>

    //                     <div className="hifz_table">
    //                       <div className="table_container mt-10">
    //                         <table>
    //                           <thead className="sticky top-0">
    //                             <tr>
    //                               <th>পরীক্ষার নাম</th>
    //                               <th>পরীক্ষার সময়</th>
    //                               <th>পরীক্ষার প্রশ্ন</th>
    //                             </tr>
    //                           </thead>
    //                           <tbody>
    //                             {item.examQuestion.map((item, i2) => (
    //                               <tr key={i2}>
    //                                 <td>{item.examType}</td>
    //                                 <td>
    //                                   {niceDate(item.startedDate, "Asia/Dhaka")}{" "}
    //                                   <br />
    //                                   <span
    //                                     style={{
    //                                       animationDuration: "4s",
    //                                       marginTop: "5px",
    //                                       display: "block",
    //                                     }}
    //                                     className={colorDecision(
    //                                       item.startedDate
    //                                     )}
    //                                   >
    //                                     {niceTime(
    //                                       item.startedDate,
    //                                       "Asia/Dhaka"
    //                                     )}
    //                                   </span>
    //                                 </td>
    //                                 <td>
    //                                   {" "}
    //                                   {dayDecision(item.startedDate) ? (
    //                                     <div className="flex justify-between gap-4">
    //                                       <button
    //                                         onClick={openPDF(item.examQuestion)}
    //                                         className="cursor-pointer p-1 bg-blue-300 text-white w-full"
    //                                       >
    //                                         Open
    //                                       </button>
    //                                       <button
    //                                         onClick={downloadPDF(
    //                                           item.examQuestion
    //                                         )}
    //                                         className="cursor-pointer p-1 bg-red-500 text-white w-full"
    //                                       >
    //                                         Download
    //                                       </button>
    //                                     </div>
    //                                   ) : (
    //                                     <div className="p-1 bg-blue-700 text-white w-full rounded-lg">
    //                                       upcoming
    //                                     </div>
    //                                   )}
    //                                 </td>
    //                               </tr>
    //                             ))}
    //                           </tbody>
    //                         </table>
    //                       </div>
    //                     </div>
    //                   </div>
    //                 );
    //               }
    //               return null;
    //             })}
    //         </div>
    //       </>
    //     )}

    //     {courseState.schoolalemalema && (
    //       <h2 className="text-center mt-5">School Alem Alema student</h2>
    //     )}

    //     {courseState.prealemalema && (
    //       <h2 className="text-center mt-5">Pre Alem Alema student</h2>
    //     )}

    //     {courseState.abacus_student && (
    //       <h2 className="text-center mt-5">Abacus student</h2>
    //     )}

    //     {courseState.shishumaktab && (
    //       <h2 className="text-center mt-5">Shishumaktab student</h2>
    //     )}

    //     {courseState.farzeayinnajera && (
    //       <h2 className="text-center mt-5">Farzeayinnajera student</h2>
    //     )}

    //     {courseState.ramadanquranulkarim && (
    //       <h2 className="text-center mt-5">Ramadan Quranul Karim student</h2>
    //     )}
    //   </div>
    // );
    return <div>Coming soon</div>;
  } else {
    return <Loader />;
  }
}

export default UploadExamStudent;
