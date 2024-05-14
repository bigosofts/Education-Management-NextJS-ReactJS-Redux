import React from "react";
import { Grid, Card } from "@mui/material";
import Link from "next/link";

export default function Donation() {
  return (
    <div className="container mx-auto px-10 py-10">
      {/* Set spacing prop on the Grid container to control space between items */}
      <Grid container spacing={4} justifyContent="center">
        {/* Place each card inside its own Grid item */}
        <Grid item xs={12} sm={6} md={4}>
          <Link href={`/donation/jakat`}>
            <Card className="w-full h-full">
              <img
                src="images/Jakat.jpg"
                alt="jakat"
                className="w-full h-80 object-fill"
              />
              <div className="p-4">
                <h5 className="text-lg font-semibold mb-2">যাকাত তহবিল</h5>
                <p className="line-clamp-4 text-gray-600">
                  যাকাত একদিকে যেমন ইসলামের অন্যতম মৌলিক স্তম্ভ, তেমনই এটি একটি
                  মানবিক ইবাদত। যাকাত অর্থনৈতিক বৈষম্য দূর করতে সব থেকে বড়
                  ভূমিকা পালন করে। আপনার প্রদানকৃত যাকাতের মাধ্যমে সচল হতে পারে
                  একটি অচল সংসারের চাকা।
                </p>
                <br />
                <br />
                <button className="mt-4 w-full bg-green-500 hover:bg-green-600 text-white font-bold py-2 px-4 rounded">
                  দান করুন
                </button>
              </div>
            </Card>
          </Link>
        </Grid>
        {/* Repeat for another card */}
        <Grid item xs={12} sm={6} md={4}>
          <Link href={`/donation/as-sunnah`}>
            <Card className="w-full h-full">
              <img
                src="images/as sunnah.jpg"
                alt="jakat"
                className="w-full h-80 object-fill"
              />
              <div className="p-4">
                <h5 className="text-lg font-semibold mb-2">
                  আস-সুন্নাহ ফাউন্ডেশন মসজিদ কমপ্লেক্স
                </h5>
                <p className="line-clamp-4 text-gray-600">
                  দেশ, জাতি ও উম্মাহর কল্যাণার্থে পরিচালিত আস-সুন্নাহ
                  ফাউন্ডেশনের নানামুখী কার্যক্রমের কেন্দ্রবিন্দু হবে আস-সুন্নাহ
                  ফাউন্ডেশন মসজিদ কমপ্লেক্স। এই কমপ্লেক্সে একটি আদর্শ মসজিদ এবং
                  যুগ-চাহিদা পূরণে উপযোগী ইসলামিক স্কলার তৈরির লক্ষ্যে সমন্বিত
                  সিলেবাসের একটি আধুনিক মাদরাসাসহ বিভন্ন সেবা ও জনকল্যাণমূলক
                  প্রকল্প পরিচালনার কেন্দ্র হবে ইন-শা-আল্লাহ।যা থাকছে আস-সুন্নাহ
                  ফাউন্ডেশন মসজিদ কমপ্লেক্সেএটি একটি সাদকায়ে জারিয়াহমূলক
                  প্রকল্প, যার সাওয়াব মৃত্যুর পরও আমলনামায় যুক্ত হতে থাকবে
                  ইন-শা-আল্লাহ
                </p>
                <br />
                <br />
                <button className="mt-4 w-full bg-green-500 hover:bg-green-600 text-white font-bold py-2 px-4 rounded">
                  দান করুন
                </button>
              </div>
            </Card>
          </Link>
        </Grid>
        {/* Repeat for another card */}
        <Grid item xs={12} sm={6} md={4}>
          <Link href={`/donation/qurbani`}>
            <Card className="w-full h-full">
              <img
                src="images/korbani.jpg"
                alt="jakat"
                className="w-full h-80 object-fill"
              />
              <div className="p-4">
                <h5 className="text-lg font-semibold mb-2">
                  সবার জন্য কুরবানী
                </h5>
                <p className="line-clamp-4 text-gray-600">
                  অনেক অভাবী মানুষ বছরে কেবল কুরবানীর ঈদেই গরু বা ছাগলের গোশতের
                  স্বাদ গ্রহণের সুযোগ পান। সে কারণে প্রতি বছর ‘সবার জন্য
                  কুরবানী’ শিরোনামে আস-সুন্নাহ ফাউন্ডেশন কুরবানীর গোশত বিতরণের
                  আয়োজন করে। কুরবানী এমন একটি ইবাদত, যা প্রতিনিধির মাধ্যমে
                  সম্পাদন করা যায়। আস-সুন্নাহ ফাউন্ডেশন প্রতিনিধি হিসেবে
                  সচ্ছলদের পক্ষ হতে কুরবানীর দায়িত্ব গ্রহণ করে। উত্তরবঙ্গসহ
                  দেশের বিভিন্ন দরিদ্র অঞ্চলে কুরবানী করে দুস্থ ও অসহায় মানুষদের
                  মাঝে গোশত বিতরণ করা হয়। যারা কোনো কারণে নিজের কুরবানী নিজে
                  করতে পারছেন না, কিংবা নিজ এলাকায় কুরবানীর পাশাপাশি দরিদ্র
                  অঞ্চলে আরেকটি কুরবানী করতে ইচ্ছুক, তাঁরা আস-সুন্নাহ
                  ফাউন্ডেশনকে কুরবানীর দায়িত্ব দিতে পারেন। আপনার একটি কুরবানী
                  অনেক অসহায় মানুষের মুখে হাসি ফোটাতে পারে। আপনার পশুটি কোথায়
                  এবং কখন কুরবানী হবে, তা এসএমএসের মাধ্যমে জানিয়ে দেয়া হবে
                  ইন-শা-আল্লাহ।
                </p>
                <br />
                <br />
                <button className="mt-4 w-full bg-green-500 hover:bg-green-600 text-white font-bold py-2 px-4 rounded">
                  দান করুন
                </button>
              </div>
            </Card>
          </Link>
        </Grid>
        {/* Repeat for another card */}
        <Grid item xs={12} sm={6} md={4}>
          <Link href={`/donation/tree`}>
            <Card className="w-full h-full">
              <img
                src="images/tree plantation.jpg"
                alt="jakat"
                className="w-full h-80 object-fill"
              />
              <div className="p-4">
                <h5 className="text-lg font-semibold mb-2">বৃক্ষরোপন তহবিল</h5>
                <p className="line-clamp-4 text-gray-600">
                  বিভিন্ন হাদীস দ্বারা প্রমাণিত, গাছ লাগানো সাদাকায়ে জারিয়া।
                  যতদিন পর্যন্ত রোপনকৃত গাছটি জীবিত থাকবে ততদিন যত প্রাণী,
                  পশুপাখি ও মানুষ সে গাছ থেকে ফুল, ফল ও ছায়া অর্থাৎ যেকোনো উপকার
                  পাবে, তা রোপণকারীর আমলনামায় সদকায়ে জারিয়া হিসেবে লেখা হবে।
                  রোপণকারী ব্যক্তি যদি মারাও যান, তাহলে তাঁর আমলনামায় এ সওয়াব
                  পৌঁছাতে থাকবে।আম, পেয়ারা, লেবু প্রতিটি গাছের মূল্য - ৭০ টাকা
                </p>
                <br />
                <br />
                <button className="mt-4 w-full bg-green-500 hover:bg-green-600 text-white font-bold py-2 px-4 rounded">
                  দান করুন
                </button>
              </div>
            </Card>
          </Link>
        </Grid>
        {/* Repeat for another card */}
        <Grid item xs={12} sm={6} md={4}>
          <Link href={`/donation/iftar`}>
            <Card className="w-full h-full">
              <img
                src="images/iftar.png"
                alt="jakat"
                className="w-full h-80 object-fill"
              />
              <div className="p-4">
                <h5 className="text-lg font-semibold mb-2">ইফতার তহবিল</h5>
                <p className="line-clamp-4 text-gray-600">
                  আস-সুন্নাহ ফাউন্ডেশনের নিয়মিত কর্মসূচির মধ্যে একটি হলো ইফতার ও
                  রামাদ্বান ফুড বিতরণ। দেশের প্রত্যন্ত অঞ্চলের অভাবী সিয়াম
                  পালনকারীরা যেন রামাদ্বান মাসে নির্বিঘ্নে সিয়াম পালন ও
                  ইবাদত-বন্দেগী করতে পারেন, সে লক্ষ্যে তাদের মাঝে ইফতার সামগ্রী
                  বিতরণের উদ্যোগ গ্রহণ করে থাকে ফাউন্ডেশন।
                </p>
                <br />
                <br />
                <button className="mt-4 w-full bg-green-500 hover:bg-green-600 text-white font-bold py-2 px-4 rounded">
                  দান করুন
                </button>
              </div>
            </Card>
          </Link>
        </Grid>
        {/* Repeat for another card */}
        <Grid item xs={12} sm={6} md={4}>
          <Link href={`/donation/donate`}>
            <Card className="w-full h-full">
              <img
                src="images/dan.jpeg"
                alt="jakat"
                className="w-full h-80 object-fill"
              />
              <div className="p-4">
                <h5 className="text-lg font-semibold mb-2">সাধারণ তহবিল</h5>
                <p className="line-clamp-4 text-gray-600">
                  সুনির্দিষ্ট কোনো খাতে দান করলে সেটা সে খাতেই ব্যয় করে থাকে
                  আস-সুন্নাহ ফাউন্ডেশন। আর সাধারণ তহবিলের অর্থ ফাউন্ডেশন
                  পরিচালিত সকল কল্যানমূলক কার্যক্রমের জন্য উন্মুক্ত থাকে এবং
                  আস-সুন্নাহ’র দীনি শিক্ষা, মানব সেবা ও দাওয়াহমূলক যাবতীয় উদ্যোগ
                  পরিচালনায়ও এই খাতের অর্থ ব্যয় করা হয়।
                </p>
                <br />
                <br />
                <button className="mt-4 w-full bg-green-500 hover:bg-green-600 text-white font-bold py-2 px-4 rounded">
                  দান করুন
                </button>
              </div>
            </Card>
          </Link>
        </Grid>
        {/* Add more Grid items for additional cards as needed */}
      </Grid>
    </div>
  );
}
