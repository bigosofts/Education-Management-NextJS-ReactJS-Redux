"use client";
import mytoast from "../toast/toast";
import "./hifz.css";

export default function StatisticsTable({ data, title }) {
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
                <th>সম্পূর্ণ নাম</th>
                <th>মোবাইল নাম্বার</th>
                <th>ইমেইল</th>
                <th>জেন্ডার</th>
              </tr>
            </thead>
            <tbody>
              {data.map((item, i) => (
                <tr key={i}>
                  <td>{i + 1}</td>
                  <td>{item.userName}</td>
                  <td>{item.firstName.en + " " + item.lastName.en}</td>
                  <td
                    className="cursor-pointer"
                    onClick={() => handleCopy(item.mobileNumber)}
                    tel={item.mobileNumber}
                  >
                    {item.mobileNumber}
                  </td>
                  <td className="cursor-pointer">{item.emailAddress}</td>
                  <td>{item.gender}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
