import "./InfoPage.css";
function InfoPage() {
  return (
    <div className="InfoOuter">
      <div className="InfoPage">
        <div className="style-1">
          <h3 className="style-2">
            {true ? "আমাদের সাথে যুক্ত আছেন" : "Some facts about TQIM"}
          </h3>
          <div className="style-3">
            <div className="style-4">
              <div className="style-5">
                <div className="style-6">
                  <div className="style-7">
                    <h2 className="style-8">1683+</h2>
                    <h6 className="style-9">Students Globally</h6>
                  </div>
                </div>
                <div className="style-10">
                  <div className="style-11">
                    <h2 className="style-12">900+</h2>
                    <h6 className="style-13">Madrasa Students</h6>
                  </div>
                </div>
                <div className="style-14">
                  <div className="style-15">
                    <h2 className="style-16">147+</h2>
                    <h6 className="style-17">Running Course</h6>
                  </div>
                </div>
                <div className="style-18">
                  <div className="style-19">
                    <h2 className="style-20">20+</h2>
                    <h6 className="style-21">Total Teachers</h6>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default InfoPage;
