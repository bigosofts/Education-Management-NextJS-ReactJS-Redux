import MainMenu from "@/customComponents/Menu/Menu";
import SubMenu from "@/customComponents/SubMenu/SubMenu";
import Slider from "@/customComponents/slider/Slider";

import CustomVideoGallery from "@/customComponents/allCustomComponents/customVideoGallery/CustomVideoGallery";
import AbacusStudentCourses from "@/components/allAbacusComponents/AbacusStudentCourse/AbacusStudentCourses";
import AbacusCourse from "@/customComponents/allCustomComponents/AbacusCourses/AbacusCourses";

import Footer from "@/customComponents/Footer/Footer";

function AbacusCourses({ params }) {
  const letImageObject = [
    { image: "/images/abacus1.jpg", caption: "1" },
    { image: "/images/abacus2.png", caption: "2" },
    { image: "/images/abacus3.jpg", caption: "3" },
    { image: "/images/abacus1.jpg", caption: "4" },
    { image: "/images/abacus4.png", caption: "5" },
  ];
  return (
    <>
      <MainMenu />
      <SubMenu />
      <Slider linkObj={letImageObject} />
      <AbacusCourse />
      <CustomVideoGallery />
      <AbacusStudentCourses />
      <Footer />
    </>
  );
}

export default AbacusCourses;
