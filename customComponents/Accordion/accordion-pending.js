"use client";
import React, { useEffect, useState } from "react";
import "./accordion.css";
import Table from "@/components/Admin/table";
import { selectDataTwo } from "@/apiservices/studentapiservices";

function AccordionPending() {
  const [students, setStudents] = useState();

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

  function getStatus2(data) {
    if (
      data.paymentStatus.addmissionDueStatus == false &&
      data.paymentStatus.consequentDueStatus == false
    ) {
      return "active";
    } else if (
      data.paymentStatus.addmissionDueStatus == true &&
      data.paymentStatus.consequentDueStatus == false
    ) {
      return "due";
    } else if (
      data.paymentStatus.addmissionDueStatus == true &&
      data.paymentStatus.consequentDueStatus == true
    ) {
      return "pending";
    }
  }

  function getStatus(data) {
    if (
      data.paymentStatus.addmissionDueStatus == false &&
      data.paymentStatus.consequentDueStatus == false
    ) {
      return (
        <span
          style={{
            display: "inline-block",
            backgroundColor: "#34a853",
            padding: "5px 10px",
            borderRadius: "15px",
            color: "white",
            marginLeft: "10px",
            fontSize: "14px",
          }}
        >
          Active
        </span>
      );
    } else if (
      data.paymentStatus.addmissionDueStatus == true &&
      data.paymentStatus.consequentDueStatus == false
    ) {
      return (
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
      );
    } else if (
      data.paymentStatus.addmissionDueStatus == true &&
      data.paymentStatus.consequentDueStatus == true
    ) {
      return (
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
      );
    }
  }
  useEffect(() => {
    async function getData() {
      try {
        const res = await selectDataTwo(null, null);
        if (res.status === "Alhamdulillah") {
          setStudents(res.data);
        }
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    }
    getData();
  }, []);

  return (
    <div className="accordion">
      {students &&
        students.filter((item)=> item.paymentStatus.addmissionDueStatus &&
        item.paymentStatus.consequentDueStatus).map((item, i) => (
          <div key={i} className="accordion-item">
            {/* {getStatus2(item) == "due" ? (
              <>
                <div className="accordion-item-header">
                  <div style={{ width: "100%", textAlign: "center" }}>
                    {getStatus2(item)}
                  </div>
                </div>
                <div className="accordion-item-body">
                  <div className="accordion-item-body-content">
                    <Table
                      profile={item}
                      students={students}
                      paymentID={item.paymentStatus.paymentID}
                    />
                  </div>
                </div>
              </>
            ) : getStatus2(item) == "active" ? (
              <>
                <div className="accordion-item-header">
                  <div style={{ width: "100%", textAlign: "center" }}>
                    {getStatus2(item)}
                  </div>
                </div>
                <div className="accordion-item-body">
                  <div className="accordion-item-body-content">
                    <Table
                      profile={item}
                      students={students}
                      paymentID={item.paymentStatus.paymentID}
                    />
                  </div>
                </div>
              </>
            ) : getStatus2(item) == "pending" ? (
              <>
                <div className="accordion-item-header">
                  <div style={{ width: "100%", textAlign: "center" }}>
                    {getStatus2(item)}
                  </div>
                </div>
                <div className="accordion-item-body">
                  <div className="accordion-item-body-content">
                    <Table
                      profile={item}
                      students={students}
                      paymentID={item.paymentStatus.paymentID}
                    />
                  </div>
                </div>
              </>
            ) : (
              ""
            )} */}

            <div className="accordion-item-header">
              <div>
                {item.firstName.en} {item.lastName.en} |{" "}
                <span style={{ color: "green" }}>{item.mobileNumber}</span>{" "}
                <br />
                {item.userName} ({item.paymentStatus.paymentID})<br />
                <span style={{ color: "green" }}>{item.emailAddress}</span>
              </div>
              <div style={{ textAlign: "right" }}>{getStatus(item)}</div>
            </div>


            <div className="accordion-item-body">
              <div className="accordion-item-body-content">
                <Table
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

export default AccordionPending;
