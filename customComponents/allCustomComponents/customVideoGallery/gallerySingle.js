import Image from "next/image";
function GallerySingle() {
  return (
    <article className="video">
      <figure>
        <a
          className="fancybox fancybox.iframe"
          href="//www.youtube.com/watch?v=8D5zaUHi02U"
        >
          <Image
            width={380}
            height={213}
            className="videoThumb"
            src="/images/abacus3.jpg"
          />
        </a>
      </figure>
      <h2 className="videoTitle">Course video</h2>
    </article>
  );
}

export default GallerySingle;
