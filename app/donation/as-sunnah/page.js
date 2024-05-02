import React from "react";

export default function AsSunnah() {
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
            যারা নিজেদের সম্পদ আল্লাহর পথে ব্যয় করে তাদের উদাহরণ একটি শস্যবীজের
            মতো, যা সাতটি শীষ উৎপাদন করে, প্রত্যেক শীষে একশত শস্যদানা। আল্লাহ
            যাকে ইচ্ছা বহুগুণে বৃদ্ধি করে দেন। আল্লাহ প্রাচুর্যময়, সর্বজ্ঞ।
            [সূরা বাকার: আয়াত ২৬১] যে ব্যক্তি মসজিদ নির্মাণ করে, আল্লাহ তার জন্য
            জান্নাতে ঘর নির্মাণ করবেন। [সহীহ বুখারী: হাদীস ৪৫০; সহীহ মুসলিম:
            হাদীস ৫৩৩]
          </h2>
        </div>
        <br />
        <div className="bg-white dark:bg-green-500 p-4 rounded-lg shadow-lg">
          <h2 className="text-xl font-semibold mb-2 text-green-500">
            সদস্য আহ্বান
          </h2>

          <p className="mb-4">
            আস-সুন্নাহ ফাউন্ডেশন কমপ্লেক্স প্রজেক্টে এককালীন কমপক্ষে ১০০,০০০ (এক
            লক্ষ) বা তদূর্ধ টাকা দান করে ফাউন্ডেশনের আজীবন সদস্য এবং এককালীন
            কমপক্ষে ৫০,০০০ (পঞ্চাশ হাজার) বা তদূর্ধ টাকা দান করে দাতা সদস্য হওয়া
            যাবে। আজীবন সদস্য ও দাতা সদস্য হওয়ার জন্য এখানে ক্লিক করুন। আজীবন
            সদস্য ও দাতা সদস্যগণ আমৃত্যু ফাউন্ডেশনের সদস্য থাকবেন। ফাউন্ডেশনের
            স্বার্থে প্রয়োজন অনুযায়ী তাঁদের পরামর্শ চাওয়া হবে এবং সময়ে সময়ে
            বিভিন্ন কার্যক্রম সম্পর্কে অবহিত করা হবে এবং সম্মাননা সনদ প্রদান করা
            হবে।
          </p>
        </div>
      </div>

      <div className="flex-1 flex flex-col bg-white dark:bg-zinc-900 p-4 rounded-lg shadow-lg">
        <h1 className="text-2xl font-bold mb-4">
          আস-সুন্নাহ ফাউন্ডেশন মসজিদ কমপ্লেক্স
        </h1>
        <p className="text-zinc-600 dark:text-zinc-300 mb-4">
          দেশ, জাতি ও উম্মাহর কল্যাণার্থে পরিচালিত আস-সুন্নাহ ফাউন্ডেশনের
          নানামুখী কার্যক্রমের কেন্দ্রবিন্দু হবে আস-সুন্নাহ ফাউন্ডেশন মসজিদ
          কমপ্লেক্স। এই কমপ্লেক্সে একটি আদর্শ মসজিদ এবং যুগ-চাহিদা পূরণে উপযোগী
          ইসলামিক স্কলার তৈরির লক্ষ্যে সমন্বিত সিলেবাসের একটি আধুনিক মাদরাসাসহ
          বিভন্ন সেবা ও জনকল্যাণমূলক প্রকল্প পরিচালনার কেন্দ্র হবে ইন-শা-আল্লাহ।
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
