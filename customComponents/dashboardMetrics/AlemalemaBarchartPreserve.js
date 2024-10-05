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

        // Step 1: Preprocess `perfectClasses` into a hash map
        const classMap = new Map();

        // Create keys for each class based on `semesterID` and `batchNo`
        filteredClasses.forEach((item) => {
          const key = `${item.semesterID}-${item.batchNo}`;
          classMap.set(key, item.students); // Store the list of students in this class
        });

        // Step 2: Create a hash map for quick lookup of students by userName
        const studentMap = new Map();
        students.forEach((std) => studentMap.set(std.userName, std));

        // Step 3: Iterate over savedData and do a constant time lookup in both hash maps
        savedData.forEach((item2, i) => {
          const classKey = `${item2.semesterID}-${item2.batch}`;
          const classStudents = classMap.get(classKey); // O(1) lookup for class

          if (classStudents) {
            let male = [];
            let female = [];

            classStudents.forEach((item4) => {
              const singleStd = studentMap.get(item4.SID); // O(1) lookup for student

              if (singleStd) {
                if (singleStd.gender === "male") {
                  male.push(singleStd);
                  // Push male student data
                } else if (singleStd.gender === "female") {
                  female.push(singleStd);
                  dataFinal.female.push(singleStd); // Push female student data
                } else {
                  male.push(singleStd);
                  dataFinal.male.push(singleStd); // Handle any other case as male
                }
              }
            });

            dataFinal.male.push(male);
            dataFinal.female.push(female);

            data[0].data.push(male.length);
            data[1].data.push(female.length);
          }
        });

        // Set final data
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
