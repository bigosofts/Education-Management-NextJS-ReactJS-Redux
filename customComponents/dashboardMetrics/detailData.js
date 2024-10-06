"use client";
import { ImCross } from "react-icons/im";
import "animate.css";
import StatisticsTable from "@/components/statisticsTable/hifzTable";
function DetailData({ data, backdropFalse, title }) {
  
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
      <StatisticsTable title={title} data={data} />
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
