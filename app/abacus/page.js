"use client";

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
import { selectData } from "@/apiservices/sliderapiservices";
import mytoast from "@/components/toast/toast";

import { useState, useEffect } from "react";

function Abacus() {
  const [data, setData] = useState();

  useEffect(() => {
    async function getData() {
      const res = await selectData({
        activeStatus: "active",
        sliderName: "abacus",
      });

      if (res.status == "Alhamdulillah") {
        setData(res.data);
      } else {
        console.log(res);
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

  if (data) {
    return (
      <>
        <MainMenu />
        <SubMenu />
        <Slider linkObj={ObjArray(data)} />
        <AbacusGenerator />

        <AbacusSectionOne />
        <AboutAbacus />
        <Multiplication />
        <CustomVideoGallery />
        <AbacusStudentCourses />
        <Footer />
      </>
    );
  } else {
    return <div> Loading ... </div>;
  }
}

export default Abacus;
