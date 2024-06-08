import { selectDataTwo as selectClasses } from "@/apiservices/classapiservices";

import { selectDataTwo as selectBooks } from "@/apiservices/bookapiservices";

import AttendancePageCustomInner from "./attendanceInner";

async function getData() {
  const res = await selectClasses(null, null);
  const res2 = await selectBooks(null, null);

  let desiredObject = {
    classes: null,
    books: null,
  };

  if (res.status == "Alhamdulillah" && res2.status == "Alhamdulillah") {
    desiredObject.classes = res.data;
    desiredObject.books = res2.data;
  }

  return desiredObject;
}

async function AttendancePageCustom() {
  const data = await getData();
  if (data) {
    return (
      <AttendancePageCustomInner
        classesUp={data.classes}
        booksUp={data.books}
      />
    );
  }
}

export default AttendancePageCustom;
