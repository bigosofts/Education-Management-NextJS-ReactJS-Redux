"use client";
import { useSearchParams, useRouter } from "next/navigation";
import Table from "../Student/table";
import { selectDataTwo } from "@/apiservices/studentapiservices";
import { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import TableMonthly from "../Student/tableMonthly";
import { selectDataTwo as selectPayments } from "@/apiservices/paymentapiservices";
import MonthlyPayment from "./monthlyPayment";

function FeeSection({ profile }) {
  const [students, setStudents] = useState();
  const [payments, setPayments] = useState();
  const [store, setStore] = useState("0 taka");

  const data = useSelector((state) => state.isAdmin.value);

  const paymentData2 = useSelector((state) => state.djs.payments);

  const studentsData = useSelector((state) => state.students.students);

  function getDayDifference() {
    let date = data.data.userDetails.admissionSession;
    let currentDate = new Date();
    let paymentDate = new Date(date);

    let timeDifference = currentDate.getTime() - paymentDate.getTime();
    let oneYearInMillis = 1000 * 60 * 60 * 24 * 365; // milliseconds in one year
    let yearsDifference = timeDifference / oneYearInMillis;
    return yearsDifference;
  }

  useEffect(() => {
    async function getData() {
      try {
        let res = { data: null };
        res.data = studentsData.length > 0 && studentsData;

        let res2 = { data: null };

        res2.data =
          paymentData2.length > 0 &&
          paymentData2.filter(
            (item) =>
              item.paymentID == data.data.userDetails.paymentStatus.paymentID
          );

        if (res.data.length > 0 && res2.data.length > 0) {
          console.log(res.data, res2.data);
          setStudents(res.data);
          setPayments(res2.data[0]);

          function calculate() {
            function isDatePassed(date) {
              let currentDate = new Date();
              let paymentDate = new Date(date);

              return currentDate.getTime() > paymentDate.getTime();
            }
            if (res2.data[0]) {
              let havePassed = isDatePassed(
                res2.data[0].admissionPaymentHistory[
                  res2.data[0].admissionPaymentHistory.length - 1
                ].Date
              );
              if (!havePassed) {
                setStore(
                  `${
                    res2.data[0].admissionPaymentHistory[
                      res2.data[0].admissionPaymentHistory.length - 2
                    ].Price
                  } ${
                    res2.data[0].admissionPaymentHistory[
                      res2.data[0].admissionPaymentHistory.length - 2
                    ].currency
                  }`
                );
              }
            }
          }
          calculate();
        }
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    }
    getData();
  }, [paymentData2, studentsData]);

  const router = useRouter();
  const searchParams = useSearchParams();

  const enroll = searchParams.get("enroll");
  if (enroll) {
    router.push(
      `/content/dashboard/${profile.data.userName}/switches?enroll=${enroll}`
    );
  } else {
    return (
      <div className="p-3 h-[300px] bg-[#013030] text-white text-[32px] md:text-3xl w-[100vw] box-border">
        <div className="w-[95%] mx-auto flex justify-between px-2">
          <div className="text-lg md:text-2xl">Current Balance</div>
          <div className="text-lg md:text-2xl">{store}</div>
        </div>
        <div className="pb-[100px]">
          <h1 className="text-[16px] md:text-2xl mt-12 mb-10 text-white text-center">
            Yearly Admission history
          </h1>
          <div className="w-[90vw] md:w-[100vw]">
            <Table
              profile={data.data.userDetails}
              students={students}
              paymentID={data.data.userDetails.paymentStatus.paymentID}
            />
          </div>

          <h1 className="text-[16px] md:text-2xl mt-12 mb-10 text-slate-600 text-center">
            Monthly Payment history
          </h1>
          <div className="w-[90vw] md:w-[100vw]">
            <TableMonthly
              profile={data.data.userDetails}
              students={students}
              paymentID={data.data.userDetails.paymentStatus.paymentID}
            />
          </div>

          <div className="text-slate-800 mt-[80px] border-[1px]">
            <h1 className="text-[16px] md:text-2xl mt-12 mb-10 text-slate-600 text-center">
              Give Monthly Payment for due date
            </h1>
            <MonthlyPayment profile={data} />
          </div>
        </div>
      </div>
    );
  }
}

export default FeeSection;
