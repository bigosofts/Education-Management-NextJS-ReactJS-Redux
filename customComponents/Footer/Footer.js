import "./Footer.css";
import GoogleMap from "../MapComponent/Map";
import { selectDataTwo } from "@/apiservices/widgetapiservices";
import MessangerChat from "../messangerChat/messangerChat";

async function getData() {
  const res = await selectDataTwo({
    activeStatus: "active",
    widgetName: "main_footer",
  });
  if (res.status == "Alhamdulillah") {
    const dataObject = {
      widgets: null,
    };
    dataObject.widgets = res.data[0];
    return dataObject.widgets;
  } else {
    mytoast.danger("Data fetching error. Try Refreshing the page");
  }
}

async function Footer() {
  const data = await getData();

  return (
    <>
      <footer className="Footer">
        <div className="style-1">
          <div className="style-2">
            <div className="style-3">
              <div className="style-4">
                <h3 className="style-5">
                  {data.widgetPayload[0].section1.title.en}
                </h3>
                <p className="style-6">
                  {data.widgetPayload[0].section1.description.en}{" "}
                </p>
              </div>
            </div>
            <div className="style-7">
              <div className="style-8">
                <h3 className="style-9">
                  {data.widgetPayload[0].section2.title.en}
                </h3>
                <ul className="style-10">
                  {data.widgetPayload[0].section2.list.map((item, i) => (
                    <li key={i} className="style-11">
                      <a
                        href={`${item.link}`}
                        target="_blank"
                        className="style-12"
                      >
                        {item.item.en}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
            <div className="style-29">
              <div className="style-30">
                <h3 className="style-31">
                  {data.widgetPayload[0].section3.title.en}
                </h3>
                <div className="style-32">
                  <table className="style-33">
                    <tbody className="style-34">
                      {data.widgetPayload[0].section3.list.map((item, i) => (
                        <tr key={i} className="style-35">
                          <td className="style-36">
                            <i className="style-37" aria-hidden="true"></i>
                          </td>
                          <td className="style-38">{item.item.en}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
                <div className="style-47">
                  <h5 className="style-48">Follow us :</h5>
                  <ul className="style-49">
                    {data.widgetPayload[0].section3.socialMedia.map(
                      (item, i) => (
                        <li key={i} className="style-50">
                          <a
                            href={`${item.link}`}
                            target="_blank"
                            className="style-51"
                          >
                            <i
                              className={`${item.icon}`}
                              aria-hidden="true"
                            ></i>
                          </a>
                        </li>
                      )
                    )}
                  </ul>
                </div>
              </div>
            </div>
            <div className="style-68">
              <div className="style-69">
                <GoogleMap />
              </div>
            </div>
          </div>
          <div className="style-75">
            <p className="style-76">
              &copy;<i className="style-77" aria-hidden="true"></i>{" "}
              {data.widgetPayload[0].section4.copyRight.en}
            </p>
          </div>
        </div>
      </footer>
      {/* <MessangerChat /> */}
      <a
        style={{
          position: "fixed",
          bottom: "20px",
          right: "20px",
          zIndex: "999",
          width: "64px",
          height: "64px",
          filter: "drop-shadow(1px 10px 20px rgba(0,0,0,0.3))",
        }}
        className="whatsapp"
        s
        aria-label="Chat on WhatsApp"
        href="https://wa.me/1674040502"
      >
        <img alt="Chat on WhatsApp" src="/images/whatsapp.png" />
      </a>
    </>
  );
}

export default Footer;
