import "./resultCardSlider.css";
import ButtonComponent from "@/customComponents/ButtonComponent/ButtonComponent";
import SliderResult from "@/customComponents/sliderResult/Slider";
function ResultCardSlider({ linkObj }) {
  return (
    <div className="resultCardSlider">
      <div className="resultCardSlider2">
        <SliderResult linkObj={linkObj} />
        <ButtonComponent text="All Befaq Results of our Students" link="/course"/>
      </div>
    </div>
  );
}

export default ResultCardSlider;
