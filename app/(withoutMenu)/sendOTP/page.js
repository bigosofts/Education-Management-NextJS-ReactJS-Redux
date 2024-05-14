"use client";
import { useRef } from "react";
import mytoast from "@/components/toast/toast";
import { selectDataTwo as selectStudents } from "@/apiservices/studentapiservices";
import { selectAllData as selectTeachers } from "@/apiservices/teacherapiservices";
import { useSearchParams } from "next/navigation";
import { checkandSendOTP } from "@/helper/accountRecover/send-OTP";

function SendOTP() {
  const searchParams = useSearchParams();

  const role = searchParams.get("role");

  const emailref = useRef();
  function verifyEmail(e) {
    e.preventDefault();
    let emailAddressC = emailref.current.value;
    let patternEmail = /[^@]+@[^@]+\.[a-zA-Z]{2,6}/;

    if (!patternEmail.test(emailAddressC)) {
      mytoast.warning("You entered wrong Email Address");
    } else {
      if (role == "teacher") {
        mytoast.warning("Teachers have not this option yet")
      } else if (role == "student") {
        async function getData() {
          const res = await selectStudents(
            { emailAddress: emailAddressC },
            { emailAddress: true, userName: true }
          );
          if (res.status == "Alhamdulillah") {
            if (res.data.length > 0) {
              checkandSendOTP(res.data[0].emailAddress);
            } else {
              mytoast.success("Email not found");
            }
          } else {
            mytoast.success("Something Went Wrong");
          }
        }
        getData();
      }
    }
  }

  return (
    <div className="flex justify-center items-center h-screen bg-[#eaeaea]">
      <form
        onSubmit={verifyEmail}
        className="w-11/12 md:w-6/12 lg:w-4/12 mx-auto p-5 shadow-lg rounded-3xl border-[1px] border-slate-100 bg-white"
      >
        <label className="block text-2xl mb-4 font-bold" htmlFor="emailAddress">
          Enter your Email:
        </label>
        <input
          ref={emailref}
          className="w-full border-[1px] border-slate-300 rounded-3xl p-5 text-2xl"
          type="email"
          name="emailAddress"
          id="emailAddress"
          placeholder="Enter your email Address"
        />
        <button
          className="w-full bg-sky-500 mt-4 p-2 rounded-3xl text-white hover:bg-sky-800 text-2xl"
          type="submit"
        >
          Next
        </button>
      </form>
    </div>
  );
}

export default SendOTP;
