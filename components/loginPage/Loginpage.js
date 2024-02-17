"use client";
import { useState, useRef } from "react";
import { createData as createStudent } from "@/apiservices/studentapiservices";
import { createData as createTeacher } from "@/apiservices/teacherapiservices";
import mytoast from "../toast/toast";

import "./loginDesign.css";
function LoginPageDesign({ userData }) {
  const [data, setDatas] = useState();
  function addUser(e) {
    e.preventDefault();
    function checkEmail(
      firstName,
      lastname,
      studentRole,
      email,
      mobile,
      password
    ) {
      const haveEmail = userData.some((item) => item.emailAddress == email);
      const haveMobile = userData.some((item) => item.mobileNumber == mobile);
      if (haveEmail) {
        mytoast.warning("Your Email already Exist. Try Different One");
      } else if (haveMobile) {
        mytoast.warning("Your Mobile No. already Exist. Try Different One");
      } else {
        if (studentRole == "teacher") {
          async function setData() {
            const res = await createTeacher(
              firstName,
              "",
              lastname,
              "",
              "",
              "",
              "",
              "",
              email,
              password,
              mobile,
              [],
              [],
              "",
              "",
              "",
              "",
              "",
              "",
              "teacher",
              "active",
              "",
              `${userData.length + 1}`,
              { status: "ok" }
            );
            if (res.status == "Alhamdulillah") {
              userData.push({
                emailAddress: email,
                mobileNumber: mobile,
              });
              setDatas(res.data.userName);
              mytoast.success("Your Teacher Account has been created");
            } else {
              console.log(res);
            }
          }
          setData();
        } else if (studentRole == "student") {
          async function setData2() {
            const res2 = await createStudent({
              firstNameen: firstName,
              firstNamebn: "",
              lastNameen: lastname,
              lastNamebn: "",
              nidNumber: "",
              birthRegNumber: "",
              fatherNameen: "",
              fatherNamebn: "",
              emailAddress: email,
              password,
              mobileNumber: mobile,
              occupation: "",
              studentCourseCode: [],
              studentJamatCode: [],
              gender: "",
              dateOfBirth: "",
              countryName: "",
              fullPresentAddress: "",
              fullPermanentAddress: "",
              admissionSession: "",
              studentMotive: "",
              paymentStatus: {
                addmissionDueStatus: true,
                consequentDueStatus: false,
                paymentID: "",
              },
              extracurricular: "",
              details: { status: "ok" },
              activeStatus: "active",
              userRole: "student",
              userName: `${userData.length + 1}`,
              studentDepartment: [],
              studentSemester: [],
            });
            if (res2.status == "Alhamdulillah") {
              userData.push({
                emailAddress: email,
                mobileNumber: mobile,
              });
              setDatas(res2.data.userName);
              mytoast.success("Your Student Account has been created");
            } else {
              console.log(res2);
            }
          }
          setData2();
        }
      }
    }
    function AddReaction(
      firstName,
      lastname,
      studentRole,
      email,
      mobile,
      password
    ) {
      let patternName = /^[a-zA-Z_ ]*$/;
      let patternEmail = /[^@]+@[^@]+.[a-zA-Z]{2,6}/;
      let patternMobile = /^\+[1-9]{1}[0-9]{3,12}$/;
      if (!patternName.test(firstName)) {
        mytoast.warning("Invalid FirstName. Use Only Alphabets");
      } else if (!patternName.test(lastname)) {
        mytoast.warning("Invalid Lastname. Use Only Alphabets");
      } else if (!patternEmail.test(email)) {
        mytoast.warning("Invalid Email fromat");
      } else if (!patternMobile.test(mobile)) {
        mytoast.warning("Invalid Mobile fromat");
      } else {
        checkEmail(firstName, lastname, studentRole, email, mobile, password);
      }
    }

    if (!firstNameref.current.value) {
      mytoast.warning("First Name need to be filled up");
    } else if (!lastNameref.current.value) {
      mytoast.warning("Last Name need to be filled up");
    } else if (studentRoleref.current.value == "none") {
      mytoast.warning("Role need to be filled up");
    } else if (!emailIdref.current.value) {
      mytoast.warning("Email ID need to be filled up");
    } else if (!mobileNoref.current.value) {
      mytoast.warning("Mobile Name need to be filled up");
    } else if (!passwordref.current.value) {
      mytoast.warning("Password need to be filled up");
    } else {
      AddReaction(
        firstNameref.current.value,
        lastNameref.current.value,
        studentRoleref.current.value,
        emailIdref.current.value,
        mobileNoref.current.value,
        passwordref.current.value
      );
    }
  }
  const firstNameref = useRef();
  const lastNameref = useRef();
  const emailIdref = useRef();
  const passwordref = useRef();
  const mobileNoref = useRef();
  const studentRoleref = useRef();

  return (
    <section className="pt-10 pb-10" style={{ backgroundColor: "#fff" }}>
      <div className="box-border flex flex-col justify-center w-full md:w-1/2 m-auto border-[0px] md:border-[1px] border-slate-400 rounded-3xl md:flex-row shadow-none md:shadow-xl">
        <div className="bg-[url('/images/signup-image.png')] w-full rounded-2xl image-div"></div>
        <div className="w-full">
          <h1 className="text-2xl text-slate-950 mt-5 mb-5 text-center">
            সাইন আপ ফর্ম
          </h1>
          <form className="w-full p-5">
            <label
              className="block mb-2 text-lg text-slate-600"
              htmlFor="firstName"
            >
              নামের প্রথম অংশ ইংরেজীতে লিখুনঃ
            </label>
            <input
              className="block w-full p-2 border-[1px] border-slate-300 rounded-3xl text-lg mb-4"
              type="text"
              placeholder="নামের প্রথম অংশ লিখুন"
              name="firstName"
              id="firstName"
              ref={firstNameref}
            ></input>

            <label
              className="block mb-2 text-lg text-slate-600"
              htmlFor="lastName"
            >
              নামের দ্বিতীয় অংশ ইংরেজীতে লিখুনঃ
            </label>
            <input
              className="block w-full p-2 border-[1px] border-slate-300 rounded-3xl text-lg mb-4"
              type="text"
              placeholder="নামের দ্বিতীয় অংশ লিখুন"
              name="lastName"
              id="lastName"
              ref={lastNameref}
            ></input>

            <label
              className="block mb-2 text-lg text-slate-600"
              htmlFor="accountType"
            >
              আপনি কোন একাউন্ট খুলতে চাচ্ছেন?
            </label>
            <select
              className="block w-full p-2 border-[1px] border-slate-300 rounded-3xl text-lg mb-4"
              name="accountType"
              id="accountType"
              ref={studentRoleref}
            >
              <option value="none">একাউন্ট নির্বাচন করুন</option>
              <option value="teacher">শিক্ষক/শিক্ষিকা</option>
              <option value="student">ছাত্র/ছাত্রী</option>
            </select>

            <label
              className="block mb-2 text-lg text-slate-600"
              htmlFor="email"
            >
              ইমেইল আইডি লিখুনঃ
            </label>
            <input
              className="block w-full p-2 border-[1px] border-slate-300 rounded-3xl text-lg mb-4"
              type="email"
              placeholder="ইমেইল আইডি লিখুন"
              name="email"
              id="email"
              ref={emailIdref}
            ></input>
            <label
              className="block mb-2 text-lg text-slate-600"
              htmlFor="email"
            >
              মোবাইল নাম্বার ইংরেজীতে লিখুনঃ
            </label>
            <input
              className="block w-full p-2 border-[1px] border-slate-300 rounded-3xl text-lg mb-4"
              type="tel"
              placeholder="+8801710000000"
              name="mobile"
              id="mobile"
              ref={mobileNoref}
            ></input>

            <label
              className="block mb-2 text-lg text-slate-600"
              htmlFor="password"
            >
              পছন্দমত একটি পাসওয়ার্ড দিনঃ
            </label>
            <input
              className="block w-full p-2 border-[1px] border-slate-300 rounded-3xl text-lg mb-4"
              type="password"
              placeholder="পাসওয়ার্ড দিন"
              name="password"
              ref={passwordref}
            ></input>

            <button
              onClick={addUser}
              className="bg-blue-500 hover:bg-blue-400 text-white text-lg font-bold mt-6 py-2 px-2 border-b-4 border-blue-700 hover:border-blue-500 rounded-3xl w-full"
            >
              রেজিস্ট্রেশন করুন
            </button>
          </form>
        </div>
      </div>

      <h1 className=" w-full md:w-1/2 m-auto text-2xl p-5 mt-10 mb-5 text-center text-rose-600">
        {data ? `আপনার আইডিঃ ${data}` : ""}
      </h1>
      <h2 className="px-5 w-full md:w-1/2 m-auto text-2xl text-slate-950 mb-5 text-center">
        {data
          ? `আসসালামু আলাইকুম। আইডিটি সংরক্ষণ করুন। পরবর্তীতে সাইন ইন করতে আপনার আইডিটি প্রয়োজন হবে।`
          : ""}
      </h2>
    </section>
  );
}

export default LoginPageDesign;
