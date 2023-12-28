"use client";
import { useState, useEffect } from "react";
import { selectData } from "@/apiservices/menuapiservices";
import Link from "next/link";
import { isAdmin, logout } from "@/apiservices/checklogin";

import "./SubMenu.css";

function SubMenu() {
  const [data, setData] = useState();
  const [adminData, setAdminData] = useState();
  const hardRefresh = () => {
    if (typeof window !== "undefined") {
      window.location.href = "/";
    }
  };

  function handleLogoutClick(e) {
    e.preventDefault();
    logout();
    hardRefresh();
  }

  function niceDate(isoTime) {
    var date = new Date(isoTime);

    var options = {
      year: "numeric",
      month: "long",
      day: "numeric",
    };

    var formattedDate = date.toLocaleDateString("en-US", options);
    return formattedDate;
  }
  useEffect(() => {
    async function getData() {
      const response = await isAdmin();
      setAdminData(response);
    }
    getData();
  }, []);

  useEffect(() => {
    async function getData() {
      const res = await selectData({
        activeStatus: "active",
        menuType: "header",
      });
      if (res.status == "Alhamdulillah") {
        setData(res.data);
      } else {
        mytoast.danger("Data fetching error. Try Refreshing the page");
      }
    }
    getData();
  }, []);

  if (data && adminData) {
    return (
      <div className="submenu">
        <div className="container-submenu">
          <input type="checkbox" name="" id="check" />

          <div className="logo-container">
            <h3 className="logo">Home</h3>
          </div>

          <div className="nav-btn">
            <div className="nav-links">
              <ul>
                {data.map((item) => (
                  <li className="nav-link" key={item.menuTitle.en}>
                    {item.subMenu ? (
                      <>
                        <a href={item.menuLink}>
                          {item.menuTitle.en}
                          <i className="fa fa-caret-down"></i>
                        </a>
                        <div className="dropdown">
                          <ul>
                            {item.subMenu.map((item2) => (
                              <li className="dropdown-link">
                                {item2.subMenu ? (
                                  <>
                                    <a href={item.menuLink}>
                                      {item2.menuTitle.en}
                                      <i className="fa fa-caret-down"></i>
                                    </a>
                                    <div className="dropdown second">
                                      <ul>
                                        {item2.subMenu.map((item3) => (
                                          <li className="dropdown-link">
                                            {item3.subMenu ? (
                                              <>
                                                <a href={item.menuLink}>
                                                  {item3.menuTitle.en}
                                                  <i className="fa fa-caret-down"></i>
                                                </a>
                                                <div className="dropdown second">
                                                  <ul>
                                                    {item3.subMenu.map(
                                                      (item4) => (
                                                        <li className="dropdown-link">
                                                          <a href={item4.item4}>
                                                            {item4.menuTitle.en}
                                                          </a>
                                                        </li>
                                                      )
                                                    )}
                                                  </ul>
                                                </div>
                                              </>
                                            ) : (
                                              <a href={item3.menuLink}>
                                                {item3.menuTitle.en}
                                              </a>
                                            )}
                                          </li>
                                        ))}
                                      </ul>
                                    </div>
                                  </>
                                ) : (
                                  <a href={item2.menuLink}>
                                    {item2.menuTitle.en}
                                  </a>
                                )}
                              </li>
                            ))}
                          </ul>
                        </div>
                      </>
                    ) : (
                      <a href={item.menuLink}>{item.menuTitle.en}</a>
                    )}
                  </li>
                ))}
              </ul>
            </div>

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
                onClick={
                  adminData.status == "Alhamdulillah" ? handleLogoutClick : ""
                }
                href={adminData.status == "Alhamdulillah" ? "" : "/signup"}
                className="btn solid"
              >
                {adminData.status == "Alhamdulillah" ? "Log Out" : "Sign up"}
              </Link>
            </div>
          </div>

          <div className="hamburger-menu-container">
            <div className="hamburger-menu">
              <div></div>
            </div>
          </div>
        </div>
      </div>
    );
  } else {
    return <div> Loading.. </div>;
  }
}

export default SubMenu;
