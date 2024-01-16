"use client";
import React from "react";
import { useRef } from "react";
import { BiPlus } from "react-icons/bi";
import myToast from "@/components/toast/toast";
import { createData } from "@/apiservices/videoapiservices";

function NewVideosForm(props) {
  const VideoGroupIDref = useRef();
  const videosref = useRef();
  const courseIDref = useRef();

  const videosradio1ref = useRef();
  const videosradio2ref = useRef();

  const clickHandler = async (e) => {
    e.preventDefault();
    const VideoGroupID = VideoGroupIDref.current.value;
    const videos = videosref.current.value;
    const videosParsed = JSON.parse(videos.replace(/(\r\n|\n|\r)/gm, ""));
    const courseID = courseIDref.current.value;

    const videosradio1 = videosradio1ref.current.checked;
    const videosradio2 = videosradio2ref.current.checked;
    const status = videosradio1
      ? "active"
      : videosradio2
      ? "inactive"
      : "inactive";

    const res = await createData({
      VideoGroupID,
      videos: videosParsed,
      courseID,
      activeStatus: status,
    });

    if (res) {
      props.statechanger();
      myToast.success("Data was created successfully");
    } else {
      myToast.warning("something went wrong");
    }
  };

  return (
    <form className="grid lg:grid-cols-3 w-full gap-5">
      <div className="input-type">
        <input
          ref={VideoGroupIDref}
          className="border w-full px-5 py-3 focus:outline-none"
          type="text"
          name="VideoGroupIDref"
          placeholder="Enter Videos Group ID"
        ></input>
      </div>
      <div className="input-type">
        <input
          ref={courseIDref}
          className="border w-full px-5 py-3 focus:outline-none"
          type="text"
          name="courseIDref"
          placeholder="Enter Course ID"
        ></input>
      </div>
      <div>
        <textarea
          ref={videosref}
          id="videosref"
          name="videosref"
          rows="1"
          className="border w-full px-5 py-3 focus:outline-none"
          placeholder="Enter Individual Videos Array"
        ></textarea>
      </div>

      <div className="flex gap-10 items-center">
        <div className="form-check">
          <input
            ref={videosradio1ref}
            type="radio"
            value="Active"
            id="videosradio1ref"
            name="status"
            className="form-check-input appearance-none rounded-full h-4 w-4 border border-gray-300 bg-white checked:bg-green-500 checked:border-green-500 focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer"
          />
          <label
            htmlFor="videosradio1ref"
            className="inline-block text-gray-800"
          >
            Active
          </label>
        </div>
        <div className="form-check">
          <input
            ref={videosradio2ref}
            type="radio"
            value="Inactive"
            id="videosradio2ref"
            name="status"
            className="form-check-input appearance-none rounded-full h-4 w-4 border border-gray-300 bg-white checked:bg-green-500 checked:border-green-500 focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer"
          />
          <label
            htmlFor="videosradio2ref"
            className="inline-block text-gray-800"
          >
            Inactive
          </label>
        </div>
      </div>

      <button
        onClick={clickHandler}
        className="flex justify-center text-md w-2/6 allColor text-white px-4 py-2 border rounded-md hover:border-slate-500 hover:text-white"
      >
        Add Data{" "}
        <span className="px-1">
          <BiPlus size={23} />
        </span>
      </button>
    </form>
  );
}

export default NewVideosForm;
