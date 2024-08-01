"use client";
import { useSelector, useDispatch } from "react-redux";
import { useEffect } from "react";
import Link from "next/link";
import { selectDataTwo as selectPosts } from "@/apiservices/postapiservices";
import { setInitialData as setinitialPosts } from "@/app/redux/features/postFilter/postFilterSlice";
import "@/assets/css/stylefront.css";
import "@/assets/css/mdb.min.css";

function BlogPage() {
  const dispatch = useDispatch();

  const filteredPostData = useSelector((state) => state.postFilter.value);

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

  useEffect(() => {
    async function settingData() {
      const dataArray3 = await selectPosts({
        activeStatus: "active",
      });

      dispatch(setinitialPosts(dataArray3.data));
    }

    settingData();
  }, []);

  return (
    <div
      style={{ marginBottom: "200px", maxWidth: "1280px", margin: "0 auto" }}
      className="section-front"
    >
      <div style={{ marginTop: "100px" }} className="py-5 text-center">
        <h1 className="mb-3">Our Blogs</h1>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-5 px-2 md:px-5">
        {filteredPostData.slice(0, 3).map((item, i) => (
          <div key={i} className="">
            <div className="card h-100">
              <img
                src={item.postImageLink}
                className="card-img-top"
                alt="Skyscrapers"
              />
              <div className="card-body">
                <h5 className="card-title">{item.postTitle.en}</h5>
                <p className="card-text">
                  {item.postDescription.en.substring(0, 80)}
                </p>
                <Link href={`/posts/${item.postId}`}>Read More ... </Link>
              </div>
              <div className="card-footer">
                <small className="text-muted">
                  Last updated: {niceDate(item.postUpdatedDate)}
                </small>
              </div>
            </div>
          </div>
        ))}
      </div>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          height: "60px",
          marginTop: "50px",
        }}
        className="row row-cols-1 row-cols-md-3 row-cols-lg-4 g-4 px-2 px-md-5"
      >
        <button style={{ height: "100%" }} className="btn btn-info">
          <Link style={{ color: "#fff" }} href="/posts">
            More Blogs ...
          </Link>
        </button>
      </div>
    </div>
  );
}

export default BlogPage;
