"use client";
import { useRouter } from "next/navigation";

import { useSelector } from "react-redux";

import { logout } from "@/apiservices/checklogin";
import { removeToken } from "@/helper/sessionHelper";

function BookPage() {
  async function signout(e) {
    e.preventDefault();
    const hardRefresh = () => {
      if (typeof window !== "undefined") {
        window.location.href = "/content/dashboard/login";
      }
    };
    const res = await logout();
    if (res.status == "Alhamdulillah") {
      removeToken("access_token");
      hardRefresh();
    }
  }
  const router = useRouter();
  const data = useSelector((state) => state.isAdmin.value);
  if (data) {
    return (
      <div className="w-full">
        <h1 className="w-full md:w-[50%] mx-auto px-5 text-lg md:text-3xl mt-2 text-slate-500 mb-4">
          Settings
        </h1>

        <div className="w-full md:w-[50%] mx-auto p-4 border-0 md:border-2 border-slate-300 rounded-3xl">
          <ul>
            <li
              onClick={() =>
                router.push(
                  `/content/dashboard/${data.data.userName}/settings/profile-update`
                )
              }
              className="w-full p-4 border-[1px] border-slate-500 rounded-3xl text-lg md:text-2xl hover:bg-[#013030] cursor-pointer hover:text-white transition duration-500 ease-out mb-4"
            >
              Profile Update
              <span className="float-right">
                <i className="text-lg fa fa-arrow-right"></i>
              </span>
            </li>
            <li
              onClick={() =>
                router.push(`/content/dashboard/${data.data.userName}/switches`)
              }
              className="w-full p-4 border-[1px] border-slate-500 rounded-3xl text-lg md:text-2xl hover:bg-[#013030] cursor-pointer hover:text-white transition duration-500 ease-out mb-4"
            >
              Switch Classes
              <span className="float-right">
                <i className="text-lg fa fa-arrow-right"></i>
              </span>
            </li>
            <li
              onClick={() =>
                router.push(
                  `/content/dashboard/${data.data.userName}/settings/reset-password`
                )
              }
              className="w-full p-4 border-[1px] border-slate-500 rounded-3xl text-lg md:text-2xl hover:bg-[#013030] cursor-pointer hover:text-white transition duration-500 ease-out mb-4"
            >
              Reset Password
              <span className="float-right">
                <i className="text-lg fa fa-arrow-right"></i>
              </span>
            </li>
            <li
              onClick={() =>
                router.push(
                  `/content/dashboard/${data.data.userName}/settings/profile-update-additional`
                )
              }
              className="w-full p-4 border-[1px] border-slate-500 rounded-3xl text-lg md:text-2xl hover:bg-[#013030] cursor-pointer hover:text-white transition duration-500 ease-out mb-4"
            >
              Additional Data
              <span className="float-right">
                <i className="text-lg fa fa-arrow-right"></i>
              </span>
            </li>

            <li
              onClick={signout}
              className="w-full p-4 border-[1px] border-slate-500 rounded-3xl text-lg md:text-2xl hover:bg-[#013030] cursor-pointer hover:text-white transition duration-500 ease-out mb-4"
            >
              Sign Out
              <span className="float-right">
                <i className="text-lg fa fa-arrow-right"></i>
              </span>
            </li>
          </ul>
        </div>
      </div>
    );
  }
}

export default BookPage;
