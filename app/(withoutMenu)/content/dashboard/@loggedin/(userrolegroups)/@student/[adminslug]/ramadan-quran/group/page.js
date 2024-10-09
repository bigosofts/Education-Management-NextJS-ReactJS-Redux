"use client";
import mytoast from "@/components/toast/toast";
import { FaTelegram } from "react-icons/fa";
import { useSelector } from "react-redux";
import Link from "next/link";
function AbacusGroup() {
  const data = useSelector((state) => state.isAdmin.value);

  const hardRefresh = (link) => {
    if (typeof window !== "undefined") {
      window.location.href = link;
    }
  };

  function joinBoys(boysLink) {
    if (data.data.userDetails.gender == "male") {
      hardRefresh(boysLink);
    } else {
      mytoast.danger("You are not allowed to join this group");
    }
  }

  function joinGirls(girlsLink) {
    if (data.data.userDetails.gender == "female") {
      hardRefresh(girlsLink);
    } else {
      mytoast.danger("You are not allowed to join this group");
    }
  }

  return (
    <div className="w-full">
      <h1 className="w-full md:w-[50%] mx-auto px-5 text-lg md:text-3xl mt-10 text-slate-500 mb-4 text-center">
        Live Class Telegram Link
      </h1>

      <div className="w-full md:w-[50%] mx-auto p-4 border-0 md:border-2 border-slate-300 rounded-3xl">
        <ul>
          {(data.data.userDetails.batchCount === "batch-20240803" ||
            data.data.userDetails.batchCount === "batch-20240605" ||
            data.data.userDetails.batchCount === "batch-20240605") && (
            <>
              <li
                onClick={() => joinBoys("https://t.me/+sO-qugueeHFjMjM9")}
                className="w-full p-4 border-[1px] border-slate-500 rounded-3xl text-lg md:text-2xl hover:bg-[#013030] cursor-pointer hover:text-white transition duration-500 ease-out mb-4"
              >
                <FaTelegram className="text-4xl inline-block mr-2" />
                কুরআনুল কারীম ক্লাসের পুরুষদের টেলিগ্রাম গ্রুপ
                <span className="float-right">
                  <i className="text-lg fa fa-arrow-right"></i>
                </span>
              </li>
              <li
                onClick={() => joinGirls("https://t.me/+49utmJSlNOM4YTJl")}
                className="w-full p-4 border-[1px] border-slate-500 rounded-3xl text-lg md:text-2xl hover:bg-[#013030] cursor-pointer hover:text-white transition duration-500 ease-out mb-4"
              >
                <FaTelegram className="text-4xl inline-block mr-2" />
                কুরআনুল কারীম ক্লাসের মহিলাদের টেলিগ্রাম গ্রুপ
                <span className="float-right">
                  <i className="text-lg fa fa-arrow-right"></i>
                </span>
              </li>
            </>
          )}
        </ul>

        <div className="rounded-3xl w-full p-4 text-lg md:text-2xl bg-[#013030] text-white transition duration-500 ease-out mb-4">
          আসসালামু আলাইকুম, ইন্টারনেট মাদ্রাসার কুরআনুল কারীম ক্ল্যাস আগামী ৫
          অক্টোবর, ২০২৪ থেকে শুরু হবে ইং শা আল্লাহ। আপনারা উপরোক্ত লিংক থেকে নিজ
          নিজ ক্ল্যাস গ্রুপে জয়েন থাকুন। ক্ল্যাস প্রতিদিন রাত ৯ টায় হতে পারে।
        </div>

        <div className="rounded-3xl w-full p-4 text-lg md:text-2xl bg-red-400 text-white transition duration-500 ease-out mb-4">
          কারো যদি কোনভাবেই উপরের লিংক কাজ না করে তাহলে এই লিংক থেকে আপনার
          জেন্ডারের তথ্যটি আপডেট করে রিলোড দিয়ে নিন তাহলে কাজ করবে ইংশাআল্লাহ
          <span className="bg-slate-600 py-1 px-4 rounded-md ml-2 inline-block">
            <Link
              href={`/content/dashboard/${data.data.userDetails.userName}/settings/profile-update`}
            >
              Update Profile
            </Link>
          </span>
        </div>
      </div>
    </div>
  );
}

export default AbacusGroup;
