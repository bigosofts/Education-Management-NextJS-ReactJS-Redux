"use client";

import MainMenu from "@/customComponents/Menu/Menu";
import SubMenu from "@/customComponents/SubMenu/SubMenu";
import Slider from "@/customComponents/slider/Slider";
import LiveSection from "@/customComponents/liveSection/Livesection";
import BayanList from "@/customComponents/Bayanlist/Bayanlist";
import NoticeEvent from "@/customComponents/NoticeEvent/NoticeEvent";
// import Activities from "@/customComponents/activities/Activities";
import CoursePage from "@/customComponents/CoursesPage/CoursesPage";
import InfoPage from "@/customComponents/InfoPage/InfoPage";
import ReviewPage from "@/customComponents/ReviewPage/ReveiwPage";
import Footer from "@/customComponents/Footer/Footer";
import { selectData } from "@/apiservices/sliderapiservices";
import { selectData as selectResults } from "@/apiservices/resultapiservices";
import { selectData as selectWorks } from "@/apiservices/workapiservices";
import { useState, useEffect } from "react";
import mytoast from "@/components/toast/toast";
import Counter from "@/customComponents/counterDay/counter";

import ResultCardSlider from "@/customComponents/allCustomComponents/ResultCardSlider/ResultCardSlider";
// import GalleryCard from "@/customComponents/GalleryCard/GalleryCard";
import GalleryAll from "@/customComponents/GalleryALL/GalleryALL";
import Loader from "@/customComponents/loader/Loader";

export default function Home() {
  const [data, setData] = useState();
  const [data2, setData2] = useState();
  const [data3, setData3] = useState();

  useEffect(() => {
    async function getData() {
      const res = await selectData({
        activeStatus: "active",
        sliderName: "home",
      });
      const res2 = await selectResults({
        activeStatus: "active",
      });
      const res3 = await selectWorks({
        activeStatus: "active",
      });
      if (
        res.status == "Alhamdulillah" &&
        res2.status == "Alhamdulillah" &&
        res3.status == "Alhamdulillah"
      ) {
        setData(res.data);
        setData2(res2.data);
        setData3(res3.data);
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
        image: item.picture,
      });
    });
    return letImageObject;
  };
  const ObjArray3 = (data) => {
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

  if (data && data2 && data3) {
    return (
      <>
        <MainMenu />
        <SubMenu />
        <Slider linkObj={ObjArray(data)} />
        <Counter />
        <LiveSection />
        <BayanList />
        <ResultCardSlider linkObj={ObjArray2(data2)} />

        <NoticeEvent />

        <CoursePage />
        <InfoPage />
        <ReviewPage />
        {/* <GalleryCard linkObj={ObjArray3(data3)} /> */}
        <GalleryAll linkObj={ObjArray3(data3).slice(0, 8)} />
        <Footer />
      </>
    );
  } else {
    return <Loader />;
  }
}
