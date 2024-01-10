import { selectDataTwo } from "@/apiservices/activityapiservices";

import "./Activities.css";
async function getData() {
  const res = await selectDataTwo({
    activeStatus: "active",
  });

  if (res.status == "Alhamdulillah") {
    const dataObject = {
      activity: null,
    };

    dataObject.activity = res.data;

    return dataObject.activity;
  } else {
    mytoast.danger("Data fetching error. Try Refreshing the page");
  }
}

async function Activities() {
  const data = await getData();

  return (
    <div className="Activities">
      <div className="style-1">
        <section className="style-2">
          <h2 className="style-3">Our Activities</h2>
          <p className="style-4">
            {true
              ? "Just as worldly education is needed to maintain the order and management of the world, religious education is needed for the protection of religion and for all the affairs of the world to be in accordance with the pleasure of Allah. We conduct our activities with the aim that all sections of the Muslim society can follow the religion and live a halal life without the haram."
              : "দুনিয়ার নিযাম ও ব্যবস্থাপনা ঠিক রাখার জন্য যেমন জাগতিক শিক্ষার প্রয়োজন তেমনি দ্বীনের হিফাজতের জন্য এবং দুনিয়ার সকল কাজ আল্লাহর সন্তুষ্টি মোতাবেক হওয়ার জন্য দ্বীনী শিক্ষার প্রয়োজন। মুসলিম সমাজের সকলশ্রেণীর মানুষ যেন দ্বীন মোতাবেক চলতে পারে এবং হারাম থেকে বেচে হালালভাবে জীবন যাপন করতে পারে সেই লক্ষ নিয়ে আমরা আমাদের কার্যক্রমগুলো পরিচালিত করে থাকি"}
          </p>
        </section>
        <div className="style-5">
          {data.slice(0, 9).map((item,i) => (
            <div key={i} className="style-6">
              <div className="style-7">
                <div className="style-8">
                  <img
                    src={item.activityImageLink}
                    alt="Service-Photo"
                    className="style-9"
                  />
                </div>
                <div className="style-10">
                  <h3 className="style-11"> {item.activityTitle.en}</h3>
                </div>
                <p className="style-13">{item.activityDescription.en}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Activities;
