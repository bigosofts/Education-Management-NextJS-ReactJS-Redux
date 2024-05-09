"use client";

import { useSelector } from "react-redux";
import CourseCurriculam from "@/customComponents/allCustomComponents/courseCurriculam/CourseCurriculam";
import CourseCurriculamTwo from "@/customComponents/allCustomComponents/courseCurriculam/CourseCurriculamTwo";

function CourseVideo() {
  const data = useSelector((state) => state.isAdmin.value);

  return (
    <div
      style={{
        width: "100%",
        height: "auto",
        overflowY: "scroll",
      }}
    >
      {data.data.userDetails.batchCount == "batch-20240420" && (
        <CourseCurriculam />
      )}
      {data.data.userDetails.batchCount == "batch-20240605" && (
        <CourseCurriculamTwo />
      )}

      {/* <div className="blur_system">
        <p style={{ textAlign: "center" }}>Coming soon ...</p>
      </div> */}
    </div>
  );
}

export default CourseVideo;
