"use client";
import { useState, useEffect } from "react";
import { selectData } from "@/apiservices/courseapiservices";

import "./CoursesPage.css";

function CoursePage() {
  const [data, setData] = useState();
  useEffect(() => {
    async function getData() {
      const res = await selectData({}, {});
      if (res) {
        setData(res.data);
      }
    }
    getData();
  }, []);

  function niceDate(isoTime) {
    var date = new Date(isoTime);

    var options = {
      day: "numeric",
      month: "short",
      year: "numeric",
    };

    var formattedDate = date.toLocaleDateString("en-US", options);
    return formattedDate;
  }

  if (data) {
    return (
      <div className="CoursesPage">
        <div className="style-1">
          <section className="style-2">
            <h2 className="style-3"> Our Courses</h2>
          </section>
          <div className="style-4">
            <div className="style-5">
              {data.slice(0, 9).map((item, i) => (
                <div className="style-6">
                  <a
                    href={`/course/${item.courseCode}`}
                    target="_blank"
                    className="style-7"
                  ></a>
                  <div className="style-8">
                    <a
                      href={`/course/${item.courseCode}`}
                      target="_blank"
                      className="style-9"
                    >
                      <img
                        src={item.imageLink}
                        alt="Card image cap"
                        className="style-10"
                      />{" "}
                    </a>
                    <div className="style-11">
                      <a
                        href={`/course/${item.courseCode}`}
                        target="_blank"
                        className="style-12"
                      >
                        <h4 className="style-13">{item.title.en} </h4>
                        <p className="style-14">
                          <i className="style-15" aria-hidden="true"></i> Starts
                          From {niceDate(item.startingDate.en)}
                        </p>
                      </a>
                      <a
                        href={`/signup/madrasa-student`}
                        target="_blank"
                        className="style-16"
                      >
                        Enroll Now
                      </a>{" "}
                      <a
                        href={`/course/${item.courseCode}`}
                        className="style-17"
                      >
                        Course Details
                      </a>{" "}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    );
  } else {
    return <div>Loading ... </div>;
  }
}

export default CoursePage;
