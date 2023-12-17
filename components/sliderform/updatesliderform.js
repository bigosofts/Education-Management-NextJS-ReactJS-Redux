"use client";
import React from "react";
import { useRef } from "react";
import { BiBrush } from "react-icons/bi";
import myToast from "@/components/toast/toast";
import { updateData } from "@/apiservices/sliderapiservices";
import { useState, useEffect } from "react";

function updateSliderForm(props) {
  const [slider, setSlider] = useState({
    slidertitle: props.payload.sliderTitle.en,
    slidertitlebn: props.payload.sliderTitle.bn,
    sliderid: props.payload.sliderId,
    slidername: props.payload.sliderName,
    sliderbuttontitle: props.payload.sliderButtonTitle.en,
    sliderbuttontitlebn: props.payload.sliderButtonTitle.bn,
    buttonlink: props.payload.sliderButtonLink,
    imagelink: props.payload.sliderImageLink,
    sliderdescription: props.payload.sliderDescription.en,
    sliderdescriptionbn: props.payload.sliderDescription.bn,
    activeStatus: props.payload.activeStatus,
  });

  useEffect(() => {
    setSlider({
      slidertitle: props.payload.sliderTitle.en,
      slidertitlebn: props.payload.sliderTitle.bn,
      sliderid: props.payload.sliderId,
      slidername: props.payload.sliderName,
      sliderbuttontitle: props.payload.sliderButtonTitle.en,
      sliderbuttontitlebn: props.payload.sliderButtonTitle.bn,
      buttonlink: props.payload.sliderButtonLink,
      imagelink: props.payload.sliderImageLink,
      sliderdescription: props.payload.sliderDescription.en,
      sliderdescriptionbn: props.payload.sliderDescription.bn,
      activeStatus: props.payload.activeStatus,
    });
  }, [
    props.payload.sliderTitle.en,
    props.payload.sliderTitle.bn,
    props.payload.sliderId,
    props.payload.sliderName,
    props.payload.sliderButtonTitle.en,
    props.payload.sliderButtonTitle.bn,
    props.payload.sliderButtonLink,
    props.payload.sliderImageLink,
    props.payload.sliderDescription.en,
    props.payload.sliderDescription.bn,
    props.payload.activeStatus,
  ]);

  const slidertitleref = useRef();
  const slidertitlebnref = useRef();
  const slideridref = useRef();
  const sliderNameref = useRef();
  const sliderbuttontitleref = useRef();
  const sliderbuttontitlebnref = useRef();
  const buttonlinkref = useRef();
  const imagelinkref = useRef();
  const sliderdescriptionref = useRef();
  const sliderdescriptionbnref = useRef();
  const sliderradio1ref = useRef();
  const sliderradio2ref = useRef();

  const clickHandler = async (e) => {
    e.preventDefault();
    const slidertitle = slidertitleref.current.value;
    const slidertitlebn = slidertitlebnref.current.value;
    const sliderid = slideridref.current.value;
    const slidername = sliderNameref.current.value;
    const sliderbuttontitle = sliderbuttontitleref.current.value;
    const sliderbuttontitlebn = sliderbuttontitlebnref.current.value;
    const buttonlink = buttonlinkref.current.value;
    const imagelink = imagelinkref.current.value;
    const sliderdescription = sliderdescriptionref.current.value;
    const sliderdescriptionbn = sliderdescriptionbnref.current.value;
    const sliderradio1 = sliderradio1ref.current.checked;
    const sliderradio2 = sliderradio2ref.current.checked;

    const status = sliderradio1
      ? "active"
      : sliderradio2
      ? "inactive"
      : "inactive";
    const idValue = props.data;

    const res = await updateData(
      imagelink,
      sliderid,
      slidertitle,
      slidertitlebn,
      sliderdescription,
      sliderdescriptionbn,
      sliderbuttontitle,
      sliderbuttontitlebn,
      buttonlink,
      status,
      idValue,
      slidername
    );

    if (res) {
      props.statechanger();
      myToast.success("Data was Updated successfully");
    } else {
      myToast.warning("something went wrong");
    }
  };
  const onChangeHandler1 = (e) => {
    setSlider({
      slidertitle: e.target.value,
    });
  };
  const onChangeHandler2 = (e) => {
    setSlider({
      slidertitlebn: e.target.value,
    });
  };
  const onChangeHandler3 = (e) => {
    setSlider({
      sliderid: e.target.value,
    });
  };
  const onChangeHandler4 = (e) => {
    setSlider({
      sliderbuttontitle: e.target.value,
    });
  };
  const onChangeHandler5 = (e) => {
    setSlider({
      sliderbuttontitlebn: e.target.value,
    });
  };
  const onChangeHandler6 = (e) => {
    setSlider({
      buttonlink: e.target.value,
    });
  };
  const onChangeHandler7 = (e) => {
    setSlider({
      imagelink: e.target.value,
    });
  };
  const onChangeHandler8 = (e) => {
    setSlider({
      sliderdescription: e.target.value,
    });
  };
  const onChangeHandler9 = (e) => {
    setSlider({
      sliderdescriptionbn: e.target.value,
    });
  };
  const onChangeHandler10 = (e) => {
    setSlider({
        slidername: e.target.value,
    });
  };

  return (
    <form className="grid lg:grid-cols-3 w-full gap-5">
      <div className="input-type">
        <input
          ref={slidertitleref}
          onChange={onChangeHandler1}
          value={slider.slidertitle}
          className="border w-full px-5 py-3 focus:outline-none"
          type="text"
          name="slidertitle"
          placeholder="Enter Slider title"
        ></input>
      </div>
      <div className="input-type">
        <input
          ref={slidertitlebnref}
          onChange={onChangeHandler2}
          className="border w-full px-5 py-3 focus:outline-none"
          type="text"
          name="slidertitlebn"
          placeholder="স্লাইডার টাইটেল লিখুন"
          value={slider.slidertitlebn}
        ></input>
      </div>
      <div className="input-type">
        <input
          ref={slideridref}
          onChange={onChangeHandler3}
          className="border w-full px-5 py-3 focus:outline-none"
          type="text"
          name="sliderid"
          placeholder="Enter slider id"
          value={slider.sliderid}
        ></input>
      </div>
      <div className="input-type">
        <input
          ref={sliderNameref}
          onChange={onChangeHandler10}
          className="border w-full px-5 py-3 focus:outline-none"
          type="text"
          name="slidername"
          placeholder="Enter slider id"
          value={slider.slidername}
        ></input>
      </div>
      <div className="input-type">
        <input
          ref={sliderbuttontitleref}
          onChange={onChangeHandler4}
          className="border w-full px-5 py-3 focus:outline-none"
          type="text"
          name="buttontitle"
          placeholder="Enter button title"
          value={slider.sliderbuttontitle}
        ></input>
      </div>
      <div className="input-type">
        <input
          ref={sliderbuttontitlebnref}
          onChange={onChangeHandler5}
          className="border w-full px-5 py-3 focus:outline-none"
          type="text"
          name="buttontitlebn"
          placeholder="বাংলায় বাটন টাইটেল"
          value={slider.sliderbuttontitlebn}
        ></input>
      </div>
      <div className="input-type">
        <input
          ref={buttonlinkref}
          onChange={onChangeHandler6}
          className="border w-full px-5 py-3 focus:outline-none"
          type="text"
          name="buttonlink"
          placeholder="Enter Button Link"
          value={slider.buttonlink}
        ></input>
      </div>
      <div className="input-type">
        <input
          ref={imagelinkref}
          onChange={onChangeHandler7}
          className="border w-full px-5 py-3 focus:outline-none"
          type="text"
          name="imagelink"
          placeholder="Enter image link"
          value={slider.imagelink}
        ></input>
      </div>

      <div className="input-type">
        <textarea
          ref={sliderdescriptionref}
          onChange={onChangeHandler8}
          id="sliderdescription"
          name="sliderdescription"
          rows="1"
          className="border w-full px-5 py-3 focus:outline-none"
          placeholder="Enter slider Description"
          value={slider.sliderdescription}
        ></textarea>
      </div>
      <div className="input-type">
        <textarea
          ref={sliderdescriptionbnref}
          onChange={onChangeHandler9}
          id="sliderdescriptionbn"
          name="sliderdescriptionbn"
          rows="1"
          className="border w-full px-5 py-3 focus:outline-none"
          placeholder="স্লাইডারের বর্ননা লিখুন "
          value={slider.sliderdescriptionbn}
        ></textarea>
      </div>
      <div className="flex gap-10 items-center">
        {props.payload.activeStatus == "active" ? (
          <div className="form-check">
            <input
              ref={sliderradio1ref}
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
              ref={sliderradio1ref}
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
              ref={sliderradio2ref}
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
              ref={sliderradio2ref}
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

export default updateSliderForm;
