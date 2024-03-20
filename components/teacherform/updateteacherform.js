"use client";
import React from "react";
import { useRef } from "react";
import { BiBrush } from "react-icons/bi";
import myToast from "@/components/toast/toast";
import { updateData } from "@/apiservices/teacherapiservices";
import { useState, useEffect } from "react";

function updateTeacherForm(props) {
  const [inputType, setInputType] = useState("text");
  const handleFocus = () => {
    setInputType("date");
  };

  const handleBlur = () => {
    setInputType("text");
  };

  const [teacher, setTeacher] = useState({
    userName: props.payload.userName,
    userRole: props.payload.userRole,
    firstName: props.payload.firstName.en,
    firstNamebn: props.payload.firstName.bn,
    lastName: props.payload.lastName.en,
    lastNamebn: props.payload.lastName.bn,
    nidNumber: props.payload.nidNumber,
    birthRegNumber: props.payload.birthRegNumber,
    fatherName: props.payload.fatherName.en,
    fatherNamebn: props.payload.fatherName.bn,
    emailAddress: props.payload.emailAddress,
    password: props.payload.password,
    mobileNumber: props.payload.mobileNumber,
    teacherCourseCode: props.payload.teacherCourseCode,
    teacherJamatCode: props.payload.teacherJamatCode,
    gender: props.payload.gender,
    dateOfBirth: props.payload.dateOfBirth,
    countryName: props.payload.countryName,
    fullPresentAddress: props.payload.fullPresentAddress,
    fullPermanentAddress: props.payload.fullPermanentAddress,
    educationalBackground: props.payload.educationalBackground,
    activeStatus: props.payload.activeStatus,
    designation: props.payload.designation,
  });

  useEffect(() => {
    setTeacher({
      userName: props.payload.userName,
      userRole: props.payload.userRole,
      firstName: props.payload.firstName.en,
      firstNamebn: props.payload.firstName.bn,
      lastName: props.payload.lastName.en,
      lastNamebn: props.payload.lastName.bn,
      nidNumber: props.payload.nidNumber,
      birthRegNumber: props.payload.birthRegNumber,
      fatherName: props.payload.fatherName.en,
      fatherNamebn: props.payload.fatherName.bn,
      emailAddress: props.payload.emailAddress,
      password: props.payload.password,
      mobileNumber: props.payload.mobileNumber,
      teacherCourseCode: props.payload.teacherCourseCode,
      teacherJamatCode: props.payload.teacherJamatCode,
      gender: props.payload.gender,
      dateOfBirth: props.payload.dateOfBirth,
      countryName: props.payload.countryName,
      fullPresentAddress: props.payload.fullPresentAddress,
      fullPermanentAddress: props.payload.fullPermanentAddress,
      educationalBackground: props.payload.educationalBackground,
      activeStatus: props.payload.activeStatus,
      designation: props.payload.designation,
    });
  }, [
    props.payload.userName,
    props.payload.userRole,
    props.payload.firstName.en,
    props.payload.firstName.bn,
    props.payload.lastName.en,
    props.payload.lastName.bn,
    props.payload.nidNumber,
    props.payload.birthRegNumber,
    props.payload.fatherName.en,
    props.payload.fatherName.bn,
    props.payload.emailAddress,
    props.payload.password,
    props.payload.mobileNumber,
    props.payload.teacherCourseCode,
    props.payload.teacherJamatCode,
    props.payload.gender,
    props.payload.dateOfBirth,
    props.payload.countryName,
    props.payload.fullPresentAddress,
    props.payload.fullPermanentAddress,
    props.payload.educationalBackground,
    props.payload.activeStatus,
    props.payload.designation,
  ]);

  const teacherfirstnameref = useRef();
  const teacherlastnameref = useRef();
  const teacherfirstnamebnref = useRef();
  const teacherlastnamebnref = useRef();
  const fathernameref = useRef();
  const fathernamebnref = useRef();
  const teachernidref = useRef();
  const tacherbirthregref = useRef();
  const tacheremailref = useRef();
  const tacherroleref = useRef();
  const resetpassref = useRef();
  const teachermobileref = useRef();
  const teachereducationref = useRef();
  const teachercoursecoderef = useRef();
  const teacherjamatcoderef = useRef();
  const teachergenderref = useRef();
  const teacherbirthdateref = useRef();
  const teacherpresentaddressref = useRef();
  const teacherparmanentaddressref = useRef();
  const teachercountryref = useRef();
  const teacherUserref = useRef();
  const designationref = useRef();

  const teacherradio1ref = useRef();
  const teacherradio2ref = useRef();

  const clickHandler = async (e) => {
    e.preventDefault();
    const teacherUserName = teacherUserref.current.value;
    const teacherfirstname = teacherfirstnameref.current.value;
    const teacherlastname = teacherlastnameref.current.value;
    const teacherfirstnamebn = teacherfirstnamebnref.current.value;
    const teacherlastnamebn = teacherlastnamebnref.current.value;
    const fathername = fathernameref.current.value;
    const fathernamebn = fathernamebnref.current.value;
    const teachernid = teachernidref.current.value;
    const tacherbirthreg = tacherbirthregref.current.value;
    const tacheremail = tacheremailref.current.value;
    const tacherrole = tacherroleref.current.value;

    const resetpass = resetpassref.current.value;
    const teachermobile = teachermobileref.current.value;
    const teachereducation = teachereducationref.current.value;
    const teachercoursecode = teachercoursecoderef.current.value;
    const teacherjamatcode = teacherjamatcoderef.current.value;
    const teachergender = teachergenderref.current.value;
    const teacherbirthdate = teacherbirthdateref.current.value;
    const teacherpresentaddress = teacherpresentaddressref.current.value;
    const teacherparmanentaddress = teacherparmanentaddressref.current.value;
    const teachercountry = teachercountryref.current.value;
    const designation = designationref.current.value;

    const teacherradio1 = teacherradio1ref.current.checked;
    const teacherradio2 = teacherradio2ref.current.checked;
    const status = teacherradio1
      ? "active"
      : teacherradio2
      ? "inactive"
      : "inactive";
    const idValue = props.data;

    const res = await updateData(
      teacherUserName,
      teacherfirstname,
      teacherfirstnamebn,
      teacherlastname,
      teacherlastnamebn,
      teachernid,
      tacherbirthreg,
      fathername,
      fathernamebn,
      tacheremail,
      resetpass,
      teachermobile,
      teachercoursecode,
      teacherjamatcode,
      teachergender,
      teacherbirthdate,
      teachercountry,
      teacherpresentaddress,
      teacherparmanentaddress,
      teachereducation,
      tacherrole,
      status,
      idValue,
      designation
    );

    if (res) {
      props.statechanger();
      myToast.success("Data was Updated successfully");
    } else {
      myToast.warning("something went wrong");
    }
  };
  const onChangeHandler1 = (e) => {
    setTeacher({
      userName: e.target.value,
    });
  };
  const onChangeHandler2 = (e) => {
    setTeacher({
      userRole: e.target.value,
    });
  };
  const onChangeHandler3 = (e) => {
    setTeacher({
      firstName: e.target.value,
    });
  };
  const onChangeHandler4 = (e) => {
    setTeacher({
      firstNamebn: e.target.value,
    });
  };
  const onChangeHandler5 = (e) => {
    setTeacher({
      lastName: e.target.value,
    });
  };
  const onChangeHandler6 = (e) => {
    setTeacher({
      lastNamebn: e.target.value,
    });
  };
  const onChangeHandler7 = (e) => {
    setTeacher({
      nidNumber: e.target.value,
    });
  };
  const onChangeHandler8 = (e) => {
    setTeacher({
      birthRegNumber: e.target.value,
    });
  };
  const onChangeHandler9 = (e) => {
    setTeacher({
      fatherName: e.target.value,
    });
  };
  const onChangeHandler10 = (e) => {
    setTeacher({
      fatherNamebn: e.target.value,
    });
  };
  const onChangeHandler11 = (e) => {
    setTeacher({
      emailAddress: e.target.value,
    });
  };
  const onChangeHandler12 = (e) => {
    setTeacher({
      password: e.target.value,
    });
  };
  const onChangeHandler13 = (e) => {
    setTeacher({
      mobileNumber: e.target.value,
    });
  };
  const onChangeHandler14 = (e) => {
    setTeacher({
      teacherCourseCode: e.target.value,
    });
  };
  const onChangeHandler15 = (e) => {
    setTeacher({
      teacherJamatCode: e.target.value,
    });
  };
  const onChangeHandler16 = (e) => {
    setTeacher({
      gender: e.target.value,
    });
  };
  const onChangeHandler17 = (e) => {
    setTeacher({
      dateOfBirth: e.target.value,
    });
  };
  const onChangeHandler18 = (e) => {
    setTeacher({
      fullPresentAddress: e.target.value,
    });
  };
  const onChangeHandler19 = (e) => {
    setTeacher({
      fullPermanentAddress: e.target.value,
    });
  };
  const onChangeHandler20 = (e) => {
    setTeacher({
      educationalBackground: e.target.value,
    });
  };
  const onChangeHandler21 = (e) => {
    setTeacher({
      countryName: e.target.value,
    });
  };
  const onChangeHandler22 = (e) => {
    setTeacher({
      designation: e.target.value,
    });
  };

  return (
    <form className="grid lg:grid-cols-3 w-full gap-5">
      <div className="input-type">
        <input
          ref={teacherfirstnameref}
          onChange={onChangeHandler3}
          value={teacher.firstName}
          className="border w-full px-5 py-3 focus:outline-none"
          type="text"
          name="teacherfirstname"
          placeholder="Enter First Name"
        ></input>
      </div>
      <div className="input-type">
        <input
          ref={teacherlastnameref}
          onChange={onChangeHandler5}
          value={teacher.lastName}
          className="border w-full px-5 py-3 focus:outline-none"
          type="text"
          name="teacherlastname"
          placeholder="Enter Last Name"
        ></input>
      </div>
      <div className="input-type">
        <input
          ref={teacherfirstnamebnref}
          onChange={onChangeHandler4}
          value={teacher.firstNamebn}
          className="border w-full px-5 py-3 focus:outline-none"
          type="text"
          name="teacherfirstnamebn"
          placeholder="নামের প্রথম অংশ লিখুন"
        ></input>
      </div>
      <div className="input-type">
        <input
          ref={teacherlastnamebnref}
          onChange={onChangeHandler6}
          value={teacher.lastNamebn}
          className="border w-full px-5 py-3 focus:outline-none"
          type="text"
          name="teacherlastnamebn"
          placeholder="নামের শেষের অংশ লিখুন"
        ></input>
      </div>
      <div className="input-type">
        <input
          ref={designationref}
          onChange={onChangeHandler22}
          value={teacher.designation}
          className="border w-full px-5 py-3 focus:outline-none"
          type="text"
          name="designation"
          placeholder="Enter Current Designation"
        ></input>
      </div>
      <div className="input-type">
        <input
          ref={fathernameref}
          onChange={onChangeHandler9}
          value={teacher.fatherName}
          className="border w-full px-5 py-3 focus:outline-none"
          type="text"
          name="teacherfathername"
          placeholder="Enter Fathers Name"
        ></input>
      </div>
      <div className="input-type">
        <input
          ref={fathernamebnref}
          onChange={onChangeHandler10}
          value={teacher.fatherNamebn}
          className="border w-full px-5 py-3 focus:outline-none"
          type="text"
          name="teacherfathernamebn"
          placeholder="বাবার নাম বাংলায় লিখুন"
        ></input>
      </div>
      <div className="input-type">
        <input
          ref={teacherUserref}
          onChange={onChangeHandler1}
          value={teacher.userName}
          className="border w-full px-5 py-3 focus:outline-none"
          type="text"
          name="teacherid"
          placeholder="Enter Teacher ID"
        ></input>
      </div>
      <div className="input-type">
        <input
          ref={teachernidref}
          onChange={onChangeHandler7}
          value={teacher.nidNumber}
          className="border w-full px-5 py-3 focus:outline-none"
          type="number"
          name="teacheridcard"
          placeholder="Enter NID Number"
        ></input>
      </div>
      <div className="input-type">
        <input
          ref={tacherbirthregref}
          onChange={onChangeHandler8}
          value={teacher.birthRegNumber}
          className="border w-full px-5 py-3 focus:outline-none"
          type="number"
          name="teacherbirthcard"
          placeholder="Enter Birth Registration Number"
        ></input>
      </div>
      <div className="input-type">
        <input
          ref={tacheremailref}
          onChange={onChangeHandler11}
          value={teacher.emailAddress}
          className="border w-full px-5 py-3 focus:outline-none"
          type="email"
          name="teacheremail"
          placeholder="Enter Email Address"
        ></input>
      </div>
      <div className="input-type">
        <input
          ref={tacherroleref}
          onChange={onChangeHandler2}
          value={teacher.userRole}
          className="border w-full px-5 py-3 focus:outline-none"
          type="text"
          name="teachertole"
          placeholder="Enter Role"
        ></input>
      </div>
      <div className="input-type">
        <input
          ref={resetpassref}
          onChange={onChangeHandler12}
          className="border w-full px-5 py-3 focus:outline-none"
          type="text"
          name="teacherpass"
          placeholder="Reset Password or keep blank"
        ></input>
      </div>
      <div className="input-type">
        <input
          ref={teachermobileref}
          onChange={onChangeHandler13}
          value={teacher.mobileNumber}
          className="border w-full px-5 py-3 focus:outline-none"
          type="number"
          name="teachermobile"
          placeholder="Enter Mobile Number"
        ></input>
      </div>
      <div className="input-type">
        <input
          ref={teachereducationref}
          onChange={onChangeHandler20}
          value={teacher.educationalBackground}
          className="border w-full px-5 py-3 focus:outline-none"
          type="text"
          name="teachereducation"
          placeholder="Enter Teacher Education"
        ></input>
      </div>
      <div className="input-type">
        <input
          ref={teachercoursecoderef}
          onChange={onChangeHandler14}
          value={teacher.teacherCourseCode}
          className="border w-full px-5 py-3 focus:outline-none"
          type="text"
          name="teachercoursecode"
          placeholder="Enter Teacher Course Code"
        ></input>
      </div>
      <div className="input-type">
        <input
          ref={teacherjamatcoderef}
          onChange={onChangeHandler15}
          value={teacher.teacherJamatCode}
          className="border w-full px-5 py-3 focus:outline-none"
          type="text"
          name="teacherjamatcode"
          placeholder="Enter teacher jamat Code"
        ></input>
      </div>
      <div className="input-type">
        <input
          ref={teachergenderref}
          onChange={onChangeHandler16}
          value={teacher.gender}
          className="border w-full px-5 py-3 focus:outline-none"
          type="text"
          name="teachergender"
          placeholder="Enter teacher gender"
        ></input>
      </div>
      <div className="input-type">
        <input
          ref={teacherbirthdateref}
          onChange={onChangeHandler17}
          value={teacher.dateOfBirth}
          placeholder="Enter Birth Date"
          className="border w-full px-5 py-3 focus:outline-none"
          type={inputType}
          onFocus={handleFocus}
          onBlur={handleBlur}
          name="teacherbirthdate"
        />
      </div>
      <div>
        <textarea
          ref={teacherpresentaddressref}
          onChange={onChangeHandler18}
          value={teacher.fullPresentAddress}
          id="presentaddress"
          name="presentaddress"
          rows="1"
          className="border w-full px-5 py-3 focus:outline-none"
          placeholder="Enter present address"
        ></textarea>
      </div>
      <div>
        <textarea
          ref={teacherparmanentaddressref}
          onChange={onChangeHandler19}
          value={teacher.fullPermanentAddress}
          id="permanentaddress"
          name="permanentaddress"
          rows="1"
          className="border w-full px-5 py-3 focus:outline-none"
          placeholder="Enter Permanent address"
        ></textarea>
      </div>
      <div className="input-type">
        <input
          ref={teachercountryref}
          onChange={onChangeHandler21}
          value={teacher.countryName}
          className="border w-full px-5 py-3 focus:outline-none"
          type="text"
          name="teachercountry"
          placeholder="Enter teacher country"
        ></input>
      </div>

      <div className="flex gap-10 items-center">
        {props.payload.activeStatus == "active" ? (
          <div className="form-check">
            <input
              ref={teacherradio1ref}
              type="radio"
              value="Active"
              id="radioDefault1"
              name="status"
              className="form-check-input appearance-none rounded-full h-4 w-4 border border-gray-300 bg-white checked:bg-green-500 checked:border-green-500 focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer"
              checked
            />
            <label
              htmlFor="radioDefault1"
              className="inline-block text-gray-800"
            >
              Active
            </label>
          </div>
        ) : (
          <div className="form-check">
            <input
              ref={teacherradio1ref}
              type="radio"
              value="Active"
              id="radioDefault1"
              name="status"
              className="form-check-input appearance-none rounded-full h-4 w-4 border border-gray-300 bg-white checked:bg-green-500 checked:border-green-500 focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer"
            />
            <label
              htmlFor="radioDefault1"
              className="inline-block text-gray-800"
            >
              Active
            </label>
          </div>
        )}

        {props.payload.activeStatus == "inactive" ? (
          <div className="form-check">
            <input
              ref={teacherradio2ref}
              type="radio"
              value="Inactive"
              id="radioDefault2"
              name="status"
              className="form-check-input appearance-none rounded-full h-4 w-4 border border-gray-300 bg-white checked:bg-green-500 checked:border-green-500 focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer"
              checked
            />
            <label
              htmlFor="radioDefault2"
              className="inline-block text-gray-800"
            >
              Inactive
            </label>
          </div>
        ) : (
          <div className="form-check">
            <input
              ref={teacherradio2ref}
              type="radio"
              value="Inactive"
              id="radioDefault2"
              name="status"
              className="form-check-input appearance-none rounded-full h-4 w-4 border border-gray-300 bg-white checked:bg-green-500 checked:border-green-500 focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer"
            />
            <label
              htmlFor="radioDefault2"
              className="inline-block text-gray-800"
            >
              Inactive
            </label>
          </div>
        )}
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

export default updateTeacherForm;
