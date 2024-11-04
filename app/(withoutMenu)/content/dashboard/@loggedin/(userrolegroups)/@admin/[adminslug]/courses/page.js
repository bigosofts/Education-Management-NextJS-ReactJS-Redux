"use client";
import React from "react";
import { BiUserPlus } from "react-icons/bi";
import CourseCard from "@/components/coursecard";
import NewCourseForm from "@/components/courseform/newcourseform";
import UpdateCourseForm from "@/components/courseform/updatecourseform";
import { useState } from "react";
import mytoast from "@/components/toast/toast";
import { selectData, deleteData } from "@/apiservices/courseapiservices";
import Link from "next/link";
import CourseList from "@/components/shared/CourseList";

function CoursePage(props) {
  const [visible, setVisible] = useState(false);
  const [idValue, setId] = useState("");
  const [modifieddata, setmodifieddata] = useState();
  const [aftermodifieddata, setaftermodifieddata] = useState(null);

  const cardstateupdateHandler = async () => {
    const afterpayload = await selectData(null, null);
    setaftermodifieddata(afterpayload);
  };

  // Course Update handler
  const updateHandler = async (id, data) => {
    setVisible(true);
    setId(id);

    const modified = data.data.find((item) => item._id == id);

    setmodifieddata(modified);

    mytoast.info(`item ${id} selected for update`);
  };

  // Delete Handler
  const deleteHandler = (id) => {
    deleteData(id);
    mytoast.danger(`item ${id} is deleted`);
    const updatedData = aftermodifieddata.data.filter(
      (item) => item._id !== id
    );
    const constructeddata = {
      status: "Alhamdulillah",
      data: updatedData,
    };
    setaftermodifieddata(constructeddata);
  };

  return (
    <div className="main-box w-full min-w-[250px] overflow-y-scroll mx-5 pb-10">
      <h1 className="text-xl  md:text-5xl font-bold py-10  text-center bg-slate-500 text-white rounded-md">
        {" "}
        Courses Management{" "}
      </h1>
      <div className="container mx-auto flex justify-between py-5 border-b">
        <div className="left flex gap-3">
          <Link
            href={"add-new-course"}
            className="flex allColor text-white px-4 py-2 border rounded-md hover:border-slate-500 hover:text-white"
          >
            Add New Course{" "}
            <span className="px-1">
              <BiUserPlus size={23} />
            </span>
          </Link>
        </div>
      </div>
      <div className="container mx-auto">
        {visible ? (
          <UpdateCourseForm
            data={idValue}
            payload={modifieddata}
            statechanger={cardstateupdateHandler}
          />
        ) : (
          <></>
        )}
      </div>
      <div className="container mx-auto">
        <CourseList />
        {/* <CourseCard
          updateHandler={updateHandler}
          fromupdateform={aftermodifieddata}
          deleteHandler={deleteHandler}
        /> */}
      </div>
    </div>
  );
}

export default CoursePage;
