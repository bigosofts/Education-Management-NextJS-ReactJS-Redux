"use client";
import { useEffect } from "react";
function Slider() {
  useEffect(() => {
    import("./Slider.css");
  }, []);
  return (
    <div id="captioned-gallery">
      <figure className="slider">
        <figure>
          <img src="/images/flag2.jpg" alt />
          <figcaption>Hobbiton, New Zealand</figcaption>
        </figure>
        <figure>
          <img src="/images/flag3.jpg" alt />
          <figcaption>Wanaka, New Zealand</figcaption>
        </figure>
        <figure>
          <img src="/images/flag3.jpg" alt />
          <figcaption>Utah, United States</figcaption>
        </figure>
        <figure>
          <img src="/images/flag2.jpg" alt />
          <figcaption>Bryce Canyon, Utah, United States</figcaption>
        </figure>
        <figure>
          <img src="/images/flag3.jpg" alt />
          <figcaption>Hobbiton, New Zealand</figcaption>
        </figure>
      </figure>
    </div>
  );
}

export default Slider;
