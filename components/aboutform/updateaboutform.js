"use client";
import React from "react";
import { useRef } from "react";
import { BiBrush } from "react-icons/bi";
import myToast from "@/components/toast/toast";
import { updateData } from "@/apiservices/aboutapiservices";
import { useState, useEffect } from "react";

function updateAboutForm(props) {
  const [about, setabout] = useState({
    aboutTitle: props.payload.aboutTitle.en,
    aboutTitlebn: props.payload.aboutTitle.bn,
    aboutImageLink: props.payload.aboutImageLink,
    aboutDescription: props.payload.aboutDescription.en,
    aboutDescriptionbn: props.payload.aboutDescription.bn,
  });

  useEffect(() => {
    setabout({
      aboutTitle: props.payload.aboutTitle.en,
      aboutTitlebn: props.payload.aboutTitle.bn,
      aboutImageLink: props.payload.aboutImageLink,
      aboutDescription: props.payload.aboutDescription.en,
      aboutDescriptionbn: props.payload.aboutDescription.bn,
    });
  }, [
    props.payload.aboutTitle.en,
    props.payload.aboutTitle.bn,
    props.payload.aboutImageLink,
    props.payload.aboutDescription.en,
    props.payload.aboutDescription.bn,
  ]);

  const abouttitleref = useRef();
  const abouttitlebnref = useRef();
  const aboutimagelinkref = useRef();
  const aboutdescriptionref = useRef();
  const aboutdescriptionbnref = useRef();
  const aboutradio1ref = useRef();
  const aboutradio2ref = useRef();

  const clickHandler = async (e) => {
    e.preventDefault();
    const abouttitle = abouttitleref.current.value;
    const abouttitlebn = abouttitlebnref.current.value;
    const aboutimagelink = aboutimagelinkref.current.value;
    const aboutdescription = aboutdescriptionref.current.value;
    const aboutdescriptionbn = aboutdescriptionbnref.current.value;
    const aboutradio1 = aboutradio1ref.current.checked;
    const aboutradio2 = aboutradio2ref.current.checked;

    const status = aboutradio1
      ? "active"
      : aboutradio2
      ? "inactive"
      : "inactive";
    const idValue = props.data;

    const res = await updateData(
      aboutimagelink,
      abouttitle,
      abouttitlebn,
      aboutdescription,
      aboutdescriptionbn,
      status,
      idValue
    );

    if (res) {
      props.statechanger();
      myToast.success("Data was updated successfully");
    } else {
      myToast.warning("Something went wrong");
    }
  };
  const onChangeHandler1 = (e) => {
    setabout({
      aboutTitle: e.target.value,
    });
  };
  const onChangeHandler2 = (e) => {
    setabout({
      aboutTitlebn: e.target.value,
    });
  };
  const onChangeHandler3 = (e) => {
    setabout({
      aboutImageLink: e.target.value,
    });
  };
  const onChangeHandler4 = (e) => {
    setabout({
      aboutDescription: e.target.value,
    });
  };
  const onChangeHandler5 = (e) => {
    setabout({
      aboutDescriptionbn: e.target.value,
    });
  };

  return (
    <form className="grid lg:grid-cols-3 w-full gap-5">
      <div className="input-type">
        <input
          ref={abouttitleref}
          onChange={onChangeHandler1}
          className="border w-full px-5 py-3 focus:outline-none"
          type="text"
          name="abouttitle"
          placeholder="Enter about title"
          value={about.aboutTitle}
        ></input>
      </div>
      <div className="input-type">
        <input
          ref={abouttitlebnref}
          onChange={onChangeHandler2}
          className="border w-full px-5 py-3 focus:outline-none"
          type="text"
          name="abouttitlebn"
          placeholder="টাইটেল লিখুন বাংলায়"
          value={about.aboutTitlebn}
        ></input>
      </div>

      <div className="input-type">
        <input
          ref={aboutimagelinkref}
          onChange={onChangeHandler3}
          className="border w-full px-5 py-3 focus:outline-none"
          type="text"
          name="imagelink"
          placeholder="Enter image link"
          value={about.aboutImageLink}
        ></input>
      </div>

      <div className="input-type">
        <textarea
          ref={aboutdescriptionref}
          onChange={onChangeHandler4}
          id="aboutdescription"
          name="aboutdescription"
          rows="1"
          className="border w-full px-5 py-3 focus:outline-none"
          placeholder="Enter about Description"
          value={about.aboutDescription}
        ></textarea>
      </div>
      <div className="input-type">
        <textarea
          ref={aboutdescriptionbnref}
          onChange={onChangeHandler5}
          id="aboutdescriptionbn"
          name="aboutdescriptionbn"
          rows="1"
          className="border w-full px-5 py-3 focus:outline-none"
          placeholder="আপনার বর্ণনা লিখুন বাংলায়"
          value={about.aboutDescriptionbn}
        ></textarea>
      </div>

      <div className="flex gap-10 items-center">
        {props.payload.activeStatus == "active" ? (
          <div className="form-check">
            <input
              ref={aboutradio1ref}
              type="radio"
              value="Active"
              id="radioDefault1"
              name="status"
              className="form-check-input appearance-none rounded-full h-4 w-4 border border-gray-300 bg-white checked:bg-green-500 checked:border-green-500 focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer"
              checked
            />
            <label
              htmlFor="radioDefault1"
              className="inline-block text-gray-800"
            >
              Active
            </label>
          </div>
        ) : (
          <div className="form-check">
            <input
              ref={aboutradio1ref}
              type="radio"
              value="Active"
              id="radioDefault1"
              name="status"
              className="form-check-input appearance-none rounded-full h-4 w-4 border border-gray-300 bg-white checked:bg-green-500 checked:border-green-500 focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer"
            />
            <label
              htmlFor="radioDefault1"
              className="inline-block text-gray-800"
            >
              Active
            </label>
          </div>
        )}

        {props.payload.activeStatus == "inactive" ? (
          <div className="form-check">
            <input
              ref={aboutradio2ref}
              type="radio"
              value="Inactive"
              id="radioDefault2"
              name="status"
              className="form-check-input appearance-none rounded-full h-4 w-4 border border-gray-300 bg-white checked:bg-green-500 checked:border-green-500 focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer"
              checked
            />
            <label
              htmlFor="radioDefault2"
              className="inline-block text-gray-800"
            >
              Inactive
            </label>
          </div>
        ) : (
          <div className="form-check">
            <input
              ref={aboutradio2ref}
              type="radio"
              value="Inactive"
              id="radioDefault2"
              name="status"
              className="form-check-input appearance-none rounded-full h-4 w-4 border border-gray-300 bg-white checked:bg-green-500 checked:border-green-500 focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer"
            />
            <label
              htmlFor="radioDefault2"
              className="inline-block text-gray-800"
            >
              Inactive
            </label>
          </div>
        )}
      </div>

      <button
        onClick={clickHandler}
        className="flex justify-center text-md w-2/6 allColor text-white px-4 py-2 border rounded-md hover:border-slate-500 hover:text-white"
      >
        Update Data{" "}
        <span className="px-1">
          <BiBrush size={23} />
        </span>
      </button>
    </form>
  );
}

export default updateAboutForm;
