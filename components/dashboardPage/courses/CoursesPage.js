import { selectDataTwo } from "@/apiservices/courseapiservices";
import Image from "next/image";
import Link from "next/link";

import EnrollCondition from "./enrollCondition";

import "./CoursesPage.css";
async function getData() {
  const res = await selectDataTwo({}, {});
  if (res) {
    const dataObject = {
      course: null,
    };

    dataObject.course = res.data;

    return dataObject.course;
  }
}

async function DashCourses({ setProfileUpdate }) {
  const data = await getData();

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
      <>
        <div className="CoursesPage2">
          <div className="style-1">
            <h1 className="text-lg md:text-3xl mt-2 text-slate-500">Classes</h1>

            <div className="style-4">
              <div className="style-5">
                {data.map((item, i) => (
                  <div key={i} className="style-6">
                    <Link
                      href={`/classes/${item.courseCode}`}
                      target="_blank"
                      className="style-7"
                    ></Link>
                    <div className="style-8">
                      <Link
                        href={`/classes/${item.courseCode}`}
                        target="_blank"
                        className="style-9"
                      >
                        <Image
                          width={370}
                          height={285}
                          src={item.imageLink}
                          alt="Card image cap"
                          className="style-10"
                        />{" "}
                      </Link>
                      <div className="style-11">
                        <Link
                          href={`/classes/${item.courseCode}`}
                          target="_blank"
                          className="style-12"
                        >
                          <h4 className="style-13">{item.title.en} </h4>
                          <p className="style-14">
                            <i className="style-15" aria-shidden="true"></i>{" "}
                            Starts From {niceDate(item.startingDate.en)}
                          </p>
                        </Link>
                        <EnrollCondition
                          courseCode={item.courseCode}
                          setProfileUpdate={setProfileUpdate}
                        />
                        <Link
                          href={`/classes/${item.courseCode}`}
                          className="style-17"
                        >
                          Course Details
                        </Link>{" "}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </>
    );
  }
}

export default DashCourses;
