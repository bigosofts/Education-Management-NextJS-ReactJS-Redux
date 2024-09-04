"use client";
import React, { useEffect, useState, useRef } from "react";
import "./accordion.css";
import Table from "@/components/Admin/table";
import { selectDataAnnualActivePlus } from "@/apiservices/studentapiservices";

import {
  selectDataTwo as selectStudents,
  updateData as updateStudents,
} from "@/apiservices/studentapiservices";

import Pagination from "../pagination/pagination";
import mytoast from "@/components/toast/toast";

function AccordionSecondActive() {
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
        setLoading(true);

        const res = await selectDataAnnualActivePlus(1, 10, 0);

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
    const res = await selectDataAnnualActivePlus(e.selected + 1, 10, 0);
    if (res.status === "Alhamdulillah") {
      setTotal(res.total);

      setStudents(res.data);

      setLoading(false);
    }
  }

  async function searchQuery(e) {
    e.preventDefault();
    setLoading(true);
    const res = await selectDataAnnualActivePlus(
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

  async function updateStudentData(id) {
    var userConfirmed = confirm("আপনি কি কাজটি বাতিল করতে চান?");
    if (userConfirmed) {
      mytoast.danger("Action has been rejected !");
    } else {
      const resStd = await selectStudents({ userName: id }, null);

      if (resStd.status == "Alhamdulillah") {
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
          resStd.data[0].studentCourseCode,
          resStd.data[0].studentJamatCode,
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
            addmissionDueStatus: false,
            consequentDueStatus: false,
            paymentID: resStd.data[0].paymentStatus.paymentID,
          },
          resStd.data[0].userRole,
          resStd.data[0].extracurricular,
          resStd.data[0].activeStatus,
          resStd.data[0]._id,
          resStd.data[0].studentDepartment,
          resStd.data[0].studentSemester,
          resStd.data[0].batchCount,
          resStd.data[0].fundStatus,
          {
            status: "irregular",
            date: resStd.data[0].accountStatus.date,
          }
        );

        if (res.status == "Alhamdulillah") {
          mytoast.success("Account Modified Successfully");
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
                  Freeze
                </span>

                <span
                  style={{
                    display: "inline-block",
                    backgroundColor: "green",
                    padding: "5px 10px",
                    borderRadius: "15px",
                    color: "white",
                    marginLeft: "10px",
                    marginBottom: "10px",
                    fontSize: "14px",
                  }}
                >
                  Active
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

export default AccordionSecondActive;
