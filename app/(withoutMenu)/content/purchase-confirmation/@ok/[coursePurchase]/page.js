"use client";
import { TiTick } from "react-icons/ti";
import { useSearchParams } from "next/navigation";
import { useEffect } from "react";

function ConfirmationPage({ params }) {
  const course = params.coursePurchase;
  const searchParams = useSearchParams();
  const usd = searchParams.get("usd");

  function push(url) {
    if (typeof window !== "undefined") {
      window.location.href = url;
    }
  }

  useEffect(() => {
    if (typeof fbq === "function" && (usd || usd == 0)) {
      fbq("track", "Purchase", {
        value: parseInt(usd),
        currency: "USD",
      });

      fbq("trackCustom", `Purchase-${course}`, {
        value: parseInt(usd),
        currency: "USD",
      });
    }
  }, []);

  return (
    <div className="w-[100vw] pb-[100px]">
      <div className="text-center bg-slate-200 w-[80%] md:w-[50%] mx-auto py-[50px] mt-[50px] rounded-3xl">
        <div className="rounded-[50%] bg-slate-100 w-[200px] md:w-[300px] mx-auto">
          <TiTick className="text-[200px] md:text-[300px] text-lime-900" />
        </div>
        <div className="mt-[10px] p-5">
          <div className="bg-slate-600 text-white p-5 rounded-3xl my-10 w-11/12 md:w-2/4 mx-auto text-3xl">
            Class price: {usd} USD
          </div>

          <h1 className="text-lime-900 text-xl">
            Your payment request has been received for course:{" "}
            {course ? course : ""}
          </h1>
          <p className="text-lime-900 mt-10 text-xl">
            জাঝাকাল্লাহু খইরন। আপনার রিকুয়েস্টটি আমরা গ্রহণ করেছি, অনুগ্রপূর্বক
            এপ্রুভ হওয়ার জন্য অপেক্ষা করুন
          </p>

          <button
            onClick={() => push("/content/dashboard/loading")}
            className="mt-10 p-5 bg-lime-950 text-white rounded-3xl"
          >
            পুনরায় ড্যাশবোর্ডে ফেরত যেতে এখানে ক্লিক করুন
          </button>
        </div>
      </div>
    </div>
  );
}

export default ConfirmationPage;
