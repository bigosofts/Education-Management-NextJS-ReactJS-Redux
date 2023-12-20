"use client";
import { useRouter } from "next/navigation";
import { useRef, useEffect, useState } from "react";
import "./loginpage.css";
import { teacherLogin } from "@/apiservices/checklogin";
import { isAdmin } from "@/apiservices/checklogin";

function page(props) {
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
  const passwordRef = useRef();

  async function clickHandlerData(e) {
    e.preventDefault();
    let userName = userNameRef.current.value;
    let password = passwordRef.current.value;

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
    router.push("/signup");
  };

  return (
    <div className="page-wrapper">
     
        <div className="container-loginpage">
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
                    <label>SID</label>
                    <input
                      ref={userNameRef}
                      className="au-input au-input--full"
                      type="email"
                      name="email"
                      placeholder="Email"
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
                    ></input>
                  </div>
                  <div className="login-checkbox">
                    <label>
                      <input type="checkbox" name="remember"></input>
                      Remember Me
                    </label>
                    <label>
                      <a href="#">Forgotten Password?</a>
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
            </div>
          </div>
        </div>
     
    </div>
  );
}

export default page;
