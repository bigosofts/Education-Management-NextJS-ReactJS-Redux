"use client";
import React from "react";
import { useRef, useState } from "react";
import { BiPlus } from "react-icons/bi";
import myToast from "@/components/toast/toast";
import { createData } from "@/apiservices/courseapiservices";

function NewCourseForm(props) {
  const courseCoderef = useRef();
  const imageLinkref = useRef();
  const titleref = useRef();
  const descriptionref = useRef();
  const categoriesref = useRef();
  const startingDateref = useRef();
  const popularityref = useRef();
  const jamatNameref = useRef();
  const instructorref = useRef();
  const coursePriceref = useRef();
  const courseButtonref = useRef();
  const courseInforef = useRef();
  const detailDataref = useRef();
  const courseSyllabusref = useRef();
  const faqref = useRef();
  const commentIDref = useRef();
  const courseMaterialref = useRef();
  const commonQuestionref = useRef();
  const courseVideoIDref = useRef();

  const courseradio1ref = useRef();
  const courseradio2ref = useRef();

  const clickHandler = async (e) => {
    e.preventDefault();
    const courseCode = courseCoderef.current.value;

    const imageLink = imageLinkref.current.value;

    const title = titleref.current.value;
    const titleParsed = JSON.parse(title.replace(/(\r\n|\n|\r)/gm, ""));

    const description = descriptionref.current.value;
    const descriptionParsed = JSON.parse(
      description.replace(/(\r\n|\n|\r)/gm, "")
    );

    const categories = categoriesref.current.value;
    const categoriesParsed = JSON.parse(
      categories.replace(/(\r\n|\n|\r)/gm, "")
    );

    const startingDate = startingDateref.current.value;
    const startingDateParsed = JSON.parse(
      startingDate.replace(/(\r\n|\n|\r)/gm, "")
    );

    const popularity = popularityref.current.value;
    const popularityParsed = JSON.parse(
      popularity.replace(/(\r\n|\n|\r)/gm, "")
    );

    const jamatName = jamatNameref.current.value;
    const jamatNameparsed = JSON.parse(jamatName.replace(/(\r\n|\n|\r)/gm, ""));

    const instructor = instructorref.current.value;
    const instructorParsed = JSON.parse(
      instructor.replace(/(\r\n|\n|\r)/gm, "")
    );

    const coursePrice = coursePriceref.current.value;
    const coursePriceParsed = JSON.parse(
      coursePrice.replace(/(\r\n|\n|\r)/gm, "")
    );

    const courseButton = courseButtonref.current.value;
    const courseButtonParsed = JSON.parse(
      courseButton.replace(/(\r\n|\n|\r)/gm, "")
    );

    const courseInfo = courseInforef.current.value;
    const courseInfoParsed = JSON.parse(
      courseInfo.replace(/(\r\n|\n|\r)/gm, "")
    );

    const detailData = detailDataref.current.value;
    const detailDataParsed = JSON.parse(
      detailData.replace(/(\r\n|\n|\r)/gm, "")
    );

    const courseSyllabus = courseSyllabusref.current.value;
    const courseSyllabusParsed = JSON.parse(
      courseSyllabus.replace(/(\r\n|\n|\r)/gm, "")
    );

    const faq = faqref.current.value;
    const faqParsed = JSON.parse(faq.replace(/(\r\n|\n|\r)/gm, ""));

    const commentID = commentIDref.current.value;
    const commentIDParsed = JSON.parse(commentID.replace(/(\r\n|\n|\r)/gm, ""));

    const courseMaterial = courseMaterialref.current.value;
    const courseMaterialParsed = JSON.parse(
      courseMaterial.replace(/(\r\n|\n|\r)/gm, "")
    );

    const commonQuestion = commonQuestionref.current.value;
    const commonQuestionParsed = JSON.parse(
      commonQuestion.replace(/(\r\n|\n|\r)/gm, "")
    );

    const courseVideoID = courseVideoIDref.current.value;
    const courseVideoIDParsed = JSON.parse(
      courseVideoID.replace(/(\r\n|\n|\r)/gm, "")
    );

    const courseradio1 = courseradio1ref.current.checked;
    const courseradio2 = courseradio2ref.current.checked;

    const status = courseradio1
      ? "active"
      : courseradio2
      ? "inactive"
      : "inactive";

    const res = await createData({
      courseCode: courseCode,
      imageLink: imageLink,
      title: titleParsed,
      description: descriptionParsed,
      categories: categoriesParsed,
      startingDate: startingDateParsed,
      popularity: popularityParsed,
      jamatName: jamatNameparsed,
      activeStatus: status,
      instructor: instructorParsed,
      coursePrice: coursePriceParsed,
      courseButton: courseButtonParsed,
      courseInfo: courseInfoParsed,
      detailData: detailDataParsed,
      courseSyllabus: courseSyllabusParsed,
      faq: faqParsed,
      commentID: commentIDParsed,
      courseMaterial: courseMaterialParsed,
      commonQuestion: commonQuestionParsed,
      courseVideoID: courseVideoIDParsed,
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
      <div className="input-type">
        <input
          ref={courseCoderef}
          placeholder="Enter Course Code"
          className="border w-full px-5 py-3 focus:outline-none"
          type="text"
          name="courseCoderef"
        />
      </div>
      <div className="input-type">
        <input
          ref={imageLinkref}
          placeholder="Enter Course Image Link"
          className="border w-full px-5 py-3 focus:outline-none"
          type="text"
          name="imageLinkref"
        />
      </div>

      <textarea
        ref={titleref}
        id="titleref"
        name="titleref"
        rows="1"
        className="border w-full px-5 py-3 focus:outline-none"
        placeholder="Enter Course Title Object"
      ></textarea>

      <textarea
        ref={descriptionref}
        id="descriptionref"
        name="descriptionref"
        rows="1"
        className="border w-full px-5 py-3 focus:outline-none"
        placeholder="Enter Course Description Object"
      ></textarea>

      <textarea
        ref={categoriesref}
        id="categoriesref"
        name="categoriesref"
        rows="1"
        className="border w-full px-5 py-3 focus:outline-none"
        placeholder="Enter Course Category"
      ></textarea>

      <textarea
        ref={startingDateref}
        id="startingDateref"
        name="startingDateref"
        rows="1"
        className="border w-full px-5 py-3 focus:outline-none"
        placeholder="Enter Course Starting Date"
      ></textarea>

      <textarea
        ref={popularityref}
        id="popularityref"
        name="popularityref"
        rows="1"
        className="border w-full px-5 py-3 focus:outline-none"
        placeholder="Enter Course popularity"
      ></textarea>

      <textarea
        ref={jamatNameref}
        placeholder="Enter Course jamat Name"
        rows="1"
        className="border w-full px-5 py-3 focus:outline-none"
        type="text"
        name="jamatNameref"
      />

      <textarea
        ref={instructorref}
        id="instructorref"
        name="instructorref"
        rows="1"
        className="border w-full px-5 py-3 focus:outline-none"
        placeholder="Enter Course instructor Array"
      ></textarea>

      <textarea
        ref={coursePriceref}
        id="coursePriceref"
        name="coursePriceref"
        rows="1"
        className="border w-full px-5 py-3 focus:outline-none"
        placeholder="Enter Course Price Object"
      ></textarea>

      <textarea
        ref={courseButtonref}
        id="courseButtonref"
        name="courseButtonref"
        rows="1"
        className="border w-full px-5 py-3 focus:outline-none"
        placeholder="Enter Course Button Object"
      ></textarea>

      <textarea
        ref={courseInforef}
        id="courseInforef"
        name="courseInforef"
        rows="1"
        className="border w-full px-5 py-3 focus:outline-none"
        placeholder="Enter Course Info Array"
      ></textarea>

      <textarea
        ref={detailDataref}
        id="detailDataref"
        name="detailDataref"
        rows="1"
        className="border w-full px-5 py-3 focus:outline-none"
        placeholder="Enter Detail Data Object"
      ></textarea>

      <textarea
        ref={courseSyllabusref}
        id="courseSyllabusref"
        name="courseSyllabusref"
        rows="1"
        className="border w-full px-5 py-3 focus:outline-none"
        placeholder="Enter Course Syllabus Array"
      ></textarea>

      <textarea
        ref={faqref}
        id="faqref"
        name="faqref"
        rows="1"
        className="border w-full px-5 py-3 focus:outline-none"
        placeholder="Enter Course FAQ Array"
      ></textarea>

      <textarea
        ref={commentIDref}
        id="commentIDref"
        name="commentIDref"
        rows="1"
        className="border w-full px-5 py-3 focus:outline-none"
        placeholder="Enter Course Comment ID Array"
      ></textarea>

      <textarea
        ref={courseMaterialref}
        id="courseMaterialref"
        name="courseMaterialref"
        rows="1"
        className="border w-full px-5 py-3 focus:outline-none"
        placeholder="Enter Course Materials Array"
      ></textarea>

      <textarea
        ref={commonQuestionref}
        id="commonQuestionref"
        name="commonQuestionref"
        rows="1"
        className="border w-full px-5 py-3 focus:outline-none"
        placeholder="Enter Course Common Question Array"
      ></textarea>

      <textarea
        ref={courseVideoIDref}
        id="courseVideoIDref"
        name="courseVideoIDref"
        rows="1"
        className="border w-full px-5 py-3 focus:outline-none"
        placeholder="Enter Course Video ID Array"
      ></textarea>

      <div className="flex gap-10 items-center">
        <div className="form-check">
          <input
            ref={courseradio1ref}
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
            ref={courseradio2ref}
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

export default NewCourseForm;
