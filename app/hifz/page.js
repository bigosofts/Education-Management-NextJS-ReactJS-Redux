import MainMenu from "@/customComponents/Menu/Menu";
import SubMenu from "@/customComponents/SubMenu/SubMenu";
import Slider from "@/customComponents/slider/Slider";

import Footer from "@/customComponents/Footer/Footer";
import { selectDataTwo } from "@/apiservices/sliderapiservices";

import HifzGrid from "@/customComponents/hifzGrid/hifzGrid";

async function getData() {
  const res = await selectDataTwo({
    activeStatus: "active",
    sliderName: "home",
  });

  if (res.status == "Alhamdulillah") {
    const dataObject = {
      slider: null,
    };

    dataObject.slider = res.data;

    return dataObject.slider;
  } else {
    mytoast.danger("Data fetching error. Try Refreshing the page");
  }
}

async function HifzPage() {
  const data = await getData();

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
      <SubMenu pageName="Hifz" />
      <Slider linkObj={ObjArray(data)} />
      <HifzGrid />

      <Footer />
    </>
  );
}

export default HifzPage;
