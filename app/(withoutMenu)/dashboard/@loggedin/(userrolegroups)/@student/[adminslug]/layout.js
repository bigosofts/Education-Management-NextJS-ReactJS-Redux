"use client";
import { useState, useEffect } from "react";

import { isAdmin } from "@/apiservices/checklogin";
import { useRouter } from "next/navigation";
import CommonMenu from "@/components/CommonMenu/CommonMenu";
import SideDrawer from "@/components/Drawer/SideDrawer";

import { useSelector, useDispatch } from "react-redux";
import { setInitialData } from "@/app/redux/features/isAdmin/isAdminSlice";

import { setInitialData as setInitialCourse } from "@/app/redux/features/courseState/courseStateSlice";

import { selectDataTwo } from "@/apiservices/studentapiservices";
import {
  selectDataTwo as selectClasses,
  updateData as updateClasses,
} from "@/apiservices/classapiservices";
import MessangerChat from "@/customComponents/messangerChat/messangerChat";

function StudentLayout({ children, params }) {
  const dispatch = useDispatch();

  const data = useSelector((state) => state.isAdmin.value);
  const courseState = useSelector((state) => state.courseState.value);
  const [classes, setClasses] = useState();

  const router = useRouter();

  const [show, setShow] = useState(false);

  function changeDrawerState() {
    setShow((prev) => !prev);
  }

  useEffect(() => {
    async function fetchData() {
      const payload = await isAdmin();
      if (payload.status == "Alhamdulillah") {
        const res = await selectDataTwo(
          { userName: payload.data.userName },
          null
        );

        if (res.status == "Alhamdulillah") {
          const desiredObj = {
            status: "Alhamdulillah",
            data: {
              userName: res.data[0].userName,
              userRole: res.data[0].userRole,
              isAdmin: res.data[0].isAdmin,
              userDetails: res.data[0],
            },
          };

          const res2 = await selectClasses(
            { batchNo: res.data[0].batchCount },
            null
          );

          if (res2.status == "Alhamdulillah") {
            setClasses(res2.data);
          }

          let desiredObj2 = {
            alemalema: null,
            schoolalemalema: null,
            prealemalema: null,
            farzeayinclass: null,

            hifjulquran: null,
            abacus_student: null,

            shishumaktab: null,

            farzeayinnajera: null,

            ramadanquranulkarim: null,

            department: null,
            jamat: null,
            semester: null,
          };

          let semester = res.data[0].studentSemester.filter((item) => {
            return /semester/i.test(item.code) && item.status == "active";
          });

          let hifzulQuran = res.data[0].studentCourseCode.filter((item) => {
            return /hifjulquran/i.test(item.code) && item.status == "active";
          });

          let shishumaktab = res.data[0].studentCourseCode.filter((item) => {
            return /shishumaktab/i.test(item.code) && item.status == "active";
          });

          let farzeayinnajera = res.data[0].studentCourseCode.filter((item) => {
            return (
              /farzeayinnajera/i.test(item.code) && item.status == "active"
            );
          });

          let abacusStudent = res.data[0].studentCourseCode.filter((item) => {
            return /abacus_student/i.test(item.code) && item.status == "active";
          });

          let ramadanquranulkarim = res.data[0].studentCourseCode.filter(
            (item) => {
              return (
                /ramadanquranulkarim/i.test(item.code) &&
                item.status == "active"
              );
            }
          );

          if (semester.length >= 1) {
            if (semester[semester.length - 1].code == "semester01") {
              desiredObj2.alemalema = true;
              desiredObj2.department = "department01";
              desiredObj2.jamat = "jamat1";
              desiredObj2.semester = "semester01";
            } else if (semester[semester.length - 1].code == "semester02") {
              desiredObj2.alemalema = true;
              desiredObj2.department = "department01";
              desiredObj2.jamat = "jamat1";
              desiredObj2.semester = "semester02";
            } else if (semester[semester.length - 1].code == "semester03") {
              desiredObj2.alemalema = true;
              desiredObj2.department = "department01";
              desiredObj2.jamat = "jamat1";
              desiredObj2.semester = "semester03";
            } else if (semester[semester.length - 1].code == "semester04") {
              desiredObj2.alemalema = true;
              desiredObj2.department = "department01";
              desiredObj2.jamat = "jamat2";
              desiredObj2.semester = "semester04";
            } else if (semester[semester.length - 1].code == "semester05") {
              desiredObj2.alemalema = true;
              desiredObj2.department = "department01";
              desiredObj2.jamat = "jamat2";
              desiredObj2.semester = "semester05";
            } else if (semester[semester.length - 1].code == "semester06") {
              desiredObj2.alemalema = true;
              desiredObj2.department = "department01";
              desiredObj2.jamat = "jamat2";
              desiredObj2.semester = "semester06";
            } else if (semester[semester.length - 1].code == "semester07") {
              desiredObj2.alemalema = true;
              desiredObj2.department = "department01";
              desiredObj2.jamat = "jamat2";
              desiredObj2.semester = "semester07";
            } else if (semester[semester.length - 1].code == "semester08") {
              desiredObj2.alemalema = true;
              desiredObj2.department = "department01";
              desiredObj2.jamat = "jamat2";
              desiredObj2.semester = "semester08";
            } else if (semester[semester.length - 1].code == "semester09") {
              desiredObj2.alemalema = true;
              desiredObj2.department = "department01";
              desiredObj2.jamat = "jamat3";
              desiredObj2.semester = "semester09";
            } else if (semester[semester.length - 1].code == "semester10") {
              desiredObj2.alemalema = true;
              desiredObj2.department = "department01";
              desiredObj2.jamat = "jamat3";
              desiredObj2.semester = "semester10";
            } else if (semester[semester.length - 1].code == "semester11") {
              desiredObj2.alemalema = true;
              desiredObj2.department = "department01";
              desiredObj2.jamat = "jamat3";
              desiredObj2.semester = "semester11";
            } else if (semester[semester.length - 1].code == "semester12") {
              desiredObj2.alemalema = true;
              desiredObj2.department = "department01";
              desiredObj2.jamat = "jamat3";
              desiredObj2.semester = "semester12";
            } else if (semester[semester.length - 1].code == "semester13") {
              desiredObj2.alemalema = true;
              desiredObj2.department = "department01";
              desiredObj2.jamat = "jamat3";
              desiredObj2.semester = "semester13";
            } else if (semester[semester.length - 1].code == "semester14") {
              desiredObj2.alemalema = true;
              desiredObj2.department = "department01";
              desiredObj2.jamat = "jamat4";
              desiredObj2.semester = "semester14";
            } else if (semester[semester.length - 1].code == "semester15") {
              desiredObj2.alemalema = true;
              desiredObj2.department = "department01";
              desiredObj2.jamat = "jamat1";
              desiredObj2.semester = "semester15";
            } else if (semester[semester.length - 1].code == "semester16") {
              desiredObj2.alemalema = true;
              desiredObj2.department = "department01";
              desiredObj2.jamat = "jamat1";
              desiredObj2.semester = "semester16";
            } else if (semester[semester.length - 1].code == "semester17") {
              desiredObj2.alemalema = true;
              desiredObj2.department = "department01";
              desiredObj2.jamat = "jamat1";
              desiredObj2.semester = "semester17";
            } else if (
              semester[semester.length - 1].code == "school-year1semester1"
            ) {
              desiredObj2.schoolalemalema = true;
              desiredObj2.department = "department10";
              desiredObj2.jamat = "jamat1";
              desiredObj2.semester = "school-year1semester1";
            } else if (
              semester[semester.length - 1].code == "school-year1semester2"
            ) {
              desiredObj2.schoolalemalema = true;
              desiredObj2.department = "department10";
              desiredObj2.jamat = "jamat1";
              desiredObj2.semester = "school-year1semester2";
            } else if (
              semester[semester.length - 1].code == "school-year1semester3"
            ) {
              desiredObj2.schoolalemalema = true;
              desiredObj2.department = "department10";
              desiredObj2.jamat = "jamat1";
              desiredObj2.semester = "school-year1semester3";
            } else if (
              semester[semester.length - 1].code == "school-year2semester1"
            ) {
              desiredObj2.schoolalemalema = true;
              desiredObj2.department = "department10";
              desiredObj2.jamat = "jamat1";
              desiredObj2.semester = "school-year2semester1";
            } else if (
              semester[semester.length - 1].code == "school-year2semester2"
            ) {
              desiredObj2.schoolalemalema = true;
              desiredObj2.department = "department10";
              desiredObj2.jamat = "jamat1";
              desiredObj2.semester = "school-year2semester2";
            } else if (
              semester[semester.length - 1].code == "school-year2semester3"
            ) {
              desiredObj2.schoolalemalema = true;
              desiredObj2.department = "department10";
              desiredObj2.jamat = "jamat1";
              desiredObj2.semester = "school-year2semester3";
            } else if (
              semester[semester.length - 1].code == "school-year3semester1"
            ) {
              desiredObj2.schoolalemalema = true;
              desiredObj2.department = "department10";
              desiredObj2.jamat = "jamat1";
              desiredObj2.semester = "school-year3semester1";
            } else if (
              semester[semester.length - 1].code == "school-year3semester2"
            ) {
              desiredObj2.schoolalemalema = true;
              desiredObj2.department = "department10";
              desiredObj2.jamat = "jamat1";
              desiredObj2.semester = "school-year3semester2";
            } else if (
              semester[semester.length - 1].code == "school-year3semester3"
            ) {
              desiredObj2.schoolalemalema = true;
              desiredObj2.department = "department10";
              desiredObj2.jamat = "jamat1";
              desiredObj2.semester = "school-year3semester3";
            } else if (
              semester[semester.length - 1].code == "school-year4semester1"
            ) {
              desiredObj2.schoolalemalema = true;
              desiredObj2.department = "department10";
              desiredObj2.jamat = "jamat1";
              desiredObj2.semester = "school-year4semester1";
            } else if (
              semester[semester.length - 1].code == "school-year4semester2"
            ) {
              desiredObj2.schoolalemalema = true;
              desiredObj2.department = "department10";
              desiredObj2.jamat = "jamat1";
              desiredObj2.semester = "school-year4semester2";
            } else if (
              semester[semester.length - 1].code == "school-year4semester3"
            ) {
              desiredObj2.schoolalemalema = true;
              desiredObj2.department = "department10";
              desiredObj2.jamat = "jamat1";
              desiredObj2.semester = "school-year4semester3";
            } else if (
              semester[semester.length - 1].code == "school-year4semester4"
            ) {
              desiredObj2.schoolalemalema = true;
              desiredObj2.department = "department10";
              desiredObj2.jamat = "jamat1";
              desiredObj2.semester = "school-year4semester4";
            } else if (
              semester[semester.length - 1].code == "pre-year1semester1"
            ) {
              desiredObj2.prealemalema = true;
              desiredObj2.department = "department05";
              desiredObj2.jamat = "jamat1";
              desiredObj2.semester = "pre-year1semester1";
            } else if (
              semester[semester.length - 1].code == "pre-year1semester2"
            ) {
              desiredObj2.prealemalema = true;
              desiredObj2.department = "department05";
              desiredObj2.jamat = "jamat1";
              desiredObj2.semester = "pre-year1semester2";
            } else if (
              semester[semester.length - 1].code == "pre-year1semester3"
            ) {
              desiredObj2.prealemalema = true;
              desiredObj2.department = "department05";
              desiredObj2.jamat = "jamat1";
              desiredObj2.semester = "pre-year1semester3";
            } else if (
              semester[semester.length - 1].code == "pre-year2semester1"
            ) {
              desiredObj2.prealemalema = true;
              desiredObj2.department = "department05";
              desiredObj2.jamat = "jamat1";
              desiredObj2.semester = "pre-year2semester1";
            } else if (
              semester[semester.length - 1].code == "pre-year2semester2"
            ) {
              desiredObj2.prealemalema = true;
              desiredObj2.department = "department05";
              desiredObj2.jamat = "jamat1";
              desiredObj2.semester = "pre-year2semester2";
            } else if (
              semester[semester.length - 1].code == "pre-year2semester3"
            ) {
              desiredObj2.prealemalema = true;
              desiredObj2.department = "department05";
              desiredObj2.jamat = "jamat1";
              desiredObj2.semester = "pre-year2semester3";
            } else if (
              semester[semester.length - 1].code == "pre-year3semester1"
            ) {
              desiredObj2.prealemalema = true;
              desiredObj2.department = "department05";
              desiredObj2.jamat = "jamat1";
              desiredObj2.semester = "pre-year3semester1";
            } else if (
              semester[semester.length - 1].code == "pre-year3semester2"
            ) {
              desiredObj2.prealemalema = true;
              desiredObj2.department = "department05";
              desiredObj2.jamat = "jamat1";
              desiredObj2.semester = "pre-year3semester2";
            } else if (
              semester[semester.length - 1].code == "pre-year3semester3"
            ) {
              desiredObj2.prealemalema = true;
              desiredObj2.department = "department05";
              desiredObj2.jamat = "jamat1";
              desiredObj2.semester = "pre-year3semester3";
            }
          }

          if (hifzulQuran.length >= 1) {
            desiredObj2.hifjulquran = true;
          }

          if (shishumaktab.length >= 1) {
            desiredObj2.shishumaktab = true;
          }

          if (farzeayinnajera.length >= 1) {
            desiredObj2.abacus_teacher = true;
          }

          if (abacusStudent.length >= 1) {
            desiredObj2.abacus_student = true;
          }

          if (ramadanquranulkarim.length >= 1) {
            desiredObj2.ramadanquranulkarim = true;
          }

          dispatch(setInitialCourse(desiredObj2));

          dispatch(setInitialData(desiredObj));
        }
      }
    }
    fetchData();
  }, []);

  const sidebarItems = [
    {
      name: "Dashboard",
      href: `/dashboard/${params.adminslug}`,
      icon: "/images/graph.svg",
      show: true,
    },
    {
      name: "Library",
      href: `/dashboard/${params.adminslug}/books`,
      icon: "/images/books.svg",
      show: true,
    },
    {
      name: "Notices",
      href: `/dashboard/${params.adminslug}/notices`,
      icon: "/images/notice.svg",
      show: true,
    },
    {
      name: "Fees",
      href: `/dashboard/${params.adminslug}/fees`,
      icon: "/images/fees.svg",
      show: true,
    },
    {
      name: "Results",
      href: `/dashboard/${params.adminslug}/results`,
      icon: "/images/result.svg",
      show: true,
    },
    {
      name: "Upload Exam",
      href: `/dashboard/${params.adminslug}/upload-exam`,
      icon: "/images/upload.svg",
      show: true,
    },
    {
      name: "Handwork",
      href: `/dashboard/${params.adminslug}/works`,
      icon: "/images/work.svg",
      show: true,
    },
    {
      name: "Comments",
      href: `/dashboard/${params.adminslug}/comments`,
      icon: "/images/comment.svg",
      show: true,
    },
    {
      name: "Change Class",
      href: `/dashboard/${params.adminslug}/switches`,
      icon: "/images/switch.svg",
      show: true,
    },

    {
      name: "Abacus Student",
      href: `/dashboard/${params.adminslug}/abacus`,
      icon: "/images/abacus.svg",
      show: true,
    },
    {
      name: "Abacus Teachers Training",
      href: `/dashboard/${params.adminslug}/abacus-teacher`,
      icon: "/images/abacus_teacher.svg",
      show: true,
    },
    {
      name: "Ramadan Quran",
      href: `/dashboard/${params.adminslug}/ramadan-quran`,
      icon: "/images/quran.svg",
      show: true,
    },

    {
      name: "Attendance",
      href: `/dashboard/${params.adminslug}/attendance`,
      icon: "/images/attendance.svg",
      show: true,
    },

    {
      name: "Settings",
      href: `/dashboard/${params.adminslug}/settings`,
      icon: "/images/setting.svg",
      show: true,
    },
    {
      name: "Class Room",
      href: `/dashboard/${params.adminslug}/class-room`,
      icon: "/images/population.svg",
      show: true,
    },
    {
      name: "Hifz Information Books",
      href: `/dashboard/${params.adminslug}/hifz`,
      icon: "/images/Hifzul.png",
      show: true,
    },
  ];

  if (courseState && classes && data) {
    const allClasses = [];

    if (courseState.alemalema == true && courseState.semester == "semester01") {
      let a = classes.filter((item) => {
        return item.courseID == "alemalema" && item.semesterID == "semester01";
      });

      if (a.length > 0) {
        a.forEach(async (item) => {
          // a is class object array
          //item is single class
          allClasses.push(item);

          if (item.students.length == 0) {
            let StudentsArray = item.students;

            //StudentsArray is students array inside single class item

            StudentsArray.push({
              SID: data.data.userName,
              sName:
                data.data.userDetails.firstName.en +
                " " +
                data.data.userDetails.lastName.en,
              mobileNumber: data.data.userDetails.mobileNumber,
              attendance: [],
            });

            const res5 = await updateClasses({
              classID: item.classID,
              courseID: item.courseID,
              batchNo: item.batchNo,
              maleClassLink: item.maleClassLink,
              femaleClassLink: item.femaleClassLink,
              departmentID: item.departmentID,
              jamatID: item.jamatID,
              semesterID: item.semesterID,
              bookID: item.bookID,
              teacher: item.teacher,
              examQuestion: item.examQuestion,
              students: StudentsArray,
              classStartTime: item.classStartTime,
              classEndTime: item.classEndTime,
              activeStatus: item.activeStatus,
              idValue: item._id,
            });

            if (res5.status == "Alhamdulillah") {
              console.log(
                "Blank - A student record has been created inside " +
                  item.classID
              );
            }
          } else if (
            !item.students.some((item2) => item2.SID == data.data.userName)
          ) {
            let StudentsArray = item.students;

            //StudentsArray is students array inside single class item

            StudentsArray.push({
              SID: data.data.userName,
              sName:
                data.data.userDetails.firstName.en +
                " " +
                data.data.userDetails.lastName.en,
              mobileNumber: data.data.userDetails.mobileNumber,
              attendance: [],
            });

            const res5 = await updateClasses({
              classID: item.classID,
              courseID: item.courseID,
              batchNo: item.batchNo,
              maleClassLink: item.maleClassLink,
              femaleClassLink: item.femaleClassLink,
              departmentID: item.departmentID,
              jamatID: item.jamatID,
              semesterID: item.semesterID,
              bookID: item.bookID,
              teacher: item.teacher,
              examQuestion: item.examQuestion,
              students: StudentsArray,
              classStartTime: item.classStartTime,
              classEndTime: item.classEndTime,
              activeStatus: item.activeStatus,
              idValue: item._id,
            });

            if (res5.status == "Alhamdulillah") {
              console.log(
                "Blank - A student record has been created inside " +
                  item.classID
              );
            }
          }
        });
      }
    }
    if (courseState.alemalema == true && courseState.semester == "semester02") {
      let a = classes.filter((item) => {
        return item.courseID == "alemalema" && item.semesterID == "semester02";
      });
      if (a.length > 0) {
        a.forEach(async (item) => {
          // a is class object array
          //item is single class
          allClasses.push(item);

          if (item.students.length == 0) {
            let StudentsArray = item.students;

            //StudentsArray is students array inside single class item

            StudentsArray.push({
              SID: data.data.userName,
              sName:
                data.data.userDetails.firstName.en +
                " " +
                data.data.userDetails.lastName.en,
              mobileNumber: data.data.userDetails.mobileNumber,
              attendance: [],
            });

            const res5 = await updateClasses({
              classID: item.classID,
              courseID: item.courseID,
              batchNo: item.batchNo,
              maleClassLink: item.maleClassLink,
              femaleClassLink: item.femaleClassLink,
              departmentID: item.departmentID,
              jamatID: item.jamatID,
              semesterID: item.semesterID,
              bookID: item.bookID,
              teacher: item.teacher,
              examQuestion: item.examQuestion,
              students: StudentsArray,
              classStartTime: item.classStartTime,
              classEndTime: item.classEndTime,
              activeStatus: item.activeStatus,
              idValue: item._id,
            });

            if (res5.status == "Alhamdulillah") {
              console.log(
                "Blank - A student record has been created inside " +
                  item.classID
              );
            }
          } else if (
            !item.students.some((item2) => item2.SID == data.data.userName)
          ) {
            let StudentsArray = item.students;

            //StudentsArray is students array inside single class item

            StudentsArray.push({
              SID: data.data.userName,
              sName:
                data.data.userDetails.firstName.en +
                " " +
                data.data.userDetails.lastName.en,
              mobileNumber: data.data.userDetails.mobileNumber,
              attendance: [],
            });

            const res5 = await updateClasses({
              classID: item.classID,
              courseID: item.courseID,
              batchNo: item.batchNo,
              maleClassLink: item.maleClassLink,
              femaleClassLink: item.femaleClassLink,
              departmentID: item.departmentID,
              jamatID: item.jamatID,
              semesterID: item.semesterID,
              bookID: item.bookID,
              teacher: item.teacher,
              examQuestion: item.examQuestion,
              students: StudentsArray,
              classStartTime: item.classStartTime,
              classEndTime: item.classEndTime,
              activeStatus: item.activeStatus,
              idValue: item._id,
            });

            if (res5.status == "Alhamdulillah") {
              console.log(
                "Blank - A student record has been created inside " +
                  item.classID
              );
            }
          }
        });
      }
    }
    if (courseState.alemalema == true && courseState.semester == "semester03") {
      let a = classes.filter((item) => {
        return item.courseID == "alemalema" && item.semesterID == "semester03";
      });
      if (a.length > 0) {
        a.forEach(async (item) => {
          // a is class object array
          //item is single class
          allClasses.push(item);

          if (item.students.length == 0) {
            let StudentsArray = item.students;

            //StudentsArray is students array inside single class item

            StudentsArray.push({
              SID: data.data.userName,
              sName:
                data.data.userDetails.firstName.en +
                " " +
                data.data.userDetails.lastName.en,
              mobileNumber: data.data.userDetails.mobileNumber,
              attendance: [],
            });

            const res5 = await updateClasses({
              classID: item.classID,
              courseID: item.courseID,
              batchNo: item.batchNo,
              maleClassLink: item.maleClassLink,
              femaleClassLink: item.femaleClassLink,
              departmentID: item.departmentID,
              jamatID: item.jamatID,
              semesterID: item.semesterID,
              bookID: item.bookID,
              teacher: item.teacher,
              examQuestion: item.examQuestion,
              students: StudentsArray,
              classStartTime: item.classStartTime,
              classEndTime: item.classEndTime,
              activeStatus: item.activeStatus,
              idValue: item._id,
            });

            if (res5.status == "Alhamdulillah") {
              console.log(
                "Blank - A student record has been created inside " +
                  item.classID
              );
            }
          } else if (
            !item.students.some((item2) => item2.SID == data.data.userName)
          ) {
            let StudentsArray = item.students;

            //StudentsArray is students array inside single class item

            StudentsArray.push({
              SID: data.data.userName,
              sName:
                data.data.userDetails.firstName.en +
                " " +
                data.data.userDetails.lastName.en,
              mobileNumber: data.data.userDetails.mobileNumber,
              attendance: [],
            });

            const res5 = await updateClasses({
              classID: item.classID,
              courseID: item.courseID,
              batchNo: item.batchNo,
              maleClassLink: item.maleClassLink,
              femaleClassLink: item.femaleClassLink,
              departmentID: item.departmentID,
              jamatID: item.jamatID,
              semesterID: item.semesterID,
              bookID: item.bookID,
              teacher: item.teacher,
              examQuestion: item.examQuestion,
              students: StudentsArray,
              classStartTime: item.classStartTime,
              classEndTime: item.classEndTime,
              activeStatus: item.activeStatus,
              idValue: item._id,
            });

            if (res5.status == "Alhamdulillah") {
              console.log(
                "Blank - A student record has been created inside " +
                  item.classID
              );
            }
          }
        });
      }
    }
    if (courseState.alemalema == true && courseState.semester == "semester04") {
      let a = classes.filter((item) => {
        return item.courseID == "alemalema" && item.semesterID == "semester04";
      });
      if (a.length > 0) {
        a.forEach(async (item) => {
          // a is class object array
          //item is single class
          allClasses.push(item);

          if (item.students.length == 0) {
            let StudentsArray = item.students;

            //StudentsArray is students array inside single class item

            StudentsArray.push({
              SID: data.data.userName,
              sName:
                data.data.userDetails.firstName.en +
                " " +
                data.data.userDetails.lastName.en,
              mobileNumber: data.data.userDetails.mobileNumber,
              attendance: [],
            });

            const res5 = await updateClasses({
              classID: item.classID,
              courseID: item.courseID,
              batchNo: item.batchNo,
              maleClassLink: item.maleClassLink,
              femaleClassLink: item.femaleClassLink,
              departmentID: item.departmentID,
              jamatID: item.jamatID,
              semesterID: item.semesterID,
              bookID: item.bookID,
              teacher: item.teacher,
              examQuestion: item.examQuestion,
              students: StudentsArray,
              classStartTime: item.classStartTime,
              classEndTime: item.classEndTime,
              activeStatus: item.activeStatus,
              idValue: item._id,
            });

            if (res5.status == "Alhamdulillah") {
              console.log(
                "Blank - A student record has been created inside " +
                  item.classID
              );
            }
          } else if (
            !item.students.some((item2) => item2.SID == data.data.userName)
          ) {
            let StudentsArray = item.students;

            //StudentsArray is students array inside single class item

            StudentsArray.push({
              SID: data.data.userName,
              sName:
                data.data.userDetails.firstName.en +
                " " +
                data.data.userDetails.lastName.en,
              mobileNumber: data.data.userDetails.mobileNumber,
              attendance: [],
            });

            const res5 = await updateClasses({
              classID: item.classID,
              courseID: item.courseID,
              batchNo: item.batchNo,
              maleClassLink: item.maleClassLink,
              femaleClassLink: item.femaleClassLink,
              departmentID: item.departmentID,
              jamatID: item.jamatID,
              semesterID: item.semesterID,
              bookID: item.bookID,
              teacher: item.teacher,
              examQuestion: item.examQuestion,
              students: StudentsArray,
              classStartTime: item.classStartTime,
              classEndTime: item.classEndTime,
              activeStatus: item.activeStatus,
              idValue: item._id,
            });

            if (res5.status == "Alhamdulillah") {
              console.log(
                "Blank - A student record has been created inside " +
                  item.classID
              );
            }
          }
        });
      }
    }
    if (courseState.alemalema == true && courseState.semester == "semester05") {
      let a = classes.filter((item) => {
        return item.courseID == "alemalema" && item.semesterID == "semester05";
      });
      if (a.length > 0) {
        a.forEach(async (item) => {
          // a is class object array
          //item is single class
          allClasses.push(item);

          if (item.students.length == 0) {
            let StudentsArray = item.students;

            //StudentsArray is students array inside single class item

            StudentsArray.push({
              SID: data.data.userName,
              sName:
                data.data.userDetails.firstName.en +
                " " +
                data.data.userDetails.lastName.en,
              mobileNumber: data.data.userDetails.mobileNumber,
              attendance: [],
            });

            const res5 = await updateClasses({
              classID: item.classID,
              courseID: item.courseID,
              batchNo: item.batchNo,
              maleClassLink: item.maleClassLink,
              femaleClassLink: item.femaleClassLink,
              departmentID: item.departmentID,
              jamatID: item.jamatID,
              semesterID: item.semesterID,
              bookID: item.bookID,
              teacher: item.teacher,
              examQuestion: item.examQuestion,
              students: StudentsArray,
              classStartTime: item.classStartTime,
              classEndTime: item.classEndTime,
              activeStatus: item.activeStatus,
              idValue: item._id,
            });

            if (res5.status == "Alhamdulillah") {
              console.log(
                "Blank - A student record has been created inside " +
                  item.classID
              );
            }
          } else if (
            !item.students.some((item2) => item2.SID == data.data.userName)
          ) {
            let StudentsArray = item.students;

            //StudentsArray is students array inside single class item

            StudentsArray.push({
              SID: data.data.userName,
              sName:
                data.data.userDetails.firstName.en +
                " " +
                data.data.userDetails.lastName.en,
              mobileNumber: data.data.userDetails.mobileNumber,
              attendance: [],
            });

            const res5 = await updateClasses({
              classID: item.classID,
              courseID: item.courseID,
              batchNo: item.batchNo,
              maleClassLink: item.maleClassLink,
              femaleClassLink: item.femaleClassLink,
              departmentID: item.departmentID,
              jamatID: item.jamatID,
              semesterID: item.semesterID,
              bookID: item.bookID,
              teacher: item.teacher,
              examQuestion: item.examQuestion,
              students: StudentsArray,
              classStartTime: item.classStartTime,
              classEndTime: item.classEndTime,
              activeStatus: item.activeStatus,
              idValue: item._id,
            });

            if (res5.status == "Alhamdulillah") {
              console.log(
                "Blank - A student record has been created inside " +
                  item.classID
              );
            }
          }
        });
      }
    }
    if (courseState.alemalema == true && courseState.semester == "semester06") {
      let a = classes.filter((item) => {
        return item.courseID == "alemalema" && item.semesterID == "semester06";
      });
      if (a.length > 0) {
        a.forEach(async (item) => {
          // a is class object array
          //item is single class
          allClasses.push(item);

          if (item.students.length == 0) {
            let StudentsArray = item.students;

            //StudentsArray is students array inside single class item

            StudentsArray.push({
              SID: data.data.userName,
              sName:
                data.data.userDetails.firstName.en +
                " " +
                data.data.userDetails.lastName.en,
              mobileNumber: data.data.userDetails.mobileNumber,
              attendance: [],
            });

            const res5 = await updateClasses({
              classID: item.classID,
              courseID: item.courseID,
              batchNo: item.batchNo,
              maleClassLink: item.maleClassLink,
              femaleClassLink: item.femaleClassLink,
              departmentID: item.departmentID,
              jamatID: item.jamatID,
              semesterID: item.semesterID,
              bookID: item.bookID,
              teacher: item.teacher,
              examQuestion: item.examQuestion,
              students: StudentsArray,
              classStartTime: item.classStartTime,
              classEndTime: item.classEndTime,
              activeStatus: item.activeStatus,
              idValue: item._id,
            });

            if (res5.status == "Alhamdulillah") {
              console.log(
                "Blank - A student record has been created inside " +
                  item.classID
              );
            }
          } else if (
            !item.students.some((item2) => item2.SID == data.data.userName)
          ) {
            let StudentsArray = item.students;

            //StudentsArray is students array inside single class item

            StudentsArray.push({
              SID: data.data.userName,
              sName:
                data.data.userDetails.firstName.en +
                " " +
                data.data.userDetails.lastName.en,
              mobileNumber: data.data.userDetails.mobileNumber,
              attendance: [],
            });

            const res5 = await updateClasses({
              classID: item.classID,
              courseID: item.courseID,
              batchNo: item.batchNo,
              maleClassLink: item.maleClassLink,
              femaleClassLink: item.femaleClassLink,
              departmentID: item.departmentID,
              jamatID: item.jamatID,
              semesterID: item.semesterID,
              bookID: item.bookID,
              teacher: item.teacher,
              examQuestion: item.examQuestion,
              students: StudentsArray,
              classStartTime: item.classStartTime,
              classEndTime: item.classEndTime,
              activeStatus: item.activeStatus,
              idValue: item._id,
            });

            if (res5.status == "Alhamdulillah") {
              console.log(
                "Blank - A student record has been created inside " +
                  item.classID
              );
            }
          }
        });
      }
    }
    if (courseState.alemalema == true && courseState.semester == "semester07") {
      let a = classes.filter((item) => {
        return item.courseID == "alemalema" && item.semesterID == "semester07";
      });
      if (a.length > 0) {
        a.forEach(async (item) => {
          // a is class object array
          //item is single class
          allClasses.push(item);

          if (item.students.length == 0) {
            let StudentsArray = item.students;

            //StudentsArray is students array inside single class item

            StudentsArray.push({
              SID: data.data.userName,
              sName:
                data.data.userDetails.firstName.en +
                " " +
                data.data.userDetails.lastName.en,
              mobileNumber: data.data.userDetails.mobileNumber,
              attendance: [],
            });

            const res5 = await updateClasses({
              classID: item.classID,
              courseID: item.courseID,
              batchNo: item.batchNo,
              maleClassLink: item.maleClassLink,
              femaleClassLink: item.femaleClassLink,
              departmentID: item.departmentID,
              jamatID: item.jamatID,
              semesterID: item.semesterID,
              bookID: item.bookID,
              teacher: item.teacher,
              examQuestion: item.examQuestion,
              students: StudentsArray,
              classStartTime: item.classStartTime,
              classEndTime: item.classEndTime,
              activeStatus: item.activeStatus,
              idValue: item._id,
            });

            if (res5.status == "Alhamdulillah") {
              console.log(
                "Blank - A student record has been created inside " +
                  item.classID
              );
            }
          } else if (
            !item.students.some((item2) => item2.SID == data.data.userName)
          ) {
            let StudentsArray = item.students;

            //StudentsArray is students array inside single class item

            StudentsArray.push({
              SID: data.data.userName,
              sName:
                data.data.userDetails.firstName.en +
                " " +
                data.data.userDetails.lastName.en,
              mobileNumber: data.data.userDetails.mobileNumber,
              attendance: [],
            });

            const res5 = await updateClasses({
              classID: item.classID,
              courseID: item.courseID,
              batchNo: item.batchNo,
              maleClassLink: item.maleClassLink,
              femaleClassLink: item.femaleClassLink,
              departmentID: item.departmentID,
              jamatID: item.jamatID,
              semesterID: item.semesterID,
              bookID: item.bookID,
              teacher: item.teacher,
              examQuestion: item.examQuestion,
              students: StudentsArray,
              classStartTime: item.classStartTime,
              classEndTime: item.classEndTime,
              activeStatus: item.activeStatus,
              idValue: item._id,
            });

            if (res5.status == "Alhamdulillah") {
              console.log(
                "Blank - A student record has been created inside " +
                  item.classID
              );
            }
          }
        });
      }
    }
    if (courseState.alemalema == true && courseState.semester == "semester08") {
      let a = classes.filter((item) => {
        return item.courseID == "alemalema" && item.semesterID == "semester08";
      });
      if (a.length > 0) {
        a.forEach(async (item) => {
          // a is class object array
          //item is single class
          allClasses.push(item);

          if (item.students.length == 0) {
            let StudentsArray = item.students;

            //StudentsArray is students array inside single class item

            StudentsArray.push({
              SID: data.data.userName,
              sName:
                data.data.userDetails.firstName.en +
                " " +
                data.data.userDetails.lastName.en,
              mobileNumber: data.data.userDetails.mobileNumber,
              attendance: [],
            });

            const res5 = await updateClasses({
              classID: item.classID,
              courseID: item.courseID,
              batchNo: item.batchNo,
              maleClassLink: item.maleClassLink,
              femaleClassLink: item.femaleClassLink,
              departmentID: item.departmentID,
              jamatID: item.jamatID,
              semesterID: item.semesterID,
              bookID: item.bookID,
              teacher: item.teacher,
              examQuestion: item.examQuestion,
              students: StudentsArray,
              classStartTime: item.classStartTime,
              classEndTime: item.classEndTime,
              activeStatus: item.activeStatus,
              idValue: item._id,
            });

            if (res5.status == "Alhamdulillah") {
              console.log(
                "Blank - A student record has been created inside " +
                  item.classID
              );
            }
          } else if (
            !item.students.some((item2) => item2.SID == data.data.userName)
          ) {
            let StudentsArray = item.students;

            //StudentsArray is students array inside single class item

            StudentsArray.push({
              SID: data.data.userName,
              sName:
                data.data.userDetails.firstName.en +
                " " +
                data.data.userDetails.lastName.en,
              mobileNumber: data.data.userDetails.mobileNumber,
              attendance: [],
            });

            const res5 = await updateClasses({
              classID: item.classID,
              courseID: item.courseID,
              batchNo: item.batchNo,
              maleClassLink: item.maleClassLink,
              femaleClassLink: item.femaleClassLink,
              departmentID: item.departmentID,
              jamatID: item.jamatID,
              semesterID: item.semesterID,
              bookID: item.bookID,
              teacher: item.teacher,
              examQuestion: item.examQuestion,
              students: StudentsArray,
              classStartTime: item.classStartTime,
              classEndTime: item.classEndTime,
              activeStatus: item.activeStatus,
              idValue: item._id,
            });

            if (res5.status == "Alhamdulillah") {
              console.log(
                "Blank - A student record has been created inside " +
                  item.classID
              );
            }
          }
        });
      }
    }
    if (courseState.alemalema == true && courseState.semester == "semester09") {
      let a = classes.filter((item) => {
        return item.courseID == "alemalema" && item.semesterID == "semester09";
      });
      if (a.length > 0) {
        a.forEach(async (item) => {
          // a is class object array
          //item is single class
          allClasses.push(item);

          if (item.students.length == 0) {
            let StudentsArray = item.students;

            //StudentsArray is students array inside single class item

            StudentsArray.push({
              SID: data.data.userName,
              sName:
                data.data.userDetails.firstName.en +
                " " +
                data.data.userDetails.lastName.en,
              mobileNumber: data.data.userDetails.mobileNumber,
              attendance: [],
            });

            const res5 = await updateClasses({
              classID: item.classID,
              courseID: item.courseID,
              batchNo: item.batchNo,
              maleClassLink: item.maleClassLink,
              femaleClassLink: item.femaleClassLink,
              departmentID: item.departmentID,
              jamatID: item.jamatID,
              semesterID: item.semesterID,
              bookID: item.bookID,
              teacher: item.teacher,
              examQuestion: item.examQuestion,
              students: StudentsArray,
              classStartTime: item.classStartTime,
              classEndTime: item.classEndTime,
              activeStatus: item.activeStatus,
              idValue: item._id,
            });

            if (res5.status == "Alhamdulillah") {
              console.log(
                "Blank - A student record has been created inside " +
                  item.classID
              );
            }
          } else if (
            !item.students.some((item2) => item2.SID == data.data.userName)
          ) {
            let StudentsArray = item.students;

            //StudentsArray is students array inside single class item

            StudentsArray.push({
              SID: data.data.userName,
              sName:
                data.data.userDetails.firstName.en +
                " " +
                data.data.userDetails.lastName.en,
              mobileNumber: data.data.userDetails.mobileNumber,
              attendance: [],
            });

            const res5 = await updateClasses({
              classID: item.classID,
              courseID: item.courseID,
              batchNo: item.batchNo,
              maleClassLink: item.maleClassLink,
              femaleClassLink: item.femaleClassLink,
              departmentID: item.departmentID,
              jamatID: item.jamatID,
              semesterID: item.semesterID,
              bookID: item.bookID,
              teacher: item.teacher,
              examQuestion: item.examQuestion,
              students: StudentsArray,
              classStartTime: item.classStartTime,
              classEndTime: item.classEndTime,
              activeStatus: item.activeStatus,
              idValue: item._id,
            });

            if (res5.status == "Alhamdulillah") {
              console.log(
                "Blank - A student record has been created inside " +
                  item.classID
              );
            }
          }
        });
      }
    }
    if (courseState.alemalema == true && courseState.semester == "semester10") {
      let a = classes.filter((item) => {
        return item.courseID == "alemalema" && item.semesterID == "semester10";
      });
      if (a.length > 0) {
        a.forEach(async (item) => {
          // a is class object array
          //item is single class
          allClasses.push(item);

          if (item.students.length == 0) {
            let StudentsArray = item.students;

            //StudentsArray is students array inside single class item

            StudentsArray.push({
              SID: data.data.userName,
              sName:
                data.data.userDetails.firstName.en +
                " " +
                data.data.userDetails.lastName.en,
              mobileNumber: data.data.userDetails.mobileNumber,
              attendance: [],
            });

            const res5 = await updateClasses({
              classID: item.classID,
              courseID: item.courseID,
              batchNo: item.batchNo,
              maleClassLink: item.maleClassLink,
              femaleClassLink: item.femaleClassLink,
              departmentID: item.departmentID,
              jamatID: item.jamatID,
              semesterID: item.semesterID,
              bookID: item.bookID,
              teacher: item.teacher,
              examQuestion: item.examQuestion,
              students: StudentsArray,
              classStartTime: item.classStartTime,
              classEndTime: item.classEndTime,
              activeStatus: item.activeStatus,
              idValue: item._id,
            });

            if (res5.status == "Alhamdulillah") {
              console.log(
                "Blank - A student record has been created inside " +
                  item.classID
              );
            }
          } else if (
            !item.students.some((item2) => item2.SID == data.data.userName)
          ) {
            let StudentsArray = item.students;

            //StudentsArray is students array inside single class item

            StudentsArray.push({
              SID: data.data.userName,
              sName:
                data.data.userDetails.firstName.en +
                " " +
                data.data.userDetails.lastName.en,
              mobileNumber: data.data.userDetails.mobileNumber,
              attendance: [],
            });

            const res5 = await updateClasses({
              classID: item.classID,
              courseID: item.courseID,
              batchNo: item.batchNo,
              maleClassLink: item.maleClassLink,
              femaleClassLink: item.femaleClassLink,
              departmentID: item.departmentID,
              jamatID: item.jamatID,
              semesterID: item.semesterID,
              bookID: item.bookID,
              teacher: item.teacher,
              examQuestion: item.examQuestion,
              students: StudentsArray,
              classStartTime: item.classStartTime,
              classEndTime: item.classEndTime,
              activeStatus: item.activeStatus,
              idValue: item._id,
            });

            if (res5.status == "Alhamdulillah") {
              console.log(
                "Blank - A student record has been created inside " +
                  item.classID
              );
            }
          }
        });
      }
    }
    if (courseState.alemalema == true && courseState.semester == "semester11") {
      let a = classes.filter((item) => {
        return item.courseID == "alemalema" && item.semesterID == "semester11";
      });
      if (a.length > 0) {
        a.forEach(async (item) => {
          // a is class object array
          //item is single class
          allClasses.push(item);

          if (item.students.length == 0) {
            let StudentsArray = item.students;

            //StudentsArray is students array inside single class item

            StudentsArray.push({
              SID: data.data.userName,
              sName:
                data.data.userDetails.firstName.en +
                " " +
                data.data.userDetails.lastName.en,
              mobileNumber: data.data.userDetails.mobileNumber,
              attendance: [],
            });

            const res5 = await updateClasses({
              classID: item.classID,
              courseID: item.courseID,
              batchNo: item.batchNo,
              maleClassLink: item.maleClassLink,
              femaleClassLink: item.femaleClassLink,
              departmentID: item.departmentID,
              jamatID: item.jamatID,
              semesterID: item.semesterID,
              bookID: item.bookID,
              teacher: item.teacher,
              examQuestion: item.examQuestion,
              students: StudentsArray,
              classStartTime: item.classStartTime,
              classEndTime: item.classEndTime,
              activeStatus: item.activeStatus,
              idValue: item._id,
            });

            if (res5.status == "Alhamdulillah") {
              console.log(
                "Blank - A student record has been created inside " +
                  item.classID
              );
            }
          } else if (
            !item.students.some((item2) => item2.SID == data.data.userName)
          ) {
            let StudentsArray = item.students;

            //StudentsArray is students array inside single class item

            StudentsArray.push({
              SID: data.data.userName,
              sName:
                data.data.userDetails.firstName.en +
                " " +
                data.data.userDetails.lastName.en,
              mobileNumber: data.data.userDetails.mobileNumber,
              attendance: [],
            });

            const res5 = await updateClasses({
              classID: item.classID,
              courseID: item.courseID,
              batchNo: item.batchNo,
              maleClassLink: item.maleClassLink,
              femaleClassLink: item.femaleClassLink,
              departmentID: item.departmentID,
              jamatID: item.jamatID,
              semesterID: item.semesterID,
              bookID: item.bookID,
              teacher: item.teacher,
              examQuestion: item.examQuestion,
              students: StudentsArray,
              classStartTime: item.classStartTime,
              classEndTime: item.classEndTime,
              activeStatus: item.activeStatus,
              idValue: item._id,
            });

            if (res5.status == "Alhamdulillah") {
              console.log(
                "Blank - A student record has been created inside " +
                  item.classID
              );
            }
          }
        });
      }
    }
    if (courseState.alemalema == true && courseState.semester == "semester12") {
      let a = classes.filter((item) => {
        return item.courseID == "alemalema" && item.semesterID == "semester12";
      });
      if (a.length > 0) {
        a.forEach(async (item) => {
          // a is class object array
          //item is single class
          allClasses.push(item);

          if (item.students.length == 0) {
            let StudentsArray = item.students;

            //StudentsArray is students array inside single class item

            StudentsArray.push({
              SID: data.data.userName,
              sName:
                data.data.userDetails.firstName.en +
                " " +
                data.data.userDetails.lastName.en,
              mobileNumber: data.data.userDetails.mobileNumber,
              attendance: [],
            });

            const res5 = await updateClasses({
              classID: item.classID,
              courseID: item.courseID,
              batchNo: item.batchNo,
              maleClassLink: item.maleClassLink,
              femaleClassLink: item.femaleClassLink,
              departmentID: item.departmentID,
              jamatID: item.jamatID,
              semesterID: item.semesterID,
              bookID: item.bookID,
              teacher: item.teacher,
              examQuestion: item.examQuestion,
              students: StudentsArray,
              classStartTime: item.classStartTime,
              classEndTime: item.classEndTime,
              activeStatus: item.activeStatus,
              idValue: item._id,
            });

            if (res5.status == "Alhamdulillah") {
              console.log(
                "Blank - A student record has been created inside " +
                  item.classID
              );
            }
          } else if (
            !item.students.some((item2) => item2.SID == data.data.userName)
          ) {
            let StudentsArray = item.students;

            //StudentsArray is students array inside single class item

            StudentsArray.push({
              SID: data.data.userName,
              sName:
                data.data.userDetails.firstName.en +
                " " +
                data.data.userDetails.lastName.en,
              mobileNumber: data.data.userDetails.mobileNumber,
              attendance: [],
            });

            const res5 = await updateClasses({
              classID: item.classID,
              courseID: item.courseID,
              batchNo: item.batchNo,
              maleClassLink: item.maleClassLink,
              femaleClassLink: item.femaleClassLink,
              departmentID: item.departmentID,
              jamatID: item.jamatID,
              semesterID: item.semesterID,
              bookID: item.bookID,
              teacher: item.teacher,
              examQuestion: item.examQuestion,
              students: StudentsArray,
              classStartTime: item.classStartTime,
              classEndTime: item.classEndTime,
              activeStatus: item.activeStatus,
              idValue: item._id,
            });

            if (res5.status == "Alhamdulillah") {
              console.log(
                "Blank - A student record has been created inside " +
                  item.classID
              );
            }
          }
        });
      }
    }
    if (courseState.alemalema == true && courseState.semester == "semester13") {
      let a = classes.filter((item) => {
        return item.courseID == "alemalema" && item.semesterID == "semester13";
      });
      if (a.length > 0) {
        a.forEach(async (item) => {
          // a is class object array
          //item is single class
          allClasses.push(item);

          if (item.students.length == 0) {
            let StudentsArray = item.students;

            //StudentsArray is students array inside single class item

            StudentsArray.push({
              SID: data.data.userName,
              sName:
                data.data.userDetails.firstName.en +
                " " +
                data.data.userDetails.lastName.en,
              mobileNumber: data.data.userDetails.mobileNumber,
              attendance: [],
            });

            const res5 = await updateClasses({
              classID: item.classID,
              courseID: item.courseID,
              batchNo: item.batchNo,
              maleClassLink: item.maleClassLink,
              femaleClassLink: item.femaleClassLink,
              departmentID: item.departmentID,
              jamatID: item.jamatID,
              semesterID: item.semesterID,
              bookID: item.bookID,
              teacher: item.teacher,
              examQuestion: item.examQuestion,
              students: StudentsArray,
              classStartTime: item.classStartTime,
              classEndTime: item.classEndTime,
              activeStatus: item.activeStatus,
              idValue: item._id,
            });

            if (res5.status == "Alhamdulillah") {
              console.log(
                "Blank - A student record has been created inside " +
                  item.classID
              );
            }
          } else if (
            !item.students.some((item2) => item2.SID == data.data.userName)
          ) {
            let StudentsArray = item.students;

            //StudentsArray is students array inside single class item

            StudentsArray.push({
              SID: data.data.userName,
              sName:
                data.data.userDetails.firstName.en +
                " " +
                data.data.userDetails.lastName.en,
              mobileNumber: data.data.userDetails.mobileNumber,
              attendance: [],
            });

            const res5 = await updateClasses({
              classID: item.classID,
              courseID: item.courseID,
              batchNo: item.batchNo,
              maleClassLink: item.maleClassLink,
              femaleClassLink: item.femaleClassLink,
              departmentID: item.departmentID,
              jamatID: item.jamatID,
              semesterID: item.semesterID,
              bookID: item.bookID,
              teacher: item.teacher,
              examQuestion: item.examQuestion,
              students: StudentsArray,
              classStartTime: item.classStartTime,
              classEndTime: item.classEndTime,
              activeStatus: item.activeStatus,
              idValue: item._id,
            });

            if (res5.status == "Alhamdulillah") {
              console.log(
                "Blank - A student record has been created inside " +
                  item.classID
              );
            }
          }
        });
      }
    }
    if (courseState.alemalema == true && courseState.semester == "semester14") {
      let a = classes.filter((item) => {
        return item.courseID == "alemalema" && item.semesterID == "semester14";
      });
      if (a.length > 0) {
        a.forEach(async (item) => {
          // a is class object array
          //item is single class
          allClasses.push(item);

          if (item.students.length == 0) {
            let StudentsArray = item.students;

            //StudentsArray is students array inside single class item

            StudentsArray.push({
              SID: data.data.userName,
              sName:
                data.data.userDetails.firstName.en +
                " " +
                data.data.userDetails.lastName.en,
              mobileNumber: data.data.userDetails.mobileNumber,
              attendance: [],
            });

            const res5 = await updateClasses({
              classID: item.classID,
              courseID: item.courseID,
              batchNo: item.batchNo,
              maleClassLink: item.maleClassLink,
              femaleClassLink: item.femaleClassLink,
              departmentID: item.departmentID,
              jamatID: item.jamatID,
              semesterID: item.semesterID,
              bookID: item.bookID,
              teacher: item.teacher,
              examQuestion: item.examQuestion,
              students: StudentsArray,
              classStartTime: item.classStartTime,
              classEndTime: item.classEndTime,
              activeStatus: item.activeStatus,
              idValue: item._id,
            });

            if (res5.status == "Alhamdulillah") {
              console.log(
                "Blank - A student record has been created inside " +
                  item.classID
              );
            }
          } else if (
            !item.students.some((item2) => item2.SID == data.data.userName)
          ) {
            let StudentsArray = item.students;

            //StudentsArray is students array inside single class item

            StudentsArray.push({
              SID: data.data.userName,
              sName:
                data.data.userDetails.firstName.en +
                " " +
                data.data.userDetails.lastName.en,
              mobileNumber: data.data.userDetails.mobileNumber,
              attendance: [],
            });

            const res5 = await updateClasses({
              classID: item.classID,
              courseID: item.courseID,
              batchNo: item.batchNo,
              maleClassLink: item.maleClassLink,
              femaleClassLink: item.femaleClassLink,
              departmentID: item.departmentID,
              jamatID: item.jamatID,
              semesterID: item.semesterID,
              bookID: item.bookID,
              teacher: item.teacher,
              examQuestion: item.examQuestion,
              students: StudentsArray,
              classStartTime: item.classStartTime,
              classEndTime: item.classEndTime,
              activeStatus: item.activeStatus,
              idValue: item._id,
            });

            if (res5.status == "Alhamdulillah") {
              console.log(
                "Blank - A student record has been created inside " +
                  item.classID
              );
            }
          }
        });
      }
    }
    if (courseState.alemalema == true && courseState.semester == "semester15") {
      let a = classes.filter((item) => {
        return item.courseID == "alemalema" && item.semesterID == "semester15";
      });
      if (a.length > 0) {
        a.forEach(async (item) => {
          // a is class object array
          //item is single class
          allClasses.push(item);

          if (item.students.length == 0) {
            let StudentsArray = item.students;

            //StudentsArray is students array inside single class item

            StudentsArray.push({
              SID: data.data.userName,
              sName:
                data.data.userDetails.firstName.en +
                " " +
                data.data.userDetails.lastName.en,
              mobileNumber: data.data.userDetails.mobileNumber,
              attendance: [],
            });

            const res5 = await updateClasses({
              classID: item.classID,
              courseID: item.courseID,
              batchNo: item.batchNo,
              maleClassLink: item.maleClassLink,
              femaleClassLink: item.femaleClassLink,
              departmentID: item.departmentID,
              jamatID: item.jamatID,
              semesterID: item.semesterID,
              bookID: item.bookID,
              teacher: item.teacher,
              examQuestion: item.examQuestion,
              students: StudentsArray,
              classStartTime: item.classStartTime,
              classEndTime: item.classEndTime,
              activeStatus: item.activeStatus,
              idValue: item._id,
            });

            if (res5.status == "Alhamdulillah") {
              console.log(
                "Blank - A student record has been created inside " +
                  item.classID
              );
            }
          } else if (
            !item.students.some((item2) => item2.SID == data.data.userName)
          ) {
            let StudentsArray = item.students;

            //StudentsArray is students array inside single class item

            StudentsArray.push({
              SID: data.data.userName,
              sName:
                data.data.userDetails.firstName.en +
                " " +
                data.data.userDetails.lastName.en,
              mobileNumber: data.data.userDetails.mobileNumber,
              attendance: [],
            });

            const res5 = await updateClasses({
              classID: item.classID,
              courseID: item.courseID,
              batchNo: item.batchNo,
              maleClassLink: item.maleClassLink,
              femaleClassLink: item.femaleClassLink,
              departmentID: item.departmentID,
              jamatID: item.jamatID,
              semesterID: item.semesterID,
              bookID: item.bookID,
              teacher: item.teacher,
              examQuestion: item.examQuestion,
              students: StudentsArray,
              classStartTime: item.classStartTime,
              classEndTime: item.classEndTime,
              activeStatus: item.activeStatus,
              idValue: item._id,
            });

            if (res5.status == "Alhamdulillah") {
              console.log(
                "Blank - A student record has been created inside " +
                  item.classID
              );
            }
          }
        });
      }
    }
    if (courseState.alemalema == true && courseState.semester == "semester16") {
      let a = classes.filter((item) => {
        return item.courseID == "alemalema" && item.semesterID == "semester16";
      });
      if (a.length > 0) {
        a.forEach(async (item) => {
          // a is class object array
          //item is single class
          allClasses.push(item);

          if (item.students.length == 0) {
            let StudentsArray = item.students;

            //StudentsArray is students array inside single class item

            StudentsArray.push({
              SID: data.data.userName,
              sName:
                data.data.userDetails.firstName.en +
                " " +
                data.data.userDetails.lastName.en,
              mobileNumber: data.data.userDetails.mobileNumber,
              attendance: [],
            });

            const res5 = await updateClasses({
              classID: item.classID,
              courseID: item.courseID,
              batchNo: item.batchNo,
              maleClassLink: item.maleClassLink,
              femaleClassLink: item.femaleClassLink,
              departmentID: item.departmentID,
              jamatID: item.jamatID,
              semesterID: item.semesterID,
              bookID: item.bookID,
              teacher: item.teacher,
              examQuestion: item.examQuestion,
              students: StudentsArray,
              classStartTime: item.classStartTime,
              classEndTime: item.classEndTime,
              activeStatus: item.activeStatus,
              idValue: item._id,
            });

            if (res5.status == "Alhamdulillah") {
              console.log(
                "Blank - A student record has been created inside " +
                  item.classID
              );
            }
          } else if (
            !item.students.some((item2) => item2.SID == data.data.userName)
          ) {
            let StudentsArray = item.students;

            //StudentsArray is students array inside single class item

            StudentsArray.push({
              SID: data.data.userName,
              sName:
                data.data.userDetails.firstName.en +
                " " +
                data.data.userDetails.lastName.en,
              mobileNumber: data.data.userDetails.mobileNumber,
              attendance: [],
            });

            const res5 = await updateClasses({
              classID: item.classID,
              courseID: item.courseID,
              batchNo: item.batchNo,
              maleClassLink: item.maleClassLink,
              femaleClassLink: item.femaleClassLink,
              departmentID: item.departmentID,
              jamatID: item.jamatID,
              semesterID: item.semesterID,
              bookID: item.bookID,
              teacher: item.teacher,
              examQuestion: item.examQuestion,
              students: StudentsArray,
              classStartTime: item.classStartTime,
              classEndTime: item.classEndTime,
              activeStatus: item.activeStatus,
              idValue: item._id,
            });

            if (res5.status == "Alhamdulillah") {
              console.log(
                "Blank - A student record has been created inside " +
                  item.classID
              );
            }
          }
        });
      }
    }
    if (courseState.alemalema == true && courseState.semester == "semester17") {
      let a = classes.filter((item) => {
        return item.courseID == "alemalema" && item.semesterID == "semester17";
      });
      if (a.length > 0) {
        a.forEach(async (item) => {
          // a is class object array
          //item is single class
          allClasses.push(item);

          if (item.students.length == 0) {
            let StudentsArray = item.students;

            //StudentsArray is students array inside single class item

            StudentsArray.push({
              SID: data.data.userName,
              sName:
                data.data.userDetails.firstName.en +
                " " +
                data.data.userDetails.lastName.en,
              mobileNumber: data.data.userDetails.mobileNumber,
              attendance: [],
            });

            const res5 = await updateClasses({
              classID: item.classID,
              courseID: item.courseID,
              batchNo: item.batchNo,
              maleClassLink: item.maleClassLink,
              femaleClassLink: item.femaleClassLink,
              departmentID: item.departmentID,
              jamatID: item.jamatID,
              semesterID: item.semesterID,
              bookID: item.bookID,
              teacher: item.teacher,
              examQuestion: item.examQuestion,
              students: StudentsArray,
              classStartTime: item.classStartTime,
              classEndTime: item.classEndTime,
              activeStatus: item.activeStatus,
              idValue: item._id,
            });

            if (res5.status == "Alhamdulillah") {
              console.log(
                "Blank - A student record has been created inside " +
                  item.classID
              );
            }
          } else if (
            !item.students.some((item2) => item2.SID == data.data.userName)
          ) {
            let StudentsArray = item.students;

            //StudentsArray is students array inside single class item

            StudentsArray.push({
              SID: data.data.userName,
              sName:
                data.data.userDetails.firstName.en +
                " " +
                data.data.userDetails.lastName.en,
              mobileNumber: data.data.userDetails.mobileNumber,
              attendance: [],
            });

            const res5 = await updateClasses({
              classID: item.classID,
              courseID: item.courseID,
              batchNo: item.batchNo,
              maleClassLink: item.maleClassLink,
              femaleClassLink: item.femaleClassLink,
              departmentID: item.departmentID,
              jamatID: item.jamatID,
              semesterID: item.semesterID,
              bookID: item.bookID,
              teacher: item.teacher,
              examQuestion: item.examQuestion,
              students: StudentsArray,
              classStartTime: item.classStartTime,
              classEndTime: item.classEndTime,
              activeStatus: item.activeStatus,
              idValue: item._id,
            });

            if (res5.status == "Alhamdulillah") {
              console.log(
                "Blank - A student record has been created inside " +
                  item.classID
              );
            }
          }
        });
      }
    }

    if (
      courseState.schoolalemalema == true &&
      courseState.semester == "school-year1semester1"
    ) {
      let a = classes.filter((item) => {
        return (
          item.courseID == "schoolalemalema" &&
          item.semesterID == "school-year1semester1"
        );
      });
      if (a.length > 0) {
        a.forEach(async (item) => {
          // a is class object array
          //item is single class
          allClasses.push(item);

          if (item.students.length == 0) {
            let StudentsArray = item.students;

            //StudentsArray is students array inside single class item

            StudentsArray.push({
              SID: data.data.userName,
              sName:
                data.data.userDetails.firstName.en +
                " " +
                data.data.userDetails.lastName.en,
              mobileNumber: data.data.userDetails.mobileNumber,
              attendance: [],
            });

            const res5 = await updateClasses({
              classID: item.classID,
              courseID: item.courseID,
              batchNo: item.batchNo,
              maleClassLink: item.maleClassLink,
              femaleClassLink: item.femaleClassLink,
              departmentID: item.departmentID,
              jamatID: item.jamatID,
              semesterID: item.semesterID,
              bookID: item.bookID,
              teacher: item.teacher,
              examQuestion: item.examQuestion,
              students: StudentsArray,
              classStartTime: item.classStartTime,
              classEndTime: item.classEndTime,
              activeStatus: item.activeStatus,
              idValue: item._id,
            });

            if (res5.status == "Alhamdulillah") {
              console.log(
                "Blank - A student record has been created inside " +
                  item.classID
              );
            }
          } else if (
            !item.students.some((item2) => item2.SID == data.data.userName)
          ) {
            let StudentsArray = item.students;

            //StudentsArray is students array inside single class item

            StudentsArray.push({
              SID: data.data.userName,
              sName:
                data.data.userDetails.firstName.en +
                " " +
                data.data.userDetails.lastName.en,
              mobileNumber: data.data.userDetails.mobileNumber,
              attendance: [],
            });

            const res5 = await updateClasses({
              classID: item.classID,
              courseID: item.courseID,
              batchNo: item.batchNo,
              maleClassLink: item.maleClassLink,
              femaleClassLink: item.femaleClassLink,
              departmentID: item.departmentID,
              jamatID: item.jamatID,
              semesterID: item.semesterID,
              bookID: item.bookID,
              teacher: item.teacher,
              examQuestion: item.examQuestion,
              students: StudentsArray,
              classStartTime: item.classStartTime,
              classEndTime: item.classEndTime,
              activeStatus: item.activeStatus,
              idValue: item._id,
            });

            if (res5.status == "Alhamdulillah") {
              console.log(
                "Blank - A student record has been created inside " +
                  item.classID
              );
            }
          }
        });
      }
    }
    if (
      courseState.schoolalemalema == true &&
      courseState.semester == "school-year1semester2"
    ) {
      let a = classes.filter((item) => {
        return (
          item.courseID == "schoolalemalema" &&
          item.semesterID == "school-year1semester2"
        );
      });
      if (a.length > 0) {
        a.forEach(async (item) => {
          // a is class object array
          //item is single class
          allClasses.push(item);

          if (item.students.length == 0) {
            let StudentsArray = item.students;

            //StudentsArray is students array inside single class item

            StudentsArray.push({
              SID: data.data.userName,
              sName:
                data.data.userDetails.firstName.en +
                " " +
                data.data.userDetails.lastName.en,
              mobileNumber: data.data.userDetails.mobileNumber,
              attendance: [],
            });

            const res5 = await updateClasses({
              classID: item.classID,
              courseID: item.courseID,
              batchNo: item.batchNo,
              maleClassLink: item.maleClassLink,
              femaleClassLink: item.femaleClassLink,
              departmentID: item.departmentID,
              jamatID: item.jamatID,
              semesterID: item.semesterID,
              bookID: item.bookID,
              teacher: item.teacher,
              examQuestion: item.examQuestion,
              students: StudentsArray,
              classStartTime: item.classStartTime,
              classEndTime: item.classEndTime,
              activeStatus: item.activeStatus,
              idValue: item._id,
            });

            if (res5.status == "Alhamdulillah") {
              console.log(
                "Blank - A student record has been created inside " +
                  item.classID
              );
            }
          } else if (
            !item.students.some((item2) => item2.SID == data.data.userName)
          ) {
            let StudentsArray = item.students;

            //StudentsArray is students array inside single class item

            StudentsArray.push({
              SID: data.data.userName,
              sName:
                data.data.userDetails.firstName.en +
                " " +
                data.data.userDetails.lastName.en,
              mobileNumber: data.data.userDetails.mobileNumber,
              attendance: [],
            });

            const res5 = await updateClasses({
              classID: item.classID,
              courseID: item.courseID,
              batchNo: item.batchNo,
              maleClassLink: item.maleClassLink,
              femaleClassLink: item.femaleClassLink,
              departmentID: item.departmentID,
              jamatID: item.jamatID,
              semesterID: item.semesterID,
              bookID: item.bookID,
              teacher: item.teacher,
              examQuestion: item.examQuestion,
              students: StudentsArray,
              classStartTime: item.classStartTime,
              classEndTime: item.classEndTime,
              activeStatus: item.activeStatus,
              idValue: item._id,
            });

            if (res5.status == "Alhamdulillah") {
              console.log(
                "Blank - A student record has been created inside " +
                  item.classID
              );
            }
          }
        });
      }
    }
    if (
      courseState.schoolalemalema == true &&
      courseState.semester == "school-year1semester3"
    ) {
      let a = classes.filter((item) => {
        return (
          item.courseID == "schoolalemalema" &&
          item.semesterID == "school-year1semester3"
        );
      });
      if (a.length > 0) {
        a.forEach(async (item) => {
          // a is class object array
          //item is single class
          allClasses.push(item);

          if (item.students.length == 0) {
            let StudentsArray = item.students;

            //StudentsArray is students array inside single class item

            StudentsArray.push({
              SID: data.data.userName,
              sName:
                data.data.userDetails.firstName.en +
                " " +
                data.data.userDetails.lastName.en,
              mobileNumber: data.data.userDetails.mobileNumber,
              attendance: [],
            });

            const res5 = await updateClasses({
              classID: item.classID,
              courseID: item.courseID,
              batchNo: item.batchNo,
              maleClassLink: item.maleClassLink,
              femaleClassLink: item.femaleClassLink,
              departmentID: item.departmentID,
              jamatID: item.jamatID,
              semesterID: item.semesterID,
              bookID: item.bookID,
              teacher: item.teacher,
              examQuestion: item.examQuestion,
              students: StudentsArray,
              classStartTime: item.classStartTime,
              classEndTime: item.classEndTime,
              activeStatus: item.activeStatus,
              idValue: item._id,
            });

            if (res5.status == "Alhamdulillah") {
              console.log(
                "Blank - A student record has been created inside " +
                  item.classID
              );
            }
          } else if (
            !item.students.some((item2) => item2.SID == data.data.userName)
          ) {
            let StudentsArray = item.students;

            //StudentsArray is students array inside single class item

            StudentsArray.push({
              SID: data.data.userName,
              sName:
                data.data.userDetails.firstName.en +
                " " +
                data.data.userDetails.lastName.en,
              mobileNumber: data.data.userDetails.mobileNumber,
              attendance: [],
            });

            const res5 = await updateClasses({
              classID: item.classID,
              courseID: item.courseID,
              batchNo: item.batchNo,
              maleClassLink: item.maleClassLink,
              femaleClassLink: item.femaleClassLink,
              departmentID: item.departmentID,
              jamatID: item.jamatID,
              semesterID: item.semesterID,
              bookID: item.bookID,
              teacher: item.teacher,
              examQuestion: item.examQuestion,
              students: StudentsArray,
              classStartTime: item.classStartTime,
              classEndTime: item.classEndTime,
              activeStatus: item.activeStatus,
              idValue: item._id,
            });

            if (res5.status == "Alhamdulillah") {
              console.log(
                "Blank - A student record has been created inside " +
                  item.classID
              );
            }
          }
        });
      }
    }
    if (
      courseState.schoolalemalema == true &&
      courseState.semester == "school-year2semester1"
    ) {
      let a = classes.filter((item) => {
        return (
          item.courseID == "schoolalemalema" &&
          item.semesterID == "school-year2semester1"
        );
      });
      if (a.length > 0) {
        a.forEach(async (item) => {
          // a is class object array
          //item is single class
          allClasses.push(item);

          if (item.students.length == 0) {
            let StudentsArray = item.students;

            //StudentsArray is students array inside single class item

            StudentsArray.push({
              SID: data.data.userName,
              sName:
                data.data.userDetails.firstName.en +
                " " +
                data.data.userDetails.lastName.en,
              mobileNumber: data.data.userDetails.mobileNumber,
              attendance: [],
            });

            const res5 = await updateClasses({
              classID: item.classID,
              courseID: item.courseID,
              batchNo: item.batchNo,
              maleClassLink: item.maleClassLink,
              femaleClassLink: item.femaleClassLink,
              departmentID: item.departmentID,
              jamatID: item.jamatID,
              semesterID: item.semesterID,
              bookID: item.bookID,
              teacher: item.teacher,
              examQuestion: item.examQuestion,
              students: StudentsArray,
              classStartTime: item.classStartTime,
              classEndTime: item.classEndTime,
              activeStatus: item.activeStatus,
              idValue: item._id,
            });

            if (res5.status == "Alhamdulillah") {
              console.log(
                "Blank - A student record has been created inside " +
                  item.classID
              );
            }
          } else if (
            !item.students.some((item2) => item2.SID == data.data.userName)
          ) {
            let StudentsArray = item.students;

            //StudentsArray is students array inside single class item

            StudentsArray.push({
              SID: data.data.userName,
              sName:
                data.data.userDetails.firstName.en +
                " " +
                data.data.userDetails.lastName.en,
              mobileNumber: data.data.userDetails.mobileNumber,
              attendance: [],
            });

            const res5 = await updateClasses({
              classID: item.classID,
              courseID: item.courseID,
              batchNo: item.batchNo,
              maleClassLink: item.maleClassLink,
              femaleClassLink: item.femaleClassLink,
              departmentID: item.departmentID,
              jamatID: item.jamatID,
              semesterID: item.semesterID,
              bookID: item.bookID,
              teacher: item.teacher,
              examQuestion: item.examQuestion,
              students: StudentsArray,
              classStartTime: item.classStartTime,
              classEndTime: item.classEndTime,
              activeStatus: item.activeStatus,
              idValue: item._id,
            });

            if (res5.status == "Alhamdulillah") {
              console.log(
                "Blank - A student record has been created inside " +
                  item.classID
              );
            }
          }
        });
      }
    }
    if (
      courseState.schoolalemalema == true &&
      courseState.semester == "school-year2semester2"
    ) {
      let a = classes.filter((item) => {
        return (
          item.courseID == "schoolalemalema" &&
          item.semesterID == "school-year2semester2"
        );
      });
      if (a.length > 0) {
        a.forEach(async (item) => {
          // a is class object array
          //item is single class
          allClasses.push(item);

          if (item.students.length == 0) {
            let StudentsArray = item.students;

            //StudentsArray is students array inside single class item

            StudentsArray.push({
              SID: data.data.userName,
              sName:
                data.data.userDetails.firstName.en +
                " " +
                data.data.userDetails.lastName.en,
              mobileNumber: data.data.userDetails.mobileNumber,
              attendance: [],
            });

            const res5 = await updateClasses({
              classID: item.classID,
              courseID: item.courseID,
              batchNo: item.batchNo,
              maleClassLink: item.maleClassLink,
              femaleClassLink: item.femaleClassLink,
              departmentID: item.departmentID,
              jamatID: item.jamatID,
              semesterID: item.semesterID,
              bookID: item.bookID,
              teacher: item.teacher,
              examQuestion: item.examQuestion,
              students: StudentsArray,
              classStartTime: item.classStartTime,
              classEndTime: item.classEndTime,
              activeStatus: item.activeStatus,
              idValue: item._id,
            });

            if (res5.status == "Alhamdulillah") {
              console.log(
                "Blank - A student record has been created inside " +
                  item.classID
              );
            }
          } else if (
            !item.students.some((item2) => item2.SID == data.data.userName)
          ) {
            let StudentsArray = item.students;

            //StudentsArray is students array inside single class item

            StudentsArray.push({
              SID: data.data.userName,
              sName:
                data.data.userDetails.firstName.en +
                " " +
                data.data.userDetails.lastName.en,
              mobileNumber: data.data.userDetails.mobileNumber,
              attendance: [],
            });

            const res5 = await updateClasses({
              classID: item.classID,
              courseID: item.courseID,
              batchNo: item.batchNo,
              maleClassLink: item.maleClassLink,
              femaleClassLink: item.femaleClassLink,
              departmentID: item.departmentID,
              jamatID: item.jamatID,
              semesterID: item.semesterID,
              bookID: item.bookID,
              teacher: item.teacher,
              examQuestion: item.examQuestion,
              students: StudentsArray,
              classStartTime: item.classStartTime,
              classEndTime: item.classEndTime,
              activeStatus: item.activeStatus,
              idValue: item._id,
            });

            if (res5.status == "Alhamdulillah") {
              console.log(
                "Blank - A student record has been created inside " +
                  item.classID
              );
            }
          }
        });
      }
    }
    if (
      courseState.schoolalemalema == true &&
      courseState.semester == "school-year2semester3"
    ) {
      let a = classes.filter((item) => {
        return (
          item.courseID == "schoolalemalema" &&
          item.semesterID == "school-year2semester3"
        );
      });
      if (a.length > 0) {
        a.forEach(async (item) => {
          // a is class object array
          //item is single class
          allClasses.push(item);

          if (item.students.length == 0) {
            let StudentsArray = item.students;

            //StudentsArray is students array inside single class item

            StudentsArray.push({
              SID: data.data.userName,
              sName:
                data.data.userDetails.firstName.en +
                " " +
                data.data.userDetails.lastName.en,
              mobileNumber: data.data.userDetails.mobileNumber,
              attendance: [],
            });

            const res5 = await updateClasses({
              classID: item.classID,
              courseID: item.courseID,
              batchNo: item.batchNo,
              maleClassLink: item.maleClassLink,
              femaleClassLink: item.femaleClassLink,
              departmentID: item.departmentID,
              jamatID: item.jamatID,
              semesterID: item.semesterID,
              bookID: item.bookID,
              teacher: item.teacher,
              examQuestion: item.examQuestion,
              students: StudentsArray,
              classStartTime: item.classStartTime,
              classEndTime: item.classEndTime,
              activeStatus: item.activeStatus,
              idValue: item._id,
            });

            if (res5.status == "Alhamdulillah") {
              console.log(
                "Blank - A student record has been created inside " +
                  item.classID
              );
            }
          } else if (
            !item.students.some((item2) => item2.SID == data.data.userName)
          ) {
            let StudentsArray = item.students;

            //StudentsArray is students array inside single class item

            StudentsArray.push({
              SID: data.data.userName,
              sName:
                data.data.userDetails.firstName.en +
                " " +
                data.data.userDetails.lastName.en,
              mobileNumber: data.data.userDetails.mobileNumber,
              attendance: [],
            });

            const res5 = await updateClasses({
              classID: item.classID,
              courseID: item.courseID,
              batchNo: item.batchNo,
              maleClassLink: item.maleClassLink,
              femaleClassLink: item.femaleClassLink,
              departmentID: item.departmentID,
              jamatID: item.jamatID,
              semesterID: item.semesterID,
              bookID: item.bookID,
              teacher: item.teacher,
              examQuestion: item.examQuestion,
              students: StudentsArray,
              classStartTime: item.classStartTime,
              classEndTime: item.classEndTime,
              activeStatus: item.activeStatus,
              idValue: item._id,
            });

            if (res5.status == "Alhamdulillah") {
              console.log(
                "Blank - A student record has been created inside " +
                  item.classID
              );
            }
          }
        });
      }
    }
    if (
      courseState.schoolalemalema == true &&
      courseState.semester == "school-year3semester1"
    ) {
      let a = classes.filter((item) => {
        return (
          item.courseID == "schoolalemalema" &&
          item.semesterID == "school-year3semester1"
        );
      });
      if (a.length > 0) {
        a.forEach(async (item) => {
          // a is class object array
          //item is single class
          allClasses.push(item);

          if (item.students.length == 0) {
            let StudentsArray = item.students;

            //StudentsArray is students array inside single class item

            StudentsArray.push({
              SID: data.data.userName,
              sName:
                data.data.userDetails.firstName.en +
                " " +
                data.data.userDetails.lastName.en,
              mobileNumber: data.data.userDetails.mobileNumber,
              attendance: [],
            });

            const res5 = await updateClasses({
              classID: item.classID,
              courseID: item.courseID,
              batchNo: item.batchNo,
              maleClassLink: item.maleClassLink,
              femaleClassLink: item.femaleClassLink,
              departmentID: item.departmentID,
              jamatID: item.jamatID,
              semesterID: item.semesterID,
              bookID: item.bookID,
              teacher: item.teacher,
              examQuestion: item.examQuestion,
              students: StudentsArray,
              classStartTime: item.classStartTime,
              classEndTime: item.classEndTime,
              activeStatus: item.activeStatus,
              idValue: item._id,
            });

            if (res5.status == "Alhamdulillah") {
              console.log(
                "Blank - A student record has been created inside " +
                  item.classID
              );
            }
          } else if (
            !item.students.some((item2) => item2.SID == data.data.userName)
          ) {
            let StudentsArray = item.students;

            //StudentsArray is students array inside single class item

            StudentsArray.push({
              SID: data.data.userName,
              sName:
                data.data.userDetails.firstName.en +
                " " +
                data.data.userDetails.lastName.en,
              mobileNumber: data.data.userDetails.mobileNumber,
              attendance: [],
            });

            const res5 = await updateClasses({
              classID: item.classID,
              courseID: item.courseID,
              batchNo: item.batchNo,
              maleClassLink: item.maleClassLink,
              femaleClassLink: item.femaleClassLink,
              departmentID: item.departmentID,
              jamatID: item.jamatID,
              semesterID: item.semesterID,
              bookID: item.bookID,
              teacher: item.teacher,
              examQuestion: item.examQuestion,
              students: StudentsArray,
              classStartTime: item.classStartTime,
              classEndTime: item.classEndTime,
              activeStatus: item.activeStatus,
              idValue: item._id,
            });

            if (res5.status == "Alhamdulillah") {
              console.log(
                "Blank - A student record has been created inside " +
                  item.classID
              );
            }
          }
        });
      }
    }
    if (
      courseState.schoolalemalema == true &&
      courseState.semester == "school-year3semester2"
    ) {
      let a = classes.filter((item) => {
        return (
          item.courseID == "schoolalemalema" &&
          item.semesterID == "school-year3semester2"
        );
      });
      if (a.length > 0) {
        a.forEach(async (item) => {
          // a is class object array
          //item is single class
          allClasses.push(item);

          if (item.students.length == 0) {
            let StudentsArray = item.students;

            //StudentsArray is students array inside single class item

            StudentsArray.push({
              SID: data.data.userName,
              sName:
                data.data.userDetails.firstName.en +
                " " +
                data.data.userDetails.lastName.en,
              mobileNumber: data.data.userDetails.mobileNumber,
              attendance: [],
            });

            const res5 = await updateClasses({
              classID: item.classID,
              courseID: item.courseID,
              batchNo: item.batchNo,
              maleClassLink: item.maleClassLink,
              femaleClassLink: item.femaleClassLink,
              departmentID: item.departmentID,
              jamatID: item.jamatID,
              semesterID: item.semesterID,
              bookID: item.bookID,
              teacher: item.teacher,
              examQuestion: item.examQuestion,
              students: StudentsArray,
              classStartTime: item.classStartTime,
              classEndTime: item.classEndTime,
              activeStatus: item.activeStatus,
              idValue: item._id,
            });

            if (res5.status == "Alhamdulillah") {
              console.log(
                "Blank - A student record has been created inside " +
                  item.classID
              );
            }
          } else if (
            !item.students.some((item2) => item2.SID == data.data.userName)
          ) {
            let StudentsArray = item.students;

            //StudentsArray is students array inside single class item

            StudentsArray.push({
              SID: data.data.userName,
              sName:
                data.data.userDetails.firstName.en +
                " " +
                data.data.userDetails.lastName.en,
              mobileNumber: data.data.userDetails.mobileNumber,
              attendance: [],
            });

            const res5 = await updateClasses({
              classID: item.classID,
              courseID: item.courseID,
              batchNo: item.batchNo,
              maleClassLink: item.maleClassLink,
              femaleClassLink: item.femaleClassLink,
              departmentID: item.departmentID,
              jamatID: item.jamatID,
              semesterID: item.semesterID,
              bookID: item.bookID,
              teacher: item.teacher,
              examQuestion: item.examQuestion,
              students: StudentsArray,
              classStartTime: item.classStartTime,
              classEndTime: item.classEndTime,
              activeStatus: item.activeStatus,
              idValue: item._id,
            });

            if (res5.status == "Alhamdulillah") {
              console.log(
                "Blank - A student record has been created inside " +
                  item.classID
              );
            }
          }
        });
      }
    }
    if (
      courseState.schoolalemalema == true &&
      courseState.semester == "school-year3semester3"
    ) {
      let a = classes.filter((item) => {
        return (
          item.courseID == "schoolalemalema" &&
          item.semesterID == "school-year3semester3"
        );
      });
      if (a.length > 0) {
        a.forEach(async (item) => {
          // a is class object array
          //item is single class
          allClasses.push(item);

          if (item.students.length == 0) {
            let StudentsArray = item.students;

            //StudentsArray is students array inside single class item

            StudentsArray.push({
              SID: data.data.userName,
              sName:
                data.data.userDetails.firstName.en +
                " " +
                data.data.userDetails.lastName.en,
              mobileNumber: data.data.userDetails.mobileNumber,
              attendance: [],
            });

            const res5 = await updateClasses({
              classID: item.classID,
              courseID: item.courseID,
              batchNo: item.batchNo,
              maleClassLink: item.maleClassLink,
              femaleClassLink: item.femaleClassLink,
              departmentID: item.departmentID,
              jamatID: item.jamatID,
              semesterID: item.semesterID,
              bookID: item.bookID,
              teacher: item.teacher,
              examQuestion: item.examQuestion,
              students: StudentsArray,
              classStartTime: item.classStartTime,
              classEndTime: item.classEndTime,
              activeStatus: item.activeStatus,
              idValue: item._id,
            });

            if (res5.status == "Alhamdulillah") {
              console.log(
                "Blank - A student record has been created inside " +
                  item.classID
              );
            }
          } else if (
            !item.students.some((item2) => item2.SID == data.data.userName)
          ) {
            let StudentsArray = item.students;

            //StudentsArray is students array inside single class item

            StudentsArray.push({
              SID: data.data.userName,
              sName:
                data.data.userDetails.firstName.en +
                " " +
                data.data.userDetails.lastName.en,
              mobileNumber: data.data.userDetails.mobileNumber,
              attendance: [],
            });

            const res5 = await updateClasses({
              classID: item.classID,
              courseID: item.courseID,
              batchNo: item.batchNo,
              maleClassLink: item.maleClassLink,
              femaleClassLink: item.femaleClassLink,
              departmentID: item.departmentID,
              jamatID: item.jamatID,
              semesterID: item.semesterID,
              bookID: item.bookID,
              teacher: item.teacher,
              examQuestion: item.examQuestion,
              students: StudentsArray,
              classStartTime: item.classStartTime,
              classEndTime: item.classEndTime,
              activeStatus: item.activeStatus,
              idValue: item._id,
            });

            if (res5.status == "Alhamdulillah") {
              console.log(
                "Blank - A student record has been created inside " +
                  item.classID
              );
            }
          }
        });
      }
    }
    if (
      courseState.schoolalemalema == true &&
      courseState.semester == "school-year4semester1"
    ) {
      let a = classes.filter((item) => {
        return (
          item.courseID == "schoolalemalema" &&
          item.semesterID == "school-year4semester1"
        );
      });
      if (a.length > 0) {
        a.forEach(async (item) => {
          // a is class object array
          //item is single class
          allClasses.push(item);

          if (item.students.length == 0) {
            let StudentsArray = item.students;

            //StudentsArray is students array inside single class item

            StudentsArray.push({
              SID: data.data.userName,
              sName:
                data.data.userDetails.firstName.en +
                " " +
                data.data.userDetails.lastName.en,
              mobileNumber: data.data.userDetails.mobileNumber,
              attendance: [],
            });

            const res5 = await updateClasses({
              classID: item.classID,
              courseID: item.courseID,
              batchNo: item.batchNo,
              maleClassLink: item.maleClassLink,
              femaleClassLink: item.femaleClassLink,
              departmentID: item.departmentID,
              jamatID: item.jamatID,
              semesterID: item.semesterID,
              bookID: item.bookID,
              teacher: item.teacher,
              examQuestion: item.examQuestion,
              students: StudentsArray,
              classStartTime: item.classStartTime,
              classEndTime: item.classEndTime,
              activeStatus: item.activeStatus,
              idValue: item._id,
            });

            if (res5.status == "Alhamdulillah") {
              console.log(
                "Blank - A student record has been created inside " +
                  item.classID
              );
            }
          } else if (
            !item.students.some((item2) => item2.SID == data.data.userName)
          ) {
            let StudentsArray = item.students;

            //StudentsArray is students array inside single class item

            StudentsArray.push({
              SID: data.data.userName,
              sName:
                data.data.userDetails.firstName.en +
                " " +
                data.data.userDetails.lastName.en,
              mobileNumber: data.data.userDetails.mobileNumber,
              attendance: [],
            });

            const res5 = await updateClasses({
              classID: item.classID,
              courseID: item.courseID,
              batchNo: item.batchNo,
              maleClassLink: item.maleClassLink,
              femaleClassLink: item.femaleClassLink,
              departmentID: item.departmentID,
              jamatID: item.jamatID,
              semesterID: item.semesterID,
              bookID: item.bookID,
              teacher: item.teacher,
              examQuestion: item.examQuestion,
              students: StudentsArray,
              classStartTime: item.classStartTime,
              classEndTime: item.classEndTime,
              activeStatus: item.activeStatus,
              idValue: item._id,
            });

            if (res5.status == "Alhamdulillah") {
              console.log(
                "Blank - A student record has been created inside " +
                  item.classID
              );
            }
          }
        });
      }
    }
    if (
      courseState.schoolalemalema == true &&
      courseState.semester == "school-year4semester2"
    ) {
      let a = classes.filter((item) => {
        return (
          item.courseID == "schoolalemalema" &&
          item.semesterID == "school-year4semester2"
        );
      });
      if (a.length > 0) {
        a.forEach(async (item) => {
          // a is class object array
          //item is single class
          allClasses.push(item);

          if (item.students.length == 0) {
            let StudentsArray = item.students;

            //StudentsArray is students array inside single class item

            StudentsArray.push({
              SID: data.data.userName,
              sName:
                data.data.userDetails.firstName.en +
                " " +
                data.data.userDetails.lastName.en,
              mobileNumber: data.data.userDetails.mobileNumber,
              attendance: [],
            });

            const res5 = await updateClasses({
              classID: item.classID,
              courseID: item.courseID,
              batchNo: item.batchNo,
              maleClassLink: item.maleClassLink,
              femaleClassLink: item.femaleClassLink,
              departmentID: item.departmentID,
              jamatID: item.jamatID,
              semesterID: item.semesterID,
              bookID: item.bookID,
              teacher: item.teacher,
              examQuestion: item.examQuestion,
              students: StudentsArray,
              classStartTime: item.classStartTime,
              classEndTime: item.classEndTime,
              activeStatus: item.activeStatus,
              idValue: item._id,
            });

            if (res5.status == "Alhamdulillah") {
              console.log(
                "Blank - A student record has been created inside " +
                  item.classID
              );
            }
          } else if (
            !item.students.some((item2) => item2.SID == data.data.userName)
          ) {
            let StudentsArray = item.students;

            //StudentsArray is students array inside single class item

            StudentsArray.push({
              SID: data.data.userName,
              sName:
                data.data.userDetails.firstName.en +
                " " +
                data.data.userDetails.lastName.en,
              mobileNumber: data.data.userDetails.mobileNumber,
              attendance: [],
            });

            const res5 = await updateClasses({
              classID: item.classID,
              courseID: item.courseID,
              batchNo: item.batchNo,
              maleClassLink: item.maleClassLink,
              femaleClassLink: item.femaleClassLink,
              departmentID: item.departmentID,
              jamatID: item.jamatID,
              semesterID: item.semesterID,
              bookID: item.bookID,
              teacher: item.teacher,
              examQuestion: item.examQuestion,
              students: StudentsArray,
              classStartTime: item.classStartTime,
              classEndTime: item.classEndTime,
              activeStatus: item.activeStatus,
              idValue: item._id,
            });

            if (res5.status == "Alhamdulillah") {
              console.log(
                "Blank - A student record has been created inside " +
                  item.classID
              );
            }
          }
        });
      }
    }
    if (
      courseState.schoolalemalema == true &&
      courseState.semester == "school-year4semester3"
    ) {
      let a = classes.filter((item) => {
        return (
          item.courseID == "schoolalemalema" &&
          item.semesterID == "school-year4semester3"
        );
      });
      if (a.length > 0) {
        a.forEach(async (item) => {
          // a is class object array
          //item is single class
          allClasses.push(item);

          if (item.students.length == 0) {
            let StudentsArray = item.students;

            //StudentsArray is students array inside single class item

            StudentsArray.push({
              SID: data.data.userName,
              sName:
                data.data.userDetails.firstName.en +
                " " +
                data.data.userDetails.lastName.en,
              mobileNumber: data.data.userDetails.mobileNumber,
              attendance: [],
            });

            const res5 = await updateClasses({
              classID: item.classID,
              courseID: item.courseID,
              batchNo: item.batchNo,
              maleClassLink: item.maleClassLink,
              femaleClassLink: item.femaleClassLink,
              departmentID: item.departmentID,
              jamatID: item.jamatID,
              semesterID: item.semesterID,
              bookID: item.bookID,
              teacher: item.teacher,
              examQuestion: item.examQuestion,
              students: StudentsArray,
              classStartTime: item.classStartTime,
              classEndTime: item.classEndTime,
              activeStatus: item.activeStatus,
              idValue: item._id,
            });

            if (res5.status == "Alhamdulillah") {
              console.log(
                "Blank - A student record has been created inside " +
                  item.classID
              );
            }
          } else if (
            !item.students.some((item2) => item2.SID == data.data.userName)
          ) {
            let StudentsArray = item.students;

            //StudentsArray is students array inside single class item

            StudentsArray.push({
              SID: data.data.userName,
              sName:
                data.data.userDetails.firstName.en +
                " " +
                data.data.userDetails.lastName.en,
              mobileNumber: data.data.userDetails.mobileNumber,
              attendance: [],
            });

            const res5 = await updateClasses({
              classID: item.classID,
              courseID: item.courseID,
              batchNo: item.batchNo,
              maleClassLink: item.maleClassLink,
              femaleClassLink: item.femaleClassLink,
              departmentID: item.departmentID,
              jamatID: item.jamatID,
              semesterID: item.semesterID,
              bookID: item.bookID,
              teacher: item.teacher,
              examQuestion: item.examQuestion,
              students: StudentsArray,
              classStartTime: item.classStartTime,
              classEndTime: item.classEndTime,
              activeStatus: item.activeStatus,
              idValue: item._id,
            });

            if (res5.status == "Alhamdulillah") {
              console.log(
                "Blank - A student record has been created inside " +
                  item.classID
              );
            }
          }
        });
      }
    }
    if (
      courseState.schoolalemalema == true &&
      courseState.semester == "school-year4semester4"
    ) {
      let a = classes.filter((item) => {
        return (
          item.courseID == "schoolalemalema" &&
          item.semesterID == "school-year4semester4"
        );
      });
      if (a.length > 0) {
        a.forEach(async (item) => {
          // a is class object array
          //item is single class
          allClasses.push(item);

          if (item.students.length == 0) {
            let StudentsArray = item.students;

            //StudentsArray is students array inside single class item

            StudentsArray.push({
              SID: data.data.userName,
              sName:
                data.data.userDetails.firstName.en +
                " " +
                data.data.userDetails.lastName.en,
              mobileNumber: data.data.userDetails.mobileNumber,
              attendance: [],
            });

            const res5 = await updateClasses({
              classID: item.classID,
              courseID: item.courseID,
              batchNo: item.batchNo,
              maleClassLink: item.maleClassLink,
              femaleClassLink: item.femaleClassLink,
              departmentID: item.departmentID,
              jamatID: item.jamatID,
              semesterID: item.semesterID,
              bookID: item.bookID,
              teacher: item.teacher,
              examQuestion: item.examQuestion,
              students: StudentsArray,
              classStartTime: item.classStartTime,
              classEndTime: item.classEndTime,
              activeStatus: item.activeStatus,
              idValue: item._id,
            });

            if (res5.status == "Alhamdulillah") {
              console.log(
                "Blank - A student record has been created inside " +
                  item.classID
              );
            }
          } else if (
            !item.students.some((item2) => item2.SID == data.data.userName)
          ) {
            let StudentsArray = item.students;

            //StudentsArray is students array inside single class item

            StudentsArray.push({
              SID: data.data.userName,
              sName:
                data.data.userDetails.firstName.en +
                " " +
                data.data.userDetails.lastName.en,
              mobileNumber: data.data.userDetails.mobileNumber,
              attendance: [],
            });

            const res5 = await updateClasses({
              classID: item.classID,
              courseID: item.courseID,
              batchNo: item.batchNo,
              maleClassLink: item.maleClassLink,
              femaleClassLink: item.femaleClassLink,
              departmentID: item.departmentID,
              jamatID: item.jamatID,
              semesterID: item.semesterID,
              bookID: item.bookID,
              teacher: item.teacher,
              examQuestion: item.examQuestion,
              students: StudentsArray,
              classStartTime: item.classStartTime,
              classEndTime: item.classEndTime,
              activeStatus: item.activeStatus,
              idValue: item._id,
            });

            if (res5.status == "Alhamdulillah") {
              console.log(
                "Blank - A student record has been created inside " +
                  item.classID
              );
            }
          }
        });
      }
    }
    if (
      courseState.prealemalema == true &&
      courseState.semester == "pre-year1semester1"
    ) {
      let a = classes.filter((item) => {
        return (
          item.courseID == "prealemalema" &&
          item.semesterID == "pre-year1semester1"
        );
      });
      if (a.length > 0) {
        a.forEach(async (item) => {
          // a is class object array
          //item is single class
          allClasses.push(item);

          if (item.students.length == 0) {
            let StudentsArray = item.students;

            //StudentsArray is students array inside single class item

            StudentsArray.push({
              SID: data.data.userName,
              sName:
                data.data.userDetails.firstName.en +
                " " +
                data.data.userDetails.lastName.en,
              mobileNumber: data.data.userDetails.mobileNumber,
              attendance: [],
            });

            const res5 = await updateClasses({
              classID: item.classID,
              courseID: item.courseID,
              batchNo: item.batchNo,
              maleClassLink: item.maleClassLink,
              femaleClassLink: item.femaleClassLink,
              departmentID: item.departmentID,
              jamatID: item.jamatID,
              semesterID: item.semesterID,
              bookID: item.bookID,
              teacher: item.teacher,
              examQuestion: item.examQuestion,
              students: StudentsArray,
              classStartTime: item.classStartTime,
              classEndTime: item.classEndTime,
              activeStatus: item.activeStatus,
              idValue: item._id,
            });

            if (res5.status == "Alhamdulillah") {
              console.log(
                "Blank - A student record has been created inside " +
                  item.classID
              );
            }
          } else if (
            !item.students.some((item2) => item2.SID == data.data.userName)
          ) {
            let StudentsArray = item.students;

            //StudentsArray is students array inside single class item

            StudentsArray.push({
              SID: data.data.userName,
              sName:
                data.data.userDetails.firstName.en +
                " " +
                data.data.userDetails.lastName.en,
              mobileNumber: data.data.userDetails.mobileNumber,
              attendance: [],
            });

            const res5 = await updateClasses({
              classID: item.classID,
              courseID: item.courseID,
              batchNo: item.batchNo,
              maleClassLink: item.maleClassLink,
              femaleClassLink: item.femaleClassLink,
              departmentID: item.departmentID,
              jamatID: item.jamatID,
              semesterID: item.semesterID,
              bookID: item.bookID,
              teacher: item.teacher,
              examQuestion: item.examQuestion,
              students: StudentsArray,
              classStartTime: item.classStartTime,
              classEndTime: item.classEndTime,
              activeStatus: item.activeStatus,
              idValue: item._id,
            });

            if (res5.status == "Alhamdulillah") {
              console.log(
                "Blank - A student record has been created inside " +
                  item.classID
              );
            }
          }
        });
      }
    }
    if (
      courseState.prealemalema == true &&
      courseState.semester == "pre-year1semester2"
    ) {
      let a = classes.filter((item) => {
        return (
          item.courseID == "prealemalema" &&
          item.semesterID == "pre-year1semester2"
        );
      });
      if (a.length > 0) {
        a.forEach(async (item) => {
          // a is class object array
          //item is single class
          allClasses.push(item);

          if (item.students.length == 0) {
            let StudentsArray = item.students;

            //StudentsArray is students array inside single class item

            StudentsArray.push({
              SID: data.data.userName,
              sName:
                data.data.userDetails.firstName.en +
                " " +
                data.data.userDetails.lastName.en,
              mobileNumber: data.data.userDetails.mobileNumber,
              attendance: [],
            });

            const res5 = await updateClasses({
              classID: item.classID,
              courseID: item.courseID,
              batchNo: item.batchNo,
              maleClassLink: item.maleClassLink,
              femaleClassLink: item.femaleClassLink,
              departmentID: item.departmentID,
              jamatID: item.jamatID,
              semesterID: item.semesterID,
              bookID: item.bookID,
              teacher: item.teacher,
              examQuestion: item.examQuestion,
              students: StudentsArray,
              classStartTime: item.classStartTime,
              classEndTime: item.classEndTime,
              activeStatus: item.activeStatus,
              idValue: item._id,
            });

            if (res5.status == "Alhamdulillah") {
              console.log(
                "Blank - A student record has been created inside " +
                  item.classID
              );
            }
          } else if (
            !item.students.some((item2) => item2.SID == data.data.userName)
          ) {
            let StudentsArray = item.students;

            //StudentsArray is students array inside single class item

            StudentsArray.push({
              SID: data.data.userName,
              sName:
                data.data.userDetails.firstName.en +
                " " +
                data.data.userDetails.lastName.en,
              mobileNumber: data.data.userDetails.mobileNumber,
              attendance: [],
            });

            const res5 = await updateClasses({
              classID: item.classID,
              courseID: item.courseID,
              batchNo: item.batchNo,
              maleClassLink: item.maleClassLink,
              femaleClassLink: item.femaleClassLink,
              departmentID: item.departmentID,
              jamatID: item.jamatID,
              semesterID: item.semesterID,
              bookID: item.bookID,
              teacher: item.teacher,
              examQuestion: item.examQuestion,
              students: StudentsArray,
              classStartTime: item.classStartTime,
              classEndTime: item.classEndTime,
              activeStatus: item.activeStatus,
              idValue: item._id,
            });

            if (res5.status == "Alhamdulillah") {
              console.log(
                "Blank - A student record has been created inside " +
                  item.classID
              );
            }
          }
        });
      }
    }
    if (
      courseState.prealemalema == true &&
      courseState.semester == "pre-year1semester3"
    ) {
      let a = classes.filter((item) => {
        return (
          item.courseID == "prealemalema" &&
          item.semesterID == "pre-year1semester3"
        );
      });
      if (a.length > 0) {
        a.forEach(async (item) => {
          // a is class object array
          //item is single class
          allClasses.push(item);

          if (item.students.length == 0) {
            let StudentsArray = item.students;

            //StudentsArray is students array inside single class item

            StudentsArray.push({
              SID: data.data.userName,
              sName:
                data.data.userDetails.firstName.en +
                " " +
                data.data.userDetails.lastName.en,
              mobileNumber: data.data.userDetails.mobileNumber,
              attendance: [],
            });

            const res5 = await updateClasses({
              classID: item.classID,
              courseID: item.courseID,
              batchNo: item.batchNo,
              maleClassLink: item.maleClassLink,
              femaleClassLink: item.femaleClassLink,
              departmentID: item.departmentID,
              jamatID: item.jamatID,
              semesterID: item.semesterID,
              bookID: item.bookID,
              teacher: item.teacher,
              examQuestion: item.examQuestion,
              students: StudentsArray,
              classStartTime: item.classStartTime,
              classEndTime: item.classEndTime,
              activeStatus: item.activeStatus,
              idValue: item._id,
            });

            if (res5.status == "Alhamdulillah") {
              console.log(
                "Blank - A student record has been created inside " +
                  item.classID
              );
            }
          } else if (
            !item.students.some((item2) => item2.SID == data.data.userName)
          ) {
            let StudentsArray = item.students;

            //StudentsArray is students array inside single class item

            StudentsArray.push({
              SID: data.data.userName,
              sName:
                data.data.userDetails.firstName.en +
                " " +
                data.data.userDetails.lastName.en,
              mobileNumber: data.data.userDetails.mobileNumber,
              attendance: [],
            });

            const res5 = await updateClasses({
              classID: item.classID,
              courseID: item.courseID,
              batchNo: item.batchNo,
              maleClassLink: item.maleClassLink,
              femaleClassLink: item.femaleClassLink,
              departmentID: item.departmentID,
              jamatID: item.jamatID,
              semesterID: item.semesterID,
              bookID: item.bookID,
              teacher: item.teacher,
              examQuestion: item.examQuestion,
              students: StudentsArray,
              classStartTime: item.classStartTime,
              classEndTime: item.classEndTime,
              activeStatus: item.activeStatus,
              idValue: item._id,
            });

            if (res5.status == "Alhamdulillah") {
              console.log(
                "Blank - A student record has been created inside " +
                  item.classID
              );
            }
          }
        });
      }
    }
    if (
      courseState.prealemalema == true &&
      courseState.semester == "pre-year2semester1"
    ) {
      let a = classes.filter((item) => {
        return (
          item.courseID == "alemalema" &&
          item.semesterID == "pre-year2semester1"
        );
      });
      if (a.length > 0) {
        a.forEach(async (item) => {
          // a is class object array
          //item is single class
          allClasses.push(item);

          if (item.students.length == 0) {
            let StudentsArray = item.students;

            //StudentsArray is students array inside single class item

            StudentsArray.push({
              SID: data.data.userName,
              sName:
                data.data.userDetails.firstName.en +
                " " +
                data.data.userDetails.lastName.en,
              mobileNumber: data.data.userDetails.mobileNumber,
              attendance: [],
            });

            const res5 = await updateClasses({
              classID: item.classID,
              courseID: item.courseID,
              batchNo: item.batchNo,
              maleClassLink: item.maleClassLink,
              femaleClassLink: item.femaleClassLink,
              departmentID: item.departmentID,
              jamatID: item.jamatID,
              semesterID: item.semesterID,
              bookID: item.bookID,
              teacher: item.teacher,
              examQuestion: item.examQuestion,
              students: StudentsArray,
              classStartTime: item.classStartTime,
              classEndTime: item.classEndTime,
              activeStatus: item.activeStatus,
              idValue: item._id,
            });

            if (res5.status == "Alhamdulillah") {
              console.log(
                "Blank - A student record has been created inside " +
                  item.classID
              );
            }
          } else if (
            !item.students.some((item2) => item2.SID == data.data.userName)
          ) {
            let StudentsArray = item.students;

            //StudentsArray is students array inside single class item

            StudentsArray.push({
              SID: data.data.userName,
              sName:
                data.data.userDetails.firstName.en +
                " " +
                data.data.userDetails.lastName.en,
              mobileNumber: data.data.userDetails.mobileNumber,
              attendance: [],
            });

            const res5 = await updateClasses({
              classID: item.classID,
              courseID: item.courseID,
              batchNo: item.batchNo,
              maleClassLink: item.maleClassLink,
              femaleClassLink: item.femaleClassLink,
              departmentID: item.departmentID,
              jamatID: item.jamatID,
              semesterID: item.semesterID,
              bookID: item.bookID,
              teacher: item.teacher,
              examQuestion: item.examQuestion,
              students: StudentsArray,
              classStartTime: item.classStartTime,
              classEndTime: item.classEndTime,
              activeStatus: item.activeStatus,
              idValue: item._id,
            });

            if (res5.status == "Alhamdulillah") {
              console.log(
                "Blank - A student record has been created inside " +
                  item.classID
              );
            }
          }
        });
      }
    }
    if (
      courseState.prealemalema == true &&
      courseState.semester == "pre-year2semester2"
    ) {
      let a = classes.filter((item) => {
        return (
          item.courseID == "prealemalema" &&
          item.semesterID == "pre-year2semester2"
        );
      });
      if (a.length > 0) {
        a.forEach(async (item) => {
          // a is class object array
          //item is single class
          allClasses.push(item);

          if (item.students.length == 0) {
            let StudentsArray = item.students;

            //StudentsArray is students array inside single class item

            StudentsArray.push({
              SID: data.data.userName,
              sName:
                data.data.userDetails.firstName.en +
                " " +
                data.data.userDetails.lastName.en,
              mobileNumber: data.data.userDetails.mobileNumber,
              attendance: [],
            });

            const res5 = await updateClasses({
              classID: item.classID,
              courseID: item.courseID,
              batchNo: item.batchNo,
              maleClassLink: item.maleClassLink,
              femaleClassLink: item.femaleClassLink,
              departmentID: item.departmentID,
              jamatID: item.jamatID,
              semesterID: item.semesterID,
              bookID: item.bookID,
              teacher: item.teacher,
              examQuestion: item.examQuestion,
              students: StudentsArray,
              classStartTime: item.classStartTime,
              classEndTime: item.classEndTime,
              activeStatus: item.activeStatus,
              idValue: item._id,
            });

            if (res5.status == "Alhamdulillah") {
              console.log(
                "Blank - A student record has been created inside " +
                  item.classID
              );
            }
          } else if (
            !item.students.some((item2) => item2.SID == data.data.userName)
          ) {
            let StudentsArray = item.students;

            //StudentsArray is students array inside single class item

            StudentsArray.push({
              SID: data.data.userName,
              sName:
                data.data.userDetails.firstName.en +
                " " +
                data.data.userDetails.lastName.en,
              mobileNumber: data.data.userDetails.mobileNumber,
              attendance: [],
            });

            const res5 = await updateClasses({
              classID: item.classID,
              courseID: item.courseID,
              batchNo: item.batchNo,
              maleClassLink: item.maleClassLink,
              femaleClassLink: item.femaleClassLink,
              departmentID: item.departmentID,
              jamatID: item.jamatID,
              semesterID: item.semesterID,
              bookID: item.bookID,
              teacher: item.teacher,
              examQuestion: item.examQuestion,
              students: StudentsArray,
              classStartTime: item.classStartTime,
              classEndTime: item.classEndTime,
              activeStatus: item.activeStatus,
              idValue: item._id,
            });

            if (res5.status == "Alhamdulillah") {
              console.log(
                "Blank - A student record has been created inside " +
                  item.classID
              );
            }
          }
        });
      }
    }
    if (
      courseState.prealemalema == true &&
      courseState.semester == "pre-year2semester3"
    ) {
      let a = classes.filter((item) => {
        return (
          item.courseID == "prealemalema" &&
          item.semesterID == "pre-year2semester3"
        );
      });
      if (a.length > 0) {
        a.forEach(async (item) => {
          // a is class object array
          //item is single class
          allClasses.push(item);

          if (item.students.length == 0) {
            let StudentsArray = item.students;

            //StudentsArray is students array inside single class item

            StudentsArray.push({
              SID: data.data.userName,
              sName:
                data.data.userDetails.firstName.en +
                " " +
                data.data.userDetails.lastName.en,
              mobileNumber: data.data.userDetails.mobileNumber,
              attendance: [],
            });

            const res5 = await updateClasses({
              classID: item.classID,
              courseID: item.courseID,
              batchNo: item.batchNo,
              maleClassLink: item.maleClassLink,
              femaleClassLink: item.femaleClassLink,
              departmentID: item.departmentID,
              jamatID: item.jamatID,
              semesterID: item.semesterID,
              bookID: item.bookID,
              teacher: item.teacher,
              examQuestion: item.examQuestion,
              students: StudentsArray,
              classStartTime: item.classStartTime,
              classEndTime: item.classEndTime,
              activeStatus: item.activeStatus,
              idValue: item._id,
            });

            if (res5.status == "Alhamdulillah") {
              console.log(
                "Blank - A student record has been created inside " +
                  item.classID
              );
            }
          } else if (
            !item.students.some((item2) => item2.SID == data.data.userName)
          ) {
            let StudentsArray = item.students;

            //StudentsArray is students array inside single class item

            StudentsArray.push({
              SID: data.data.userName,
              sName:
                data.data.userDetails.firstName.en +
                " " +
                data.data.userDetails.lastName.en,
              mobileNumber: data.data.userDetails.mobileNumber,
              attendance: [],
            });

            const res5 = await updateClasses({
              classID: item.classID,
              courseID: item.courseID,
              batchNo: item.batchNo,
              maleClassLink: item.maleClassLink,
              femaleClassLink: item.femaleClassLink,
              departmentID: item.departmentID,
              jamatID: item.jamatID,
              semesterID: item.semesterID,
              bookID: item.bookID,
              teacher: item.teacher,
              examQuestion: item.examQuestion,
              students: StudentsArray,
              classStartTime: item.classStartTime,
              classEndTime: item.classEndTime,
              activeStatus: item.activeStatus,
              idValue: item._id,
            });

            if (res5.status == "Alhamdulillah") {
              console.log(
                "Blank - A student record has been created inside " +
                  item.classID
              );
            }
          }
        });
      }
    }
    if (
      courseState.prealemalema == true &&
      courseState.semester == "pre-year3semester1"
    ) {
      let a = classes.filter((item) => {
        return (
          item.courseID == "prealemalema" &&
          item.semesterID == "pre-year3semester1"
        );
      });
      if (a.length > 0) {
        a.forEach(async (item) => {
          // a is class object array
          //item is single class
          allClasses.push(item);

          if (item.students.length == 0) {
            let StudentsArray = item.students;

            //StudentsArray is students array inside single class item

            StudentsArray.push({
              SID: data.data.userName,
              sName:
                data.data.userDetails.firstName.en +
                " " +
                data.data.userDetails.lastName.en,
              mobileNumber: data.data.userDetails.mobileNumber,
              attendance: [],
            });

            const res5 = await updateClasses({
              classID: item.classID,
              courseID: item.courseID,
              batchNo: item.batchNo,
              maleClassLink: item.maleClassLink,
              femaleClassLink: item.femaleClassLink,
              departmentID: item.departmentID,
              jamatID: item.jamatID,
              semesterID: item.semesterID,
              bookID: item.bookID,
              teacher: item.teacher,
              examQuestion: item.examQuestion,
              students: StudentsArray,
              classStartTime: item.classStartTime,
              classEndTime: item.classEndTime,
              activeStatus: item.activeStatus,
              idValue: item._id,
            });

            if (res5.status == "Alhamdulillah") {
              console.log(
                "Blank - A student record has been created inside " +
                  item.classID
              );
            }
          } else if (
            !item.students.some((item2) => item2.SID == data.data.userName)
          ) {
            let StudentsArray = item.students;

            //StudentsArray is students array inside single class item

            StudentsArray.push({
              SID: data.data.userName,
              sName:
                data.data.userDetails.firstName.en +
                " " +
                data.data.userDetails.lastName.en,
              mobileNumber: data.data.userDetails.mobileNumber,
              attendance: [],
            });

            const res5 = await updateClasses({
              classID: item.classID,
              courseID: item.courseID,
              batchNo: item.batchNo,
              maleClassLink: item.maleClassLink,
              femaleClassLink: item.femaleClassLink,
              departmentID: item.departmentID,
              jamatID: item.jamatID,
              semesterID: item.semesterID,
              bookID: item.bookID,
              teacher: item.teacher,
              examQuestion: item.examQuestion,
              students: StudentsArray,
              classStartTime: item.classStartTime,
              classEndTime: item.classEndTime,
              activeStatus: item.activeStatus,
              idValue: item._id,
            });

            if (res5.status == "Alhamdulillah") {
              console.log(
                "Blank - A student record has been created inside " +
                  item.classID
              );
            }
          }
        });
      }
    }
    if (
      courseState.prealemalema == true &&
      courseState.semester == "pre-year3semester2"
    ) {
      let a = classes.filter((item) => {
        return (
          item.courseID == "prealemalema" &&
          item.semesterID == "pre-year3semester2"
        );
      });
      if (a.length > 0) {
        a.forEach(async (item) => {
          // a is class object array
          //item is single class
          allClasses.push(item);

          if (item.students.length == 0) {
            let StudentsArray = item.students;

            //StudentsArray is students array inside single class item

            StudentsArray.push({
              SID: data.data.userName,
              sName:
                data.data.userDetails.firstName.en +
                " " +
                data.data.userDetails.lastName.en,
              mobileNumber: data.data.userDetails.mobileNumber,
              attendance: [],
            });

            const res5 = await updateClasses({
              classID: item.classID,
              courseID: item.courseID,
              batchNo: item.batchNo,
              maleClassLink: item.maleClassLink,
              femaleClassLink: item.femaleClassLink,
              departmentID: item.departmentID,
              jamatID: item.jamatID,
              semesterID: item.semesterID,
              bookID: item.bookID,
              teacher: item.teacher,
              examQuestion: item.examQuestion,
              students: StudentsArray,
              classStartTime: item.classStartTime,
              classEndTime: item.classEndTime,
              activeStatus: item.activeStatus,
              idValue: item._id,
            });

            if (res5.status == "Alhamdulillah") {
              console.log(
                "Blank - A student record has been created inside " +
                  item.classID
              );
            }
          } else if (
            !item.students.some((item2) => item2.SID == data.data.userName)
          ) {
            let StudentsArray = item.students;

            //StudentsArray is students array inside single class item

            StudentsArray.push({
              SID: data.data.userName,
              sName:
                data.data.userDetails.firstName.en +
                " " +
                data.data.userDetails.lastName.en,
              mobileNumber: data.data.userDetails.mobileNumber,
              attendance: [],
            });

            const res5 = await updateClasses({
              classID: item.classID,
              courseID: item.courseID,
              batchNo: item.batchNo,
              maleClassLink: item.maleClassLink,
              femaleClassLink: item.femaleClassLink,
              departmentID: item.departmentID,
              jamatID: item.jamatID,
              semesterID: item.semesterID,
              bookID: item.bookID,
              teacher: item.teacher,
              examQuestion: item.examQuestion,
              students: StudentsArray,
              classStartTime: item.classStartTime,
              classEndTime: item.classEndTime,
              activeStatus: item.activeStatus,
              idValue: item._id,
            });

            if (res5.status == "Alhamdulillah") {
              console.log(
                "Blank - A student record has been created inside " +
                  item.classID
              );
            }
          }
        });
      }
    }
    if (
      courseState.prealemalema == true &&
      courseState.semester == "pre-year3semester3"
    ) {
      let a = classes.filter((item) => {
        return (
          item.courseID == "prealemalema" &&
          item.semesterID == "pre-year3semester3"
        );
      });
      if (a.length > 0) {
        a.forEach(async (item) => {
          // a is class object array
          //item is single class
          allClasses.push(item);

          if (item.students.length == 0) {
            let StudentsArray = item.students;

            //StudentsArray is students array inside single class item

            StudentsArray.push({
              SID: data.data.userName,
              sName:
                data.data.userDetails.firstName.en +
                " " +
                data.data.userDetails.lastName.en,
              mobileNumber: data.data.userDetails.mobileNumber,
              attendance: [],
            });

            const res5 = await updateClasses({
              classID: item.classID,
              courseID: item.courseID,
              batchNo: item.batchNo,
              maleClassLink: item.maleClassLink,
              femaleClassLink: item.femaleClassLink,
              departmentID: item.departmentID,
              jamatID: item.jamatID,
              semesterID: item.semesterID,
              bookID: item.bookID,
              teacher: item.teacher,
              examQuestion: item.examQuestion,
              students: StudentsArray,
              classStartTime: item.classStartTime,
              classEndTime: item.classEndTime,
              activeStatus: item.activeStatus,
              idValue: item._id,
            });

            if (res5.status == "Alhamdulillah") {
              console.log(
                "Blank - A student record has been created inside " +
                  item.classID
              );
            }
          } else if (
            !item.students.some((item2) => item2.SID == data.data.userName)
          ) {
            let StudentsArray = item.students;

            //StudentsArray is students array inside single class item

            StudentsArray.push({
              SID: data.data.userName,
              sName:
                data.data.userDetails.firstName.en +
                " " +
                data.data.userDetails.lastName.en,
              mobileNumber: data.data.userDetails.mobileNumber,
              attendance: [],
            });

            const res5 = await updateClasses({
              classID: item.classID,
              courseID: item.courseID,
              batchNo: item.batchNo,
              maleClassLink: item.maleClassLink,
              femaleClassLink: item.femaleClassLink,
              departmentID: item.departmentID,
              jamatID: item.jamatID,
              semesterID: item.semesterID,
              bookID: item.bookID,
              teacher: item.teacher,
              examQuestion: item.examQuestion,
              students: StudentsArray,
              classStartTime: item.classStartTime,
              classEndTime: item.classEndTime,
              activeStatus: item.activeStatus,
              idValue: item._id,
            });

            if (res5.status == "Alhamdulillah") {
              console.log(
                "Blank - A student record has been created inside " +
                  item.classID
              );
            }
          }
        });
      }
    }

    if (courseState.abacus_student == true) {
      let a = classes.filter((item) => {
        return item.courseID == "abacus_student";
      });

      if (a.length > 0) {
        a.forEach(async (item) => {
          allClasses.push(item);
          if (item.students.length == 0) {
            let StudentsArray = item.students;

            //StudentsArray is students array inside single class item

            StudentsArray.push({
              SID: data.data.userName,
              sName:
                data.data.userDetails.firstName.en +
                " " +
                data.data.userDetails.lastName.en,
              mobileNumber: data.data.userDetails.mobileNumber,
              attendance: [],
            });

            const res5 = await updateClasses({
              classID: item.classID,
              courseID: item.courseID,
              batchNo: item.batchNo,
              maleClassLink: item.maleClassLink,
              femaleClassLink: item.femaleClassLink,
              departmentID: item.departmentID,
              jamatID: item.jamatID,
              semesterID: item.semesterID,
              bookID: item.bookID,
              teacher: item.teacher,
              examQuestion: item.examQuestion,
              students: StudentsArray,
              classStartTime: item.classStartTime,
              classEndTime: item.classEndTime,
              activeStatus: item.activeStatus,
              idValue: item._id,
            });

            if (res5.status == "Alhamdulillah") {
              console.log(
                "Blank - A student record has been created inside " +
                  item.classID
              );
            }
          } else if (
            !item.students.some((item2) => item2.SID == data.data.userName)
          ) {
            let StudentsArray = item.students;

            //StudentsArray is students array inside single class item

            StudentsArray.push({
              SID: data.data.userName,
              sName:
                data.data.userDetails.firstName.en +
                " " +
                data.data.userDetails.lastName.en,
              mobileNumber: data.data.userDetails.mobileNumber,
              attendance: [],
            });

            const res5 = await updateClasses({
              classID: item.classID,
              courseID: item.courseID,
              batchNo: item.batchNo,
              maleClassLink: item.maleClassLink,
              femaleClassLink: item.femaleClassLink,
              departmentID: item.departmentID,
              jamatID: item.jamatID,
              semesterID: item.semesterID,
              bookID: item.bookID,
              teacher: item.teacher,
              examQuestion: item.examQuestion,
              students: StudentsArray,
              classStartTime: item.classStartTime,
              classEndTime: item.classEndTime,
              activeStatus: item.activeStatus,
              idValue: item._id,
            });

            if (res5.status == "Alhamdulillah") {
              console.log(
                "Blank - A student record has been created inside " +
                  item.classID
              );
            }
          }
        });
      }
    }

    if (courseState.shishumaktab == true) {
      let a = classes.filter((item) => {
        return item.courseID == "shishumaktab";
      });

      if (a.length > 0) {
        a.forEach(async (item) => {
          allClasses.push(item);
          if (item.students.length == 0) {
            let StudentsArray = item.students;

            //StudentsArray is students array inside single class item

            StudentsArray.push({
              SID: data.data.userName,
              sName:
                data.data.userDetails.firstName.en +
                " " +
                data.data.userDetails.lastName.en,
              mobileNumber: data.data.userDetails.mobileNumber,
              attendance: [],
            });

            const res5 = await updateClasses({
              classID: item.classID,
              courseID: item.courseID,
              batchNo: item.batchNo,
              maleClassLink: item.maleClassLink,
              femaleClassLink: item.femaleClassLink,
              departmentID: item.departmentID,
              jamatID: item.jamatID,
              semesterID: item.semesterID,
              bookID: item.bookID,
              teacher: item.teacher,
              examQuestion: item.examQuestion,
              students: StudentsArray,
              classStartTime: item.classStartTime,
              classEndTime: item.classEndTime,
              activeStatus: item.activeStatus,
              idValue: item._id,
            });

            if (res5.status == "Alhamdulillah") {
              console.log(
                "Blank - A student record has been created inside " +
                  item.classID
              );
            }
          } else if (
            !item.students.some((item2) => item2.SID == data.data.userName)
          ) {
            let StudentsArray = item.students;

            //StudentsArray is students array inside single class item

            StudentsArray.push({
              SID: data.data.userName,
              sName:
                data.data.userDetails.firstName.en +
                " " +
                data.data.userDetails.lastName.en,
              mobileNumber: data.data.userDetails.mobileNumber,
              attendance: [],
            });

            const res5 = await updateClasses({
              classID: item.classID,
              courseID: item.courseID,
              batchNo: item.batchNo,
              maleClassLink: item.maleClassLink,
              femaleClassLink: item.femaleClassLink,
              departmentID: item.departmentID,
              jamatID: item.jamatID,
              semesterID: item.semesterID,
              bookID: item.bookID,
              teacher: item.teacher,
              examQuestion: item.examQuestion,
              students: StudentsArray,
              classStartTime: item.classStartTime,
              classEndTime: item.classEndTime,
              activeStatus: item.activeStatus,
              idValue: item._id,
            });

            if (res5.status == "Alhamdulillah") {
              console.log(
                "Blank - A student record has been created inside " +
                  item.classID
              );
            }
          }
        });
      }
    }

    if (courseState.farzeayinclass == true) {
      let a = classes.filter((item) => {
        return item.courseID == "farzeayinclass";
      });

      if (a.length > 0) {
        a.forEach(async (item) => {
          allClasses.push(item);
          if (item.students.length == 0) {
            let StudentsArray = item.students;

            //StudentsArray is students array inside single class item

            StudentsArray.push({
              SID: data.data.userName,
              sName:
                data.data.userDetails.firstName.en +
                " " +
                data.data.userDetails.lastName.en,
              mobileNumber: data.data.userDetails.mobileNumber,
              attendance: [],
            });

            const res5 = await updateClasses({
              classID: item.classID,
              courseID: item.courseID,
              batchNo: item.batchNo,
              maleClassLink: item.maleClassLink,
              femaleClassLink: item.femaleClassLink,
              departmentID: item.departmentID,
              jamatID: item.jamatID,
              semesterID: item.semesterID,
              bookID: item.bookID,
              teacher: item.teacher,
              examQuestion: item.examQuestion,
              students: StudentsArray,
              classStartTime: item.classStartTime,
              classEndTime: item.classEndTime,
              activeStatus: item.activeStatus,
              idValue: item._id,
            });

            if (res5.status == "Alhamdulillah") {
              console.log(
                "Blank - A student record has been created inside " +
                  item.classID
              );
            }
          } else if (
            !item.students.some((item2) => item2.SID == data.data.userName)
          ) {
            let StudentsArray = item.students;

            //StudentsArray is students array inside single class item

            StudentsArray.push({
              SID: data.data.userName,
              sName:
                data.data.userDetails.firstName.en +
                " " +
                data.data.userDetails.lastName.en,
              mobileNumber: data.data.userDetails.mobileNumber,
              attendance: [],
            });

            const res5 = await updateClasses({
              classID: item.classID,
              courseID: item.courseID,
              batchNo: item.batchNo,
              maleClassLink: item.maleClassLink,
              femaleClassLink: item.femaleClassLink,
              departmentID: item.departmentID,
              jamatID: item.jamatID,
              semesterID: item.semesterID,
              bookID: item.bookID,
              teacher: item.teacher,
              examQuestion: item.examQuestion,
              students: StudentsArray,
              classStartTime: item.classStartTime,
              classEndTime: item.classEndTime,
              activeStatus: item.activeStatus,
              idValue: item._id,
            });

            if (res5.status == "Alhamdulillah") {
              console.log(
                "Blank - A student record has been created inside " +
                  item.classID
              );
            }
          }
        });
      }
    }

    if (courseState.farzeayinnajera == true) {
      let a = classes.filter((item) => {
        return item.courseID == "farzeayinnajera";
      });

      if (a.length > 0) {
        a.forEach(async (item) => {
          allClasses.push(item);

          if (item.students.length == 0) {
            let StudentsArray = item.students;

            //StudentsArray is students array inside single class item

            StudentsArray.push({
              SID: data.data.userName,
              sName:
                data.data.userDetails.firstName.en +
                " " +
                data.data.userDetails.lastName.en,
              mobileNumber: data.data.userDetails.mobileNumber,
              attendance: [],
            });

            const res5 = await updateClasses({
              classID: item.classID,
              courseID: item.courseID,
              batchNo: item.batchNo,
              maleClassLink: item.maleClassLink,
              femaleClassLink: item.femaleClassLink,
              departmentID: item.departmentID,
              jamatID: item.jamatID,
              semesterID: item.semesterID,
              bookID: item.bookID,
              teacher: item.teacher,
              examQuestion: item.examQuestion,
              students: StudentsArray,
              classStartTime: item.classStartTime,
              classEndTime: item.classEndTime,
              activeStatus: item.activeStatus,
              idValue: item._id,
            });

            if (res5.status == "Alhamdulillah") {
              console.log(
                "Blank - A student record has been created inside " +
                  item.classID
              );
            }
          } else if (
            !item.students.some((item2) => item2.SID == data.data.userName)
          ) {
            let StudentsArray = item.students;

            //StudentsArray is students array inside single class item

            StudentsArray.push({
              SID: data.data.userName,
              sName:
                data.data.userDetails.firstName.en +
                " " +
                data.data.userDetails.lastName.en,
              mobileNumber: data.data.userDetails.mobileNumber,
              attendance: [],
            });

            const res5 = await updateClasses({
              classID: item.classID,
              courseID: item.courseID,
              batchNo: item.batchNo,
              maleClassLink: item.maleClassLink,
              femaleClassLink: item.femaleClassLink,
              departmentID: item.departmentID,
              jamatID: item.jamatID,
              semesterID: item.semesterID,
              bookID: item.bookID,
              teacher: item.teacher,
              examQuestion: item.examQuestion,
              students: StudentsArray,
              classStartTime: item.classStartTime,
              classEndTime: item.classEndTime,
              activeStatus: item.activeStatus,
              idValue: item._id,
            });

            if (res5.status == "Alhamdulillah") {
              console.log(
                "Blank - A student record has been created inside " +
                  item.classID
              );
            }
          }
        });
      }
    }

    if (courseState.ramadanquranulkarim == true) {
      let a = classes.filter((item) => {
        return item.courseID == "ramadanquranulkarim";
      });

      if (a.length > 0) {
        a.forEach(async (item) => {
          allClasses.push(item);

          if (item.students.length == 0) {
            let StudentsArray = item.students;

            //StudentsArray is students array inside single class item

            StudentsArray.push({
              SID: data.data.userName,
              sName:
                data.data.userDetails.firstName.en +
                " " +
                data.data.userDetails.lastName.en,
              mobileNumber: data.data.userDetails.mobileNumber,
              attendance: [],
            });

            const res5 = await updateClasses({
              classID: item.classID,
              courseID: item.courseID,
              batchNo: item.batchNo,
              maleClassLink: item.maleClassLink,
              femaleClassLink: item.femaleClassLink,
              departmentID: item.departmentID,
              jamatID: item.jamatID,
              semesterID: item.semesterID,
              bookID: item.bookID,
              teacher: item.teacher,
              examQuestion: item.examQuestion,
              students: StudentsArray,
              classStartTime: item.classStartTime,
              classEndTime: item.classEndTime,
              activeStatus: item.activeStatus,
              idValue: item._id,
            });

            if (res5.status == "Alhamdulillah") {
              console.log(
                "Blank - A student record has been created inside " +
                  item.classID
              );
            }
          } else if (
            !item.students.some((item2) => item2.SID == data.data.userName)
          ) {
            let StudentsArray = item.students;

            //StudentsArray is students array inside single class item

            StudentsArray.push({
              SID: data.data.userName,
              sName:
                data.data.userDetails.firstName.en +
                " " +
                data.data.userDetails.lastName.en,
              mobileNumber: data.data.userDetails.mobileNumber,
              attendance: [],
            });

            const res5 = await updateClasses({
              classID: item.classID,
              courseID: item.courseID,
              batchNo: item.batchNo,
              maleClassLink: item.maleClassLink,
              femaleClassLink: item.femaleClassLink,
              departmentID: item.departmentID,
              jamatID: item.jamatID,
              semesterID: item.semesterID,
              bookID: item.bookID,
              teacher: item.teacher,
              examQuestion: item.examQuestion,
              students: StudentsArray,
              classStartTime: item.classStartTime,
              classEndTime: item.classEndTime,
              activeStatus: item.activeStatus,
              idValue: item._id,
            });

            if (res5.status == "Alhamdulillah") {
              console.log(
                "Blank - A student record has been created inside " +
                  item.classID
              );
            }
          }
        });
      }
    }
  }

  if (data) {
    let newArray = [];
    if (data.data.userDetails.studentCourseCode.length < 1) {
      newArray = sidebarItems.map((item) => {
        if (item.name == "Library") {
          return {
            name: "Library",
            href: `/dashboard/${data.data.userName}/books`,
            icon: "/images/books.svg",
            show: false,
          };
        } else if (item.name == "Results") {
          return {
            name: "Results",
            href: `/dashboard/${data.data.userName}/results`,
            icon: "/images/result.svg",
            show: false,
          };
        } else if (item.name == "Handwork") {
          return {
            name: "Handwork",
            href: `/dashboard/${data.data.userName}/works`,
            icon: "/images/work.svg",
            show: false,
          };
        } else if (item.name == "Comments") {
          return {
            name: "Comments",
            href: `/dashboard/${data.data.userName}/comments`,
            icon: "/images/comment.svg",
            show: false,
          };
        } else if (item.name == "Change Class") {
          return {
            name: "Change Class",
            href: `/dashboard/${data.data.userName}/switches`,
            icon: "/images/switch.svg",
            show: false,
          };
        } else if (item.name == "Abacus Student") {
          return {
            name: "Abacus Student",
            href: `/dashboard/${data.data.userName}/abacus`,
            icon: "/images/abacus.svg",
            show: false,
          };
        } else if (item.name == "Abacus Teachers Training") {
          return {
            name: "Abacus Teachers Training",
            href: `/dashboard/${params.adminslug}/abacus-teacher`,
            icon: "/images/abacus_teacher.svg",
            show: false,
          };
        } else if (item.name == "Ramadan Quran") {
          return {
            name: "Ramadan Quran",
            href: `/dashboard/${params.adminslug}/ramadan-quran`,
            icon: "/images/quran.svg",
            show: false,
          };
        } else if (item.name == "Attendance") {
          return {
            name: "Attendance",
            href: `/dashboard/${data.data.userName}/attendance`,
            icon: "/images/attendance.svg",
            show: false,
          };
        } else if (item.name == "Upload Exam") {
          return {
            name: "Upload Exam",
            href: `/dashboard/${data.data.userName}/upload-exam`,
            icon: "/images/upload.svg",
            show: false,
          };
        } else if (item.name == "Class Room") {
          return {
            name: "Class Room",
            href: `/dashboard/${data.data.userName}/class-room`,
            icon: "/images/population.svg",
            show: false,
          };
        } else if (item.name == "Hifz Information Books") {
          return {
            name: "Hifz Information Books",
            href: `/dashboard/${data.data.userName}/hifz`,
            icon: "/images/Hifzul.png",
            show: false,
          };
        } else {
          return item;
        }
      });
    } else if (
      data.data.userDetails.studentCourseCode[
        data.data.userDetails.studentCourseCode.length - 1
      ].status == "inactive"
    ) {
      newArray = sidebarItems.map((item) => {
        if (item.name == "Library") {
          return {
            name: "Library",
            href: `/dashboard/${data.data.userName}/books`,
            icon: "/images/books.svg",
            show: false,
          };
        } else if (item.name == "Results") {
          return {
            name: "Results",
            href: `/dashboard/${data.data.userName}/results`,
            icon: "/images/result.svg",
            show: false,
          };
        } else if (item.name == "Handwork") {
          return {
            name: "Handwork",
            href: `/dashboard/${data.data.userName}/works`,
            icon: "/images/work.svg",
            show: false,
          };
        } else if (item.name == "Comments") {
          return {
            name: "Comments",
            href: `/dashboard/${data.data.userName}/comments`,
            icon: "/images/comment.svg",
            show: false,
          };
        } else if (item.name == "Change Class") {
          return {
            name: "Change Class",
            href: `/dashboard/${data.data.userName}/switches`,
            icon: "/images/switch.svg",
            show: false,
          };
        } else if (item.name == "Abacus Student") {
          return {
            name: "Abacus Student",
            href: `/dashboard/${data.data.userName}/abacus`,
            icon: "/images/abacus.svg",
            show: false,
          };
        } else if (item.name == "Abacus Teachers Training") {
          return {
            name: "Abacus Teachers Training",
            href: `/dashboard/${params.adminslug}/abacus-teacher`,
            icon: "/images/abacus_teacher.svg",
            show: false,
          };
        } else if (item.name == "Ramadan Quran") {
          return {
            name: "Ramadan Quran",
            href: `/dashboard/${params.adminslug}/ramadan-quran`,
            icon: "/images/quran.svg",
            show: false,
          };
        } else if (item.name == "Attendance") {
          return {
            name: "Attendance",
            href: `/dashboard/${data.data.userName}/attendance`,
            icon: "/images/attendance.svg",
            show: false,
          };
        } else if (item.name == "Upload Exam") {
          return {
            name: "Upload Exam",
            href: `/dashboard/${data.data.userName}/upload-exam`,
            icon: "/images/upload.svg",
            show: false,
          };
        } else if (item.name == "Class Room") {
          return {
            name: "Class Room",
            href: `/dashboard/${data.data.userName}/class-room`,
            icon: "/images/population.svg",
            show: false,
          };
        } else if (item.name == "Hifz Information Books") {
          return {
            name: "Hifz Information Books",
            href: `/dashboard/${data.data.userName}/hifz`,
            icon: "/images/Hifzul.png",
            show: false,
          };
        } else {
          return item;
        }
      });
    } else if (
      data.data.userDetails.studentCourseCode[
        data.data.userDetails.studentCourseCode.length - 1
      ].status == "active"
    ) {
      let FixedNewArray = [
        {
          name: "Dashboard",
          href: `/dashboard/${params.adminslug}`,
          icon: "/images/graph.svg",
          show: true,
        },
        {
          name: "Notices",
          href: `/dashboard/${params.adminslug}/notices`,
          icon: "/images/notice.svg",
          show: true,
        },
        {
          name: "Fees",
          href: `/dashboard/${params.adminslug}/fees`,
          icon: "/images/fees.svg",
          show: true,
        },

        {
          name: "Library",
          href: `/dashboard/${params.adminslug}/books`,
          icon: "/images/books.svg",
          show: true,
        },
        {
          name: "Settings",
          href: `/dashboard/${params.adminslug}/settings`,
          icon: "/images/setting.svg",
          show: true,
        },
        {
          name: "Handwork",
          href: `/dashboard/${params.adminslug}/works`,
          icon: "/images/work.svg",
          show: true,
        },
        {
          name: "Comments",
          href: `/dashboard/${params.adminslug}/comments`,
          icon: "/images/comment.svg",
          show: true,
        },
        {
          name: "Change Class",
          href: `/dashboard/${params.adminslug}/switches`,
          icon: "/images/switch.svg",
          show: true,
        },
        {
          name: "Attendance",
          href: `/dashboard/${params.adminslug}/attendance`,
          icon: "/images/attendance.svg",
          show: true,
        },
      ];

      let checkArray = [];

      data.data.userDetails.studentCourseCode.forEach((item) => {
        newArray = FixedNewArray;

        if (
          (item.code == "alemalema" ||
            item.code == "schoolalemalema" ||
            item.code == "prealemalema") &&
          item.status == "active"
        ) {
          let alemalemaArray = [
            {
              name: "Results",
              href: `/dashboard/${params.adminslug}/results`,
              icon: "/images/result.svg",
              show: true,
            },
            {
              name: "Upload Exam",
              href: `/dashboard/${params.adminslug}/upload-exam`,
              icon: "/images/upload.svg",
              show: true,
            },
          ];

          if (
            !checkArray.some((item) => {
              return item == "alemalema";
            })
          ) {
            alemalemaArray.forEach((item) => {
              newArray.push(item);
            });
            checkArray.push("alemalema");
          }
        }

        if (item.code == "hifjulquran" && item.status == "active") {
          let hifzArray = [
            {
              name: "Hifz Information Books",
              href: `/dashboard/${params.adminslug}/hifz`,
              icon: "/images/Hifzul.png",
              show: true,
            },
          ];

          if (
            !checkArray.some((item) => {
              return item == "hifjulquran";
            })
          ) {
            hifzArray.forEach((item) => {
              newArray.push(item);
            });

            checkArray.push("hifjulquran");
          }
        }

        if (item.code == "abacus_student" && item.status == "active") {
          let abacusArray = [
            {
              name: "Abacus Student",
              href: `/dashboard/${params.adminslug}/abacus`,
              icon: "/images/abacus.svg",
              show: true,
            },
          ];
          if (
            !checkArray.some((item) => {
              return item == "abacus_student";
            })
          ) {
            abacusArray.forEach((item) => {
              newArray.push(item);
            });
            checkArray.push("abacus_student");
          }
        }

        if (item.code == "abacus_teacher" && item.status == "active") {
          let abacusTeacherArray = [
            {
              name: "Abacus Teachers Training",
              href: `/dashboard/${params.adminslug}/abacus-teacher`,
              icon: "/images/abacus_teacher.svg",
              show: true,
            },
          ];
          if (
            !checkArray.some((item) => {
              return item == "abacus_teacher";
            })
          ) {
            abacusTeacherArray.forEach((item) => {
              newArray.push(item);
            });
            checkArray.push("abacus_teacher");
          }
        }

        if (item.code == "ramadanquranulkarim" && item.status == "active") {
          let ramadanquranulkarimArray = [
            {
              name: "Ramadan Quran",
              href: `/dashboard/${params.adminslug}/ramadan-quran`,
              icon: "/images/quran.svg",
              show: true,
            },
          ];
          if (
            !checkArray.some((item) => {
              return item == "ramadanquranulkarim";
            })
          ) {
            ramadanquranulkarimArray.forEach((item) => {
              newArray.push(item);
            });
            checkArray.push("ramadanquranulkarim");
          }
        }

        if (
          (item.code == "alemalema" && item.status == "active") ||
          (item.code == "schoolalemalema" && item.status == "active") ||
          (item.code == "prealemalema" && item.status == "active") ||
          (item.code == "ezranahusorof" && item.status == "active") ||
          (item.code == "shishumaktab" && item.status == "active") ||
          (item.code == "hifjulquran" && item.status == "active") ||
          (item.code == "farzeayinnajera" && item.status == "active") ||
          (item.code == "farzeayinclass" && item.status == "active") ||
          (item.code == "urdu" && item.status == "active")
        ) {
          let combinedArray = [
            {
              name: "Class Room",
              href: `/dashboard/${params.adminslug}/class-room`,
              icon: "/images/population.svg",
              show: true,
            },
          ];
          if (
            !checkArray.some((item) => {
              return item == "combinedItem";
            })
          ) {
            combinedArray.forEach((item) => {
              newArray.push(item);
            });
            checkArray.push("combinedItem");
          }
        }
      });
    } else {
      newArray = [
        {
          name: "Dashboard",
          href: `/dashboard/${params.adminslug}`,
          icon: "/images/graph.svg",
          show: true,
        },
        {
          name: "Library",
          href: `/dashboard/${params.adminslug}/books`,
          icon: "/images/books.svg",
          show: true,
        },
        {
          name: "Notices",
          href: `/dashboard/${params.adminslug}/notices`,
          icon: "/images/notice.svg",
          show: true,
        },
        {
          name: "Fees",
          href: `/dashboard/${params.adminslug}/fees`,
          icon: "/images/fees.svg",
          show: true,
        },
        {
          name: "Results",
          href: `/dashboard/${params.adminslug}/results`,
          icon: "/images/result.svg",
          show: true,
        },
        {
          name: "Upload Exam",
          href: `/dashboard/${params.adminslug}/upload-exam`,
          icon: "/images/upload.svg",
          show: true,
        },
        {
          name: "Handwork",
          href: `/dashboard/${params.adminslug}/works`,
          icon: "/images/work.svg",
          show: true,
        },
        {
          name: "Comments",
          href: `/dashboard/${params.adminslug}/comments`,
          icon: "/images/comment.svg",
          show: true,
        },

        {
          name: "Change Class",
          href: `/dashboard/${params.adminslug}/switches`,
          icon: "/images/switch.svg",
          show: true,
        },

        {
          name: "Abacus Student",
          href: `/dashboard/${params.adminslug}/abacus`,
          icon: "/images/abacus.svg",
          show: true,
        },
        {
          name: "Abacus Teachers Training",
          href: `/dashboard/${params.adminslug}/abacus-teacher`,
          icon: "/images/abacus_teacher.svg",
          show: true,
        },
        {
          name: "Ramadan Quran",
          href: `/dashboard/${params.adminslug}/ramadan-quran`,
          icon: "/images/quran.svg",
          show: true,
        },
        {
          name: "Attendance",
          href: `/dashboard/${params.adminslug}/attendance`,
          icon: "/images/attendance.svg",
          show: true,
        },

        {
          name: "Settings",
          href: `/dashboard/${params.adminslug}/settings`,
          icon: "/images/setting.svg",
          show: true,
        },
        {
          name: "Class Room",
          href: `/dashboard/${params.adminslug}/class-room`,
          icon: "/images/population.svg",
          show: true,
        },
        {
          name: "Hifz Information Books",
          href: `/dashboard/${params.adminslug}/hifz`,
          icon: "/images/Hifzul.png",
          show: true,
        },
      ];
    }

    if (params.adminslug == data.data.userName) {
      return (
        <>
          <CommonMenu changeDrawerState={changeDrawerState}>
            {children}
            {show ? (
              <SideDrawer
                user={data.data}
                sidebarItems={newArray}
                show={true}
                changeDrawerState={changeDrawerState}
              />
            ) : (
              <SideDrawer
                user={data.data}
                sidebarItems={newArray}
                show={false}
                changeDrawerState={changeDrawerState}
              />
            )}
          </CommonMenu>
          {/* <MessangerChat /> */}
          <a
            style={{
              position: "fixed",
              bottom: "20px",
              right: "20px",
              zIndex: "999",
              width: "64px",
              height: "64px",
              filter: "drop-shadow(1px 10px 20px rgba(0,0,0,0.3))",
            }}
            className="whatsapp"
            s
            aria-label="Chat on WhatsApp"
            href="https://wa.me/1674040502"
          >
            <img alt="Chat on WhatsApp" src="/images/whatsapp.png" />
          </a>
        </>
      );
    } else {
      router.replace(`/dashboard/${data.data.userName}`);
    }
  }
}

export default StudentLayout;
