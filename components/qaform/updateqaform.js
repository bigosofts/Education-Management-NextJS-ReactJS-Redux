"use client";
import React from "react";
import { useRef } from "react";
import { BiBrush } from "react-icons/bi";
import myToast from "@/components/toast/toast";
import { updateData } from "@/apiservices/qaformapiservices";
import { useState, useEffect } from "react";

function Updateqaform(props) {
  const [qaform, setQaForm] = useState({
    qaformid: props.payload.qaformid,
    multiplechoice: props.payload.multiplechoice,
    questionimage: props.payload.questionimage,
    questiontext: props.payload.questiontext,
    correctanswer: props.payload.correctanswer,
    activeStatus: props.payload.activeStatus,
  });

  useEffect(() => {
    setQaForm({
      qaformid: props.payload.qaformid,
      multiplechoice: props.payload.multiplechoice,
      questionimage: props.payload.questionimage,
      questiontext: props.payload.questiontext,
      correctanswer: props.payload.correctanswer,
      activeStatus: props.payload.activeStatus,
    });
  }, [
    props.payload.qaformid,
    props.payload.multiplechoice,
    props.payload.questionimage,
    props.payload.questiontext,
    props.payload.correctanswer,
    props.payload.activeStatus,
  ]);

  const qaformidref = useRef();
  const questionimageref = useRef();
  const questiontextref = useRef();
  const multiplechoiceref = useRef();
  const correctanswerref = useRef();

  const qaformradio1ref = useRef();
  const qaformradio2ref = useRef();

  const clickHandler = async (e) => {
    e.preventDefault();
    const qaformid = qaformidref.current.value;
    const multiplechoice = multiplechoiceref.current.value;
    const multiplechoiceParsed = JSON.parse(multiplechoice.replace(/(\r\n|\n|\r)/gm, ""));
    const questionimage = questionimageref.current.value;
    const questiontext = questiontextref.current.value;
    const correctanswer = correctanswerref.current.value;

    const qaformradio1 = qaformradio1ref.current.checked;
    const qaformradio2 = qaformradio2ref.current.checked;

    const status = qaformradio1
      ? "active"
      : qaformradio2
      ? "inactive"
      : "inactive";

    const idValue = props.data;

    const res = await updateData({
      qaformid,
      questionimage,
      questiontext,
      multiplechoice:multiplechoiceParsed,
      correctanswer,
      activeStatus:status,
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
    setQaForm({
      qaformid: e.target.value,
    });
  };
  const onChangeHandler2 = (e) => {
    setQaForm({
      multiplechoiceParsed: e.target.value,
    });
  };
  const onChangeHandler3 = (e) => {
    setQaForm({
      questionimage: e.target.value,
    });
  };
  const onChangeHandler4 = (e) => {
    setQaForm({
      questiontext: e.target.value,
    });
  };
  const onChangeHandler5 = (e) => {
    setQaForm({
      correctanswer: e.target.value,
    });
  };

  return (
    <form className="grid lg:grid-cols-3 w-full gap-5">
      <div className="input-type">
        <input
          ref={qaformidref}
          onChange={onChangeHandler1}
          value={qaform.qaformid}
          className="border w-full px-5 py-3 focus:outline-none"
          type="text"
          name="qaformidref"
          placeholder="Enter QA Form ID"
        ></input>
      </div>
      <div className="input-type">
        <input
          ref={questionimageref}
          onChange={onChangeHandler3}
          value={qaform.questionimage}
          className="border w-full px-5 py-3 focus:outline-none"
          type="text"
          name="questionimageref"
          placeholder="Enter Question Image Link"
        ></input>
      </div>
      <div className="input-type">
        <input
          ref={questiontextref}
          onChange={onChangeHandler4}
          value={qaform.questiontext}
          className="border w-full px-5 py-3 focus:outline-none"
          type="text"
          name="questiontextref"
          placeholder="Enter Question Text If have any"
        ></input>
      </div>
      <div className="input-type">
        <input
          ref={correctanswerref}
          onChange={onChangeHandler5}
          value={qaform.correctanswer}
          className="border w-full px-5 py-3 focus:outline-none"
          type="text"
          name="correctanswerref"
          placeholder="Enter Correct Answer"
        ></input>
      </div>

      <div>
        <textarea
          ref={multiplechoiceref}
          onChange={onChangeHandler2}
          value={JSON.stringify(qaform.multiplechoice)}
          id="multiplechoiceref"
          name="multiplechoiceref"
          rows="1"
          className="border w-full px-5 py-3 focus:outline-none"
          placeholder="Enter Multiple choice Array"
        ></textarea>
      </div>

      <div className="flex gap-10 items-center">
        {props.payload.activeStatus == "active" ? (
          <div className="form-check">
            <input
              ref={qaformradio1ref}
              type="radio"
              value="Active"
              id="qaformradio1ref"
              name="qaformradio1ref"
              className="form-check-input appearance-none rounded-full h-4 w-4 border border-gray-300 bg-white checked:bg-green-500 checked:border-green-500 focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer"
              checked
            />
            <label
              htmlFor="qaformradio1ref"
              className="inline-block text-gray-800"
            >
              Active
            </label>
          </div>
        ) : (
          <div className="form-check">
            <input
              ref={qaformradio1ref}
              type="radio"
              value="Active"
              id="qaformradio1ref"
              name="qaformradio1ref"
              className="form-check-input appearance-none rounded-full h-4 w-4 border border-gray-300 bg-white checked:bg-green-500 checked:border-green-500 focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer"
            />
            <label
              htmlFor="qaformradio1ref"
              className="inline-block text-gray-800"
            >
              Active
            </label>
          </div>
        )}

        {props.payload.activeStatus == "inactive" ? (
          <div className="form-check">
            <input
              ref={qaformradio2ref}
              type="radio"
              value="Inactive"
              id="qaformradio2ref"
              name="qaformradio2ref"
              className="form-check-input appearance-none rounded-full h-4 w-4 border border-gray-300 bg-white checked:bg-green-500 checked:border-green-500 focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer"
              checked
            />
            <label
              htmlFor="qaformradio2ref"
              className="inline-block text-gray-800"
            >
              Inactive
            </label>
          </div>
        ) : (
          <div className="form-check">
            <input
              ref={qaformradio2ref}
              type="radio"
              value="Inactive"
              id="qaformradio2ref"
              name="qaformradio2ref"
              className="form-check-input appearance-none rounded-full h-4 w-4 border border-gray-300 bg-white checked:bg-green-500 checked:border-green-500 focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer"
            />
            <label
              htmlFor="qaformradio2ref"
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

export default Updateqaform;
