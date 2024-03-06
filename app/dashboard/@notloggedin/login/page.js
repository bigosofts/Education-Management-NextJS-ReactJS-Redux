"use client";
import { useRouter } from "next/navigation";
import { useRef, useEffect, useState } from "react";
import "./loginpage.css";
import { teacherLogin, studentLogin } from "@/apiservices/checklogin";
import { isAdmin } from "@/apiservices/checklogin";
import { setToken } from "@/helper/sessionHelper";
import mytoast from "@/components/toast/toast";

function page(props) {
  const [data, setData] = useState();
  const [visibility, setVisibility] = useState("student");
  const [shouldRefresh, setShouldRefresh] = useState(false);
  const router = useRouter();

  const hardRefresh = () => {
    if (typeof window !== "undefined") {
      window.location.href = "/dashboard/loading";
    }
  };

  useEffect(() => {
    if (shouldRefresh) {
      hardRefresh();
    }
  }, [shouldRefresh]);

  useEffect(() => {
    async function getData() {
      const res = await isAdmin();
      setData(res);
    }
    getData();
  }, []);

  const userNameRef = useRef();
  const studentUserNameRef = useRef();
  const passwordRef = useRef();
  const StudentPasswordRef = useRef();

  async function clickHandlerData(e) {
    e.preventDefault();
    let userName = userNameRef.current.value;

    let password = passwordRef.current.value;

    if (data) {
      if (data.status == "noToken") {
        const res = await teacherLogin(userName, password);

        if (res.status == "Alhamdulillah") {
          setToken("access_token", res.token);

          mytoast.success("You are successfully logged in");
          setShouldRefresh(true);
        } else if (res.status == "wrongpass") {
          mytoast.danger("you entered wrong combination");
        } else if (res.status == "nouser") {
          mytoast.danger(
            "There is no user with you SID. Please enter correct SID"
          );
        }
      } else if (data.status == "UnauthorizedAccess") {
        console.log("Unauthorized access");
      } else {
        setShouldRefresh(true);
      }
    }
  }
  async function clickHandlerData2(e) {
    e.preventDefault();

    let StudentUserName = studentUserNameRef.current.value;

    let StudentPassword = StudentPasswordRef.current.value;

    if (data) {
      if (data.status == "noToken") {
        const res = await studentLogin(StudentUserName, StudentPassword);
        if (res.status == "Alhamdulillah") {
          setToken("access_token", res.token);

          mytoast.success("You are successfully logged in");
          setShouldRefresh(true);
        } else if (res.status == "wrongpass") {
          mytoast.danger("you entered wrong combination");
        } else if (res.status == "nouser") {
          mytoast.danger(
            "There is no user with you SID. Please enter correct SID"
          );
        }
      } else if (data.status == "UnauthorizedAccess") {
        console.log("Unauthorized access");
      } else {
        setShouldRefresh(true);
      }
    }
  }

  const clickHandlerSingup = (e) => {
    e.preventDefault();
    router.push("/signup");
  };
  const changer1 = () => {
    setVisibility("teacher");
  };
  const changer = () => {
    setVisibility("student");
  };

  return (
    <>
      <div className="page-wrapper">
        <div className="container-loginpage">
          <h1 style={{ textAlign: "center", marginTop: "50px" }}>
            {visibility == "student" ? "Student Login" : "Teacher Login"}
          </h1>

          <div className="login-wrap">
            <div className="login-content">
              <div className="switchButton">
                <div onClick={changer}>Student</div>
                <div onClick={changer1}>Teacher</div>
              </div>
              <div className="login-logo">
                <a className="" href="#">
                  <img src="/logo.png" alt="CoolAdmin"></img>
                </a>
              </div>
              <div
                className={`login-form ${
                  visibility == "student" ? "divDisplay" : ""
                }`}
              >
                <form action="" method="post">
                  <div className="form-group">
                    <label>Teacher</label>
                    <input
                      ref={userNameRef}
                      className="au-input au-input--full"
                      type="email"
                      name="email"
                      placeholder="Teacher ID"
                      autoComplete="off"
                    ></input>
                  </div>
                  <div className="form-group">
                    <label>Password</label>
                    <input
                      ref={passwordRef}
                      className="au-input au-input--full"
                      type="password"
                      name="password"
                      placeholder="Password"
                      autoComplete="off"
                    ></input>
                  </div>
                  <div className="login-checkbox">
                    <label>
                      <input type="checkbox" name="remember"></input>
                      Remember Me
                    </label>
                    <label>
                      <a href="/sendOTP?role=teacher">
                        Forgotten Password and SID?
                      </a>
                    </label>
                  </div>
                  <button
                    onClick={clickHandlerData}
                    className="au-btn au-btn--block au-btn--green m-b-20"
                    type="submit"
                  >
                    sign in
                  </button>
                  {/* <div className="social-login-content">
                                        <div className="social-button">
                                            <button className="au-btn au-btn--block au-btn--red m-b-20">sign in with Google</button>
                                        </div>
                                    </div> */}
                </form>
                <div className="register-link">
                  <p>
                    Don't you have account?
                    <a
                      style={{ cursor: "pointer" }}
                      onClick={clickHandlerSingup}
                    >
                      Sign Up Here
                    </a>
                  </p>
                </div>
              </div>
              <div
                className={`login-form ${
                  visibility == "teacher" ? "divDisplay" : ""
                }`}
              >
                <form action="" method="post">
                  <div className="form-group">
                    <label>Student</label>
                    <input
                      ref={studentUserNameRef}
                      className="au-input au-input--full"
                      type="email"
                      name="email"
                      placeholder="Student ID"
                      autoComplete="off"
                    ></input>
                  </div>
                  <div className="form-group">
                    <label>Password</label>
                    <input
                      ref={StudentPasswordRef}
                      className="au-input au-input--full"
                      type="password"
                      name="password"
                      placeholder="Password"
                      autoComplete="off"
                    ></input>
                  </div>
                  <div className="login-checkbox">
                    <label>
                      <input type="checkbox" name="remember"></input>
                      Remember Me
                    </label>
                    <label>
                      <a href="/sendOTP?role=student">
                        Forgotten Password and SID?
                      </a>
                    </label>
                  </div>
                  <button
                    onClick={clickHandlerData2}
                    className="au-btn au-btn--block au-btn--green m-b-20"
                    type="submit"
                  >
                    sign in
                  </button>
                  {/* <div className="social-login-content">
                                        <div className="social-button">
                                            <button className="au-btn au-btn--block au-btn--red m-b-20">sign in with Google</button>
                                        </div>
                                    </div> */}
                </form>
                <div className="register-link">
                  <p>
                    Don't you have account?
                    <a
                      style={{ cursor: "pointer" }}
                      onClick={clickHandlerSingup}
                    >
                      Sign Up Here
                    </a>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default page;
