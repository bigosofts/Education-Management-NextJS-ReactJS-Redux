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

import BarChartQuranulKarim from "./quranulKarimChart";
import BarChartQuranulKarimPreserve from "./quranulKarimChartPreserve";

import BarChartAlemAlema from "./AlemalemaBarchart";
import BarChartAlemAlemaPreserve from "./AlemalemaBarchartPreserve";

import BarChartPreAlemAlema from "./PreAlemalemaBarchart";
import BarChartPreAlemAlemaPreserve from "./PreAlemalemaBarchartPreserve";

import BarChartSchoolAlemalema from "./SchoolAlemalemaBarchart";
import BarChartSchoolAlemalemaPreserve from "./SchoolAlemalemaBarchartPreserve";

import BarChartHifjulQuran from "./HifjulQuranChart";
import BarChartHifjulQuranPreserve from "./HifjulQuranChartPreserve";

import BarChartShishuMaktab from "./ShishumaktabChart";
import BarChartShishuMaktabPreserve from "./ShishumaktabChartPreserve";

import BarChartNajera from "./najeraChart";
import BarChartNajeraPreserve from "./najeraChartPreserve";

import BarChartAbacusStudent from "./AbacusStudentChart";
import BarChartAbacusStudentPreserve from "./AbacusStudentChartPreserve";

import BarChartAbacusTeacher from "./AbacusTeacherChart";
import BarChartAbacusTeacherPreserve from "./AbacusTeacherChartPreserve";

import "./css/style.css";
import {
  sts1,
  sts2,
  sts3,
  sts4,
  sts5,
  sts6,
  sts7,
  sts8,
  sts9,
  sts10,
  sts11,
  sts18,
} from "@/helper/Metrics";

