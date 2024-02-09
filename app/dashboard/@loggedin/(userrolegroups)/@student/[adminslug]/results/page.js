"use client";

import { useSelector } from "react-redux";
import EnrollPlease from "@/components/dashboardPage/enrollPlease";

function ResultPage() {
  const data = useSelector((state) => state.isAdmin.value);
  if (data) {
    if (data.data.userDetails.studentCourseCode.length < 1) {
      return <EnrollPlease />;
    } else {
      return <div>Result Page</div>;
    }
  }
}

export default ResultPage;
