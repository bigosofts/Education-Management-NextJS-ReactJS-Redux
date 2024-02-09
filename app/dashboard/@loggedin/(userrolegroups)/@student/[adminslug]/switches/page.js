"use client";

import { useSelector } from "react-redux";
import EnrollPlease from "@/components/dashboardPage/enrollPlease";

function Switch() {
  const data = useSelector((state) => state.isAdmin.value);
  if (data) {
    if (data.data.userDetails.studentCourseCode.length < 1) {
      return <EnrollPlease />;
    } else {
      return <div>Switch Page</div>;
    }
  }
}

export default Switch;
