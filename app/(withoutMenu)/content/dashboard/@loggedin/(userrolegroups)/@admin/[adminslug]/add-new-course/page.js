const {
  default: NewCourseForm,
} = require("@/components/courseform/newcourseform");

const Page = () => {
  return (
    <div className="main-box w-full min-w-[250px] overflow-y-scroll mx-5 pb-10">
      <h1 className="text-xl  md:text-5xl font-bold py-10  text-center bg-slate-500 text-white rounded-md mb-10">
        {" "}
        Add New Course{" "}
      </h1>
      <NewCourseForm />
    </div>
  );
};

export default Page;
