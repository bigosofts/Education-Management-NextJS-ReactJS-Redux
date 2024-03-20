"use client";
import React from "react";
import { useRef } from "react";
import { BiBrush } from "react-icons/bi";
import myToast from "@/components/toast/toast";
import { updateData } from "@/apiservices/richtextapiservices";
import { useState, useEffect } from "react";
import RichTextEditor from "@/customComponents/RichTextEditor/RichTextEditor";
import DOMPurify from "dompurify";

function UpdateRichTextEditor(props) {
  const [data, setData] = useState(props.payload.TextPayload);
  const [richText, setRichText] = useState({
    RichTextName: props.payload.RichTextName,
    TextPayload: props.payload.TextPayload,
    activeStatus: props.payload.activeStatus,
  });

  useEffect(() => {
    setRichText({
      RichTextName: props.payload.RichTextName,
      TextPayload: props.payload.TextPayload,
      activeStatus: props.payload.activeStatus,
    });
  }, [
    props.payload.RichTextName,
    props.payload.TextPayload,
    props.payload.activeStatus,
  ]);

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

    const idValue = props.data;

    const res = await updateData({
      RichTextName,
      TextPayload: DOMPurify.sanitize(data),
      activeStatus: status,
      idValue,
    });

    if (res) {
      props.statechanger();
      myToast.success("Data was Updated successfully");
    } else {
      myToast.warning("something went wrong");
    }
  };
  const onChangeHandler1 = (e) => {
    setRichText({
      RichTextName: e.target.value,
    });
  };

  return (
    <form className="grid lg:grid-cols-3 w-full gap-5">
      <div className="col-span-3 input-type">
        <RichTextEditor value={richText.TextPayload} setValue={setData} />
      </div>

      <div className="input-type">
        <input
          ref={RichTextNameref}
          onChange={onChangeHandler1}
          value={richText.RichTextName}
          className="border w-full px-5 py-3 focus:outline-none"
          type="text"
          name="RichTextNameref"
          placeholder="Enter Rich Text Name"
        ></input>
      </div>

      <div className="flex gap-10 items-center">
        {props.payload.activeStatus == "active" ? (
          <div className="form-check">
            <input
              ref={richtextradio1ref}
              type="radio"
              value="Active"
              id="richtextradio1ref1"
              name="status"
              className="form-check-input appearance-none rounded-full h-4 w-4 border border-gray-300 bg-white checked:bg-green-500 checked:border-green-500 focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer"
              checked
            />
            <label
              htmlFor="richtextradio1ref1"
              className="inline-block text-gray-800"
            >
              Active
            </label>
          </div>
        ) : (
          <div className="form-check">
            <input
              ref={richtextradio1ref}
              type="radio"
              value="Active"
              id="richtextradio1ref2"
              name="status"
              className="form-check-input appearance-none rounded-full h-4 w-4 border border-gray-300 bg-white checked:bg-green-500 checked:border-green-500 focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer"
            />
            <label
              htmlFor="richtextradio1ref2"
              className="inline-block text-gray-800"
            >
              Active
            </label>
          </div>
        )}

        {props.payload.activeStatus == "inactive" ? (
          <div className="form-check">
            <input
              ref={richtextradio2ref}
              type="radio"
              value="Inactive"
              id="richtextradio2ref1"
              name="status"
              className="form-check-input appearance-none rounded-full h-4 w-4 border border-gray-300 bg-white checked:bg-green-500 checked:border-green-500 focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer"
              checked
            />
            <label
              htmlFor="richtextradio2ref1"
              className="inline-block text-gray-800"
            >
              Inactive
            </label>
          </div>
        ) : (
          <div className="form-check">
            <input
              ref={richtextradio2ref}
              type="radio"
              value="Inactive"
              id="richtextradio2ref2"
              name="status"
              className="form-check-input appearance-none rounded-full h-4 w-4 border border-gray-300 bg-white checked:bg-green-500 checked:border-green-500 focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer"
            />
            <label
              htmlFor="richtextradio2ref2"
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

export default UpdateRichTextEditor;
