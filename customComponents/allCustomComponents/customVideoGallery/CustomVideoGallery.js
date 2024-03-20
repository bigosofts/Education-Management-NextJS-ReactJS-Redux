import "./CustomVideoGallery.css";
import "./galleryCustom.js";
import GallerySingle from "./gallerySingle";

function CustomVideoGallery() {
  return (
    <div className="customVideoGallery">
      <section className="second clearfix">
        <header>
          <h1 style={{ color: "rgb(28, 29, 63)" }}>
            {true
              ? "Free Courses for the techers"
              : "ওস্তাদগণের প্রশিক্ষণের জন্য ফ্রি কোর্সসমূহ"}
          </h1>
        </header>

        <GallerySingle />
        <GallerySingle />
        <GallerySingle />
        <GallerySingle />
        <GallerySingle />
        <GallerySingle />
      </section>
    </div>
  );
}

export default CustomVideoGallery;
