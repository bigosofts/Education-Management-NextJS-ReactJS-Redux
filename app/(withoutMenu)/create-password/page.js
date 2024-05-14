"use client";
import { useState, useEffect, useRef } from "react";
import {
  selectDataTwo as selectStudents,
  updateData as updateStudents,
} from "@/apiservices/studentapiservices";
import {
  selectAllData as selectTeachers,
  updateData as updateTeachers,
} from "@/apiservices/teacherapiservices";
import { useSearchParams } from "next/navigation";
import { selectDataTwo as selectOTPS } from "@/apiservices/otpapiservices";
import mytoast from "@/components/toast/toast";

function CreatePassword() {
  const searchParams = useSearchParams();
  const email = searchParams.get("email");
  const customOTP = searchParams.get("otp");
  const [data, setData] = useState();
  const newPasswordref = useRef();
  const confirmPasswordref = useRef();

  const hardRefresh = (link) => {
    if (typeof window !== "undefined") {
      window.location.href = link;
    }
  };

  useEffect(() => {
    async function getData() {
      const res = await selectStudents(
        {
          activeStatus: "active",
        },
        null
      );

      const res2 = await selectTeachers(
        {
          activeStatus: "active",
        },
        null
      );

      if (res.status == "Alhamdulillah" && res2.status == "Alhamdulillah") {
        const dataObject = {
          teachers: [],
          students: [],
        };

        dataObject.teachers = res.data;
        dataObject.students = res2.data;

        const finalArray = [...dataObject.teachers];
        finalArray.concat(dataObject.students);

        if (email && customOTP) {
          const res5 = await selectOTPS(
            {
              email: email,
              otp: customOTP,
              status: "inactive",
            },
            null
          );

          if (res5.status == "Alhamdulillah") {
            if (res5.data.length > 0) {
              const desiredContact = finalArray.find((item) => {
                return item.emailAddress == email;
              });

              setData(desiredContact);
            } else {
              mytoast.warning("Something went wrong");
            }
          }
        } else {
          mytoast.warning("Something went wrong");
        }
      } else {
        mytoast.danger("Data fetching error. Try Refreshing the page");
      }
    }
    getData();
  }, []);

  async function submitPassword(finalData) {
    console.log(finalData);
    if (finalData.userRole == "teacher") {
      if (
        newPasswordref.current.value &&
        newPasswordref.current.value == confirmPasswordref.current.value
      ) {
        const res = await updateTeachers(
          undefined,
          finalData.firstName.en,
          finalData.firstName.bn,
          finalData.lastName.en,
          finalData.lastName.bn,
          finalData.nidNumber,
          finalData.birthRegNumber,
          finalData.fatherName.en,
          finalData.fatherName.bn,
          finalData.emailAddress,
          confirmPasswordref.current.value,
          finalData.mobileNumber,
          finalData.teacherCourseCode,
          finalData.teacherJamatCode,
          finalData.gender,
          finalData.dateOfBirth,
          finalData.countryName,
          finalData.fullPresentAddress,
          finalData.fullPermanentAddress,
          finalData.educationalBackground,
          finalData.userRole,
          finalData.activeStatus,
          finalData._id,
          finalData.designation,
          finalData.details
        );
        if (res.status == "Alhamdulillah") {
          mytoast.success("Password has been reset successfuly");
          setTimeout(() => {
            hardRefresh(`/dashboard/login`);
          }, 1000);
        } else {
          mytoast.info("Something went wrong");
        }
      } else {
        mytoast.warning("Something Entered Wrong");
      }
    } else if (finalData.userRole == "student") {
      if (
        newPasswordref.current.value &&
        newPasswordref.current.value == confirmPasswordref.current.value
      ) {
        const res = await updateStudents(
          undefined,
          finalData.firstName.en,
          finalData.firstName.bn,
          finalData.lastName.en,
          finalData.lastName.bn,
          finalData.nidNumber,
          finalData.birthRegNumber,
          finalData.fatherName.en,
          finalData.fatherName.bn,
          finalData.emailAddress,
          confirmPasswordref.current.value,
          finalData.mobileNumber,
          finalData.occupation,
          finalData.studentCourseCode,
          finalData.studentJamatCode,
          finalData.gender,
          finalData.dateOfBirth,
          finalData.countryName,
          finalData.fullPresentAddress,
          finalData.fullPermanentAddress,
          finalData.admissionSession,
          finalData.admissionDate,
          finalData.studentMotive,
          finalData.details,
          finalData.paymentStatus,
          finalData.userRole,
          finalData.extracurricular,
          finalData.activeStatus,
          finalData._id,
          finalData.studentDepartment,
          finalData.studentSemester
        );
        if (res.status == "Alhamdulillah") {
          mytoast.success("Password has been reset successfuly");
          setTimeout(() => {
            hardRefresh(`/dashboard/login`);
          }, 1000);
        } else {
          mytoast.info("Something went wrong");
        }
      } else {
        mytoast.warning("Something Entered Wrong");
      }
    }
  }

  if (data) {
    return (
      <div className="flex justify-center items-center h-screen bg-[#eaeaea]">
        <form className="w-11/12 md:w-6/12 lg:w-4/12 mx-auto p-5 shadow-lg rounded-3xl border-[1px] border-slate-100 bg-white">
          <label className="block text-2xl mb-4 font-bold" htmlFor="sid">
            Your SID:
          </label>
          <input
            className="w-full border-[1px] border-slate-300 rounded-3xl p-5 text-2xl mb-4"
            type="text"
            name="sid"
            id="sid"
            value={data.userName}
            disabled
          />
          <label
            className="block text-2xl mb-4 font-bold"
            htmlFor="newPassword"
          >
            New Password:
          </label>
          <input
            ref={newPasswordref}
            className="w-full border-[1px] border-slate-300 rounded-3xl p-5 text-2xl mb-4"
            type="password"
            name="newPassword"
            id="newPassword"
          />
          <label
            className="block text-2xl mb-4 font-bold"
            htmlFor="confirmPassword"
          >
            Confirm Password:
          </label>
          <input
            ref={confirmPasswordref}
            className="w-full border-[1px] border-slate-300 rounded-3xl p-5 text-2xl mb-4"
            type="password"
            name="confirmPassword"
            id="confirmPassword"
          />
          <button
            onClick={(e) => {
              e.preventDefault();
              submitPassword(data);
            }}
            className="w-full bg-sky-500 mt-4 p-2 rounded-3xl text-white hover:bg-sky-800 text-2xl"
            type="submit"
          >
            Submit Request
          </button>
        </form>
      </div>
    );
  }
}

export default CreatePassword;
