"use client";
import { useRef, useState } from "react";

import { studentLogin } from "@/apiservices/checklogin";
import { updateData } from "@/apiservices/studentapiservices";
import { useSelector } from "react-redux";
import mytoast from "@/components/toast/toast";
import { logout } from "@/apiservices/checklogin";
import { removeToken } from "@/helper/sessionHelper";

function ResetPassword() {
  const data = useSelector((state) => state.isAdmin.value);

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
      const res2 = await updateData(
        data.data.userDetails.userName,
        data.data.userDetails.firstName.en,
        data.data.userDetails.firstName.bn,
        data.data.userDetails.lastName.en,
        data.data.userDetails.lastName.bn,
        data.data.userDetails.nidNumber,
        data.data.userDetails.birthRegNumber,
        data.data.userDetails.fatherName.en,
        data.data.userDetails.fatherName.bn,
        data.data.userDetails.emailAddress,
        newref.current.value,
        data.data.userDetails.mobileNumber,
        data.data.userDetails.occupation,
        data.data.userDetails.studentCourseCode,
        data.data.userDetails.studentJamatCode,
        data.data.userDetails.gender,
        data.data.userDetails.dateOfBirth,
        data.data.userDetails.countryName,
        data.data.userDetails.fullPresentAddress,
        data.data.userDetails.fullPermanentAddress,
        data.data.userDetails.admissionSession,
        data.data.userDetails.admissionDate,
        data.data.userDetails.studentMotive,
        data.data.userDetails.details,
        data.data.userDetails.paymentStatus,
        data.data.userDetails.userRole,
        data.data.userDetails.extracurricular,
        data.data.userDetails.activeStatus,
        data.data.userDetails._id,
        data.data.userDetails.studentDepartment,
        data.data.userDetails.studentSemester
      );
      
      if (res2.status == "Alhamdulillah") {
        mytoast.success("Password reset Successfully");

        const res3 = await logout();
        if (res3.status == "Alhamdulillah") {
          mytoast.info("You are logging out");
          removeToken("access_token");
          const hardRefresh = () => {
            if (typeof window !== "undefined") {
              window.location.href = "/content/dashboard/login";
            }
          };
          hardRefresh();
        }
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
          className="mt-10 w-full p-4 bg-lime-900 hover:bg-lime-700 transition duration-500 ease-out text-white fixed bottom-0 left-0"
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
