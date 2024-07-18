import "./GalleryALL.css";
import ButtonComponent from "../ButtonComponent/ButtonComponent";
import Image from "next/image";
import React from "react";

function GalleryAll({ linkObj }) {
  return (
    <div className="galleryALL">
      <h1
        className="galleryALLh"
        style={{
          marginBottom: "10px",
        }}
      >
        {true
          ? "আমাদের মাদ্রাসার তলেব/তলেবাদের কার্যক্রমসমূহ"
          : "Some Handwork of Our Madrasa Talib/Taliba"}
      </h1>
      <div className="gallery">
        {linkObj.slice(0, 8).map((item, i) => (
          <React.Fragment key={i}>
            <div className="galleryGridTemplate">
              <a href={`#${i}`}>
                <Image
                  width={300}
                  height={300}
                  src={item.img}
                  loading="lazy"
                  alt=""
                />
              </a>
              <p style={{ textAlign: "center", marginTop: "20px" }}>
                {item.sid}
              </p>
              <p style={{ textAlign: "center", marginBottom: "20px" }}>
                {item.name}
              </p>
            </div>

            <div className="lightbox" id={i}>
              <a href="#" className="close">
                &times;
              </a>
              <div>
                <a href="#">
                  <img src={item.img} loading="lazy" alt="" />
                </a>
              </div>
            </div>
          </React.Fragment>
        ))}
      </div>
      <ButtonComponent text="All Activities" link="/content/work" />
    </div>
  );
}

export default GalleryAll;
