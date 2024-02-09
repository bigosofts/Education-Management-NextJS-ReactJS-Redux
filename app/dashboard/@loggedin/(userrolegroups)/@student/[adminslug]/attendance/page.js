"use client";

import { useSelector } from "react-redux";
import EnrollPlease from "@/components/dashboardPage/enrollPlease";

function AttendancePage() {
  const data = useSelector((state) => state.isAdmin.value);
  if (data) {
    if (data.data.userDetails.studentCourseCode.length < 1) {
      return <EnrollPlease />;
    } else {
      return <div>Attendance Page</div>;
    }
  }
}

export default AttendancePage;
