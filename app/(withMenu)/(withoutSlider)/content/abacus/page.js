import AbacusSectionOne from "@/customComponents/allCustomComponents/abacusSignupSection/AbacusSectionOne";
import Multiplication from "@/customComponents/allCustomComponents/multiplicationSection/MultiplicationSection";
import CustomVideoGallery from "@/customComponents/allCustomComponents/customVideoGallery/CustomVideoGallery";

import AbacusGenerator from "@/customComponents/allCustomComponents/abacusGenerator/AbacusGenerator";

import AboutAbacus from "@/customComponents/allCustomComponents/aboutAbacus/AboutAbacus";

import QuizApp from "@/customComponents/quizApplicationAbacusPage/quiz";
import PageClassAbacus from "@/components/abacusPageClass/pageClass";

export const metadata = {
  title: "Abacus Page - আব্যাকাস গণিত শিক্ষা এবং প্রশিক্ষণ ক্লাসসমূহ",
  description: "জাপানিজ অ্যাবাকাস শিক্ষা, প্রশিক্ষণ, বই এবং কীট বিক্রয়",
};

async function Abacus() {
  return (
    <>
      <AbacusGenerator />
      <QuizApp />

      <AbacusSectionOne />
      <AboutAbacus />
      <Multiplication />

      <PageClassAbacus />
      {/* <CustomVideoGallery /> */}
    </>
  );
}

export default Abacus;
