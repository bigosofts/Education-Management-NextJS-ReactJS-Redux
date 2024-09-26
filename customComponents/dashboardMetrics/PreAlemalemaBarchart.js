"use client";
import { useEffect, useRef, useState } from "react";
import Chart from "chart.js/auto";
import { useSelector } from "react-redux";

const BarChartPreAlemAlema = () => {
  const classes = useSelector((state) => state.classes.classes);
  const students = useSelector((state) => state.students.students);
  const semesters = useSelector((state) => state.djs.semesters);
  const [all, setAll] = useState({});

  // Use a ref to keep track of the chart instance
  const chartRef = useRef(null);

  useEffect(() => {
    // Data for the bar chart with two datasets
    function getData() {
      let data = [
        {
          label: "Male",
          data: [],
          backgroundColor: "rgba(0, 188, 212, 0.8)", // Bar color
        },
        {
          label: "Female",
          data: [],
          backgroundColor: "rgba(233, 30, 99, 0.8)", // Bar color for second dataset
        },
      ];

      const filteredClasses =
        classes.length > 0 &&
        classes.filter((item) => {
          return (
            item.activeStatus === "active" && item.courseID === "prealemalema"
          );
        });

      const mappedClasses =
        filteredClasses.length > 0 &&
        filteredClasses.map((item) => {
          return item.semesterID + ":" + item.batchNo;
        });

      const uniqueClasses = [...new Set(mappedClasses)];

      const savedData = uniqueClasses.map((item) => {
        return {
          semesterID: item.split(":")[0],
          batch: item.split(":")[1],
        };
      });

      if (savedData.length > 0) {
        let dataFinal = {
          parameter: [...savedData],
          male: [],
          female: [],
        };

        savedData.forEach((item2, i) => {
          let filteredStudentsMale =
            students.length > 0 &&
            students.filter((item) => {
              // Filter active semesters

              let activeSemesters = item.studentSemester.filter(
                (sem) => /pre/i.test(sem.code) && sem.status === "active"
              );

              // Check conditions based on the number of active semesters
              if (
                activeSemesters.length > 0 &&
                item.batchCount === item2.batch &&
                item.gender != "female" &&
                item.accountStatus.status === "regular"
              ) {
                // Check the last semester's code for validity
                if (
                  activeSemesters[activeSemesters.length - 1].code ==
                  item2.semesterID
                ) {
                  return true;
                }
              }
              return false; // Explicitly return false for clarity
            });

          dataFinal.male.push(filteredStudentsMale);

          data[0].data.push(filteredStudentsMale.length);

          let filteredStudentsFemale =
            students.length > 0 &&
            students.filter((item) => {
              // Filter active semesters
              let activeSemesters = item.studentSemester.filter(
                (sem) => /pre/i.test(sem.code) && sem.status === "active"
              );

              // Check conditions based on the number of active semesters
              if (
                activeSemesters.length > 0 &&
                item.batchCount === item2.batch &&
                item.gender == "female" &&
                item.accountStatus.status === "regular"
              ) {
                // Check the last semester's code for validity
                if (
                  activeSemesters[activeSemesters.length - 1].code ==
                  item2.semesterID
                ) {
                  return true;
                }
              }
              return false; // Explicitly return false for clarity
            });

          dataFinal.female.push(filteredStudentsFemale);

          data[1].data.push(filteredStudentsFemale.length);
        });

        setAll(dataFinal);
      } else {
      }

      return data;
    }

    function getLabel() {
      const filteredClasses =
        classes.length > 0 &&
        classes.filter((item) => {
          return (
            item.activeStatus === "active" && item.courseID === "prealemalema"
          );
        });
      const mappedClasses =
        filteredClasses.length > 0 &&
        filteredClasses.map((item) => {
          return item.semesterID + ":" + item.batchNo;
        });

      const uniqueClasses = [...new Set(mappedClasses)];

      const uniqueClassesName = uniqueClasses.map((item) => {
        let part1 = item.split(":")[0];
        let part2 = item.split(":")[1];

        let semesterName =
          semesters.length > 0 &&
          semesters.find((item) => {
            return item.semesterID == part1;
          });

        return `${semesterName.semesterName}:${part2}`;
      });

      return uniqueClassesName;
    }

    const data = {
      labels: getLabel(),
      datasets: getData(),
    };

    // Configuration options
    const options = {
      responsive: true,

      scales: {
        x: {
          beginAtZero: true,
        },
        y: {
          beginAtZero: true,
        },
      },
      plugins: {
        legend: {
          display: true, // Disable legend if needed
        },
      },
    };

    // Get the canvas element
    const ctx = document.getElementById("barChart11").getContext("2d");

    // Check if a chart instance already exists and destroy it if it does
    if (chartRef.current) {
      chartRef.current.destroy();
    }

    // Create the bar chart and store it in the ref
    chartRef.current = new Chart(ctx, {
      type: "bar",
      data: data,
      options: options,
    });

    // Cleanup function to destroy the chart on component unmount
    return () => {
      if (chartRef.current) {
        chartRef.current.destroy();
      }
    };
  }, []);

  if (all) {
    console.log(all);
  }

  return (
    <>
      <h1 style={{ margin: "50px 0px" }}> Pre Alem Alema Current Students: </h1>
      <div style={{ width: "100%", height: "auto" }}>
        <canvas id="barChart11"></canvas>
      </div>
    </>
  );

  return;
};

export default BarChartPreAlemAlema;
