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
      <div className="text-xm text-slate-800 text-center grid grid-cols-4 md:grid-cols-10 gap-1 md:gap-4 w-full mx-auto mt-5">
        <div className="flex items-center justify-center">
          <input
            type="checkbox"
            id="data"
            className="custom-checkbox mr-2"
            checked={status?.some((item) => item == "data")}
          />
          <label className="text-[9px] md:text-lg" htmlFor="data">
            Data
          </label>
        </div>
        <div className="flex items-center justify-center">
          <input
            type="checkbox"
            id="classes"
            className="custom-checkbox mr-2"
            checked={status?.some((item) => item == "classes")}
          />
          <label className="text-[9px] md:text-lg" htmlFor="classes">
            Classes
          </label>
        </div>
        <div className="flex items-center justify-center">
          <input
            type="checkbox"
            id="students"
            className="custom-checkbox mr-2"
            checked={status?.some((item) => item == "students")}
          />
          <label className="text-[9px] md:text-lg" htmlFor="students">
            Students
          </label>
        </div>
        <div className="flex items-center justify-center">
          <input
            type="checkbox"
            id="teachers"
            className="custom-checkbox mr-2"
            checked={status?.some((item) => item == "teachers")}
          />
          <label className="text-[9px] md:text-lg" htmlFor="teachers">
            Teachers
          </label>
        </div>
        <div className="flex items-center justify-center">
          <input
            type="checkbox"
            id="books"
            className="custom-checkbox mr-2"
            checked={status?.some((item) => item == "books")}
          />
          <label className="text-[9px] md:text-lg" htmlFor="books">
            Books
          </label>
        </div>
        <div className="flex items-center justify-center">
          <input
            type="checkbox"
            id="courses"
            className="custom-checkbox mr-2"
            checked={status?.some((item) => item == "courses")}
          />
          <label className="text-[9px] md:text-lg" htmlFor="courses">
            Courses
          </label>
        </div>
        <div className="flex items-center justify-center">
          <input
            type="checkbox"
            id="semesters"
            className="custom-checkbox mr-2"
            checked={status?.some((item) => item == "semesters")}
          />
          <label className="text-[9px] md:text-lg" htmlFor="semesters">
            Semesters
          </label>
        </div>
        <div className="flex items-center justify-center">
          <input
            type="checkbox"
            id="jamats"
            className="custom-checkbox mr-2"
            checked={status?.some((item) => item == "jamats")}
          />
          <label className="text-[9px] md:text-lg" htmlFor="jamats">
            Jamats
          </label>
        </div>
        <div className="flex items-center justify-center">
          <input
            type="checkbox"
            id="departments"
            className="custom-checkbox mr-2"
            checked={status?.some((item) => item == "departments")}
          />
          <label className="text-[9px] md:text-lg" htmlFor="departments">
            Departments
          </label>
        </div>
        <div className="flex items-center justify-center">
          <input
            type="checkbox"
            id="payments"
            className="custom-checkbox mr-2"
            checked={status?.some((item) => item == "payments")}
          />
          <label className="text-[9px] md:text-lg" htmlFor="payments">
            Payments
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
