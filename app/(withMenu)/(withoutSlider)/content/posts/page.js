"use client";

import "@/assets/css/travels.css";

import CoverElement from "@/customComponents/CoverElement/CoverElement";
import PostBlogGrid from "@/customComponents/PostBlogGrid/PostBlogGrid";
import PostSideBar from "@/customComponents/PostSideBar/PostSideBar";
import BlogSidebarWrap from "@/customComponents/BlogSidebarWrap/BlogSidebarWrap";

import { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { setInitialData as setinitialPosts } from "@/app/redux/features/postFilter/postFilterSlice";
import { selectDataTwo as selectPosts } from "@/apiservices/postapiservices";

import Loader from "@/customComponents/loader/Loader";

function BlogPage(props) {
  const dispatch = useDispatch();
  const filteredPostData = useSelector((state) => state.postFilter?.value);

  console.log(filteredPostData);

  useEffect(() => {
    async function settingData() {
      try {
        const dataArray3 = await selectPosts({
          activeStatus: "active",
        });

        dispatch(setinitialPosts(dataArray3.data));
      } catch (error) {
        console.error("Error in settingData:", error);
      }
    }
    settingData();
  }, []);

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

  if (filteredPostData) {
    return (
      <>
        <div className="travelpage-container">
          
          <CoverElement />

          <BlogSidebarWrap>
            <PostBlogGrid detailData={filteredPostData} />
            <PostSideBar />
          </BlogSidebarWrap>
        </div>
      </>
    );
  } else {
    return <Loader />;
  }
}

export default BlogPage;
