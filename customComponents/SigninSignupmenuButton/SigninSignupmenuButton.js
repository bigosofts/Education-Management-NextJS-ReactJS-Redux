"use client";
import { useState, useEffect } from "react";

import Link from "next/link";
import { isAdmin, logout } from "@/apiservices/checklogin";
import { removeToken } from "@/helper/sessionHelper";

function SigninSignupmenuButton() {
  const [adminData, setAdminData] = useState();

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
    async function getData() {
      const response = await isAdmin();
      setAdminData(response);
    }
    getData();
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
          {adminData.status == "Alhamdulillah"
            ? adminData.data.userName
            : "Log in"}
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
