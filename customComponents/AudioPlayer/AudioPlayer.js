"use client";

import "./Audiplayer.css";

const YouTubeEmbed = () => {
  return (
    <div className="iframe-mask">
      <div className={`control-youtube-left`}></div>
      <div className={`control-youtube-right`}></div>
      <iframe
        width="560"
        height="35"
        src="https://www.youtube.com/embed/8D5zaUHi02U?si=ITqrVoW_9gJmj8xb"
        title="YouTube video player"
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        allowFullScreen
      ></iframe>
    </div>
  );
};

export default YouTubeEmbed;
