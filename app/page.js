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
import { selectDataTwo } from "@/apiservices/sliderapiservices";
import { selectDataTwo as selectResults } from "@/apiservices/resultapiservices";
import { selectDataTwo as selectWorks } from "@/apiservices/workapiservices";
import Counter from "@/customComponents/counterDay/counter";


import ResultCardSlider from "@/customComponents/allCustomComponents/ResultCardSlider/ResultCardSlider";
// import GalleryCard from "@/customComponents/GalleryCard/GalleryCard";
import GalleryAll from "@/customComponents/GalleryALL/GalleryALL";

import HifzGrid from "@/customComponents/hifzGrid2/hifzGrid";

async function getData() {
  const res = await selectDataTwo({
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
    const dataObject = {
      sliders: [],
      results: [],
      works: [],
    };

    dataObject.sliders = res.data;
    dataObject.results = res2.data;
    dataObject.works = res3.data;

    return dataObject;
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

export default async function Home() {
  const data = await getData();

  return (
    <>
      <MainMenu />
      <SubMenu />
      <Slider linkObj={ObjArray(data.sliders)} />
      <Counter />
      <LiveSection />
      <BayanList />
      <ResultCardSlider linkObj={ObjArray2(data.results)} />
      <HifzGrid />
      <NoticeEvent />

      <CoursePage />
      <InfoPage />
      <ReviewPage />
      {/* <GalleryCard linkObj={ObjArray3(data3)} /> */}
      <GalleryAll linkObj={ObjArray3(data.works).slice(0, 8)} />
      <Footer />
    </>
  );
}
