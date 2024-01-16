"use client";
import React from "react";
import { useRef } from "react";
import { BiBrush } from "react-icons/bi";
import myToast from "@/components/toast/toast";
import { updateData } from "@/apiservices/menuapiservices";
import { useState, useEffect } from "react";

function updateMenuForm(props) {
  const [menu, setMenu] = useState({
    menutitle: props.payload.menuTitle.en,
    menutitlebn: props.payload.menuTitle.bn,
    menulink: props.payload.menuLink,
    menuicon: props.payload.menuIcon,
    menutype: props.payload.menuType,
    subMenu: props.payload.subMenu,
    activeStatus: props.payload.activeStatus,
  });

  useEffect(() => {
    setMenu({
      menutitle: props.payload.menuTitle.en,
      menutitlebn: props.payload.menuTitle.bn,
      menulink: props.payload.menuLink,
      menuicon: props.payload.menuIcon,
      menutype: props.payload.menuType,
      subMenu: props.payload.subMenu,
      activeStatus: props.payload.activeStatus,
    });
  }, [
    props.payload.menuTitle.en,
    props.payload.menuTitle.bn,
    props.payload.menuLink,
    props.payload.menuIcon,
    props.payload.menuType,
    props.payload.subMenu,
    props.payload.activeStatus,
  ]);

  const menutitleref = useRef();
  const menutitlebnref = useRef();
  const menulinkref = useRef();
  const menuiconref = useRef();
  const menutyperef = useRef();
  const subMenuref = useRef();
  const menuradio1ref = useRef();
  const menuradio2ref = useRef();

  const clickHandler = async (e) => {
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
    const idValue = props.data;

    const res = await updateData(
      menutitle,
      menutitlebn,
      menulink,
      menuicon,
      menutype,
      status,
      idValue,
      subMenuParsed
    );

    if (res) {
      props.statechanger();
      myToast.success("Data was Updated successfully");
    } else {
      myToast.warning("something went wrong");
    }
  };
  const onChangeHandler1 = (e) => {
    setMenu({
      menutitle: e.target.value,
    });
  };
  const onChangeHandler2 = (e) => {
    setMenu({
      menutitlebn: e.target.value,
    });
  };
  const onChangeHandler3 = (e) => {
    setMenu({
      menulink: e.target.value,
    });
  };
  const onChangeHandler4 = (e) => {
    setMenu({
      menuicon: e.target.value,
    });
  };
  const onChangeHandler5 = (e) => {
    setMenu({
      menutype: e.target.value,
    });
  };
  const onChangeHandler6 = (e) => {
    setMenu({
      subMenuParsed: e.target.value,
    });
  };

  return (
    <form className="grid lg:grid-cols-3 w-full gap-5">
      <div className="input-type">
        <input
          ref={menutitleref}
          onChange={onChangeHandler1}
          className="border w-full px-5 py-3 focus:outline-none"
          type="text"
          name="menutitle"
          placeholder="Enter menu title"
          value={menu.menutitle}
        ></input>
      </div>
      <div className="input-type">
        <input
          ref={menutitlebnref}
          onChange={onChangeHandler2}
          className="border w-full px-5 py-3 focus:outline-none"
          type="text"
          name="menutitlebn"
          placeholder="বাংলায় মেনু টাইটেল লিখুন"
          value={menu.menutitlebn}
        ></input>
      </div>
      <div className="input-type">
        <input
          ref={menulinkref}
          onChange={onChangeHandler3}
          className="border w-full px-5 py-3 focus:outline-none"
          type="text"
          name="menulink"
          placeholder="Enter menu link"
          value={menu.menulink}
        ></input>
      </div>
      <div className="input-type">
        <input
          ref={menuiconref}
          onChange={onChangeHandler4}
          className="border w-full px-5 py-3 focus:outline-none"
          type="text"
          name="menuicon"
          placeholder="Enter menu icon"
          value={menu.menuicon}
        ></input>
      </div>
      <div className="input-type">
        <input
          ref={menutyperef}
          onChange={onChangeHandler5}
          className="border w-full px-5 py-3 focus:outline-none"
          type="text"
          name="menutype"
          placeholder="Enter menu type"
          value={menu.menutype}
        ></input>
      </div>
      <div>
        <textarea
          ref={subMenuref}
          id="subMenuref"
          onChange={onChangeHandler6}
          value={JSON.stringify(menu.subMenu)}
          name="subMenuref"
          rows="1"
          className="border w-full px-5 py-3 focus:outline-none"
          placeholder="Enter SubMenu Object here"
        ></textarea>
      </div>
      <div className="flex gap-10 items-center">
        {props.payload.activeStatus == "active" ? (
          <div className="form-check">
            <input
              ref={menuradio1ref}
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
              ref={menuradio1ref}
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
              ref={menuradio2ref}
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
              ref={menuradio2ref}
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

export default updateMenuForm;
