import { selectAllData } from "@/apiservices/studentapiservices";

import HifzTable from "@/components/hifzTable/hifzTable";

async function HifzReport() {
  let data;
  const res = await selectAllData(null, null);
  if (res.status == "Alhamdulillah") {
    data = res.data;
  }

  async function hifjulquranQuery(datas) {
    return datas.filter((item) => {
      let course = item.studentCourseCode.filter((item) => {
        return /hifjulquran/i.test(item.code) && item.status == "active";
      });

      if (course.length > 1) {
        if (/hifjulquran/i.test(course[course.length - 1].code)) {
          return item;
        }
      } else if (course.length == 1) {
        if (/hifjulquran/i.test(course[course.length - 1].code)) {
          return item;
        }
      }
    });
  }

  const hifjulQuranCount = await hifjulquranQuery(data);

  return (
    <div>
      <h2>Hifz Report of All Students</h2>
      <div>
        {hifjulQuranCount.map((item, i) => (
          <div key={i}>
            <HifzTable id={item.userName} />
          </div>
        ))}
      </div>
    </div>
  );
}

export default HifzReport;
