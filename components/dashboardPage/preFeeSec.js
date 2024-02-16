"use client";
import { useState, useEffect } from "react";
import Image from "next/image";
import { selectDataTwo } from "@/apiservices/courseapiservices";
import { selectDataTwo as selectDepartment } from "@/apiservices/departmentapiservices";
import { selectDataTwo as seletcJamat } from "@/apiservices/jamatapiservices";
import { selectDataTwo as selectSemester } from "@/apiservices/semesterapiservices";
import ShowPaymentDetails from "./showpaymentDetail";
import { useSearchParams } from "next/navigation";

import { createData } from "@/apiservices/paymentapiservices";
import { updateData } from "@/apiservices/studentapiservices";
import mytoast from "../toast/toast";
import { logout } from "@/apiservices/checklogin";
import { removeToken } from "@/helper/sessionHelper";

function PreFeeSection({ profile }) {
  const searchParams = useSearchParams();

  const enroll = searchParams.get("enroll");
  const [money, setMoney] = useState();
  const [course, setCourse] = useState();
  const [department, setDepartment] = useState();
  const [jamat, setJamat] = useState();
  const [semester, setSemester] = useState();

  const [extraJamat, setExtraJamat] = useState(false);
  const [extraSemester, setExtraSemester] = useState(false);
  const [extraTransaction, setExtraTransaction] = useState(false);
  const [showPayment, setShowPayment] = useState(false);
  const [currencyrate, setCurrencyrate] = useState();

  const [mainData, setMainData] = useState({
    currency: "",
    course: "",
    department: "",
    semester: "",
    jamat: "",
    amountPaid: "",
    transactionID: "",
    accountNo: "",
    paymentWay: "",
  });

  function transactionDecision(e) {
    e.preventDefault();
    const transactionID = e.target.value;
    setMainData((prev) => ({
      ...prev,
      transactionID: transactionID,
    }));
  }

  function paymentWayDecision(e) {
    e.preventDefault();
    const paymentWay = e.target.value;
    setMainData((prev) => ({
      ...prev,
      paymentWay: paymentWay,
    }));
    if (paymentWay == "none") {
      setShowPayment(false);
    } else {
      setShowPayment(true);
    }
  }

  function accountNoDecision(e) {
    e.preventDefault();
    const accountNo = e.target.value;
    setMainData((prev) => ({
      ...prev,
      accountNo: accountNo,
    }));
  }

  function amountPaidDecision(e) {
    e.preventDefault();
    const amountPaid = e.target.value;
    setMainData((prev) => ({
      ...prev,
      amountPaid: amountPaid,
    }));
  }

  function currencyDecision(e) {
    e.preventDefault();
    const currency = e.target.value;
    setMainData((prev) => ({
      ...prev,
      currency: currency,
    }));
  }

  function changeDepartment(name1) {
    if (name1 == "none") {
      return "";
    } else {
      const ID = department.filter((item) => {
        if (item.name == name1) {
          return item.ID;
        }
      });

      return ID[0].ID;
    }
  }

  function classDecision(e) {
    e.preventDefault();
    const classes = e.target.value;
    function PriceDecision(coursePriceData) {
      if (course) {
        if (
          profile.data.userDetails.countryName == "Bangladesh" ||
          profile.data.userDetails.countryName == "India"
        ) {
          if (coursePriceData) {
            let [dObj] = course.filter((item) => {
              if (item.code == coursePriceData) {
                return item.price;
              }
            });

            if (dObj) {
              if (currencyrate) {
                let tkC = dObj.price.registration.tk;
                let usC = Math.round(dObj.price.registration.tk / currencyrate);

                let mtkC = dObj.price.monthly.tk;
                let musC = Math.round(dObj.price.monthly.tk / currencyrate);
                setMoney({ tk: tkC, us: usC, mtk: mtkC, mus: musC });
              }
            }
          }
        } else {
          if (coursePriceData) {
            let [dObj] = course.filter((item) => {
              if (item.code == coursePriceData) {
                return item.price;
              }
            });

            if (dObj) {
              if (currencyrate) {
                let tkC = Math.round(dObj.price.registration.us * currencyrate);
                let usC = dObj.price.registration.us;
                let mtkC = Math.round(dObj.price.monthly.us * currencyrate);
                let musC = dObj.price.monthly.us;

                setMoney({ tk: tkC, us: usC, mtk: mtkC, mus: musC });
              }
            }
          }
        }
      }
    }
    PriceDecision(classes);

    setMainData((prev) => ({
      ...prev,
      course: classes,
      department: changeDepartment(classes),
    }));
    if (classes == "alemalema") {
      setExtraJamat(true);
      setExtraTransaction(false);
    } else if (classes == "none") {
      setExtraJamat(false);
      setMainData((prev) => ({
        ...prev,
        jamat: "none",
      }));
      setExtraSemester(false);
      setMainData((prev) => ({
        ...prev,
        semester: "none",
      }));
      setExtraTransaction(false);
    } else {
      setExtraTransaction(true);
      setExtraJamat(false);
      setExtraSemester(false);
    }
  }

  function jamatDecision(e) {
    e.preventDefault();
    const jamat = e.target.value;

    setMainData((prev) => ({
      ...prev,
      jamat: jamat,
    }));
    if (jamat !== "none") {
      setExtraSemester(true);
    } else {
      setExtraSemester(false);
      setMainData((prev) => ({
        ...prev,
        semester: "none",
      }));
      setExtraTransaction(false);
    }
  }

  function semseterDecision(e) {
    e.preventDefault();
    const semester = e.target.value;

    setMainData((prev) => ({
      ...prev,
      semester: semester,
    }));
    if (semester !== "none") {
      setExtraTransaction(true);
    } else {
      setExtraTransaction(false);
    }
  }

  useEffect(() => {
    async function getData() {
      const res = await selectDataTwo(null, null);
      const res2 = await selectDepartment(null, null);
      const res3 = await seletcJamat(null, null);
      const res4 = await selectSemester(null, null);
      const response = await fetch(
        "https://v6.exchangerate-api.com/v6/6beb79e3dfb29569d6a2ca2f/pair/USD/BDT"
      );
      const conversionRate = await response.json();

      const [course, department, jamat, semester, rate] = await Promise.all([
        res,
        res2,
        res3,
        res4,
        conversionRate,
      ]);

      if (
        course.status == "Alhamdulillah" &&
        department.status == "Alhamdulillah" &&
        jamat.status == "Alhamdulillah" &&
        semester.status == "Alhamdulillah" &&
        rate.result == "success"
      ) {
        setCourse(
          course.data.map((item) => {
            return {
              title: item.title.bn,
              code: item.courseCode,
              price: item.coursePrice,
            };
          })
        );
        setCurrencyrate(rate.conversion_rate);

        function changeDepartment(name1) {
          const ID = department.data.filter((item) => {
            if (item.departmentName == name1) {
              return item.departmentID;
            }
          });

          return ID[0].departmentID;
        }

        if (enroll) {
          setMainData((prev) => ({
            ...prev,
            course: enroll,
            department: changeDepartment(enroll),
          }));
          PriceDecision(enroll);
          if (enroll == "alemalema") {
            setExtraJamat(true);
          } else {
            setExtraTransaction(true);
          }
        }

        function PriceDecision(coursePriceData) {
          if (course) {
            if (
              profile.data.userDetails.countryName == "Bangladesh" ||
              profile.data.userDetails.countryName == "India"
            ) {
              if (coursePriceData) {
                let [dObj] = course.data.filter((item) => {
                  if (item.courseCode == coursePriceData) {
                    return item;
                  }
                });

                if (dObj) {
                  if (rate) {
                    let tkC = dObj.coursePrice.registration.tk;
                    let usC = Math.round(
                      dObj.coursePrice.registration.tk / rate.conversion_rate
                    );
                    let mtkC = dObj.coursePrice.monthly.tk;
                    let musC = Math.round(
                      dObj.coursePrice.monthly.tk / rate.conversion_rate
                    );

                    setMoney({ tk: tkC, us: usC, mtk: mtkC, mus: musC });
                  }
                }
              }
            } else {
              if (coursePriceData) {
                let [dObj] = course.data.filter((item) => {
                  if (item.courseCode == coursePriceData) {
                    return item;
                  }
                });

                if (dObj) {
                  if (rate) {
                    let tkC = Math.round(
                      dObj.coursePrice.registration.us * rate.conversion_rate
                    );

                    let usC = dObj.coursePrice.registration.us;
                    let mtkC = Math.round(
                      dObj.coursePrice.monthly.us * rate.conversion_rate
                    );

                    let musC = dObj.coursePrice.monthly.us;
                    setMoney({ tk: tkC, us: usC, mtk: mtkC, mus: musC });
                  }
                }
              }
            }
          }
        }

        setDepartment(
          department.data.map((item) => {
            return { ID: item.departmentID, name: item.departmentName };
          })
        );

        setJamat(
          jamat.data.map((item) => {
            return { ID: item.jamatID, name: item.jamatName };
          })
        );

        setSemester(
          semester.data.map((item) => {
            return { ID: item.semesterID, name: item.semesterName };
          })
        );
      }
    }
    getData();
  }, []);

  async function submitData(e) {
    e.preventDefault();
    let currentDate = new Date();
    let oneYearLater = new Date(currentDate);

    var currentMonth = currentDate.getMonth();
    var currentYear = currentDate.getFullYear();

    var nextMonth = currentMonth + 1;
    var nextYear = currentYear;
    if (nextMonth > 11) {
      nextMonth = 0; // January (0-indexed)
      nextYear++;
    }

    var oneMonthLater = new Date(
      nextYear,
      nextMonth,
      currentDate.getDate(),
      currentDate.getHours(),
      currentDate.getMinutes(),
      currentDate.getSeconds(),
      currentDate.getMilliseconds()
    );

    oneYearLater.setFullYear(currentDate.getFullYear() + 1);

    const resPayment = await createData({
      paymentID: "payment-" + profile.data.userName,
      paymentCurrency: mainData.currency,
      admissionDate: new Date(Date.now()).toISOString(),
      nextAdmissionDate: oneYearLater.toISOString(),
      nextMonthlyPaymentDate: oneMonthLater.toISOString(),
      admissionPrice: money
        ? { tk: money.tk, us: money.us }
        : { tk: "", us: "" },
      monthlyPaymentPrice: money
        ? { tk: money.mtk, us: money.mus }
        : { tk: "", us: "" },
      admissionPaymentHistory: [
        {
          Date: new Date(Date.now()).toISOString(),
          PaymentStatus: false,
          Price: mainData.amountPaid,
          currency: mainData.currency,
          transactionID: mainData.transactionID,
          senderNo: mainData.accountNo,
          paymentWay: mainData.paymentWay,
        },
        {
          Date: oneYearLater.toISOString(),
          PaymentStatus: false,
          Price: "",
          currency: "",
          transactionID: "",
          senderNo: "",
          paymentWay: "",
        },
      ],
      monthlyPaymentHistory: [
        {
          Date: oneMonthLater.toISOString(),
          PaymentStatus: false,
          Price: "",
          currency: "",
          transactionID: "",
          senderNo: "",
          paymentWay: "",
        },
      ],
      activeStatus: "active",
    });

    if (resPayment.status == "Alhamdulillah") {
      mytoast.success(
        "Your Payment Request is Accepted. Please Wait for the verificiation"
      );
      const studentCourseCode = {
        code: mainData.course,
        startedDate: new Date(Date.now()).toISOString(),
        endDate: null,
        status: "inactive",
      };

      const studentDepartment = {
        code: mainData.department,
        startedDate: new Date(Date.now()).toISOString(),
        endDate: null,
        status: "inactive",
      };

      const studentJamatCode = {
        code: mainData.jamat,
        startedDate: new Date(Date.now()).toISOString(),
        endDate: null,
        status: "inactive",
      };

      const studentSemester = {
        code: mainData.semester,
        startedDate: new Date(Date.now()).toISOString(),
        endDate: null,
        status: "inactive",
      };

      const resStudent = await updateData(
        undefined,
        profile.data.userDetails.firstName.en,
        profile.data.userDetails.firstName.bn,
        profile.data.userDetails.lastName.en,
        profile.data.userDetails.lastName.bn,
        undefined,
        undefined,
        profile.data.userDetails.fatherName.en,
        profile.data.userDetails.fatherName.bn,
        undefined,
        undefined,
        undefined,
        undefined,
        studentCourseCode,
        mainData.jamat ? studentJamatCode : undefined,
        undefined,
        undefined,
        undefined,
        undefined,
        undefined,
        new Date(Date.now()).toISOString(),
        undefined,
        undefined,
        undefined,
        { addmissionDueStatus: true, paymentID: resPayment.data.paymentID },
        undefined,
        undefined,
        undefined,
        profile.data.userDetails._id,
        mainData.department ? studentDepartment : undefined,
        mainData.semester ? studentSemester : undefined
      );

      if (resStudent.status == "Alhamdulillah") {
        mytoast.info("If verification Delays, Do not forget to reach us");

        const resLogOut = await logout();
        if (resLogOut.status == "Alhamdulillah") {
          mytoast.info("You are logging out");
          removeToken("access_token");
          const hardRefresh = () => {
            if (typeof window !== "undefined") {
              window.location.href = "/dashboard/login";
            }
          };
          hardRefresh();
        }
      }
    }
  }

  return (
    <div className="w-full md:w-[50%] mx-auto p-5 border-0 md:border-2 border-slate-300 rounded-3xl mt-0 md:mt-5">
      <div className="flex justify-center p-5 pb-10">
        <div className="">
          <form onSubmit={submitData}>
            <div className="currencySelector">
              <h1 className="w-full mx-auto text-sm md:text-3xl text-center mb-2">
                আপনি কোন মুদ্রায় পেমেন্ট জমা দিতে চান?
              </h1>

              <div className="flex gap-5 justify-center mb-10 md:mb-[100px]">
                <div className="relative">
                  <input
                    onChange={currencyDecision}
                    className="absolute z-10 top-4 md:top-10 left-4 md:left-5 w-5 md:w-10 h-5 md:h-10"
                    type="radio"
                    id="option1"
                    name="currency"
                    value="taka"
                  />
                  <label htmlFor="option1">
                    <div className="w-full md:w-[300px] cursor-pointer shadow-md border-[1px] border-slate-200 bg-white m-1 md:mt-5 rounded-2xl border-box mx-0 p-5 md:p-12 relative">
                      <Image
                        className="m-auto h-12"
                        width={100}
                        height={100}
                        src="/images/taka.svg"
                      />
                      <h2 className="mt-5 text-[12px] md:text-2xl text-center">
                        {money ? money.tk : ""} টাকা
                      </h2>
                    </div>
                  </label>
                </div>

                <div className="relative">
                  <input
                    onChange={currencyDecision}
                    className="absolute z-10 top-4 md:top-10 left-4 md:left-5 w-5 md:w-10 h-5 md:h-10"
                    type="radio"
                    id="option2"
                    name="currency"
                    value="dollar"
                  />
                  <label htmlFor="option2">
                    <div className="cursor-pointer w-full md:w-[300px] shadow-md border-[1px] border-slate-200 bg-white m-1 md:mt-5 rounded-2xl border-box mx-0 p-5 md:p-12 relative">
                      <Image
                        className="m-auto h-12"
                        width={100}
                        height={100}
                        src="/images/dollar.svg"
                      />
                      <h2 className="mt-5 text-[12px] md:text-2xl text-center">
                        {money ? money.us : ""} ডলার
                      </h2>
                    </div>
                  </label>
                </div>
              </div>
            </div>

            <div className="courseSelector h-[150px] md:h-[200px]">
              <label htmlFor="course">
                <h1 className="w-full mx-auto text-sm md:text-3xl text-center mb-2 ">
                  আপনি কোন ক্ল্যাসে ভর্তি হতে ইচ্ছুক?
                </h1>
              </label>

              <select
                value={mainData.course}
                onChange={classDecision}
                id="course"
                name="course"
                className="bg-white my-4 p-4 box-border w-full rounded-3xl mb-10 md:mb-[100px]"
              >
                <option value="none">আপনার ক্ল্যাস নির্বাচন করুন</option>
                {course
                  ? course.map((item, i) => (
                      <option key={i} value={item.code}>
                        {item.title}
                      </option>
                    ))
                  : ""}
              </select>
            </div>

            <div
              className={`JamatSelector ${
                extraJamat ? "h-[150px] md:h-[200px]" : "h-[0px]"
              } overflow-hidden transition-all duration-1000 ease-out`}
            >
              <label htmlFor="jamat">
                <h1 className="w-full mx-auto text-sm md:text-3xl text-center my-2">
                  আপনি কোন জামাতে ভর্তি হতে ইচ্ছুক?
                </h1>
              </label>

              <select
                value={mainData.jamat}
                onChange={jamatDecision}
                id="jamat"
                name="jamat"
                className="bg-white my-4 p-4 box-border w-full rounded-3xl mb-10 md:mb-[100px]"
              >
                <option value="none">আপনার জামাত নির্বাচন করুন</option>
                {jamat
                  ? jamat.map((item, i) => (
                      <option key={i} value={item.ID}>
                        {item.name.toUpperCase()}
                      </option>
                    ))
                  : ""}
              </select>
            </div>

            <div
              className={`SemesterSelector ${
                extraSemester ? "h-[150px] md:h-[200px]" : "h-[0px]"
              } overflow-hidden transition-all duration-1000 ease-out`}
            >
              <label htmlFor="semester">
                <h1 className="w-full mx-auto text-sm md:text-3xl text-center my-2">
                  আপনি কোন সেমিস্টারে ভর্তি হতে ইচ্ছুক?
                </h1>
              </label>

              <select
                value={mainData.semester}
                onChange={semseterDecision}
                id="semester"
                name="semester"
                className="bg-white my-4 p-4 box-border w-full rounded-3xl mb-10 md:mb-[100px]"
              >
                <option value="none">আপনার সেমিস্টার নির্বাচন করুন</option>
                {semester
                  ? semester.map((item, i) => (
                      <option key={i} value={item.ID}>
                        {item.name}
                      </option>
                    ))
                  : ""}
              </select>
            </div>

            <div
              className={`TransactionSelector ${
                extraTransaction ? "h-[300px]md:h-[400px]" : "h-[0px]"
              } overflow-hidden transition-all duration-1000 ease-out`}
            >
              <label htmlFor="paymentWay">
                <h1 className="w-full mx-auto text-sm md:text-3xl text-center my-2">
                  আপনি নিচের যেকোনো একটি অপশনে টাকা জমা দিতে পারবেন
                </h1>
              </label>
              <select
                value={mainData.paymentWay}
                onChange={paymentWayDecision}
                id="paymentWay"
                name="paymentWay"
                className="bg-white my-4 p-4 box-border w-full rounded-3xl mb-10 md:mb-[100px]"
              >
                <option value="none">আপনার পেমেন্ট মেথড নির্বাচন করুন</option>

                <option value="bkash-merchant">
                  bkash: 01791 845 122 (Merchant)
                </option>

                <option value="bKash-personal">
                  bKash: 01674 04 05 02 (Personal)
                </option>

                <option value="nagad-personal">
                  Nagad: 01674 04 05 02 (Personal)
                </option>
                <option value="rocket-personal">
                  Rocket:01674 04 05 023 (Personal)
                </option>
                <option value="paypal">
                  PayPal: internetmadrasa@outlook.com
                </option>

                <option value="dbbl-bank">
                  DBBL Bank Account No. 126 101 56434
                </option>
                <option value="ebl-bank">
                  EBL Bank Account No. 170 145 000 1520
                </option>
              </select>

              {showPayment ? (
                <ShowPaymentDetails account={mainData.paymentWay} />
              ) : (
                ""
              )}

              <label htmlFor="transactionalID">
                <h1 className="w-full mx-auto text-sm md:text-3xl text-center my-2">
                  আপনার ট্রানজ্যাকশন কোডটি লিখুন
                </h1>
              </label>

              <input
                onChange={transactionDecision}
                value={mainData.transactionID}
                type="text"
                id="transactionalID"
                name="transactionalID"
                className="bg-white my-4 p-4 box-border w-full rounded-3xl mb-10 md:mb-[100px]"
                placeholder="213C34OP54ST5GJI5"
              ></input>

              <label htmlFor="accountno">
                <h1 className="w-full mx-auto text-sm md:text-3xl text-center my-2">
                  আপনি যেখান থেকে টাকা দিয়েছেন, মোবাইল ব্যাংকিং হলে প্রেরকের
                  নাম্বার, ব্যাংক হলে প্রেরকের ব্যাংক একাউন্ট নাম্বার, পেপাল হলে
                  প্রেরকের ইমেইল আইডি লিখুন
                </h1>
              </label>

              <input
                onChange={accountNoDecision}
                value={mainData.accountNo}
                type="text"
                id="accountno"
                name="accountno"
                className="bg-white my-4 p-4 box-border w-full rounded-3xl mb-10 md:mb-[100px]"
                placeholder="+8801746668432"
              ></input>
              <label htmlFor="payment">
                <h1 className="w-full mx-auto text-sm md:text-3xl text-center mb-2">
                  আপনার জমাকৃত অর্থের পরিমাণ লিখুন
                </h1>
              </label>

              <input
                onChange={amountPaidDecision}
                value={mainData.amountPaid}
                type="number"
                id="payment"
                name="payment"
                className="bg-white my-4 p-4 box-border w-full rounded-3xl mb-10 md:mb-[100px]"
                placeholder="1530 Taka, 30 Dollar"
              ></input>
            </div>
            <div className="submitSection">
              <button
                className="mt-10 w-full p-4 bg-lime-900 hover:bg-lime-700 transition duration-500 ease-out text-white fixed bottom-0 left-0"
                type="submit"
              >
                {" "}
                Submit Admission Request
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default PreFeeSection;
