import { selectDataTwo } from "@/apiservices/commentapiservice";

import "./ReviewPage.css";
async function getData() {
  const res = await selectDataTwo({
    activeStatus: "active",
  });

  if (res.status == "Alhamdulillah") {
    const dataObject = {
      comment: null,
    };
    dataObject.comment = res.data;
    return dataObject.comment;
  } else {
    mytoast.danger("Data fetching error. Try Refreshing the page");
  }
}

async function ReviewPage() {
  const data = await getData();

  return (
    <div className="ReviewPage">
      <div className="style-1">
        <div className="style-2">
          <h2 className="style-3">
            {true
              ? "কেন আমরাই শিক্ষার্থী ও অভিভাবকগণের প্রথম পছন্দ?"
              : "Why we are the first choice of students and parents?"}
          </h2>
        </div>
      </div>
      <div className="style-4">
        <div className="style-5">
          <h2 className="style-6"></h2>
        </div>
        <div className="style-7">
          <div className="style-8">
            {data.map((item,i) => (
              <div key={i} className="style-9">
                <div className="style-10">
                  <div className="style-11">
                    <div className="style-12">
                      <div className="style-13">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="10"
                          height="10"
                          fill="none"
                          viewBox="0 0 20 30"
                          className="style-14"
                        >
                          <path
                            fill="#D33242"
                            d="M10.699 10.753c1.019-1.82 2.871-3.777 6.021-5.642.88-.5 1.436-1.41 1.436-2.366 0-1.957-2.038-3.322-3.89-2.503C8.938 2.562 0 8.342 0 20.308 0 25.677 4.4 30 9.819 30c5.419 0 9.865-4.323 9.865-9.692 0-5.005-3.937-9.1-8.985-9.555z"
                            className="style-15"
                          ></path>
                        </svg>
                      </div>
                      <div className="style-16">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="10"
                          height="10"
                          fill="none"
                          viewBox="0 0 20 30"
                          className="style-17"
                        >
                          <path
                            fill="#D33242"
                            d="M10.699 10.753c1.019-1.82 2.871-3.777 6.021-5.642.88-.5 1.436-1.41 1.436-2.366 0-1.957-2.038-3.322-3.89-2.503C8.938 2.562 0 8.342 0 20.308 0 25.677 4.4 30 9.819 30c5.419 0 9.865-4.323 9.865-9.692 0-5.005-3.937-9.1-8.985-9.555z"
                            className="style-18"
                          ></path>
                        </svg>
                      </div>
                    </div>
                    <div className="style-19">
                      <div className="style-20">{item.comment.en}</div>
                    </div>
                  </div>
                  <div className="style-21">
                    <div className="style-22">
                      <h3 className="style-23">{item.userName.en}</h3>
                      <p className="style-24">{item.designation.en}</p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default ReviewPage;
