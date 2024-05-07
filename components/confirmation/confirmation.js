"use client";
import { TiTick } from "react-icons/ti";
import { useRouter } from "next/navigation";

function ConfirmationPage2({ taka, institutionName, institutionID }) {
  function push(url) {
    if (typeof window !== "undefined") {
      window.location.href = url;
    }
  }

  const router = useRouter();
  return (
    <div className="w-[100vw] pb-[100px]">
      <div className="text-center bg-slate-200 w-[80%] md:w-[50%] mx-auto py-[50px] mt-[50px] rounded-3xl">
        <div className="rounded-[50%] bg-slate-100 w-[200px] md:w-[300px] mx-auto">
          <TiTick className="text-[200px] md:text-[300px] text-lime-900" />
        </div>
        <div className="mt-[10px] p-5">
          <div className="bg-slate-600 text-white p-5 rounded-3xl my-10 w-11/12 md:w-2/4 mx-auto text-3xl">
            Class price: {taka} Taka
          </div>

          <h1 className="text-lime-900 text-xl">
            Your payment request has been received for course: Abacus
            Institution Training
          </h1>
          <p className="text-lime-900 mt-10 text-xl text-justify">
            জাঝাকাল্লাহু খইরন। আলহামদুলিল্লাহ, আপনার প্রতিষ্ঠান{" "}
            {institutionName}, এর নামে একটি একাউন্টটি খোলা হয়েছে, আপনার
            পেমেন্টটি যাচাইয়ের পর আপনি আপনার ড্যাশবোর্ডে লগিন করতে পারবেন। আপনার
            একাউন্ট এপ্রুভ করা হলে আপনি একটি ইমেইল পাবেন। ১৫মে, ২০২৪ তারিখের পর
            আপনি এই আইডি {institutionID} ও নিজ পাসওয়ার্ড দিয়ে নিজ নিজ
            ড্যাশবোর্ডে লগিন করতে পারবেন ইং শা আল্লাহ। কোন কিছু জানার জন্য আপনার
            আইডি দিয়ে হোয়াটস এপে মেসেজ দেবেন (+88 01674 040502)।
          </p>

          <button
            onClick={() => push("/")}
            className="mt-10 p-5 bg-lime-950 text-white rounded-3xl"
          >
            পুনরায় হোম পেইজে ফেরত যেতে এখানে ক্লিক করুন
          </button>
        </div>
      </div>
    </div>
  );
}

export default ConfirmationPage2;
