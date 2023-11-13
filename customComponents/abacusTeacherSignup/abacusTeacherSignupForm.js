"use client";
import { useRouter } from "next/navigation";
import "./signuppage.css";

function AbacusTeacherSignupForm(props) {
    const router = useRouter();
    const clickHandlerSignin = (e)=>{
        e.preventDefault();
        router.push("/dashboard/login");
    }
    return (
        <div className="page-wrapper">
            <div className="page-content--bge5">
                <div className="container-loginpage">
                    <div className="login-wrap">
                        <div className="login-content">
                            <div className="login-logo">
                                <a href="#">
                                    <img src="/logo.png" alt="CoolAdmin"></img>
                                </a>
                            </div>
                            <div className="login-form">
                                <form action="" method="post">
                                    <div className="form-group">
                                        <label>Email Address</label>
                                        <input className="au-input au-input--full" type="email" name="email" placeholder="Email"></input>
                                    </div>
                                    <div className="form-group">
                                        <label>Password</label>
                                        <input className="au-input au-input--full" type="password" name="password" placeholder="Password"></input>
                                    </div>
                                    <div className="form-group">
                                        <label>Mobile Number</label>
                                        <input className="au-input au-input--full" type="number" name="password" placeholder="Mobile Number"></input>
                                    </div>
                                    <div className="login-checkbox">
                                        <label>
                                            <input type="checkbox" name="aggree"></input>
                                            Agree the terms and policy
                                        </label>
                                    </div>
                                    <button className="au-btn au-btn--block au-btn--green m-b-20" type="submit">Sign Up</button>
                                    {/* <div className="social-login-content">
                                        <div className="social-button">
                                            <button className="au-btn au-btn--block au-btn--red m-b-20">register with Goole</button>
                                        </div>
                                    </div> */}
                                </form>
                                <div className="register-link">
                                    <p>
                                        Already have account?
                                        <a style={{cursor:"pointer"}} onClick={clickHandlerSignin}>Sign In</a>
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default AbacusTeacherSignupForm;