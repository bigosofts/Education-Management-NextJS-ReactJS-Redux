"use client";

import { useSelector } from "react-redux";
import { useState } from "react";
import mytoast from "@/components/toast/toast";
import { updateData } from "@/apiservices/studentapiservices";

function ResetPassword() {
  const [fundStatus, setFundStatus] = useState("");
  const data = useSelector((state) => state.isAdmin.value);
  let jakatPass = "tqimjakatfund";
  let nafalSadkaPass = "tqimnafalsadkafund";

  function passwordHandler(e) {
    e.preventDefault();

    if (e.target.value == jakatPass) {
      setFundStatus("jakat");
    } else if (e.target.value == nafalSadkaPass) {
      setFundStatus("nafalSadka");
    } else {
      setFundStatus("");
    }
  }

  async function submithandler(e) {
    e.preventDefault();
    if (data.data && fundStatus !== "") {
      const res = await updateData(
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
        undefined,
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
        data.data.userDetails.studentSemester,
        data.data.userDetails.batchCount,
        fundStatus
      );

      if (res.status == "Alhamdulillah") {
        mytoast.success(
          `Fund Status Has Beem Changed Successfully to "${fundStatus}"`
        );
        if (typeof window !== "undefined") {
          setTimeout(() => {
            window.location.href = `/content/dashboard/${data.data.userDetails.userName}/fees`;
          }, 2000);
        }
      }
    } else {
      mytoast.danger("Password Missmatch");
    }
  }

  return (
    <div className="w-full md:w-[50%] mx-auto p-5 border-0 md:border-2 border-slate-300 rounded-3xl mt-0 md:mt-5">
      <form onSubmit={submithandler}>
        <label className="font-bold" htmlFor="oldPass">
          Enter Password
        </label>
        <input
          id="fundPassword"
          name="fundPassword"
          className="my-4 p-4 box-border w-full rounded-3xl bg-white"
          type="password"
          onChange={passwordHandler}
        ></input>

        <button
          className="mt-10 w-full p-4 bg-lime-900 hover:bg-lime-700 transition duration-500 ease-out text-white fixed bottom-0 left-0"
          type="submit"
        >
          {" "}
          Update Fund Status
        </button>
      </form>
    </div>
  );
}

export default ResetPassword;
