"use client";
import { useState, useEffect } from "react";
import { selectDataTwo as selectPay } from "@/apiservices/paymentapiservices";
import { updateData } from "@/apiservices/studentapiservices";
import { updateData as updatePayment } from "@/apiservices/paymentapiservices";
import mytoast from "../toast/toast";

function Table({ profile, paymentID, students }) {
  async function updateProfile(id, modDate) {
    let modifiedadmissionPaymentHistory = payments.admissionPaymentHistory.map(
      (item) => {
        if (item._id === id) {
          return {
            Date: item.Date,
            PaymentStatus: true,
            Price: item.Price,
            currency: item.currency,
            transactionID: item.transactionID,
            senderNo: item.senderNo,
            paymentWay: item.paymentWay,
            _id: id,
          };
        } else {
          return item;
        }
      }
    );

    const resPay = await updatePayment({
      paymentID: payments.paymentID,
      paymentCurrency: payments.paymentCurrency,
      admissionDate: payments.admissionDate,
      admissionPrice: payments.admissionPrice,
      monthlyPaymentPrice: payments.monthlyPaymentPrice,
      admissionPaymentHistory: modifiedadmissionPaymentHistory,
      monthlyPaymentHistory: payments.monthlyPaymentHistory,
      activeStatus: payments.activeStatus,
      idValue: payments._id,
    });
    if (resPay.status == "Alhamdulillah") {
      mytoast.success("Payments Modified Successfully");
      let student = students.filter((item) => {
        if (item.paymentStatus.paymentID == paymentID) {
          return item;
        }
      });

      let modifiedStudentCourseCode = student[0].studentCourseCode.map(
        (item) => {
          return {
            code: item.code,
            startedDate: item.startedDate,
            endDate: item.endDate,
            status: "active",
            _id: item._id,
          };
        }
      );

      let modifiedStudentJamatCode = student[0].studentJamatCode.map((item) => {
        return {
          code: item.code,
          startedDate: item.startedDate,
          endDate: item.endDate,
          status: "active",
          _id: item._id,
        };
      });

      let modifiedStudentDepartment = student[0].studentDepartment.map(
        (item) => {
          return {
            code: item.code,
            startedDate: item.startedDate,
            endDate: item.endDate,
            status: "active",
            _id: item._id,
          };
        }
      );

      let modifiedStudentSemester = student[0].studentSemester.map((item) => {
        return {
          code: item.code,
          startedDate: item.startedDate,
          endDate: item.endDate,
          status: "active",
          _id: item._id,
        };
      });

      const res = await updateData(
        student[0].userName,
        student[0].firstName.en,
        student[0].firstName.bn,
        student[0].lastName.en,
        student[0].lastName.bn,
        student[0].nidNumber,
        student[0].birthRegNumber,
        student[0].fatherName.en,
        student[0].fatherName.bn,
        student[0].emailAddress,
        undefined,
        student[0].mobileNumber,
        student[0].occupation,
        modifiedStudentCourseCode,
        modifiedStudentJamatCode,
        student[0].gender,
        student[0].dateOfBirth,
        student[0].countryName,
        student[0].fullPresentAddress,
        student[0].fullPermanentAddress,
        modDate,
        student[0].admissionDate,
        student[0].studentMotive,
        student[0].details,
        {
          addmissionDueStatus: false,
          consequentDueStatus: false,
          paymentID: student[0].paymentStatus.paymentID,
        },
        student[0].userRole,
        student[0].extracurricular,
        student[0].activeStatus,
        student[0]._id,
        modifiedStudentDepartment,
        modifiedStudentSemester
      );
      if (res.status == "Alhamdulillah") {
        mytoast.success("Account Approved Successfully");
      }
    }
  }
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
  if (payments) {
    return (
      <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
        <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
          <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
            <tr>
              <th scope="col" className="px-6 py-3">
                Admission Price
              </th>
              <th scope="col" className="px-6 py-3">
                Course Overview
              </th>

              <th scope="col" className="px-6 py-3">
                Date of Payment
              </th>
              <th scope="col" className="px-6 py-3">
                Payment Status
              </th>
              <th scope="col" className="px-6 py-3">
                Amount Paid
              </th>
              <th scope="col" className="px-6 py-3">
                Sender Account
              </th>
              <th scope="col" className="px-6 py-3">
                Transaction ID
              </th>
              <th scope="col" className="px-6 py-3">
                Payment Method
              </th>

              <th scope="col" className="px-6 py-3">
                Action
              </th>
            </tr>
          </thead>
          <tbody>
            {payments.admissionPaymentHistory.map((item, i) => (
              <tr
                key={i}
                className="odd:bg-white odd:dark:bg-gray-900 even:bg-gray-50 even:dark:bg-gray-800 border-b dark:border-gray-700"
              >
                <td className="px-6 py-4">
                  Taka: {payments.admissionPrice.tk}
                  <br /> Dollar: {payments.admissionPrice.us}
                </td>
                <td className="px-6 py-4">
                  
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
                  {
                    profile.studentJamatCode[
                      profile.studentJamatCode.length - 1
                    ].code
                  }
                  <br /> 
                  {
                    profile.studentSemester[
                      profile.studentSemester.length - 1
                    ].code
                  }
                </td>
                <td className="px-6 py-4">{niceDate(item.Date)}</td>
                <td className="px-6 py-4">
                  {item.PaymentStatus == true ? "Ok" : "Unpaid"}
                </td>
                <td className="px-6 py-4">
                  {`${item.Price ? item.Price : "Not Paid"}`}{" "}
                  {`${item.Price ? item.currency : ""}`}
                </td>
                <td className="px-6 py-4">
                  {item.senderNo ? item.senderNo : "Not Submitted"}
                </td>
                <td className="px-6 py-4">
                  {item.transactionID ? item.transactionID : "Not Submitted"}
                </td>
                <td className="px-6 py-4">{item.paymentWay}</td>

                <td className="px-6 py-4">
                  <div>
                    {item.Price ? (
                      item.PaymentStatus == true ? (
                        <span
                          style={{
                            display: "inline-block",
                            backgroundColor: "green",
                            padding: "10px 20px",
                            borderRadius: "15px",
                            color: "white",
                            marginLeft: "10px",
                            fontSize: "14px",
                            fontWeight: "900",
                          }}
                        >
                          Approved
                        </span>
                      ) : (
                        <span
                          onClick={() => updateProfile(item._id, item.Date)}
                          style={{
                            display: "inline-block",
                            backgroundColor: "rgb(59 61 49)",
                            padding: "10px 20px",
                            borderRadius: "15px",
                            color: "white",
                            marginLeft: "10px",
                            fontSize: "14px",
                            fontWeight: "900",
                            cursor: "pointer",
                          }}
                        >
                          Approve
                        </span>
                      )
                    ) : (
                      <span
                        style={{
                          display: "inline-block",
                          backgroundColor: "blue",
                          padding: "10px 20px",
                          borderRadius: "15px",
                          color: "white",
                          marginLeft: "10px",
                          fontSize: "14px",
                          fontWeight: "900",
                        }}
                      >
                        Upcoming
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

export default Table;
