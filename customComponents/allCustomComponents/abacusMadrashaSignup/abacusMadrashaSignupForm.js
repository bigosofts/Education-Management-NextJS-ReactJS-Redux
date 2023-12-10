"use client";

import "./signuppage.css";
import mytoast from "@/components/toast/toast";
import { useState } from "react";
import { useRouter } from "next/navigation";
import {
  createData,
  selectAllData,
} from "@/apiservices/allAbacusApiServices/madrashaAbacusApiServices";

function AbacusMadrashaSignupForm(props) {
  const [abacusID, setAbacusID] = useState("");
  const router = useRouter();
  const [formData, setFormData] = useState({
    madrashaName: "",
    madrashaAbacusPass: "",
    directorName: "",
    directorPhone: "",
    responsiblePerson: "",
    responsiblePersonMobile: "",
    madrashaAddress: "",
    madrashaEmail: "",
    agree: false,
  });

  const handleChange = (event) => {
    const { name, value, type, checked } = event.target;
    const fieldValue = type === "checkbox" ? checked : value;

    setFormData({
      ...formData,
      [name]: fieldValue,
    });
  };
  const handleSubmit = async (event) => {
    event.preventDefault();
    if (formData.agree === true) {
      const res1 = await selectAllData({
        madrashaEmail: formData.madrashaEmail,
      });
      if (res1.data.length >= 1) {
        mytoast.warning("The email is already been used. Try another");
      } else {
        const res = await createData({
          madrashaName: formData.madrashaName,
          madrashaAbacusPass: formData.madrashaAbacusPass,
          directorName: formData.directorName,
          directorPhone: formData.directorPhone,
          responsiblePerson: formData.responsiblePerson,
          responsiblePersonMobile: formData.responsiblePersonMobile,
          madrashaAddress: formData.madrashaAddress,
          madrashaEmail: formData.madrashaEmail,
        });
        console.log(res);

        if (res.status == "Alhamdulillah") {
          mytoast.success("Registration has been Successful");
          setAbacusID(res.data.madrashaAbacusID);
        } else {
          mytoast.warning(
            "Something Went Wrong. Check the field and Try Again"
          );
        }
      }
    } else {
      mytoast.danger("You need to Agree the terms and Conditions");
    }
  };
  const clickHandlerSignin = (e) => {
    e.preventDefault();
    router.push("/dashboard/login");
  };
  return (
    <div className="page-wrapper">
      <div className="container-loginpage container-abacus-madrasha">
        <div className="login-wrap login-wrap-abacus-madrasha">
          <div className="login-content">
            <div className="login-logo">
              <a href="#">
                <img src="/logo.png" alt="CoolAdmin"></img>
              </a>
            </div>
            <div className="login-form">
              <form onSubmit={handleSubmit}>
                <div className="flex-form-abacus">
                  <div className="flex-item-abacus-madrasha">
                    <div className="form-group">
                      <label>Madrasha Name:</label>
                      <input
                        className="au-input au-input--full"
                        type="text"
                        name="madrashaName"
                        placeholder="Enter Madrasha name"
                        value={formData.madrashaName}
                        onChange={handleChange}
                      />
                    </div>
                    <div className="form-group">
                      <label>Madrasha Director Name:</label>
                      <input
                        className="au-input au-input--full"
                        type="text"
                        name="directorName"
                        placeholder="Enter Madrasha Director name"
                        value={formData.directorName}
                        onChange={handleChange}
                      />
                    </div>
                    <div className="form-group">
                      <label>Madrasha Director Phone:</label>
                      <input
                        className="au-input au-input--full"
                        type="text"
                        name="directorPhone"
                        placeholder="Enter Madrasha Director Phone Number"
                        value={formData.directorPhone}
                        onChange={handleChange}
                      />
                    </div>
                    <div className="form-group">
                      <label>Representative Name:</label>
                      <input
                        className="au-input au-input--full"
                        type="text"
                        name="responsiblePerson"
                        placeholder="Enter Madrasha responsible Person"
                        value={formData.responsiblePerson}
                        onChange={handleChange}
                      />
                    </div>
                  </div>
                  <div className="flex-item-abacus-madrasha">
                    <div className="form-group">
                      <label>Representative Phone:</label>
                      <input
                        className="au-input au-input--full"
                        type="text"
                        name="responsiblePersonMobile"
                        placeholder="Enter Madrasha responsible Person Mobile Number"
                        value={formData.responsiblePersonMobile}
                        onChange={handleChange}
                      />
                    </div>
                    <div className="form-group">
                      <label>Madrasha Full Address:</label>
                      <input
                        className="au-input au-input--full"
                        type="text"
                        name="madrashaAddress"
                        placeholder="Enter Madrasha full Address"
                        value={formData.madrashaAddress}
                        onChange={handleChange}
                      />
                    </div>
                    <div className="form-group">
                      <label>Madrasha Email Address:</label>
                      <input
                        className="au-input au-input--full"
                        type="email"
                        name="madrashaEmail"
                        placeholder="Enter Madrasha Email Address"
                        value={formData.madrashaEmail}
                        onChange={handleChange}
                      />
                    </div>
                    <div className="form-group">
                      <label>Password</label>
                      <input
                        className="au-input au-input--full"
                        type="password"
                        name="madrashaAbacusPass"
                        placeholder="Enter the Password"
                        value={formData.madrashaAbacusPass}
                        onChange={handleChange}
                      />
                    </div>
                  </div>
                </div>

                <div className="login-checkbox">
                  <label>
                    <input
                      type="checkbox"
                      name="agree"
                      checked={formData.agree}
                      onChange={handleChange}
                    />
                    Agree the terms and policy
                  </label>
                </div>
                <button
                  className="au-btn au-btn--block au-btn--green m-b-20"
                  type="submit"
                >
                  Sign Up
                </button>
              </form>
              <div className="register-link">
                <p>
                  Already have account?
                  <a style={{ cursor: "pointer" }} onClick={clickHandlerSignin}>
                    Sign In
                  </a>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      {abacusID ? (
        <div style={{ marginTop: "50px", width: "50%", margin: "auto" }}>
          <h1
            style={{ fontSize: "24px", textAlign: "center", fontWeight: "900" }}
          >
            This is your Abacus ID:{" "}
            <span style={{ color: "red" }}>{abacusID}</span>
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

export default AbacusMadrashaSignupForm;
