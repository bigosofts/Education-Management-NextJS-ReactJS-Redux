import MainMenu from "@/customComponents/Menu/Menu";
import SubMenu from "@/customComponents/SubMenu/SubMenu";
import Slider from "@/customComponents/slider/Slider";
import AbacusSectionOne from "@/customComponents/allCustomComponents/abacusSignupSection/AbacusSectionOne";
import Multiplication from "@/customComponents/allCustomComponents/multiplicationSection/MultiplicationSection";
import CustomVideoGallery from "@/customComponents/allCustomComponents/customVideoGallery/CustomVideoGallery";
import Footer from "@/customComponents/Footer/Footer";
import AbacusGenerator from "@/customComponents/allCustomComponents/abacusGenerator/AbacusGenerator";
import AbacusStudentCourses from "@/components/allAbacusComponents/AbacusStudentCourse/AbacusStudentCourses";
import AboutAbacus from "@/customComponents/allCustomComponents/aboutAbacus/AboutAbacus";
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
