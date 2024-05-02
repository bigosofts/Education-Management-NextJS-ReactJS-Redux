"use client";
import { useState, useRef, useEffect } from "react";
import { createData as createStudent } from "@/apiservices/studentapiservices";
import { createData as createTeacher } from "@/apiservices/teacherapiservices";
import mytoast from "../toast/toast";
import { teacherLogin, studentLogin } from "@/apiservices/checklogin";
import { isAdmin } from "@/apiservices/checklogin";
import { setToken } from "@/helper/sessionHelper";
import { useRouter, useSearchParams } from "next/navigation";
import { IoIosArrowDroprightCircle } from "react-icons/io";
import { sendMail } from "@/apiservices/sendMailapiservices";

import "./loginDesign.css";
function LoginPageDesign({ userData }) {
  const [Admin, setIsAdmin] = useState();
  const [data, setDatas] = useState();
  const searchParams = useSearchParams();
  const code = searchParams.get("code");
  const [signupState, setSignupState] = useState();
  const [signupAbacusState, setSignupAbacusState] = useState();

  const [buttonState, setButtonState] = useState(false);
  const [switchState, setSwitchState] = useState(true);

  const router = useRouter();

  useEffect(() => {
    async function getData() {
      const res = await isAdmin();
      setIsAdmin(res);
    }
    getData();

    if (code) {
      setSignupState(true);
      setButtonState(true);
      setSwitchState(false);
    }
  }, []);

  function addUser(e) {
    e.preventDefault();
    function checkEmail(
      firstName,
      lastname,
      studentRole,
      email,
      mobile,
      password
    ) {
      const haveEmail = userData.some((item) => item.emailAddress == email);
      const haveMobile = userData.some((item) => item.mobileNumber == mobile);
      if (haveEmail) {
        mytoast.info(
          "আপনার ইমেইলে একটি একাউন্ট আগে থেকেই আছে, দয়া করে অন্য ইমেইল ব্যাবহার করুন"
        );
      } else if (haveMobile) {
        mytoast.info(
          "আপনার মোবাইল নাম্বারটি দিয়ে একটি একাউন্ট আগে থেকেই আছে, দয়া করে অন্য মোবাইল নাম্বার ব্যাবহার করুন"
        );
      } else {
        if (studentRole == "teacher") {
          async function setData() {
            mytoast.danger("এই মুহুর্তে শিক্ষক একাউন্ট আবেদন নেয়া হচ্ছে না");
            // const res = await createTeacher(
            //   firstName,
            //   "",
            //   lastname,
            //   "",
            //   "",
            //   "",
            //   "",
            //   "",
            //   email,
            //   password,
            //   mobile,
            //   [],
            //   [],
            //   "",
            //   "",
            //   "",
            //   "",
            //   "",
            //   "",
            //   "teacher",
            //   "active",
            //   "",
            //   `${userData.length + 1}`,
            //   { status: "ok" }
            // );
            // if (res.status == "Alhamdulillah") {
            //   userData.push({
            //     emailAddress: email,
            //     mobileNumber: mobile,
            //   });
            //   setDatas(res.data.userName);
            //   mytoast.success(
            //     "আলহামদুলিল্লাহ, আপনার শিক্ষক/শিক্ষিকা একাউন্ট তৈরী হয়ে গেছে"
            //   );

            //   //login logic
            //   if (Admin) {
            //     if (Admin.status == "noToken") {
            //       const res3 = await teacherLogin(res.data.userName, password);

            //       if (res3.status == "Alhamdulillah") {
            //         setToken("access_token", res3.token);

            //         mytoast.success(
            //           "আলহামদুলিল্লাহ, আপনি সফলভাবে একাউন্টটি তৈরী করেছেন"
            //         );

            //         const hardRefresh = () => {
            //           if (typeof window !== "undefined") {
            //             window.location.href = `/dashboard/${res.data.userName}`;
            //           }
            //         };
            //         hardRefresh();
            //       } else if (res3.status == "wrongpass") {
            //         mytoast.danger("আপনার পাসওয়ার্ড অথবা ইউজার আইডি ভুল হয়েছে");
            //       } else if (res3.status == "nouser") {
            //         router.push("/signup");
            //       }
            //     } else if (Admin.status == "UnauthorizedAccess") {
            //       console.log("Unauthorized access");
            //     } else {
            //       const hardRefresh = () => {
            //         if (typeof window !== "undefined") {
            //           window.location.href = `/dashboard/${res.data.userName}`;
            //         }
            //       };
            //       hardRefresh();
            //     }
            //   }
            //   //end login logic
            // } else {
            //   console.log(res);
            // }
          }
          setData();
        } else if (studentRole == "student") {
          async function setData2() {
            const res2 = await createStudent({
              firstNameen: firstName,
              firstNamebn: "",
              lastNameen: lastname,
              lastNamebn: "",
              nidNumber: "",
              birthRegNumber: "",
              fatherNameen: "",
              fatherNamebn: "",
              emailAddress: email,
              password,
              mobileNumber: mobile,
              occupation: "",
              studentCourseCode: [],
              studentJamatCode: [],
              gender: "",
              dateOfBirth: "",
              countryName: "",
              fullPresentAddress: "",
              fullPermanentAddress: "",
              admissionSession: "",
              studentMotive: "",
              paymentStatus: {
                addmissionDueStatus: true,
                consequentDueStatus: false,
                paymentID: "",
              },
              extracurricular: "",
              details: { status: "ok" },
              activeStatus: "active",
              userRole: "student",
              userName: `${userData.length + 1}`,
              studentDepartment: [],
              studentSemester: [],
            });
            if (res2.status == "Alhamdulillah") {
              userData.push({
                emailAddress: email,
                mobileNumber: mobile,
              });
              setDatas(res2.data.userName);
              mytoast.success("আপনার স্টুডেন্ট একাউন্টটি সফলভাবে তৈরী হয়েছে");

              sendMail(
                email,
                "Student Account has been Created",
                `সুপ্রিয় শিক্ষার্থী ${firstName} ${lastname}, আলহামদুলিল্লাহ, আপনার একাউন্টটি খোলা হয়েছে, অনুগ্রহপূর্বক ড্যাশবোর্ডে ঢুকে যেকোনো একটি ক্লাসে পেমেন্ট সম্পন্ন করুন। আপনার একাউন্ট ${res2.data.userName} টি দিয়ে যেকোনো ক্লাসে ভর্তি পেমেন্ট দিলে আরেকটি কনফার্মেশন মেইল দেয়া হবে ইং শা আল্লাহ`,
                `<h1>সুপ্রিয় শিক্ষার্থী ${firstName} ${lastname},<br/><br/> আলহামদুলিল্লাহ, আপনার একাউন্টটি খোলা হয়েছে, অনুগ্রহপূর্বক ড্যাশবোর্ডে ঢুকে যেকোনো একটি ক্লাসে পেমেন্ট সম্পন্ন করুন। আপনার একাউন্ট ${res2.data.userName} টি দিয়ে যেকোনো ক্লাসে ভর্তি পেমেন্ট দিলে আরেকটি কনফার্মেশন মেইল দেয়া হবে ইং শা আল্লাহ</h1>`
              );

              if (typeof fbq === "function") {
                fbq("track", "CompleteRegistration");
              }

              if (code) {
                if (typeof fbq === "function") {
                  fbq("trackCustom", `CompleteRegistration-${code}`);
                }
              }

              //login logic
              if (Admin) {
                if (Admin.status == "noToken") {
                  const res5 = await studentLogin(res2.data.userName, password);
                  if (res5.status == "Alhamdulillah") {
                    setToken("access_token", res5.token);

                    mytoast.success("আলহামদুলিলাহ, আপনি সফলভাবে লগিন করেছেন");
                    const hardRefresh = () => {
                      if (typeof window !== "undefined") {
                        if (code) {
                          window.location.href = `/dashboard/${res2.data.userName}/settings/profile-update?code=${code}`;
                        } else {
                          window.location.href = `/dashboard/${res2.data.userName}/settings/profile-update`;
                        }
                      }
                    };
                    hardRefresh();
                  } else if (res5.status == "wrongpass") {
                    mytoast.danger("you entered wrong combination");
                  } else if (res5.status == "nouser") {
                    mytoast.danger(
                      "There is no account with this SID. Please check your SID"
                    );
                  }
                } else if (Admin.status == "UnauthorizedAccess") {
                  console.log("Unauthorized access");
                } else {
                  const hardRefresh = () => {
                    if (typeof window !== "undefined") {
                      window.location.href = `/dashboard/${res2.data.userName}/settings/profile-update?code=${code}`;
                    }
                  };
                  hardRefresh();
                }
              }
              //end login logic
            } else {
              console.log(res2);
            }
          }
          setData2();
        }
      }
    }
    function AddReaction(
      firstName,
      lastname,
      studentRole,
      email,
      mobile,
      password
    ) {
      let patternName = /^[a-zA-Z_ ]*$/;
      let patternEmail = /[^@]+@[^@]+\.[a-zA-Z]{2,6}/;
      let patternMobile = /^\+\d+$/;
      if (!patternName.test(firstName)) {
        mytoast.info(
          "নামের প্রথম অংশ ভুল হয়েছে, শুধুই ইংরেজী বর্ণমালা ব্যাবহার করুন"
        );
      } else if (!patternName.test(lastname)) {
        mytoast.info(
          "নামের দ্বিতীয় অংশ ভুল হয়েছে, শুধুই ইংরেজী বর্ণমালা ব্যাবহার করুন"
        );
      } else if (!patternEmail.test(email)) {
        mytoast.info("ইমেইল ফরম্যাটটি সঠিক হয় নি");
      } else if (!patternMobile.test(mobile)) {
        mytoast.info("মোবাইলের ফরম্যাটটি সঠিক হয় নি");
      } else {
        checkEmail(firstName, lastname, studentRole, email, mobile, password);
      }
    }

    if (!firstNameref.current.value) {
      mytoast.info("নামের প্রথম অংশ অবশ্যই ফিলাপ করতে হবে");
    } else if (!lastNameref.current.value) {
      mytoast.info("নামের ্দ্বিতীয় অংশ অবশ্যই ফিলাপ করতে হবে");
    } else if (!emailIdref.current.value) {
      mytoast.info("ইমেইল আইডি অবশ্যই ফিলাপ করতে হবে");
    } else if (!mobileNoref.current.value) {
      mytoast.info("মোবাইল নাম্বার অবশ্যই ফিলাপ করতে হবে");
    } else if (!passwordref.current.value) {
      mytoast.info("পাসওয়ার্ড অবশ্যই ফিলাপ করতে হবে");
    } else {
      AddReaction(
        firstNameref.current.value,
        lastNameref.current.value,
        "student",
        emailIdref.current.value,
        mobileNoref.current.value,
        passwordref.current.value
      );
    }
  }

  function decision1() {
    setSignupState(true);
    setSignupAbacusState(false);
    setSwitchState(false);
    setButtonState(true);
  }

  function decision2() {
    setSignupAbacusState(true);
    setSignupState(false);
    setSwitchState(false);
    setButtonState(true);
  }

  const firstNameref = useRef();
  const lastNameref = useRef();
  const emailIdref = useRef();
  const passwordref = useRef();
  const mobileNoref = useRef();

  return (
    <>
      {switchState && (
        <div className="bg-slate-100 signup-switch">
          <div
            className={
              buttonState
                ? `flex-row md:flex w-10/12 md:w-6/12 mx-auto gap-10 justify-center items-center py-5`
                : `flex-row md:flex w-10/12 md:w-6/12 mx-auto gap-10 justify-center items-center py-20 h-[80vh]`
            }
          >
            <div
              className="hover:bg-lime-800 bg-lime-300 p-2 py-5 md:p-10 text-lg md:text-2xl shadow-lg hover:cursor-pointer w-full mt-5 rounded-3xl text-center flex justify-center items-center hover:scale-110 transition ease-out duration-500 hover:shadow-2xl hover:text-white"
              onClick={decision1}
            >
              <p>Student Registration</p>
            </div>
            <div
              className="hover:bg-orange-800 bg-orange-300 p-2 py-5 md:p-10 text-lg md:text-2xl shadow-lg hover:cursor-pointer w-full mt-5 rounded-3xl text-center flex justify-center items-center hover:scale-110 transition ease-out duration-500 hover:shadow-2xl hover:text-white"
              onClick={decision2}
            >
              <p>Abacus Institution Registration</p>
            </div>
          </div>
        </div>
      )}

      {signupState && (
        <section className="pt-10 pb-10" style={{ backgroundColor: "#fff" }}>
          <div className="box-border flex flex-col justify-center w-full md:w-1/2 m-auto border-[0px] md:border-[1px] border-slate-400 rounded-3xl md:flex-row shadow-none md:shadow-xl">
            <div className="bg-[url('/images/signup-image.png')] w-full rounded-2xl image-div"></div>
            <div className="w-full">
              <h1 className="text-2xl text-slate-950 mt-5 mb-5 text-center">
                স্টুডেন্ট সাইন আপ ফর্ম
              </h1>
              <form className="w-full p-5">
                <label
                  className="block mb-2 text-lg text-slate-600"
                  htmlFor="firstName"
                >
                  নামের প্রথম অংশ ইংরেজীতে লিখুনঃ
                </label>
                <input
                  className="block w-full p-2 border-[1px] border-slate-300 rounded-3xl text-lg mb-4"
                  type="text"
                  placeholder="নামের প্রথম অংশ লিখুন"
                  name="firstName"
                  id="firstName"
                  ref={firstNameref}
                ></input>

                <label
                  className="block mb-2 text-lg text-slate-600"
                  htmlFor="lastName"
                >
                  নামের দ্বিতীয় অংশ ইংরেজীতে লিখুনঃ
                </label>
                <input
                  className="block w-full p-2 border-[1px] border-slate-300 rounded-3xl text-lg mb-4"
                  type="text"
                  placeholder="নামের দ্বিতীয় অংশ লিখুন"
                  name="lastName"
                  id="lastName"
                  ref={lastNameref}
                ></input>

                <label
                  className="block mb-2 text-lg text-slate-600"
                  htmlFor="email"
                >
                  ইমেইল আইডি লিখুনঃ
                </label>
                <input
                  className="block w-full p-2 border-[1px] border-slate-300 rounded-3xl text-lg mb-4"
                  type="email"
                  placeholder="ইমেইল আইডি লিখুন"
                  name="email"
                  id="email"
                  ref={emailIdref}
                ></input>
                <label
                  className="block mb-2 text-lg text-slate-600"
                  htmlFor="email"
                >
                  আপনার টেলিগ্রাম মোবাইল নাম্বারটি এভাবে লিখুন (+8801756668432)।
                  প্লাস সাইন + আপনি যে দেশে আছেন সেই দেশের কান্ট্রিকোড +
                  নাম্বারের বাকি ডিজিট লিখুন। (ক্ল্যাসের জন্য টেলিগ্রাম নাম্বার
                  থাকা বাধ্যতামূলক)
                </label>
                <input
                  className="block w-full p-2 border-[1px] border-slate-300 rounded-3xl text-lg mb-4"
                  type="tel"
                  placeholder="+8801710000000"
                  name="mobile"
                  id="mobile"
                  ref={mobileNoref}
                ></input>

                <label
                  className="block mb-2 text-lg text-slate-600"
                  htmlFor="password"
                >
                  পছন্দমত একটি পাসওয়ার্ড দিনঃ
                </label>
                <input
                  className="block w-full p-2 border-[1px] border-slate-300 rounded-3xl text-lg mb-4"
                  type="password"
                  placeholder="পাসওয়ার্ড দিন"
                  name="password"
                  ref={passwordref}
                ></input>

                <button
                  onClick={addUser}
                  className="bg-blue-500 text-white text-lg font-bold mt-6 rounded-3xl w-full overflow-hidden"
                >
                  {code ? (
                    <p className="flex justify-between">
                      <span className="bg-pink-500 w-1/3 py-2 px-2">
                        (ধাপ ১/৩)
                      </span>{" "}
                      <span className="w-2/3 py-2 px-2 relative">
                        পরের ধাপে যান{" "}
                        <span className="absolute right-1 top-2">
                          <IoIosArrowDroprightCircle className="text-3xl" />
                        </span>
                      </span>
                    </p>
                  ) : (
                    <div className="p-5">একাউন্ট তৈরী করুন</div>
                  )}
                </button>
              </form>
            </div>
          </div>

          <h1 className=" w-full md:w-1/2 m-auto text-2xl p-5 mt-10 mb-5 text-center text-rose-600">
            {data ? `আপনার আইডিঃ ${data}` : ""}
          </h1>
          <h2 className="px-5 w-full md:w-1/2 m-auto text-2xl text-slate-950 mb-5 text-center">
            {data
              ? `আসসালামু আলাইকুম। আইডিটি সংরক্ষণ করুন। পরবর্তীতে সাইন ইন করতে আপনার আইডিটি প্রয়োজন হবে।`
              : ""}
          </h2>
        </section>
      )}
      {signupAbacusState && (
        <section className="pt-10 pb-10" style={{ backgroundColor: "#fff" }}>
          <div className="box-border flex flex-col justify-center w-full md:w-1/2 m-auto border-[0px] md:border-[1px] border-slate-400 rounded-3xl md:flex-row shadow-none md:shadow-xl">
            <div className="w-full">
              <h1 className="text-2xl text-slate-950 mt-5 mb-5 text-center">
                আব্যাকাস ইন্সটিটিউশন সাইন আপ ফর্ম
              </h1>
              <form className="w-full p-5">
                <label
                  className="block mb-2 text-lg text-slate-600"
                  htmlFor="firstName"
                >
                  ইন্সটিটিউশনের নাম
                </label>
                <input
                  className="block w-full p-2 border-[1px] border-slate-300 rounded-3xl text-lg mb-4"
                  type="text"
                  placeholder="নামের প্রথম অংশ লিখুন"
                  name="firstName"
                  id="firstName"
                  ref={firstNameref}
                ></input>

                <label
                  className="block mb-2 text-lg text-slate-600"
                  htmlFor="lastName"
                >
                  নামের দ্বিতীয় অংশ ইংরেজীতে লিখুনঃ
                </label>
                <input
                  className="block w-full p-2 border-[1px] border-slate-300 rounded-3xl text-lg mb-4"
                  type="text"
                  placeholder="নামের দ্বিতীয় অংশ লিখুন"
                  name="lastName"
                  id="lastName"
                  ref={lastNameref}
                ></input>

                <label
                  className="block mb-2 text-lg text-slate-600"
                  htmlFor="email"
                >
                  ইমেইল আইডি লিখুনঃ
                </label>
                <input
                  className="block w-full p-2 border-[1px] border-slate-300 rounded-3xl text-lg mb-4"
                  type="email"
                  placeholder="ইমেইল আইডি লিখুন"
                  name="email"
                  id="email"
                  ref={emailIdref}
                ></input>
                <label
                  className="block mb-2 text-lg text-slate-600"
                  htmlFor="email"
                >
                  আপনার টেলিগ্রাম মোবাইল নাম্বারটি এভাবে লিখুন (+8801756668432)।
                  প্লাস সাইন + আপনি যে দেশে আছেন সেই দেশের কান্ট্রিকোড +
                  নাম্বারের বাকি ডিজিট লিখুন। (ক্ল্যাসের জন্য টেলিগ্রাম নাম্বার
                  থাকা বাধ্যতামূলক)
                </label>
                <input
                  className="block w-full p-2 border-[1px] border-slate-300 rounded-3xl text-lg mb-4"
                  type="tel"
                  placeholder="+8801710000000"
                  name="mobile"
                  id="mobile"
                  ref={mobileNoref}
                ></input>

                <label
                  className="block mb-2 text-lg text-slate-600"
                  htmlFor="password"
                >
                  পছন্দমত একটি পাসওয়ার্ড দিনঃ
                </label>
                <input
                  className="block w-full p-2 border-[1px] border-slate-300 rounded-3xl text-lg mb-4"
                  type="password"
                  placeholder="পাসওয়ার্ড দিন"
                  name="password"
                  ref={passwordref}
                ></input>

                <button
                  onClick={addUser}
                  className="bg-blue-500 text-white text-lg font-bold mt-6 rounded-3xl w-full overflow-hidden"
                >
                  {code ? (
                    <p className="flex justify-between">
                      <span className="bg-pink-500 w-1/3 py-2 px-2">
                        (ধাপ ১/৩)
                      </span>{" "}
                      <span className="w-2/3 py-2 px-2 relative">
                        পরের ধাপে যান{" "}
                        <span className="absolute right-1 top-2">
                          <IoIosArrowDroprightCircle className="text-3xl" />
                        </span>
                      </span>
                    </p>
                  ) : (
                    <div className="p-5">একাউন্ট তৈরী করুন</div>
                  )}
                </button>
              </form>
            </div>
          </div>

          <h1 className=" w-full md:w-1/2 m-auto text-2xl p-5 mt-10 mb-5 text-center text-rose-600">
            {data ? `আপনার আইডিঃ ${data}` : ""}
          </h1>
          <h2 className="px-5 w-full md:w-1/2 m-auto text-2xl text-slate-950 mb-5 text-center">
            {data
              ? `আসসালামু আলাইকুম। আইডিটি সংরক্ষণ করুন। পরবর্তীতে সাইন ইন করতে আপনার আইডিটি প্রয়োজন হবে।`
              : ""}
          </h2>
        </section>
      )}
    </>
  );
}

export default LoginPageDesign;
