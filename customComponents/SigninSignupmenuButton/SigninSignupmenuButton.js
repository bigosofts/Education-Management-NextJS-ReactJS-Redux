"use client";
import { useEffect } from "react";
import Link from "next/link";
import { isAdmin, logout } from "@/apiservices/checklogin";
import { removeToken } from "@/helper/sessionHelper";

import { useSelector, useDispatch } from "react-redux";
import { setInitialData } from "@/app/redux/features/isAdmin/isAdminSlice";
import { selectDataTwo as selectStudents } from "@/apiservices/studentapiservices";
import { selectAllDataTwo as selectTeachers } from "@/apiservices/teacherapiservices";
import "./tooltip.css";

function SigninSignupmenuButton() {
  const dispatch = useDispatch();
  const adminData = useSelector((state) => state.isAdmin.value);

  const hardRefresh = () => {
    if (typeof window !== "undefined") {
      window.location.href = "/";
    }
  };

  async function handleLogoutClick(e) {
    e.preventDefault();

    const res = await logout();

    if (res.status == "Alhamdulillah") {
      removeToken("access_token");
      hardRefresh();
    }
  }
  useEffect(() => {
    async function fetchData() {
      const payload = await isAdmin();

      if (payload.status == "Alhamdulillah") {
        if (payload.data.userRole == "teacher") {
          const res = await selectTeachers(
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
        } else if (payload.data.userRole == "student") {
          const res = await selectStudents(
            { userName: payload.data.userName },
            null
          );
          if (res.status == "Alhamdulillah") {
            console.log(res);
            let desiredObj;
            if (res.data.length < 1) {
              desiredObj = {
                status: "noToken",
              };
            } else {
              desiredObj = {
                status: "Alhamdulillah",
                data: {
                  userName: res.data[0].userName,
                  userRole: res.data[0].userRole,
                  isAdmin: res.data[0].isAdmin,
                  userDetails: res.data[0],
                },
              };
            }

            dispatch(setInitialData(desiredObj));
          }
        }
      }
    }
    fetchData();
  }, []);

  if (adminData) {
    return (
      <div className="log-sign" style={{ "--i": "1.8s" }}>
        <Link
          href={
            adminData.status == "Alhamdulillah"
              ? "/dashboard/loading"
              : "/dashboard/login"
          }
          className="btn transparent"
        >
          <div class="tooltip">
            {adminData.status == "Alhamdulillah" ? "Dashboard" : "Log in"}
            <span class="tooltiptext">
              Your SID:{" "}
              <span style={{ fontWeight: "900", color: "#013030" }}>
                {adminData.data.userName}
              </span>{" "}
              <br /> Enter to your Dashboard.
            </span>
          </div>
        </Link>
        <Link
          onClick={adminData.status == "Alhamdulillah" ? handleLogoutClick : ""}
          href={adminData.status == "Alhamdulillah" ? "" : "/signup"}
          className="btn solid"
        >
          {adminData.status == "Alhamdulillah" ? "Log Out" : "Sign up"}
        </Link>
      </div>
    );
  } else {
    return (
      <div className="log-sign" style={{ "--i": "1.8s" }}>
        <Link href="/dashboard/login" className="btn transparent">
          Log in
        </Link>
        <Link href="/signup" className="btn solid">
          Sign up
        </Link>
      </div>
    );
  }
}

export default SigninSignupmenuButton;
