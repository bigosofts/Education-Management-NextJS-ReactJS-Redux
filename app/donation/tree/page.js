import React from "react";

export default function TreePage() {
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
            ‘যদি কোনো মুসলমান একটি বৃক্ষ রোপণ করে অথবা কোনো শস্য উৎপাদন করে এবং
            তা থেকে কোনো মানুষ কিংবা পাখি অথবা পশু ভক্ষণ করে, তাহলে তা সে
            ব্যক্তির জন্য সাদাকাস্বরূপ।’ (সহীহ বুখারী-২৩২০, সহীহ মুসলিম-১৫৫৩)
            যদি কিয়ামত এসে যায়, তখন কারো হাতে যদি একটি চারাগাছ থাকে, তাহলে
            কিয়ামত হওয়ার আগে সম্ভব হলে সে যেন চারাটি রোপন করে।’ (আল-আদাবুল
            মুফরাদ-৪৭৯, মুসনাদ আহমদ-১২৯০২)
          </h2>
        </div>
        <br />
        <div className="bg-white dark:bg-green-500 p-4 rounded-lg shadow-lg">
          <h2 className="text-xl font-semibold mb-2 text-green-500">
            আসুন একসাথে হাসি ফোটাই:
          </h2>

          <p className="mb-4">
            বিশ্বব্যাপী তাপমাত্রা বেড়ে পরিবেশের ভারসাম্য হারিয়ে যাওয়ার অন্যতম
            কারণ বৃক্ষহীনতা। দিন দিন কমে যাচ্ছে গাছের সংখ্যা। বর্তমান পৃথিবীর
            জলবায়ু পরিবর্তন ও বৈশ্বিক উষ্ণায়ন প্রতিরোধে তথা মানবসভ্যতার সুরক্ষার
            জন্য মহানবী সা.–এর মহান সুন্নাত বৃক্ষরোপণ অতীব প্রয়োজন। এই
            প্রয়োজনীয়তা উপলব্ধি করে আস-সুন্নাহ ফাউন্ডেশন দেশব্যাপী বৃক্ষরোপণ
            কর্মসূচি হাতে নিয়েছে। ইন-শা-আল্লাহ এই কর্মসূচির অংশ হিসেবে প্রতি বছর
            সারাদেশে অগ্রাধিকার ভিত্তিতে ফলজ গাছগাছালি লাগানো হবে।
          </p>
        </div>
      </div>

      <div className="flex-1 flex flex-col bg-white dark:bg-zinc-900 p-4 rounded-lg shadow-lg">
        <h1 className="text-2xl font-bold mb-4">বৃক্ষরোপণ তহবিল</h1>
        <p className="text-zinc-600 dark:text-zinc-300 mb-4">
          বিভিন্ন হাদীস দ্বারা প্রমাণিত, গাছ লাগানো সাদাকায়ে জারিয়া। যতদিন
          পর্যন্ত রোপনকৃত গাছটি জীবিত থাকবে ততদিন যত প্রাণী, পশুপাখি ও মানুষ সে
          গাছ থেকে ফুল, ফল ও ছায়া অর্থাৎ যেকোনো উপকার পাবে, তা রোপণকারীর
          আমলনামায় সদকায়ে জারিয়া হিসেবে লেখা হবে। রোপণকারী ব্যক্তি যদি মারাও
          যান, তাহলে তাঁর আমলনামায় এ সওয়াব পৌঁছাতে থাকবে।
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
