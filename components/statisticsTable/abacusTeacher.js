"use client";
import mytoast from "../toast/toast";
import "./hifz.css";


export default function StatisticsTableTeacher({ data, title }) {
  // useEffect(() => {
  //   async function getData() {}
  //   // getData();
  // }, []);

  const handleCopy = (text) => {
    const tempInput = document.createElement("input");
    tempInput.value = text;
    document.body.appendChild(tempInput);
    tempInput.select();
    document.execCommand("copy");
    document.body.removeChild(tempInput);
    mytoast.info("Copied: " + text);
  };

  return (
    <div className="mt-10 p-5 statisticsTable">
      <div className="hifz_table">
        <h5 className="text-center text-white text-3xl">{title}</h5>
        <div className="table_container mt-10">
          <table>
            <thead className="sticky top-0">
              <tr>
                <th>সিরিয়াল</th>
                <th>স্টুডেন্ট আইডি</th>
                <th>প্রতিষ্ঠানের নাম</th>
                <th>প্রতিষ্ঠানের ইমেইল</th>

                <th>প্রধানের নাম</th>

                <th>প্রধানের নাম্বার</th>

                <th>প্রতিনিধির নাম</th>
                <th>প্রতিনিধির নাম্বার</th>

                <th>প্রতিষ্ঠানের মোট শিক্ষার্থী</th>
              </tr>
            </thead>
            <tbody>
              {data.map((item, i) => (
                <tr key={i}>
                  <td>{i + 1}</td>
                  <td>{item.institutionID}</td>
                  <td>{item.institutionName}</td>
                  <td>{item.institutionalEmail}</td>
                  <td>{item.principalName}</td>
                  <td>{item.directorPhone}</td>
                  <td>{item.representativeName}</td>
                  <td>{item.representativePhone}</td>
                  <td>{item.studentsNumber} জন</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
