"use client";

import { useSelector } from "react-redux";

import CourseCurriculam from "@/customComponents/allCustomComponents/courseCurriculam/CourseCurriculam";
import EnrollPlease from "@/components/dashboardPage/enrollPlease";

function AbacusPage(props) {
  const data = useSelector((state) => state.isAdmin.value);
  if (data) {
    if (data.data.userDetails.studentCourseCode.length < 1) {
      return <EnrollPlease/>
    } else {
      return (
        <div
          style={{
            width: "100%",
            height: "auto",
            overflowY: "scroll",
          }}
        >
          <CourseCurriculam />
        </div>
      );
    }
  }
}

export default AbacusPage;
