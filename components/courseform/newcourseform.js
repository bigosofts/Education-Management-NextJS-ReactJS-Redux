"use client";
import React from "react";
import { useRef, useState } from "react";
import { BiPlus, BiPulse } from "react-icons/bi";
import myToast from "@/components/toast/toast";
import { createData } from "@/apiservices/courseapiservices";
import MdInput from "./formInput";
import FormTextArea from "./formTextarea";
import { useForm } from "react-hook-form";
import CourseFaq from "./formFaq";
import FormDate from "./formDate";
import FormRadio from "./formRadio";
import { Button } from "@mui/material";

function NewCourseForm(props) {
  const { register, handleSubmit, control } = useForm();
  const [faqs, setFaqs] = useState([]);
  const [faqVisible, setfaqVisible] = useState(false);

  const clickHandler = async (e) => {
    e.preventDefault();
    const courseCode = courseCoderef?.current?.value;
    const imageLink = imageLinkref?.current?.value;
    const title = titleref?.current?.value;

    console.log(title);

    // const courseradio1 = courseradio1ref.current.checked;
    // const courseradio2 = courseradio2ref.current.checked;

    // const status = courseradio1
    //   ? "active"
    //   : courseradio2
    //   ? "inactive"
    //   : "inactive";

    // const res = await createData({
    //   courseCode: courseCode,
    //   imageLink: imageLink,
    //   title: titleParsed,
    //   description: descriptionParsed,
    //   categories: categoriesParsed,
    //   startingDate: startingDateParsed,
    //   popularity: popularityParsed,
    //   jamatName: jamatNameparsed,
    //   activeStatus: status,
    //   instructor: instructorParsed,
    //   coursePrice: coursePriceParsed,
    //   courseButton: courseButtonParsed,
    //   courseInfo: courseInfoParsed,
    //   detailData: detailDataParsed,
    //   courseSyllabus: courseSyllabusParsed,
    //   faq: faqParsed,
    //   commentID: commentIDParsed,
    //   courseMaterial: courseMaterialParsed,
    //   commonQuestion: commonQuestionParsed,
    //   courseVideoID: courseVideoIDParsed,
    // });

    // if (res) {
    //   props.statechanger();
    //   myToast.success("Data was created successfully");
    // } else {
    //   myToast.warning("something went wrong");
    // }
  };

  const submitByReactHookForm = (data) => {
    console.log(data);

    const fakeData = {
      courseCode: data.courseCode,
      imageLink: data.imageLink,
      title: {
        en: data.titleEn,
        bn: data.titleBn,
      },
      description: {
        en: data.descriptionEn,
        bn: data.descriptionBn,
      },
      categories: {
        en: "Computer Science, Programming",
        bn: "কম্পিউটার বিজ্ঞান, প্রোগ্রামিং",
      },
      startingDate: {
        en: "2023-11-01",
        bn: "২০২৩-১১-০১",
      },
      popularity: {
        en: "High",
        bn: "উচ্চ",
      },
      jamatName: ["Tech Enthusiasts", "Programming Gurus"],
      activeStatus: "active",
      instructor: [
        {
          name: {
            en: "John Doe",
            bn: "জন ডো",
          },
          experience: {
            en: "5 years of teaching experience.",
            bn: "৫ বছরের শিক্ষাদানের অভিজ্ঞতা।",
          },
          image: "https://example.com/instructor-image.jpg",
        },
      ],
      coursePrice: {
        registration: {
          tk: data.registration_taka,
          us: data.registration_dollar,
        },
        monthly: {
          tk: data.monthly_taka,
          us: data.monthly_dollar,
        },
        time: {
          heading: {
            en: "Duration",
            bn: "সময়কাল",
          },
          text: {
            en: "3 months",
            bn: "৩ মাস",
          },
        },
      },
      courseButton: {
        text: {
          en: "Enroll Now",
          bn: "এখন ভর্তি হন",
        },
        link: "https://example.com/enroll",
      },
      courseInfo: [
        {
          title: {
            en: "Course Objectives",
            bn: "কোর্সের উদ্দেশ্য",
          },
        },
      ],
      detailData: [
        {
          title: {
            en: "Prerequisites",
            bn: "প্রাক-শর্ত",
          },
          desc: {
            en: "Basic understanding of mathematics.",
            bn: "গণিতের মৌলিক ধারণা।",
          },
        },
      ],
      courseSyllabus: [
        {
          icon: "https://example.com/icon.png",
          text: {
            en: "Introduction to Programming",
            bn: "প্রোগ্রামিং পরিচিতি",
          },
          desc: {
            en: "An overview of programming concepts.",
            bn: "প্রোগ্রামিং ধারণার একটি সারসংক্ষেপ।",
          },
          img: "https://example.com/syllabus-image.jpg",
        },
      ],
      faq: [
        {
          question: {
            en: "What is the duration of the course?",
            bn: "কোর্সটির সময়কাল কত?",
          },
          answer: {
            en: "The course lasts for 3 months.",
            bn: "কোর্সটি ৩ মাস স্থায়ী।",
          },
        },
      ],
      commentID: ["comment123", "comment456"],
      courseMaterial: [
        {
          en: "Course Handbook",
          bn: "কোর্স হ্যান্ডবুক",
        },
      ],
      commonQuestion: [
        {
          question: {
            en: "Is there a certificate provided?",
            bn: "সার্টিফিকেট প্রদান করা হয়?",
          },
          answer: {
            en: "Yes, a certificate is provided upon completion.",
            bn: "হ্যাঁ, সম্পন্ন করার পর একটি সার্টিফিকেট প্রদান করা হয়।",
          },
        },
      ],
      courseVideoID: ["video123", "video456"],
    };
  };

  return (
    <form
      onSubmit={handleSubmit(submitByReactHookForm)}
      className="flex flex-col gap-5 p-5"
    >
      {/* Course title  */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
        <MdInput
          control={control}
          name="titleEn"
          placeholder="Course Title English"
        />

        <MdInput
          control={control}
          name="titleBn"
          placeholder="কোর্স টাইটেল বাংলায় লিখুন"
        />
      </div>

      {/* Course Code And Date Input  */}
      <div className="grid grid-cols-3 gap-5">
        <MdInput control={control} name="imageLink" placeholder="Image Link" />
        <MdInput
          control={control}
          name="courseCode"
          placeholder="Course Code"
        />
        <FormDate control={control} name={"startingDate"} />
      </div>

      {/* course description  */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
        <FormTextArea
          name="descriptionEn"
          control={control}
          placeholder="Enter Your Description"
          rows="5"
        />
        <FormTextArea
          name="descriptionBn"
          control={control}
          placeholder="বাংলায় ডেস্কিরপশন লিখুন"
          rows="5"
        />
      </div>

      {/* course price list */}
      <div className="bg-[#e2e5eb]">
        <div className="grid grid-cols-2 gap-10 p-10">
          <div>
            <h4 className="text-xl mb-2 text-accent">Registration Fee</h4>
            <div className="grid grid-cols-2 gap-2">
              <MdInput
                control={control}
                type="number"
                name="registration_taka"
                placeholder="taka"
              />
              <MdInput
                control={control}
                type="number"
                name="registration_dollar"
                placeholder="doller"
              />
            </div>
          </div>

          <div>
            <h4 className="text-xl mb-2 text-[#496f82]">Monthey Fee</h4>
            <div className="grid grid-cols-2 gap-2">
              <MdInput
                control={control}
                type="number"
                name="monthly_taka"
                placeholder="taka"
              />
              <MdInput
                control={control}
                type="number"
                name="monthly_dollar"
                placeholder="doller"
              />
            </div>
          </div>
        </div>
      </div>

      {/* FAQ SLICE  */}
      {faqVisible ? (
        <div>
          <h2 className="mb-2 text-lg text-accent">
            If You want to add FAQ's, Please Enter
          </h2>
          <CourseFaq />
        </div>
      ) : (
        <Button onClick={(() => setfaqVisible(true))} variant="contained" className=" w-1/6 py-4 capitalize">
          Add Faq
          <BiPlus size={23} />
        </Button>
      )}

      {/* FROM ACTIVE CHECK  */}
      <div className="flex gap-10 items-center">
        <FormRadio control={control} name="active" value="Active" />
        <FormRadio control={control} name="active" value="Inactive" />
      </div>

      <button
        type="submit"
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

// const categories = [
//   {
//     name: "Category One",
//   },
//   {
//     name: "Category One",
//   },
//   {
//     name: "Category One",
//   },
//   {
//     name: "Category One",
//   },
// ];

export default NewCourseForm;
