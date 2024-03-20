import { selectDataTwo } from "@/apiservices/widgetapiservices";

import "./Bayanlist.css";
async function getData() {
  const res = await selectDataTwo({
    activeStatus: "active",
    widgetName: "majlis_music",
  });
  const res2 = await selectDataTwo({
    activeStatus: "active",
    widgetName: "majlis_music_two",
  });
  const res3 = await selectDataTwo({
    activeStatus: "active",
    widgetName: "majlis_music_three",
  });

  if (res.status == "Alhamdulillah") {
    const dataObject = {
      majlis_music: null,
      majlis_music_two: null,
      majlis_music_three: null,
    };

    dataObject.majlis_music = res.data[0].widgetPayload;
    dataObject.majlis_music_two = res2.data[0].widgetPayload;
    dataObject.majlis_music_three = res3.data[0].widgetPayload;

    return dataObject;
  } else {
    mytoast.danger("Data fetching error. Try Refreshing the page");
  }
}

async function BayanList() {
  const data = await getData();
  return (
    <div className="Bayanlist">
      <div className="style-1">
        <div className="style-2">
          <div className="style-3">
            <div className="style-4">
              <div className="style-5">
                <div className="style-6">
                  <span className="style-7">
                    <i className="fa fa-wifi" />
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
        <h1 className="style-8">koumi Madrasa Books</h1>
        <div className="style-9">
          <div className="style-10"></div>
        </div>
        <ul className="style-16">
          {data.majlis_music.map((item, i) => (
            <li key={i} className="style-17">
              <a href={item.link} className="style-18">
                {item.title}
              </a>
              <div className="style-19">
                <span className="style-20">({item.date})</span>
                <a
                  className="style-21"
                  href={item.downloadLink}
                  target="_blank"
                  download=""
                >
                  <span className="style-22">
                    <i className="fa fa-download" />
                  </span>
                </a>
              </div>
            </li>
          ))}
        </ul>
        <div className="style-65">
          <a href="/bayanaat/waiz/hazrat-wala-ra" className="style-66">
            View More
          </a>
        </div>
      </div>
      <div className="style-67">
        <div className="style-68">
          <div className="style-69">
            <div className="style-70">
              <div className="style-71">
                <span className="style-72">
                  <i className="fa fa-clock-o" />
                </span>
              </div>
            </div>
          </div>
        </div>
        <h1 className="style-73">All Notices</h1>
        <div className="style-74">
          <div className="style-75"></div>
        </div>
        <ul className="style-80">
          {data.majlis_music_two.map((item, i) => (
            <li key={i} className="style-81">
              <a href={item.link} className="style-82">
                {item.title}
              </a>
              <div className="style-83">
                <span className="style-84">({item.date})</span>
                <a
                  className="style-85"
                  href={item.downloadLink}
                  target="_blank"
                  download=""
                >
                  <span className="style-86">
                    <i className="fa fa-download" />
                  </span>
                </a>
              </div>
            </li>
          ))}
        </ul>
        <div className="style-129">
          <a href="/bayanaat/category/bayan" className="style-130">
            View More
          </a>
        </div>
      </div>
      <div className="style-131">
        <div className="style-132">
          <div className="style-133">
            <div className="style-134">
              <div className="style-135">
                <span className="style-136">
                  <i className="fa fa-whatsapp" />
                </span>
              </div>
            </div>
          </div>
        </div>
        <h1 className="style-137">Madrasa Routines</h1>
        <div className="style-138">
          <div className="style-139"></div>
        </div>
        <ul className="style-144">
          {data.majlis_music_three.map((item, i) => (
            <li key={i} className="style-145">
              <a href={item.link} className="style-146">
                {item.title}
              </a>
              <div className="style-147">
                <span className="style-148">({item.date})</span>
                <a
                  className="style-149"
                  href={item.downloadLink}
                  target="_blank"
                  download=""
                >
                  <span className="style-150">
                    <i className="fa fa-download" />
                  </span>
                </a>
              </div>
            </li>
          ))}
        </ul>
        <div className="style-193">
          <a href="/bayanaat/category/majalis" className="style-194">
            View More
          </a>
        </div>
      </div>
    </div>
  );
}

export default BayanList;
