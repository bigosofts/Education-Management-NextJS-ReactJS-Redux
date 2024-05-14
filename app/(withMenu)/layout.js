import SubMenu from "@/customComponents/SubMenu/SubMenu";
import MainMenu from "@/customComponents/Menu/Menu";

import Footer from "@/customComponents/Footer/Footer";

export default function RootLayout({ children }) {
  return (
    <div className="completeWrapper">
      <MainMenu />
      <SubMenu pageName="Home" />

      {children}
      <Footer />
    </div>
  );
}
