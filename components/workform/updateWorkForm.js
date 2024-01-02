"use client";
import React from "react";
import { useRef } from "react";
import { BiBrush } from "react-icons/bi";
import myToast from "@/components/toast/toast";
import { updateData } from "@/apiservices/workapiservices";
import { useState, useEffect } from "react";

function UpdateWorkForm(props) {
  const [work, setWork] = useState({
    sid: props.payload.sid,
    name: props.payload.name,
    img: props.payload.img,
    jamat: props.payload.jamat,
    activeStatus: props.payload.activeStatus,
  });

  useEffect(() => {
    setWork({
      sid: props.payload.sid,
      name: props.payload.name,
      img: props.payload.img,
      jamat: props.payload.jamat,
      activeStatus: props.payload.activeStatus,
    });
  }, [
    props.payload.sid,
    props.payload.name,
    props.payload.img,
    props.payload.jamat,
    props.payload.activeStatus,
  ]);

  const sidref = useRef();
  const nameref = useRef();
  const imgref = useRef();
  const jamatref = useRef();

  const workradio1ref = useRef();
  const workradio2ref = useRef();

  const clickHandler = async (e) => {
    e.preventDefault();
    const sid = sidref.current.value;
    const name = nameref.current.value;
    const img = imgref.current.value;
    const jamat = jamatref.current.value;

    const workradio1 = workradio1ref.current.checked;
    const workradio2 = workradio2ref.current.checked;

    const status = workradio1 ? "active" : workradio2 ? "inactive" : "inactive";

    const idValue = props.data;

    const res = await updateData({
      sid,
      name,
      img,
      activeStatus: status,
      idValue,
      jamat,
    });

    if (res) {
      props.statechanger();
      myToast.success("Data was Updated successfully");
    } else {
      myToast.warning("something went wrong");
    }
  };
  const onChangeHandler1 = (e) => {
    setWork({
      sid: e.target.value,
    });
  };
  const onChangeHandler2 = (e) => {
    setWork({
      name: e.target.value,
    });
  };
  const onChangeHandler3 = (e) => {
    setWork({
      img: e.target.value,
    });
  };
  const onChangeHandler4 = (e) => {
    setWork({
      jamat: e.target.value,
    });
  };

  return (
    <form className="grid lg:grid-cols-3 w-full gap-5">
      <div className="input-type">
        <input
          ref={sidref}
          onChange={onChangeHandler1}
          value={work.sid}
          className="border w-full px-5 py-3 focus:outline-none"
          type="text"
          name="sidref"
          placeholder="Enter Student SID"
        ></input>
      </div>
      <div className="input-type">
        <input
          ref={nameref}
          onChange={onChangeHandler2}
          value={work.name}
          className="border w-full px-5 py-3 focus:outline-none"
          type="text"
          name="nameref"
          placeholder="Enter Student Name"
        ></input>
      </div>
      <div className="input-type">
        <input
          ref={imgref}
          onChange={onChangeHandler3}
          value={work.img}
          className="border w-full px-5 py-3 focus:outline-none"
          type="text"
          name="imgref"
          placeholder="Enter Work Image Link"
        ></input>
      </div>
      <div className="input-type">
        <input
          ref={jamatref}
          onChange={onChangeHandler4}
          value={work.jamat}
          className="border w-full px-5 py-3 focus:outline-none"
          type="text"
          name="jamatref"
          placeholder="Enter Jamat Name"
        ></input>
      </div>

      <div className="flex gap-10 items-center">
        {props.payload.activeStatus == "active" ? (
          <div className="form-check">
            <input
              ref={workradio1ref}
              type="radio"
              value="Active"
              id="workradio1ref"
              name="status"
              className="form-check-input appearance-none rounded-full h-4 w-4 border border-gray-300 bg-white checked:bg-green-500 checked:border-green-500 focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer"
              checked
            />
            <label
              htmlFor="workradio1ref"
              className="inline-block text-gray-800"
            >
              Active
            </label>
          </div>
        ) : (
          <div className="form-check">
            <input
              ref={workradio1ref}
              type="radio"
              value="Active"
              id="workradio1ref"
              name="status"
              className="form-check-input appearance-none rounded-full h-4 w-4 border border-gray-300 bg-white checked:bg-green-500 checked:border-green-500 focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer"
            />
            <label
              htmlFor="workradio1ref"
              className="inline-block text-gray-800"
            >
              Active
            </label>
          </div>
        )}

        {props.payload.activeStatus == "inactive" ? (
          <div className="form-check">
            <input
              ref={workradio2ref}
              type="radio"
              value="Inactive"
              id="workradio2ref"
              name="status"
              className="form-check-input appearance-none rounded-full h-4 w-4 border border-gray-300 bg-white checked:bg-green-500 checked:border-green-500 focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer"
              checked
            />
            <label
              htmlFor="workradio2ref"
              className="inline-block text-gray-800"
            >
              Inactive
            </label>
          </div>
        ) : (
          <div className="form-check">
            <input
              ref={workradio2ref}
              type="radio"
              value="Inactive"
              id="workradio2ref"
              name="status"
              className="form-check-input appearance-none rounded-full h-4 w-4 border border-gray-300 bg-white checked:bg-green-500 checked:border-green-500 focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer"
            />
            <label
              htmlFor="workradio2ref"
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

export default UpdateWorkForm;
