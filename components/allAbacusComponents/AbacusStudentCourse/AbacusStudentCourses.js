import "./AbacusStudentCourses.css";
import SingleCourses from "./SingleCourses";
function AbacusStudentCourses() {
  return (
    <div className="studentCourses">
      <h2 className="abcstdheading">
        {true
          ? "Some courses for the students"
          : "ছাত্রদের জন্য অ্যাবাকাস প্রশিক্ষণ কোর্সসমূহ"}
      </h2>
      <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-10">
        <SingleCourses />
        <SingleCourses />
        <SingleCourses />
        <SingleCourses />
      </div>
    </div>
  );
}

export default AbacusStudentCourses;
