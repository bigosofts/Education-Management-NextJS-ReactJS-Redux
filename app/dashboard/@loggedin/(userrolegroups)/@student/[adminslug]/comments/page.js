"use client";

import { useSelector } from "react-redux";
import EnrollPlease from "@/components/dashboardPage/enrollPlease";

function CommentPage() {
  const data = useSelector((state) => state.isAdmin.value);
  if (data) {
    if (data.data.userDetails.studentCourseCode.length < 1) {
      return <EnrollPlease />;
    } else {
      return <div>Comment Page</div>;
    }
  }
}

export default CommentPage;
