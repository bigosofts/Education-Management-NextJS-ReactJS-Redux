import CourseCurriculam from "@/customComponents/allCustomComponents/courseCurriculam/CourseCurriculam";

function CourseVideo() {
  return (
    <div
      style={{
        width: "100%",
        height: "auto",
        overflowY: "scroll",
      }}
    >
      <CourseCurriculam />
      {/* <div className="blur_system">
        <p style={{ textAlign: "center" }}>Coming soon ...</p>
      </div> */}
    </div>
  );
}

export default CourseVideo;
