"use client";
import React, { useEffect, useState, useRef } from "react";
import "./accordion.css";
import TableMonthly from "@/components/Admin/tableMonthly";
import { selectDataMonthlyActivePlus } from "@/apiservices/studentapiservices";


import Pagination from "../pagination/pagination";

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

        const res = await selectDataMonthlyActivePlus(1, 10, 0);

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
    const res = await selectDataMonthlyActivePlus(e.selected + 1, 10, 0);
    if (res.status === "Alhamdulillah") {
      setTotal(res.total);

      setStudents(res.data);

      setLoading(false);
    }
  }

  async function searchQuery(e) {
    e.preventDefault();
    setLoading(true);
    const res = await selectDataMonthlyActivePlus(
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

export default AccordionSecondActive;
