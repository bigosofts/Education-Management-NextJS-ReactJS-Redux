import AboutSection from "@/customComponents/aboutSection/AboutSection";
import Activities from "@/customComponents/activities/Activities";
import OstadSection from "@/customComponents/ostadSection/OstadSection";
import ReviewPage from "@/customComponents/ReviewPage/ReveiwPage";

export const metadata = {
  title: "About Us - ইন্টারনেট মাদরাসার সম্পর্কে বিস্তারিত",
  description: "মাদরাসা ও উস্তাদগণের বিবরণী",
};

function AboutPage() {
  return (
    <>
      <AboutSection />
      <Activities />
      {/* <OstadSection /> */}
      <ReviewPage />
    </>
  );
}

export default AboutPage;
