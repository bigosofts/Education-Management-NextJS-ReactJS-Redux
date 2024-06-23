"use client";
import { useState, useEffect } from "react";
import DashWrapper from "@/components/dashboardPage/DashWrapper";

import DashExplore from "@/components/dashboardPage/DashExplore";

import { updateData } from "@/apiservices/studentapiservices";
import {
  updateData as upDatePayment,
  selectDataTwo,
} from "@/apiservices/paymentapiservices";

import { useSelector } from "react-redux";
import mytoast from "@/components/toast/toast";

function Page(props) {
  const data = useSelector((state) => state.isAdmin.value);

  useEffect(() => {
    async function getData() {
      function getDayDifference() {
        let date = data.data.userDetails.admissionSession;
        let currentDate = new Date();
        let paymentDate = new Date(date);

        let timeDifference = currentDate.getTime() - paymentDate.getTime();
        let oneYearInMillis = 1000 * 60 * 60 * 24 * 365; // milliseconds in one year
        let yearsDifference = timeDifference / oneYearInMillis;
        return yearsDifference;
      }

      if (getDayDifference() > 1) {
        async function upDateData() {
          let modifiedCourseCode = JSON.parse(
            JSON.stringify(data.data.userDetails.studentCourseCode)
          );

          if (modifiedCourseCode.length > 0) {
            modifiedCourseCode[modifiedCourseCode.length - 1].status =
              "inactive";
          }

          const res = await updateData(
            data.data.userDetails.userName,
            data.data.userDetails.firstName.en,
            data.data.userDetails.firstName.bn,
            data.data.userDetails.lastName.en,
            data.data.userDetails.lastName.bn,
            data.data.userDetails.nidNumber,
            data.data.userDetails.birthRegNumber,
            data.data.userDetails.fatherName.en,
            data.data.userDetails.fatherName.bn,
            data.data.userDetails.emailAddress,
            undefined,
            data.data.userDetails.mobileNumber,
            data.data.userDetails.occupation,
            modifiedCourseCode,
            data.data.userDetails.studentJamatCode,
            data.data.userDetails.gender,
            data.data.userDetails.dateOfBirth,
            data.data.userDetails.countryName,
            data.data.userDetails.fullPresentAddress,
            data.data.userDetails.fullPermanentAddress,
            data.data.userDetails.admissionSession,
            data.data.userDetails.admissionDate,
            data.data.userDetails.studentMotive,
            data.data.userDetails.details,
            {
              addmissionDueStatus: true,
              consequentDueStatus:
                data.data.userDetails.paymentStatus.consequentDueStatus,
              paymentID: data.data.userDetails.paymentStatus.paymentID,
            },
            data.data.userDetails.userRole,
            data.data.userDetails.extracurricular,
            data.data.userDetails.activeStatus,
            data.data.userDetails._id,
            data.data.userDetails.studentDepartment,
            data.data.userDetails.studentSemester
          );

          if (res.status == "Alhamdulillah") {
            mytoast.danger("এই বছরের ভর্তির টাকা বাকি রয়েছে");
          } else {
            console.log(res);
          }
        }
        upDateData();
      }
    }
    getData();

    async function writePayment() {
      const res2 = await selectDataTwo(
        { paymentID: data.data.userDetails.paymentStatus.paymentID },
        null
      );
      if ((res2.status = "Alhamdulillah")) {
        if (res2.data[0]) {
          if (res2.data[0].monthlyPaymentHistory.length >= 1) {
            function getDelayedMonthsDates(paymentDate) {
              let currentDate = new Date();
              let paymentDateObject = new Date(paymentDate);

              // Check if the current date is later than the paymentDate
              if (currentDate.getTime() > paymentDateObject.getTime()) {
                // Calculate the difference in months
                let diffYears =
                  currentDate.getFullYear() - paymentDateObject.getFullYear();
                let diffMonths =
                  diffYears * 12 +
                  currentDate.getMonth() -
                  paymentDateObject.getMonth();

                // Generate an array of delayed months dates
                let delayedMonthsDates = [];
                for (let i = 1; i <= diffMonths; i++) {
                  let delayedDate = new Date(paymentDateObject);
                  delayedDate.setMonth(paymentDateObject.getMonth() + i);
                  delayedMonthsDates.push(
                    delayedDate.toISOString().slice(0, 10)
                  );
                }

                return delayedMonthsDates;
              } else {
                return []; // Payment is not delayed
              }
            }

            function isDatePassed(date) {
              let currentDate = new Date();
              let paymentDate = new Date(date);
              return currentDate.getTime() > paymentDate.getTime();
            }
            if (
              isDatePassed(
                res2.data[0].monthlyPaymentHistory[
                  res2.data[0].monthlyPaymentHistory.length - 1
                ].Date
              )
            ) {
              let currentDate = new Date();
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

              let newMonthlyPayment = [...res2.data[0].monthlyPaymentHistory];

              let iterate = getDelayedMonthsDates(
                res2.data[0].monthlyPaymentHistory[
                  res2.data[0].monthlyPaymentHistory.length - 1
                ].Date
              );

              if (
                res2.data[0].monthlyPaymentHistory[
                  res2.data[0].monthlyPaymentHistory.length - 1
                ].Price == 0 &&
                res2.data[0].monthlyPaymentHistory[
                  res2.data[0].monthlyPaymentHistory.length - 1
                ].PaymentStatus == true
              ) {
                iterate.forEach((item) => {
                  newMonthlyPayment.push({
                    Date: new Date(item),
                    PaymentStatus: true,
                    Price: 0,
                    currency: "",
                    transactionID: "",
                    senderNo: "",
                    paymentWay: "",
                    nextMonthlyDate: undefined,
                  });
                });
              } else {
                iterate.forEach((item) => {
                  newMonthlyPayment.push({
                    Date: new Date(item),
                    PaymentStatus: false,
                    Price: "",
                    currency: "",
                    transactionID: "",
                    senderNo: "",
                    paymentWay: "",
                    nextMonthlyDate: undefined,
                  });
                });
              }

              const res4 = await upDatePayment({
                paymentID: "payment-" + data.data.userDetails.userName,
                paymentCurrency: res2.data[0].paymentCurrency,
                admissionDate: res2.data[0].admissionDate,

                admissionPrice: {
                  tk: res2.data[0].admissionPrice.tk,
                  us: res2.data[0].admissionPrice.us,
                },
                monthlyPaymentPrice: {
                  tk: res2.data[0].monthlyPaymentPrice.tk,
                  us: res2.data[0].monthlyPaymentPrice.us,
                },
                admissionPaymentHistory: res2.data[0].admissionPaymentHistory,

                monthlyPaymentHistory: newMonthlyPayment,
                activeStatus: "active",
                idValue: res2.data[0]._id,
              });

              if (res4.status == "Alhamdulillah") {
                let testMonthlyPayment = [...newMonthlyPayment];

                let currentDate = new Date();
                let lastDate = new Date(
                  testMonthlyPayment[testMonthlyPayment.length - 1].Date
                );

                if (currentDate > lastDate) {
                  let hasUnpaid = testMonthlyPayment
                    .slice(0, -1)
                    .some((item) => item.PaymentStatus === false);

                  if (hasUnpaid) {
                    mytoast.success("আপনার মাসিক টিউশন ফি বকেয়া আছে");
                  }
                }
              }
            }
          }
        }
      }
    }
    writePayment();
  }, []);

  return (
    <DashWrapper>
      <DashExplore />
    </DashWrapper>
  );
}

export default Page;
