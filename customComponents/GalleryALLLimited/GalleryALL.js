import "./GalleryALL.css";
import ButtonComponent from "../ButtonComponent/ButtonComponent";
import Image from "next/image";

function GalleryAll({ linkObj }) {
  return (
    <div className="galleryALL">
      <h1
        className="galleryALLh"
        style={{
          marginBottom: "50px",
        }}
      >
        {" "}
        Some Handwork of Our Madrasa Talib/Taliba
      </h1>
      <div className="gallery">
        {linkObj.slice(0, 8).map((item, i) => (
          <>
            <div>
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
          </>
        ))}
      </div>
      <ButtonComponent text="All Activities" link="/work" />
    </div>
  );
}

export default GalleryAll;
