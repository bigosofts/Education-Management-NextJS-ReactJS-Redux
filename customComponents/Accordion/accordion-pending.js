"use client";
import React, { useEffect, useState, useRef } from "react";
import "./accordion.css";
import Table from "@/components/Admin/table";
import { selectDataAnnualPendingPlus } from "@/apiservices/studentapiservices";
import {
  selectDataTwo as selectStudents,
  updateData as updateStudents,
} from "@/apiservices/studentapiservices";

import {
  selectDataTwo as selectPayments,
  deleteData,
} from "@/apiservices/paymentapiservices";

import Pagination from "../pagination/pagination";

import { processStudentAnnual } from "@/apiservices/studentapiservices";
import mytoast from "@/components/toast/toast";

function AccordionSecondPending() {
  const [students, setStudents] = useState();
  const [Total, setTotal] = useState();

  const [loading, setLoading] = useState(false);

  const searchRef = useRef();

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
        const res = await selectDataAnnualPendingPlus(1, 10, 0);

        if (res.status === "Alhamdulillah") {
          setTotal(res.total);

          setStudents(res.data);

          setLoading(false);
        }
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    }
    getData();
  }, []);

  async function handlePageClick(e) {
    setLoading(true);
    const res = await selectDataAnnualPendingPlus(e.selected + 1, 10, 0);
    if (res.status === "Alhamdulillah") {
      setTotal(res.total);

      setStudents(res.data);
      setLoading(false);
    }
  }

  async function searchQuery(e) {
    e.preventDefault();
    setLoading(true);
    const res = await selectDataAnnualPendingPlus(
      1,
      10,
      searchRef.current.value || 0
    );
    if (res.status === "Alhamdulillah") {
      setTotal(res.total);

      setStudents(res.data);
      setLoading(false);
    }
  }

  async function processJob() {
    setLoading(true);
    mytoast.success("Student Processing starts");
    const res = await processStudentAnnual();
    if (res.status == "Alhamdulillah") {
      mytoast.success("All Students have been processed");
      setLoading(false);
    }

    await new Promise((resolve) => setTimeout(resolve, 3000));

    if (typeof window !== "undefined") {
      window.location.reload(true); // Perform a hard reload
    }
  }

  async function updateStudentData(id) {
    var userConfirmed = confirm("আপনি কি কাজটি বাতিল করতে চান?");
    if (userConfirmed) {
      mytoast.danger("Action has been rejected !");
    } else {
      const resStd = await selectStudents({ userName: id }, null);
      if (resStd.status == "Alhamdulillah") {
        const payment = await selectPayments(
          { paymentID: resStd.data[0].paymentStatus.paymentID },
          null
        );

        if (payment.status == "Alhamdulillah") {
          const resPay = await deleteData(payment.data[0]._id);
          if (resPay.status == "Alhamdulillah") {
            mytoast.success("Payment Data has been Deleted");
            const res = await updateStudents(
              resStd.data[0].userName,
              resStd.data[0].firstName.en,
              resStd.data[0].firstName.bn,
              resStd.data[0].lastName.en,
              resStd.data[0].lastName.bn,
              resStd.data[0].nidNumber,
              resStd.data[0].birthRegNumber,
              resStd.data[0].fatherName.en,
              resStd.data[0].fatherName.bn,
              resStd.data[0].emailAddress,
              undefined,
              resStd.data[0].mobileNumber,
              resStd.data[0].occupation,
              [],
              [],
              resStd.data[0].gender,
              resStd.data[0].dateOfBirth,
              resStd.data[0].countryName,
              resStd.data[0].fullPresentAddress,
              resStd.data[0].fullPermanentAddress,
              resStd.data[0].admissionSession,
              resStd.data[0].admissionDate,
              resStd.data[0].studentMotive,
              resStd.data[0].details,
              {
                addmissionDueStatus: true,
                consequentDueStatus: false,
                paymentID: "",
              },
              resStd.data[0].userRole,
              resStd.data[0].extracurricular,
              resStd.data[0].activeStatus,
              resStd.data[0]._id,
              [],
              [],
              "",
              "none",
              resStd.data[0].accountStatus
            );

            if (res.status == "Alhamdulillah") {
              mytoast.success("Account Modified Successfully");
            }
          }
        }
      }
    }
  }

  return (
    <div className="accordion">
      <div
        style={{ width: "600px", margin: "50px auto" }}
        className="mx-auto flex"
      >
        <input
          ref={searchRef}
          placeholder="Search"
          className="bg-white p-4"
          type="text"
        ></input>
        <button
          onClick={searchQuery}
          style={{ backgroundColor: "#000" }}
          className="p-4 text-white"
        >
          Search
        </button>

        <button
          onClick={processJob}
          style={{ backgroundColor: "red" }}
          className="p-4 text-white"
        >
          Refresh
        </button>

        <h1 style={{ marginLeft: "20px" }}>{Total}</h1>
      </div>
      {Total && <Pagination Total={Total} handlePageClick={handlePageClick} />}
      {loading && <h3>Loading ... </h3>}

      {!loading &&
        students &&
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
                <span
                  onClick={() => updateStudentData(item.userName)}
                  style={{
                    display: "inline-block",
                    backgroundColor: "purple",
                    padding: "5px 10px",
                    borderRadius: "15px",
                    color: "white",
                    marginLeft: "10px",
                    marginBottom: "10px",
                    fontSize: "14px",
                  }}
                >
                  Transfer to Due
                </span>

                <span
                  style={{
                    display: "inline-block",
                    backgroundColor: "orange",
                    padding: "5px 10px",
                    borderRadius: "15px",
                    color: "white",
                    marginLeft: "10px",
                    marginBottom: "10px",
                    fontSize: "14px",
                  }}
                >
                  Pending
                </span>
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
          </div>
        ))}
    </div>
  );
}

export default AccordionSecondPending;
