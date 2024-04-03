import MainMenu from "@/customComponents/Menu/Menu";
import SubMenu from "@/customComponents/SubMenu/SubMenu";
import Footer from "@/customComponents/Footer/Footer";

export const metadata = {
  title: "Student Login - শিক্ষার্থী এবং ওস্তাদ লগিন",
  description: "শিক্ষার্থী এবং ওস্তাদ ড্যাশবোর্ড লগিন",
};

function notLoggedInlayout({ children }) {
  return (
    <>
      <MainMenu />
      <SubMenu pageName="Login" />
      {children}
      <Footer />
    </>
  );
}

export default notLoggedInlayout;
