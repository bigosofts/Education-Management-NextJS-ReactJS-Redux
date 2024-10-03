"use client";
import { useEffect, useRef, useState } from "react";
import Chart from "chart.js/auto";
import { useSelector } from "react-redux";

const BarChartAlemAlemaPreserve = () => {
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
          return item.courseID === "alemalema";
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
          const perfectClasses = filteredClasses.filter((item) => {
            return (
              item.semesterID == item2.semesterID && item.batchNo == item2.batch
            );
          });

          // for (const item4 of perfectClasses[0].students) {
          //   let singleStd =
          //     students.length > 0 &&
          //     students.find((std) => {
          //       std.userName == item4.SID;
          //       console.log("test");
          //     });

          //   if (singleStd) {
          //     console.log(singleStd);
          //     if (singleStd.gender == "male") {
          //       dataFinal.male.push(filteredStudentsMale);
          //       data[0].data.push(filteredStudentsMale.length);
          //     } else if (singleStd.gender == "female") {
          //       dataFinal.female.push(filteredStudentsFemale);
          //       data[1].data.push(filteredStudentsFemale.length);
          //     } else {
          //       dataFinal.male.push(filteredStudentsMale);
          //       data[0].data.push(filteredStudentsMale.length);
          //     }
          //   }
          // }
        });

        setAll(dataFinal);
      }

      return data;
    }

    function getLabel() {
      const filteredClasses =
        classes.length > 0 &&
        classes.filter((item) => {
          return item.courseID === "alemalema";
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
    const ctx = document.getElementById("barChart6").getContext("2d");

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
    console.log("all");
    console.log(all);
  }

  return (
    <>
      <h1 style={{ margin: "50px 0px" }}> Alem Alema Preserve Students: </h1>
      <div style={{ width: "100%", height: "auto" }}>
        <canvas id="barChart6"></canvas>
      </div>
    </>
  );

  return;
};

export default BarChartAlemAlemaPreserve;
