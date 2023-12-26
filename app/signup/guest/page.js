"use client";
import { useRouter } from "next/navigation";
import { useRef, useEffect, useState } from "react";
import "./loginpage.css";
import { createData, selectAllData } from "@/apiservices/teacherapiservices";
import { isAdmin } from "@/apiservices/checklogin";
import mytoast from "@/components/toast/toast";

function GuestPage(props) {
  const [data, setData] = useState();
  const [userID, setUserID] = useState("");

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

  const firstNameref = useRef();
  const lastNameref = useRef();
  const emailref = useRef();
  const mobilenoref = useRef();

  const passwordRef = useRef();
  const courseref = useRef();

  async function clickHandlerData(e) {
    e.preventDefault();

    let firstName = firstNameref.current.value;
    let lastName = lastNameref.current.value;

    let password = passwordRef.current.value;
    let email = emailref.current.value;
    let mobile = mobilenoref.current.value;
    let courseCode = courseref.current.value;

    const res2 = await selectAllData(
      {
        emailAddress: email,
      },
      {
        emailAddress: true,
      }
    );
    console.log(res2);
    if (res2.data.length >= 1) {
      mytoast.warning("The email is already been used. Try another");
    } else {
      if (data) {
        if (data.status == "noToken") {
          const res = await createData(
            firstName,
            "",
            lastName,
            "",
            null,
            null,
            "",
            "",
            email,
            password,
            mobile,
            courseCode,
            "",
            "",
            null,
            "",
            "",
            "",
            "",
            "teacher",
            "active"
          );
          if (res.status == "Alhamdulillah") {
            mytoast.success("Signup has been done");
            setUserID(res.data.userName);
          }
        } else {
          setShouldRefresh(true);
        }
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
                <div
                  style={{
                    display: "flex",
                    justifyContent: "space-between",
                    gap: "20px",
                  }}
                  className="form-group"
                >
                  <div>
                    <label>First Name:</label>
                    <input
                      ref={firstNameref}
                      className="au-input au-input--full"
                      type="text"
                      name="firstNameref"
                      placeholder="Enter First Name"
                      autoComplete="off"
                      pattern="^[a-zA-Z_ ]*$"
                    ></input>
                  </div>
                  <div>
                    <label>Last Name:</label>
                    <input
                      ref={lastNameref}
                      className="au-input au-input--full"
                      type="text"
                      name="lastNameref"
                      placeholder="Enter Last Name"
                      autoComplete="off"
                      pattern="^[a-zA-Z_ ]*$"
                    ></input>
                  </div>
                </div>
                <div className="form-group">
                  <label>Teacher Email Address: </label>
                  <input
                    ref={emailref}
                    className="au-input au-input--full"
                    type="email"
                    name="emailref"
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
                    name="mobilenoref"
                    placeholder="Enter Phone Number"
                    autoComplete="off"
                    pattern="^\+[1-9]{1}[0-9]{3,12}$"
                  ></input>
                </div>
                <div className="form-group">
                  <label for="selectOption">Select Course:</label>
                  <select
                    style={{
                      height: "45px",
                    }}
                    className="au-input au-input--full"
                    ref={courseref}
                    id="selectOption"
                    name="selectOption"
                  >
                    <option value="">Select an option</option>
                    <option value="alemalema">Alem Alema</option>
                    <option value="farzeayinmaktab">Farz-e-ayin-maktab</option>
                    <option value="farzeayinnazera">Farz-e-ayin-nazera</option>
                    <option value="shishumaktab">Shishu Maktab</option>
                    <option value="shishunazera">Shishu Nazera</option>
                    <option value="hifqulquran">Hifzul Quran</option>
                    <option value="urdu">Urdu</option>
                    <option value="nahusorofezra">Nahu sorof Ezra</option>
                  </select>
                </div>
                <div className="form-group">
                  <label>Password: </label>
                  <input
                    ref={passwordRef}
                    className="au-input au-input--full"
                    type="password"
                    name="passwordRef"
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
      {userID ? (
        <div style={{ marginTop: "50px", width: "50%", margin: "auto" }}>
          <h1
            style={{ fontSize: "24px", textAlign: "center", fontWeight: "900" }}
          >
            This is your User ID: <span style={{ color: "red" }}>{userID}</span>
            <br />
            Copy it on a safe place. You will need this later
          </h1>
        </div>
      ) : (
        <div></div>
      )}
    </div>
  );
}

export default GuestPage;
