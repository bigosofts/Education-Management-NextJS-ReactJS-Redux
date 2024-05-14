import LiveSection from "@/customComponents/liveSection/Livesection";
import BayanList from "@/customComponents/Bayanlist/Bayanlist";
import NoticeEvent from "@/customComponents/NoticeEvent/NoticeEvent";
// import Activities from "@/customComponents/activities/Activities";
import CoursePage from "@/customComponents/CoursesPage/CoursesPage";
import InfoPage from "@/customComponents/InfoPage/InfoPage";
import ReviewPage from "@/customComponents/ReviewPage/ReveiwPage";
import Footer from "@/customComponents/Footer/Footer";
// import { selectDataTwo } from "@/apiservices/sliderapiservices";
import { selectDataLimit as selectResults } from "@/apiservices/resultapiservices";
import { selectDataTwo as selectWorks } from "@/apiservices/workapiservices";
import Counter from "@/customComponents/counterDay/counter";

import ResultCardSlider from "@/customComponents/allCustomComponents/ResultCardSlider/ResultCardSlider";
// import GalleryCard from "@/customComponents/GalleryCard/GalleryCard";
import GalleryAll from "@/customComponents/GalleryALLLimited/GalleryALL";

import HifzGrid from "@/customComponents/hifzGrid2/hifzGrid";
import AlemAlemaGrid from "@/customComponents/alemalemagrid/alemalemagrid";

function fisherYatesShuffle(array) {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
}

async function getData() {
  const res2 = await selectResults({
    activeStatus: "active",
  });
  const res3 = await selectWorks({
    activeStatus: "active",
  });
  if (res3.status == "Alhamdulillah") {
    const dataObject = {
      results: [],
      works: [],
    };

    dataObject.results = res2.data;
    dataObject.works = res3.data;
    fisherYatesShuffle(dataObject.results);
    fisherYatesShuffle(dataObject.works);
    // fisherYatesShuffle(dataObject.results);

    return dataObject;
  } else {
    mytoast.danger("Data fetching error. Try Refreshing the page");
  }
}

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
      <ResultCardSlider linkObj={ObjArray2(data.results)} />
      <AlemAlemaGrid number={4} />
      <Counter />
      <HifzGrid />

      <LiveSection />
      {/* <BayanList />  */}

      <CoursePage />

      <ReviewPage />

      <InfoPage />
      <NoticeEvent />

      {/* <GalleryCard linkObj={ObjArray3(data3)} /> */}
      <GalleryAll linkObj={ObjArray3(data.works).slice(0, 8)} />
    </>
  );
}
