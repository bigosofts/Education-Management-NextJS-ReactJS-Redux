"use client";

import { FaTelegram } from "react-icons/fa";
import { useSelector } from "react-redux";

function AbacusGroup() {
  const data = useSelector((state) => state.isAdmin.value);

  const playNursery = "https://t.me/+sTJkdMnjXUI3OTVl";
  const playNursery_20240605 = "https://t.me/+qsMN1_UNq08yMTk9";

  const levelOne = "https://t.me/+oNrr-8H3-sE1ZWY1";
  const levelOne_20240605 = "https://t.me/+M_QKZQA2kts3Mzhl";

  const hardRefresh = (link) => {
    if (typeof window !== "undefined") {
      window.location.href = link;
    }
  };

  function joinBoys() {
    if (data.data.userDetails.batchCount == "batch-20240420") {
      hardRefresh(levelOne);
    }
    if (data.data.userDetails.batchCount == "batch-20240605") {
      hardRefresh(levelOne_20240605);
    }
  }
  function joinGirls() {
    if (data.data.userDetails.batchCount == "batch-20240420") {
      hardRefresh(playNursery);
    }
    if (data.data.userDetails.batchCount == "batch-20240605") {
      hardRefresh(playNursery_20240605);
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
            Join Telegram (Level 1 Abacus)
            <span className="float-right">
              <i className="text-lg fa fa-arrow-right"></i>
            </span>
          </li>
          <li
            onClick={joinGirls}
            className="w-full p-4 border-[1px] border-slate-500 rounded-3xl text-lg md:text-2xl hover:bg-[#013030] cursor-pointer hover:text-white transition duration-500 ease-out mb-4"
          >
            <FaTelegram className="text-4xl inline-block mr-2" />
            Join Telegram (Play & Nursery Abacus)
            <span className="float-right">
              <i className="text-lg fa fa-arrow-right"></i>
            </span>
          </li>
        </ul>
        <div className="rounded-3xl w-full p-4 text-lg md:text-2xl bg-[#013030] text-white transition duration-500 ease-out mb-4">
          আসসালামু আলাইকুম, ইন্টারনেট মাদ্রাসার অ্যাবাকাস ক্ল্যাস ০৫-০৬-২০২৪ ইং
          থেকে শুরু হবে ইং শা আল্লাহ। আপনারা উপরোক্ত লিংক থেকে নিজ নিজ ক্ল্যাস
          গ্রুপে জয়েন থাকুন।
        </div>
      </div>
    </div>
  );
}

export default AbacusGroup;
