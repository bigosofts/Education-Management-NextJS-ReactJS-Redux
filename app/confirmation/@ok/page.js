"use client";
import { TiTick } from "react-icons/ti";

function ConfirmationPage() {
  return (
    <div className="w-[100vw] pb-[100px]">
      <div className="text-center bg-slate-200 w-[80%] md:w-[50%] mx-auto py-[50px] mt-[50px] rounded-3xl">
        <div className="rounded-[50%] bg-slate-100 w-[300px] md:w-[400px] mx-auto">
          <TiTick className="text-[300px] md:text-[400px] text-lime-900" />
        </div>
        <div className="mt-[10px] p-5">
          <h1 className="text-lime-900">
            Your payment request has been received
          </h1>
          <p className="text-lime-900 mt-10 text-xl">
            জাঝাকাল্লাহু খইরন। আপনার রিকুয়েস্টটি আমরা গ্রহণ করেছি, অনুগ্রপূর্বক
            এপ্রুভ হওয়ার জন্য অপেক্ষা করুন
          </p>

          <button
            onClick={() => router.push(`/dashboard/${data.data.userName}`)}
            className="mt-10 p-5 bg-lime-950 text-white rounded-3xl"
          >
            পুনরায় ড্যাশবোর্ডে ফেরত যেতে এখানে করুন
          </button>
        </div>
      </div>
    </div>
  );
}

export default ConfirmationPage;
