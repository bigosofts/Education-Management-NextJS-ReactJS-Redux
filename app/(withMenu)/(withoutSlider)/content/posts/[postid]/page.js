"use client";
import "@/assets/css/travels.css";

import CoverElement from "@/customComponents/CoverElement/CoverElement";
import SinglePost from "@/customComponents/PostBlogGrid/SinglePost";
import PostSideBar from "@/customComponents/PostSideBar/PostSideBar";
import BlogSidebarWrap from "@/customComponents/BlogSidebarWrap/BlogSidebarWrap";

import { useState, useEffect } from "react";

function SinglePostPage({ params }) {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 300) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  return (
    <>
      <div style={{ marginBottom: "-100px" }} className="travelpage-container">
        <CoverElement id={params.postid} />
        
        <BlogSidebarWrap>
          <SinglePost id={params.postid} />
          <PostSideBar />
        </BlogSidebarWrap>
      </div>
    </>
  );
}

export default SinglePostPage;
