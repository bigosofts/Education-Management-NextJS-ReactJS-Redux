"use client";

import { useState, useEffect } from "react";

import { useSelector, useDispatch } from "react-redux";
import ProgressBarAdmin from "@/components/dashboardPage/progressBarAdmin";
import { fetchBooks } from "@/app/redux/features/books/booksSlice";
import { fetchCourses } from "@/app/redux/features/courses/coursesSlice";
import { fetchTeachers } from "@/app/redux/features/teachers/teachersSlice";
import { fetchDjs } from "@/app/redux/features/djs/djsSlice";
import { fetchClasses } from "@/app/redux/features/classes/classesSlice";
import { fetchStudents } from "@/app/redux/features/students/studentsSlice";
import CardWithPie from "./cardWithpie";
import DetailData from "./detailData";
import {
  sts1,
  sts2,
  sts3,
  sts4,
  sts5,
  sts6,
  sts7,
  sts8,
} from "@/helper/Metrics";

function DashboardMetricsV2() {
  const dispatch = useDispatch();
  const [backdrop, setBackdrop] = useState(false);

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

  let [totalStudent, setTotalStudents] = useState({
    totalStudent: "",
    totalAnnualActiveStudent: "",
    totalAnnualPendingStudent: "",
    totalAnnualDueStudent: "",
    totalAnnualIrregularStudent: "",
    totalMonthlyActiveStudent: "",
    totalMonthlyPendingStudent: "",
    totalMonthlyDueStudent: "",
  });

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

    if (students.length > 0 && payments.length > 0) {
      setTotalStudents((prev) => ({
        ...prev,
        totalStudent: sts1(students),
        totalAnnualActiveStudent: sts2(students),
        totalAnnualPendingStudent: sts3(students),
        totalAnnualDueStudent: sts4(students),
        totalAnnualIrregularStudent: sts5(students),
        totalMonthlyActiveStudent: sts6(students, payments),
        totalMonthlyPendingStudent: sts7(students, payments),
        totalMonthlyDueStudent: sts8(students, payments),
      }));
    }
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
    dispatch(
      fetchClasses({
        batch: "all",
        userName: "",
      })
    );
    dispatch(fetchBooks());
    dispatch(fetchCourses());
    dispatch(fetchTeachers());
    dispatch(fetchDjs("all"));

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
          className="bg-[#eaeaea] w-full text-slate-900 h-screen overflow-y-scroll"
        >
          <ProgressBarAdmin percentage={percentage} status={status} />
          {targetPercentage == 100 && (
            <div
              style={{ marginTop: "100px" }}
              className="grid grid-cols-1 md:grid-cols-5 gap-5 md:gap-5"
            >
              <CardWithPie
                colors={"#f57c00"}
                percentage={100}
                texthead={"Total Accounts"}
                textbody={totalStudent.totalStudent?.total}
                parameter={"%"}
                specific={totalStudent.totalStudent?.data}
              />
              <CardWithPie
                colors={"#f2c94c"}
                percentage={Math.ceil(
                  (Number(totalStudent.totalAnnualActiveStudent?.total) /
                    Number(totalStudent.totalStudent?.total)) *
                    100
                )}
                texthead={"Total Annual Active"}
                textbody={totalStudent.totalAnnualActiveStudent?.total}
                parameter={"%"}
                specific={totalStudent.totalAnnualActiveStudent?.data}
              />

              <CardWithPie
                colors={"#65708d"}
                percentage={Math.ceil(
                  (Number(totalStudent.totalAnnualPendingStudent?.total) /
                    Number(totalStudent.totalStudent?.total)) *
                    100
                )}
                texthead={"Total Annual Pending"}
                textbody={totalStudent.totalAnnualPendingStudent?.total}
                parameter={"%"}
                specific={totalStudent.totalAnnualPendingStudent?.data}
              />
              <CardWithPie
                colors={"#2f80ed"}
                percentage={Math.ceil(
                  (Number(totalStudent.totalAnnualDueStudent?.total) /
                    Number(totalStudent.totalStudent?.total)) *
                    100
                )}
                texthead={"Total Annual Due"}
                textbody={totalStudent.totalAnnualDueStudent?.total}
                parameter={"%"}
                specific={totalStudent.totalAnnualDueStudent?.data}
              />
              <CardWithPie
                colors={"#27ae60"}
                percentage={Math.ceil(
                  (Number(totalStudent.totalAnnualIrregularStudent?.total) /
                    Number(totalStudent.totalStudent?.total)) *
                    100
                )}
                texthead={"Total Annual Irregular"}
                textbody={totalStudent.totalAnnualIrregularStudent?.total}
                parameter={"%"}
                specific={totalStudent.totalAnnualIrregularStudent?.data}
              />

              <CardWithPie
                colors={"#2d9cdb"}
                percentage={Math.ceil(
                  (Number(totalStudent.totalMonthlyActiveStudent?.total) /
                    (Number(totalStudent.totalAnnualPendingStudent?.total) +
                      Number(totalStudent.totalAnnualActiveStudent?.total))) *
                    100
                )}
                texthead={"Total Monthly Active"}
                textbody={totalStudent.totalMonthlyActiveStudent?.total}
                parameter={"%"}
                special={totalStudent.totalMonthlyActiveStudent?.data}
              />

              <CardWithPie
                colors={"#27ae60"}
                percentage={Math.ceil(
                  (Number(totalStudent.totalMonthlyPendingStudent?.total) /
                    (Number(totalStudent.totalAnnualPendingStudent?.total) +
                      Number(totalStudent.totalAnnualActiveStudent?.total))) *
                    100
                )}
                texthead={"Total Monthly Pending"}
                textbody={totalStudent.totalMonthlyPendingStudent?.total}
                parameter={"%"}
                special={totalStudent.totalMonthlyPendingStudent?.data}
              />
              <CardWithPie
                colors={"#f57c00"}
                percentage={Math.ceil(
                  (Number(totalStudent.totalMonthlyDueStudent?.total) /
                    (Number(totalStudent.totalAnnualPendingStudent?.total) +
                      Number(totalStudent.totalAnnualActiveStudent?.total))) *
                    100
                )}
                texthead={"Total Monthly Due"}
                textbody={totalStudent.totalMonthlyDueStudent?.total}
                parameter={"%"}
                special={totalStudent.totalMonthlyDueStudent?.data}
              />

              <CardWithPie
                colors={"#f2c94c"}
                percentage={75}
                texthead={"Total Annual Active"}
                textbody={"1550"}
                parameter={"%"}
              />
              <CardWithPie
                colors={"#2d9cdb"}
                percentage={5}
                texthead={"Total Monthly Pending"}
                textbody={"20"}
                parameter={"%"}
              />

              <CardWithPie
                colors={"#65708d"}
                percentage={50}
                texthead={"Total Annual Pending"}
                textbody={"20"}
                parameter={"%"}
              />
              <CardWithPie
                colors={"#2f80ed"}
                percentage={25}
                texthead={"Total Annual Due"}
                textbody={"700"}
                parameter={"%"}
              />
            </div>
          )}

          {backdrop && <DetailData />}
        </div>
      )}
    </>
  );
}

export default DashboardMetricsV2;
