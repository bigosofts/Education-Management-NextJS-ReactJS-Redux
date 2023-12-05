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
export default function Home() {
  const letImageObject = [
    { image: "/images/flag2.jpg", caption: "1" },
    { image: "/images/flag3.jpg", caption: "2" },
    { image: "/images/flag3.jpg", caption: "3" },
    { image: "/images/flag3.jpg", caption: "4" },
    { image: "/images/flag3.jpg", caption: "5" },
  ];
  return (
    <>
      <MainMenu />
      <SubMenu />
      <Slider linkObj={letImageObject}/>
      <LiveSection/>
      <BayanList/>
      <NoticeEvent/>
      <Activities/>
      <CoursePage/>
      <InfoPage/>
      <ReviewPage/>
      <Footer/>
    </>
  );
}
