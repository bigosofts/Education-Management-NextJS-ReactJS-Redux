"use client";

import MainMenu from "@/customComponents/Menu/Menu";
import SubMenu from "@/customComponents/SubMenu/SubMenu";
import Slider from "@/customComponents/slider/Slider";
import LiveSection from "@/customComponents/liveSection/Livesection";
import BayanList from "@/customComponents/Bayanlist/Bayanlist";
import NoticeEvent from "@/customComponents/NoticeEvent/NoticeEvent";
import Activities from "@/customComponents/activities/Activities";
import CoursePage from "@/customComponents/CoursesPage/CoursesPage";
import InfoPage from "@/customComponents/InfoPage/InfoPage";
import ReviewPage from "@/customComponents/ReviewPage/ReveiwPage";
import Footer from "@/customComponents/Footer/Footer";
import { selectData } from "@/apiservices/sliderapiservices";
import { selectData as selectResults } from "@/apiservices/resultapiservices";
import { useState, useEffect } from "react";
import mytoast from "@/components/toast/toast";
import Counter from "@/customComponents/counterDay/counter";

import ResultCardSlider from "@/customComponents/allCustomComponents/ResultCardSlider/ResultCardSlider";

export default function Home() {
  const [data, setData] = useState();
  const [data2, setData2] = useState();

  useEffect(() => {
    async function getData() {
      const res = await selectData({
        activeStatus: "active",
        sliderName: "home",
      });
      const res2 = await selectResults({
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
        image: item.picture,
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
        <Counter />
        <LiveSection />
        <BayanList />
        <ResultCardSlider linkObj={ObjArray2(data2)} />

        <NoticeEvent />

        <Activities />

        <CoursePage />
        <InfoPage />
        <ReviewPage />
        <Footer />
      </>
    );
  } else {
    return <div>Loading...</div>;
  }
}
