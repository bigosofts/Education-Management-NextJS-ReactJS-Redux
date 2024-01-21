"use client";
import "./dashsidebar.css";
import "@/customComponents/dashboardNav/css/dashheader.css";
import "@/customComponents/dashboardNav/vendor/mdi-font/css/material-design-iconic-font.min.css";

import { useState, useEffect } from "react";
import { isAdmin } from "@/apiservices/checklogin";

function DashboardLayout({ loggedin, notloggedin }) {
  const [data, setData] = useState();

  useEffect(() => {
    async function fetchData() {
      const payload = await isAdmin();

      setData(payload);
    }
    fetchData();
  }, []);

  if (data) {
   
    if (data.status == "noToken") {
      return notloggedin;
    } else {
     
      return loggedin;
    }
  }
}

export default DashboardLayout;
