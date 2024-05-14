import React from "react";

export default function Donate() {
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
            আল্লাহ সুবহানাহু ওয়া তা'আলা বলেন, ‘যারা আল্লাহর পথে তাদের সম্পদ
            ব্যয় করে, তাদের উপমা একটি বীজের মত, যা উৎপন্ন করল সাতটি শীষ, প্রতিটি
            শীষে রয়েছে একশ’ দানা। আর আল্লাহ যাকে চান তার জন্য বাড়িয়ে দেন। আর
            আল্লাহ প্রাচুর্যময়, সর্বজ্ঞ’। (সূরা বাকারা, আয়াত ২৬১) আবূ হুরাইরাহ
            (রাঃ) হতে বর্ণিত। নবী (সাল্লাল্লাহু ‘আলাইহি ওয়া সাল্লাম) বলেছেনঃ
            অর্থাৎ ‘প্রতিদিন সকালে দু’জন ফেরেশতা অবতরণ করেন। তাঁদের একজন বলেন,
            হে আল্লাহ! দাতাকে তার দানের উত্তম প্রতিদান দিন আর অপরজন বলেন, হে
            আল্লাহ! কৃপণকে ধ্বংস করে দিন। (সহীহ্ বুখারী, হাদিস নং ১৪৪২)
          </h2>
        </div>
        <br />
        <div className="bg-white dark:bg-green-500 p-4 rounded-lg shadow-lg">
          <p className="mb-4">
            সাধারণ দান ফাউন্ডেশনকে টিকিয়ে রাখতে সবচেয়ে বেশি সাহায্য করে। সাধারণ
            দানের অর্থেই মূলত: সকল কল্যানমুখী কার্যক্রম পরিচালিত হয়। সাধারণ
            দানের জন্য কোনো অংক নির্দিষ্ট নেই, যে কোনো পরিমাণ দান করা যায়। মাসিক
            দাতা সদস্য: আস-সুন্নাহ ফাউন্ডেশনের মাসিক দাতা সদস্য হলেন
            প্রতিষ্ঠানটির স্থায়ী ডোনার। কারণ ফাউন্ডেশনের একমাত্র স্থায়ী উপার্জন
            হলো মাসিক দাতা সদস্যগনের নিয়মিত অনুদান। মাসিক দাতা সদস্যদের নিয়মিত
            দান আস-সুন্নাহ ফাউন্ডেশেনের বহুমুখী দা’ওয়াহ কার্যক্রম ও সার্বিক
            উন্নয়নের জন্য স্থায়ী আয়ের মাধ্যম।
          </p>
        </div>
      </div>

      <div className="flex-1 flex flex-col bg-white dark:bg-zinc-900 p-4 rounded-lg shadow-lg">
        <h1 className="text-2xl font-bold mb-4">সাধারণ তহবিল</h1>
        <p className="text-zinc-600 dark:text-zinc-300 mb-4">
          সুনির্দিষ্ট কোনো খাতে দান করলে সেটা সে খাতেই ব্যয় করে থাকে আস-সুন্নাহ
          ফাউন্ডেশন। আর সাধারণ তহবিলের অর্থ ফাউন্ডেশন পরিচালিত সকল কল্যানমূলক
          কার্যক্রমের জন্য উন্মুক্ত থাকে এবং আস-সুন্নাহ’র দীনি শিক্ষা, মানব সেবা
          ও দাওয়াহমূলক যাবতীয় উদ্যোগ পরিচালনায়ও এই খাতের অর্থ ব্যয় করা হয়।
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

          <div className="grid grid-cols-3 gap-4">
            <button className="border-2 border-zinc-300 p-2 rounded text-zinc-700">
              100 ৳
            </button>
            <button className="border-2 border-zinc-300 p-2 rounded text-zinc-700">
              1000 ৳
            </button>
            <button className="border-2 border-zinc-300 p-2 rounded text-zinc-700">
              5000 ৳
            </button>
            <button className="border-2 border-zinc-300 p-2 rounded text-zinc-700">
              10000 ৳
            </button>
            <button className="border-2 border-zinc-300 p-2 rounded text-zinc-700">
              50000 ৳
            </button>
            <button className="border-2 border-zinc-300 p-2 rounded text-zinc-700">
              Other
            </button>
          </div>

          <div className="flex items-center mt-4">
            <input
              id="optional-donation"
              type="checkbox"
              className="w-4 h-4 text-blue-600 rounded"
            ></input>
            <label
              htmlFor="optional-donation"
              className="ml-2 text-sm text-zinc-700"
            >
              রেগুলার পীরিয়ডিক অনুদান
            </label>
          </div>

          <div className="space-y-2 mt-4">
            <div>
              <label className="text-sm text-zinc-700">
                * অনুদানের পরিমাণ:
              </label>
              <input
                type="text"
                className="w-full p-2 border border-zinc-300 rounded"
              ></input>
            </div>
            <div>
              <label className="text-sm text-zinc-700">নাম:</label>
              <input
                type="text"
                className="w-full p-2 border border-zinc-300 rounded"
              ></input>
            </div>
            <div>
              <label className="text-sm text-zinc-700">* মোবাইল / ইমেইল:</label>
              <input
                type="text"
                className="w-full p-2 border border-zinc-300 rounded"
              ></input>
            </div>
          </div>
          <br />
          <button className="w-24 bg-green-500 text-white p-2 mt-4 rounded float-right">
            পরবর্তী
          </button>
        </div>
      </div>
    </div>
  );
}
