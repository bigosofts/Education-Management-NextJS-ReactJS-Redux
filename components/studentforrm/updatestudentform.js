"use client";
import React from "react";
import { useRef } from "react";
import { BiBrush } from "react-icons/bi";
import myToast from "@/components/toast/toast";
import { updateData } from "@/apiservices/studentapiservices";
import { useState, useEffect } from "react";

function updateStudentForm(props) {
  const [inputType, setInputType] = useState("text");
  const handleFocus = () => {
    setInputType("date");
  };

  const handleBlur = () => {
    setInputType("text");
  };

  const [student, setStudent] = useState({
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
    occupation: props.payload.occupation,
    studentCourseCode: props.payload.studentCourseCode,
    studentJamatCode: props.payload.studentJamatCode,
    gender: props.payload.gender,
    dateOfBirth: props.payload.dateOfBirth,
    countryName: props.payload.countryName,
    fullPresentAddress: props.payload.fullPresentAddress,
    fullPermanentAddress: props.payload.fullPermanentAddress,
    admissionDate: props.payload.admissionDate,
    admissionSession: props.payload.admissionSession,
    studentMotive: props.payload.studentMotive,
    paymentStatus: props.payload.paymentStatus,
    activeStatus: props.payload.activeStatus,
  });

  useEffect(() => {
    setStudent({
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
      occupation: props.payload.occupation,
      studentCourseCode: props.payload.studentCourseCode,
      studentJamatCode: props.payload.studentJamatCode,
      gender: props.payload.gender,
      dateOfBirth: props.payload.dateOfBirth,
      countryName: props.payload.countryName,
      fullPresentAddress: props.payload.fullPresentAddress,
      fullPermanentAddress: props.payload.fullPermanentAddress,
      admissionDate: props.payload.admissionDate,
      admissionSession: props.payload.admissionSession,
      studentMotive: props.payload.studentMotive,
      paymentStatus: props.payload.paymentStatus,
      activeStatus: props.payload.activeStatus,
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
    props.payload.occupation,
    props.payload.studentCourseCode,
    props.payload.studentJamatCode,
    props.payload.gender,
    props.payload.dateOfBirth,
    props.payload.countryName,
    props.payload.fullPresentAddress,
    props.payload.fullPermanentAddress,
    props.payload.admissionDate,
    props.payload.admissionSession,
    props.payload.studentMotive,
    props.payload.paymentStatus,
    props.payload.activeStatus,
  ]);

  const firstnameref = useRef();
  const lastnameref = useRef();
  const firstnamebnref = useRef();
  const lastnamebnref = useRef();
  const studentidref = useRef();
  const studentnidref = useRef();
  const studentbirthregref = useRef();
  const studentemailref = useRef();
  const studentroleref = useRef();
  const resetpassref = useRef();
  const mobilenoref = useRef();
  const occupationref = useRef();
  const fathernameref = useRef();
  const fathernamebnref = useRef();
  const studentcoursecoderef = useRef();
  const studentjamatref = useRef();
  const studentgenderref = useRef();
  const birthdateref = useRef();
  const admissiondateref = useRef();
  const presentaddressref = useRef();
  const parmanetaddressref = useRef();
  const studentcountryref = useRef();
  const admissionsessionref = useRef();
  const studentmotiveref = useRef();
  const studentpaymentstatusref = useRef();

  const studentradio1ref = useRef();
  const studentradio2ref = useRef();

  const clickHandler = async (e) => {
    e.preventDefault();
    const firstname = firstnameref.current.value;
    const lastname = lastnameref.current.value;
    const firstnamebn = firstnamebnref.current.value;
    const lastnamebn = lastnamebnref.current.value;
    const studentid = studentidref.current.value;
    const studentnid = studentnidref.current.value;
    const birthreg = studentbirthregref.current.value;
    const studentemail = studentemailref.current.value;
    const studentrole = studentroleref.current.value;
    const resetpass = resetpassref.current.value;
    const mobileno = mobilenoref.current.value;
    const occupation = occupationref.current.value;
    const fathername = fathernameref.current.value;
    const fathernamebn = fathernamebnref.current.value;
    const studentcoursecode = studentcoursecoderef.current.value;
    const studentjamatcode = studentjamatref.current.value;
    const studentgender = studentgenderref.current.value;
    const birthdate = birthdateref.current.value;
    const admissiondate = admissiondateref.current.value;
    const presentaddress = presentaddressref.current.value;
    const parmanentaddress = parmanetaddressref.current.value;
    const studentcountry = studentcountryref.current.value;
    const admissionsession = admissionsessionref.current.value;
    const studentmotive = studentmotiveref.current.value;
    const studentpaymentstatus = studentpaymentstatusref.current.value;

    const studentradio1 = studentradio1ref.current.checked;
    const studentradio2 = studentradio2ref.current.checked;
    const status = studentradio1
      ? "active"
      : studentradio2
      ? "inactive"
      : "inactive";
    const idValue = props.data;

    const res = await updateData(
      studentid,
      firstname,
      firstnamebn,
      lastname,
      lastnamebn,
      studentnid,
      birthreg,
      fathername,
      fathernamebn,
      studentemail,
      resetpass,
      mobileno,
      occupation,
      studentcoursecode,
      studentjamatcode,
      studentgender,
      birthdate,
      studentcountry,
      presentaddress,
      parmanentaddress,
      admissionsession,
      admissiondate,
      studentmotive,
      "details",
      studentpaymentstatus,
      studentrole,
      "extracurricular",
      status,
      idValue
    );

    if (res) {
      props.statechanger();
      myToast.success("Data was Updated successfully");
    } else {
      myToast.warning("something went wrong");
    }
  };
  const onChangeHandler1 = (e) => {
    setStudent({
      firstName: e.target.value,
    });
  };
  const onChangeHandler2 = (e) => {
    setStudent({
      lastName: e.target.value,
    });
  };
  const onChangeHandler3 = (e) => {
    setStudent({
      firstNamebn: e.target.value,
    });
  };
  const onChangeHandler4 = (e) => {
    setStudent({
      lastNamebn: e.target.value,
    });
  };
  const onChangeHandler5 = (e) => {
    setStudent({
      nidNumber: e.target.value,
    });
  };
  const onChangeHandler6 = (e) => {
    setStudent({
      birthRegNumber: e.target.value,
    });
  };
  const onChangeHandler7 = (e) => {
    setStudent({
      userRole: e.target.value,
    });
  };
  const onChangeHandler8 = (e) => {
    setStudent({
      password: e.target.value,
    });
  };
  const onChangeHandler9 = (e) => {
    setStudent({
      mobileNumber: e.target.value,
    });
  };
  const onChangeHandler10 = (e) => {
    setStudent({
      occupation: e.target.value,
    });
  };
  const onChangeHandler11 = (e) => {
    setStudent({
      fatherName: e.target.value,
    });
  };
  const onChangeHandler12 = (e) => {
    setStudent({
      fatherNamebn: e.target.value,
    });
  };
  const onChangeHandler13 = (e) => {
    setStudent({
      studentCourseCode: e.target.value,
    });
  };
  const onChangeHandler14 = (e) => {
    setStudent({
      studentJamatCode: e.target.value,
    });
  };
  const onChangeHandler15 = (e) => {
    setStudent({
      gender: e.target.value,
    });
  };
  const onChangeHandler16 = (e) => {
    setStudent({
      dateOfBirth: e.target.value,
    });
  };
  const onChangeHandler17 = (e) => {
    setStudent({
      admissionDate: e.target.value,
    });
  };
  const onChangeHandler18 = (e) => {
    setStudent({
      fullPresentAddress: e.target.value,
    });
  };
  const onChangeHandler19 = (e) => {
    setStudent({
      fullPermanentAddress: e.target.value,
    });
  };
  const onChangeHandler20 = (e) => {
    setStudent({
      countryName: e.target.value,
    });
  };
  const onChangeHandler21 = (e) => {
    setStudent({
      admissionSession: e.target.value,
    });
  };
  const onChangeHandler22 = (e) => {
    setStudent({
      studentMotive: e.target.value,
    });
  };
  const onChangeHandler23 = (e) => {
    setStudent({
      paymentStatus: e.target.value,
    });
  };
  const onChangeHandler24 = (e) => {
    setStudent({
      userName: e.target.value,
    });
  };
  const onChangeHandler25 = (e) => {
    setStudent({
      emailAddress: e.target.value,
    });
  };

  return (
    <form className="grid lg:grid-cols-3 w-full gap-5">
      <div className="input-type">
        <input
          ref={firstnameref}
          onChange={onChangeHandler1}
          value={student.firstName}
          className="border w-full px-5 py-3 focus:outline-none"
          type="text"
          name="studentfirstname"
          placeholder="Enter First Name"
        ></input>
      </div>
      <div className="input-type">
        <input
          ref={lastnameref}
          onChange={onChangeHandler2}
          value={student.lastName}
          className="border w-full px-5 py-3 focus:outline-none"
          type="text"
          name="studentlastname"
          placeholder="Enter Last Name"
        ></input>
      </div>
      <div className="input-type">
        <input
          ref={firstnamebnref}
          onChange={onChangeHandler3}
          value={student.firstNamebn}
          className="border w-full px-5 py-3 focus:outline-none"
          type="text"
          name="studentfirstnamebn"
          placeholder="নামের প্রথম অংশ লিখুন"
        ></input>
      </div>
      <div className="input-type">
        <input
          ref={lastnamebnref}
          onChange={onChangeHandler4}
          value={student.lastNamebn}
          className="border w-full px-5 py-3 focus:outline-none"
          type="text"
          name="studentlastnamebn"
          placeholder="নামের শেষের অংশ লিখুন"
        ></input>
      </div>
      <div className="input-type">
        <input
          ref={studentidref}
          onChange={onChangeHandler24}
          value={student.userName}
          className="border w-full px-5 py-3 focus:outline-none"
          type="text"
          name="studentid"
          placeholder="Enter Student ID"
        ></input>
      </div>
      <div className="input-type">
        <input
          ref={studentnidref}
          onChange={onChangeHandler5}
          value={student.nidNumber}
          className="border w-full px-5 py-3 focus:outline-none"
          type="number"
          name="studentidcard"
          placeholder="Enter NID Number"
        ></input>
      </div>
      <div className="input-type">
        <input
          ref={studentbirthregref}
          onChange={onChangeHandler6}
          value={student.birthRegNumber}
          className="border w-full px-5 py-3 focus:outline-none"
          type="number"
          name="studentbirthcard"
          placeholder="Enter Birth Registration Number"
        ></input>
      </div>
      <div className="input-type">
        <input
          ref={studentemailref}
          onChange={onChangeHandler25}
          value={student.emailAddress}
          className="border w-full px-5 py-3 focus:outline-none"
          type="email"
          name="studentemail"
          placeholder="Enter Email Address"
        ></input>
      </div>
      <div className="input-type">
        <input
          ref={studentroleref}
          onChange={onChangeHandler7}
          value={student.userRole}
          className="border w-full px-5 py-3 focus:outline-none"
          type="text"
          name="studentrole"
          placeholder="Enter Role"
        ></input>
      </div>
      <div className="input-type">
        <input
          ref={resetpassref}
          onChange={onChangeHandler8}
          value={student.password}
          className="border w-full px-5 py-3 focus:outline-none"
          type="text"
          name="studentpass"
          placeholder="Reset Password or keep blank"
        ></input>
      </div>
      <div className="input-type">
        <input
          ref={mobilenoref}
          onChange={onChangeHandler9}
          value={student.mobileNumber}
          className="border w-full px-5 py-3 focus:outline-none"
          type="number"
          name="studentmobile"
          placeholder="Enter Mobile Number"
        ></input>
      </div>
      <div className="input-type">
        <input
          ref={occupationref}
          onChange={onChangeHandler10}
          value={student.occupation}
          className="border w-full px-5 py-3 focus:outline-none"
          type="text"
          name="studentoccupation"
          placeholder="Enter Student Occupation"
        ></input>
      </div>
      <div className="input-type">
        <input
          ref={fathernameref}
          onChange={onChangeHandler11}
          value={student.fatherName}
          className="border w-full px-5 py-3 focus:outline-none"
          type="text"
          name="studentfathername"
          placeholder="Enter Student Father Name"
        ></input>
      </div>
      <div className="input-type">
        <input
          ref={fathernamebnref}
          onChange={onChangeHandler12}
          value={student.fatherNamebn}
          className="border w-full px-5 py-3 focus:outline-none"
          type="text"
          name="studentfathernamebn"
          placeholder="বাবার নাম লিখুন বাংলায়"
        ></input>
      </div>
      <div className="input-type">
        <input
          ref={studentcoursecoderef}
          onChange={onChangeHandler13}
          value={student.studentCourseCode}
          className="border w-full px-5 py-3 focus:outline-none"
          type="text"
          name="studentcoursecode"
          placeholder="Enter Student Course Code"
        ></input>
      </div>
      <div className="input-type">
        <input
          ref={studentjamatref}
          onChange={onChangeHandler14}
          value={student.studentJamatCode}
          className="border w-full px-5 py-3 focus:outline-none"
          type="text"
          name="studentjamatcode"
          placeholder="Enter Student Jamat Code"
        ></input>
      </div>
      <div className="input-type">
        <input
          ref={studentgenderref}
          onChange={onChangeHandler15}
          value={student.gender}
          className="border w-full px-5 py-3 focus:outline-none"
          type="text"
          name="studentgender"
          placeholder="Enter Student gender"
        ></input>
      </div>
      <div className="input-type">
        <input
          ref={birthdateref}
          onChange={onChangeHandler16}
          value={student.dateOfBirth}
          placeholder="Enter Birth Date"
          className="border w-full px-5 py-3 focus:outline-none"
          type={inputType}
          onFocus={handleFocus}
          onBlur={handleBlur}
          name="studentbirthdate"
        />
      </div>
      <div className="input-type">
        <input
          ref={admissiondateref}
          onChange={onChangeHandler17}
          value={student.admissionDate}
          placeholder="Enter Admission Date"
          className="border w-full px-5 py-3 focus:outline-none"
          type={inputType}
          onFocus={handleFocus}
          onBlur={handleBlur}
          name="studentadmissiondate"
        />
      </div>
      <div>
        <textarea
          ref={presentaddressref}
          onChange={onChangeHandler18}
          value={student.fullPresentAddress}
          id="presentaddress"
          name="presentaddress"
          rows="1"
          className="border w-full px-5 py-3 focus:outline-none"
          placeholder="Enter present address"
        ></textarea>
      </div>
      <div>
        <textarea
          ref={parmanetaddressref}
          onChange={onChangeHandler19}
          value={student.fullPermanentAddress}
          id="permanentaddress"
          name="permanentaddress"
          rows="1"
          className="border w-full px-5 py-3 focus:outline-none"
          placeholder="Enter Permanent address"
        ></textarea>
      </div>
      <div className="input-type">
        <input
          ref={studentcountryref}
          onChange={onChangeHandler20}
          value={student.countryName}
          className="border w-full px-5 py-3 focus:outline-none"
          type="text"
          name="studentcountry"
          placeholder="Enter Student country"
        ></input>
      </div>
      <div className="input-type">
        <input
          ref={admissionsessionref}
          onChange={onChangeHandler21}
          value={student.admissionSession}
          className="border w-full px-5 py-3 focus:outline-none"
          type="text"
          name="admissionsession"
          placeholder="Enter Student admission session"
        ></input>
      </div>
      <div className="input-type">
        <input
          ref={studentmotiveref}
          onChange={onChangeHandler22}
          value={student.studentMotive}
          className="border w-full px-5 py-3 focus:outline-none"
          type="text"
          name="studentmotive"
          placeholder="Enter Student Motive"
        ></input>
      </div>
      <div className="input-type">
        <input
          ref={studentpaymentstatusref}
          onChange={onChangeHandler23}
          value={student.paymentStatus}
          className="border w-full px-5 py-3 focus:outline-none"
          type="text"
          name="paymentstatus"
          placeholder="Enter Student Payment Status"
        ></input>
      </div>

      <div className="flex gap-10 items-center">
        {props.payload.activeStatus == "active" ? (
          <div className="form-check">
            <input
              ref={studentradio1ref}
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
              ref={studentradio1ref}
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
              ref={studentradio2ref}
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
              ref={studentradio2ref}
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

export default updateStudentForm;
