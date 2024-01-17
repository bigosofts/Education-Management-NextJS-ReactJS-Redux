import MainMenu from "@/customComponents/Menu/Menu";
import SubMenu from "@/customComponents/SubMenu/SubMenu";
import Slider from "@/customComponents/slider/Slider";
import { selectDataTwo } from "@/apiservices/sliderapiservices";
import { selectDataTwo as selectWorks } from "@/apiservices/workapiservices";
import Footer from "@/customComponents/Footer/Footer";

import GalleryAll from "@/customComponents/GalleryALL/GalleryALL";


async function getData() {
  const res = await selectDataTwo({
    activeStatus: "active",
    sliderName: "home",
  });
  const res2 = await selectWorks({
    activeStatus: "active",
  });

  if (res.status == "Alhamdulillah" && res2.status == "Alhamdulillah") {
    const dataObject = {
      slider: null,
      work: null,
    };

    dataObject.slider = res.data;
    dataObject.work = res2.data;

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
      img: item.img,
      sid: item.sid,
      name: item.name,
    });
  });
  return letImageObject;
};

async function WorkPage() {

  const data = await getData();
  return (
    <>
      <MainMenu />
      <SubMenu pageName="Activities" />
      <Slider linkObj={ObjArray(data.slider)} />
      <GalleryAll linkObj={ObjArray2(data.work)} />
      <Footer />
    </>
  );
}

export default WorkPage;
