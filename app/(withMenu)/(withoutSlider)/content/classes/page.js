



import AllCoursePage from "@/customComponents/AllCoursePage/CoursesPage";

export const metadata = {
  title: "Classes - একাডেমিক ক্লাসসমূহ",
  description: "কওমী মাদরাসার সিলেবাস অনুযায়ী ক্লাসসমূহ",
};



async function AbacusCourses({ params }) {


  

  return (
    <>
     
      <AllCoursePage />
   
    </>
  );
}

export default AbacusCourses;
