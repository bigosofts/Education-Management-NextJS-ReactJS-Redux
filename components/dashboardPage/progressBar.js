"use client";
import { useEffect, useState } from "react";

function ProgressBar({ percentage }) {
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    let timeoutId;
    if (percentage === 100) {
      timeoutId = setTimeout(() => {
        setVisible(false);
      }, 2000); // 10 seconds delay
    } else {
      setVisible(true); // Reset visibility if percentage is not 100
    }

    return () => clearTimeout(timeoutId); // Clear timeout if component unmounts or percentage changes
  }, [percentage]);

  if (!visible) {
    return null;
  }

  return (
    <>
      <p className="text-xm text-slate-800 text-center">
        Loading your data ...
      </p>
      <div className="w-full bg-white rounded-full dark:bg-gray-700 mb-10">
        <div
          className="bg-blue-600 text-xl font-xl text-blue-100 text-center p-2 leading-none rounded-full"
          style={{ width: percentage + "%", transition: "2s ease-out" }}
        >
          {percentage}%
        </div>
      </div>
    </>
  );
}

export default ProgressBar;
