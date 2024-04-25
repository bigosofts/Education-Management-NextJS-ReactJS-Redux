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

  function handleClick(classItem, userData, bookID) {
    console.log(classItem, userData, bookID);
  }

  function handleChange(classID, value) {
    setDatas((prev) => ({ ...prev, [classID]: value }));
  }

  return (
    <div className="w-full text-center md:w-9/12 mt-12 md:mt-[80px] rounded-3xl mx-auto text-xl md:text-2xl transition duration-500 ease-out mb-4 px-2">
      প্রতিদিনের{" "}
      {lastClass.code == "alemalema"
        ? `${lastClass.code} ক্লাসের, ${
            data.data.userDetails.studentJamatCode[lastClass.index].code
          } ${data.data.userDetails.studentSemester[lastClass.index].code}`
        : ""}{" "}
      এর উপস্থিতি রেকর্ড করুন
      {classData &&
        findClass("alemalema", "jamat1", "semester01").map((item, i) => (
          <div
            key={i}
            className="bg-white mt-10 flex justify-between hover:scale-105 hover:shadow-xl transition duration-200 ease-out rounded-l-2xl rounded-r-2xl"
          >
            <div className="py-5 text-white bg-red-500 w-1/4 md:w-1/5 text-sm md:text-2xl rounded-l-2xl">
              {books && findBooks(item.bookID).bookName.bn}
            </div>
            <div className="text-white w-2/4 md:w-3/5 text-sm md:text-2xl">
              <input
                onChange={(e) => {
                  e.preventDefault();
                  let value = e.target.value;
                  handleChange(item.classID, value);
                }}
                type="text"
                className="py-5 md:py-0 w-full h-full px-2 text-slate-800"
                placeholder="ক্লাসে কতটুকু পড়ানো হয়েছে লিখুন"
              ></input>
            </div>
            <div
              onClick={() =>
                handleClick(item, data.data.userDetails, item.bookID)
              }
              className="py-5 text-white bg-blue-500 hover:cursor-pointer w-1/4 md:w-1/5 text-sm md:text-2xl rounded-r-2xl"
            >
              হাজিরা দিন{" "}
              <FaArrowAltCircleRight className="text-2xl inline-block mr-2" />
            </div>
          </div>
        ))}
    </div>
  );
}

export default AttendancePageCustom;
