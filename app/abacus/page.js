import MainMenu from "@/customComponents/Menu/Menu";
import SubMenu from "@/customComponents/SubMenu/SubMenu";
import Slider from "@/customComponents/slider/Slider";
import AbacusSectionOne from "@/customComponents/allCustomComponents/abacusSignupSection/AbacusSectionOne";
import Multiplication from "@/customComponents/allCustomComponents/multiplicationSection/MultiplicationSection";
import CustomVideoGallery from "@/customComponents/allCustomComponents/customVideoGallery/CustomVideoGallery";
import Footer from "@/customComponents/Footer/Footer";
import AbacusGenerator from "@/customComponents/allCustomComponents/abacusGenerator/AbacusGenerator";

import AboutAbacus from "@/customComponents/allCustomComponents/aboutAbacus/AboutAbacus";
import { selectDataTwo } from "@/apiservices/sliderapiservices";
import mytoast from "@/components/toast/toast";
import QuizApp from "@/customComponents/quizApplicationAbacusPage/quiz";
import PageClassAbacus from "@/components/abacusPageClass/pageClass";

async function getData() {
  const res = await selectDataTwo({
    activeStatus: "active",
    sliderName: "home",
  });

  if (res.status == "Alhamdulillah") {
    const dataObject = {
      slider: null,
    };

    dataObject.slider = res.data;

    return dataObject.slider;
  } else {
    mytoast.danger("Data fetching error. Try Refreshing the page");
  }
}
const ObjArray = (data) => {
  const letImageObject = [];
  data.map((item) => {
    letImageObject.push({
      image: item.sliderImageLink,
      caption: item.sliderId,
    });
  });
  return letImageObject;
};

async function Abacus() {
  const data = await getData();

  return (
    <>
      <MainMenu />
      <SubMenu pageName="Abacus" />
      <Slider linkObj={ObjArray(data)} />
      <AbacusGenerator />
      <QuizApp />

      <AbacusSectionOne />
      <AboutAbacus />
      <Multiplication />
     
     <PageClassAbacus/>
      {/* <CustomVideoGallery /> */}

      <Footer />
    </>
  );
}

export default Abacus;
