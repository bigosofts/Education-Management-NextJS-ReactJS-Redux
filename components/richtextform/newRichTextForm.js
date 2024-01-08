"use client";
import React from "react";
import { useRef, useState } from "react";
import { BiPlus } from "react-icons/bi";
import myToast from "@/components/toast/toast";
import { createData } from "@/apiservices/richtextapiservices";
import RichTextEditor from "@/customComponents/RichTextEditor/RichTextEditor";
import DOMPurify from "dompurify";

function NewRichTextForm(props) {
  const [data, setData] = useState("Enter Rich Text Payload Here");
  const RichTextNameref = useRef();

  const richtextradio1ref = useRef();
  const richtextradio2ref = useRef();

  const clickHandler = async (e) => {
    e.preventDefault();

    const RichTextName = RichTextNameref.current.value;

    const richtextradio1 = richtextradio1ref.current.checked;
    const richtextradio2 = richtextradio2ref.current.checked;

    const status = richtextradio1
      ? "active"
      : richtextradio2
      ? "inactive"
      : "inactive";

    const res = await createData({
      RichTextName,
      TextPayload:DOMPurify.sanitize(data),
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
      <div className="col-span-3 input-type">
        <RichTextEditor value={data} setValue={setData} />
      </div>

      <div className="input-type">
        <input
          ref={RichTextNameref}
          className="border w-full px-5 py-3 focus:outline-none"
          type="text"
          name="RichTextNameref"
          placeholder="Enter Rich Text Name"
        ></input>
      </div>

      <div className="flex gap-10 items-center">
        <div className="form-check">
          <input
            ref={richtextradio1ref}
            type="radio"
            value="Active"
            id="richtextradio1ref"
            name="status"
            className="form-check-input appearance-none rounded-full h-4 w-4 border border-gray-300 bg-white checked:bg-green-500 checked:border-green-500 focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer"
          />
          <label
            htmlFor="richtextradio1ref"
            className="inline-block text-gray-800"
          >
            Active
          </label>
        </div>
        <div className="form-check">
          <input
            ref={richtextradio2ref}
            type="radio"
            value="Inactive"
            id="richtextradio2ref"
            name="status"
            className="form-check-input appearance-none rounded-full h-4 w-4 border border-gray-300 bg-white checked:bg-green-500 checked:border-green-500 focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer"
          />
          <label
            htmlFor="richtextradio2ref"
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

export default NewRichTextForm;
