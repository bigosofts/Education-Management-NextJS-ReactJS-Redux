import MainMenu from "@/customComponents/Menu/Menu";
import SubMenu from "@/customComponents/SubMenu/SubMenu";
import Slider from "@/customComponents/slider/Slider";


import CustomVideoGallery from "@/customComponents/allCustomComponents/customVideoGallery/CustomVideoGallery";

import AbacusCourse from "@/customComponents/allCustomComponents/AbacusCourses/AbacusCourses";

import Footer from "@/customComponents/Footer/Footer";
import { selectDataTwo } from "@/apiservices/sliderapiservices";
import { selectDataTwo as selectCourses } from "@/apiservices/courseapiservices";

import { selectDataTwo as selectComment } from "@/apiservices/commentapiservice";
import { selectDataTwo as selectRichText } from "@/apiservices/richtextapiservices";

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

async function getData2(data) {
  
  const idArray = [];
  data.course.commentID.map((item) => {
    idArray.push(item);
  });


  const res3 = await selectComment({
    activeStatus: "active",
    commentId: { $in: idArray },
  });

  const res4 = await selectRichText({
    activeStatus: "active",
  });
 


   
    const dataObject2 = {
      comment: null,
      richText: null,
    };

    dataObject2.comment = res3.data;
    dataObject2.richText = res4.data;

    return dataObject2;
}

async function AbacusCourses({ params }) {
  const data = await getData(params);
 
  const data2 = await getData2(data);

  


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

  if (data && data2) {
    return (
      <>
        <MainMenu />
        <SubMenu pageName={params.courseID} />
        <Slider linkObj={ObjArray(data.slider)} />
        <AbacusCourse
          info={data.course}
          comment={data2.comment}
          richtext={data2.richText}
          parameter={params}
        />
        {/* <CustomVideoGallery /> */}
        <Footer />
      </>
    );
  }
}

export default AbacusCourses;
