"use client";

import { useSelector } from "react-redux";
import FeeSection from "@/components/dashboardPage/feeSec";

import PreFeeSection from "@/components/dashboardPage/preFeeSec";

function FeesPage() {
  const data = useSelector((state) => state.isAdmin.value);
  if (data.data.userDetails.studentCourseCode.length < 1) {
    return <PreFeeSection profile={data} />;
  } else {
    return <FeeSection profile={data} />;
  }
}

export default FeesPage;
