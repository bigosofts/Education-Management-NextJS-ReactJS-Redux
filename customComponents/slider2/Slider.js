"use client";
import { useEffect } from "react";
function Slider(props) {
  let imageArray = props.linkObj;

  useEffect(() => {
    import("./Slider.css");
  }, []);
  return (
    <div id="captioned-gallery">
      <figure className="slider">
        {imageArray.map((item) => (
          <figure>
            <img src={item.image} alt />
            <figcaption>{item.caption}</figcaption>
          </figure>
        ))}
      </figure>
    </div>
  );
}

export default Slider;
