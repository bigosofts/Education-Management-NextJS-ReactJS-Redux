"use client";
import ProfileUpdate from "@/components/dashboardPage/profileUpdate";

import { useSelector } from "react-redux";

function BookPage() {
  const data = useSelector((state) => state.isAdmin.value);
  if (data) {
    return (
      <div className="w-full">
        <h1 className="px-5 text-lg md:text-3xl mt-2 text-slate-500">Setting</h1>
        <ProfileUpdate/>
      </div>
    );
  }
}

export default BookPage;
