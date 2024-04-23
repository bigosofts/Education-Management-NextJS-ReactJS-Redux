"use client";

import { useSelector } from "react-redux";
import { selectDataTwo, updateData } from "@/apiservices/studentapiservices";
import mytoast from "@/components/toast/toast";

function AttendancePageCustom() {
  const data = useSelector((state) => state.isAdmin.value);

  let activeClasses = data.data.userDetails.studentCourseCode.filter((item) => {
    if (item.status == "active") {
      return item.code;
    }
  });

  function uniqueArray(old) {
    const modifiedArray = old.map((item) => item.code);
    const uniqueNamesSet = new Set(modifiedArray);
    const uniqueNamesArray = Array.from(uniqueNamesSet);
    return uniqueNamesArray;
  }

  let activeClassArray = uniqueArray(activeClasses);

 

  return (
    <div className="w-full text-center md:w-9/12 mt-12 md:mt-[80px] rounded-3xl mx-auto text-4xl md:text-2x transition duration-500 ease-out mb-4">
      প্রতিদিনের উপস্থিতি রেকর্ড করুন
    </div>
  );
}

export default AttendancePageCustom;
