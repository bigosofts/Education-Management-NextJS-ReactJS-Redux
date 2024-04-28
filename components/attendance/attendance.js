"use client";
import { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import { selectDataTwo, updateData } from "@/apiservices/studentapiservices";
import {
  selectDataTwo as selectClasses,
  updateData as updateClass,
} from "@/apiservices/classapiservices";
import { selectDataTwo as selectBooks } from "@/apiservices/bookapiservices";

import mytoast from "@/components/toast/toast";
import { FaArrowAltCircleRight } from "react-icons/fa";

function AttendancePageCustom() {
  const [classData, setClassData] = useState();
  const [books, setBooks] = useState();
  const [datas, setDatas] = useState();

  useEffect(() => {
    async function getData() {
      const res = await selectClasses(null, null);
      if (res.status == "Alhamdulillah") {
        setClassData(res.data);
      }
      const res2 = await selectBooks(null, null);
      if (res2.status == "Alhamdulillah") {
        setBooks(res2.data);
      }
    }
    getData();
  }, []);

  const data = useSelector((state) => state.isAdmin.value);

  let activeClasses = data.data.userDetails.studentCourseCode.map((item, i) => {
    if (item.status == "active") {
      return { code: item.code, index: i, status: "active" };
    } else {
      return { code: item.code, index: i, status: "inactive" };
    }
  });

  let activeClassesFilter = activeClasses.filter((item) => {
    if (item.status == "active") {
      return item;
    }
  });

  function uniqueArray(old) {
    const uniqueNamesSet = new Set(old);
    const uniqueNamesArray = Array.from(uniqueNamesSet);
    return uniqueNamesArray;
  }

  let activeClassArray = uniqueArray(activeClassesFilter);

  let lastClass = activeClassArray[activeClassArray.length - 1];

  function findClass(courseID, jamatID, semesterID) {
    return classData.filter((item) => {
      if (
        courseID == "alemalema" &&
        item.courseID == courseID &&
        item.jamatID == jamatID &&
        item.semesterID == semesterID
      ) {
        return true;
      }
    });
  }

  function findBooks(bookID) {
    return books.find((item) => {
      return item.bookID == bookID;
    });
  }

  function handleClick() {
    if (data.data.userDetails.gender == "female") {
      if (typeof window !== "undefined") {
        window.location.href = `https://docs.google.com/spreadsheets/d/1SRLhqKbT-8Ozv00RBQumjxwwUiplqAfuKzcWzXiV8Dw/edit?usp=sharing`;
      }
    } else if (data.data.userDetails.gender == "male") {
      window.location.href = `https://docs.google.com/spreadsheets/d/15_Xc_MCLAvHb6GGyxVU7eGUtycSGvhvKq5TZgyijXIA/edit?usp=sharing`;
    }
  }

  function handleChange(classID, value) {
    setDatas((prev) => ({ ...prev, [classID]: value }));
  }

  return (
    <div className="w-full text-center md:w-9/12 mt-12 md:mt-[80px] rounded-3xl mx-auto text-xl md:text-3xl transition duration-500 ease-out mb-4 px-2">
      আপনি{" "}
      {lastClass.code == "alemalema"
        ? `${lastClass.code} ক্লাসের, ${
            data.data.userDetails.studentJamatCode[lastClass.index].code
          } ${data.data.userDetails.studentSemester[lastClass.index].code}`
        : ""}{" "}
      এর নিম্নোক্ত কিতাবাদি অধ্যয়ন করছেন। প্রতিদিন যে কিতাবের ক্লাস হয় সেই
      কিতাবের ক্লাসে আপনার উপস্থিতি রেকর্ড করুন।
      <br></br>
      <br></br>
      {classData &&
        findClass("alemalema", "jamat1", "semester01").map((item, i) => (
          <div key={i} className="mt-2 rounded-l-2xl rounded-r-2xl">
            <div className="py-2 text-white bg-red-500 w-2/3 md:w-1/3 mx-auto text-sm md:text-2xl rounded-l-2xl rounded-r-2xl">
              {books && findBooks(item.bookID).bookName.bn}
            </div>
          </div>
        ))}
      <div
        onClick={handleClick}
        className="mt-10 py-5 text-white bg-blue-500 hover:cursor-pointer text-sm md:text-2xl rounded-r-2xl rounded-l-2xl hover:scale-105 hover:shadow-xl transition duration-200 ease-out "
      >
        হাজিরা দিন{" "}
        <FaArrowAltCircleRight className="text-2xl inline-block mr-2" />
      </div>
    </div>
  );
}

export default AttendancePageCustom;
