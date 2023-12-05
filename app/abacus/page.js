import MainMenu from "@/customComponents/Menu/Menu";
import SubMenu from "@/customComponents/SubMenu/SubMenu";
import Slider from "@/customComponents/slider/Slider";
import AbacusSectionOne from "@/customComponents/abacusSignupSection/AbacusSectionOne";
import Multiplication from "@/customComponents/multiplicationSection/MultiplicationSection";
import CustomVideoGallery from "@/customComponents/customVideoGallery/CustomVideoGallery";
import Footer from "@/customComponents/Footer/Footer";
import AbacusGenerator from "@/customComponents/abacusGenerator/AbacusGenerator";
import AbacusStudentCourses from "@/components/AbacusStudentCourse/AbacusStudentCourses";
import AboutAbacus from "@/customComponents/aboutAbacus/AboutAbacus";
function Abacus() {
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
      <AbacusGenerator />
      
      <AbacusSectionOne />
      <AboutAbacus />
      <Multiplication />
      <CustomVideoGallery />
      <AbacusStudentCourses />
      <Footer />
    </>
  );
}

export default Abacus;
