import "./layout.css";

function EducationLayout({ children }) {
  return (
    <div
      style={{
        marginTop: "150px",
        marginX: "auto",
        width: "95%",
        height: "100vh",
        overflowY: "scroll",
      }}
    >
      <div className="title-edu ml-4 md:ml-4 md:px-4 py-10 md:py-12">
        <h1 className="h1-edu text-2xl md:text-4xl text-slate-500 mb-[20px]">
          Education Management
        </h1>
        {children}
      </div>
    </div>
  );
}

export default EducationLayout;
