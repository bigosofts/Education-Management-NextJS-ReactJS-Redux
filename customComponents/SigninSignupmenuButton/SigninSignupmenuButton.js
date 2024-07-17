"use client";

import Link from "next/link";
import { logout } from "@/apiservices/checklogin";
import { removeToken } from "@/helper/sessionHelper";

import { useSelector } from "react-redux";

import "./tooltip.css";

function SigninSignupmenuButton() {
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

  if (adminData?.data) {
    return (
      <div className="log-sign" style={{ "--i": "1.8s" }}>
        <Link
          href={
            adminData.status == "Alhamdulillah"
              ? "/content/dashboard/loading"
              : "/content/dashboard/login"
          }
          className="btn transparent"
        >
          <div class="tooltipC">
            {adminData.status == "Alhamdulillah" ? "Dashboard" : "Log in"}
            <span class="tooltiptextC">
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
          href={adminData.status == "Alhamdulillah" ? "" : "/content/signup"}
          className="btn solid"
        >
          {adminData.status == "Alhamdulillah" ? "Log Out" : "Sign up"}
        </Link>
      </div>
    );
  } else {
    return (
      <div className="log-sign" style={{ "--i": "1.8s" }}>
        <Link href="/content/dashboard/login" className="btn transparent">
          Log in
        </Link>
        <Link href="/content/signup" className="btn solid">
          Sign up
        </Link>
      </div>
    );
  }
}

export default SigninSignupmenuButton;
