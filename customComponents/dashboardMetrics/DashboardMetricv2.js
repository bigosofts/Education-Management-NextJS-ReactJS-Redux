"use client";

import Loader from "../loader/Loader";
import { useState, useEffect } from "react";
import {
  updateData as updateStudents,
  selectDataTwo as selectStudents,
} from "@/apiservices/studentapiservices";

import { useSelector, useDispatch } from "react-redux";
import ProgressBarAdmin from "@/components/dashboardPage/progressBarAdmin";
import { fetchBooks } from "@/app/redux/features/books/booksSlice";
import { fetchCourses } from "@/app/redux/features/courses/coursesSlice";
import { fetchTeachers } from "@/app/redux/features/teachers/teachersSlice";
import { fetchDjs } from "@/app/redux/features/djs/djsSlice";
import { fetchClasses } from "@/app/redux/features/classes/classesSlice";
import { fetchStudents } from "@/app/redux/features/students/studentsSlice";

function DashboardMetricsV2() {
  const dispatch = useDispatch();

  const [percentage, setPercentage] = useState(0);

  const [showComponent, setShowComponent] = useState();

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

  function leadData() {
    dispatch(fetchBooks());
    dispatch(fetchCourses());
    dispatch(fetchTeachers());
    dispatch(fetchDjs("all"));
    dispatch(
      fetchClasses({
        batch: "all",
        userName: "",
      })
    );
    dispatch(fetchStudents("all"));
  }

  // async function updateStd() {
  //   const stud = await selectStudents(null, null);

  //   if (stud.status == "Alhamdulillah") {
  //     for (let item of stud.data) {
  //       const res = await updateStudents(
  //         item.userName,
  //         item.firstName.en,
  //         item.firstName.bn,
  //         item.lastName.en,
  //         item.lastName.bn,
  //         item.nidNumber,
  //         item.birthRegNumber,
  //         item.fatherName.en,
  //         item.fatherName.bn,
  //         item.emailAddress,
  //         undefined,
  //         item.mobileNumber,
  //         item.occupation,
  //         item.studentCourseCode,
  //         item.studentJamatCode,
  //         item.gender,
  //         item.dateOfBirth,
  //         item.countryName,
  //         item.fullPresentAddress,
  //         item.fullPermanentAddress,
  //         item.admissionSession,
  //         item.admissionDate,
  //         item.studentMotive,
  //         item.details,
  //         item.paymentStatus,
  //         item.userRole,
  //         item.extracurricular,
  //         item.activeStatus,
  //         item._id,
  //         item.studentDepartment,
  //         item.studentSemester,
  //         item.batchCount,
  //         item.fundStatus,
  //         {
  //           status: "regular",
  //           date: item.admissionSession,
  //         }
  //       );

  //       if (res.status == "Alhamdulillah") {
  //         console.log(`${item.userName} Done`);
  //       } else {
  //         console.log(res);
  //       }

  //       // Introduce a delay before processing the next item
  //       await new Promise((resolve) => setTimeout(resolve, 100)); // 200ms delay
  //     }
  //   }
  // }

  return (
    <>
      <div
        className={`w-full flex justify-center items-center ${
          showComponent ? "hidden" : ""
        }`}
      >
        <div
          onClick={() => {
            setShowComponent(true);
            leadData();
          }}
          className="w-[300px] py-2 px-5 bg-slate-900 text-white text-center text-4xl rounded-xl cursor-pointer hover:bg-blue-900"
        >
          {" "}
          Start Loading Data{" "}
        </div>

        {/* <div
          onClick={() => {
            updateStd();
          }}
          className="w-[300px] py-2 px-5 bg-slate-900 text-white text-center text-4xl rounded-xl cursor-pointer hover:bg-blue-900"
        >
          {" "}
          Start Update Students
        </div> */}
        
      </div>
      {showComponent && (
        <div
          style={{ padding: "100px 50px" }}
          className="bg-[#eaeaea] w-full text-slate-900"
        >
          <ProgressBarAdmin percentage={percentage} status={status} />
        </div>
      )}
    </>
  );
}

export default DashboardMetricsV2;