"use client";
import { useSelector } from "react-redux";

import AttendancePageCustomInner from "./attendanceInner";
import Loader from "@/customComponents/loader/Loader";

function AttendancePageCustom() {
  const classes = useSelector((state) => state.classes.classes);
  const books = useSelector((state) => state.books.books);

  const courseState = useSelector((state) => state.courseState.value);

  const data = useSelector((state) => state.isAdmin.value);

  if (courseState && classes.length > 0 && books.length > 0) {
    return (
      <AttendancePageCustomInner
        classesUp={classes}
        booksUp={books}
        courseState={courseState}
        data={data}
      />
    );
  } else {
    return <Loader />;
  }
}

export default AttendancePageCustom;
