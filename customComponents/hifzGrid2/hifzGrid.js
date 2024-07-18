import "./hifzGrid.css";
import ButtonComponent from "../ButtonComponent/ButtonComponent";
import Image from "next/image";

import { selectDataTwo } from "@/apiservices/widgetapiservices";

function fisherYatesShuffle(array) {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
}

async function getData() {
  const res = await selectDataTwo({
    activeStatus: "active",
    widgetName: "hifz_result",
  });

  if (res.status == "Alhamdulillah") {
    const dataObject = {
      hifz_result: null,
    };
    dataObject.hifz_result = res.data;
    fisherYatesShuffle(dataObject.hifz_result[0].widgetPayload);
    
    return dataObject;
  } else {
    mytoast.danger("Data fetching error. Try Refreshing the page");
  }
}

async function HifzGrid() {
  const data = await getData();

  return (
    <>
      <h2 className="style-14h1">
        {true
          ? "যারা ইন্টারনেট মাদ্রাসা থেকে হিফজ সম্পন্ন করেছেন"
          : "Who Completed Their Hifz by Internet Madrasa"}
      </h2>
      <div className="hifzResult">
        {data.hifz_result[0].widgetPayload.slice(0, 4).map((item, i) => (
          <div key={i} className="style-6">
            <div className="style-7">
              <div className="style-8">
                <Image
                  width={110}
                  height={110}
                  src={item.image}
                  alt="Photo"
                  className="style-9"
                />
              </div>
              <div className="style-10">
                <p className="style-11">{item.designation.bn}</p>
                <h4 className="style-12">{item.name.bn}</h4>
                <p className="style-13">
                  {true ? "পিতার নামঃ" : "Fathers's name:"} {item.fatherName.bn}
                </p>
                <p className="style-13">
                  {true ? "মাতার নামঃ" : "Mother's name:"} {item.motherName.bn}
                </p>
                <p className="style-13">
                  {true ? "ঠিকানাঃ" : "Address:"} {item.country.bn}
                </p>
                <p className="style-13">
                  {true ? "পাশের সন" : "Year:"} {item.year.bn}
                </p>
                <p className="style-13">
                  {true ? "পেশাঃ" : "Profession:"} {item.profession.bn}
                </p>
                <p className="style-13">
                  {true
                    ? "হিফজের সময়সীমাঃ"
                    : "How long it takes to complete hifz:"}{" "}
                  {item.time.bn}
                </p>
                {item.comment ? (
                  <p className="style-13">
                    {true ? "অনুভূতিঃ " : "Comment:"} {item.comment}
                  </p>
                ) : (
                  ""
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
      <ButtonComponent text="See More" link="/content/hifz" />
    </>
  );
}

export default HifzGrid;
