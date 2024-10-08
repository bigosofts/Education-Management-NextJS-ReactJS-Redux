"use client";
import { ImCross } from "react-icons/im";
import "animate.css";
import StatisticsTable from "@/components/statisticsTable/hifzTable";
import StatisticsTableTeacher from "@/components/statisticsTable/abacusTeacher";
function DetailData({ data, backdropFalse, title, abacus_teacher, allData }) {
  return (
    <div
      style={{
        top: "0px",
        left: "0px",
        backgroundColor: "rgba(0,0,0,0.7)",
        width: "100%",
        height: "100vh",
      }}
      className="fixed animate__animated animate__zoomIn"
    >
      {abacus_teacher ? (
        <StatisticsTableTeacher title={title} data={data} allData={allData} />
      ) : (
        <StatisticsTable title={title} data={data} allData={allData} />
      )}

      <div
        onClick={backdropFalse}
        style={{
          top: "100px",
          right: "30px",
          position: "absolute",
          color: "#fff",
          cursor: "pointer",
        }}
      >
        <ImCross size={30} />
      </div>
    </div>
  );
}

export default DetailData;
