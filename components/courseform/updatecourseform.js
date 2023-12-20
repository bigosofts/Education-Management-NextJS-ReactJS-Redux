"use client";
import React from "react";
import { useRef } from "react";
import { BiBrush } from "react-icons/bi";
import myToast from "@/components/toast/toast";
import { updateData } from "@/apiservices/courseapiservices";
import { useState, useEffect } from "react";

function UpdateCourseForm(props) {
  const [inputType, setInputType] = useState("text");
  const handleFocus = () => {
    setInputType("date");
  };

  const handleBlur = () => {
    setInputType("text");
  };

  const [course, setCourse] = useState({
    titleen: props.payload.title.en,
    titleenbn: props.payload.title.bn,
    courseCode: props.payload.courseCode,
    imageLink: props.payload.imageLink,
    categoriesen: props.payload.categories.en,
    categoriesbn: props.payload.categories.bn,
    popularityen: props.payload.popularity.en,
    popularitybn: props.payload.popularity.bn,
    jamatName: props.payload.jamatName,
    descriptionen: props.payload.description.en,
    descriptionbn: props.payload.description.bn,
    startingDateen: props.payload.startingDate.en,
    startingDatebn: props.payload.startingDate.bn,
    status: props.payload.activeStatus,

    instructor: props.payload.instructor,
    coursePrice: props.payload.coursePrice,
    courseButton: props.payload.courseButton,
    courseInfo: props.payload.courseInfo,
    detailData: props.payload.detailData,
    courseSyllabus: props.payload.courseSyllabus,
    faq: props.payload.faq,
    commentID: props.payload.commentID,
    courseMaterial: props.payload.courseMaterial,
    commonQuestion: props.payload.commonQuestion,
    courseVideoID: props.payload.courseVideoID,
  });

  useEffect(() => {
    setCourse({
      titleen: props.payload.title.en,
      titleenbn: props.payload.title.bn,
      courseCode: props.payload.courseCode,
      imageLink: props.payload.imageLink,
      categoriesen: props.payload.categories.en,
      categoriesbn: props.payload.categories.bn,
      popularityen: props.payload.popularity.en,
      popularitybn: props.payload.popularity.bn,
      jamatName: props.payload.jamatName,
      descriptionen: props.payload.description.en,
      descriptionbn: props.payload.description.bn,
      startingDateen: props.payload.startingDate.en,
      startingDatebn: props.payload.startingDate.bn,
      status: props.payload.activeStatus,

      instructor: props.payload.instructor,
      coursePrice: props.payload.coursePrice,
      courseButton: props.payload.courseButton,
      courseInfo: props.payload.courseInfo,
      detailData: props.payload.detailData,
      courseSyllabus: props.payload.courseSyllabus,
      faq: props.payload.faq,
      commentID: props.payload.commentID,
      courseMaterial: props.payload.courseMaterial,
      commonQuestion: props.payload.commonQuestion,
      courseVideoID: props.payload.courseVideoID,
    });
  }, [
    props.payload.title.en,
    props.payload.title.bn,
    props.payload.courseCode,
    props.payload.imageLink,
    props.payload.categories.en,
    props.payload.categories.bn,
    props.payload.popularity.en,
    props.payload.popularity.bn,
    props.payload.jamatName,
    props.payload.description.en,
    props.payload.description.bn,
    props.payload.startingDate.en,
    props.payload.startingDate.bn,
    props.payload.activeStatus,

    props.payload.instructor,
    props.payload.coursePrice,
    props.payload.courseButton,
    props.payload.courseInfo,
    props.payload.detailData,
    props.payload.courseSyllabus,
    props.payload.faq,
    props.payload.commentID,
    props.payload.courseMaterial,
    props.payload.commonQuestion,
    props.payload.courseVideoID,
  ]);

  const coursetitleref = useRef();
  const coursetitlebnref = useRef();
  const coursecoderef = useRef();
  const courseimagelinkref = useRef();
  const coursecategoryref = useRef();
  const coursecategorybnref = useRef();
  const coursepopularityref = useRef();
  const coursepopularitybnref = useRef();
  const coursejamatcoderef = useRef();
  const coursedescriptionref = useRef();
  const coursedescriptionbnref = useRef();
  const coursestartingdateenref = useRef();
  const coursestartingdatebnref = useRef();

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
    const titleen = coursetitleref.current.value;
    const titlebn = coursetitlebnref.current.value;
    const courseCode = coursecoderef.current.value;
    const imageLink = courseimagelinkref.current.value;
    const categoriesen = coursecategoryref.current.value;
    const categoriesbn = coursecategorybnref.current.value;
    const popularityen = coursepopularityref.current.value;
    const popularitybn = coursepopularitybnref.current.value;
    const jamatName = coursejamatcoderef.current.value;
    const descriptionen = coursedescriptionref.current.value;
    const descriptionbn = coursedescriptionbnref.current.value;
    const startingDateen = coursestartingdateenref.current.value;
    const startingDatebn = coursestartingdatebnref.current.value;

    const instructor = instructorref.current.value;
    const instructorParsed = JSON.parse(instructor);
    const coursePrice = coursePriceref.current.value;
    const coursePriceParsed = JSON.parse(coursePrice);
    const courseButton = courseButtonref.current.value;
    const courseButtonParsed = JSON.parse(courseButton);
    const courseInfo = courseInforef.current.value;
    const courseInfoParsed = JSON.parse(courseInfo);
    const detailData = detailDataref.current.value;
    const detailDataParsed = JSON.parse(detailData);
    const courseSyllabus = courseSyllabusref.current.value;
    const courseSyllabusParsed = JSON.parse(courseSyllabus);
    const faq = faqref.current.value;
    const faqParsed = JSON.parse(faq);
    const commentID = commentIDref.current.value;
    const commentIDParsed = JSON.parse(commentID);
    const courseMaterial = courseMaterialref.current.value;
    const courseMaterialParsed = JSON.parse(courseMaterial);
    const commonQuestion = commonQuestionref.current.value;
    const commonQuestionParsed = JSON.parse(commonQuestion);
    const courseVideoID = courseVideoIDref.current.value;
    const courseVideoIDParsed = JSON.parse(courseVideoID);

    const courseradio1 = courseradio1ref.current.checked;
    const courseradio2 = courseradio2ref.current.checked;
    const status = courseradio1
      ? "active"
      : courseradio2
      ? "inactive"
      : "inactive";
    const idValue = props.data;

    const res = await updateData(
      imageLink,
      courseCode,
      titleen,
      titlebn,
      descriptionen,
      descriptionbn,
      categoriesen,
      categoriesbn,
      startingDateen,
      startingDatebn,
      popularityen,
      popularitybn,
      jamatName,
      status,
      idValue,
      instructorParsed,
      coursePriceParsed,
      courseButtonParsed,
      courseInfoParsed,
      detailDataParsed,
      courseSyllabusParsed,
      faqParsed,
      commentIDParsed,
      courseMaterialParsed,
      commonQuestionParsed,
      courseVideoIDParsed
    );

    if (res) {
      props.statechanger();
      myToast.success("Data was Updated successfully");
    } else {
      myToast.warning("something went wrong");
    }
  };
  const onChangeHandler1 = (e) => {
    setCourse({
      titleen: e.target.value,
    });
  };
  const onChangeHandler2 = (e) => {
    setCourse({
      titleenbn: e.target.value,
    });
  };
  const onChangeHandler3 = (e) => {
    setCourse({
      courseCode: e.target.value,
    });
  };
  const onChangeHandler4 = (e) => {
    setCourse({
      imageLink: e.target.value,
    });
  };
  const onChangeHandler5 = (e) => {
    setCourse({
      categoriesen: e.target.value,
    });
  };
  const onChangeHandler6 = (e) => {
    setCourse({
      categoriesbn: e.target.value,
    });
  };
  const onChangeHandler7 = (e) => {
    setCourse({
      popularityen: e.target.value,
    });
  };
  const onChangeHandler8 = (e) => {
    setCourse({
      popularitybn: e.target.value,
    });
  };
  const onChangeHandler9 = (e) => {
    setCourse({
      jamatName: e.target.value,
    });
  };
  const onChangeHandler10 = (e) => {
    setCourse({
      descriptionen: e.target.value,
    });
  };
  const onChangeHandler11 = (e) => {
    setCourse({
      descriptionbn: e.target.value,
    });
  };
  const onChangeHandler12 = (e) => {
    setCourse({
      startingDateen: e.target.value,
    });
  };
  const onChangeHandler13 = (e) => {
    setCourse({
      startingDatebn: e.target.value,
    });
  };
  const onChangeHandler14 = (e) => {
    setCourse({
      instructorParsed: JSON.parse(e.target.value),
    });
  };
  const onChangeHandler15 = (e) => {
    setCourse({
      coursePriceParsed: JSON.parse(e.target.value),
    });
  };
  const onChangeHandler16 = (e) => {
    setCourse({
      courseButtonParsed: JSON.parse(e.target.value),
    });
  };
  const onChangeHandler17 = (e) => {
    setCourse({
      courseInfoParsed: JSON.parse(e.target.value),
    });
  };
  const onChangeHandler18 = (e) => {
    setCourse({
      detailDataParsed: JSON.parse(e.target.value),
    });
  };
  const onChangeHandler19 = (e) => {
    setCourse({
      courseSyllabusParsed: JSON.parse(e.target.value),
    });
  };
  const onChangeHandler20 = (e) => {
    setCourse({
      faqParsed: JSON.parse(e.target.value),
    });
  };
  const onChangeHandler21 = (e) => {
    setCourse({
      commentIDParsed: JSON.parse(e.target.value),
    });
  };
  const onChangeHandler22 = (e) => {
    setCourse({
      courseMaterialParsed: JSON.parse(e.target.value),
    });
  };
  const onChangeHandler23 = (e) => {
    setCourse({
      commonQuestionParsed: JSON.parse(e.target.value),
    });
  };
  const onChangeHandler24 = (e) => {
    setCourse({
      courseVideoIDParsed: JSON.parse(e.target.value),
    });
  };

  console.log(course);
  return (
    <form className="grid lg:grid-cols-3 w-full gap-5">
      <div className="input-type">
        <input
          onChange={onChangeHandler1}
          ref={coursetitleref}
          className="border w-full px-5 py-3 focus:outline-none"
          type="text"
          name="coursetitle"
          placeholder="Enter course title"
          value={course.titleen}
        ></input>
      </div>
      <div className="input-type">
        <input
          onChange={onChangeHandler2}
          ref={coursetitlebnref}
          className="border w-full px-5 py-3 focus:outline-none"
          type="text"
          name="coursetitlebn"
          placeholder="কোর্স টাইটেল বাংলায় লিখুন"
          value={course.titleenbn}
        ></input>
      </div>
      <div className="input-type">
        <input
          onChange={onChangeHandler3}
          ref={coursecoderef}
          className="border w-full px-5 py-3 focus:outline-none"
          type="text"
          name="coursecode"
          placeholder="Enter course code"
          value={course.courseCode}
        ></input>
      </div>
      <div className="input-type">
        <input
          onChange={onChangeHandler4}
          ref={courseimagelinkref}
          className="border w-full px-5 py-3 focus:outline-none"
          type="text"
          name="imagelink"
          placeholder="Enter image link"
          value={course.imageLink}
        ></input>
      </div>
      <div className="input-type">
        <input
          onChange={onChangeHandler5}
          ref={coursecategoryref}
          className="border w-full px-5 py-3 focus:outline-none"
          type="text"
          name="coursecategory"
          placeholder="Enter course category"
          value={course.categoriesen}
        ></input>
      </div>
      <div className="input-type">
        <input
          onChange={onChangeHandler6}
          ref={coursecategorybnref}
          className="border w-full px-5 py-3 focus:outline-none"
          type="text"
          name="coursecategorybn"
          placeholder="কোর্সের ধরণ বাংলায় লিখুন"
          value={course.categoriesbn}
        ></input>
      </div>
      <div className="input-type">
        <input
          onChange={onChangeHandler7}
          ref={coursepopularityref}
          className="border w-full px-5 py-3 focus:outline-none"
          type="text"
          name="coursepopularity"
          placeholder="Enter course popularity"
          value={course.popularityen}
        ></input>
      </div>
      <div className="input-type">
        <input
          onChange={onChangeHandler8}
          ref={coursepopularitybnref}
          className="border w-full px-5 py-3 focus:outline-none"
          type="text"
          name="coursepopularitybn"
          placeholder="কোর্সের জনপ্রিয়তা বাংলায় লিখুন"
          value={course.popularitybn}
        ></input>
      </div>
      <div className="input-type">
        <input
          onChange={onChangeHandler9}
          ref={coursejamatcoderef}
          className="border w-full px-5 py-3 focus:outline-none"
          type="text"
          name="coursejamat"
          placeholder="Enter jamat code"
          value={course.jamatName}
        ></input>
      </div>
      <div className="input-type">
        <textarea
          onChange={onChangeHandler10}
          ref={coursedescriptionref}
          id="coursedescription"
          name="coursedescription"
          rows="1"
          className="border w-full px-5 py-3 focus:outline-none"
          placeholder="Enter Course Description"
          value={course.descriptionen}
        ></textarea>
      </div>
      <div className="input-type">
        <textarea
          onChange={onChangeHandler11}
          ref={coursedescriptionbnref}
          id="coursedescriptionbn"
          name="coursedescriptionbn"
          rows="1"
          className="border w-full px-5 py-3 focus:outline-none"
          placeholder="বাংলায় কোর্সের বিবরণ লিখুন"
          value={course.descriptionbn}
        ></textarea>
      </div>
      <div className="input-type">
        <input
          onChange={onChangeHandler13}
          ref={coursestartingdatebnref}
          placeholder="বাংলায় কোর্স শুরুর তারিখ লিখুন"
          className="border w-full px-5 py-3 focus:outline-none"
          type="text"
          name="coursestartingdate"
          value={course.startingDatebn}
        />
      </div>
      <div className="input-type">
        <input
          onChange={onChangeHandler12}
          ref={coursestartingdateenref}
          placeholder="Enter Starting Date"
          className="border w-full px-5 py-3 focus:outline-none"
          type={inputType}
          onFocus={handleFocus}
          onBlur={handleBlur}
          name="coursestartingdate"
          value={course.startingDateen}
        />
      </div>

      <textarea
        onChange={onChangeHandler14}
        value={JSON.stringify(course.instructor)}
        ref={instructorref}
        id="instructorref"
        name="instructorref"
        rows="1"
        className="border w-full px-5 py-3 focus:outline-none"
        placeholder="please write the instructor object"
      ></textarea>
      <textarea
        onChange={onChangeHandler15}
        value={JSON.stringify(course.coursePrice)}
        ref={coursePriceref}
        id="coursePriceref"
        name="coursePriceref"
        rows="1"
        className="border w-full px-5 py-3 focus:outline-none"
        placeholder="please write the course price object"
      ></textarea>
      <textarea
        onChange={onChangeHandler16}
        value={JSON.stringify(course.courseButton)}
        ref={courseButtonref}
        id="courseButtonref"
        name="courseButtonref"
        rows="1"
        className="border w-full px-5 py-3 focus:outline-none"
        placeholder="please write the course button object"
      ></textarea>
      <textarea
        onChange={onChangeHandler17}
        value={JSON.stringify(course.courseInfo)}
        ref={courseInforef}
        id="courseInforef"
        name="courseInforef"
        rows="1"
        className="border w-full px-5 py-3 focus:outline-none"
        placeholder="please write the course info object"
      ></textarea>
      <textarea
        onChange={onChangeHandler18}
        value={JSON.stringify(course.detailData)}
        ref={detailDataref}
        id="detailDataref"
        name="detailDataref"
        rows="1"
        className="border w-full px-5 py-3 focus:outline-none"
        placeholder="please write the detail data object"
      ></textarea>
      <textarea
        onChange={onChangeHandler19}
        value={JSON.stringify(course.courseSyllabus)}
        ref={courseSyllabusref}
        id="courseSyllabusref"
        name="courseSyllabusref"
        rows="1"
        className="border w-full px-5 py-3 focus:outline-none"
        placeholder="please write the course syllabus object"
      ></textarea>
      <textarea
        onChange={onChangeHandler20}
        value={JSON.stringify(course.faq)}
        ref={faqref}
        id="faqref"
        name="faqref"
        rows="1"
        className="border w-full px-5 py-3 focus:outline-none"
        placeholder="please write the faq object"
      ></textarea>
      <textarea
        onChange={onChangeHandler21}
        value={JSON.stringify(course.commentID)}
        ref={commentIDref}
        id="commentIDref"
        name="commentIDref"
        rows="1"
        className="border w-full px-5 py-3 focus:outline-none"
        placeholder="please write the comment ID object"
      ></textarea>
      <textarea
        onChange={onChangeHandler22}
        value={JSON.stringify(course.courseMaterial)}
        ref={courseMaterialref}
        id="courseMaterialref"
        name="courseMaterialref"
        rows="1"
        className="border w-full px-5 py-3 focus:outline-none"
        placeholder="please write the course Material object"
      ></textarea>
      <textarea
        onChange={onChangeHandler23}
        value={JSON.stringify(course.commonQuestion)}
        ref={commonQuestionref}
        id="commonQuestionref"
        name="commonQuestionref"
        rows="1"
        className="border w-full px-5 py-3 focus:outline-none"
        placeholder="please write the common question object"
      ></textarea>
      <textarea
        onChange={onChangeHandler24}
        value={JSON.stringify(course.courseVideoID)}
        ref={courseVideoIDref}
        id="courseVideoIDref"
        name="courseVideoIDref"
        rows="1"
        className="border w-full px-5 py-3 focus:outline-none"
        placeholder="please write the course video object"
      ></textarea>

      <div className="flex gap-10 items-center">
        {props.payload.activeStatus == "active" ? (
          <div className="form-check">
            <input
              ref={courseradio1ref}
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
              ref={courseradio1ref}
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
              ref={courseradio2ref}
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
              ref={courseradio2ref}
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

export default UpdateCourseForm;
