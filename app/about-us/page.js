import AboutSection from "@/customComponents/aboutSection/AboutSection";
import Activities from "@/customComponents/activities/Activities";
import OstadSection from "@/customComponents/ostadSection/OstadSection";
import ReviewPage from "@/customComponents/ReviewPage/ReveiwPage";
import MainMenu from "@/customComponents/Menu/Menu";
import SubMenu from "@/customComponents/SubMenu/SubMenu";
import Footer from "@/customComponents/Footer/Footer";
function AboutPage() {
  return (
    <>
      <MainMenu />
      <SubMenu />
      <AboutSection />
      <Activities />
      <OstadSection />
      <ReviewPage />
      <Footer />
    </>
  );
}

export default AboutPage;
