"use client";
import { useState, useEffect } from "react";
import { selectDataTwo as selectClasses } from "@/apiservices/classapiservices";
import { selectDataTwo as selectBooks } from "@/apiservices/bookapiservices";
import { useSelector } from "react-redux";

import "./bookpage.css";
function BookPageDesign() {
  const courseState = useSelector((state) => state.courseState.value);
  const data = useSelector((state) => state.isAdmin.value);

  const classes = useSelector((state) => state.classes.classes);
  const booksData = useSelector((state) => state.books.books);

  const [classData, setClassData] = useState();
  const [books, setBooks] = useState();

  function findBooks(bookID) {
    return books.find((item) => {
      return item.bookID == bookID;
    });
  }

  useEffect(() => {
    async function getData() {
      let res = { data: null };

      res.data =
        classes.length > 0 &&
        classes.filter(
          (item) => item.batchNo == data.data.userDetails.batchCount
        );

      if (res.data.length > 0) {
        setClassData(res.data);
      }

      let res2 = { data: null };
      res2.data = booksData.length > 0 && booksData;

      if (res2.data.length > 0) {
        setBooks(res2.data);
      }
    }
    getData();
  }, [classes, booksData]);

  return (
    <div className="bookpageContainer">
      <div className="imgct"></div>

      <div className="bookshelf">
        {courseState && courseState.alemalema == true && (
          <div className="book-grid">
            <h2>
              {" "}
              All Books of Alemalema, {courseState.jamat},{" "}
              {courseState.semester} <br />
              Your Running Batch:{" "}
              <span style={{ color: "red" }}>
                {data.data.userDetails.batchCount}
              </span>
            </h2>

            <ul>
              {classData &&
                classData
                  .filter(
                    (item) =>
                      item.courseID == "alemalema" &&
                      item.semesterID == courseState.semester
                  )
                  .map((item, i) => (
                    <li key={i}>
                      {" "}
                      <img src="/images/officebook.png" />
                      <p>{books && findBooks(item.bookID).bookName.bn}</p>
                    </li>
                  ))}
            </ul>
          </div>
        )}

        {courseState && courseState.schoolalemalema == true && (
          <div className="book-grid">
            <h2>
              {" "}
              All Books of School Alemalema, {courseState.jamat},{" "}
              {courseState.semester} <br />
              Your Running Batch:{" "}
              <span style={{ color: "red" }}>
                {data.data.userDetails.batchCount}
              </span>
            </h2>

            <ul>
              {classData &&
                classData
                  .filter(
                    (item) =>
                      item.courseID == "schoolalemalema" &&
                      item.semesterID == courseState.semester
                  )
                  .map((item, i) => (
                    <li key={i}>
                      {" "}
                      <img src="/images/officebook.png" />
                      <p>{books && findBooks(item.bookID).bookName.bn}</p>
                    </li>
                  ))}
            </ul>
          </div>
        )}

        {courseState && courseState.prealemalema == true && (
          <div className="book-grid">
            <h2>
              {" "}
              All Books of Pre Alemalema, {courseState.jamat},{" "}
              {courseState.semester} <br />
              Your Running Batch:{" "}
              <span style={{ color: "red" }}>
                {data.data.userDetails.batchCount}
              </span>
            </h2>

            <ul>
              {classData &&
                classData
                  .filter(
                    (item) =>
                      item.courseID == "prealemalema" &&
                      item.semesterID == courseState.semester
                  )
                  .map((item, i) => (
                    <li key={i}>
                      {" "}
                      <img src="/images/officebook.png" />
                      <p>{books && findBooks(item.bookID).bookName.bn}</p>
                    </li>
                  ))}
            </ul>
          </div>
        )}

        {courseState && courseState.shishumaktab == true && (
          <div className="book-grid">
            <h2> All Books of Shishu Maktab Running Class </h2>
            <ul>
              {classData &&
                classData
                  .filter((item) => item.courseID == "shishumaktab")
                  .map((item, i) => (
                    <li key={i}>
                      {" "}
                      <img src="/images/officebook.png" />
                      <p>{books && findBooks(item.bookID).bookName.bn}</p>
                    </li>
                  ))}
            </ul>
          </div>
        )}

        {courseState && courseState.farzeayinnajera == true && (
          <div className="book-grid">
            <h2> All Books of Farze Ayin Najera Running Class </h2>
            <ul>
              {classData &&
                classData
                  .filter((item) => item.courseID == "farzeayinnajera")
                  .map((item, i) => (
                    <li key={i}>
                      {" "}
                      <img src="/images/officebook.png" />
                      <p>{books && findBooks(item.bookID).bookName.bn}</p>
                    </li>
                  ))}
            </ul>
          </div>
        )}
      </div>
    </div>
  );
}

export default BookPageDesign;
