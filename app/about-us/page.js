import AboutSection from "@/customComponents/aboutSection/AboutSection";
import Activities from "@/customComponents/activities/Activities";
import OstadSection from "@/customComponents/ostadSection/OstadSection";
import ReviewPage from "@/customComponents/ReviewPage/ReveiwPage";
import MainMenu from "@/customComponents/Menu/Menu";
import SubMenu from "@/customComponents/SubMenu/SubMenu";
import Footer from "@/customComponents/Footer/Footer";

export const metadata = {
  title: "About Us - ইন্টারনেট মাদরাসার সম্পর্কে বিস্তারিত",
  description: "মাদরাসা ও উস্তাদগণের বিবরণী",
};

function AboutPage() {
  return (
    <>
      <MainMenu />
      <SubMenu pageName="About Us" />
      <AboutSection />
      <Activities />
      {/* <OstadSection /> */}
      <ReviewPage />
      <Footer />
    </>
  );
}

export default AboutPage;
