"use client";
import { useState, useEffect } from "react";
import { selectDataTwo as selectPay } from "@/apiservices/paymentapiservices";

function TableMonthly({ profile, paymentID, students }) {
  const [payments, setPayments] = useState();
  useEffect(() => {
    async function getData() {
      const res = await selectPay({ paymentID }, null);
      if (res.status == "Alhamdulillah") {
        setPayments(res.data[0]);
      }
    }
    getData();
  }, []);
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

  function oneMonthLaterToDesiredDate(dateString) {
    let desiredDate = new Date(dateString);
    var desiredMonth = desiredDate.getMonth();
    var desiredYear = desiredDate.getFullYear();

    var nextMonth = desiredMonth + 1;
    var nextYear = desiredYear;

    if (nextMonth > 11) {
      nextMonth = 0; // January (0-indexed)
      nextYear++;
    }

    // Calculate one month later date
    var oneMonthLater = new Date(
      nextYear,
      nextMonth,
      desiredDate.getDate(),
      desiredDate.getHours(),
      desiredDate.getMinutes(),
      desiredDate.getSeconds(),
      desiredDate.getMilliseconds()
    );

    // Check if month overflow occurred
    if (oneMonthLater.getMonth() !== nextMonth) {
      // Overflow, set to the last day of the previous month
      oneMonthLater = new Date(
        nextYear,
        nextMonth + 1,
        0,
        desiredDate.getHours(),
        desiredDate.getMinutes(),
        desiredDate.getSeconds(),
        desiredDate.getMilliseconds()
      );
    }

    return oneMonthLater;
  }

  if (payments) {
    return (
      <div className="w-[95%] mx-auto relative overflow-x-auto shadow-md rounded-md sm:rounded-lg">
        <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400 rounded-md overflow-hidden">
          <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
            <tr>
              <th scope="col" className="px-1 md:px-6 py-1">
                Monthly Price
              </th>
              <th scope="col" className="px-1 md:px-6 py-1">
                Course Overview
              </th>

              <th scope="col" className="px-1 md:px-6 py-1">
                Date of Payment
              </th>
              <th scope="col" className="px-1 md:px-6 py-1">
                Payment Status
              </th>
              <th scope="col" className="px-1 md:px-6 py-1">
                Amount Paid
              </th>
              <th scope="col" className="px-1 md:px-6 py-1">
                Sender Account
              </th>
              <th scope="col" className="px-1 md:px-6 py-1">
                Transaction ID
              </th>
              <th scope="col" className="px-1 md:px-6 py-1">
                Payment Method
              </th>

              <th scope="col" className="px-1 md:px-6 py-1">
                Current Status
              </th>
            </tr>
          </thead>
          <tbody>
            {payments.monthlyPaymentHistory.map((item, i) => (
              <tr
                key={i}
                className="odd:bg-white odd:dark:bg-gray-900 even:bg-gray-50 even:dark:bg-gray-800 border-b dark:border-gray-700"
              >
                <td className="px-1 md:px-6 py-1">
                  Taka: {payments.monthlyPaymentPrice.tk}
                  <br /> Dollar: {payments.monthlyPaymentPrice.us}
                </td>
                <td className="px-1 md:px-6 py-1">
                  {
                    profile.studentCourseCode[
                      profile.studentCourseCode.length - 1
                    ].code
                  }
                  <br />
                  {
                    profile.studentDepartment[
                      profile.studentDepartment.length - 1
                    ].code
                  }
                  <br />
                  {profile.studentJamatCode[0] &&
                    profile.studentJamatCode[
                      profile.studentJamatCode.length - 1
                    ].code}
                  <br />
                  {profile.studentSemester[0] &&
                    profile.studentSemester[profile.studentSemester.length - 1]
                      .code}
                </td>
                <td className="px-1 md:px-6 py-1">
                  ({niceDate(item.Date)} -{" "}
                  {niceDate(oneMonthLaterToDesiredDate(item.Date))})
                </td>
                <td className="px-1 md:px-6 py-1">
                  {item.PaymentStatus == true ? "Ok" : "Unpaid"}
                </td>
                <td className="px-1 md:px-6 py-1">
                  {`${item.Price ? item.Price : "Not Paid"}`}{" "}
                  {`${item.Price ? item.currency : ""}`}
                </td>
                <td className="px-1 md:px-6 py-1">
                  {item.senderNo ? item.senderNo : "Not Submitted"}
                </td>
                <td className="px-1 md:px-6 py-1">
                  {item.transactionID ? item.transactionID : "Not Submitted"}
                </td>
                <td className="px-1 md:px-6 py-1">
                  {item.paymentWay ? item.paymentWay : "Not Applicable"}
                </td>

                <td className="px-1 md:px-6 py-1">
                  <div>
                    {item.Price ? (
                      item.PaymentStatus == true ? (
                        <span
                          style={{
                            display: "inline-block",
                            backgroundColor: "#34a853",
                            padding: "10px 20px",
                            borderRadius: "15px",
                            color: "white",
                            marginLeft: "10px",
                            fontSize: "14px",
                            fontWeight: "900",
                          }}
                        >
                          Paid
                        </span>
                      ) : (
                        <span
                          style={{
                            display: "inline-block",
                            backgroundColor: "#fbbc05",
                            padding: "10px 20px",
                            borderRadius: "15px",
                            color: "white",
                            marginLeft: "10px",
                            fontSize: "14px",
                            fontWeight: "900",
                          }}
                        >
                          Pending
                        </span>
                      )
                    ) : item.Price == 0 && item.PaymentStatus == true ? (
                      <span
                        style={{
                          display: "inline-block",
                          backgroundColor: "#34a853",
                          padding: "10px 20px",
                          borderRadius: "15px",
                          color: "white",
                          marginLeft: "10px",
                          fontSize: "14px",
                          fontWeight: "900",
                        }}
                      >
                        Paid
                      </span>
                    ) : (
                      <span
                        style={{
                          display: "inline-block",
                          backgroundColor: "red",
                          padding: "10px 20px",
                          borderRadius: "15px",
                          color: "white",
                          marginLeft: "10px",
                          fontSize: "14px",
                          fontWeight: "900",
                        }}
                      >
                        Due
                      </span>
                    )}
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    );
  }
}

export default TableMonthly;
