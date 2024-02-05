import React from "react";
import CourseCurriculam from "@/customComponents/allCustomComponents/courseCurriculam/CourseCurriculam";

function page(props) {
  return (
    <div
      style={{
        marginTop: "80px",
        marginLeft: "20px",
        width: "100%",
        height: "auto",
        overflowY: "scroll",
      }}
    >
      <CourseCurriculam />
    </div>
  );
}

export default page;
