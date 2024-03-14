"use client";
import React, { useEffect, useState } from "react";
import "./accordion.css";
import TableMonthly from "@/components/Admin/tableMonthly";
import { selectDataTwo } from "@/apiservices/studentapiservices";
import { selectDataTwo as selectPayments } from "@/apiservices/paymentapiservices";

function AccordionSecond() {
  const [students, setStudents] = useState();
  const [payments, setPayments] = useState();

  useEffect(() => {
    // Event delegation for accordion items
    const accordionContainer = document.querySelector(".accordion");

    const handleClick = (event) => {
      const accordionItemHeader = event.target.closest(
        ".accordion-item-header"
      );
      if (!accordionItemHeader) return;

      const currentlyActiveAccordionItemHeader =
        accordionContainer.querySelector(".accordion-item-header.active");

      if (
        currentlyActiveAccordionItemHeader &&
        currentlyActiveAccordionItemHeader !== accordionItemHeader
      ) {
        currentlyActiveAccordionItemHeader.classList.remove("active");
        currentlyActiveAccordionItemHeader.nextElementSibling.style.maxHeight = 0;
      }

      accordionItemHeader.classList.toggle("active");
      const accordionItemBody = accordionItemHeader.nextElementSibling;

      if (accordionItemHeader.classList.contains("active")) {
        accordionItemBody.style.maxHeight =
          accordionItemBody.scrollHeight + "px";
      } else {
        accordionItemBody.style.maxHeight = 0;
      }
    };

    accordionContainer.addEventListener("click", handleClick);

    // Cleanup function to remove event listener when component unmounts
    return () => {
      accordionContainer.removeEventListener("click", handleClick);
    };
  }, []);

  useEffect(() => {
    async function getData() {
      try {
        const res = await selectDataTwo(null, null);
        const res2 = await selectPayments(null, null);
        if (res.status === "Alhamdulillah" && res2.status == "Alhamdulillah") {
          setPayments(res2.data);
          setStudents(res.data);
        }
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    }
    getData();
  }, []);

  function getCondition(id) {
    let desiredPayment = payments.filter((item) => {
      if (item.paymentID == id) {
        return item;
      }
    });

    if (desiredPayment[0]) {
      let actualArray = [...desiredPayment[0].monthlyPaymentHistory];
      actualArray.pop();
      let decision = actualArray.some((item) => {
        if (item.PaymentStatus == false) {
          return true;
        }
      });

      if (
        actualArray[0] &&
        actualArray[actualArray.length - 1].Price &&
        actualArray[actualArray.length - 1].PaymentStatus == false
      ) {
        return "pending";
      } else if (decision == true) {
        return "due";
      } else if (decision == false) {
        return "ok";
      } else {
        return "ok";
      }
    } else {
      return "due";
    }
  }

  return (
    <div className="accordion">
      {students &&
        payments &&
        students.map((item, i) => (
          <div key={i} className="accordion-item">
            <div className="accordion-item-header">
              <div>
                {item.firstName.en} {item.lastName.en} |{" "}
                <span style={{ color: "green" }}>{item.mobileNumber}</span>{" "}
                <br />
                {item.userName} ({item.paymentStatus.paymentID})<br />
                <span style={{ color: "green" }}>{item.emailAddress}</span>
              </div>
              <div style={{ textAlign: "right" }}>
                {getCondition(item.paymentStatus.paymentID) == "due" && (
                  <span
                    style={{
                      display: "inline-block",
                      backgroundColor: "red",
                      padding: "5px 10px",
                      borderRadius: "15px",
                      color: "white",
                      marginLeft: "10px",
                      marginBottom: "10px",
                      fontSize: "14px",
                    }}
                  >
                    Due
                  </span>
                )}
                {getCondition(item.paymentStatus.paymentID) == "pending" && (
                  <span
                    style={{
                      display: "inline-block",
                      backgroundColor: "blue",
                      padding: "5px 10px",
                      borderRadius: "15px",
                      color: "white",
                      marginLeft: "10px",
                      fontSize: "14px",
                      marginBottom: "10px",
                    }}
                  >
                    Pending
                  </span>
                )}
                {getCondition(item.paymentStatus.paymentID) == "ok" && (
                  <span
                    style={{
                      display: "inline-block",
                      backgroundColor: "rgb(52, 168, 83)",
                      padding: "5px 10px",
                      borderRadius: "15px",
                      color: "white",
                      marginLeft: "10px",
                      fontSize: "14px",
                      marginBottom: "10px",
                    }}
                  >
                    Active
                  </span>
                )}
              </div>
            </div>
            <div className="accordion-item-body">
              <div className="accordion-item-body-content">
                <TableMonthly
                  profile={item}
                  students={students}
                  paymentID={item.paymentStatus.paymentID}
                />
              </div>
            </div>
          </div>
        ))}
    </div>
  );
}

export default AccordionSecond;
