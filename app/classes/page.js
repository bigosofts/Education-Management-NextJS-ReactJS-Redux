import MainMenu from "@/customComponents/Menu/Menu";
import SubMenu from "@/customComponents/SubMenu/SubMenu";
import Slider from "@/customComponents/slider/Slider";

import Footer from "@/customComponents/Footer/Footer";
import { selectDataTwo } from "@/apiservices/sliderapiservices";
import AllCoursePage from "@/customComponents/AllCoursePage/CoursesPage";

export const metadata = {
  title: "Classes - একাডেমিক ক্লাসসমূহ",
  description: "কওমী মাদরাসার সিলেবাস অনুযায়ী ক্লাসসমূহ",
};

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

    return dataObject;
  }
}

async function AbacusCourses({ params }) {
  const data = await getData();

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

  return (
    <>
      <MainMenu />
      <SubMenu pageName="Courses" />
      <Slider linkObj={ObjArray(data.slider)} />
      <AllCoursePage />
      <Footer />
    </>
  );
}

export default AbacusCourses;
