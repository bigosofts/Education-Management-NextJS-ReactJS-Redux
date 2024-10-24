"use client";
import { useEffect, useRef, useState } from "react";
import Chart from "chart.js/auto";
import { selectDataTwo } from "@/apiservices/abacusinstitutionapiservices";

const BarChartAbacusTeacherPreserve = ({ getBarChartData, abacus_teacher }) => {
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
    let dataFinal;
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
          abacusInstitution.length > 0 && abacusInstitution;

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
          dataFinal = {
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
                  item.batchCount === item2.batch
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
          abacusInstitution.length > 0 && abacusInstitution;

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
      onClick: (event, elements) => {
        if (elements.length > 0) {
          // Get the index of the clicked bar
          const elementIndex = elements[0].index;
          const datasetIndex = elements[0].datasetIndex;

          // Get label and value of the clicked bar
          const label = `${data.labels[elementIndex]} গ্রুপের ${
            elements[0].datasetIndex == 0 ? "পুরুষ" : "মহিলা"
          } শিক্ষার্থীদের নামের তালিকা`;

          let valueOfStudents;

          if (dataFinal.male && dataFinal.female) {
            if (datasetIndex == 0) {
              valueOfStudents = dataFinal.male[elementIndex];
            } else if (datasetIndex == 1) {
              valueOfStudents = dataFinal.female[elementIndex];
            }
          }

          getBarChartData(valueOfStudents, label, abacus_teacher);
        }
      },
    };

    // Get the canvas element
    const ctx = document.getElementById("barChart4").getContext("2d");

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

  return (
    <>
      <h1 style={{ margin: "50px 0px" }}> Abacus Teacher Current Students: </h1>
      <div style={{ width: "100%", height: "auto" }}>
        <canvas id="barChart4"></canvas>
      </div>
    </>
  );

  return;
};

export default BarChartAbacusTeacherPreserve;
