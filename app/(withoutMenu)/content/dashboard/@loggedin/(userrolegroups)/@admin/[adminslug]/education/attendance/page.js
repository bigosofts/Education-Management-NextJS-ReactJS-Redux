"use client";

import AttendanceSTableTA from "@/components/attendance/attendanceSTableTA";
import { useEffect, useState } from "react";
import { selectDataTwo as selectClasses } from "@/apiservices/classapiservices";
import { selectDataTwo as selectBooks } from "@/apiservices/bookapiservices";

function AttendancePage() {
  const [books, setBooks] = useState();
  const [classes, setClasses] = useState();

  useEffect(() => {
    async function getData() {
      const res = await selectClasses({ activeStatus: "active" }, null);
      if (res.status == "Alhamdulillah") {
        setClasses(res.data);
      }
      const res2 = await selectBooks(null, null);
      if (res2.status == "Alhamdulillah") {
        setBooks(res2.data);
      }
    }

    getData();
  }, []);

  if (classes && books) {
    return (
      <div>
        <AttendanceSTableTA
          classes={classes}
          books={books}
          strDate="May 22, 2024"
        />
      </div>
    );
  }
}

export default AttendancePage;
