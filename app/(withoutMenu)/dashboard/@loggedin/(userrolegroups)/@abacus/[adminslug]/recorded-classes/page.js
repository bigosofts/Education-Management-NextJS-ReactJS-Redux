"use client";
import CourseCurriculamTeacherTwo from "@/customComponents/allCustomComponents/courseCurriculam/CourseCurriculamTeacherTwo";
import { useSelector } from "react-redux";

function RecordedClasses() {
  const data = useSelector((state) => state.isAdmin.value);
  if (data.data.userDetails.activeStatus == "active") {
    return <CourseCurriculamTeacherTwo />;
  } else {
    return (
      <div className="w-full">
        <div className="w-full md:w-[50%] mx-auto p-4 border-0 md:border-2 border-slate-300 rounded-3xl mt-10">
          <div className="rounded-3xl w-full p-4 text-2xl md:text-3xl bg-[#013030] text-white transition duration-500 ease-out mb-4">
            আপনার একাউন্টটি এপ্রুভালের জন্য পেন্ডিং আছে। এপ্রুভ হতে ২৪ ঘন্টার
            বেশী দেরী হলে হোয়াটস এপে (+880 1674 040502)।
          </div>
        </div>
      </div>
    );
  }
}

export default RecordedClasses;
