import QuizApp from "@/customComponents/quizApplicationAbacusPage/quiz";

function AbacusPlay() {
  return (
    <div className="bg-white">
      <div className="w-11/12 md:w-6/12 mt-12 md:mt-[80px] rounded-3xl mx-auto p-4 text-lg md:text-2xl bg-[#013030] text-white transition duration-500 ease-out mb-4">
        অ্যাবাকাস পাটিগাণিতিক গণনা সম্পাদনের একটি প্রাচীন যন্ত্র। আপনারা নিচের
        প্র্যাকটিস কীট থেকে সরাসরি জাপানিজ (সরোবান) অ্যাবাকাসের ব্যাবহার করতে
        পারবেন। খুব দ্রুত সময়ে অনলাইনেই প্র্যাকটিস করা যাবে এবং ফিসিক্যাল কীটের
        অনুপস্থিতিতে এটি একটি ভালো লার্নিং মাধ্যম হতে পারে।
      </div>
      <QuizApp />
    </div>
  );
}

export default AbacusPlay;
