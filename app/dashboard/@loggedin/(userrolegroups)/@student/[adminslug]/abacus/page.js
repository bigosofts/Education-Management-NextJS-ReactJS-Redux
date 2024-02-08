"use client";

import { useSelector } from "react-redux";

import CourseCurriculam from "@/customComponents/allCustomComponents/courseCurriculam/CourseCurriculam";

function AbacusPage(props) {
  const data = useSelector((state) => state.isAdmin.value);
  if (data) {
    if (data.data.userDetails.studentCourseCode.length == 1) {
      return <div>Please Enroll a course first to avail this options</div>;
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
