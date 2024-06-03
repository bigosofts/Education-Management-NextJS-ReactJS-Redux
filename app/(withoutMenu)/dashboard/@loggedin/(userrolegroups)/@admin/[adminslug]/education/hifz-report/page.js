"use client";
import { selectAllData } from "@/apiservices/studentapiservices";
import HifzTable from "@/components/hifzTable/hifzTable";
import { useState, useEffect } from "react";

function HifzReport() {
  const [data, setData] = useState([]);
  const [fullData, setFullData] = useState([]);
  const [teacher, setTeacher] = useState([]);
  const [count, setCount] = useState(0);

  useEffect(() => {
    async function getData() {
      function hifjulquranQuery(datas) {
        return datas.filter((item) => {
          const course = item.studentCourseCode.filter((courseItem) => {
            return (
              /hifjulquran/i.test(courseItem.code) &&
              courseItem.status === "active"
            );
          });

          return (
            course.length > 0 &&
            /hifjulquran/i.test(course[course.length - 1].code)
          );
        });
      }

      const res = await selectAllData(null, null);

      if (res.status === "Alhamdulillah") {
        const output = hifjulquranQuery(res.data);
        setData(output);
        setFullData(output);
        setCount(output.length);

        const teacherArray = output
          .filter((item) => item.details.hifzClass)
          .map((item) => item.details.hifzClass.groupName);

        const finalArray = [...new Set(teacherArray)];

        setTeacher(finalArray);
      }
    }

    getData();
  }, []); // Only run once, on mount

  function changeFilter(value) {
    if (value === "all") {
      setData(fullData);
      setCount(fullData.length);
    } else {
      const filteredData = fullData.filter(
        (item) =>
          item.details.hifzClass && item.details.hifzClass.groupName === value
      );
      setData(filteredData);

      setCount(filteredData.length);
    }
  }

  return (
    <div>
      <h2>Hifz Report of All Students</h2>
      <div className="w-full">
        <div className="w-[400px] mx-auto mt-10">
          <select
            onChange={(e) => {
              e.preventDefault();
              changeFilter(e.target.value);
            }}
            className="w-full p-4 bg-blue-600 text-white rounded-xl text-center text-bolder"
          >
            <option value="all">Select Class Name</option>
            {teacher &&
              teacher.map((item, index) => (
                <option key={index} value={item}>
                  {item}
                </option>
              ))}
          </select>

          {count > 0 && (
            <div className="bg-slate-900 mt-10 mx-auto w-[150px] h-[150px] text-center text-[60px] font-extrabold text-white rounded-xl">
              {count}
              <div className="text-[24px]">Total</div>
            </div>
          )}
        </div>
      </div>
      <div>
        {data && data.length > 0
          ? data.map((item, i) => (
              <div key={i}>
                <HifzTable id={item.userName} />
              </div>
            ))
          : ""}
      </div>
    </div>
  );
}

export default HifzReport;
