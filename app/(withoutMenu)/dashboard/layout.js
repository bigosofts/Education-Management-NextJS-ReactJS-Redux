"use client";
import "./dashsidebar.css";
import "@/customComponents/dashboardNav/css/dashheader.css";
import "@/customComponents/dashboardNav/vendor/mdi-font/css/material-design-iconic-font.min.css";


import { useSelector } from "react-redux";

import Loader from "@/customComponents/loader/Loader";

function DashboardLayout({ loggedin, notloggedin }) {
  const data = useSelector((state) => state.isAdmin.value);


  if (data) {
    if (data.status == "noToken") {
      return notloggedin;
    } else {
      return loggedin;
    }
  } else {
    return <Loader />;
  }
}

export default DashboardLayout;
