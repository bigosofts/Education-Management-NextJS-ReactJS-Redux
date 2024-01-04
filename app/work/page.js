"use client";
import { useState, useEffect } from "react";
import MainMenu from "@/customComponents/Menu/Menu";
import SubMenu from "@/customComponents/SubMenu/SubMenu";
import Slider from "@/customComponents/slider/Slider";
import { selectData } from "@/apiservices/sliderapiservices";
import { selectData as selectWorks } from "@/apiservices/workapiservices";
import Footer from "@/customComponents/Footer/Footer";

import GalleryAll from "@/customComponents/GalleryALL/GalleryALL";
import Loader from "@/customComponents/loader/Loader";
function WorkPage() {
  const [data, setData] = useState();
  const [data2, setData2] = useState();

  useEffect(() => {
    async function getData() {
      const res = await selectData({
        activeStatus: "active",
        sliderName: "home",
      });
      const res2 = await selectWorks({
        activeStatus: "active",
      });

      if (res.status == "Alhamdulillah" && res2.status == "Alhamdulillah") {
        setData(res.data);
        setData2(res2.data);
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

  const ObjArray2 = (data) => {
    const letImageObject = [];
    data.map((item) => {
      letImageObject.push({
        img: item.img,
        sid: item.sid,
        name: item.name,
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
        <GalleryAll linkObj={ObjArray2(data2)} />
        <Footer />
      </>
    );
  } else {
    return <Loader />;
  }
}

export default WorkPage;
