"use client";
import { useState, useEffect, useRef } from "react";
import {
  selectDataTwo as selectPayments,
  updateData as upDatePayment,
} from "@/apiservices/paymentapiservices";
import { useSelector } from "react-redux";
import ShowPaymentDetails from "./showpaymentDetail";
import mytoast from "../toast/toast";
import { sendMail } from "@/apiservices/sendMailapiservices";

function MonthlyPayment() {
  const data = useSelector((state) => state.isAdmin.value);
  const [showPayment, setShowPayment] = useState(false);
  const [Unpaid, setUnpaid] = useState();
  const UnpaidRef = useRef();
  const [mainData, setMainData] = useState({
    currency: "",

    amountPaid: "",
    transactionID: "",
    accountNo: "",
    paymentWay: "",
  });
  function niceDate(date) {
    var isoTime = date;
    var date = new Date(isoTime);

    var options = {
      day: "numeric",
      month: "long",
      year: "numeric",
    };

    var formattedDate = date.toLocaleDateString("en-US", options);
    return formattedDate;
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
  function transactionDecision(e) {
    e.preventDefault();
    const transactionID = e.target.value;
    setMainData((prev) => ({
      ...prev,
      transactionID: transactionID,
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
  const paymentData = useSelector((state) => state.djs.payments);

  useEffect(() => {
    async function getData() {
      let res5 = { data: null };
      res5.data = paymentData.length > 0 && paymentData;

      if (res5.data.length > 0) {
        setUnpaid(
          res5.data.filter((item) => {
            if (
              item.paymentID ==
              `${data.data.userDetails.paymentStatus.paymentID}`
            )
              return item;
          })
        );
      }
    }
    getData();
  }, [paymentData]);

  function getOneMonthLate(cdate) {
    let currentDate = new Date(cdate);

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
    return oneMonthLater;
  }

  async function submitMonthlyPayment(e) {
    e.preventDefault();
    if (
      mainData.accountNo &&
      mainData.amountPaid &&
      mainData.currency &&
      mainData.paymentWay &&
      mainData.transactionID &&
      UnpaidRef.current.value != "none"
    ) {
      let currentMonthlyPaymentHistory = Unpaid[0].monthlyPaymentHistory.map(
        (item) => {
          if (item._id == UnpaidRef.current.value) {
            return {
              Date: item.Date,
              PaymentStatus: false,
              Price: mainData.amountPaid,
              currency: mainData.currency,
              transactionID: mainData.transactionID,
              senderNo: mainData.accountNo,
              paymentWay: mainData.paymentWay,
              nextMonthlyDate: getOneMonthLate(item.Date),
            };
          } else {
            return item;
          }
        }
      );

      const resPayment = await upDatePayment({
        paymentID: "payment-" + data.data.userDetails.userName,
        paymentCurrency: Unpaid[0].paymentCurrency,
        admissionDate: Unpaid[0].admissionDate,

        admissionPrice: {
          tk: Unpaid[0].admissionPrice.tk,
          us: Unpaid[0].admissionPrice.us,
        },
        monthlyPaymentPrice: {
          tk: Unpaid[0].monthlyPaymentPrice.tk,
          us: Unpaid[0].monthlyPaymentPrice.us,
        },
        admissionPaymentHistory: Unpaid[0].admissionPaymentHistory,

        monthlyPaymentHistory: currentMonthlyPaymentHistory,
        activeStatus: "active",
        idValue: Unpaid[0]._id,
      });

      if (resPayment.status == "Alhamdulillah") {
        mytoast.info("Payments Submited. Wait for the Approval");

        sendMail(
          [
            data.data.userDetails.emailAddress,
            "internetmadrasa@outlook.com",
            "abdullah.limonbau@gmail.com",
          ],
          "Monthly Payment request has been Recieved",
          `সুপ্রিয় শিক্ষার্থী ${data.data.userDetails.firstName.en} ${
            data.data.userDetails.lastName.en
          }, আপনার মাসিক পেমেন্ট রিকোয়েস্টটি গ্রহণ করা হয়েছে, অনুগ্রহপূর্বক অপেক্ষা করুন। আপনার একাউন্ট ${
            data.data.userDetails.userName
          } টি এপ্রুভ হলে আরেকটি কনফার্মেশন মেইল দেয়া হবে ইং শা আল্লাহ \
          একাউন্ট আইডিঃ ${data.data.userDetails.userName}, \
          একাউন্ট ইমেইলঃ ${data.data.userDetails.emailAddress}, \
          মোবাইল নাম্বারঃ ${data.data.userDetails.mobileNumber}, \
          কোর্সের নামঃ ${
            data.data.userDetails.studentCourseCode[
              data.data.userDetails.studentCourseCode.length - 1
            ].code
          }, \
          স্ট্যাটাসঃ ${
            data.data.userDetails.studentCourseCode[
              data.data.userDetails.studentCourseCode.length - 1
            ].status
          }, \
          পেমেন্টের তারিখঃ ${new Date(Date.now()).toISOString()}, \
          পেমেন্ট স্ট্যাটাসঃ false, \
          প্রাইসঃ ${mainData.amountPaid}, \
          কারেন্সিঃ  ${mainData.currency}, \
          ট্র্যান্সাকশন আইডিঃ  ${mainData.transactionID}, \
          সেন্ডার নাম্বারঃ ${mainData.accountNo}, \
          পেমেন্টের মাধ্যমঃ ${mainData.paymentWay}`,

          `<p>সুপ্রিয় শিক্ষার্থী ${data.data.userDetails.firstName.en} ${
            data.data.userDetails.lastName.en
          }, আপনার মাসিক পেমেন্ট রিকোয়েস্টটি গ্রহণ করা হয়েছে, অনুগ্রহপূর্বক অপেক্ষা করুন। আপনার একাউন্ট ${
            data.data.userDetails.userName
          } টি এপ্রুভ হলে আরেকটি কনফার্মেশন মেইল দেয়া হবে ইং শা আল্লাহ </p>
          <p>একাউন্ট আইডিঃ ${data.data.userDetails.userName}</p>
          <p>একাউন্ট ইমেইলঃ ${data.data.userDetails.emailAddress}</p>
          <p>মোবাইল নাম্বারঃ ${data.data.userDetails.mobileNumber}</p>
          <p>কোর্সের নামঃ ${
            data.data.userDetails.studentCourseCode[
              data.data.userDetails.studentCourseCode.length - 1
            ].code
          }</p>
          <p>স্ট্যাটাসঃ ${
            data.data.userDetails.studentCourseCode[
              data.data.userDetails.studentCourseCode.length - 1
            ].status
          }</p>
          <p>পেমেন্টের তারিখঃ ${new Date(Date.now()).toISOString()}</p>
          <p>পেমেন্ট স্ট্যাটাসঃ false</p>
          <p>প্রাইসঃ ${mainData.amountPaid}</p>
          <p>কারেন্সিঃ  ${mainData.currency}</p>
          <p>ট্র্যান্সাকশন আইডিঃ  ${mainData.transactionID}</p>
          <p>সেন্ডার নাম্বারঃ ${mainData.accountNo}</p>
          <p>পেমেন্টের মাধ্যমঃ ${mainData.paymentWay}</p>`
        );

        const hardRefresh = () => {
          if (typeof window !== "undefined") {
            window.location.href = `/dashboard/${data.data.userDetails.userName}/fees`;
          }
        };
        hardRefresh();
      }
    } else {
      mytoast.warning("Monthly form: One or more field is empty");
    }
  }

  return (
    <div className="w-full md:w-[50%] mx-auto p-5 border-2 md:border-2 border-slate-300 rounded-3xl mt-0 md:mt-5 text-sm md:text-2xl">
      <form onSubmit={submitMonthlyPayment}>
        <label htmlFor="monthlyAdmission">
          কোন মাসের মাসিক ফী দিতে চাচ্ছেন?
        </label>
        <select
          ref={UnpaidRef}
          id="monthlyAdmission"
          name="monthlyAdmission"
          className="bg-white my-4 p-4 box-border w-full rounded-3xl mb-10 text-sm md:text-2xl"
        >
          <option value="none">মাসিক ফী কোন মাসের তা নির্বাচন করুন?</option>
          {Unpaid
            ? Unpaid[0].monthlyPaymentHistory.map((item, i) =>
                item.PaymentStatus == false ? (
                  <option key={i} value={item._id}>
                    ({niceDate(item.Date)} -{" "}
                    {niceDate(getOneMonthLate(item.Date))})
                  </option>
                ) : (
                  ""
                )
              )
            : ""}
        </select>
        <label className="" htmlFor="paymentCurrency">
          Currency
        </label>
        <select
          onChange={currencyDecision}
          id="paymentCurrency"
          name="paymentCurrency"
          className="my-4 p-4 box-border w-full rounded-3xl mb-10"
        >
          <option value="none">Select Currency</option>
          <option value="taka">Taka</option>
          <option value="dollar">Dollar</option>
        </select>

        <label htmlFor="paymentWay">
          আপনি নিচের যেকোনো একটি অপশনে টাকা জমা দিতে পারবেন
        </label>
        <select
          onChange={paymentWayDecision}
          id="paymentWay"
          name="paymentWay"
          className="bg-white my-4 p-4 box-border w-full rounded-3xl text-sm md:text-2xl mb-10"
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
          <option value="paypal">PayPal: internetmadrasa@outlook.com</option>

          <option value="dbbl-bank">DBBL Bank Account No. 126 101 56434</option>
          <option value="ebl-bank">
            EBL Bank Account No. 170 145 000 1520
          </option>
        </select>
        {showPayment ? (
          <ShowPaymentDetails account={mainData.paymentWay} />
        ) : (
          ""
        )}
        <label className="" htmlFor="paymentPrice">
          আপনার জমাকৃত অর্থের পরিমাণ লিখুন
        </label>
        <input
          onChange={amountPaidDecision}
          id="paymentPrice"
          name="paymentPrice"
          className="my-4 p-4 box-border w-full rounded-3xl mb-10"
          type="Number"
          placeholder="Enter Payment Price (ex.720)"
        ></input>
        <label className="" htmlFor="trxID">
          আপনার ট্রানজ্যাকশন কোডটি লিখুন
        </label>
        <input
          onChange={transactionDecision}
          id="trxID"
          name="trxID"
          className="my-4 p-4 box-border w-full rounded-3xl mb-10"
          type="text"
          placeholder="Enter Trx  ID (ex.45JUFHGR6798dHRK)"
        ></input>

        <label className="" htmlFor="senderID">
          আপনি যেখান থেকে টাকা দিয়েছেন, মোবাইল ব্যাংকিং হলে প্রেরকের নাম্বার,
          ব্যাংক হলে প্রেরকের ব্যাংক একাউন্ট নাম্বার, পেপাল হলে প্রেরকের ইমেইল
          আইডি লিখুন
        </label>
        <input
          onChange={accountNoDecision}
          id="senderID"
          name="senderID"
          className="my-4 p-4 box-border w-full rounded-3xl mb-10"
          type="text"
          placeholder="Enter Trx  ID (ex.45JUFHGR6798dHRK)"
        ></input>

        <button
          className="rounded-3xl mt-10 w-full p-4 bg-lime-900 hover:bg-lime-700 transition duration-500 ease-out text-white z-50"
          type="submit"
        >
          {" "}
          Submit Monthly Payment
        </button>
      </form>
    </div>
  );
}

export default MonthlyPayment;