function DashboardMetricsV2() {
  const dispatch = useDispatch();
  const [backdrop, setBackdrop] = useState(false);
  const [currentData, setCurrentData] = useState();

  const [currentTitle, setCurrentTitle] = useState();

  const [percentage, setPercentage] = useState(0);

  const [showComponent, setShowComponent] = useState(false);

  const [abacus_teacher, setabacus_teacher] = useState();

  const [status, setStatus] = useState();

  const [targetPercentage, setTargetPercentage] = useState(0);
  function backdropFalse() {
    setBackdrop(false);
  }

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
    totalConcurrentAnnualDueStudent: "",
    totalAnnualIrregularStudent: "",
    totalMonthlyActiveStudent: "",
    totalMonthlyPendingStudent: "",
    totalMonthlyDueStudent: "",

    totalNafalSadkaStudent: "",
    totalZakatStudent: "",
    totalGeneralStudent: "",
  });

  function getBarChartData(data, title, abacus_teacher) {
    setCurrentData(data);
    setCurrentTitle(title);
    setBackdrop(true);
    abacus_teacher
      ? setabacus_teacher(abacus_teacher)
      : setabacus_teacher(false);
  }

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
        totalAnnualDueStudent: sts4(students, payments),
        totalConcurrentAnnualDueStudent: sts18(students, payments),
        totalAnnualIrregularStudent: sts5(students),
        totalMonthlyActiveStudent: sts6(students, payments),
        totalMonthlyPendingStudent: sts7(students, payments),
        totalMonthlyDueStudent: sts8(students, payments),

        totalNafalSadkaStudent: sts9(students, payments),
        totalZakatStudent: sts10(students, payments),
        totalGeneralStudent: sts11(students, payments),
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
      </div>
      {showComponent && (
        <div
          style={{ padding: "100px 50px" }}
          className="bg-[#eaeaea] w-full text-slate-900 h-screen overflow-y-scroll"
        >
          <ProgressBarAdmin percentage={percentage} status={status} />

          {targetPercentage == 100 && (
            <>
              <h1 style={{ marginBottom: "100px" }}> Overview Status: </h1>

              <div
                style={{ marginBottom: "100px" }}
                className="grid grid-cols-1 md:grid-cols-5 gap-5 md:gap-5"
              >
                <div
                  onClick={() => {
                    setCurrentData(totalStudent.totalStudent?.data);
                    setBackdrop(true);
                    setCurrentTitle("সকল রেজিস্টার্ড শিক্ষার্থীদের তালিকা");
                  }}
                >
                  <CardWithPie
                    colors={"#f57c00"}
                    percentage={100}
                    texthead={"Total Accounts"}
                    textbody={totalStudent.totalStudent?.total}
                    parameter={"%"}
                  />
                </div>

                <div
                  onClick={() => {
                    setCurrentData(totalStudent.totalAnnualActiveStudent?.data);
                    setBackdrop(true);
                    setCurrentTitle("সকল বাৎসরিক সক্রিয় শিক্ষার্থীদের তালিকা");
                  }}
                >
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
                  />
                </div>

                <div
                  onClick={() => {
                    setCurrentData(
                      totalStudent.totalAnnualPendingStudent?.data
                    );
                    setBackdrop(true);
                    setCurrentTitle(
                      "সকল বাৎসরিক অপেক্ষমাণ শিক্ষার্থীদের তালিকা"
                    );
                  }}
                >
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
                  />
                </div>

                <div
                  onClick={() => {
                    setCurrentData(
                      totalStudent.totalConcurrentAnnualDueStudent?.data
                    );
                    setBackdrop(true);
                    setCurrentTitle(
                      "সকল বাৎসরিক চলমান বকেয়া শিক্ষার্থীদের তালিকা"
                    );
                  }}
                >
                  <CardWithPie
                    colors={"#f2c94c"}
                    percentage={Math.ceil(
                      (Number(
                        totalStudent.totalConcurrentAnnualDueStudent?.total
                      ) /
                        Number(totalStudent.totalStudent?.total)) *
                        100
                    )}
                    texthead={"Total Concurrent Due"}
                    textbody={
                      totalStudent.totalConcurrentAnnualDueStudent?.total
                    }
                    parameter={"%"}
                  />
                </div>

                <div
                  onClick={() => {
                    setCurrentData(totalStudent.totalAnnualDueStudent?.data);
                    setBackdrop(true);
                    setCurrentTitle("সকল বাৎসরিক বকেয়া শিক্ষার্থীদের তালিকা");
                  }}
                >
                  {" "}
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
                  />
                </div>

                <div
                  onClick={() => {
                    setCurrentData(
                      totalStudent.totalAnnualIrregularStudent?.data
                    );
                    setBackdrop(true);
                    setCurrentTitle(
                      "সকল বাৎসরিক নিষ্ক্রিয় শিক্ষার্থীদের তালিকা"
                    );
                  }}
                >
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
                  />
                </div>

                <div
                  onClick={() => {
                    setCurrentData(
                      totalStudent.totalMonthlyActiveStudent?.data
                    );
                    setBackdrop(true);
                    setCurrentTitle("সকল মাসিক সক্রিয় শিক্ষার্থীদের তালিকা");
                  }}
                >
                  {" "}
                  <CardWithPie
                    colors={"#2d9cdb"}
                    percentage={Math.ceil(
                      (Number(totalStudent.totalMonthlyActiveStudent?.total) /
                        (Number(totalStudent.totalAnnualPendingStudent?.total) +
                          Number(
                            totalStudent.totalConcurrentAnnualDueStudent?.total
                          ) +
                          Number(
                            totalStudent.totalAnnualActiveStudent?.total
                          ))) *
                        100
                    )}
                    texthead={"Total Monthly Active"}
                    textbody={totalStudent.totalMonthlyActiveStudent?.total}
                    parameter={"%"}
                  />
                </div>

                <div
                  onClick={() => {
                    setCurrentData(
                      totalStudent.totalMonthlyPendingStudent?.data
                    );
                    setBackdrop(true);
                    setCurrentTitle("সকল মাসিক অপেক্ষমাণ শিক্ষার্থীদের তালিকা");
                  }}
                >
                  {" "}
                  <CardWithPie
                    colors={"#27ae60"}
                    percentage={Math.ceil(
                      (Number(totalStudent.totalMonthlyPendingStudent?.total) /
                        (Number(totalStudent.totalAnnualPendingStudent?.total) +
                          Number(
                            totalStudent.totalConcurrentAnnualDueStudent?.total
                          ) +
                          Number(
                            totalStudent.totalAnnualActiveStudent?.total
                          ))) *
                        100
                    )}
                    texthead={"Total Monthly Pending"}
                    textbody={totalStudent.totalMonthlyPendingStudent?.total}
                    parameter={"%"}
                  />
                </div>

                <div
                  onClick={() => {
                    setCurrentData(totalStudent.totalMonthlyDueStudent?.data);
                    setBackdrop(true);
                    setCurrentTitle("সকল মাসিক বকেয়া শিক্ষার্থীদের তালিকা");
                  }}
                >
                  {" "}
                  <CardWithPie
                    colors={"#f57c00"}
                    percentage={Math.ceil(
                      (Number(totalStudent.totalMonthlyDueStudent?.total) /
                        (Number(totalStudent.totalAnnualPendingStudent?.total) +
                          Number(
                            totalStudent.totalConcurrentAnnualDueStudent?.total
                          ) +
                          Number(
                            totalStudent.totalAnnualActiveStudent?.total
                          ))) *
                        100
                    )}
                    texthead={"Total Monthly Due"}
                    textbody={totalStudent.totalMonthlyDueStudent?.total}
                    parameter={"%"}
                  />
                </div>

                <div
                  onClick={() => {
                    setCurrentData(totalStudent.totalNafalSadkaStudent?.data);
                    setBackdrop(true);
                    setCurrentTitle("সকল নফল সদকা শিক্ষার্থীদের তালিকা");
                  }}
                >
                  {" "}
                  <CardWithPie
                    colors={"#f2c94c"}
                    percentage={Math.ceil(
                      (Number(totalStudent.totalNafalSadkaStudent?.total) /
                        (Number(totalStudent.totalAnnualPendingStudent?.total) +
                          Number(
                            totalStudent.totalConcurrentAnnualDueStudent?.total
                          ) +
                          Number(
                            totalStudent.totalAnnualActiveStudent?.total
                          ))) *
                        100
                    )}
                    texthead={"Total Nafal Sadka Student"}
                    textbody={totalStudent.totalNafalSadkaStudent?.total}
                    parameter={"%"}
                  />
                </div>

                <div
                  onClick={() => {
                    setCurrentData(totalStudent.totalZakatStudent?.data);
                    setBackdrop(true);
                    setCurrentTitle("সকল যাকাত ফান্ডের শিক্ষার্থীদের তালিকা");
                  }}
                >
                  {" "}
                  <CardWithPie
                    colors={"#2d9cdb"}
                    percentage={Math.ceil(
                      (Number(totalStudent.totalZakatStudent?.total) /
                        (Number(totalStudent.totalAnnualPendingStudent?.total) +
                          Number(
                            totalStudent.totalConcurrentAnnualDueStudent?.total
                          ) +
                          Number(
                            totalStudent.totalAnnualActiveStudent?.total
                          ))) *
                        100
                    )}
                    texthead={"Total Zakat Student"}
                    textbody={totalStudent.totalZakatStudent?.total}
                    parameter={"%"}
                  />
                </div>

                <div
                  onClick={() => {
                    setCurrentData(totalStudent.totalGeneralStudent?.data);
                    setBackdrop(true);
                    setCurrentTitle("সকল জেনারেল ফান্ডের শিক্ষার্থীদের তালিকা");
                  }}
                >
                  {" "}
                  <CardWithPie
                    colors={"#65708d"}
                    percentage={Math.ceil(
                      (Number(totalStudent.totalGeneralStudent?.total) /
                        (Number(totalStudent.totalAnnualPendingStudent?.total) +
                          Number(
                            totalStudent.totalConcurrentAnnualDueStudent?.total
                          ) +
                          Number(
                            totalStudent.totalAnnualActiveStudent?.total
                          ))) *
                        100
                    )}
                    texthead={"Total General Fund Student"}
                    textbody={totalStudent.totalGeneralStudent?.total}
                    parameter={"%"}
                  />
                </div>
              </div>

              <div class="dsh-card-row">
                <div class="dsh-col-chart">
                  <div class="card chart">
                    <BarChartAlemAlema getBarChartData={getBarChartData} />
                  </div>
                </div>

                <div class="dsh-col-chart">
                  <div class="card chart">
                    <BarChartAlemAlemaPreserve
                      getBarChartData={getBarChartData}
                    />
                  </div>
                </div>

                <div class="dsh-col-chart">
                  <div class="card chart">
                    <BarChartPreAlemAlema getBarChartData={getBarChartData} />
                  </div>
                </div>

                <div class="dsh-col-chart">
                  <div class="card chart">
                    <BarChartPreAlemAlemaPreserve
                      getBarChartData={getBarChartData}
                    />
                  </div>
                </div>

                <div class="dsh-col-chart">
                  <div class="card chart">
                    <BarChartSchoolAlemalema
                      getBarChartData={getBarChartData}
                    />
                  </div>
                </div>

                <div class="dsh-col-chart">
                  <div class="card chart">
                    <BarChartSchoolAlemalemaPreserve
                      getBarChartData={getBarChartData}
                    />
                  </div>
                </div>

                <div class="dsh-col-chart">
                  <div class="card chart">
                    <BarChartHifjulQuran getBarChartData={getBarChartData} />
                  </div>
                </div>

                <div class="dsh-col-chart">
                  <div class="card chart">
                    <BarChartHifjulQuranPreserve
                      getBarChartData={getBarChartData}
                    />
                  </div>
                </div>

                <div class="dsh-col-chart">
                  <div class="card chart">
                    <BarChartShishuMaktab getBarChartData={getBarChartData} />
                  </div>
                </div>

                <div class="dsh-col-chart">
                  <div class="card chart">
                    <BarChartShishuMaktabPreserve
                      getBarChartData={getBarChartData}
                    />
                  </div>
                </div>

                <div class="dsh-col-chart">
                  <div class="card chart">
                    <BarChartNajera getBarChartData={getBarChartData} />
                  </div>
                </div>

                <div class="dsh-col-chart">
                  <div class="card chart">
                    <BarChartNajeraPreserve getBarChartData={getBarChartData} />
                  </div>
                </div>

                <div class="dsh-col-chart">
                  <div class="card chart">
                    <BarChartAbacusStudent getBarChartData={getBarChartData} />
                  </div>
                </div>

                <div class="dsh-col-chart">
                  <div class="card chart">
                    <BarChartAbacusStudentPreserve
                      getBarChartData={getBarChartData}
                    />
                  </div>
                </div>

                <div class="dsh-col-chart">
                  <div class="card chart">
                    <BarChartAbacusTeacher
                      abacus_teacher="abacus_teacher"
                      getBarChartData={getBarChartData}
                    />
                  </div>
                </div>

                <div class="dsh-col-chart">
                  <div class="card chart">
                    <BarChartAbacusTeacherPreserve
                      abacus_teacher="abacus_teacher"
                      getBarChartData={getBarChartData}
                    />
                  </div>
                </div>

                <div class="dsh-col-chart">
                  <div class="card chart">
                    <BarChartQuranulKarim getBarChartData={getBarChartData} />
                  </div>
                </div>

                <div class="dsh-col-chart">
                  <div class="card chart">
                    <BarChartQuranulKarimPreserve
                      getBarChartData={getBarChartData}
                    />
                  </div>
                </div>
              </div>
            </>
          )}

          {backdrop && currentData && (
            <DetailData
              data={currentData}
              allData={totalStudent}
              title={currentTitle}
              backdropFalse={backdropFalse}
              abacus_teacher={abacus_teacher}
            />
          )}
        </div>
      )}
    </>
  );
}

export default DashboardMetricsV2;
