"use client";
import { selectData } from "@/apiservices/noticeapiservices";
import { selectData as selectEvent } from "@/apiservices/eventapiservices";
import { selectData as selectPost } from "@/apiservices/postapiservices";
import Link from "next/link";

import { useState, useEffect } from "react";

import "./Noticeevent.css";
function NoticeEvent() {
  const [data, setData] = useState();
  const [data2, setData2] = useState();
  const [data3, setData3] = useState();

  useEffect(() => {
    async function getData() {
      const res = await selectData({
        activeStatus: "active",
      });
      const res2 = await selectEvent({
        activeStatus: "active",
      });
      const res3 = await selectPost({
        activeStatus: "active",
      });

      if (res.status == "Alhamdulillah") {
        setData(res.data);
        setData2(res2.data);
        setData3(res3.data);
      } else {
        mytoast.danger("Data fetching error. Try Refreshing the page");
      }
    }
    getData();
  }, []);

  function dayDate(isoTime) {
    var date = new Date(isoTime);

    var options = {
      day: "numeric",
    };

    var formattedDate = date.toLocaleDateString("en-US", options);
    return formattedDate;
  }
  function yearDate(isoTime) {
    var date = new Date(isoTime);

    var options = {
      year: "numeric",
    };

    var formattedDate = date.toLocaleDateString("en-US", options);
    return formattedDate;
  }
  function monthDate(isoTime) {
    var date = new Date(isoTime);

    var options = {
      month: "short",
    };

    var formattedDate = date.toLocaleDateString("en-US", options);
    return formattedDate;
  }

  function dayDifference(iso1, iso2) {
    const date1 = new Date(iso1);
    const date2 = new Date(iso2);

    const timeDifference = date1 - date2;

    const daysDifference = timeDifference / (1000 * 60 * 60 * 24);
    return Math.floor(daysDifference);
  }

  if (data && data2 && data3) {
    return (
      <div className="NoticeEvent">
        <div className="style-1">
          <div className="style-2">
            <div className="style-3">
              <div className="style-4">
                <h2 className="style-5">Notice</h2>
                <div className="style-6">
                  {data.map((item) => (
                    <div className="style-7">
                      <div className="style-8">
                        <span className="style-9">
                          {dayDate(item.noticeUpdatedDate)}
                        </span>
                        <br className="style-10" />{" "}
                        <span className="style-11">
                          {monthDate(item.noticeUpdatedDate)}
                        </span>{" "}
                        <span className="style-12">
                          {yearDate(item.noticeUpdatedDate)}
                        </span>
                      </div>
                      <div className="style-13">
                        <h6 className="style-14">
                          <Link href={item.noticeLink}>
                            {item.noticeTitle.en}
                          </Link>
                        </h6>
                      </div>
                      <div className="style-15"></div>
                    </div>
                  ))}
                </div>{" "}
                <a href="notice.php" className="style-70">
                  View all Notices
                </a>
              </div>
            </div>
            <div className="style-71">
              <div className="style-72">
                <h2 className="style-73">Events</h2>
                <div className="style-74">
                  {data2.map((item) => (
                    <div className="style-75">
                      <div className="style-76">
                        <span className="style-77">
                          {dayDate(item.eventUpdatedDate)}
                        </span>
                        <br className="style-78" />{" "}
                        <span className="style-79">
                          {monthDate(item.eventUpdatedDate)}
                        </span>{" "}
                        <span className="style-80">
                          {yearDate(item.eventUpdatedDate)}
                        </span>
                      </div>
                      <div className="style-81">
                        <h6 className="style-82">{item.eventTitle.en} </h6>
                        <p className="style-83">
                          <i className="style-84" aria-hidden="true"></i>{" "}
                          {dayDifference(
                            item.eventUpcomingDate.en,
                            new Date(Date.now()).toISOString()
                          )}{" "}
                          days left
                        </p>
                      </div>
                      <div className="style-85"></div>
                    </div>
                  ))}
                </div>{" "}
                <a href="events.php" className="style-119">
                  View all Events
                </a>
              </div>
            </div>
            <div className="style-120">
              <div className="style-121">
                <h2 className="style-122">Latest from blog</h2>
                <div className="style-123" data-ride="carousel">
                  <div className="style-128">
                    <div className="style-129">
                      <div className="style-130">
                        {data3.slice(0, 4).map((item) => (
                          <div className="style-131">
                            <div className="style-132">
                            <Link href={`/${item.postId}`}><h1>{item.postTitle.en}</h1></Link>
                              <img
                                src={item.postImageLink}
                                alt="NewsPhoto"
                                className="style-133"
                              />
                              
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  } 
}

export default NoticeEvent;
