import MainMenu from "@/customComponents/Menu/Menu";
import SubMenu from "@/customComponents/SubMenu/SubMenu";
import Footer from "@/customComponents/Footer/Footer";

export const metadata = {
  title: "Internet Madrasa",
  description: "A complete koumi madrasa",
};

export default function SignupLayout({ children }) {
  return (
    <>
      <MainMenu />
      <SubMenu />
      {children}
      <Footer />
    </>
  );
}
