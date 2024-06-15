"use client";
import "./dashsidebar.css";
import "@/customComponents/dashboardNav/css/dashheader.css";
import "@/customComponents/dashboardNav/vendor/mdi-font/css/material-design-iconic-font.min.css";

import { useState, useEffect } from "react";
import { isAdmin } from "@/apiservices/checklogin";
import { useSelector, useDispatch } from "react-redux";
import { setInitialData } from "@/app/redux/features/isAdmin/isAdminSlice";

import { selectDataTwo } from "@/apiservices/studentapiservices";

function DashboardLayout({ loggedin, notloggedin }) {
  const [data, setData] = useState();
  const dispatch = useDispatch();

  useEffect(() => {
    async function fetchData() {
      const payload = await isAdmin();
      if (payload.status == "Alhamdulillah") {
        const res = await selectDataTwo(
          { userName: payload.data.userName },
          null
        );

        if (res.status == "Alhamdulillah") {
          const desiredObj = {
            status: "Alhamdulillah",
            data: {
              userName: res.data[0].userName,
              userRole: res.data[0].userRole,
              isAdmin: res.data[0].isAdmin,
              userDetails: res.data[0],
            },
          };

          dispatch(setInitialData(desiredObj));
        }
      }
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
