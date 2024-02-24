"use client";
import { useSearchParams } from "next/navigation";
import { selectAllData } from "@/apiservices/studentapiservices";
import { useState, useEffect } from "react";


function ConfirmationLayout({ ok, no }) {
  const [studentCourseCode, setStudentCourseCode] = useState();
  const searchParams = useSearchParams();

  const enroll = searchParams.get("username");

  useEffect(() => {
    async function getData() {
      if (enroll) {
        const res = await selectAllData({ userName: enroll }, null);
        setStudentCourseCode(res.data[0]);
      }
    }
    getData();
  }, []);
  if (enroll) {
    if (studentCourseCode) {
      if (
        studentCourseCode.studentCourseCode.length >= 1 &&
        studentCourseCode.studentCourseCode[
          studentCourseCode.studentCourseCode.length - 1
        ].code &&
        studentCourseCode.studentCourseCode[
          studentCourseCode.studentCourseCode.length - 1
        ].status == "inactive"
      ) {
        return ok;
      } else {
        return no;
      }
    }
  } else {
    return no;
  }
}

export default ConfirmationLayout;
