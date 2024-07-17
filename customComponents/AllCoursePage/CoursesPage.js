import { selectDataTwo } from "@/apiservices/courseapiservices";
import Image from "next/image";
import Link from "next/link";
import EnrollCondition from "@/components/dashboardPage/courses/enrollCondition";

import "./CoursesPage.css";
async function getData() {
  const res = await selectDataTwo({ activeStatus: "active" }, {});
  if (res) {
    const dataObject = {
      course: null,
    };

    dataObject.course = res.data;

    return dataObject.course;
  }
}

async function AllCoursePage() {
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
      <div className="CoursesPage">
        <div className="style-1">
          <section className="style-2">
            <h2 className="style-3">
              {true ? "আমাদের একাডেমিক ক্ল্যাস সমূহ" : ""}
            </h2>
          </section>
          <div className="style-4">
            <div className="style-5">
              {data.map((item, i) => (
                <div key={i} className="style-6">
                  <Link
                    href={`/content/classes/${item.courseCode}`}
                    target="_blank"
                    className="style-7"
                  ></Link>
                  <div className="style-8">
                    <Link
                      href={`/content/classes/${item.courseCode}`}
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
                        href={`/content/classes/${item.courseCode}`}
                        target="_blank"
                        className="style-12"
                      >
                        <h4 className="style-13">{item.title.bn} </h4>
                        <p className="style-14">
                          <i className="style-15" aria-hidden="true"></i> Starts
                          From {niceDate(item.startingDate.en)}
                        </p>
                      </Link>
                      <EnrollCondition courseCode={item.courseCode} />
                      <Link
                        href={`/content/classes/${item.courseCode}`}
                        className="style-17"
                      >
                        বিস্তারিত দেখুন
                      </Link>{" "}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default AllCoursePage;
