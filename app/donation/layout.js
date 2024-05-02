import MainMenu from "@/customComponents/Menu/Menu";
import SubMenu from "@/customComponents/SubMenu/SubMenu";
import Footer from "@/customComponents/Footer/Footer";

export const metadata = {
  title: "Internet Madrasa - Donations",
  description:
    "বিশ্বের একমাত্র ও সর্ববৃহৎ পূর্ণাঙ্গ অনলাইন কওমী মাদরাসা যেখানে থেকে শিক্ষার্থীরা সরাসরি কওমী বেফাক বোর্ড থেকে পরীক্ষা দিচ্ছে। এখান থেকে পরীক্ষা দিয়ে পর্যায়ক্রমে মুতাওয়াসসিতাহ, সানাবিয়াতুল উলইয়া, ফজিলত ও তাকমিল (দাওরায়ে হাদীস) পাশ করে কৃতিত্বের সাথে ফারেগ হয়েছেন আলহামদুলিল্লাহ। অতএব অনলাইন থেকে পড়েও যে আলেম/আলেমা হওয়া যায় তার একটি উত্তম দৃষ্টান্ত স্থাপিত হয়েছে",
};

function DonationLayout({ children }) {
  return (
    <>
      <MainMenu />
      <SubMenu />
      {children}
      <Footer />
    </>
  );
}

export default DonationLayout;
