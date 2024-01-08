"use client";
import MainMenu from "@/customComponents/Menu/Menu";
import SubMenu from "@/customComponents/SubMenu/SubMenu";
import Slider from "@/customComponents/slider/Slider";

import Footer from "@/customComponents/Footer/Footer";
import { selectData } from "@/apiservices/sliderapiservices";
import { useState, useEffect } from "react";
import Loader from "@/customComponents/loader/Loader";
import HifzGrid from "@/customComponents/hifzGrid/hifzGrid";

function AbacusCourses({ params }) {
  const [data, setData] = useState();
 

  useEffect(() => {
    async function getData() {
      const res = await selectData({
        activeStatus: "active",
        sliderName: "home",
      });
      
      if (res.status == "Alhamdulillah") {
        setData(res.data);
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

  if (data) {
    return (
      <>
        <MainMenu />
        <SubMenu />
        <Slider linkObj={ObjArray(data)} />
        <HifzGrid/>
    
        <Footer />
      </>
    );
  } else {
    return <Loader />;
  }
}

export default AbacusCourses;
