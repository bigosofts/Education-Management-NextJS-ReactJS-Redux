"use client";
import { useEffect, useRef, useState } from "react";
import Chart from "chart.js/auto";
import { useSelector } from "react-redux";
import { selectDataTwo } from "@/apiservices/abacusinstitutionapiservices";

const BarChartAbacusTeacher = () => {
  const classes = useSelector((state) => state.classes.classes);
  const students = useSelector((state) => state.students.students);

  const [all, setAll] = useState({});

  const [abacusInstitution, setAbacusInstitution] = useState([]);

  useEffect(() => {
    async function getRes() {
      const res = await selectDataTwo(null, null);
      if (res.status == "Alhamdulillah") {
        setAbacusInstitution(res.data);
      }
    }

    getRes();
  }, []);

  // Use a ref to keep track of the chart instance
  const chartRef = useRef(null);

  useEffect(() => {
    // Data for the bar chart with two datasets
    function getData() {
      if (abacusInstitution.length > 0) {
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
          abacusInstitution.length > 0 &&
          abacusInstitution.filter((item) => {
            return item.activeStatus === "active";
          });

        const mappedClasses =
          filteredClasses?.length > 0 &&
          filteredClasses.map((item) => {
            return item.batchCount;
          });

        const uniqueClasses = [...new Set(mappedClasses)];

        const savedData = uniqueClasses.map((item) => {
          return {
            batch: item,
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
              abacusInstitution?.length > 0 &&
              abacusInstitution.filter((item) => {
                // Check conditions based on the number of active semesters
                if (
                  abacusInstitution.length > 0 &&
                  item.batchCount === item2.batch &&
                  item.activeStatus === "active"
                ) {
                  return true;
                }
                return false; // Explicitly return false for clarity
              });

            dataFinal.male.push(filteredStudentsMale);

            data[0].data.push(filteredStudentsMale.length);
          });

          setAll(dataFinal);
        }

        return data;
      }
    }

    function getLabel() {
      if (abacusInstitution.length > 0) {
        const filteredClasses =
          abacusInstitution.length > 0 &&
          abacusInstitution.filter((item) => {
            return item.activeStatus === "active";
          });

        const mappedClasses =
          filteredClasses?.length > 0 &&
          filteredClasses.map((item) => {
            return item.batchCount;
          });

        const uniqueClasses = [...new Set(mappedClasses)];

        const uniqueClassesName = uniqueClasses.map((item) => {
          let part2 = item;

          return `${part2}`;
        });

        return uniqueClassesName;
      }
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
    const ctx = document.getElementById("barChart3").getContext("2d");

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
  }, [abacusInstitution]);

  if (all) {
    console.log(all);
  }

  return (
    <>
      <h1 style={{ margin: "50px 0px" }}> Abacus Teacher Current Students: </h1>
      <div style={{ width: "100%", height: "auto" }}>
        <canvas id="barChart3"></canvas>
      </div>
    </>
  );

  return;
};

export default BarChartAbacusTeacher;
