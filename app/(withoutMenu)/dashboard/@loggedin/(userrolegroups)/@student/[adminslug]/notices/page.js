"use client";

import { useSelector } from "react-redux";

import Loader from "@/customComponents/loader/Loader";
import Link from "next/link";

function BookPage() {
  const data = useSelector((state) => state.isAdmin.value);

  const notice = useSelector((state) => state.notices.notices);

  let notices =
    notice.length > 0 &&
    notice.filter((item) => item.reciever == data.data.userDetails.userName);

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

  if (notice.length > 0) {
    return (
      <div className="w-full md:w-1/2 mx-auto p-2 md:p-5">
        {notices.map((item, i) => (
          <div
            key={i}
            className="w-full bg-lime-100 border-[1px] border-slate-300 rounded-3xl mb-5 overflow-hidden pb-5"
          >
            <div className="flex justify-between text-lg text-slate-100 p-2 bg-green-900">
              <div className="w-full md:w-2/3 mx-auto text-center">
                <span className="text-sm md:text-3xl block">
                  {item.sender} sent you a Notice <br />
                </span>
                <span className="w-full text-white font-extrabold text-lg md:text-2xl text-center block rounded-3xl mt-2">
                  {item.subject.en ? item.subject.en : item.subject.bn}{" "}
                </span>
              </div>
            </div>
            <div className="text-lg px-0 md:px-5 box-border">
              <div className="w-full text-right mt-2 px-5">
                Date: {niceDate(item.createdDate)}
              </div>
              <div className="w-full mx-auto my-5 px-1 text-sm md:text-2xl">
                {item.text.bn ? item.text.bn : item.text.en}
              </div>

              {item.link && (
                <Link
                  href={item.link}
                  className="w-full mx-auto my-5 text-sm md:text-2xl cursor-pointer text-blue-200 bg-slate-900 px-4 py-1 rounded-lg"
                >
                  <i className="fa fa-paperclip text-xl mr-2" /> {item.link}
                </Link>
              )}
            </div>
          </div>
        ))}
      </div>
    );
  } else {
    return <Loader />;
  }
}

export default BookPage;
