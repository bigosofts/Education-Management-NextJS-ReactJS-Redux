"use client";

import {
  selectDataTwo,
  updateData,
  createData,
} from "@/apiservices/otpapiservices";

import mytoast from "@/components/toast/toast";
import { sendMail } from "@/apiservices/sendMailapiservices";

export function checkandSendOTP(email) {
  const hardRefresh = (link) => {
    if (typeof window !== "undefined") {
      window.location.href = link;
    }
  };

  let OTP = Math.floor(100000 + Math.random() * 900000);

  async function sendOTP(emailAdd) {
    const subject = "Recover SID and Password";
    const text = `আপনার OTP হলোঃ ${OTP}। অথবা আপনার OTP ভেরিফাই করার জন্য এই লিংকে ক্লিক করুন অথবা লিংকটি কপি করে যেকোন ব্রাউজারে ওপেন করুন। https://www.internetmadrasa.com/verifyOTP?email=${emailAdd}&otp=${OTP}`;

    const html = `<h1>আপনার OTP হলোঃ <span style="color:red">${OTP}</span></h1> <br/><br/> <h1>অথবা আপনার OTP ভেরিফাই করার জন্য এই লিংকে ক্লিক করুন অথবা লিংকটি কপি করে যেকোনো ব্রাউজারে ওপেন করুন।</h1> <br/><br/> <a href="https://www.internetmadrasa.com/verifyOTP?email=${emailAdd}&otp=${OTP}">https://www.internetmadrasa.com/verifyOTP?email=${emailAdd}&otp=${OTP}</a>`;

    const res = await sendMail(emailAdd, subject, text, html);
    if (res.status == "Alhamdulillah") {
      return res;
    } else {
      console.log(res);
    }
  }

  async function getData() {
    const res = await selectDataTwo({ email: email }, null);
    if (res.status == "Alhamdulillah") {
      if (res.data.length == 0) {
        async function createOTPData() {
          const res2 = await createData({
            email: email,
            otp: OTP,
            status: "active",
          });
          if (res2.status == "Alhamdulillah") {
            const res5 = await sendOTP(email);
            if ((res5.status = "Alhamdulillah")) {
              mytoast.success(
                "A verification code has been sent to your Email Address"
              );
              setTimeout(() => {
                hardRefresh(`/verifyOTP?email=${email}`);
              }, 1000);
            }
          }
        }
        createOTPData();
      } else if (res.data.length > 0) {
        if (res.data[0].email == email && res.data[0].status == "active") {
          const res3 = await updateData({
            email: email,
            otp: OTP,
            status: "active",
            idValue: res.data[0]._id,
          });

          if (res3.status == "Alhamdulillah") {
            const res5 = await sendOTP(email);
            if ((res5.status = "Alhamdulillah")) {
              mytoast.success(
                "A verification code has been sent to your Email Address"
              );
              setTimeout(() => {
                hardRefresh(`/verifyOTP?email=${email}`);
              }, 1000);
            }
          }
        } else if (
          res.data[0].email == email &&
          res.data[0].status == "inactive"
        ) {
          async function updateOTPData() {
            const res3 = await updateData({
              email: email,
              otp: OTP,
              status: "active",
              idValue: res.data[0]._id,
            });
            if (res3.status == "Alhamdulillah") {
              const res5 = await sendOTP(email);
              if ((res5.status = "Alhamdulillah")) {
                mytoast.success(
                  "A verification code has been sent to your Email Address"
                );
                setTimeout(() => {
                  hardRefresh(`/verifyOTP?email=${email}`);
                }, 1000);
              }
            }
          }
          updateOTPData();
        }
      }
    }
  }
  getData();
}
