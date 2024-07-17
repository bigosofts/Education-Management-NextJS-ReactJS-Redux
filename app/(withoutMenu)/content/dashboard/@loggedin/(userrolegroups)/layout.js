"use client";

import { useSelector } from "react-redux";

function layout({ admin, student, teacher, abacus }) {
  const data = useSelector((state) => state.isAdmin.value);

  if (data) {
    if (data.data.isAdmin == true) {
      return <>{admin}</>;
    } else if (data.data.userRole == "teacher") {
      return <>{teacher}</>;
    } else if (data.data.userRole == "student") {
      return <>{student}</>;
    } else if (data.data.userRole == "abacus_teacher") {
      return <>{abacus}</>;
    }
  }
}

export default layout;
