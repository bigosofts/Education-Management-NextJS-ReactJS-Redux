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
    <div class="Bayanlist">
      <div class="style-1">
        <div class="style-2">
          <div class="style-3">
            <div class="style-4">
              <div class="style-5">
                <div class="style-6">
                  <span class="style-7">
                    <i className="fa fa-wifi" />
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
        <h1 class="style-8">koumi Madrasa Books</h1>
        <div class="style-9">
          <div class="style-10"></div>
        </div>
        <ul class="style-16">
          {data.majlis_music.map((item,i) => (
            <li key={i} class="style-17">
              <a href={item.link} class="style-18">
                {item.title}
              </a>
              <div class="style-19">
                <span class="style-20">({item.date})</span>
                <a
                  class="style-21"
                  href={item.downloadLink}
                  target="_blank"
                  download=""
                >
                  <span class="style-22">
                    <i className="fa fa-download" />
                  </span>
                </a>
              </div>
            </li>
          ))}
        </ul>
        <div class="style-65">
          <a href="/bayanaat/waiz/hazrat-wala-ra" class="style-66">
            View More
          </a>
        </div>
      </div>
      <div class="style-67">
        <div class="style-68">
          <div class="style-69">
            <div class="style-70">
              <div class="style-71">
                <span class="style-72">
                  <i className="fa fa-clock-o" />
                </span>
              </div>
            </div>
          </div>
        </div>
        <h1 class="style-73">All Notices</h1>
        <div class="style-74">
          <div class="style-75"></div>
        </div>
        <ul class="style-80">
          {data.majlis_music_two.map((item,i) => (
            <li key={i} class="style-81">
              <a href={item.link} class="style-82">
                {item.title}
              </a>
              <div class="style-83">
                <span class="style-84">({item.date})</span>
                <a
                  class="style-85"
                  href={item.downloadLink}
                  target="_blank"
                  download=""
                >
                  <span class="style-86">
                    <i className="fa fa-download" />
                  </span>
                </a>
              </div>
            </li>
          ))}
        </ul>
        <div class="style-129">
          <a href="/bayanaat/category/bayan" class="style-130">
            View More
          </a>
        </div>
      </div>
      <div class="style-131">
        <div class="style-132">
          <div class="style-133">
            <div class="style-134">
              <div class="style-135">
                <span class="style-136">
                  <i className="fa fa-whatsapp" />
                </span>
              </div>
            </div>
          </div>
        </div>
        <h1 class="style-137">Madrasa Routines</h1>
        <div class="style-138">
          <div class="style-139"></div>
        </div>
        <ul class="style-144">
          {data.majlis_music_three.map((item,i) => (
            <li key={i} class="style-145">
              <a href={item.link} class="style-146">
                {item.title}
              </a>
              <div class="style-147">
                <span class="style-148">({item.date})</span>
                <a
                  class="style-149"
                  href={item.downloadLink}
                  target="_blank"
                  download=""
                >
                  <span class="style-150">
                    <i className="fa fa-download" />
                  </span>
                </a>
              </div>
            </li>
          ))}
        </ul>
        <div class="style-193">
          <a href="/bayanaat/category/majalis" class="style-194">
            View More
          </a>
        </div>
      </div>
    </div>
  );
}

export default BayanList;
