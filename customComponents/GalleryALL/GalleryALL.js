import "./GalleryALL.css";

function GalleryAll({ linkObj }) {
  console.log(linkObj);
  return (
    <div className="galleryALL">
      <h1 className="galleryALLh"
        style={{
          marginBottom: "50px",
        }}
      >
        {" "}
        Some Handwork of Our Madrasa Talib/Taliba
      </h1>
      <div className="gallery">
        {linkObj.map((item, i) => (
          <>
            <div>
              <a href={`#${i}`}>
                <img src={item.img} loading="lazy" alt="" />
              </a>
              <p style={{textAlign: "center"}}>{item.sid}</p>
                <p style={{textAlign: "center"}}>{item.name}</p>
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
    </div>
  );
}

export default GalleryAll;
