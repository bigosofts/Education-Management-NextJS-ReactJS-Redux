"use client";
import { useState, useEffect } from "react";
import "./attendance.css";

function AttendanceSTable({ classes, strDate, books }) {
  const [tableData, setTableData] = useState();
  const [dateArray, setDateArray] = useState(true);
  const [dateIndex, setDateIndex] = useState();
  const [subjectCode, setSubjectCode] = useState();

  useEffect(() => {
    if (classes) {
      function makeTableJSON(classes) {
        // Function to format the date as "Month Day, Year"
        function formatDate(date) {
          const options = { year: "numeric", month: "long", day: "numeric" };
          return date.toLocaleDateString("en-US", options);
        }

        // Start date
        const startDate = new Date(strDate);

        // Current date
        const currentDate = new Date();

        // Calculate the end date (current date + 5 days)
        const endDate = new Date(currentDate);
        endDate.setDate(endDate.getDate() + 5);

        // Initialize the array to hold the formatted dates
        let dateArray = [];
        setDateArray(dateArray);

        //Loop from start date to end date
        let current = new Date(startDate);
        while (current <= endDate) {
          dateArray.push(formatDate(current));
          current.setDate(current.getDate() + 1);
        }

        let JSONObject = {};

        dateArray.forEach((item, i2) => {
          //item is each Date
          let bookObject = {};

          classes.forEach((item2) => {
            //item2 is each Class

            let students = item2.students;
            let teacher = item2.teacher;

            let studentsOBJ = {};

            students.forEach((item3, i) => {
              //item3 is each students

              let haveAttendance = item3.attendance.find((item4) => {
                return item4.presentTime == item;
              });

              let haveTeacherAttendance = teacher.attendance.find((item7) => {
                return item7.presentTime == item;
              });

              // Debugging statements
              //   console.log("Student:", item3.SID, "Date:", item);
              //   console.log("haveAttendance:", haveAttendance);
              //   console.log("haveTeacherAttendance:", haveTeacherAttendance);

              studentsOBJ[item3.SID] = {
                present:
                  haveAttendance && haveAttendance.isPresent ? "P" : "--",
                tPresent:
                  haveTeacherAttendance && haveTeacherAttendance.isPresent
                    ? "P"
                    : "--",
                mark:
                  (haveAttendance &&
                    haveAttendance.completionProgress.reduce(
                      (acc, item) => acc + item.mark,
                      0
                    )) ||
                  0,
                total:
                  haveTeacherAttendance &&
                  haveTeacherAttendance.completionProgress.length > 0
                    ? haveTeacherAttendance.completionProgress.length
                    : "--",
                cMark: item3.attendance.reduce((acc, attendance) => {
                  const attendanceTotal = attendance.completionProgress.reduce(
                    (innerAcc, progress) => {
                      return innerAcc + progress.mark;
                    },
                    0
                  );
                  return acc + attendanceTotal;
                }, 0),
                cTotal: teacher.attendance.reduce((acc, attendance) => {
                  const attendanceTotal = attendance.completionProgress.length;
                  return acc + attendanceTotal;
                }, 0),
              };
            });

            bookObject[item2.bookID] = studentsOBJ;
          });

          JSONObject[i2] = bookObject;
        });

        setTableData(JSONObject);
      }

      makeTableJSON(classes);
    }
  }, [classes]);

  function findBooks(bookID) {
    return books.find((item) => {
      return item.bookID == bookID;
    });
  }

  function datechanger(e) {
    e.preventDefault();
    let value = e.target.value;
    setDateIndex(value);
  }

  function classChanger(e) {
    e.preventDefault();
    let value = e.target.value;
    setSubjectCode(value);
  }
  return (
    <>
      <div className="grid grid-cols-2 gap-10 mt-10">
        <select
          onChange={datechanger}
          className="p-4 bg-[#532d80] text-white rounded-xl"
        >
          <option value="">Select Date</option>
          {dateArray.length > 0 &&
            dateArray.map((item, i) => (
              <option key={i} value={i}>
                {item}
              </option>
            ))}
        </select>

        <select
          onChange={classChanger}
          className="p-4 bg-[#532d80] text-white rounded-xl"
        >
          <option value="">Select Class</option>
          {classes.map((item, i) => (
            <option key={i} value={item.bookID}>
              {books && findBooks(item.bookID).bookName.bn} - {item.batchNo}
            </option>
          ))}
        </select>
      </div>

      <div className="grid grid-cols-1 gap-10 mt-10">
        <div className="hifz_table">
          <div className="table_container mt-10">
            <table>
              <thead className="sticky top-0">
                <tr>
                  <th rowSpan={1}>সিরিয়াল</th>

                  <th rowSpan={1}>স্টুডেন্ট আইডি</th>
                  <th rowSpan={1}>নাম</th>
                  <th colSpan={1}>উপস্থিতির তথ্য</th>
                  <th colSpan={1}>দৈনিক প্রশ্ন</th>
                  <th colSpan={1}>প্রাপ্ত নাম্বার</th>
                  <th rowSpan={1}>মোট প্রশ্ন</th>
                  <th rowSpan={1}>প্রাপ্ত নাম্বার</th>

                  <th rowSpan={1}>শিক্ষকের উপস্থিতি</th>
                </tr>
              </thead>
              <tbody>
                {tableData &&
                  dateIndex &&
                  subjectCode &&
                  Object.entries(tableData[dateIndex][subjectCode]).map(
                    ([id, details], index) => (
                      <tr key={index}>
                        <td>{index + 1}</td>

                        <td>{id}</td>
                        <td>
                          {classes &&
                            classes
                              .find((item) => item.bookID == subjectCode)
                              .students.find((item) => item.SID == id).sName}
                        </td>
                        <td>{details.present}</td>
                        <td>{details.total}</td>
                        <td>{details.mark}</td>
                        <td>{details.cTotal}</td>
                        <td>{details.cMark}</td>

                        <td>{details.tPresent}</td>
                      </tr>
                    )
                  )}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </>
  );
}

export default AttendanceSTable;
