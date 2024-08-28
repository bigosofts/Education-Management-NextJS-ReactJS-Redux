"use client";

import Loader from "../loader/Loader";
import { useState, useEffect } from "react";

import { useSelector } from "react-redux";
import ProgressBarAdmin from "@/components/dashboardPage/progressBarAdmin";

function DashboardMetricsV2() {
  const [percentage, setPercentage] = useState(0);

  const [status, setStatus] = useState();

  const [targetPercentage, setTargetPercentage] = useState(0);

  const data = useSelector((state) => state.isAdmin.value);

  const classes = useSelector((state) => state.classes.classes);

  const students = useSelector((state) => state.students.students);

  const teachers = useSelector((state) => state.teachers.teachers);

  const books = useSelector((state) => state.books.books);

  const courses = useSelector((state) => state.courses.courses);

  const semesters = useSelector((state) => state.djs.semesters);

  const jamats = useSelector((state) => state.djs.jamats);

  const departments = useSelector((state) => state.djs.departments);

  const payments = useSelector((state) => state.djs.payments);

  useEffect(() => {
    let completedCount = 0;
    let array = [];

    if (data.data) {
      completedCount++;
      array.push("data");
    }

    if (classes.length > 0) {
      completedCount++;
      array.push("classes");
    }
    if (students.length > 0) {
      completedCount++;
      array.push("students");
    }
    if (teachers.length > 0) {
      completedCount++;
      array.push("teachers");
    }

    if (books.length > 0) {
      completedCount++;
      array.push("books");
    }

    if (courses.length > 0) {
      completedCount++;
      array.push("courses");
    }

    if (semesters.length > 0) {
      completedCount++;
      array.push("semesters");
    }

    if (jamats.length > 0) {
      completedCount++;
      array.push("jamats");
    }

    if (departments.length > 0) {
      completedCount++;
      array.push("departments");
    }

    if (payments.length > 0) {
      completedCount++;
      array.push("payments");
    }

    const newTargetPercentage = completedCount * 10;

    setStatus(array);

    setTargetPercentage(newTargetPercentage);
  }, [
    semesters,
    jamats,
    departments,
    payments,
    courses,
    books,
    teachers,
    students,
    classes,
    data,
  ]);

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

      const intervalId = setInterval(increment, 10); // Adjust the interval duration for smoother or faster increments

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

      const intervalId = setInterval(decrement, 10); // Adjust the interval duration for smoother or faster increments

      return () => clearInterval(intervalId);
    }
  }, [targetPercentage, percentage]);

  return (
    <div
      style={{ padding: "100px 50px" }}
      className="bg-[#eaeaea] w-full text-slate-900"
    >
      <ProgressBarAdmin percentage={percentage} status={status} />
      <ul>
        <li class="item1">hello</li>
        <li class="item2">hello</li>
        <li class="item3">hello</li>
        <li class="item4">hello</li>
        <li class="item5">hello</li>
      </ul>
    </div>
  );
}

export default DashboardMetricsV2;
