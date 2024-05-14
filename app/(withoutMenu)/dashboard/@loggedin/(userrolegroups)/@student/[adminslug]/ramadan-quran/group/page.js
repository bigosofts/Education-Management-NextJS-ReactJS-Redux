"use client";
import mytoast from "@/components/toast/toast";
import { FaTelegram } from "react-icons/fa";
import { useSelector } from "react-redux";
function AbacusGroup() {
  const data = useSelector((state) => state.isAdmin.value);

  const girlsLink = "https://t.me/+FPaWbxJK5n4xZmY1";
  const boysLink = "https://t.me/+I86cqXm4qkFmNjA1";

  const hardRefresh = (link) => {
    if (typeof window !== "undefined") {
      window.location.href = link;
    }
  };

  function joinBoys() {
    if (data.data.userDetails.gender == "male") {
      hardRefresh(boysLink);
    } else {
      mytoast.danger("You are not allowed to join this group");
    }
  }
  function joinGirls() {
    if (data.data.userDetails.gender == "female") {
      hardRefresh(girlsLink);
    } else {
    }
  }
  return (
    <div className="w-full">
      <h1 className="w-full md:w-[50%] mx-auto px-5 text-lg md:text-3xl mt-10 text-slate-500 mb-4 text-center">
        Live Class Telegram Link
      </h1>

      <div className="w-full md:w-[50%] mx-auto p-4 border-0 md:border-2 border-slate-300 rounded-3xl">
        <ul>
          <li
            onClick={joinBoys}
            className="w-full p-4 border-[1px] border-slate-500 rounded-3xl text-lg md:text-2xl hover:bg-[#013030] cursor-pointer hover:text-white transition duration-500 ease-out mb-4"
          >
            <FaTelegram className="text-4xl inline-block mr-2" />
            Join Ramadan Quranul Karim Telegram Group (Male)
            <span className="float-right">
              <i className="text-lg fa fa-arrow-right"></i>
            </span>
          </li>
          <li
            onClick={joinGirls}
            className="w-full p-4 border-[1px] border-slate-500 rounded-3xl text-lg md:text-2xl hover:bg-[#013030] cursor-pointer hover:text-white transition duration-500 ease-out mb-4"
          >
            <FaTelegram className="text-4xl inline-block mr-2" />
            Join Ramadan Quranul Karim Telegram Group (Female)
            <span className="float-right">
              <i className="text-lg fa fa-arrow-right"></i>
            </span>
          </li>
        </ul>
        <div className="rounded-3xl w-full p-4 text-lg md:text-2xl bg-[#013030] text-white transition duration-500 ease-out mb-4">
          আসসালামু আলাইকুম, ইন্টারনেট মাদ্রাসার ফ্রি রমজান কুরআনুল কারীম ক্ল্যাস
          রমজানের প্রথম দিন থেকে শুরু হয়ে গেছে আলহামদুলিল্লাহ। আপনারা উপরোক্ত
          লিংক থেকে নিজ নিজ ক্ল্যাস গ্রুপে জয়েন থাকুন। ক্ল্যাস ছেলেদের দুপুর
          ৩.০০ টায়, মেয়েদের সকাল ১০.০০ টায়।
        </div>
      </div>
    </div>
  );
}

export default AbacusGroup;
