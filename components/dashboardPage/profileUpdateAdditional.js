"use client";
import { useState } from "react";

import { updateData } from "@/apiservices/studentapiservices";
import { useSelector } from "react-redux";
import mytoast from "../toast/toast";
import allCountry from "./allCountry";

import { useSearchParams } from "next/navigation";

function ProfileUpdateAdditional() {
  const countries = allCountry();
  const [inputType, setInputType] = useState("text");
  const searchParams = useSearchParams();

  const code = searchParams.get("code");

  const handleFocus = () => {
    setInputType("date");
  };

  const handleBlur = () => {
    setInputType("text");
  };
  const hardRefresh = (code) => {
    if (typeof window !== "undefined") {
      if (code) {
        window.location.href = `/content/dashboard/${data.data.userDetails.userName}/fees?enroll=${code}`;
      } else {
        window.location.href = `/content/dashboard/${data.data.userDetails.userName}`;
      }
    }
  };
  const data = useSelector((state) => state.isAdmin.value);

  const [finalData, setFinalData] = useState({
    firstNameen: data.data.userDetails.firstName.en,
    lastNameen: data.data.userDetails.lastName.en,
    firstnamebn: data.data.userDetails.firstName.bn,
    lastnamebn: data.data.userDetails.lastName.bn,
    nidNumber: data.data.userDetails.nidNumber,
    birthRegNumber: data.data.userDetails.birthRegNumber,
    fatherNameen: data.data.userDetails.fatherName.en,
    fatherNamebn: data.data.userDetails.fatherName.bn,

    occupation: data.data.userDetails.occupation,

    gender: data.data.userDetails.gender,
    dateOfBirth: data.data.userDetails.dateOfBirth,
    countryName: data.data.userDetails.countryName,

    fullPresentAddress: data.data.userDetails.fullPresentAddress,
    fullPermanentAddress: data.data.userDetails.fullPermanentAddress,

    studentMotive: data.data.userDetails.studentMotive,

    extracurricular: data.data.userDetails.extracurricular,
  });

  function onChangeHander(name, value) {
    setFinalData((prev) => ({
      ...prev,
      [name]: value,
    }));
  }

  async function makeUpdate(e) {
    e.preventDefault();
    let obj = { ...finalData };

    let blankArrayList = [];

    for (let key in obj) {
      if (obj.hasOwnProperty(key)) {
        if (!obj[key]) {
          blankArrayList.push(key);
        }
      }
    }
    if (blankArrayList.length < 1) {
      const res = await updateData(
        undefined,
        finalData.firstNameen,
        finalData.firstnamebn,
        finalData.lastNameen,
        finalData.lastnamebn,
        finalData.nidNumber,
        finalData.birthRegNumber,
        finalData.fatherNameen,
        finalData.fatherNamebn,
        undefined,
        undefined,
        undefined,
        finalData.occupation,
        undefined,
        undefined,
        finalData.gender,
        finalData.dateOfBirth,
        finalData.countryName,
        finalData.fullPresentAddress,
        finalData.fullPermanentAddress,
        undefined,
        undefined,
        finalData.studentMotive,
        undefined,
        undefined,
        undefined,
        finalData.extracurricular,
        undefined,
        data.data.userDetails._id
      );

      if (res.status == "Alhamdulillah") {
        mytoast.success("User Data has been Updated Successfully");

        hardRefresh(code);
        // const res3 = await logout();
        // if (res3.status == "Alhamdulillah") {
        //   mytoast.info(
        //     "You are logging out"
        //   );
        //   removeToken("access_token");
        //   hardRefresh();
        // }
      } else {
        console.log(res);
      }
    } else {
      mytoast.warning(`One or More Field is Empty`);
    }
  }

  return (
    <div className="w-full md:w-[50%] mx-auto p-5 border-0 md:border-2 border-slate-300 rounded-3xl mt-0 md:mt-5">
      <form onSubmit={makeUpdate}>
        <label className="font-bold" htmlFor="fisrtnamebn">
          নামের প্রথম অংশ:
        </label>
        <input
          onChange={(e) => onChangeHander("firstnamebn", e.target.value)}
          value={finalData.firstnamebn}
          id="fisrtnamebn"
          name="fisrtnamebn"
          className="my-4 p-4 box-border w-full rounded-3xl"
          type="text"
          placeholder="নামের প্রথম অংশ বাংলায় লিখুন"
        ></input>
        {/* Input Field */}
        <label className="font-bold" htmlFor="lastnamebn">
          নামের দ্বিতীয় অংশ:
        </label>
        <input
          onChange={(e) => onChangeHander("lastnamebn", e.target.value)}
          value={finalData.lastnamebn}
          id="lastnamebn"
          name="lastnamebn"
          className="my-4 p-4 box-border w-full rounded-3xl"
          type="text"
          placeholder="নামের দ্বিতীয় অংশ বাংলায় লিখুন"
        ></input>

        <label className="font-bold" htmlFor="fathernamebn">
          বাবার নাম:
        </label>
        <input
          onChange={(e) => onChangeHander("fatherNamebn", e.target.value)}
          value={finalData.fatherNamebn}
          id="fathernamebn"
          name="fathernamebn"
          className="my-4 p-4 box-border w-full rounded-3xl"
          type="text"
          placeholder="আপনার বাবার নাম বাংলায় লিখুন"
        ></input>

        {/* Input Field */}
        <label className="font-bold" htmlFor="nidnumber">
          NID Number:
        </label>
        <input
          onChange={(e) => onChangeHander("nidNumber", e.target.value)}
          value={finalData.nidNumber}
          id="nidnumber"
          name="nidnumber"
          className="my-4 p-4 box-border w-full rounded-3xl"
          type="number"
          placeholder="Your NID (না থাকলে বাবা/মা)"
        ></input>
        {/* Input Field */}
        <label className="font-bold" htmlFor="birthregno">
          Birth Registration Number:
        </label>
        <input
          onChange={(e) => onChangeHander("birthRegNumber", e.target.value)}
          value={finalData.birthRegNumber}
          id="birthregno"
          name="birthregno"
          className="my-4 p-4 box-border w-full rounded-3xl"
          type="number"
          placeholder="Your Birth Reg. (না থাকলে বাবা/মা)"
        ></input>
        {/* Input Field */}
        <label className="font-bold" htmlFor="occupation">
          Occupation:
        </label>
        <input
          onChange={(e) => onChangeHander("occupation", e.target.value)}
          value={finalData.occupation}
          id="occupation"
          name="occupation"
          className="my-4 p-4 box-border w-full rounded-3xl"
          type="text"
          placeholder="Enter your occupation"
        ></input>

        {/* Input Field */}
        <label className="font-bold" htmlFor="extracurricular">
          Extra-curricular Activities:
        </label>
        <textarea
          onChange={(e) => onChangeHander("extracurricular", e.target.value)}
          value={finalData.extracurricular}
          rows="2"
          id="extracurricular"
          name="extracurricular"
          className="my-4 p-4 box-border w-full rounded-3xl"
          type="text"
          placeholder="Do you involve in any Extra-curricular Activities or have expertise on any?"
        ></textarea>

        {/* Input Field */}
        <label className="font-bold" htmlFor="targetGoal">
          Target or Goal:
        </label>
        <textarea
          onChange={(e) => onChangeHander("studentMotive", e.target.value)}
          value={finalData.studentMotive}
          rows="2"
          id="targetGoal"
          name="targetGoal"
          className="my-4 p-4 box-border w-full rounded-3xl mb-12"
          type="text"
          placeholder="আপনার জীবনের উদ্যেশ্য কি?"
        ></textarea>
        <button
          className="mt-10 w-full p-4 bg-lime-900 hover:bg-lime-700 transition duration-500 ease-out text-white fixed bottom-0 left-0"
          type="submit"
        >
          {" "}
          Update Your Data
        </button>
      </form>
    </div>
  );
}

export default ProfileUpdateAdditional;
