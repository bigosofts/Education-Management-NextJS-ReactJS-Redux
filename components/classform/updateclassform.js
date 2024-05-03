"use client";
import React from "react";
import { useRef } from "react";
import { BiBrush } from "react-icons/bi";
import myToast from "@/components/toast/toast";
import { updateData } from "@/apiservices/classapiservices";
import { useState, useEffect } from "react";

import { selectData as selectCourses } from "@/apiservices/courseapiservices";
import { selectData as selectDepartments } from "@/apiservices/departmentapiservices";
import { selectData as selectJamats } from "@/apiservices/jamatapiservices";
import { selectData as selectSemesters } from "@/apiservices/semesterapiservices";
import { selectAllDataTwo as selectTeachers } from "@/apiservices/teacherapiservices";
import { selectDataTwo as selectStudents } from "@/apiservices/studentapiservices";
import { selectData as selectBooks } from "@/apiservices/bookapiservices";

function UpdateClassForm(props) {
  const [courses, setCourses] = useState();
  const [departments, setDepartments] = useState();
  const [jamats, setJamats] = useState();
  const [semesters, setSemesters] = useState();
  const [students, setStudents] = useState();
  const [teachers, setTeachers] = useState();
  const [booklist, setBooklist] = useState();

  const [classC, setClassC] = useState({
    classID: props.payload.classID,
    courseID: props.payload.courseID,
    batchNo: props.payload.batchNo,
    maleClassLink: props.payload.maleClassLink,
    femaleClassLink: props.payload.femaleClassLink,
    departmentID: props.payload.departmentID,
    jamatID: props.payload.jamatID,
    semesterID: props.payload.semesterID,
    bookID: props.payload.bookID,
    teacher: props.payload.teacher,
    examQuestion: props.payload.examQuestion,
    students: props.payload.students,
    classStartTime: props.payload.classStartTime,
    classEndTime: props.payload.classEndTime,
    activeStatus: props.payload.activeStatus,
  });

  useEffect(() => {
    setClassC({
      classID: props.payload.widgetName,
      courseID: props.payload.courseID,
      batchNo: props.payload.batchNo,
      maleClassLink: props.payload.maleClassLink,
      femaleClassLink: props.payload.femaleClassLink,
      departmentID: props.payload.departmentID,
      jamatID: props.payload.jamatID,
      semesterID: props.payload.semesterID,
      bookID: props.payload.bookID,
      teacher: props.payload.teacher,
      examQuestion: props.payload.examQuestion,
      students: props.payload.students,
      classStartTime: props.payload.classStartTime,
      classEndTime: props.payload.classEndTime,
      activeStatus: props.payload.activeStatus,
    });
  }, [
    props.payload.widgetName,
    props.payload.courseID,
    props.payload.departmentID,
    props.payload.jamatID,
    props.payload.semesterID,
    props.payload.bookID,
    props.payload.teacher,
    props.payload.examQuestion,
    props.payload.students,
    props.payload.classStartTime,
    props.payload.classEndTime,
    props.payload.activeStatus,
    props.payload.batchNo,
    props.payload.maleClassLink,
    props.payload.femaleClassLink,
  ]);

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

  const classIDref = useRef();
  const courseIDref = useRef();
  const batchNoref = useRef();
  const maleClassLinkref = useRef();
  const femaleClassLinkref = useRef();

  const departmentIDref = useRef();
  const jamatIDref = useRef();
  const semesterIDref = useRef();
  const bookIDref = useRef();
  const teacherref = useRef();
  const examQuestionref = useRef();
  const studentsref = useRef();
  const classStartTimeref = useRef();
  const classEndTimeref = useRef();

  const classradio1ref = useRef();
  const classradio2ref = useRef();

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
    const students = studentsref.current.value;
    const studentsParsed = JSON.parse(students.replace(/(\r\n|\n|\r)/gm, ""));

    const classStartTime = classStartTimeref.current.value;
    const classEndTime = classEndTimeref.current.value;

    const classradio1 = classradio1ref.current.checked;
    const classradio2 = classradio2ref.current.checked;

    const status = classradio1
      ? "active"
      : classradio2
      ? "inactive"
      : "inactive";

    const idValue = props.data;

    const res = await updateData({
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
      idValue,
    });

    if (res) {
      props.statechanger();
      myToast.success("Data was Updated successfully");
    } else {
      myToast.warning("something went wrong");
    }
  };
  const onChangeHandler1 = (e) => {
    setClassC({
      classID: e.target.value,
    });
  };
  const onChangeHandler2 = (e) => {
    setClassC({
      courseID: e.target.value,
    });
  };
  const onChangeHandler3 = (e) => {
    setClassC({
      departmentID: e.target.value,
    });
  };

  const onChangeHandler4 = (e) => {
    setClassC({
      jamatID: e.target.value,
    });
  };
  const onChangeHandler5 = (e) => {
    setClassC({
      semesterID: e.target.value,
    });
  };

  const onChangeHandler6 = (e) => {
    setClassC({
      bookID: e.target.value,
    });
  };
  const onChangeHandler7 = (e) => {
    setClassC({
      teacherParsed: e.target.value,
    });
  };
  const onChangeHandler8 = (e) => {
    setClassC({
      examQuestion: e.target.value,
    });
  };
  const onChangeHandler9 = (e) => {
    setClassC({
      studentsParsed: e.target.value,
    });
  };
  const onChangeHandler10 = (e) => {
    setClassC({
      classStartTime: e.target.value,
    });
  };

  const onChangeHandler11 = (e) => {
    setClassC({
      classEndTime: e.target.value,
    });
  };
  const onChangeHandler12 = (e) => {
    setClassC({
      batchNo: e.target.value,
    });
  };
  const onChangeHandler13 = (e) => {
    setClassC({
      maleClassLink: e.target.value,
    });
  };
  const onChangeHandler14 = (e) => {
    setClassC({
      femaleClassLink: e.target.value,
    });
  };

  return (
    <form className="grid lg:grid-cols-3 w-full gap-5">
      <div className="input-type">
        <input
          ref={classIDref}
          onChange={onChangeHandler1}
          value={classC.classID}
          className="border w-full px-5 py-3 focus:outline-none"
          type="text"
          name="classIDref"
          placeholder="Enter classID"
        ></input>
      </div>
      <div className="input-type">
        <input
          ref={batchNoref}
          onChange={onChangeHandler12}
          value={classC.batchNo}
          className="border w-full px-5 py-3 focus:outline-none"
          type="text"
          name="batchNoref"
          placeholder="Enter Batch No"
        ></input>
      </div>
      <div className="input-type">
        <input
          ref={maleClassLinkref}
          onChange={onChangeHandler13}
          value={classC.maleClassLink}
          className="border w-full px-5 py-3 focus:outline-none"
          type="text"
          name="maleClassLinkref"
          placeholder="Enter Male Class Group Link"
        ></input>
      </div>
      <div className="input-type">
        <input
          ref={femaleClassLinkref}
          onChange={onChangeHandler14}
          value={classC.femaleClassLink}
          className="border w-full px-5 py-3 focus:outline-none"
          type="text"
          name="femaleClassLinkref"
          placeholder="Enter Female Class Group Link"
        ></input>
      </div>

      <div className="input-type">
        <select
          value={classC.courseID}
          onChange={onChangeHandler2}
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
                {item.courseCode}{" "}
              </option>
            ))}
        </select>
      </div>

      <div className="input-type">
        <select
          ref={departmentIDref}
          value={classC.departmentID}
          onChange={onChangeHandler3}
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
          value={classC.jamatID}
          onChange={onChangeHandler4}
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
          value={classC.semesterID}
          onChange={onChangeHandler5}
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
          value={classC.bookID}
          onChange={onChangeHandler6}
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
        <textarea
          ref={teacherref}
          onChange={onChangeHandler7}
          value={JSON.stringify(classC.teacher)}
          id="teacherref"
          name="teacherref"
          rows="1"
          className="border w-full px-5 py-3 focus:outline-none"
          placeholder="Enter Teacher object here"
        ></textarea>
      </div>

      <div className="input-type">
        <input
          ref={examQuestionref}
          value={classC.examQuestion}
          onChange={onChangeHandler8}
          className="border w-full px-5 py-3 focus:outline-none"
          type="text"
          name="examQuestionref"
          placeholder="Enter examQuestion Link"
        ></input>
      </div>

      <div>
        <textarea
          ref={studentsref}
          onChange={onChangeHandler9}
          value={JSON.stringify(classC.students)}
          id="studentsref"
          name="studentsref"
          rows="1"
          className="border w-full px-5 py-3 focus:outline-none"
          placeholder="Enter studentsref Array Here"
        ></textarea>
      </div>

      <div className="input-type">
        <input
          ref={classStartTimeref}
          onChange={onChangeHandler10}
          value={classC.classStartTime}
          className="border w-full px-5 py-3 focus:outline-none"
          type="text"
          name="classStartTimeref"
          placeholder="Enter classStartTime"
        ></input>
      </div>

      <div className="input-type">
        <input
          ref={classEndTimeref}
          onChange={onChangeHandler11}
          value={classC.classEndTime}
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
        Update Data{" "}
        <span className="px-1">
          <BiBrush size={23} />
        </span>
      </button>
    </form>
  );
}

export default UpdateClassForm;
