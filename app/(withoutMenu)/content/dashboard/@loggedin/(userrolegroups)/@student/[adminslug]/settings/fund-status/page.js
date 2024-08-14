"use client";

import { useSelector } from "react-redux";
import mytoast from "@/components/toast/toast";

function ResetPassword() {
  const data = useSelector((state) => state.isAdmin.value);

  return (
    <div className="w-full md:w-[50%] mx-auto p-5 border-0 md:border-2 border-slate-300 rounded-3xl mt-0 md:mt-5">
      <form>
        <label className="font-bold" htmlFor="oldPass">
          Select Fund Status
        </label>
        <select
          id="oldPass"
          name="oldPass"
          className="my-4 p-4 box-border w-full rounded-3xl"
        >
          <option>None</option>
        </select>

        {/* Input Field */}
        <label className="font-bold" htmlFor="newPass">
          New Password:
        </label>
        <input
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
