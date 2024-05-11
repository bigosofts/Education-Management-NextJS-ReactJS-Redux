"use client";
import AbacusGenerator from "@/customComponents/allCustomComponents/abacusGenerator/AbacusGenerator";
import { useSelector } from "react-redux";

function AbacusSheetGenerator() {
  const data = useSelector((state) => state.isAdmin.value);

  if (data.data.userDetails.activeStatus == "active") {
    return (
      <div className="bg-white pb-[100px]">
        <AbacusGenerator />
        <div className="w-11/12 md:w-6/12 mt-12 md:mt-[80px] rounded-3xl mx-auto p-4 text-lg md:text-2xl bg-[#013030] text-white transition duration-500 ease-out mb-4">
          অ্যাবাকাস শীট জেনারেটর অ্যাবাকাসের বিভিন্ন ফরমূলা অনুযায়ী প্রাকটিস শীট
          জেনারেট করতে সক্ষম যা আপনার শিক্ষাকে আরো সহজতর করে তুলবে। খুব শীঘ্রই
          আপনারা এই টুলসের ব্যাবহার করতে পারবেন ইং শা আল্লাহ।
        </div>
      </div>
    );
  } else {
    return (
      <div className="w-full">
        <div className="w-full md:w-[50%] mx-auto p-4 border-0 md:border-2 border-slate-300 rounded-3xl mt-10">
          <div className="rounded-3xl w-full p-4 text-2xl md:text-3xl bg-[#013030] text-white transition duration-500 ease-out mb-4">
            আপনার একাউন্টটি এপ্রুভালের জন্য পেন্ডিং আছে। এপ্রুভ হতে ২৪ ঘন্টার
            বেশী দেরী হলে হোয়াটস এপে (+880 1674 040502)।
          </div>
        </div>
      </div>
    );
  }
}

export default AbacusSheetGenerator;
