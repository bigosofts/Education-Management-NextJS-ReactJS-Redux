"use client";

import { useSelector } from "react-redux";
import { useRouter } from "next/navigation";

function AdminDrawer() {
  const data = useSelector((state) => state.isAdmin.value);
  const router = useRouter();
  return (
    <div className="grid grid-cols-3 md:grid-cols-5 gap-3 md:gap-12">
      <div
        onClick={() =>
          router.push(
            `/content/dashboard/${data.data.userName}/education/annual-history-pending`
          )
        }
        className="cursor-pointer w-full shadow-md border-[1px] border-slate-200 bg-white m-1 md:mt-5 rounded-2xl border-box mx-0 p-5 md:p-12 relative"
      >
        <img className="m-auto h-12" src="/images/taka.svg" />
        <h2 className="mt-2 text-[12px] md:text-2xl text-center">
          Annual- pending
        </h2>
      </div>

      <div
        onClick={() =>
          router.push(
            `/content/dashboard/${data.data.userName}/education/annual-history-active`
          )
        }
        className="cursor-pointer w-full shadow-md border-[1px] border-slate-200 bg-white m-1 md:mt-5 rounded-2xl border-box mx-0 p-5 md:p-12 relative"
      >
        <img className="m-auto h-12" src="/images/taka.svg" />
        <h2 className="mt-2 text-[12px] md:text-2xl text-center">
          Annual- Active
        </h2>
      </div>

      <div
        onClick={() =>
          router.push(
            `/content/dashboard/${data.data.userName}/education/annual-history-due`
          )
        }
        className="cursor-pointer w-full shadow-md border-[1px] border-slate-200 bg-white m-1 md:mt-5 rounded-2xl border-box mx-0 p-5 md:p-12 relative"
      >
        <img className="m-auto h-12" src="/images/taka.svg" />
        <h2 className="mt-2 text-[12px] md:text-2xl text-center">
          Annual- Due
        </h2>
      </div>

      <div
        onClick={() =>
          router.push(
            `/content/dashboard/${data.data.userName}/education/monthly-history`
          )
        }
        className="cursor-pointer w-full shadow-md border-[1px] border-slate-200 bg-white m-1 md:mt-5 rounded-2xl border-box mx-0 p-5 md:p-12 relative"
      >
        <img className="m-auto h-12" src="/images/dollar.svg" />
        <h2 className="mt-2 text-[12px] md:text-2xl text-center">
          Monthly Payment
        </h2>
      </div>

      <div
        onClick={() =>
          router.push(
            `/content/dashboard/${data.data.userName}/education/send-notices`
          )
        }
        className="cursor-pointer w-full shadow-md border-[1px] border-slate-200 bg-white m-1 md:mt-5 rounded-2xl border-box mx-0 p-5 md:p-12 relative"
      >
        <img className="m-auto h-12" src="/images/alarm.svg" />
        <h2 className="mt-2 text-[12px] md:text-2xl text-center">
          Send Notice
        </h2>
      </div>
      <div
        onClick={() => router.push(`/`)}
        className="cursor-pointer w-full shadow-md border-[1px] border-slate-200 bg-white m-1 md:mt-5 rounded-2xl border-box mx-0 p-5 md:p-12 relative"
      >
        <img className="m-auto h-12" src="/images/home.svg" />
        <h2 className="mt-2 text-[12px] md:text-2xl text-center">Home</h2>
      </div>

      <div
        onClick={() =>
          router.push(
            `/content/dashboard/${data.data.userName}/education/attendance`
          )
        }
        className="cursor-pointer w-full shadow-md border-[1px] border-slate-200 bg-white m-1 md:mt-5 rounded-2xl border-box mx-0 p-5 md:p-12 relative"
      >
        <img className="m-auto h-12" src="/images/attendance.svg" />
        <h2 className="mt-2 text-[12px] md:text-2xl text-center">Attendance</h2>
      </div>

      <div
        onClick={() =>
          router.push(
            `/content/dashboard/${data.data.userName}/education/hifz-report`
          )
        }
        className="cursor-pointer w-full shadow-md border-[1px] border-slate-200 bg-white m-1 md:mt-5 rounded-2xl border-box mx-0 p-5 md:p-12 relative"
      >
        <img className="m-auto h-12" src="/images/Hifzul.png" />
        <h2 className="mt-2 text-[12px] md:text-2xl text-center">
          Hifz Report
        </h2>
      </div>

      <div
        onClick={() =>
          router.push(
            `/content/dashboard/${data.data.userName}/education/institution-pending`
          )
        }
        className="cursor-pointer w-full shadow-md border-[1px] border-slate-200 bg-white m-1 md:mt-5 rounded-2xl border-box mx-0 p-5 md:p-12 relative"
      >
        <img className="m-auto h-12" src="/images/tech-support.gif" />
        <h2 className="mt-2 text-[12px] md:text-2xl text-center">
          Institution Pending
        </h2>
      </div>

      <div
        onClick={() =>
          router.push(
            `/content/dashboard/${data.data.userName}/education/institution-active`
          )
        }
        className="cursor-pointer w-full shadow-md border-[1px] border-slate-200 bg-white m-1 md:mt-5 rounded-2xl border-box mx-0 p-5 md:p-12 relative"
      >
        <img className="m-auto h-12" src="/images/tech-support.gif" />
        <h2 className="mt-2 text-[12px] md:text-2xl text-center">
          Institution Active
        </h2>
      </div>

      <div
        onClick={() =>
          router.push(
            `/content/dashboard/${data.data.userName}/education/class-assign`
          )
        }
        className="cursor-pointer w-full shadow-md border-[1px] border-slate-200 bg-white m-1 md:mt-5 rounded-2xl border-box mx-0 p-5 md:p-12 relative"
      >
        <img className="m-auto h-12" src="/images/course.svg" />
        <h2 className="mt-2 text-[12px] md:text-2xl text-center">
          Class Report
        </h2>
      </div>
    </div>
  );
}

export default AdminDrawer;
