"use client";
import React from "react";
import { useRef } from "react";
import { BiPlus } from "react-icons/bi";
import myToast from "@/components/toast/toast";
import { createData } from "@/apiservices/workapiservices";

function NewWorkForm(props) {
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
    

    const res = await createData({ sid, name, img, activeStatus: status, jamat });

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
          ref={sidref}
          className="border w-full px-5 py-3 focus:outline-none"
          type="text"
          name="sidref"
          placeholder="Enter Student SID"
        ></input>
      </div>
      <div className="input-type">
        <input
          ref={nameref}
          className="border w-full px-5 py-3 focus:outline-none"
          type="text"
          name="nameref"
          placeholder="Enter Student Name"
        ></input>
      </div>
      <div className="input-type">
        <input
          ref={imgref}
          className="border w-full px-5 py-3 focus:outline-none"
          type="text"
          name="imgref"
          placeholder="Enter Work Image Link"
        ></input>
      </div>
      <div className="input-type">
        <input
          ref={jamatref}
          className="border w-full px-5 py-3 focus:outline-none"
          type="text"
          name="jamatref"
          placeholder="Enter Jamat Name"
        ></input>
      </div>

      <div className="flex gap-10 items-center">
        <div className="form-check">
          <input
            ref={workradio1ref}
            type="radio"
            value="Active"
            id="workradio1ref"
            name="status"
            className="form-check-input appearance-none rounded-full h-4 w-4 border border-gray-300 bg-white checked:bg-green-500 checked:border-green-500 focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer"
          />
          <label htmlFor="workradio1ref" className="inline-block text-gray-800">
            Active
          </label>
        </div>
        <div className="form-check">
          <input
            ref={workradio2ref}
            type="radio"
            value="Inactive"
            id="workradio2ref"
            name="status"
            className="form-check-input appearance-none rounded-full h-4 w-4 border border-gray-300 bg-white checked:bg-green-500 checked:border-green-500 focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer"
          />
          <label htmlFor="workradio2ref" className="inline-block text-gray-800">
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

export default NewWorkForm;
