"use client";

import { useEffect, useState } from "react";
import { isAdmin, logout } from "@/apiservices/checklogin";
import { useRouter } from "next/navigation";
import { removeToken } from "@/helper/sessionHelper";

function DashboardNav(props) {
  const router = useRouter();
  const clickHandlerHome = (e) => {
    e.preventDefault();
    router.push("/");
  };
  const [show, setShow] = useState(false);
  const [show1, setShow1] = useState(false);
  const [show2, setShow2] = useState(false);
  const [show3, setShow3] = useState(false);

  const handleToggle = (e) => {
    e.preventDefault();
    console.log("clicked");
    setShow((prevShow) => !prevShow);
    setShow1(false);
    setShow2(false);
    setShow3(false);
  };
  const handleToggle1 = (e) => {
    e.preventDefault();
    console.log("clicked");
    setShow1((prevShow) => !prevShow);
    setShow(false);
    setShow2(false);
    setShow3(false);
  };
  const handleToggle2 = (e) => {
    e.preventDefault();
    console.log("clicked");
    setShow2((prevShow) => !prevShow);
    setShow(false);
    setShow1(false);
    setShow3(false);
  };
  const handleToggle3 = (e) => {
    e.preventDefault();
    console.log("clicked");
    setShow3((prevShow) => !prevShow);
    setShow(false);
    setShow1(false);
    setShow2(false);
  };

  const hardRefresh = () => {
    if (typeof window !== "undefined") {
      window.location.href = "/content/dashboard/login";
    }
  };

  async function handleLogoutClick(e) {
    e.preventDefault();
    const res5 = await logout();
    if (res5.status == "Alhamdulillah") {
      removeToken("access_token");
      hardRefresh();
    }
  }

  const [data, setData] = useState();

  useEffect(() => {
    async function fetchData() {
      const payload = await isAdmin();
      setData(payload);
    }
    fetchData();
  }, []);

  if (data) {
    return (
      <header className="header-desktop">
        <div className="section__content">
          <div className="container-fluid-custom">
            <div className="header-wrap">
              <div
                onClick={clickHandlerHome}
                style={{ cursor: "pointer" }}
                className="sidebar__top"
              >
                <img src="/logo.png" className="sidebar__logo" alt="logo"></img>
                <p className="sidebar__logo-name md-block allColorFont">
                  Internet Madrasha
                </p>
                <form className="form-header" action="" method="POST">
                  <input
                    className="au-input au-input--xl"
                    type="text"
                    name="search"
                    placeholder="Search for datas &amp; reports..."
                  ></input>
                  <button className="au-btn--submit" type="submit">
                    <i className="zmdi zmdi-search"></i>
                  </button>
                </form>
              </div>

              <div className="header-button">
                <div className="noti-wrap">
                  <div
                    onClick={handleToggle1}
                    className={`noti__item js-item-menu ${
                      show1 ? "show-dropdown" : ""
                    }`}
                  >
                    <i className="zmdi zmdi-comment-more"></i>
                    <span className="quantity">1</span>
                    <div className="mess-dropdown js-dropdown">
                      <div className="mess__title">
                        <p>You have 2 news message</p>
                      </div>
                      <div className="mess__item">
                        <div className="image img-cir img-40">
                          <img src="/logo.png" alt="Michelle Moreno"></img>
                        </div>
                        <div className="content">
                          <h6>Michelle Moreno</h6>
                          <p>Have sent a photo</p>
                          <span className="time">3 min ago</span>
                        </div>
                      </div>
                      <div className="mess__item">
                        <div className="image img-cir img-40">
                          <img src="/logo.png" alt="Diane Myers"></img>
                        </div>
                        <div className="content">
                          <h6>Diane Myers</h6>
                          <p>You are now connected on message</p>
                          <span className="time">Yesterday</span>
                        </div>
                      </div>
                      <div className="mess__footer">
                        <a href="#">View all messages</a>
                      </div>
                    </div>
                  </div>
                  <div
                    onClick={handleToggle2}
                    className={`noti__item js-item-menu ${
                      show2 ? "show-dropdown" : ""
                    }`}
                  >
                    <i className="zmdi zmdi-email"></i>
                    <span className="quantity">1</span>
                    <div className="email-dropdown js-dropdown">
                      <div className="email__title">
                        <p>You have 3 New Emails</p>
                      </div>
                      <div className="email__item">
                        <div className="image img-cir img-40">
                          <img src="/logo.png" alt="Cynthia Harvey"></img>
                        </div>
                        <div className="content">
                          <p>Meeting about new dashboard...</p>
                          <span>Cynthia Harvey, 3 min ago</span>
                        </div>
                      </div>
                      <div className="email__item">
                        <div className="image img-cir img-40">
                          <img src="/logo.png" alt="Cynthia Harvey"></img>
                        </div>
                        <div className="content">
                          <p>Meeting about new dashboard...</p>
                          <span>Cynthia Harvey, Yesterday</span>
                        </div>
                      </div>
                      <div className="email__item">
                        <div className="image img-cir img-40">
                          <img src="/logo.png" alt="Cynthia Harvey"></img>
                        </div>
                        <div className="content">
                          <p>Meeting about new dashboard...</p>
                          <span>Cynthia Harvey, April 12,,2018</span>
                        </div>
                      </div>
                      <div className="email__footer">
                        <a href="#">See all emails</a>
                      </div>
                    </div>
                  </div>
                  <div
                    onClick={handleToggle3}
                    className={`noti__item js-item-menu ${
                      show3 ? "show-dropdown" : ""
                    }`}
                  >
                    <i className="zmdi zmdi-notifications"></i>
                    <span className="quantity">3</span>
                    <div className="notifi-dropdown js-dropdown">
                      <div className="notifi__title">
                        <p>You have 3 Notifications</p>
                      </div>
                      <div className="notifi__item">
                        <div className="bg-c1 img-cir img-40">
                          <i className="zmdi zmdi-email-open"></i>
                        </div>
                        <div className="content">
                          <p>You got a email notification</p>
                          <span className="date">April 12, 2018 06:50</span>
                        </div>
                      </div>
                      <div className="notifi__item">
                        <div className="bg-c2 img-cir img-40">
                          <i className="zmdi zmdi-account-box"></i>
                        </div>
                        <div className="content">
                          <p>Your account has been blocked</p>
                          <span className="date">April 12, 2018 06:50</span>
                        </div>
                      </div>
                      <div className="notifi__item">
                        <div className="bg-c3 img-cir img-40">
                          <i className="zmdi zmdi-file-text"></i>
                        </div>
                        <div className="content">
                          <p>You got a new file</p>
                          <span className="date">April 12, 2018 06:50</span>
                        </div>
                      </div>
                      <div className="notifi__footer">
                        <a href="#">All notifications</a>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="account-wrap">
                  <div
                    onClick={handleToggle}
                    className={`account-item clearfix js-item-menu ${
                      show ? "show-dropdown" : ""
                    }`}
                  >
                    <div className="image">
                      <img src="/logo.png" alt="John Doe"></img>
                    </div>
                    <div className="content">
                      <a className="js-acc-btn allColorFont">
                        {data.data.userName}
                      </a>
                    </div>
                    <div className="account-dropdown js-dropdown">
                      <div className="js-dropdown-one info clearfix">
                        <div className="image">
                          <a href="#">
                            <img src="/logo.png" alt="John Doe"></img>
                          </a>
                        </div>
                        <div className="content">
                          <h5 className="name">
                            <a href="#">{data.data.userName}</a>
                          </h5>
                          <span className="email">
                            {data.data.isAdmin
                              ? "Admin"
                              : data.data.userRole == "student"
                              ? "Student"
                              : "Teacher"}{" "}
                            Dashboard
                          </span>
                        </div>
                      </div>
                      <div className="js-dropdown-two account-dropdown__body">
                        <div className="account-dropdown__item">
                          <a href="#">
                            <i className="zmdi zmdi-account"></i>Account
                          </a>
                        </div>
                        <div className="account-dropdown__item">
                          <a href="#">
                            <i className="zmdi zmdi-settings"></i>Setting
                          </a>
                        </div>
                        <div className="account-dropdown__item">
                          <a href="#">
                            <i className="zmdi zmdi-money-box"></i>Billing
                          </a>
                        </div>
                      </div>
                      <div
                        onClick={handleLogoutClick}
                        className="js-dropdown-three account-dropdown__footer"
                      >
                        <a>
                          <i className="zmdi zmdi-power"></i>Logout
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>
    );
  }
}

export default DashboardNav;
