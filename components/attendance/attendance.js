"use client";
import { useSelector } from "react-redux";
import { useState, useEffect } from "react";

import AttendancePageCustomInner from "./attendanceInner";
import ProgressBar from "../dashboardPage/progressBar";

function AttendancePageCustom() {
  const classes = useSelector((state) => state.classes.classes);
  const books = useSelector((state) => state.books.books);

  const [percentage, setPercentage] = useState(0);
  const [targetPercentage, setTargetPercentage] = useState(0);

  useEffect(() => {
    let completedCount = 0;

    if (classes.length > 0) {
      completedCount++;
    }

    if (books.length > 0) {
      completedCount++;
    }

    const newTargetPercentage = completedCount * 50;
    setTargetPercentage(newTargetPercentage);
  }, [classes, books]);

  useEffect(() => {
    if (percentage < targetPercentage) {
      const increment = () => {
        setPercentage((prev) => {
          if (prev < targetPercentage) {
            return prev + 1;
          }
          clearInterval(intervalId);
          return prev;
        });
      };

      const intervalId = setInterval(increment, 20); // Adjust the interval duration for smoother or faster increments

      return () => clearInterval(intervalId);
    } else if (percentage > targetPercentage) {
      const decrement = () => {
        setPercentage((prev) => {
          if (prev > targetPercentage) {
            return prev - 1;
          }
          clearInterval(intervalId);
          return prev;
        });
      };

      const intervalId = setInterval(decrement, 20); // Adjust the interval duration for smoother or faster increments

      return () => clearInterval(intervalId);
    }
  }, [targetPercentage, percentage]);

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
    return <ProgressBar percentage={percentage} />;
  }
}

export default AttendancePageCustom;
