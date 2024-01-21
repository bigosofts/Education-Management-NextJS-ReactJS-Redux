"use client";
import { useState, useEffect } from "react";
import { isAdmin } from "@/apiservices/checklogin";



function layout({ admin, madrasaStudent, teacher,gardian, guest, genralStudent }) {


  const [data, setData] = useState();

  useEffect(() => {
    async function fetchData() {
      const payload = await isAdmin();
      setData(payload);
    }
    fetchData();
  }, []);

  if (data) {
  
    if (data.data.isAdmin == true) {
      return <>{admin}</>;
    } else if (data.data.userRole == "teacher") {
      return <>{teacher}</>;
    } else if (data.data.userRole == "student") {
      return <>{student}</>;
    } else if (data.data.userRole == "madrasaStudent") {
      return <>{madrasaStudent}</>;
    }else if (data.data.userRole == "teacher") {
      return <>{teacher}</>;
    }else if (data.data.userRole == "gardian") {
      return <>{gardian}</>;
    }
  }
}

export default layout;
