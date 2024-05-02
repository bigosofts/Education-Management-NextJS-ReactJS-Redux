import React from "react";

export default function Iftar() {
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
            রাসূলুল্লাহ (সাল্লাল্লাহু ‘আলাইহি ওয়া সাল্লাম) বলেছেনঃ যে ব্যক্তি
            কোন সিয়াম পালনকারীকে ইফতার করাবে তাকে সিয়াম পালনকারীর সমপরিমাণ
            সাওয়াব দেওয়া হবে। তবে তাতে সিয়াম পালনকারীর সাওয়াব থেকে বিন্দুমাত্র
            কমানো হবে না। (সুনানে তিরমিজী, হাদিস নং ৮০৭; ইবনু মা-জাহ, হাদিস নং
            ১৭৪৬)
          </h2>
        </div>
        <br />
        <div className="bg-white dark:bg-green-500 p-4 rounded-lg shadow-lg">
          <p className="mb-4">
            আস-সুন্নাহ ফউন্ডেশন এ যাবৎ ১২০,৫৮৫ জন রোজাদারের মাঝে ইফতার সামগ্রী
            বিতরণ করেছে।
          </p>
        </div>
      </div>

      <div className="flex-1 flex flex-col bg-white dark:bg-zinc-900 p-4 rounded-lg shadow-lg">
        <h1 className="text-2xl font-bold mb-4">ইফতার তহবিল</h1>
        <p className="text-zinc-600 dark:text-zinc-300 mb-4">
          আস-সুন্নাহ ফাউন্ডেশনের নিয়মিত কর্মসূচির মধ্যে একটি হলো ইফতার ও
          রামাদ্বান ফুড বিতরণ। দেশের প্রত্যন্ত অঞ্চলের অভাবী সিয়াম পালনকারীরা
          যেন রামাদ্বান মাসে নির্বিঘ্নে সিয়াম পালন ও ইবাদত-বন্দেগী করতে পারেন,
          সে লক্ষ্যে তাদের মাঝে ইফতার সামগ্রী বিতরণের উদ্যোগ গ্রহণ করে থাকে
          ফাউন্ডেশন।
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
