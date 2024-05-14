"use client";
import "../../assets/css/stylefront.css";
import { useEffect, useState } from "react";
import { selectData } from "@/apiservices/resultapiservices";
import { useSearchParams } from "next/navigation";
import PopularChoiceGrid from "@/customComponents/PopularChoiceGrid/PopularChoiceGrid";
import MainMenu from "@/customComponents/Menu/Menu";
import SubMenu from "@/customComponents/SubMenu/SubMenu";
import Slider from "@/customComponents/slider/Slider";
import SearchComponent from "@/customComponents/SearchComponent/SearchComponent";
import Loader from "@/customComponents/loader/Loader";

function ResultPageComponent({children}) {
  const [data, setData] = useState([]);
 
  const searchParams = useSearchParams();

  const marhala = searchParams.get("marhala");
  const roll = searchParams.get("roll");
  const passingYear = searchParams.get("passingYear");
  const grade = searchParams.get("grade");

  useEffect(() => {
    async function settingData() {
      try {
        const res = await selectData({
          activeStatus: "active",
          marhala: marhala ? marhala : undefined,
          resultRollNo: roll ? roll : undefined,
          passingYear: passingYear ? passingYear : undefined,
          studentGrade: grade ? grade : undefined,
        });
        
        if (res) {
          setData(res.data);
        }
        
      } catch (error) {
        console.error("Error in settingData:", error);
      }
    }
    settingData();
  }, []);

  

  if (data) {
 
    return (
      <>
        
        <div className="travelpage-container">
          <div style={{ margin: "auto", paddingTop:"50px" }}>
            <SearchComponent />
            <PopularChoiceGrid detailData={data} />
          </div>
        </div>
        {children}
      </>
    );
  } else {
    return <Loader />;
  }
}

export default ResultPageComponent;
