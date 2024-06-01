"use client";
import { useState, useEffect } from "react";
import "./attendance.css";

function AttendanceSTableTA({ classes, strDate, books }) {
  const [tableData, setTableData] = useState();
  const [dateArray, setDateArray] = useState(true);
  const [dateIndex, setDateIndex] = useState();
  const [subjectCode, setSubjectCode] = useState();
  const [fragmentData, setFragmentData] = useState();

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

            bookObject[item2.bookID + "_" + item2.batchNo] = studentsOBJ;
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

  if (tableData) {
    console.log(tableData);
  }

  useEffect(() => {
    if (classes && tableData) {
      let workingData = {
        alemalema: {
          jamat1: {
            semester01: {},
            semester02: {},
            semester03: {},
            semester15: {},
            semester16: {},
          },
          jamat2: {
            semester04: {},
            semester05: {},
            semester06: {},
            semester07: {},
            semester08: {},
            semester10: {},
          },
          jamat3: {
            semester09: {},
            semester11: {},
            semester12: {},
            semester13: {},
          },
          jamat4: {
            semester14: {},
          },
        },
        farzeayinampara: {},
        ezranahusorof: {},
        shishumaktab: {},
        abacus_teacher: {},
        hifjulquran: {},
        farzeayinnajera: {},
        farzeayinmaktab: {},
        abacus_student: {},
        urdu: {},
        ramadanquranulkarim: {},
        shishunajera: {},
        schoolalemalema: {},
        prealemalema: {},
      };

      let date = Object.entries(tableData);

      date.forEach((each, i) => {
        classes.forEach((item) => {
          if (item.courseID == "alemalema") {
            if (item.jamatID == "jamat1") {
              if (item.semesterID == "semester01") {
                let filteredEntries = Object.entries(date[i][1]).filter(
                  (filterItem) => {
                    return filterItem[0].includes(item.bookID);
                  }
                );

                let filteredObject = Object.fromEntries(filteredEntries);

                workingData.alemalema.jamat1.semester01[i] = {
                  ...workingData.alemalema.jamat1.semester01[i],
                  ...filteredObject,
                };
              } else if (item.semesterID == "semester02") {
                let filteredEntries = Object.entries(date[i][1]).filter(
                  (filterItem) => {
                    return filterItem[0].includes(item.bookID);
                  }
                );

                let filteredObject = Object.fromEntries(filteredEntries);

                workingData.alemalema.jamat1.semester02[i] = {
                  ...workingData.alemalema.jamat1.semester02[i],
                  ...filteredObject,
                };
              } else if (item.semesterID == "semester03") {
                let filteredEntries = Object.entries(date[i][1]).filter(
                  (filterItem) => {
                    return filterItem[0].includes(item.bookID);
                  }
                );

                let filteredObject = Object.fromEntries(filteredEntries);

                workingData.alemalema.jamat1.semester03[i] = {
                  ...workingData.alemalema.jamat1.semester03[i],
                  ...filteredObject,
                };
              } else if (item.semesterID == "semester15") {
                let filteredEntries = Object.entries(date[i][1]).filter(
                  (filterItem) => {
                    return filterItem[0].includes(item.bookID);
                  }
                );

                let filteredObject = Object.fromEntries(filteredEntries);

                workingData.alemalema.jamat1.semester15[i] = {
                  ...workingData.alemalema.jamat1.semester15[i],
                  ...filteredObject,
                };
              } else if (item.semesterID == "semester16") {
                let filteredEntries = Object.entries(date[i][1]).filter(
                  (filterItem) => {
                    return filterItem[0].includes(item.bookID);
                  }
                );

                let filteredObject = Object.fromEntries(filteredEntries);

                workingData.alemalema.jamat1.semester16[i] = {
                  ...workingData.alemalema.jamat1.semester16[i],
                  ...filteredObject,
                };
              }
            } else if (item.jamatID == "jamat2") {
              if (item.semesterID == "semester04") {
                let filteredEntries = Object.entries(date[i][1]).filter(
                  (filterItem) => {
                    return filterItem[0].includes(item.bookID);
                  }
                );

                let filteredObject = Object.fromEntries(filteredEntries);

                workingData.alemalema.jamat2.semester04[i] = {
                  ...workingData.alemalema.jamat2.semester04[i],
                  ...filteredObject,
                };
              } else if (item.semesterID == "semester05") {
                let filteredEntries = Object.entries(date[i][1]).filter(
                  (filterItem) => {
                    return filterItem[0].includes(item.bookID);
                  }
                );

                let filteredObject = Object.fromEntries(filteredEntries);

                workingData.alemalema.jamat2.semester05[i] = {
                  ...workingData.alemalema.jamat2.semester05[i],
                  ...filteredObject,
                };
              } else if (item.semesterID == "semester06") {
                let filteredEntries = Object.entries(date[i][1]).filter(
                  (filterItem) => {
                    return filterItem[0].includes(item.bookID);
                  }
                );

                let filteredObject = Object.fromEntries(filteredEntries);

                workingData.alemalema.jamat2.semester06[i] = {
                  ...workingData.alemalema.jamat2.semester06[i],
                  ...filteredObject,
                };
              } else if (item.semesterID == "semester07") {
                let filteredEntries = Object.entries(date[i][1]).filter(
                  (filterItem) => {
                    return filterItem[0].includes(item.bookID);
                  }
                );

                let filteredObject = Object.fromEntries(filteredEntries);

                workingData.alemalema.jamat2.semester07[i] = {
                  ...workingData.alemalema.jamat2.semester07[i],
                  ...filteredObject,
                };
              } else if (item.semesterID == "semester08") {
                let filteredEntries = Object.entries(date[i][1]).filter(
                  (filterItem) => {
                    return filterItem[0].includes(item.bookID);
                  }
                );

                let filteredObject = Object.fromEntries(filteredEntries);

                workingData.alemalema.jamat2.semester08[i] = {
                  ...workingData.alemalema.jamat2.semester08[i],
                  ...filteredObject,
                };
              } else if (item.semesterID == "semester10") {
                let filteredEntries = Object.entries(date[i][1]).filter(
                  (filterItem) => {
                    return filterItem[0].includes(item.bookID);
                  }
                );

                let filteredObject = Object.fromEntries(filteredEntries);

                workingData.alemalema.jamat2.semester10[i] = {
                  ...workingData.alemalema.jamat2.semester10[i],
                  ...filteredObject,
                };
              }
            } else if (item.jamatID == "jamat3") {
              if (item.semesterID == "semester09") {
                let filteredEntries = Object.entries(date[i][1]).filter(
                  (filterItem) => {
                    return filterItem[0].includes(item.bookID);
                  }
                );

                let filteredObject = Object.fromEntries(filteredEntries);

                workingData.alemalema.jamat3.semester09[i] = {
                  ...workingData.alemalema.jamat3.semester09[i],
                  ...filteredObject,
                };
              } else if (item.semesterID == "semester11") {
                let filteredEntries = Object.entries(date[i][1]).filter(
                  (filterItem) => {
                    return filterItem[0].includes(item.bookID);
                  }
                );

                let filteredObject = Object.fromEntries(filteredEntries);

                workingData.alemalema.jamat3.semester11[i] = {
                  ...workingData.alemalema.jamat3.semester11[i],
                  ...filteredObject,
                };
              } else if (item.semesterID == "semester12") {
                let filteredEntries = Object.entries(date[i][1]).filter(
                  (filterItem) => {
                    return filterItem[0].includes(item.bookID);
                  }
                );

                let filteredObject = Object.fromEntries(filteredEntries);

                workingData.alemalema.jamat3.semester12[i] = {
                  ...workingData.alemalema.jamat3.semester12[i],
                  ...filteredObject,
                };
              } else if (item.semesterID == "semester13") {
                let filteredEntries = Object.entries(date[i][1]).filter(
                  (filterItem) => {
                    return filterItem[0].includes(item.bookID);
                  }
                );

                let filteredObject = Object.fromEntries(filteredEntries);

                workingData.alemalema.jamat3.semester13[i] = {
                  ...workingData.alemalema.jamat3.semester13[i],
                  ...filteredObject,
                };
              }
            } else if (item.jamatID == "jamat4") {
              if (item.semesterID == "semester14") {
                let filteredEntries = Object.entries(date[i][1]).filter(
                  (filterItem) => {
                    return filterItem[0].includes(item.bookID);
                  }
                );

                let filteredObject = Object.fromEntries(filteredEntries);

                workingData.alemalema.jamat4.semester14[i] = {
                  ...workingData.alemalema.jamat4.semester14[i],
                  ...filteredObject,
                };
              }
            }
          } else if (item.courseID == "farzeayinampara") {
            let filteredEntries = Object.entries(date[i][1]).filter(
              (filterItem) => {
                return filterItem[0].includes(item.bookID);
              }
            );

            let filteredObject = Object.fromEntries(filteredEntries);

            workingData.farzeayinampara[i] = {
              ...workingData.farzeayinampara[i],
              ...filteredObject,
            };
          } else if (item.courseID == "ezranahusorof") {
            let filteredEntries = Object.entries(date[i][1]).filter(
              (filterItem) => {
                return filterItem[0].includes(item.bookID);
              }
            );

            let filteredObject = Object.fromEntries(filteredEntries);

            workingData.ezranahusorof[i] = {
              ...workingData.ezranahusorof[i],
              ...filteredObject,
            };
          } else if (item.courseID == "shishumaktab") {
            let filteredEntries = Object.entries(date[i][1]).filter(
              (filterItem) => {
                return filterItem[0].includes(item.bookID);
              }
            );

            let filteredObject = Object.fromEntries(filteredEntries);

            workingData.shishumaktab[i] = {
              ...workingData.shishumaktab[i],
              ...filteredObject,
            };
          } else if (item.courseID == "abacus_teacher") {
            let filteredEntries = Object.entries(date[i][1]).filter(
              (filterItem) => {
                return filterItem[0].includes(item.bookID);
              }
            );

            let filteredObject = Object.fromEntries(filteredEntries);

            workingData.abacus_teacher[i] = {
              ...workingData.abacus_teacher[i],
              ...filteredObject,
            };
          } else if (item.courseID == "hifjulquran") {
            let filteredEntries = Object.entries(date[i][1]).filter(
              (filterItem) => {
                return filterItem[0].includes(item.bookID);
              }
            );

            let filteredObject = Object.fromEntries(filteredEntries);

            workingData.hifjulquran[i] = {
              ...workingData.hifjulquran[i],
              ...filteredObject,
            };
          } else if (item.courseID == "farzeayinnajera") {
            let filteredEntries = Object.entries(date[i][1]).filter(
              (filterItem) => {
                return filterItem[0].includes(item.bookID);
              }
            );

            let filteredObject = Object.fromEntries(filteredEntries);

            workingData.farzeayinnajera[i] = {
              ...workingData.farzeayinnajera[i],
              ...filteredObject,
            };
          } else if (item.courseID == "farzeayinmaktab") {
            let filteredEntries = Object.entries(date[i][1]).filter(
              (filterItem) => {
                return filterItem[0].includes(item.bookID);
              }
            );

            let filteredObject = Object.fromEntries(filteredEntries);

            workingData.farzeayinmaktab[i] = {
              ...workingData.farzeayinmaktab[i],
              ...filteredObject,
            };
          } else if (item.courseID == "abacus_student") {
            let filteredEntries = Object.entries(date[i][1]).filter(
              (filterItem) => {
                return filterItem[0].includes(item.bookID);
              }
            );

            let filteredObject = Object.fromEntries(filteredEntries);

            workingData.abacus_student[i] = {
              ...workingData.abacus_student[i],
              ...filteredObject,
            };
          } else if (item.courseID == "urdu") {
            let filteredEntries = Object.entries(date[i][1]).filter(
              (filterItem) => {
                return filterItem[0].includes(item.bookID);
              }
            );

            let filteredObject = Object.fromEntries(filteredEntries);

            workingData.urdu[i] = {
              ...workingData.urdu[i],
              ...filteredObject,
            };
          } else if (item.courseID == "ramadanquranulkarim") {
            let filteredEntries = Object.entries(date[i][1]).filter(
              (filterItem) => {
                return filterItem[0].includes(item.bookID);
              }
            );

            let filteredObject = Object.fromEntries(filteredEntries);

            workingData.ramadanquranulkarim[i] = {
              ...workingData.ramadanquranulkarim[i],
              ...filteredObject,
            };
          } else if (item.courseID == "shishunajera") {
            let filteredEntries = Object.entries(date[i][1]).filter(
              (filterItem) => {
                return filterItem[0].includes(item.bookID);
              }
            );

            let filteredObject = Object.fromEntries(filteredEntries);

            workingData.shishunajera[i] = {
              ...workingData.shishunajera[i],
              ...filteredObject,
            };
          } else if (item.courseID == "schoolalemalema") {
            let filteredEntries = Object.entries(date[i][1]).filter(
              (filterItem) => {
                return filterItem[0].includes(item.bookID);
              }
            );

            let filteredObject = Object.fromEntries(filteredEntries);

            workingData.schoolalemalema[i] = {
              ...workingData.schoolalemalema[i],
              ...filteredObject,
            };
          } else if (item.courseID == "prealemalema") {
            let filteredEntries = Object.entries(date[i][1]).filter(
              (filterItem) => {
                return filterItem[0].includes(item.bookID);
              }
            );

            let filteredObject = Object.fromEntries(filteredEntries);

            workingData.prealemalema[i] = {
              ...workingData.prealemalema[i],
              ...filteredObject,
            };
          }
        });
      });

      setFragmentData(workingData);
    }
  }, [classes, tableData]);

  if (fragmentData) {
    console.log(fragmentData);
  }
  return (
    <>
      <div className="grid grid-cols-3 gap-10 mt-10">
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

        <select
          onChange={classChanger}
          className="p-4 bg-[#532d80] text-white rounded-xl"
        >
          <option value="">Select Batch</option>
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
                  <th rowSpan={2}>সিরিয়াল</th>
                  <th rowSpan={2}>স্টুডেন্ট আইডি</th>
                  <th rowSpan={2}>নাম</th>
                  <th colSpan={5}>উপস্থিতির তথ্য</th>
                  <th colSpan={5}>দৈনিক নাম্বার</th>
                  <th rowSpan={2}>মোট প্রশ্ন</th>
                  <th rowSpan={2}>প্রাপ্ত নাম্বার</th>
                  <th rowSpan={2}>শিক্ষকের উপস্থিতি</th>
                  <th rowSpan={2}>শিক্ষার্থীর নাম্বার</th>
                </tr>

                <tr>
                  <th rowSpan={1}>এসো আরবী শিখি</th>
                  <th rowSpan={1}>তালিমুল ইসলাম</th>
                  <th rowSpan={1}>তালিমুল ইসলাম</th>
                  <th rowSpan={1}>তালিমুল ইসলাম</th>
                  <th rowSpan={1}>তালিমুল ইসলাম</th>
                  <th rowSpan={1}>এসো আরবী শিখি</th>
                  <th rowSpan={1}>তালিমুল ইসলাম</th>
                  <th rowSpan={1}>তালিমুল ইসলাম</th>
                  <th rowSpan={1}>তালিমুল ইসলাম</th>
                  <th rowSpan={1}>তালিমুল ইসলাম</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>Demo</td>
                  <td>Demo</td>
                  <td>Demo</td>
                  <td>Demo</td>
                  <td>Demo</td>
                  <td>Demo</td>
                  <td>Demo</td>
                  <td>Demo</td>
                  <td>Demo</td>
                  <td>Demo</td>
                  <td>Demo</td>
                  <td>Demo</td>
                  <td>Demo</td>
                  <td>Demo</td>
                  <td>Demo</td>
                  <td>Demo</td>
                  <td>Demo</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </>
  );
}

export default AttendanceSTableTA;
