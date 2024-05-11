"use client";
import { HiMenuAlt1 } from "react-icons/hi";
import { CiSearch } from "react-icons/ci";
import { IoMdNotificationsOutline } from "react-icons/io";
import "./commonMenu.css";
import { useSelector } from "react-redux";

function CommonMenu({ children, changeDrawerState }) {
  const data = useSelector((state) => state.isAdmin.value);

  return (
    <section className="dashboard-sec" style={{ backgroundColor: "#e8ecf5" }}>
      <div
        style={{ gridTemplateRows: "auto 1fr" }}
        className="h-screen overflow-y-scroll box-border grid"
      >
        <div className="h-12 bg-white flex items-center p-2 border-b-2 sticky top-0 z-10 shadow-sm">
          <div className="flex-auto">
            <HiMenuAlt1
              onClick={changeDrawerState}
              className="cursor-pointer text-3xl text-slate-500"
            />
          </div>
          <div className="flex-auto">
            <h1 className="text-[12px] text-center md:text-lg lg:text-3xl">
              আপনার এস আইডি (SID):{" "}
              <span className="text-red-500 font-extrabold">
                {data.data.userName}
              </span>
            </h1>
          </div>
          <div className="flex-auto">
            <div className="flex justify-end">
              <CiSearch className="text-3xl text-slate-500 mr-2" />
              <IoMdNotificationsOutline className="text-3xl text-slate-500" />
            </div>
          </div>
        </div>
        {children}
      </div>
    </section>
  );
}

export default CommonMenu;
