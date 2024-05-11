"use client";
import { useEffect, useState } from "react";
import "./CourseCurriculam.css";
import { selectDataTwo } from "@/apiservices/videoapiservices";

function CourseCurriculamTeacherTwo() {
  const [video, setVideo] = useState();

  useEffect(() => {
    async function getData() {
      const res = await selectDataTwo(
        { VideoGroupID: "abacus_teacher_two", activeStatus: "active" },
        null
      );
      if (res.status == "Alhamdulillah") {
        setVideo(res.data[0]);
      }
    }
    getData();
  }, []);

  return (
    <div id="wrapper">
      <div id="mainContent">
        <div id="videoSizer">
          <div id="videoWrapper">
            <iframe
              name="tutorial"
              width="560"
              height="315"
              src="https://www.youtube.com/embed/XMWssPiwxjs?si=Y_B5nzkOt4OCCcpV
              "
              frameborder="0"
              allowfullscreen
            ></iframe>
          </div>
        </div>
        <div id="videoList">
          {video &&
            video.videos.map((item, i) => (
              <a href={`${item.link}?rel=0&amp;showinfo=0`} target="tutorial">
                {item.title.bn}
              </a>
            ))}
        </div>
      </div>

      {/* <div className="blur_system">
        <p style={{ textAlign: "center" }}>Coming soon ...</p>
      </div> */}
    </div>
  );
}

export default CourseCurriculamTeacherTwo;
