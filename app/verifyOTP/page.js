"use client";
import ReactCodeInput from "react-code-input";
import { selectDataTwo, updateData } from "@/apiservices/otpapiservices";
import { useState, useEffect } from "react";
import { useSearchParams } from "next/navigation";
import mytoast from "@/components/toast/toast";


function VerifyOTP() {
  const [otps, setOtps] = useState();
  const searchParams = useSearchParams();
  const otp = searchParams.get("otp");
  const email = searchParams.get("email");
  const [receivedCode, setReceivedCode] = useState();

  useEffect(() => {
    async function getData() {
      const res = await selectDataTwo({ email: email, status: "active" }, null);
      if (res.status == "Alhamdulillah") {
        setOtps(res.data);
      }
    }
    getData();
  }, []);
  const hardRefresh = (link) => {
    if (typeof window !== "undefined") {
      window.location.href = link;
    }
  };

  function submitCode(email, id) {
    if (otp) {
      if (otp == otps[0].otp) {
        async function updateotp() {
          const res = await updateData({
            email: email,
            otp: otp,
            status: "inactive",
            idValue: id,
          });
          if (res.status == "Alhamdulillah") {
            hardRefresh(`/create-password?email=${email}&otp=${otp}`);
          }
        }
        updateotp();
      }
    } else if (receivedCode) {
      if (receivedCode == otps[0].otp) {
        async function updateotp() {
          const res = await updateData({
            email: email,
            otp: receivedCode,
            status: "inactive",
            idValue: id,
          });
          if (res.status == "Alhamdulillah") {
            hardRefresh(`/create-password?email=${email}&otp=${receivedCode}`);
          }
        }
        updateotp();
      } else {
        mytoast.danger("Please enter right verification otp first");
      }
    } else {
      mytoast.danger("Please enter right verification otp first");
    }
  }

  function codeHandler(value) {
    const otpRecieved = value;
    setReceivedCode(otpRecieved);
  }

  function valueDecider(dataOTP) {
    if (otp) {
      if (dataOTP == otp) {
        return JSON.stringify(dataOTP);
      }
    } else {
      return "";
    }
  }

  if (otps && email) {
    if (otps.length == 0) {
      return (
        <div className="w-11/12 md:w-4/12 mx-auto bg-sky-500 text-white mt-12 text-lg md:text-3xl p-5 rounded-lg">
          We did not find any OTP. Please send OTP again.<br/>
          <a
            className="text-white bg-black px-2 rounded-lg"
            href="/dashboard/login"
          >
            Go to this page to resend OTP
          </a>
        </div>
      );
    } else if (otps.length > 0) {
      if (otps[0].email == email && otps[0].status == "active") {
        return (
          <div className="flex justify-center items-center h-screen bg-[#eaeaea]">
            <form className="w-11/12 md:w-6/12 lg:w-4/12 mx-auto p-5 shadow-lg rounded-3xl border-[1px] border-slate-100 bg-white">
              <label
                className="block text-2xl mb-4 font-bold"
                htmlFor="emailAddress"
              >
                OTP Verification:
              </label>
              <p className="mb-4">
                A 6-digit code has been sent to your email address
              </p>
              <ReactCodeInput
                inputStyle={{
                  width: "14.66%",
                  border: "1px solid #000",
                  margin: "0px 1%",
                  borderRadius: "5px",
                  height: "50px",
                  fontSize: "42px",
                  textAlign: "center",
                }}
                type="number"
                fields={6}
                value={valueDecider(otps[0].otp)}
                onChange={codeHandler}
              />
              <button
                onClick={(e) => {
                  e.preventDefault();
                  submitCode(otps[0].email, otps[0]._id);
                }}
                className="w-full bg-sky-500 mt-4 p-2 rounded-3xl text-white hover:bg-sky-800 text-2xl"
                type="submit"
              >
                Next
              </button>
            </form>
          </div>
        );
      }
    }
  } else {
    return (
      <div className="w-11/12 md:w-4/12 mx-auto bg-sky-500 text-white mt-12 text-lg md:text-3xl p-5 rounded-lg">
        Something Went Wrong. Please send OTP again.<br/>
        <a
          className="text-white bg-black px-2 rounded-lg"
          href="/dashboard/login"
        >
          Go to this page to resend OTP
        </a>
      </div>
    );
  }
}

export default VerifyOTP;
