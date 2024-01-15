import { selectAllDataTwo } from "@/apiservices/teacherapiservices";

import "./OstadSection.css";
async function getData() {
  const res = await selectAllDataTwo({
    activeStatus: "active",
    gender: "male",
  });
  const res2 = await selectAllDataTwo({
    activeStatus: "active",
    gender: "female",
  });

  if (res.status == "Alhamdulillah" && res2.status == "Alhamdulillah") {
    const dataObject = {
      maleTeacher: null,
      femaleTeacher: null,
    };

    dataObject.maleTeacher = res.data;
    dataObject.femaleTeacher = res2.data;

    return dataObject;
  } else {
    mytoast.danger("Data fetching error. Try Refreshing the page");
  }
}

async function OstadSection() {
  const data = await getData();
  return (
    <section className="OstadSection">
      <div className="style-1">
        <section className="style-2">
          <h2 className="style-3">Our Teaching exparts</h2>
          <p className="style-4">
            আমাদের ইন্টারনেট মাদ্রাসা পরিচালিত হচ্ছে কিছু অভিজ্ঞ, বিচক্ষণ এবং
            মেধাবী আলেম দ্বারা যাদের অক্লান্ত পরিশ্রম এবং গভীর চিন্তাধারা এগিয়ে
            নিয়ে চলেছে ইন্টারনেট মাদ্রাসা এর কার্যক্রম। আমাদের শিক্ষকগণ অত্যন্ত
            যত্নের সাথে জ্ঞানকে ছাত্র/ছাত্রীদের মাঝে বণ্টন করে থাকে এবং তাদের
            পড়াশুনা সংক্রান্ত যেকোনো সহায়তায় প্রস্তুত থাকে।
          </p>
        </section>
        <div className="style-5">
          {data.maleTeacher.map((item, i) => (
            <div key={i} className="style-6">
              <div className="style-7">
                <div className="style-8">
                  <img
                    src="images/shaikh.png"
                    alt="Photo"
                    className="style-9"
                  />
                </div>
                <div className="style-10">
                  <p className="style-11">{item.designation}</p>
                  <h4 className="style-12">
                    {item.firstName.bn} {item.lastName.bn}
                  </h4>
                  <p className="style-13">{item.educationalBackground}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className="style-5">
          {data.femaleTeacher.map((item, i) => (
            <div key={i} className="style-6">
              <div className="style-7">
                <div className="style-8">
                  <img
                    src="images/shaikh.png"
                    alt="Photo"
                    className="style-9"
                  />
                </div>
                <div className="style-10">
                  <p className="style-11">{item.designation}</p>
                  <h4 className="style-12">
                    {item.firstName.bn} {item.lastName.bn}
                  </h4>
                  <p className="style-13">{item.educationalBackground}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default OstadSection;
