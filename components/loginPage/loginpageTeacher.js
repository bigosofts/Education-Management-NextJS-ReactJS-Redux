"use client";
import { useState, useRef, useEffect } from "react";
import { createData as createTeacher } from "@/apiservices/teacherapiservices";
import mytoast from "../toast/toast";
import { teacherLogin } from "@/apiservices/checklogin";
import { isAdmin } from "@/apiservices/checklogin";
import { setToken } from "@/helper/sessionHelper";
import { sendMail } from "@/apiservices/sendMailapiservices";
import allCountry from "../dashboardPage/allCountry";

import "./loginDesign.css";
function LoginPageDesignTeacher({ userData }) {
  const countries = allCountry();
  const [Admin, setIsAdmin] = useState();
  const [data, setDatas] = useState();

  useEffect(() => {
    async function getData() {
      const res = await isAdmin();
      setIsAdmin(res);
    }
    getData();
  }, []);

  function addUser(e) {
    e.preventDefault();
    function checkEmail(
      firstName,
      lastName,
      role,
      emailId,
      nid,
      fatherName,
      fullpresent,
      fullpermanent,
      mobileNo,
      gender,
      country,
      educationBackground,
      password,
      designation
    ) {
      const haveEmail = userData.some((item) => item.emailAddress == emailId);
      const haveMobile = userData.some((item) => item.mobileNumber == mobileNo);
      if (haveEmail) {
        mytoast.info(
          "আপনার ইমেইলে একটি একাউন্ট আগে থেকেই আছে, দয়া করে অন্য ইমেইল ব্যাবহার করুন"
        );
      } else if (haveMobile) {
        mytoast.info(
          "আপনার মোবাইল নাম্বারটি দিয়ে একটি একাউন্ট আগে থেকেই আছে, দয়া করে অন্য মোবাইল নাম্বার ব্যাবহার করুন"
        );
      } else {
        if (role == "teacher") {
          async function setData2() {
            const res2 = await createTeacher(
              firstName,
              "",
              lastName,
              "",
              nid,
              "",
              fatherName,
              "",
              emailId,
              password,
              mobileNo,
              [],
              [],
              gender,
              "",
              country,
              fullpresent,
              fullpermanent,
              educationBackground,
              role,
              "active",
              designation,
              `${userData.length + 1}`,
              { status: "ok" }
            );
            if (res2.status == "Alhamdulillah") {
              userData.push({
                emailAddress: emailId,
                mobileNumber: mobileNo,
              });
              setDatas(res2.data.userName);
              mytoast.success("ওস্তাদ্দ/ওস্তাজা একাউন্টটি সফলভাবে তৈরী হয়েছে");

              sendMail(
                emailId,
                "Teacher Account has been Created",
                `শ্রদ্ধেয় ওস্তাদ/ওস্তাজা, ${firstName} ${lastName}, আলহামদুলিল্লাহ, আপনার একাউন্টটি খোলা হয়েছে। আপনার একাউন্ট আইডি হলঃ ${res2.data.userName}`,
                `<h1>শ্রদ্ধেয় ওস্তাদ/ওস্তাজা, ${firstName} ${lastName},<br/><br/> আলহামদুলিল্লাহ, আপনার একাউন্টটি খোলা হয়েছে। আপনার একাউন্ট আইডি হলঃ ${res2.data.userName}</h1>`
              );

              if (typeof fbq === "function") {
                fbq("trackCustom", "CompleteRegistrationTeacher");
              }

              //login logic
              if (Admin) {
                if (Admin.status == "noToken") {
                  const res5 = await teacherLogin(res2.data.userName, password);
                  if (res5.status == "Alhamdulillah") {
                    setToken("access_token", res5.token);

                    mytoast.success("আলহামদুলিলাহ, আপনি সফলভাবে লগিন করেছেন");
                    const hardRefresh = () => {
                      if (typeof window !== "undefined") {
                        window.location.href = `/dashboard/${res2.data.userName}`;
                      }
                    };
                    hardRefresh();
                  } else if (res5.status == "wrongpass") {
                    mytoast.danger("you entered wrong combination");
                  } else if (res5.status == "nouser") {
                    mytoast.danger(
                      "There is no account with this Teacher ID. Please check your TID"
                    );
                  }
                } else if (Admin.status == "UnauthorizedAccess") {
                  console.log("Unauthorized access");
                } else {
                  const hardRefresh = () => {
                    if (typeof window !== "undefined") {
                      window.location.href = `/dashboard/${res2.data.userName}`;
                    }
                  };
                  hardRefresh();
                }
              }
              //end login logic
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
      lastName,
      role,
      emailId,
      nid,
      fatherName,
      fullpresent,
      fullpermanent,
      mobileNo,
      gender,
      country,
      educationBackground,
      password,
      designation
    ) {
      let patternName = /^[a-zA-Z_ ]*$/;
      let patternEmail = /[^@]+@[^@]+\.[a-zA-Z]{2,6}/;
      let patternMobile = /^\+\d+$/;
      if (!patternName.test(firstName)) {
        mytoast.info(
          "নামের প্রথম অংশ ভুল হয়েছে, শুধুই ইংরেজী বর্ণমালা ব্যাবহার করুন"
        );
      } else if (!patternName.test(lastName)) {
        mytoast.info(
          "নামের দ্বিতীয় অংশ ভুল হয়েছে, শুধুই ইংরেজী বর্ণমালা ব্যাবহার করুন"
        );
      } else if (!patternName.test(fatherName)) {
        mytoast.info(
          "বাবার নাম ভুল হয়েছে, শুধুই ইংরেজী বর্ণমালা ব্যাবহার করুন"
        );
      } else if (!patternEmail.test(emailId)) {
        mytoast.info("ইমেইল ফরম্যাটটি সঠিক হয় নি");
      } else if (!patternMobile.test(mobileNo)) {
        mytoast.info("মোবাইলের ফরম্যাটটি সঠিক হয় নি");
      } else {
        checkEmail(
          firstName,
          lastName,
          role,
          emailId,
          nid,
          fatherName,
          fullpresent,
          fullpermanent,
          mobileNo,
          gender,
          country,
          educationBackground,
          password,
          designation
        );
      }
    }

    if (!firstNameref.current.value) {
      mytoast.info("নামের প্রথম অংশ অবশ্যই ফিলাপ করতে হবে");
    } else if (!lastNameref.current.value) {
      mytoast.info("নামের দ্বিতীয় অংশ অবশ্যই ফিলাপ করতে হবে");
    } else if (!emailIdref.current.value) {
      mytoast.info("ইমেইল আইডি অবশ্যই ফিলাপ করতে হবে");
    } else if (!nidref.current.value) {
      mytoast.info("ন্যাশনাল আইডি নাম্বার অবশ্যই ফিলাপ করতে হবে");
    } else if (!fatherNameref.current.value) {
      mytoast.info("বাবার নাম অবশ্যই ফিলাপ করতে হবে");
    } else if (!fullpresentref.current.value) {
      mytoast.info("বর্তমান ঠিকানা অবশ্যই ফিলাপ করতে হবে");
    } else if (!fullpermanentref.current.value) {
      mytoast.info("স্থায়ী ঠিকানা অবশ্যই ফিলাপ করতে হবে");
    } else if (!mobileNoref.current.value) {
      mytoast.info("মোবাইল নাম্বার অবশ্যই ফিলাপ করতে হবে");
    } else if (!genderref.current.value) {
      mytoast.info("জেন্ডার অবশ্যই ফিলাপ করতে হবে");
    } else if (!countryref.current.value) {
      mytoast.info("দেশের নাম অবশ্যই ফিলাপ করতে হবে");
    } else if (!educationBackgroundref.current.value) {
      mytoast.info("শিক্ষাগত যোগ্যতা অবশ্যই ফিলাপ করতে হবে");
    } else if (!designationref.current.value) {
      mytoast.info("বর্তমান পেশা অবশ্যই ফিলাপ করতে হবে");
    } else if (!passwordref.current.value) {
      mytoast.info("পাসওয়ার্ড অবশ্যই ফিলাপ করতে হবে");
    } else {
      AddReaction(
        firstNameref.current.value,
        lastNameref.current.value,
        "teacher",
        emailIdref.current.value,
        nidref.current.value,
        fatherNameref.current.value,
        fullpresentref.current.value,
        fullpermanentref.current.value,
        mobileNoref.current.value,
        genderref.current.value,
        countryref.current.value,
        educationBackgroundref.current.value,
        passwordref.current.value,
        designationref.current.value
      );
    }
  }
  const firstNameref = useRef();
  const lastNameref = useRef();
  const emailIdref = useRef();
  const passwordref = useRef();
  const mobileNoref = useRef();
  const nidref = useRef();
  const genderref = useRef();
  const fatherNameref = useRef();
  const countryref = useRef();
  const fullpresentref = useRef();
  const fullpermanentref = useRef();
  const educationBackgroundref = useRef();
  const designationref = useRef();

  return (
    <section className="pt-10 pb-10" style={{ backgroundColor: "#fff" }}>
      <h1 className="text-2xl text-slate-950 mt-5 mb-5 text-center">
        ওস্তাদ সাইন আপ ফর্ম
      </h1>
      <div className="box-border flex flex-col justify-center w-full md:w-1/2 m-auto border-[0px] md:border-[1px] border-slate-400 rounded-3xl md:flex-row shadow-none md:shadow-xl">
        <div className="w-full rounded-2xl">
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
            <label className="block mb-2 text-lg text-slate-600" htmlFor="nid">
              ন্যাশনাল আইডি নাম্বার লিখুনঃ
            </label>
            <input
              className="block w-full p-2 border-[1px] border-slate-300 rounded-3xl text-lg mb-4"
              type="number"
              placeholder="এনআইডি নাম্বার লিখুন"
              name="nid"
              id="nid"
              ref={nidref}
            ></input>
            <label
              className="block mb-2 text-lg text-slate-600"
              htmlFor="fatherName"
            >
              বাবার নাম ইংরেজিতে লিখুনঃ
            </label>
            <input
              className="block w-full p-2 border-[1px] border-slate-300 rounded-3xl text-lg mb-4"
              type="text"
              placeholder="বাবার নাম ইংরেজিতে লিখুন"
              name="fatherName"
              id="fatherName"
              ref={fatherNameref}
            ></input>
            <label
              className="block mb-2 text-lg text-slate-600"
              htmlFor="presentAddress"
            >
              আপনার বর্তমান ঠিকানা লিখুনঃ
            </label>
            <textarea
              className="block w-full p-2 border-[1px] border-slate-300 rounded-3xl text-lg mb-4"
              type="text"
              placeholder="বর্তমান ঠিকানা লিখুন"
              name="presentAddress"
              id="presentAddress"
              ref={fullpresentref}
            ></textarea>

            <label
              className="block mb-2 text-lg text-slate-600"
              htmlFor="permanentAddress"
            >
              আপনার পার্মানেন্ট ঠিকানা লিখুনঃ
            </label>
            <textarea
              className="block w-full p-2 border-[1px] border-slate-300 rounded-3xl text-lg mb-4"
              type="text"
              placeholder="বর্তমান ঠিকানা লিখুন"
              name="permanentAddress"
              id="permanentAddress"
              ref={fullpermanentref}
            ></textarea>
          </form>
        </div>
        <div className="w-full md:mt-0">
          <form className="w-full p-5">
            <label
              className="block mb-2 text-lg text-slate-600"
              htmlFor="email"
            >
              আপনার টেলিগ্রাম মোবাইল নাম্বারটি এভাবে লিখুন (+8801756668432)।
              প্লাস সাইন + আপনি যে দেশে আছেন সেই দেশের কান্ট্রিকোড + নাম্বারের
              বাকি ডিজিট লিখুন। (ক্ল্যাসের জন্য টেলিগ্রাম নাম্বার থাকা
              বাধ্যতামূলক)
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
              আপানার জেন্ডার নির্বাচন করুনঃ
            </label>
            <select
              className="block w-full p-2 border-[1px] border-slate-300 rounded-3xl text-lg mb-4"
              ref={genderref}
            >
              <option value=""> select Gender </option>
              <option value="male"> Male </option>
              <option value="female"> Female </option>
            </select>

            <label
              className="block mb-2 text-lg text-slate-600"
              htmlFor="country"
            >
              আপনি কোন দেশে বসবাসরত?
            </label>
            <select
              ref={countryref}
              id="country"
              name="country"
              type="text"
              className="block w-full p-2 border-[1px] border-slate-300 rounded-3xl text-lg mb-4"
            >
              <option value="">select country</option>
              {countries.data.map((item, i) => (
                <option key={i} value={item.name}>
                  {item.name}
                </option>
              ))}
            </select>

            <label
              className="block mb-2 text-lg text-slate-600"
              htmlFor="educationBackground"
            >
              আপনার শিক্ষাগত যোগ্যতা লিখুনঃ
            </label>
            <textarea
              className="block w-full p-2 border-[1px] border-slate-300 rounded-3xl text-lg mb-4"
              type="text"
              placeholder="শিক্ষাগত যোগ্যতা লিখুন"
              name="educationBackground"
              id="educationBackground"
              ref={educationBackgroundref}
            ></textarea>

            <label
              className="block mb-2 text-lg text-slate-600"
              htmlFor="designation"
            >
              আপনার বর্তমান পেশা লিখুনঃ
            </label>
            <textarea
              className="block w-full p-2 border-[1px] border-slate-300 rounded-3xl text-lg mb-4"
              type="text"
              placeholder="বর্তমান পেশা লিখুন"
              name="designation"
              id="designation"
              ref={designationref}
            ></textarea>

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
          </form>
        </div>
      </div>
      <button
        onClick={addUser}
        className="bg-blue-500 text-white text-lg font-bold mt-6 overflow-hidden box-border flex flex-col justify-center w-[90%] md:w-1/2 m-auto border-[0px] md:border-[1px] border-slate-400 rounded-3xl md:flex-row shadow-none md:shadow-xl"
      >
        <div className="p-5">একাউন্ট তৈরী করুন</div>
      </button>

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

export default LoginPageDesignTeacher;
