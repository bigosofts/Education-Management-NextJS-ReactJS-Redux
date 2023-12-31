import "./resultCardSlider.css";
import SliderResult from "@/customComponents/sliderResult/Slider";
function ResultCardSlider({ linkObj }) {
  return (
    <div className="resultCardSlider">
      <div className="resultCardSlider2">
        <SliderResult linkObj={linkObj} />
      </div>
    </div>
  );
}

export default ResultCardSlider;
