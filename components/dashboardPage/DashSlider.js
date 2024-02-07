import Slider from "@/customComponents/slider/Slider";
import { selectDataTwo } from "@/apiservices/sliderapiservices";

async function getData() {
  const res = await selectDataTwo({
    activeStatus: "active",
    sliderName: "home",
  });

  if (res.status == "Alhamdulillah") {
    const dataObject = {
      sliders: [],
    };

    dataObject.sliders = res.data;

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

async function DashSlider() {
  const data = await getData();
  return (
    <div className="shadow-md border-2 rounded-3xl overflow-hidden">
      <Slider linkObj={ObjArray(data.sliders)} />
    </div>
  );
}

export default DashSlider;
