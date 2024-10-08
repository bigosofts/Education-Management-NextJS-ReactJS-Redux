"use client";
import mytoast from "../toast/toast";
import "./hifz.css";
import { useEffect, useRef, useState } from "react";
import { FaTelegramPlane } from "react-icons/fa";

export default function StatisticsTable({ data, title, allData }) {
  const totalAnnualActiveStudent = useRef(new Map());
  const totalAnnualPendingStudent = useRef(new Map());
  const totalAnnualDueStudent = useRef(new Map());
  const totalConcurrentAnnualDueStudent = useRef(new Map());
  const totalAnnualIrregularStudent = useRef(new Map());

  const totalMonthlyActiveStudent = useRef(new Map());
  const totalMonthlyPendingStudent = useRef(new Map());
  const totalMonthlyDueStudent = useRef(new Map());

  const [done, setDone] = useState(false);

  useEffect(() => {
    async function getData() {
      allData.totalAnnualActiveStudent.data.forEach((item) => {
        totalAnnualActiveStudent.current.set(item.userName, item);
      });
      allData.totalAnnualPendingStudent.data.forEach((item) => {
        totalAnnualPendingStudent.current.set(item.userName, item);
      });
      allData.totalAnnualDueStudent.data.forEach((item) => {
        totalAnnualDueStudent.current.set(item.userName, item);
      });
      allData.totalConcurrentAnnualDueStudent.data.forEach((item) => {
        totalConcurrentAnnualDueStudent.current.set(item.userName, item);
      });
      allData.totalAnnualIrregularStudent.data.forEach((item) => {
        totalAnnualIrregularStudent.current.set(item.userName, item);
      });

      allData.totalMonthlyActiveStudent.data.forEach((item) => {
        totalMonthlyActiveStudent.current.set(item.userName, item);
      });
      allData.totalMonthlyPendingStudent.data.forEach((item) => {
        totalMonthlyPendingStudent.current.set(item.userName, item);
      });
      allData.totalMonthlyDueStudent.data.forEach((item) => {
        totalMonthlyDueStudent.current.set(item.userName, item);
      });

      setDone(true); // You can log the map here
    }

    getData();
  }, []);

  const handleCopy = (text) => {
    const tempInput = document.createElement("input");
    tempInput.value = text;
    document.body.appendChild(tempInput);
    tempInput.select();
    document.execCommand("copy");
    document.body.removeChild(tempInput);
    mytoast.info("Copied: " + text);
  };

  function renderAnnual(id) {
    if (totalAnnualActiveStudent.current.get(id)) {
      return (
        <span className="m-auto block w-[20px] h-[20px] bg-green-900 text-white rounded-xl text-xs">
          A
        </span>
      );
    } else if (totalAnnualPendingStudent.current.get(id)) {
      // Return a fallback UI
      return (
        <span className="m-auto block w-[20px] h-[20px] bg-blue-500 text-white rounded-full text-sm">
          P
        </span>
      );
    } else if (totalAnnualDueStudent.current.get(id)) {
      // Return a fallback UI
      return (
        <span className="m-auto block w-[20px] h-[20px] bg-red-500 text-white rounded-xl text-sm">
          D
        </span>
      );
    } else if (totalConcurrentAnnualDueStudent.current.get(id)) {
      // Return a fallback UI
      return (
        <span className="m-auto block w-[20px] h-[20px] bg-pink-500 text-white rounded-xl text-sm">
          C
        </span>
      );
    } else if (totalAnnualIrregularStudent.current.get(id)) {
      return (
        <span className="m-auto block w-[20px] h-[20px] bg-yellow-500 text-white rounded-xl text-sm">
          I
        </span>
      );
    }
  }

  function renderMonthly(id) {
    if (totalMonthlyActiveStudent.current.get(id)) {
      return (
        <span className="m-auto block w-[20px] h-[20px] bg-green-900 text-white rounded-xl text-xs">
          A
        </span>
      );
    } else if (totalMonthlyPendingStudent.current.get(id)) {
      // Return a fallback UI
      return (
        <span className="m-auto block w-[20px] h-[20px] bg-blue-500 text-white rounded-full text-sm">
          P
        </span>
      );
    } else if (totalMonthlyDueStudent.current.get(id)) {
      // Return a fallback UI
      return (
        <span className="m-auto block w-[20px] h-[20px] bg-red-500 text-white rounded-xl text-sm">
          D
        </span>
      );
    } else {
      return <span>--</span>;
    }
  }

  if (done) {
    return (
      <div className="mt-10 p-5 statisticsTable">
        <div className="hifz_table">
          <h5 className="text-center text-white text-3xl">{title}</h5>
          <div className="table_container mt-10">
            <table>
              <thead className="sticky top-0">
                <tr>
                  <th>সিরিয়াল</th>
                  <th>স্টুডেন্ট আইডি</th>
                  <th>সম্পূর্ণ নাম</th>
                  <th>মোবাইল নাম্বার</th>
                  <th>ইমেইল</th>
                  <th>জেন্ডার</th>
                  <th>বাৎসরিক অবস্থা</th>
                  <th>মাসিক অবস্থা</th>
                  <th>যোগাযোগ</th>
                </tr>
              </thead>
              <tbody>
                {data.map((item, i) => (
                  <tr key={i}>
                    <td>{i + 1}</td>
                    <td>{item.userName}</td>
                    <td>{item.firstName.en + " " + item.lastName.en}</td>
                    <td
                      className="cursor-pointer"
                      onClick={() => handleCopy(item.mobileNumber)}
                      tel={item.mobileNumber}
                    >
                      {item.mobileNumber}
                    </td>
                    <td className="cursor-pointer">{item.emailAddress}</td>
                    <td>{item.gender}</td>
                    <td>{renderAnnual(item.userName)}</td>
                    <td>{renderMonthly(item.userName)}</td>
                    <td>
                      <FaTelegramPlane
                        style={{ margin: "auto", cursor: "pointer" }}
                        size={25}
                      />
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    );
  } else {
    return (
      <div className="w-screen h-screen flex justify-center text-center text-3xl text-white items-center">
        <span>Loading ...</span>
      </div>
    );
  }
}
