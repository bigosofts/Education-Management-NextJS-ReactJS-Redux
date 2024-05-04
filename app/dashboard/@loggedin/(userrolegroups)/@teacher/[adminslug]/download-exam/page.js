"use client";

import { useSelector } from "react-redux";
import { selectDataTwo as selectClasses } from "@/apiservices/classapiservices";
import { useState, useEffect } from "react";

function UploadExam() {
  const [classes, setClasses] = useState();

  const data = useSelector((state) => state.isAdmin.value);

  useEffect(() => {
    async function getData() {
      const res = await selectClasses(null, null);
      if (res.status == "Alhamdulillah") {
        let desiredClasses = res.data.filter((item) => {
          return item.teacher.TID == data.data.userDetails.userName;
        });
        setClasses(desiredClasses);
      }
    }
    getData();
  }, []);

  if(classes && classes.some((item)=> item.courseID == "hifjulquran")){
    return <div>Download Exam Page</div>;
  }else{
    return <div> You are not assigned to Any courses yet</div>
  }
  
}

export default UploadExam;
