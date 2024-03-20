import AbacusGenerator from "@/customComponents/allCustomComponents/abacusGenerator/AbacusGenerator";

function AbacusSheetGenerator() {
  return (
    <div className="bg-white pb-[100px]">
      <AbacusGenerator />
      <div className="w-11/12 md:w-6/12 mt-12 md:mt-[80px] rounded-3xl mx-auto p-4 text-lg md:text-2xl bg-[#013030] text-white transition duration-500 ease-out mb-4">
        অ্যাবাকাস শীট জেনারেটর অ্যাবাকাসের বিভিন্ন ফরমূলা অনুযায়ী প্রাকটিস শীট
        জেনারেট করতে সক্ষম যা আপনার শিক্ষাকে আরো সহজতর করে তুলবে। খুব শীঘ্রই
        আপনারা এই টুলসের ব্যাবহার করতে পারবেন ইং শা আল্লাহ।
      </div>
    </div>
  );
}

export default AbacusSheetGenerator;
