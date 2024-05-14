// import Slider from "@/customComponents/slider/Slider";

// import { selectDataTwo } from "@/apiservices/sliderapiservices";

// function fisherYatesShuffle(array) {
//   for (let i = array.length - 1; i > 0; i--) {
//     const j = Math.floor(Math.random() * (i + 1));
//     [array[i], array[j]] = [array[j], array[i]];
//   }
// }

// async function getData() {
//   const res = await selectDataTwo({
//     activeStatus: "active",
//     sliderName: "home",
//   });
//   if (res.status == "Alhamdulillah") {
//     const dataObject = {
//       sliders: [],
//     };
//     dataObject.sliders = res.data;
//     fisherYatesShuffle(dataObject.sliders);

//     return dataObject;
//   }
// }

// const ObjArray = (data) => {
//   const letImageObject = [];
//   data.map((item) => {
//     letImageObject.push({
//       image: item.sliderImageLink,
//       caption: item.sliderId,
//     });
//   });

//   return letImageObject;
// };

// export default async function WithSliderLayout({ children }) {
//   const data = await getData();

//   return (
//     <>
//       <Slider linkObj={ObjArray(data.sliders)} />
//       {children}
//     </>
//   );
// }

//Here we will add hero section code layout
