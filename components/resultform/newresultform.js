"use client";
import React from "react";
import { useRef } from "react";
import { BiPlus } from "react-icons/bi";
import myToast from "@/components/toast/toast";
import { createData } from "@/apiservices/resultapiservices";

function NewResultForm(props) {
  const studentidref = useRef();
  const resultrollnoref = useRef();
  const regnumberref = useRef();
  const madrashanameref = useRef();
  const examcentreref = useRef();
  const markpayloadref = useRef();
  const studentgraderef = useRef();
  const studentmeritref = useRef();
  const resultradio1ref = useRef();
  const resultradio2ref = useRef();
  const passingYearref = useRef();
  const pictureref = useRef();
  const marhalaref = useRef();

  const clickHandler = async (e) => {
    e.preventDefault();
    const studentid = studentidref.current.value;
    const resultroolno = resultrollnoref.current.value;
    const regno = regnumberref.current.value;
    const madrashaname = madrashanameref.current.value;
    const examcentre = examcentreref.current.value;
    const markpayload = markpayloadref.current.value;
    const subMark = JSON.parse(markpayload.replace(/(\r\n|\n|\r)/gm, ""));

    const studentgrade = studentgraderef.current.value;
    const studentmerit = studentmeritref.current.value;
    const passingYear = passingYearref.current.value;
    const picture = pictureref.current.value;
    const marhala = marhalaref.current.value;

    const resultradio1 = resultradio1ref.current.checked;
    const resultradio2 = resultradio2ref.current.checked;
    const status = resultradio1
      ? "active"
      : resultradio2
      ? "inactive"
      : "inactive";

    const res = await createData(
      resultroolno,
      regno,
      studentid,
      madrashaname,
      examcentre,
      subMark,
      studentgrade,
      studentmerit,
      status,
      passingYear,
      picture,
      marhala
    );

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
          ref={studentidref}
          className="border w-full px-5 py-3 focus:outline-none"
          type="text"
          name="studentuser"
          placeholder="Enter student User"
        ></input>
      </div>
      <div className="input-type">
        <input
          ref={resultrollnoref}
          className="border w-full px-5 py-3 focus:outline-none"
          type="number"
          name="resultrollno"
          placeholder="Enter result roll no"
        ></input>
      </div>
      <div className="input-type">
        <input
          ref={regnumberref}
          className="border w-full px-5 py-3 focus:outline-none"
          type="number"
          name="resultregno"
          placeholder="Enter registration number"
        ></input>
      </div>
      <div className="input-type">
        <input
          ref={madrashanameref}
          className="border w-full px-5 py-3 focus:outline-none"
          type="text"
          name="exammadrasha"
          placeholder="Enter Madrasha Name"
        ></input>
      </div>
      <div className="input-type">
        <input
          ref={examcentreref}
          className="border w-full px-5 py-3 focus:outline-none"
          type="text"
          name="examcentre"
          placeholder="Enter exam centre"
        ></input>
      </div>

      <div className="input-type">
        <textarea
          ref={markpayloadref}
          id="submark"
          name="submark"
          rows="1"
          className="border w-full px-5 py-3 focus:outline-none"
          placeholder="Enter Mark array of object"
        ></textarea>
      </div>
      <div className="input-type">
        <select
          ref={studentgraderef}
          className="border w-full px-5 py-3 focus:outline-none rounded-md"
          name="studentgraderef"
        >
          <option value={undefined}>Select Grade</option>
          <option value="Mumtaj">Mumtaj</option>
          <option value="Zayyid Jiddan">Zayyid Jiddan</option>
          <option value="Zayyid">Zayyid</option>
          <option value="Makbul">Makbul</option>
          <option value="Rasib">Rasib</option>
        </select>
      </div>
      <div className="input-type">
        <input
          ref={studentmeritref}
          className="border w-full px-5 py-3 focus:outline-none rounded-md"
          type="number"
          name="studentmerit"
          placeholder="Enter student merit"
        ></input>
      </div>
      <div className="input-type">
     

        <select
          ref={passingYearref}
          className="border w-full px-5 py-3 focus:outline-none rounded-md"
          name="passingYearref"
        >
          <option value={undefined}>Select Passing Year</option>
          <option value={2021}>2021</option>
          <option value={2022}>2022</option>
          <option value={2023}>2023</option>
          <option value={2024}>2024</option>
        </select>
      </div>
      <div className="input-type">
        <input
          ref={pictureref}
          className="border w-full px-5 py-3 focus:outline-none rounded-md"
          type="text"
          name="studentmerit"
          placeholder="Enter Image link"
        ></input>
      </div>
      <div className="input-type">
       

        <select
          ref={marhalaref}
          className="border w-full px-5 py-3 focus:outline-none rounded-md"
          name="marhalaref"
        >
          <option value={undefined}>Select Marhala</option>
          <option value="Mutawassita">Mutawassita</option>
          <option value="Sanabiyatul Ulwia">Sanabiyatul Ulwia</option>
          <option value="Fajilat">Fajilat</option>
          <option value="Takmil">Takmil</option>
        </select>
        
      </div>
      <div className="flex gap-10 items-center">
        <div className="form-check">
          <input
            ref={resultradio1ref}
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
            ref={resultradio2ref}
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

export default NewResultForm;
