"use client";
import { useRef, useState } from "react";

import { studentLogin } from "@/apiservices/checklogin";
import { updateData } from "@/apiservices/studentapiservices";
import { useSelector } from "react-redux";
import mytoast from "@/components/toast/toast";

function ResetPassword() {
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

    extracurricular: data.data.userDetails.birthRegNumber,
  });

  const oldref = useRef();
  const newref = useRef();

  async function makeUpdate(e) {
    e.preventDefault();
    const res = await studentLogin(
      data.data.userDetails.userName,
      oldref.current.value
    );

    if (res.status == "wrongpass") {
      mytoast.danger("You entered wrong Password");
    } else if (res.status == "Alhamdulillah") {
      const res2 = updateData(
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
        newref.current.value,
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
     
      if (res) {
        
        mytoast.success("Password reset Successfully");
      } 
    }
  }

  return (
    <div className="w-full md:w-[50%] mx-auto p-5 border-0 md:border-2 border-slate-300 rounded-3xl mt-0 md:mt-5">
      <form onSubmit={makeUpdate}>
        {/* Input Field */}
        <label className="font-bold" htmlFor="oldPass">
          Old Password:
        </label>
        <input
          ref={oldref}
          id="oldPass"
          name="oldPass"
          className="my-4 p-4 box-border w-full rounded-3xl"
          type="password"
          placeholder="Enter your Old Password"
        ></input>

        {/* Input Field */}
        <label className="font-bold" htmlFor="newPass">
          New Password:
        </label>
        <input
          ref={newref}
          id="newPass"
          name="newPass"
          className="my-4 p-4 box-border w-full rounded-3xl"
          type="password"
          placeholder="Enter your New Password"
        ></input>

        <button
          className="mt-10 w-full p-4 bg-lime-900 hover:bg-lime-700 transition duration-500 ease-out text-white absolute bottom-0 left-0"
          type="submit"
        >
          {" "}
          Update Password
        </button>
      </form>
    </div>
  );
}

export default ResetPassword;
