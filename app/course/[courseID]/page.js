"use client";
import MainMenu from "@/customComponents/Menu/Menu";
import SubMenu from "@/customComponents/SubMenu/SubMenu";
import Slider from "@/customComponents/slider/Slider";

import CustomVideoGallery from "@/customComponents/allCustomComponents/customVideoGallery/CustomVideoGallery";
import AbacusStudentCourses from "@/components/allAbacusComponents/AbacusStudentCourse/AbacusStudentCourses";
import AbacusCourse from "@/customComponents/allCustomComponents/AbacusCourses/AbacusCourses";

import Footer from "@/customComponents/Footer/Footer";
import { selectData } from "@/apiservices/sliderapiservices";
import { selectData as selectCourses } from "@/apiservices/courseapiservices";
import { useState, useEffect } from "react";

function AbacusCourses({ params }) {
  const [data, setData] = useState();
  const [data2, setData2] = useState();

  useEffect(() => {
    async function getData() {
      const res = await selectData({
        activeStatus: "active",
        sliderName: "home",
      });
      const res2 = await selectCourses({
        activeStatus: "active",
        courseCode: `${params.courseID}`,
      });
      if (res.status == "Alhamdulillah") {
        setData(res.data);
      } else {
        mytoast.danger("Data fetching error. Try Refreshing the page");
      }
      if (res2.status == "Alhamdulillah") {
        setData2(res2.data[0]);
      } else {
        mytoast.danger("Data fetching error. Try Refreshing the page");
      }
    }
    getData();
  }, []);

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
        <SubMenu />
        <Slider linkObj={ObjArray(data)} />
        <AbacusCourse info={data2} />
        <CustomVideoGallery />
        <AbacusStudentCourses />
        <Footer />
      </>
    );
  } else {
    return <div>Loading...</div>;
  }
}

export default AbacusCourses;
