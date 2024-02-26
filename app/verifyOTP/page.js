"use client";
import ReactCodeInput from "react-code-input";

function VerifyOTP() {
  return (
    <div className="flex justify-center items-center h-screen bg-[#eaeaea]">
      <form className="w-11/12 md:w-6/12 lg:w-4/12 mx-auto p-5 shadow-lg rounded-3xl border-[1px] border-slate-100 bg-white">
        <label className="block text-2xl mb-4 font-bold" htmlFor="emailAddress">
          OTP Verification:
        </label>
        <p className="mb-4">A 6-digit code has been sent to your email address</p>
        <ReactCodeInput inputStyle={{width:"14.66%", border:"1px solid #000", margin:"0px 1%", borderRadius:"5px", height:"50px", fontSize:"42px", textAlign:"center"}} type="number" fields={6}/>
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

export default VerifyOTP;
