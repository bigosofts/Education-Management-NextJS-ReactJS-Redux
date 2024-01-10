import MainMenu from "@/customComponents/Menu/Menu";
import SubMenu from "@/customComponents/SubMenu/SubMenu";
import Slider from "@/customComponents/slider/Slider";

import CustomVideoGallery from "@/customComponents/allCustomComponents/customVideoGallery/CustomVideoGallery";
import AbacusStudentCourses from "@/components/allAbacusComponents/AbacusStudentCourse/AbacusStudentCourses";
import AbacusCourse from "@/customComponents/allCustomComponents/AbacusCourses/AbacusCourses";

import Footer from "@/customComponents/Footer/Footer";
import { selectDataTwo } from "@/apiservices/sliderapiservices";
import { selectDataTwo as selectCourses } from "@/apiservices/courseapiservices";

async function getData(params) {
  const res = await selectDataTwo({
    activeStatus: "active",
    sliderName: "home",
  });
  const res2 = await selectCourses({
    activeStatus: "active",
    courseCode: `${params.courseID}`,
  });
  if (res.status == "Alhamdulillah" && res2.status == "Alhamdulillah") {
    const dataObject = {
      slider: null,
      course: null,
    };

    dataObject.slider = res.data;
    dataObject.course = res2.data[0];

    return dataObject;
  }
}

async function AbacusCourses({ params }) {
  const data = await getData(params);

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
      <SubMenu pageName={params.courseID} />
      <Slider linkObj={ObjArray(data.slider)} />
      <AbacusCourse info={data.course} />
      <CustomVideoGallery />
      <AbacusStudentCourses />
      <Footer />
    </>
  );
}

export default AbacusCourses;
