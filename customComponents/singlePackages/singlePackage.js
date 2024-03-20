"use client";
import React from "react";
import "./Packages.css";
import Image from "next/image";

function SinglePackage({ items, key }) {
  let realMark = items.studentSubMark.reduce(
    (total, mark) => total + mark.mark,
    0
  );

  let totalMark = items.studentSubMark.reduce(
    (total, mark) => (total += 100),
    0
  );

  return (
    <div key={key} className="col">
      <div className="theme_common_box_two img_hover">
        <div className="theme_two_box_img">
          <Image width={396} height={266} src={items.picture} alt="img" />

          <p>
            <i className="fa fa-map-marker"></i>
            {items.studentExamMadrasha}
          </p>
        </div>
        <div className="theme_two_box_content">
          <div className="badgeCard">
            <span
              style={{
                width: "100px",
                backgroundColor: "red",
                padding: "2px 5px",
                borderRadius: "5px",
                color: "white",
              }}
            >
              {items.studentGrade}
            </span>
          </div>
          <h4 style={{ textAlign: "center" }}>SID: {items.studentUserId}</h4>
          <p style={{ textAlign: "center" }}>
            <span className="review_rating">
              {false ? "Total Marks: " : "মোট মার্কঃ "}
              {realMark}/{totalMark}
            </span>
          </p>
          <div
            className="detail_data"
            style={{
              display: "flex",
              justifyContent: "space-between",
              padding: "20px 5% 0px 5%",
            }}
          >
            <div>
              <table id="postGridTable" style={{ width: "100%" }}>
                <tr>
                  <td>{false ? "Roll No:" : "রোল নংঃ"}</td>
                  <td className="td-right">{items.resultRollNo}</td>
                </tr>
                <tr>
                  <td>{false ? "Registration No:" : "রেজিস্ট্রেশন নংঃ"}</td>
                  <td className="td-right">{items.resultRegNo}</td>
                </tr>
                <tr>
                  <td>{false ? "Madrasa Name:" : "মাদরাসার নামঃ "}</td>
                  <td className="td-right">{items.studentExamMadrasha}</td>
                </tr>
                <tr>
                  <td>{false ? "Exam Centre:" : "এক্সাম সেন্টারঃ"}</td>
                  <td className="td-right">{items.studentExamCentre}</td>
                </tr>
                <tr>
                  <td>{false ? "Student Merit:" : "স্টুডেন্ট পজিশনঃ"}</td>
                  <td className="td-right">{items.studentMerit}</td>
                </tr>
                <tr>
                  <td>{false ? "Passing Year:" : "পাসের সনঃ"}</td>
                  <td className="td-right">{items.passingYear}</td>
                </tr>
                <tr>
                  <td>{false ? "Marhala:" : "মারহালা"}</td>
                  <td className="td-right">{items.marhala}</td>
                </tr>
                <tr>
                  <td>{false ? "Grade:" : "প্রাপ্ত বিভাগঃ"}</td>
                  <td className="td-right">{items.studentGrade}</td>
                </tr>
              </table>
            </div>
          </div>
        </div>
        <div
          className="theme_two_box_content"
          style={{
            display: "flex",
            gap: "10px",
            width: "90%",
            margin: "auto",
          }}
        ></div>
      </div>
    </div>
  );
}

export default SinglePackage;
