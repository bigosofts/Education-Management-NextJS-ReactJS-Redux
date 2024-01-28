import SheetSubmission from "@/customComponents/allCustomComponents/AbacusSheetSubmission/SheetSubmission";

function AbacusSheetPage() {
  return (
    <div className="main-box w-full min-w-[250px] overflow-y-scroll mx-5 pb-10">
      <h1 className="animate__animated animate__backInDown text-xl  md:text-5xl font-bold py-10  text-center">
        Abacus Sheet Management
      </h1>
      <SheetSubmission />
    </div>
  );
}

export default AbacusSheetPage;
