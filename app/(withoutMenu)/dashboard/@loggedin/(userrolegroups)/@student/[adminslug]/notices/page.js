"use client";
import { useState, useEffect } from "react";
import { selectDataTwo } from "@/apiservices/pushNoticeapiservices";
import { useSelector } from "react-redux";

function BookPage() {
  const [notices, setNotices] = useState();
  const data = useSelector((state) => state.isAdmin.value);
  function niceDate(date) {
    var isoTime = date;
    var date = new Date(isoTime);

    var options = {
      year: "numeric",
      month: "long",
      day: "numeric",
    };

    var formattedDate = date.toLocaleDateString("en-US", options);
    return formattedDate;
  }

  useEffect(() => {
    async function getData() {
      const res = await selectDataTwo(
        { reciever: data.data.userDetails.userName },
        null
      );
      if (res.status == "Alhamdulillah") {
        setNotices(res.data);
      }
    }
    getData();
  }, []);

  return (
    <div className="w-full md:w-1/2 mx-auto p-5">
      {notices &&
        notices.map((item, i) => (
          <div
            key={i}
            className="w-full bg-lime-100 border-[1px] border-slate-300 rounded-3xl mb-5 overflow-hidden"
          >
            <div className="flex justify-between text-lg bg-cyan-400 text-white p-2">
              <div className="w-full md:w-2/3 mx-auto text-center">
                <span className="text-sm md:text-3xl block">
                  {item.sender} sent you a Notice <br />
                </span>
                <span className="w-full text-slate-900 font-extrabold text-xl md:text-2xl text-center block rounded-3xl mt-2">
                  {item.subject.en ? item.subject.en : item.subject.bn}{" "}
                </span>
              </div>
            </div>
            <div className="text-lg px-5">
              <div className="w-full text-right mt-2">
                Date: {niceDate(item.createdDate)}
              </div>
              <div className="w-full mx-auto my-5 text-md md:text-2xl">
                {item.text.bn ? item.text.bn : item.text.en}
              </div>
            </div>
          </div>
        ))}
    </div>
  );
}

export default BookPage;
