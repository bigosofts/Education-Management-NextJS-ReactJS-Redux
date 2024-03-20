import "./GalleryCard.css";
function GalleryCard({ linkObj }) {
  return (
    <div className="GalleryCard">
      <h1>Some Creativity of Our Madrasa Students</h1>
      <div class="gallery-wrap">
        {linkObj.map((item, i) => (
          <div
            key={i}
            style={{ backgroundImage: `url("${item.image}")` }}
            className="item item-1"
          ></div>
        ))}
      </div>
    </div>
  );
}

export default GalleryCard;
