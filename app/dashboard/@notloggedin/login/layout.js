import MainMenu from "@/customComponents/Menu/Menu";
import SubMenu from "@/customComponents/SubMenu/SubMenu";
import Footer from "@/customComponents/Footer/Footer";
function notLoggedInlayout({ children }) {
  return (
    <>
      <MainMenu />
      <SubMenu />
      {children}
      <Footer />
    </>
  );
}

export default notLoggedInlayout;
