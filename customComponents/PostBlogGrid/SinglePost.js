"use client";

import { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { isAdmin } from "@/apiservices/checklogin";
import { setInitialData as setinitialPosts } from "@/app/redux/features/postFilter/postFilterSlice";
import { selectDataTwo as selectPosts } from "@/apiservices/postapiservices";

function SinglePost({ id }) {
  const dispatch = useDispatch();
  const filteredPostData = useSelector((state) => state.postFilter.value);

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

  function niceDate(date) {
    var isoTime = date;
    var date = new Date(isoTime);

    var options = {
      year: "numeric",
      month: "long",
      day: "numeric",
    };

    var formattedDate = date.toLocaleDateString("en-US", options);
    return formattedDate;
  }

  function richtextoutput(text) {
    return (
      <div
        className="richtext"
        style={{
          width: "90%",
          textAlign: "justify",
          margin: "0px auto",
          padding: "20px 0px",
        }}
        dangerouslySetInnerHTML={{ __html: text }}
      />
    );
  }
  if (filteredPostData) {
    let singleData = filteredPostData.find((item) => {
      return item.postId == id;
    });

    if (singleData) {
      return (
        <div style={{ overflow: "unset", height: "unset" }} className="blog4">
          <div className="news_item">
            <img src={`${singleData.postImageLink}`} alt="" />
            <h2>{singleData ? singleData.postTitle.en : "Soemthing"}</h2>

            {richtextoutput(
              singleData ? singleData.postDescription.en : "Description"
            )}
          </div>

          {/* <div className="pagination">
        <a href="#">
          <img width="32px" height="32px" src="/images/prev1.png" alt="" />
        </a>
        <a href="blog.html">1</a>
        <a href="#">2</a>
        <a href="#">3</a>
        <a href="#">
          <img width="32px" height="32px" src="/images/next1.png" alt="" />
        </a>
      </div> */}
        </div>
      );
    }
  } else {
    return <div> Loading ... </div>;
  }
}

export default SinglePost;
