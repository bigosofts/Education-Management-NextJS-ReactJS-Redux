"use client";
import { useEffect, useState } from "react";

function ProgressBar({ percentage, status }) {
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    let timeoutId;
    if (percentage === 100) {
      timeoutId = setTimeout(() => {
        setVisible(false);
      }, 100); // 1 seconds delay
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
          style={{ width: percentage + "%", transition: "0.1s ease-out" }}
        >
          {percentage}%
        </div>
      </div>
      <div className="text-xm text-slate-800 text-center grid grid-cols-4 gap-1 md:gap-4 w-full md:w-[600px] mx-auto mt-5">
        <div className="flex items-center justify-center">
          <input
            type="checkbox"
            id="library"
            className="custom-checkbox mr-2"
            checked={status?.some((item) => item == "library")}
          />
          <label className="text-[9px] md:text-lg" htmlFor="library">
            Library
          </label>
        </div>
        <div className="flex items-center justify-center">
          <input
            type="checkbox"
            id="attendance"
            className="custom-checkbox mr-2"
            checked={status?.some((item) => item == "attendance")}
          />
          <label className="text-[9px] md:text-lg" htmlFor="attendance">
            Attendance
          </label>
        </div>
        <div className="flex items-center justify-center">
          <input
            type="checkbox"
            id="notice"
            className="custom-checkbox mr-2"
            checked={status?.some((item) => item == "notice")}
          />
          <label className="text-[9px] md:text-lg" htmlFor="notice">
            Notice
          </label>
        </div>
        <div className="flex items-center justify-center">
          <input
            type="checkbox"
            id="payment"
            className="custom-checkbox mr-2"
            checked={status?.some((item) => item == "payment")}
          />
          <label className="text-[9px] md:text-lg" htmlFor="payment">
            Payment
          </label>
        </div>
      </div>

      <style jsx>{`
        .custom-checkbox {
          appearance: none;
          background-color: #fff;
          border: 2px solid #d1d5db;
          border-radius: 9999px;
          width: 0.7rem;
          height: 0.7rem;
          display: inline-block;
          position: relative;
          cursor: pointer;
        }
        .custom-checkbox:checked {
          background-color: #10b981;
          border-color: #10b981;
        }
        .custom-checkbox:checked::before {
          content: "";
          position: absolute;
          top: 50%;
          left: 50%;
          width: 0.3rem;
          height: 0.3rem;
          border-radius: 50%;
          background-color: #10b981;
          transform: translate(-50%, -50%);
        }
      `}</style>
    </div>
  );
}

export default ProgressBar;
