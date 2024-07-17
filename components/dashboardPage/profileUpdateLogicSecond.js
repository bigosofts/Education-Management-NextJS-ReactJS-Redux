"use client";
import { useRouter } from "next/navigation";
import Image from "next/image";
import { useSelector } from "react-redux";

function ProfileUpdateLogicSecond() {
  const data = useSelector((state) => state.isAdmin.value);
  const router = useRouter();
  return (
    <div className="h-[80vh] flex justify-center align-middle p-5">
      <div className="my-auto">
        <h1 className="w-full md:w-[50%] mx-auto text-lg md:text-3xl text-center mb-10">
          এডমিশন ফি প্রদান করতে হলে আপনাকে আপনার প্রোফাইল আপডেট করতে হবে।
        </h1>
        <div className="flex gap-5 justify-center">
          <div
            onClick={() =>
              router.push(
                `/content/dashboard/${data.data.userName}/settings/profile-update`
              )
            }
            className="cursor-pointer w-full md:w-[300px] shadow-md border-[1px] border-slate-200 bg-white m-1 md:mt-5 rounded-2xl border-box mx-0 p-5 md:p-12 relative"
          >
            <Image
              className="m-auto h-12"
              width={100}
              height={100}
              src="/images/setting.svg"
            />
            <h2 className="mt-5 text-[12px] md:text-2xl text-center">
              প্রোফাইল আপডেট করতে এখানে চাপুন
            </h2>
          </div>
          <div
            onClick={() => router.push(`/`)}
            className="w-full md:w-[300px] cursor-pointer shadow-md border-[1px] border-slate-200 bg-white m-1 md:mt-5 rounded-2xl border-box mx-0 p-5 md:p-12 relative"
          >
            <Image
              className="m-auto h-12"
              width={100}
              height={100}
              src="/images/home.svg"
            />
            <h2 className="mt-5 text-[12px] md:text-2xl text-center">
              হোম পেইজে চলে যেতে এখানে চাপুন
            </h2>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProfileUpdateLogicSecond;
