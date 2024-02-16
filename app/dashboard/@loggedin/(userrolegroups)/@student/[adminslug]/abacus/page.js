"use client";

import { useSelector } from "react-redux";

import CourseCurriculam from "@/customComponents/allCustomComponents/courseCurriculam/CourseCurriculam";
import EnrollPlease from "@/components/dashboardPage/enrollPlease";
import WaitingApproval from "@/components/dashboardPage/WaitingApproval";

function AbacusPage(props) {
  const data = useSelector((state) => state.isAdmin.value);

  if (data) {
    if (data.data.userDetails.studentCourseCode.length < 1) {
      return <EnrollPlease />;
    } else if (
      data.data.userDetails.studentCourseCode[
        data.data.userDetails.studentCourseCode.length - 1
      ].status == "inactive"
    ) {
      return <WaitingApproval />;
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
