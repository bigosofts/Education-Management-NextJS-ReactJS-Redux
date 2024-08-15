"use client";

import { useSelector } from "react-redux";
import { useState, useEffect, useRef } from "react";
import mytoast from "@/components/toast/toast";
import { updateData } from "@/apiservices/studentapiservices";

function ResetPassword() {
  const [fundStatus, setFundStatus] = useState();
  const data = useSelector((state) => state.isAdmin.value);
  let jakatPass = "tqimjakatfund";
  let nafalSadkaPass = "tqimnafalsadkafund";

  const passwordRef = useRef();

  useEffect(() => {
    if (data) {
      data.data.userDetails.fundStatus &&
        setFundStatus(data.data.userDetails.fundStatus);
    }
  }, [data]);

  function onChangeHandler(e) {
    e.preventDefault();
    setFundStatus(e.target.value);
  }

  async function submithandler(e) {
    e.preventDefault();
    if (data.data && fundStatus !== "" && passwordRef.current.value) {
      if (fundStatus == "jakat") {
        if (passwordRef.current.value == jakatPass) {
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
          }
        } else {
          mytoast.danger("Password Mismatch");
        }
      } else if (fundStatus == "nafalSadka") {
        if (passwordRef.current.value == nafalSadkaPass) {
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
          }
        } else {
          mytoast.danger("Password Mismatch");
        }
      }
    } else {
      mytoast.warning("One or more field is empty");
    }
  }

  return (
    <div className="w-full md:w-[50%] mx-auto p-5 border-0 md:border-2 border-slate-300 rounded-3xl mt-0 md:mt-5">
      <form onSubmit={submithandler}>
        <label className="font-bold" htmlFor="oldPass">
          Select Fund Status
        </label>
        <select
          id="fundStatus"
          name="fundStatus"
          className="my-4 p-4 box-border w-full rounded-3xl bg-white"
          value={fundStatus && fundStatus}
          onChange={onChangeHandler}
        >
          <option value="">Select Fund Status</option>
          <option value="none">No Fund</option>
          <option value="jakat">Jakat Fund</option>
          <option value="nafalSadka">Nafal Sadka</option>
        </select>

        <label className="font-bold" htmlFor="oldPass">
          Enter Password
        </label>
        <input
          id="fundPassword"
          name="fundPassword"
          className="my-4 p-4 box-border w-full rounded-3xl bg-white"
          type="password"
          ref={passwordRef}
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
