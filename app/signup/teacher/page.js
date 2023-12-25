"use client";
import { useRouter } from "next/navigation";
import { useRef, useEffect, useState } from "react";
import "./loginpage.css";
import { selectData } from "@/apiservices/teacherapiservices";
import { isAdmin } from "@/apiservices/checklogin";

function TeacherSignUp(props) {
  const [data, setData] = useState();

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
  const emailref = useRef();
  const mobilenoref = useRef();

  const passwordRef = useRef();

  async function clickHandlerData(e) {
    e.preventDefault();
    let userName = userNameRef.current.value;

    let password = passwordRef.current.value;
    let email = emailref.current.value;
    let mobile = mobilenoref.current.value;

    if (data) {
      if (data.status == "noToken") {
        const res = await teacherLogin(userName, password);
        if (res.status == "Alhamdulillah") {
          console.log("login successfull");
          setShouldRefresh(true);
        } else if (res.status == "nouser") {
          router.push("/signup");
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
    router.push("/dashboard/login");
  };

  return (
    <div className="page-wrapper">
      <div className="container-loginpage">
        <h1
          style={{ textAlign: "center", marginTop: "50px", fontSize: "32px" }}
        >
          Teacher Signup
        </h1>

        <div className="login-wrap">
          <div className="login-content">
            <div className="login-logo">
              <a className="" href="#">
                <img src="/logo.png" alt="CoolAdmin"></img>
              </a>
            </div>
            <div className="login-form">
              <form action="" method="post">
                <div className="form-group">
                  <label>Teacher Username:</label>
                  <input
                    ref={userNameRef}
                    className="au-input au-input--full"
                    type="text"
                    name="userName"
                    placeholder="Enter Any userName you want"
                    autoComplete="off"
                    pattern="^[a-zA-Z_ ]*$"
                  ></input>
                </div>
                <div className="form-group">
                  <label>Teacher Email Address: </label>
                  <input
                    ref={emailref}
                    className="au-input au-input--full"
                    type="email"
                    name="email"
                    placeholder="Enter your Email Address"
                    autoComplete="off"
                    pattern="[^@]+@[^@]+.[a-zA-Z]{2,6}"
                  ></input>
                </div>
                <div className="form-group">
                  <label>Mobile Number: </label>
                  <input
                    ref={mobilenoref}
                    className="au-input au-input--full"
                    type="text"
                    name="mobilephone"
                    placeholder="Enter Phone Number"
                    autoComplete="off"
                    pattern="^\+[1-9]{1}[0-9]{3,12}$"
                  ></input>
                </div>
                <div className="form-group">
                  <label>Password: </label>
                  <input
                    ref={passwordRef}
                    className="au-input au-input--full"
                    type="password"
                    name="password"
                    placeholder="Enter your Password"
                    autoComplete="off"
                  ></input>
                </div>

                <button
                  onClick={clickHandlerData}
                  className="au-btn au-btn--block au-btn--green m-b-20"
                  type="submit"
                >
                  sign up
                </button>
                {/* <div className="social-login-content">
                                        <div className="social-button">
                                            <button className="au-btn au-btn--block au-btn--red m-b-20">sign in with Google</button>
                                        </div>
                                    </div> */}
              </form>
              <div className="register-link">
                <p>
                  Do you have account?
                  <a style={{ cursor: "pointer" }} onClick={clickHandlerSingup}>
                    Sign In here
                  </a>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default TeacherSignUp;
