"use client";

import "./Audiplayer.css";

const YouTubeEmbed = ({link}) => {
  return (
    <div className="iframe-mask">
      <div className={`control-youtube-left`}></div>
      <div className={`control-youtube-right`}></div>
      <iframe
        width="100%"
        height="100%"
        src={link}
        title="YouTube video player"
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        allowFullScreen
      ></iframe>
    </div>
  );
};

export default YouTubeEmbed;
