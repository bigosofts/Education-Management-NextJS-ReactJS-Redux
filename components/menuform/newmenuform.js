"use client";
import React from "react";
import { useRef } from "react";
import { BiPlus } from "react-icons/bi";
import myToast from "@/components/toast/toast";
import { createData } from "@/apiservices/menuapiservices";

function NewMenuForm(props) {
  const menutitleref = useRef();
  const menutitlebnref = useRef();
  const menulinkref = useRef();
  const menuiconref = useRef();
  const menutyperef = useRef();
  const menuradio1ref = useRef();
  const menuradio2ref = useRef();
  const subMenuref = useRef();

  const clickHandler = async (e) => {
    e.preventDefault();
    e.preventDefault();
    const menutitle = menutitleref.current.value;
    const menutitlebn = menutitlebnref.current.value;
    const menulink = menulinkref.current.value;
    const menuicon = menuiconref.current.value;
    const menutype = menutyperef.current.value;

    const subMenu = subMenuref.current.value;
    const subMenuParsed = JSON.parse(subMenu.replace(/(\r\n|\n|\r)/gm, ""));

    const menuradio1 = menuradio1ref.current.checked;
    const menuradio2 = menuradio2ref.current.checked;
    const status = menuradio1 ? "active" : menuradio2 ? "inactive" : "inactive";

    const res = await createData(
      menutitle,
      menutitlebn,
      menulink,
      menuicon,
      menutype,
      status,
      subMenuParsed
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
          ref={menutitleref}
          className="border w-full px-5 py-3 focus:outline-none"
          type="text"
          name="menutitle"
          placeholder="Enter menu title"
        ></input>
      </div>
      <div className="input-type">
        <input
          ref={menutitlebnref}
          className="border w-full px-5 py-3 focus:outline-none"
          type="text"
          name="menutitlebn"
          placeholder="বাংলায় মেনু টাইটেল লিখুন"
        ></input>
      </div>
      <div className="input-type">
        <input
          ref={menulinkref}
          className="border w-full px-5 py-3 focus:outline-none"
          type="text"
          name="menulink"
          placeholder="Enter menu link"
        ></input>
      </div>
      <div className="input-type">
        <input
          ref={menuiconref}
          className="border w-full px-5 py-3 focus:outline-none"
          type="text"
          name="menuicon"
          placeholder="Enter menu icon"
        ></input>
      </div>
      <div className="input-type">
        <input
          ref={menutyperef}
          className="border w-full px-5 py-3 focus:outline-none"
          type="text"
          name="menutype"
          placeholder="Enter menu type"
        ></input>
      </div>
      <div>
        <textarea
          ref={subMenuref}
          id="subMenuref"
          name="subMenuref"
          rows="1"
          className="border w-full px-5 py-3 focus:outline-none"
          placeholder="Enter Submenu Object here"
        ></textarea>
      </div>

      <div className="flex gap-10 items-center">
        <div className="form-check">
          <input
            ref={menuradio1ref}
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
            ref={menuradio2ref}
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

export default NewMenuForm;
