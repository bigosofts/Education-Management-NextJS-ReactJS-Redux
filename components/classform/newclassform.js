"use client";
import React from "react";
import { useRef, useEffect, useState } from "react";
import { BiPlus } from "react-icons/bi";
import myToast from "@/components/toast/toast";
import { createData } from "@/apiservices/classapiservices";
import { selectData as selectCourses } from "@/apiservices/courseapiservices";
import { selectData as selectDepartments } from "@/apiservices/departmentapiservices";
import { selectData as selectJamats } from "@/apiservices/jamatapiservices";
import { selectData as selectSemesters } from "@/apiservices/semesterapiservices";
import { selectAllDataTwo as selectTeachers } from "@/apiservices/teacherapiservices";
import { selectDataTwo as selectStudents } from "@/apiservices/studentapiservices";

import { selectData as selectBooks } from "@/apiservices/bookapiservices";

function NewClassForm(props) {
  const [courses, setCourses] = useState();
  const [departments, setDepartments] = useState();
  const [jamats, setJamats] = useState();
  const [semesters, setSemesters] = useState();
  const [students, setStudents] = useState();
  const [teachers, setTeachers] = useState();
  const [booklist, setBooklist] = useState();
  const [studentsArray, setStudentsArray] = useState([]);

  const classIDref = useRef();
  const courseIDref = useRef();
  const departmentIDref = useRef();
  const jamatIDref = useRef();
  const semesterIDref = useRef();
  const bookIDref = useRef();
  const teacherref = useRef();
  const examQuestionref = useRef();
  const studentsref = useRef();
  const classStartTimeref = useRef();
  const classEndTimeref = useRef();
  const batchNoref = useRef();
  const maleClassLinkref = useRef();
  const femaleClassLinkref = useRef();

  const classradio1ref = useRef();
  const classradio2ref = useRef();

  function onChangeHandler(e) {
    e.preventDefault();
    setStudentsArray((prev) => prev.concat(JSON.parse(e.target.value)));
  }

  const clickHandler = async (e) => {
    e.preventDefault();

    const classID = classIDref.current.value;
    const courseID = courseIDref.current.value;
    const batchNo = batchNoref.current.value;
    const maleClassLink = maleClassLinkref.current.value;
    const femaleClassLink = femaleClassLinkref.current.value;
    const departmentID = departmentIDref.current.value;
    const jamatID = jamatIDref.current.value;
    const semesterID = semesterIDref.current.value;
    const bookID = bookIDref.current.value;

    const teacher = teacherref.current.value;

    const teacherParsed = JSON.parse(teacher.replace(/(\r\n|\n|\r)/gm, ""));

    const examQuestion = examQuestionref.current.value;

    const studentsParsed = studentsArray ? studentsArray : [];

    const classStartTime = classStartTimeref.current.value;
    const classEndTime = classEndTimeref.current.value;

    const classradio1 = classradio1ref.current.checked;
    const classradio2 = classradio2ref.current.checked;

    const status = classradio1
      ? "active"
      : classradio2
      ? "inactive"
      : "inactive";

    const res = await createData({
      classID,
      courseID,
      batchNo,
      maleClassLink,
      femaleClassLink,
      departmentID,
      jamatID,
      semesterID,
      bookID,
      teacher: teacherParsed,
      examQuestion,
      students: studentsParsed,
      classStartTime,
      classEndTime,
      activeStatus: status,
    });

    if (res) {
      props.statechanger();
      myToast.success("Data was created successfully");
    } else {
      myToast.warning("something went wrong");
    }
  };

  useEffect(() => {
    async function getData() {
      const res = await selectCourses(null, null);
      const res2 = await selectDepartments(null, null);
      const res3 = await selectJamats(null, null);
      const res4 = await selectSemesters(null, null);
      const res5 = await selectStudents(null, null);
      const res6 = await selectTeachers(null, null);
      const res7 = await selectBooks(null, null);

      if (
        res.status == "Alhamdulillah" &&
        res2.status == "Alhamdulillah" &&
        res3.status == "Alhamdulillah" &&
        res4.status == "Alhamdulillah" &&
        res5.status == "Alhamdulillah" &&
        res6.status == "Alhamdulillah" &&
        res7.status == "Alhamdulillah"
      ) {
        setCourses(res.data);
        setDepartments(res2.data);
        setJamats(res3.data);
        setSemesters(res4.data);
        setStudents(res5.data);
        setTeachers(res6.data);
        setBooklist(res7.data);
      }
    }
    getData();
  }, []);

  return (
    <form className="grid lg:grid-cols-3 w-full gap-5">
      <div className="input-type">
        <input
          ref={classIDref}
          className="border w-full px-5 py-3 focus:outline-none"
          type="text"
          name="classIDref"
          placeholder="Enter classID"
        ></input>
      </div>
      <div className="input-type">
        <input
          ref={batchNoref}
          className="border w-full px-5 py-3 focus:outline-none"
          type="text"
          name="batchNoref"
          placeholder="Enter Batch No"
        ></input>
      </div>
      <div className="input-type">
        <input
          ref={maleClassLinkref}
          className="border w-full px-5 py-3 focus:outline-none"
          type="text"
          name="maleClassLinkref"
          placeholder="Enter Male Class Group Link"
        ></input>
      </div>
      <div className="input-type">
        <input
          ref={femaleClassLinkref}
          className="border w-full px-5 py-3 focus:outline-none"
          type="text"
          name="femaleClassLinkref"
          placeholder="Enter Female Class Group Link"
        ></input>
      </div>

      <div className="input-type">
        <select
          ref={courseIDref}
          className="border w-full px-5 py-3 focus:outline-none bg-white"
          type="text"
          name="courseIDref"
        >
          <option value=""> Select Course </option>
          {courses &&
            courses.map((item, i) => (
              <option key={i} value={item.courseCode}>
                {" "}
                {item.courseCode}
              </option>
            ))}
        </select>
      </div>

      <div className="input-type">
        <select
          ref={departmentIDref}
          className="border w-full px-5 py-3 focus:outline-none bg-white"
          type="text"
          name="departmentIDref"
        >
          <option value="">Select Department</option>
          {departments &&
            departments.map((item, i) => (
              <option key={i} value={item.departmentID}>
                {item.departmentName}
              </option>
            ))}
        </select>
      </div>

      <div className="input-type">
        <select
          ref={jamatIDref}
          className="border w-full px-5 py-3 focus:outline-none bg-white"
          type="text"
          name="jamatIDref"
        >
          <option value="">Select Jamat</option>
          {jamats &&
            jamats.map((item, i) => (
              <option key={i} value={item.jamatID}>
                {item.jamatName}
              </option>
            ))}
        </select>
      </div>

      <div className="input-type">
        <select
          ref={semesterIDref}
          className="border w-full px-5 py-3 focus:outline-none bg-white"
          type="text"
          name="semesterIDref"
          placeholder="Enter semesterID"
        >
          <option value="">Select Semester</option>
          {semesters &&
            semesters.map((item, i) => (
              <option key={i} value={item.semesterID}>
                {item.semesterName}
              </option>
            ))}
        </select>
      </div>

      <div className="input-type">
        <select
          ref={bookIDref}
          className="border w-full px-5 py-3 focus:outline-none bg-white"
          type="text"
          name="bookIDref"
          placeholder="Enter bookID"
        >
          <option value="">Select Book</option>

          {booklist &&
            booklist.map((item, i) => (
              <option key={i} value={item.bookID}>
                {item.bookName.en}
              </option>
            ))}
        </select>
      </div>

      <div>
        <select
          ref={teacherref}
          id="teacherref"
          name="teacherref"
          rows="1"
          className="border w-full px-5 py-3 focus:outline-none bg-white"
        >
          <option value="">Assign Teacher</option>
          {teachers &&
            teachers.map((item, i) => (
              <option
                key={i}
                value={JSON.stringify({
                  TID: item.userName,
                  tName: item.firstName.en + " " + item.lastName.en,
                  mobileNumber: item.mobileNumber,
                  attendance: [],
                })}
              >
                {item.firstName.en} {item.lastName.en}
              </option>
            ))}
        </select>
      </div>

      <div className="input-type">
        <input
          ref={examQuestionref}
          className="border w-full px-5 py-3 focus:outline-none"
          type="text"
          name="examQuestionref"
          placeholder="Enter examQuestion Link"
        ></input>
      </div>

      <div>
        <textarea
          ref={studentsref}
          value={JSON.stringify(studentsArray)}
          id="studentsref"
          name="studentsref"
          rows="1"
          className="border w-full px-5 py-3 focus:outline-none"
          readonly
        ></textarea>
      </div>

      <div>
        <select
          onChange={onChangeHandler}
          id="studentsrefcode"
          name="studentsrefcode"
          rows="1"
          className="border w-full px-5 py-3 focus:outline-none bg-white"
        >
          <option value="">Select Student</option>
          {students &&
            students.map((item, i) => (
              <option
                key={i}
                value={JSON.stringify({
                  SID: item.userName,
                  sName: item.firstName.en + " " + item.lastName.en,
                  mobileNumber: item.mobileNumber,
                  attendance: [],
                })}
              >
                {item.firstName.en} {item.lastName.en}
              </option>
            ))}
        </select>
      </div>

      <div className="input-type">
        <input
          ref={classStartTimeref}
          className="border w-full px-5 py-3 focus:outline-none"
          type="text"
          name="classStartTimeref"
          placeholder="Enter classStartTime"
        ></input>
      </div>

      <div className="input-type">
        <input
          ref={classEndTimeref}
          className="border w-full px-5 py-3 focus:outline-none"
          type="text"
          name="classEndTimeref"
          placeholder="Enter classEndTime"
        ></input>
      </div>

      <div className="flex gap-10 items-center">
        <div className="form-check">
          <input
            ref={classradio1ref}
            type="radio"
            value="Active"
            id="classradio1ref"
            name="status"
            className="form-check-input appearance-none rounded-full h-4 w-4 border border-gray-300 bg-white checked:bg-green-500 checked:border-green-500 focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer"
          />
          <label
            htmlFor="classradio1ref"
            className="inline-block text-gray-800"
          >
            Active
          </label>
        </div>
        <div className="form-check">
          <input
            ref={classradio2ref}
            type="radio"
            value="Inactive"
            id="classradio2ref"
            name="status"
            className="form-check-input appearance-none rounded-full h-4 w-4 border border-gray-300 bg-white checked:bg-green-500 checked:border-green-500 focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer"
          />
          <label
            htmlFor="classradio2ref"
            className="inline-block text-gray-800"
          >
            Inactive
          </label>
        </div>
      </div>

      <button
        onClick={clickHandler}
        className="flex justify-center text-md w-2/6 allColor text-white px-4 py-2 border rounded-md hover:border-slate-500 hover:text-white"
      >
        Add Data{" "}
        <span className="px-1">
          <BiPlus size={23} />
        </span>
      </button>
    </form>
  );
}

export default NewClassForm;
