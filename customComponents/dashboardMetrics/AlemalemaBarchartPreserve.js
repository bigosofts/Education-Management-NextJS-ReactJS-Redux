"use client";
import { useEffect, useRef } from "react";
import Chart from "chart.js/auto";
import { useSelector } from "react-redux";

const BarChartAlemAlemaPreserve = () => {
  const classes = useSelector((state) => state.classes.classes);
  const students = useSelector((state) => state.students.students);

  // Use a ref to keep track of the chart instance
  const chartRef = useRef(null);

  useEffect(() => {
    // Data for the bar chart with two datasets
    const data = {
      labels: ["Batch-20240420", "Batch-20240605", "Batch-20240803"],
      datasets: [
        {
          label: "Male",
          data: [65, 59, 110],
          backgroundColor: "rgba(0, 188, 212, 0.8)", // Bar color
        },
        {
          label: "Female",
          data: [28, 48, 40],
          backgroundColor: "rgba(233, 30, 99, 0.8)", // Bar color for second dataset
        },
      ],
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
          display: false, // Disable legend if needed
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
