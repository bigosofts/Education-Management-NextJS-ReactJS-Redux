import CustomVideoGallery from "@/customComponents/allCustomComponents/customVideoGallery/CustomVideoGallery";

import AbacusCourse from "@/customComponents/allCustomComponents/AbacusCourses/AbacusCourses";

import { selectDataTwo as selectCourses } from "@/apiservices/courseapiservices";

import { selectDataTwo as selectComment } from "@/apiservices/commentapiservice";
import { selectDataTwo as selectRichText } from "@/apiservices/richtextapiservices";
import { selectDataLimit as selectResults } from "@/apiservices/resultapiservices";
import { selectDataTwo as selectWorks } from "@/apiservices/workapiservices";
import ResultCardSlider from "@/customComponents/allCustomComponents/ResultCardSlider/ResultCardSlider";
import AlemAlemaGrid from "@/customComponents/alemalemagrid/alemalemagrid";
import GalleryAll from "@/customComponents/GalleryALLLimited/GalleryALL";
import HifzGrid from "@/customComponents/hifzGrid2/hifzGrid";

function fisherYatesShuffle(array) {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
}

export async function generateStaticParams() {
  const resC = await selectCourses({
    activeStatus: "active",
  });

  if (resC.status == "Alhamdulillah") {
    return resC.data.map((post) => ({
      courseID: post.courseCode,
    }));
  }
}

async function getData(params) {
  const res2 = await selectCourses({
    activeStatus: "active",
    courseCode: `${params.courseID}`,
  });

  const res5 = await selectResults({
    activeStatus: "active",
  });
  const res6 = await selectWorks({
    activeStatus: "active",
  });

  if (
    res2.status == "Alhamdulillah" &&
    res5.status == "Alhamdulillah" &&
    res6.status == "Alhamdulillah"
  ) {
    const dataObject = {
      course: null,
      results: [],
      works: [],
    };

    dataObject.course = res2.data[0];
    dataObject.results = res5.data;
    dataObject.works = res6.data;

    fisherYatesShuffle(dataObject.works);
    fisherYatesShuffle(dataObject.results);

    return dataObject;
  }
}

async function getData2(data) {
  const idArray = [];
  data.course.commentID.map((item) => {
    idArray.push(item);
  });

  const res3 = await selectComment({
    activeStatus: "active",
    commentId: { $in: idArray },
  });

  const res4 = await selectRichText({
    activeStatus: "active",
  });

  const dataObject2 = {
    comment: null,
    richText: null,
  };

  dataObject2.comment = res3.data;
  dataObject2.richText = res4.data;

  return dataObject2;
}

export async function generateMetadata({ params }) {
  // Read route params

  const courseI = params.courseID;

  let modifiedCourse;
  let modifiedDesc;

  if (courseI == "alemalema") {
    modifiedCourse = "Alem Alema - সম্পূর্ণ কওমী বেফাক বোর্ডের সিলেবাস অনুযায়ী";
    modifiedDesc = "দরসে নিজামী ও মাদানী নেসাবের সমন্বয়ে গঠিত";
  } else if (courseI == "hifjulquran") {
    modifiedCourse = "Hifjul Quran - পূর্ণাঙ্গ কুরআনুল কারীম হিফজ";
    modifiedDesc = "নতুন সবক, সাতসবক, আমুখতা এবং সাপ্তাহিক সবিনা";
  } else {
    modifiedCourse = `${courseI} - একটি পূর্নাঙ্গ কওমী মাদরাসা`;
  }

  return {
    title: modifiedCourse,
    description: modifiedDesc,
  };
}

async function AbacusCourses({ params }) {
  const course = params.courseID;

  const data = await getData(params);

  const data2 = await getData2(data);

  const ObjArray = (data) => {
    const letImageObject = [];
    data.map((item) => {
      letImageObject.push({
        image: item.sliderImageLink,
        caption: item.sliderId,
      });
    });
    return letImageObject;
  };

  const ObjArray2 = (data) => {
    const letImageObject = [];
    data.map((item) => {
      letImageObject.push({
        image: item.picture,
      });
    });

    return letImageObject;
  };

  const ObjArray3 = (data) => {
    const letImageObject = [];
    data.map((item) => {
      letImageObject.push({
        img: item.img,
        sid: item.sid,
        name: item.name,
      });
    });
    return letImageObject;
  };

  if (data && data2) {
    return (
      <>
        <AbacusCourse
          info={data.course}
          comment={data2.comment}
          richtext={data2.richText}
          parameter={params}
        />
        {/* <CustomVideoGallery /> */}
        {course == "alemalema" && (
          <ResultCardSlider linkObj={ObjArray2(data.results)} />
        )}
        {course == "hifjulquran" && <HifzGrid />}
        {course == "alemalema" && <AlemAlemaGrid number={4} />}
        {course == "alemalema" && (
          <GalleryAll linkObj={ObjArray3(data.works).slice(0, 8)} />
        )}
      </>
    );
  }
}

export default AbacusCourses;
