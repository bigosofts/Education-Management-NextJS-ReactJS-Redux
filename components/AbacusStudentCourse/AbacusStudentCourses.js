import "./AbacusStudentCourses.css";
import SingleCourses from "./SingleCourses";
function AbacusStudentCourses() {
  return (
    <div style={{padding:"5% 0%", width:"1200px", margin:"0px auto"}}>
       
        <h2 className="abcstdheading">ছাত্রদের জন্য অ্যাবাকাস প্রশিক্ষণ কোর্সসমূহ</h2>
      <div className="grid grid-cols-4 gap-10">
        
      <SingleCourses/>
      <SingleCourses/>
      <SingleCourses/>
      <SingleCourses/>
      
      </div>
    </div>
  );
}

export default AbacusStudentCourses;
