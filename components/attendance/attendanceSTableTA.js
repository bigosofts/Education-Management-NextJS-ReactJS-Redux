"use client";
import { useState, useEffect } from "react";
import "./attendance.css";
import mytoast from "../toast/toast";

function AttendanceSTableTA({ classes, strDate, books }) {
  const [tableData, setTableData] = useState();
  const [dateArray, setDateArray] = useState(true);
  const [dateIndex, setDateIndex] = useState();
  const [subjectCode, setSubjectCode] = useState();
  const [jamatCode, setJamatCode] = useState();
  const [semesterCode, setSemesterCode] = useState();
  const [fragmentData, setFragmentData] = useState();
  const [isAlemalema, setIsAlemalema] = useState(false);
  const [isSchoolAlemalema, setIsSchoolAlemalema] = useState(false);
  const [isPreAlemalema, setIsPreAlemalema] = useState(false);
  const [jamat, setJamat] = useState();
  const [semester, setSemester] = useState();
  const [dateFinal, setDateFinal] = useState();
  const [classFinal, setClassFinal] = useState();
  const [classCode, setClassCode] = useState();
  const [bookFinal, setBookFinal] = useState();

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

              // console.log(item3);

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
                mobile: item3.mobileNumber,
                name: item3.sName,
              };
            });

            bookObject[
              item2.bookID + "_" + item2.batchNo + "_" + item2.courseID
            ] = studentsOBJ;
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

  function classChanger(fragment, value) {
    if (value == "alemalema") {
      setIsAlemalema(true);
      setIsSchoolAlemalema(false);
      setIsPreAlemalema(false);

      setJamat(fragment[value]);
      setSubjectCode(value);
    } else if (value == "schoolalemalema") {
      setIsSchoolAlemalema(true);
      setIsAlemalema(false);
      setIsPreAlemalema(false);

      setJamat(fragment[value]);
      setSubjectCode(value);
    } else if (value == "prealemalema") {
      setIsPreAlemalema(true);
      setIsAlemalema(false);
      setIsSchoolAlemalema(false);

      setJamat(fragment[value]);
      setSubjectCode(value);
    } else {
      setSubjectCode(value);
      setIsAlemalema(false);
      setIsSchoolAlemalema(false);
      setIsPreAlemalema(false);

      setJamat("");
    }
  }

  function jamatChanger(fragmentData, value) {
    if (subjectCode && value) {
      setJamatCode(value);
      setSemester(fragmentData[subjectCode][value]);
    } else {
      setJamatCode("");
      setSemesterCode("");
    }
  }

  function semesterChanger(fragmentData, value) {
    if (value && subjectCode && jamatCode) {
      setSemesterCode(value);
      setDateFinal(fragmentData[subjectCode][jamatCode][value]);
    } else {
      setSemesterCode("");
      setJamatCode("");
    }
  }

  function datechanger(fragmentData, value) {
    if (value && subjectCode && jamatCode && semesterCode) {
      setDateIndex(value);
      setClassFinal(fragmentData[subjectCode][jamatCode][semesterCode][value]);
    } else {
      setDateIndex(value);
      setJamatCode("");
      setSemesterCode("");
      setClassFinal(fragmentData[subjectCode][value]);
    }
  }

  function batchChanger(fragmentData, value) {
    if (value && subjectCode && jamatCode && dateIndex && semesterCode) {
      setClassCode(value);

      setBookFinal(
        Object.entries(
          fragmentData[subjectCode][jamatCode][semesterCode][dateIndex]
        ).filter((item) => item[0].split("_")[1] == value)
      );
    } else {
      setClassCode(value);
      setJamatCode("");
      setSemesterCode("");

      Object.entries(fragmentData[subjectCode][dateIndex]).filter(
        (item) => item[0].split("_")[1] == value
      );
    }
  }

  function reset() {
    setSubjectCode("");
    setJamatCode("");
    setSemesterCode("");
    setDateIndex("");
    setClassCode("");
    setIsAlemalema(false);
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
            semester17: {},
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

        shishumaktab: {},

        hifjulquran: {},
        farzeayinnajera: {},

        abacus_student: {},

        ramadanquranulkarim: {},

        schoolalemalema: {
          jamat1: {
            "school-year1semester1": {},
            "school-year1semester2": {},
            "school-year1semester3": {},
            "school-year2semester1": {},
            "school-year2semester2": {},
            "school-year2semester3": {},
            "school-year3semester1": {},
            "school-year3semester2": {},
            "school-year3semester3": {},
            "school-year4semester1": {},
            "school-year4semester2": {},
            "school-year4semester3": {},
            "school-year4semester4": {},
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

        prealemalema: {
          jamat1: {
            "pre-year1semester1": {},
            "pre-year1semester2": {},
            "pre-year1semester3": {},
            "pre-year2semester1": {},
            "pre-year2semester2": {},
            "pre-year2semester3": {},
            "pre-year3semester1": {},
            "pre-year3semester2": {},
            "pre-year3semester3": {},
          },
        },
      };

      let date = Object.entries(tableData);

      date.forEach((each, i) => {
        classes.forEach((item) => {
          if (item.courseID == "alemalema") {
            if (item.jamatID == "jamat1") {
              if (item.semesterID == "semester01") {
                let filteredEntries = Object.entries(date[i][1]).filter(
                  (filterItem) => {
                    return (
                      filterItem[0].includes(item.bookID) &&
                      !filterItem[0].includes("school") &&
                      !filterItem[0].includes("pre")
                    );
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
                    return (
                      filterItem[0].includes(item.bookID) &&
                      !filterItem[0].includes("school") &&
                      !filterItem[0].includes("pre")
                    );
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
                    return (
                      filterItem[0].includes(item.bookID) &&
                      !filterItem[0].includes("school") &&
                      !filterItem[0].includes("pre")
                    );
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
                    return (
                      filterItem[0].includes(item.bookID) &&
                      !filterItem[0].includes("school") &&
                      !filterItem[0].includes("pre")
                    );
                  }
                );

                let filteredObject = Object.fromEntries(filteredEntries);

                workingData.alemalema.jamat1.semester15[i] = {
                  ...workingData.alemalema.jamat1.semester15[i],
                  ...filteredObject,
                };
              } else if (item.semesterID == "semester17") {
                let filteredEntries = Object.entries(date[i][1]).filter(
                  (filterItem) => {
                    return (
                      filterItem[0].includes(item.bookID) &&
                      !filterItem[0].includes("school") &&
                      !filterItem[0].includes("pre")
                    );
                  }
                );

                let filteredObject = Object.fromEntries(filteredEntries);

                workingData.alemalema.jamat1.semester16[i] = {
                  ...workingData.alemalema.jamat1.semester16[i],
                  ...filteredObject,
                };
              } else if (item.semesterID == "semester17") {
                let filteredEntries = Object.entries(date[i][1]).filter(
                  (filterItem) => {
                    return (
                      filterItem[0].includes(item.bookID) &&
                      !filterItem[0].includes("school") &&
                      !filterItem[0].includes("pre")
                    );
                  }
                );

                let filteredObject = Object.fromEntries(filteredEntries);

                workingData.alemalema.jamat1.semester17[i] = {
                  ...workingData.alemalema.jamat1.semester17[i],
                  ...filteredObject,
                };
              }
            } else if (item.jamatID == "jamat2") {
              if (item.semesterID == "semester04") {
                let filteredEntries = Object.entries(date[i][1]).filter(
                  (filterItem) => {
                    return (
                      filterItem[0].includes(item.bookID) &&
                      !filterItem[0].includes("school") &&
                      !filterItem[0].includes("pre")
                    );
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
                    return (
                      filterItem[0].includes(item.bookID) &&
                      !filterItem[0].includes("school") &&
                      !filterItem[0].includes("pre")
                    );
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
                    return (
                      filterItem[0].includes(item.bookID) &&
                      !filterItem[0].includes("school") &&
                      !filterItem[0].includes("pre")
                    );
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
                    return (
                      filterItem[0].includes(item.bookID) &&
                      !filterItem[0].includes("school") &&
                      !filterItem[0].includes("pre")
                    );
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
                    return (
                      filterItem[0].includes(item.bookID) &&
                      !filterItem[0].includes("school") &&
                      !filterItem[0].includes("pre")
                    );
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
                    return (
                      filterItem[0].includes(item.bookID) &&
                      !filterItem[0].includes("school") &&
                      !filterItem[0].includes("pre")
                    );
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
                    return (
                      filterItem[0].includes(item.bookID) &&
                      !filterItem[0].includes("school") &&
                      !filterItem[0].includes("pre")
                    );
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
                    return (
                      filterItem[0].includes(item.bookID) &&
                      !filterItem[0].includes("school") &&
                      !filterItem[0].includes("pre")
                    );
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
                    return (
                      filterItem[0].includes(item.bookID) &&
                      !filterItem[0].includes("school") &&
                      !filterItem[0].includes("pre")
                    );
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
                    return (
                      filterItem[0].includes(item.bookID) &&
                      !filterItem[0].includes("school") &&
                      !filterItem[0].includes("pre")
                    );
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
                    return (
                      filterItem[0].includes(item.bookID) &&
                      !filterItem[0].includes("school") &&
                      !filterItem[0].includes("pre")
                    );
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
          } else if (item.courseID == "schoolalemalema") {
            if (item.jamatID == "jamat1") {
              if (item.semesterID == "school-year1semester1") {
                let filteredEntries = Object.entries(date[i][1]).filter(
                  (filterItem) => {
                    return (
                      filterItem[0].includes(item.bookID) &&
                      filterItem[0].includes("schoolalemalema")
                    );
                  }
                );

                let filteredObject = Object.fromEntries(filteredEntries);

                workingData.schoolalemalema.jamat1["school-year1semester1"][i] =
                  {
                    ...workingData.schoolalemalema.jamat1[
                      "school-year1semester1"
                    ][i],
                    ...filteredObject,
                  };
              } else if (item.semesterID == "school-year1semester2") {
                let filteredEntries = Object.entries(date[i][1]).filter(
                  (filterItem) => {
                    return (
                      filterItem[0].includes(item.bookID) &&
                      filterItem[0].includes("schoolalemalema")
                    );
                  }
                );

                let filteredObject = Object.fromEntries(filteredEntries);

                workingData.schoolalemalema.jamat1["school-year1semester2"][i] =
                  {
                    ...workingData.schoolalemalema.jamat1[
                      "school-year1semester2"
                    ][i],
                    ...filteredObject,
                  };
              } else if (item.semesterID == "school-year1semester3") {
                let filteredEntries = Object.entries(date[i][1]).filter(
                  (filterItem) => {
                    return (
                      filterItem[0].includes(item.bookID) &&
                      filterItem[0].includes("schoolalemalema")
                    );
                  }
                );

                let filteredObject = Object.fromEntries(filteredEntries);

                workingData.schoolalemalema.jamat1["school-year1semester3"][i] =
                  {
                    ...workingData.schoolalemalema.jamat1[
                      "school-year1semester3"
                    ][i],
                    ...filteredObject,
                  };
              } else if (item.semesterID == "school-year2semester1") {
                let filteredEntries = Object.entries(date[i][1]).filter(
                  (filterItem) => {
                    return (
                      filterItem[0].includes(item.bookID) &&
                      filterItem[0].includes("schoolalemalema")
                    );
                  }
                );

                let filteredObject = Object.fromEntries(filteredEntries);

                workingData.schoolalemalema.jamat1["school-year2semester1"][i] =
                  {
                    ...workingData.schoolalemalema.jamat1[
                      "school-year2semester1"
                    ][i],
                    ...filteredObject,
                  };
              } else if (item.semesterID == "school-year2semester2") {
                let filteredEntries = Object.entries(date[i][1]).filter(
                  (filterItem) => {
                    return (
                      filterItem[0].includes(item.bookID) &&
                      filterItem[0].includes("schoolalemalema")
                    );
                  }
                );

                let filteredObject = Object.fromEntries(filteredEntries);

                workingData.schoolalemalema.jamat1["school-year2semester2"][i] =
                  {
                    ...workingData.schoolalemalema.jamat1[
                      "school-year2semester2"
                    ][i],
                    ...filteredObject,
                  };
              } else if (item.semesterID == "school-year2semester3") {
                let filteredEntries = Object.entries(date[i][1]).filter(
                  (filterItem) => {
                    return (
                      filterItem[0].includes(item.bookID) &&
                      filterItem[0].includes("schoolalemalema")
                    );
                  }
                );

                let filteredObject = Object.fromEntries(filteredEntries);

                workingData.schoolalemalema.jamat1["school-year2semester3"][i] =
                  {
                    ...workingData.schoolalemalema.jamat1[
                      "school-year2semester3"
                    ][i],
                    ...filteredObject,
                  };
              } else if (item.semesterID == "school-year3semester1") {
                let filteredEntries = Object.entries(date[i][1]).filter(
                  (filterItem) => {
                    return (
                      filterItem[0].includes(item.bookID) &&
                      filterItem[0].includes("schoolalemalema")
                    );
                  }
                );

                let filteredObject = Object.fromEntries(filteredEntries);

                workingData.schoolalemalema.jamat1["school-year3semester1"][i] =
                  {
                    ...workingData.schoolalemalema.jamat1[
                      "school-year3semester1"
                    ][i],
                    ...filteredObject,
                  };
              } else if (item.semesterID == "school-year3semester2") {
                let filteredEntries = Object.entries(date[i][1]).filter(
                  (filterItem) => {
                    return (
                      filterItem[0].includes(item.bookID) &&
                      filterItem[0].includes("schoolalemalema")
                    );
                  }
                );

                let filteredObject = Object.fromEntries(filteredEntries);

                workingData.schoolalemalema.jamat1["school-year3semester2"][i] =
                  {
                    ...workingData.schoolalemalema.jamat1[
                      "school-year3semester2"
                    ][i],
                    ...filteredObject,
                  };
              } else if (item.semesterID == "school-year3semester3") {
                let filteredEntries = Object.entries(date[i][1]).filter(
                  (filterItem) => {
                    return (
                      filterItem[0].includes(item.bookID) &&
                      filterItem[0].includes("schoolalemalema")
                    );
                  }
                );

                let filteredObject = Object.fromEntries(filteredEntries);

                workingData.schoolalemalema.jamat1["school-year3semester3"][i] =
                  {
                    ...workingData.schoolalemalema.jamat1[
                      "school-year3semester3"
                    ][i],
                    ...filteredObject,
                  };
              } else if (item.semesterID == "school-year4semester1") {
                let filteredEntries = Object.entries(date[i][1]).filter(
                  (filterItem) => {
                    return (
                      filterItem[0].includes(item.bookID) &&
                      filterItem[0].includes("schoolalemalema")
                    );
                  }
                );

                let filteredObject = Object.fromEntries(filteredEntries);

                workingData.schoolalemalema.jamat1["school-year4semester1"][i] =
                  {
                    ...workingData.schoolalemalema.jamat1[
                      "school-year4semester1"
                    ][i],
                    ...filteredObject,
                  };
              } else if (item.semesterID == "school-year4semester2") {
                let filteredEntries = Object.entries(date[i][1]).filter(
                  (filterItem) => {
                    return (
                      filterItem[0].includes(item.bookID) &&
                      filterItem[0].includes("schoolalemalema")
                    );
                  }
                );

                let filteredObject = Object.fromEntries(filteredEntries);

                workingData.schoolalemalema.jamat1["school-year4semester2"][i] =
                  {
                    ...workingData.schoolalemalema.jamat1[
                      "school-year4semester2"
                    ][i],
                    ...filteredObject,
                  };
              } else if (item.semesterID == "school-year4semester3") {
                let filteredEntries = Object.entries(date[i][1]).filter(
                  (filterItem) => {
                    return (
                      filterItem[0].includes(item.bookID) &&
                      filterItem[0].includes("schoolalemalema")
                    );
                  }
                );

                let filteredObject = Object.fromEntries(filteredEntries);

                workingData.schoolalemalema.jamat1["school-year4semester3"][i] =
                  {
                    ...workingData.schoolalemalema.jamat1[
                      "school-year4semester3"
                    ][i],
                    ...filteredObject,
                  };
              } else if (item.semesterID == "school-year4semester4") {
                let filteredEntries = Object.entries(date[i][1]).filter(
                  (filterItem) => {
                    return (
                      filterItem[0].includes(item.bookID) &&
                      filterItem[0].includes("schoolalemalema")
                    );
                  }
                );

                let filteredObject = Object.fromEntries(filteredEntries);

                workingData.schoolalemalema.jamat1["school-year4semester4"][i] =
                  {
                    ...workingData.schoolalemalema.jamat1[
                      "school-year4semester4"
                    ][i],
                    ...filteredObject,
                  };
              }
            } else if (item.jamatID == "jamat2") {
              if (item.semesterID == "semester04") {
                let filteredEntries = Object.entries(date[i][1]).filter(
                  (filterItem) => {
                    return (
                      filterItem[0].includes(item.bookID) &&
                      filterItem[0].includes("schoolalemalema")
                    );
                  }
                );

                let filteredObject = Object.fromEntries(filteredEntries);

                workingData.schoolalemalema.jamat2.semester04[i] = {
                  ...workingData.schoolalemalema.jamat2.semester04[i],
                  ...filteredObject,
                };
              } else if (item.semesterID == "semester05") {
                let filteredEntries = Object.entries(date[i][1]).filter(
                  (filterItem) => {
                    return (
                      filterItem[0].includes(item.bookID) &&
                      filterItem[0].includes("schoolalemalema")
                    );
                  }
                );

                let filteredObject = Object.fromEntries(filteredEntries);

                workingData.schoolalemalema.jamat2.semester05[i] = {
                  ...workingData.schoolalemalema.jamat2.semester05[i],
                  ...filteredObject,
                };
              } else if (item.semesterID == "semester06") {
                let filteredEntries = Object.entries(date[i][1]).filter(
                  (filterItem) => {
                    return (
                      filterItem[0].includes(item.bookID) &&
                      filterItem[0].includes("schoolalemalema")
                    );
                  }
                );

                let filteredObject = Object.fromEntries(filteredEntries);

                workingData.schoolalemalema.jamat2.semester06[i] = {
                  ...workingData.schoolalemalema.jamat2.semester06[i],
                  ...filteredObject,
                };
              } else if (item.semesterID == "semester07") {
                let filteredEntries = Object.entries(date[i][1]).filter(
                  (filterItem) => {
                    return (
                      filterItem[0].includes(item.bookID) &&
                      filterItem[0].includes("schoolalemalema")
                    );
                  }
                );

                let filteredObject = Object.fromEntries(filteredEntries);

                workingData.schoolalemalema.jamat2.semester07[i] = {
                  ...workingData.schoolalemalema.jamat2.semester07[i],
                  ...filteredObject,
                };
              } else if (item.semesterID == "semester08") {
                let filteredEntries = Object.entries(date[i][1]).filter(
                  (filterItem) => {
                    return (
                      filterItem[0].includes(item.bookID) &&
                      filterItem[0].includes("schoolalemalema")
                    );
                  }
                );

                let filteredObject = Object.fromEntries(filteredEntries);

                workingData.schoolalemalema.jamat2.semester08[i] = {
                  ...workingData.schoolalemalema.jamat2.semester08[i],
                  ...filteredObject,
                };
              } else if (item.semesterID == "semester10") {
                let filteredEntries = Object.entries(date[i][1]).filter(
                  (filterItem) => {
                    return (
                      filterItem[0].includes(item.bookID) &&
                      filterItem[0].includes("schoolalemalema")
                    );
                  }
                );

                let filteredObject = Object.fromEntries(filteredEntries);

                workingData.schoolalemalema.jamat2.semester10[i] = {
                  ...workingData.schoolalemalema.jamat2.semester10[i],
                  ...filteredObject,
                };
              }
            } else if (item.jamatID == "jamat3") {
              if (item.semesterID == "semester09") {
                let filteredEntries = Object.entries(date[i][1]).filter(
                  (filterItem) => {
                    return (
                      filterItem[0].includes(item.bookID) &&
                      filterItem[0].includes("schoolalemalema")
                    );
                  }
                );

                let filteredObject = Object.fromEntries(filteredEntries);

                workingData.schoolalemalema.jamat3.semester09[i] = {
                  ...workingData.schoolalemalema.jamat3.semester09[i],
                  ...filteredObject,
                };
              } else if (item.semesterID == "semester11") {
                let filteredEntries = Object.entries(date[i][1]).filter(
                  (filterItem) => {
                    return (
                      filterItem[0].includes(item.bookID) &&
                      filterItem[0].includes("schoolalemalema")
                    );
                  }
                );

                let filteredObject = Object.fromEntries(filteredEntries);

                workingData.schoolalemalema.jamat3.semester11[i] = {
                  ...workingData.schoolalemalema.jamat3.semester11[i],
                  ...filteredObject,
                };
              } else if (item.semesterID == "semester12") {
                let filteredEntries = Object.entries(date[i][1]).filter(
                  (filterItem) => {
                    return (
                      filterItem[0].includes(item.bookID) &&
                      filterItem[0].includes("schoolalemalema")
                    );
                  }
                );

                let filteredObject = Object.fromEntries(filteredEntries);

                workingData.schoolalemalema.jamat3.semester12[i] = {
                  ...workingData.schoolalemalema.jamat3.semester12[i],
                  ...filteredObject,
                };
              } else if (item.semesterID == "semester13") {
                let filteredEntries = Object.entries(date[i][1]).filter(
                  (filterItem) => {
                    return (
                      filterItem[0].includes(item.bookID) &&
                      filterItem[0].includes("schoolalemalema")
                    );
                  }
                );

                let filteredObject = Object.fromEntries(filteredEntries);

                workingData.schoolalemalema.jamat3.semester13[i] = {
                  ...workingData.schoolalemalema.jamat3.semester13[i],
                  ...filteredObject,
                };
              }
            } else if (item.jamatID == "jamat4") {
              if (item.semesterID == "semester14") {
                let filteredEntries = Object.entries(date[i][1]).filter(
                  (filterItem) => {
                    return (
                      filterItem[0].includes(item.bookID) &&
                      filterItem[0].includes("schoolalemalema")
                    );
                  }
                );

                let filteredObject = Object.fromEntries(filteredEntries);

                workingData.schoolalemalema.jamat4.semester14[i] = {
                  ...workingData.schoolalemalema.jamat4.semester14[i],
                  ...filteredObject,
                };
              }
            }
          } else if (item.courseID == "prealemalema") {
            if (item.jamatID == "jamat1") {
              if (item.semesterID == "pre-year1semester1") {
                let filteredEntries = Object.entries(date[i][1]).filter(
                  (filterItem) => {
                    return (
                      filterItem[0].includes(item.bookID) &&
                      filterItem[0].includes("prealemalema")
                    );
                  }
                );

                let filteredObject = Object.fromEntries(filteredEntries);

                workingData.prealemalema.jamat1["pre-year1semester1"][i] = {
                  ...workingData.prealemalema.jamat1["pre-year1semester1"][i],
                  ...filteredObject,
                };
              } else if (item.semesterID == "pre-year1semester2") {
                let filteredEntries = Object.entries(date[i][1]).filter(
                  (filterItem) => {
                    return (
                      filterItem[0].includes(item.bookID) &&
                      filterItem[0].includes("prealemalema")
                    );
                  }
                );

                let filteredObject = Object.fromEntries(filteredEntries);

                workingData.prealemalema.jamat1["pre-year1semester2"][i] = {
                  ...workingData.prealemalema.jamat1["pre-year1semester2"][i],
                  ...filteredObject,
                };
              } else if (item.semesterID == "pre-year1semester3") {
                let filteredEntries = Object.entries(date[i][1]).filter(
                  (filterItem) => {
                    return (
                      filterItem[0].includes(item.bookID) &&
                      filterItem[0].includes("prealemalema")
                    );
                  }
                );

                let filteredObject = Object.fromEntries(filteredEntries);

                workingData.prealemalema.jamat1["pre-year1semester3"][i] = {
                  ...workingData.prealemalema.jamat1["pre-year1semester3"][i],
                  ...filteredObject,
                };
              } else if (item.semesterID == "pre-year2semester1") {
                let filteredEntries = Object.entries(date[i][1]).filter(
                  (filterItem) => {
                    return (
                      filterItem[0].includes(item.bookID) &&
                      filterItem[0].includes("prealemalema")
                    );
                  }
                );

                let filteredObject = Object.fromEntries(filteredEntries);

                workingData.prealemalema.jamat1["pre-year2semester1"][i] = {
                  ...workingData.prealemalema.jamat1["pre-year2semester1"][i],
                  ...filteredObject,
                };
              } else if (item.semesterID == "pre-year2semester2") {
                let filteredEntries = Object.entries(date[i][1]).filter(
                  (filterItem) => {
                    return (
                      filterItem[0].includes(item.bookID) &&
                      filterItem[0].includes("prealemalema")
                    );
                  }
                );

                let filteredObject = Object.fromEntries(filteredEntries);

                workingData.prealemalema.jamat1["pre-year2semester2"][i] = {
                  ...workingData.prealemalema.jamat1["pre-year2semester2"][i],
                  ...filteredObject,
                };
              } else if (item.semesterID == "pre-year2semester3") {
                let filteredEntries = Object.entries(date[i][1]).filter(
                  (filterItem) => {
                    return (
                      filterItem[0].includes(item.bookID) &&
                      filterItem[0].includes("prealemalema")
                    );
                  }
                );

                let filteredObject = Object.fromEntries(filteredEntries);

                workingData.prealemalema.jamat1["pre-year2semester3"][i] = {
                  ...workingData.prealemalema.jamat1["pre-year2semester3"][i],
                  ...filteredObject,
                };
              } else if (item.semesterID == "pre-year3semester1") {
                let filteredEntries = Object.entries(date[i][1]).filter(
                  (filterItem) => {
                    return (
                      filterItem[0].includes(item.bookID) &&
                      filterItem[0].includes("prealemalema")
                    );
                  }
                );

                let filteredObject = Object.fromEntries(filteredEntries);

                workingData.prealemalema.jamat1["pre-year3semester1"][i] = {
                  ...workingData.prealemalema.jamat1["pre-year3semester1"][i],
                  ...filteredObject,
                };
              } else if (item.semesterID == "pre-year3semester2") {
                let filteredEntries = Object.entries(date[i][1]).filter(
                  (filterItem) => {
                    return (
                      filterItem[0].includes(item.bookID) &&
                      filterItem[0].includes("prealemalema")
                    );
                  }
                );

                let filteredObject = Object.fromEntries(filteredEntries);

                workingData.prealemalema.jamat1["pre-year3semester2"][i] = {
                  ...workingData.prealemalema.jamat1["pre-year3semester2"][i],
                  ...filteredObject,
                };
              } else if (item.semesterID == "pre-year3semester3") {
                let filteredEntries = Object.entries(date[i][1]).filter(
                  (filterItem) => {
                    return (
                      filterItem[0].includes(item.bookID) &&
                      filterItem[0].includes("prealemalema")
                    );
                  }
                );

                let filteredObject = Object.fromEntries(filteredEntries);

                workingData.prealemalema.jamat1["pre-year3semester3"][i] = {
                  ...workingData.prealemalema.jamat1["pre-year3semester3"][i],
                  ...filteredObject,
                };
              }
            }
          }
        });
      });

      setFragmentData(workingData);
    }
  }, [classes, tableData]);

  function totalQuestion(bookFinal, id) {
    let totalQuestion = 0;

    bookFinal.forEach((item2, i2) => {
      let markEntry = Object.entries(bookFinal[i2][1]).find(
        (em) => em[0] == id
      );
      if (markEntry) {
        totalQuestion += markEntry[1].cTotal;
      }
    });
    return totalQuestion;
  }

  function totalMark(bookFinal, id) {
    let totalMark = 0;

    bookFinal.forEach((item2, i2) => {
      let markEntry = Object.entries(bookFinal[i2][1]).find(
        (em) => em[0] == id
      );
      if (markEntry) {
        totalMark += markEntry[1].cMark;
      }
    });
    return totalMark;
  }

  function teacherAttendance(bookFinal, id) {
    let present = [];

    bookFinal.forEach((item2, i2) => {
      let markEntry = Object.entries(bookFinal[i2][1]).find((em) => em[0] == id)
        ? Object.entries(bookFinal[i2][1]).find((em) => em[0] == id)[1].tPresent
        : "--";

      if (markEntry == "P") {
        present.push("P");
      }
    });

    if (present.length > 0) {
      return "P";
    } else {
      return "--";
    }
  }

  const handleCopy = (text) => {
    const tempInput = document.createElement("input");
    tempInput.value = text;
    document.body.appendChild(tempInput);
    tempInput.select();
    document.execCommand("copy");
    document.body.removeChild(tempInput);
    mytoast.info("Copied: " + text);
  };

  return (
    <>
      <div className="grid grid-cols-4 gap-10 mt-10">
        <div className="p-4 text-white rounded-xl bg-slate-700" onClick={reset}>
          Reset Filter
        </div>
        <select
          value={subjectCode}
          onChange={(e) => {
            e.preventDefault();
            classChanger(fragmentData, e.target.value);
          }}
          className="p-4 bg-[rgb(22,101,52)] text-white rounded-xl"
        >
          <option value="">Select Class</option>
          {fragmentData &&
            Object.entries(fragmentData).map((item, i) => (
              <option key={i} value={item[0]}>
                {item[0]}
              </option>
            ))}
        </select>
        {isAlemalema && (
          <>
            <select
              value={jamatCode}
              onChange={(e) => {
                e.preventDefault();
                jamatChanger(fragmentData, e.target.value);
              }}
              className="p-4 bg-[rgb(22,101,52)] text-white rounded-xl"
            >
              <option value="">Select Jamat</option>

              {jamat &&
                Object.entries(jamat).map((item, i) => (
                  <option key={i} value={item[0]}>
                    {item[0]}
                  </option>
                ))}
            </select>

            <select
              value={semesterCode}
              onChange={(e) => {
                e.preventDefault();
                semesterChanger(fragmentData, e.target.value);
              }}
              className="p-4 bg-[rgb(22,101,52)] text-white rounded-xl"
            >
              <option value="">Select Semester</option>

              {semester &&
                Object.entries(semester).map((item, i) => (
                  <option key={i} value={item[0]}>
                    {item[0]}
                  </option>
                ))}
            </select>
          </>
        )}
        {isSchoolAlemalema && (
          <>
            <select
              value={jamatCode}
              onChange={(e) => {
                e.preventDefault();
                jamatChanger(fragmentData, e.target.value);
              }}
              className="p-4 bg-[rgb(22,101,52)] text-white rounded-xl"
            >
              <option value="">Select Jamat</option>

              {jamat &&
                Object.entries(jamat).map((item, i) => (
                  <option key={i} value={item[0]}>
                    {item[0]}
                  </option>
                ))}
            </select>

            <select
              value={semesterCode}
              onChange={(e) => {
                e.preventDefault();
                semesterChanger(fragmentData, e.target.value);
              }}
              className="p-4 bg-[rgb(22,101,52)] text-white rounded-xl"
            >
              <option value="">Select Semester</option>

              {semester &&
                Object.entries(semester).map((item, i) => (
                  <option key={i} value={item[0]}>
                    {item[0]}
                  </option>
                ))}
            </select>
          </>
        )}
        {isPreAlemalema && (
          <>
            <select
              value={jamatCode}
              onChange={(e) => {
                e.preventDefault();
                jamatChanger(fragmentData, e.target.value);
              }}
              className="p-4 bg-[rgb(22,101,52)] text-white rounded-xl"
            >
              <option value="">Select Jamat</option>

              {jamat &&
                Object.entries(jamat).map((item, i) => (
                  <option key={i} value={item[0]}>
                    {item[0]}
                  </option>
                ))}
            </select>

            <select
              value={semesterCode}
              onChange={(e) => {
                e.preventDefault();
                semesterChanger(fragmentData, e.target.value);
              }}
              className="p-4 bg-[rgb(22,101,52)] text-white rounded-xl"
            >
              <option value="">Select Semester</option>

              {semester &&
                Object.entries(semester).map((item, i) => (
                  <option key={i} value={item[0]}>
                    {item[0]}
                  </option>
                ))}
            </select>
          </>
        )}

        <select
          value={dateIndex}
          onChange={(e) => {
            e.preventDefault();
            datechanger(fragmentData, e.target.value);
          }}
          className="p-4 bg-[rgb(22,101,52)] text-white rounded-xl"
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
          value={classCode}
          onChange={(e) => {
            e.preventDefault();
            batchChanger(fragmentData, e.target.value);
          }}
          className="p-4 bg-[rgb(22,101,52)] text-white rounded-xl"
        >
          <option value="">Select Batch</option>

          {classFinal &&
            [
              ...new Set(
                Object.entries(classFinal).map((item) => item[0].split("_")[1])
              ),
            ].map((each, i) => (
              <option key={i} value={each}>
                {each}
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
                  <th colSpan={bookFinal && bookFinal.length}>
                    উপস্থিতির তথ্য
                  </th>
                  <th colSpan={bookFinal && bookFinal.length}>দৈনিক নাম্বার</th>
                  <th rowSpan={2}>মোট প্রশ্ন</th>
                  <th rowSpan={2}>প্রাপ্ত নাম্বার</th>
                  <th rowSpan={2}>শিক্ষকের উপস্থিতি</th>
                  <th rowSpan={2}>শিক্ষার্থীর নাম্বার</th>
                </tr>

                <tr>
                  {bookFinal &&
                    bookFinal.map((item, i) => (
                      <th key={i}>
                        {books && findBooks(item[0].split("_")[0]).bookName.bn}
                      </th>
                    ))}
                  {bookFinal &&
                    bookFinal.map((item, i) => (
                      <th key={i}>
                        {books && findBooks(item[0].split("_")[0]).bookName.bn}
                      </th>
                    ))}
                </tr>
              </thead>
              <tbody>
                {bookFinal &&
                  Object.entries(bookFinal[0][1]).map((item, i) => (
                    <tr key={i}>
                      <td>{i + 1}</td>
                      <td>{item[0]}</td>
                      <td>{item[1].name}</td>

                      {bookFinal &&
                        bookFinal.map((item2, i2) => (
                          <td>
                            {Object.entries(bookFinal[i2][1]).find((em) => {
                              return em[0] == item[0];
                            })
                              ? Object.entries(bookFinal[i2][1]).find((em) => {
                                  return em[0] == item[0];
                                })[1].present
                              : "--"}
                          </td>
                        ))}

                      {bookFinal &&
                        bookFinal.map((item3, i2) => (
                          <td>
                            {Object.entries(bookFinal[i2][1]).find(
                              (em) => em[0] == item[0]
                            )
                              ? Object.entries(bookFinal[i2][1]).find(
                                  (em) => em[0] == item[0]
                                )[1].mark == 0 &&
                                Object.entries(bookFinal[i2][1]).find(
                                  (em) => em[0] == item[0]
                                )[1].total == "--"
                                ? "--"
                                : Object.entries(bookFinal[i2][1]).find(
                                    (em) => em[0] == item[0]
                                  )[1].mark +
                                  "/" +
                                  Object.entries(bookFinal[i2][1]).find(
                                    (em) => em[0] == item[0]
                                  )[1].total
                              : "--"}
                          </td>
                        ))}

                      <td>{totalQuestion(bookFinal, item[0])}</td>
                      <td>{totalMark(bookFinal, item[0])}</td>
                      <td>{teacherAttendance(bookFinal, item[0])}</td>
                      <td
                        className="hover:cursor-pointer hover:text-red-500"
                        onClick={() =>
                          handleCopy(
                            Object.entries(bookFinal[0][1]).find(
                              (em) => em[0] == item[0]
                            )[1].mobile
                          )
                        }
                      >
                        {
                          Object.entries(bookFinal[0][1]).find(
                            (em) => em[0] == item[0]
                          )[1].mobile
                        }
                      </td>
                    </tr>
                  ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </>
  );
}

export default AttendanceSTableTA;
