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
    <div className="p-1">
      <div className="w-full bg-white rounded-full dark:bg-gray-700 mb-1">
        <div
          className="bg-blue-600 text-sm font-sm text-blue-100 text-center p-0.5 leading-none rounded-full"
          style={{ width: percentage + "%", transition: "2s ease-out" }}
        >
          {percentage}%
        </div>
      </div>
      <p className="text-xm text-slate-800 text-center">
        Loading your data ...
      </p>
    </div>
  );
}

export default ProgressBar;
