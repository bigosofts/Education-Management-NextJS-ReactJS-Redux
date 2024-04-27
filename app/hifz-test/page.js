"use client";

import { useSearchParams } from "next/navigation";
function HifzTestPage() {
  function move() {
    if (signup) {
      if (typeof window !== "undefined") {
        window.location.href = `/signup?code=hifjulquran`;
      }
    }
  }

  function listen() {
    if (typeof window !== "undefined") {
      window.location.href = `https://wa.me/1674040502`;
    }
  }

  const searchParams = useSearchParams();
  const signup = searchParams.get("signup");
  return (
    <div className="flex justify-center items-center h-screen">
      <div className="w-[80%] md:w-6/12 bg-white p-5 rounded-3xl text-lg md:text-2xl shadow-lg border-[1px]">
        <p className="text-justify">
          আপনার কি কুরআনুল কারীম সহি-শুদ্ধ আছে এবং দেখে দেখে দ্রুত শুদ্ধভাবে
          তিলাওয়াত করতে পারেন, তাহলে পড়া রেকর্ড করে এখানে পাঠান। দয়া করে
          ওস্তাদ/ওস্তাজার কনফার্মেশন ছাড়া কেও রেজিস্ট্রেশন করবেন না।
          <span className="block m-10 text-center">
            <button
              onClick={listen}
              className="p-5 bg-orange-500 hover:bg-slate-800 rounded-2xl mb-5 text-white shadow-md hover:scale-105 transition duration-250"
            >
              {" "}
              আমি পড়া শোনাতে হোয়াটস-অ্যাপ একাউন্টে যুক্ত হতে চাই
              (+8801674040502)
            </button>
            <button
              onClick={move}
              className="p-5 bg-pink-500 hover:bg-slate-800 rounded-2xl text-white shadow-md hover:scale-105 transition duration-250"
            >
              {" "}
              আমি পড়া শুনিয়েছি এবং ওস্তাদ/ওস্তাজা আমাকে কনফার্ম করেছেন{" "}
            </button>
          </span>
        </p>
      </div>
    </div>
  );
}

export default HifzTestPage;
