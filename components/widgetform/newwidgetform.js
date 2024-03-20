"use client";
import React from "react";
import { useRef } from "react";
import { BiPlus } from "react-icons/bi";
import myToast from "@/components/toast/toast";
import { createData } from "@/apiservices/widgetapiservices";

function NewActivityForm(props) {
  const widgettitleref = useRef();
  const widgetpayloadref = useRef();
  const widgetradio1ref = useRef();
  const widgetradio2ref = useRef();

  const clickHandler = async (e) => {
    e.preventDefault();
    const widgettitle = widgettitleref.current.value;
    const widgetpayload = widgetpayloadref.current.value;
    const widgetpayloadParsed = JSON.parse(
      widgetpayload.replace(/(\r\n|\n|\r)/gm, "")
    );
    const widgetradio1 = widgetradio1ref.current.checked;
    const widgetradio2 = widgetradio2ref.current.checked;
    const status = widgetradio1
      ? "active"
      : widgetradio2
      ? "inactive"
      : "inactive";

    const res = await createData(widgettitle, widgetpayloadParsed, status);

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
          ref={widgettitleref}
          className="border w-full px-5 py-3 focus:outline-none"
          type="text"
          name="widgettitle"
          placeholder="Enter widget title"
        ></input>
      </div>
      <div>
        <textarea
          ref={widgetpayloadref}
          id="widgetpayload"
          name="widgetpayload"
          rows="1"
          className="border w-full px-5 py-3 focus:outline-none"
          placeholder="Enter Widget payload object here"
        ></textarea>
      </div>

      <div className="flex gap-10 items-center">
        <div className="form-check">
          <input
            ref={widgetradio1ref}
            type="radio"
            value="Active"
            id="radioDefault1"
            name="status"
            className="form-check-input appearance-none rounded-full h-4 w-4 border border-gray-300 bg-white checked:bg-green-500 checked:border-green-500 focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer"
          />
          <label htmlFor="radioDefault1" className="inline-block text-gray-800">
            Active
          </label>
        </div>
        <div className="form-check">
          <input
            ref={widgetradio2ref}
            type="radio"
            value="Inactive"
            id="radioDefault2"
            name="status"
            className="form-check-input appearance-none rounded-full h-4 w-4 border border-gray-300 bg-white checked:bg-green-500 checked:border-green-500 focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer"
          />
          <label htmlFor="radioDefault2" className="inline-block text-gray-800">
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

export default NewActivityForm;
