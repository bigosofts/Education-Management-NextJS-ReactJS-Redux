import React from "react";

export default function Qurbani() {
  return (
    <div className="max-w-7xl mx-auto flex flex-col md:flex-row p-4 gap-4 dark:bg-zinc-800">
      <div className="flex-1">
        <img
          src="https://placehold.co/500x400"
          alt="Placeholder Image"
          className="w-full rounded-lg shadow-lg"
          crossorigin="anonymous"
        ></img>
        <div className="mt-4 bg-white dark:bg-green-500 p-4 rounded-lg shadow-lg">
          <h2 className="text-xl font-normal mb-2 text-green-500 text-center">
            মহান আল্লাহ তার রাসুল (সাল্লাল্লাহু আলাইহি ওয়া সাল্লাম) কে নির্দেশ
            দিয়েছেন- তুমি তোমার রবের উদ্দেশ্যে সালাত আদায় কর এবং কুরবানী কর।
            (সূরা কাউসা) আবদুল্লাহ ইবনে উমর রা. বলেন- নাবী (সাল্লাল্লাহু আলাইহি
            ওয়া সাল্লাম) মদীনায় দশ বছর অবস্থান করেছেন এবং প্রতি বছরই কুরবানী
            করেছেন। (তিরমিযী, হাদীস নং ১৫০৭; মুসনাদে আহমাদ, হাদীস নং ৪৯৫)
          </h2>
        </div>
        <br />
      </div>

      <div className="flex-1 flex flex-col bg-white dark:bg-zinc-900 p-4 rounded-lg shadow-lg">
        <h1 className="text-2xl font-bold mb-4">সবার জন্য কুরবানী</h1>
        <p className="text-zinc-600 dark:text-zinc-300 mb-4">
          অনেক অভাবী মানুষ বছরে কেবল কুরবানীর ঈদেই গরু বা ছাগলের গোশতের স্বাদ
          গ্রহণের সুযোগ পান। সে কারণে প্রতি বছর ‘সবার জন্য কুরবানী’ শিরোনামে
          আস-সুন্নাহ ফাউন্ডেশন কুরবানীর গোশত বিতরণের আয়োজন করে। কুরবানী এমন একটি
          ইবাদত, যা প্রতিনিধির মাধ্যমে সম্পাদন করা যায়। আস-সুন্নাহ ফাউন্ডেশন
          প্রতিনিধি হিসেবে সচ্ছলদের পক্ষ হতে কুরবানীর দায়িত্ব গ্রহণ করে।
          উত্তরবঙ্গসহ দেশের বিভিন্ন দরিদ্র অঞ্চলে কুরবানী করে দুস্থ ও অসহায়
          মানুষদের মাঝে গোশত বিতরণ করা হয়। যারা কোনো কারণে নিজের কুরবানী নিজে
          করতে পারছেন না, কিংবা নিজ এলাকায় কুরবানীর পাশাপাশি দরিদ্র অঞ্চলে
          আরেকটি কুরবানী করতে ইচ্ছুক, তাঁরা আস-সুন্নাহ ফাউন্ডেশনকে কুরবানীর
          দায়িত্ব দিতে পারেন। আপনার একটি কুরবানী অনেক অসহায় মানুষের মুখে হাসি
          ফোটাতে পারে। আপনার পশুটি কোথায় এবং কখন কুরবানী হবে, তা এসএমএসের
          মাধ্যমে জানিয়ে দেয়া হবে ইন-শা-আল্লাহ।
        </p>

        <div className="space-y-4">
          <div className="mt-4 bg-white dark:bg-zinc-900 p-4 rounded-lg shadow-lg">
            {" "}
            <h3 className="text-lg font-semibold mb-2">
              অ্যাকাউন্টের নাম: As sunnah Foundation Zakat Fund
            </h3>
            <p>অ্যাকাউন্ট নম্বর: 2053010010016806</p>
            <p>ব্যাংক: Islami Bank Bangladesh PLC.</p>
            <p>শাখা: Badda, Dhaka</p>
            <p>রাউটিং নম্বর: 125260341</p>
            <p>সুইফট কোড: IBBLBDDH</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-lg">
            <div className="space-y-4">
              <div>
                <label className="block font-semibold">গরু</label>
                <div className="flex items-center justify-between">
                  <span>84000 ৳</span>
                  <div className="flex items-center space-x-2">
                    <button className="bg-red-500 text-white px-3 py-1 rounded">
                      -
                    </button>
                    <span>0</span>
                    <button className="bg-green-500 text-white px-3 py-1 rounded">
                      +
                    </button>
                  </div>
                  <span>0 ৳</span>
                </div>
              </div>
              <div>
                <label className="block font-semibold">গরুর ভাগ</label>
                <div className="flex items-center justify-between">
                  <span>12000 ৳</span>
                  <div className="flex items-center space-x-2">
                    <button className="bg-red-500 text-white px-3 py-1 rounded">
                      -
                    </button>
                    <span>0</span>
                    <button className="bg-green-500 text-white px-3 py-1 rounded">
                      +
                    </button>
                  </div>
                  <span>0 ৳</span>
                </div>
              </div>
              <div>
                <label className="block font-semibold">ছাগল</label>
                <div className="flex items-center justify-between">
                  <span>14000 ৳</span>
                  <div className="flex items-center space-x-2">
                    <button className="bg-red-500 text-white px-3 py-1 rounded">
                      -
                    </button>
                    <span>0</span>
                    <button className="bg-green-500 text-white px-3 py-1 rounded">
                      +
                    </button>
                  </div>
                  <span>0 ৳</span>
                </div>
              </div>
              <div>
                <label className="block font-semibold">অনুদানের পরিমাণ</label>
                <input
                  type="text"
                  placeholder="0"
                  className="border border-zinc-300 p-2 rounded w-full"
                ></input>
              </div>
              <div>
                <label className="block">নাম:</label>
                <input
                  type="text"
                  className="border border-zinc-300 p-2 rounded w-full"
                ></input>
              </div>
              <div>
                <label className="block font-semibold">
                  * ঠিকানা / ইউনিয়ন:
                </label>
                <input
                  type="text"
                  className="border border-zinc-300 p-2 rounded w-full"
                ></input>
              </div>
              <div>
                <label className="block">পেমেন্ট কোড সেলেক্ট:</label>
                <select className="border border-zinc-300 p-2 rounded w-full">
                  <option>SSLCommerz</option>
                </select>
              </div>
              <div>
                <button className="bg-green-500 text-white px-6 py-2 rounded-lg w-full">
                  দান করুন
                </button>
              </div>
              <div>
                <label className="block text-sm text-zinc-600">
                  স্কুলের জন্য আপনার অনুদান অত্যন্ত মূল্যবান, আপনার নিজের নামে
                  করুন কিংবা কোন অপশন আমাদের পরিস্থিতিতে নতুন কোন অপশন যোগ করুন
                  সম্ভব হলে
                </label>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
