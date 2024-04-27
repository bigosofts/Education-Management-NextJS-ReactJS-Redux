"use client";
import { useSelector } from "react-redux";
import { useEffect, useState } from "react";
import {
  selectDataTwo as selectClasses,
  updateData as updateClass,
} from "@/apiservices/classapiservices";

function BookPage() {
  const [classes, setClasses] = useState();

  useEffect(() => {
    async function getData() {
      const res = await selectClasses(null, null);
      if (res.status == "Alhamdulillah") {
        setClasses(res.data);
      }
    }
    getData();
  }, []);

  function getDesiredClass() {
    return classes.filter((item) => {
      return item.teacher.TID == data.data.userDetails.userName;
    });
  }

  const data = useSelector((state) => state.isAdmin.value);

  if (classes) {
    console.log(getDesiredClass());
  }

  return (
    <div className="w-[95%] md:w-9/12 mx-auto">
      <h1 className="mt-10 text-center">Ostad Attendance</h1>

      <div className="mt-10 text-lg md:text-2xl text-slate-800 p-5">
        <form>
          <div className="flex-row md:flex gap-5">
            <div className="border-[2px] rounded-3xl border-slate-300 w-1/2 mx-auto p-5">
              <div className="w-full">
                {" "}
                প্রশ্নঃ{" "}
                <input
                  className="px-5 w-full"
                  type="text"
                  placeholder="প্রথম প্রশ্ন লিখুন"
                ></input>
              </div>
              <div className="w-full">
                অপশন ১ঃ
                <input
                  className="px-5 w-full"
                  type="text"
                  placeholder="প্রথম অপশন লিখুন"
                ></input>
              </div>
              <div className="w-full">
                অপশন ২ঃ
                <input
                  className="px-5 w-full"
                  type="text"
                  placeholder="দ্বিতীয় অপশন লিখুন"
                ></input>
              </div>
              <div className="w-full">
                অপশন ৩ঃ
                <input
                  className="px-5 w-full"
                  type="text"
                  placeholder="তৃতীয় অপশন লিখুন"
                ></input>
              </div>

              <div className="w-full">
                অপশন ৪ঃ
                <input
                  className="px-5 w-full"
                  type="text"
                  placeholder="চতুর্থ অপশন লিখুন"
                ></input>
              </div>
              <div className="w-full">
                সঠিক উত্তর দিনঃ
                <input
                  className="px-5 w-full"
                  type="text"
                  placeholder="সঠিক উত্তর লিখুন"
                ></input>
              </div>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}

export default BookPage;
