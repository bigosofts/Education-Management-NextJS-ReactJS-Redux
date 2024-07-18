import "./resultCardSlider.css";
import ButtonComponent from "@/customComponents/ButtonComponent/ButtonComponent";
import SliderResult from "@/customComponents/sliderResult/Slider";
function ResultCardSlider({ linkObj }) {
  return (
    <div className="resultCardSlider">
      <div className="resultCardSlider2">
        <SliderResult linkObj={linkObj} />
        <ButtonComponent text="All Results" link="/content/result" />
      </div>
    </div>
  );
}

export default ResultCardSlider;
