"use client";
import "./SignupCondition.css";
import { useRouter } from "next/navigation";

function SignupConditionMadrasaStudent(props) {
  const router = useRouter();
  const clickHandler1 = (e) => {
    e.preventDefault();
    router.push("/signup/madrasa-student/alem-alema");
  };
  const clickHandler2 = (e) => {
    e.preventDefault();
    router.push("/signup/madrasa-student/farze-ayin-maktab");
  };
  const clickHandler3 = (e) => {
    e.preventDefault();
    router.push("/signup/madrasa-student/farze-ayin-najera");
  };
  const clickHandler4 = (e) => {
    e.preventDefault();
    router.push("/signup/madrasa-student/shishu-maktab");
  };
  const clickHandler5 = (e) => {
    e.preventDefault();
    router.push("/signup/madrasa-student/shishu-najera");
  };
  const clickHandler6 = (e) => {
    e.preventDefault();
    router.push("/signup/madrasa-student/hifz");
  };

  return (
    <div className="our-service-sass hide-pr show-pr">
      <div className="container-signuppage">
        <div className="inner-wrapper">
          <div className="flex-signup">
            <div
              onClick={clickHandler1}
              className="single-block aos-init aos-animate flex-signup-item"
              data-aos="fade-up"
            >
              <div className="service-block">
                <span className="snow-dot"></span>
                <span className="snow-dot"></span>
                <span className="snow-dot"></span>
                <span className="snow-dot"></span>
                <span className="snow-dot"></span>
                <span className="snow-dot"></span>
                <span className="snow-dot"></span>
                <div className="hover-content"></div>
                <i className="flaticon-web user"></i>
                <h5 className="title">
                  <a>Alem Alema</a>
                </h5>
                <p>
                  Its a very long course and run based on a complete koumi madrasa syllabus and curriculam
                </p>
                <a className="detail-button">
                  <i className="icon-img">
                    <img
                      src="https://cdn-icons-gif.flaticon.com/6172/6172532.gif"
                      width="100%"
                    ></img>
                  </i>
                </a>
              </div>
            </div>
            <div
              onClick={clickHandler2}
              className="single-block aos-init aos-animate flex-signup-item"
              data-aos="fade-up"
              data-aos-delay="300"
            >
              <div className="service-block">
                <span className="snow-dot"></span>
                <span className="snow-dot"></span>
                <span className="snow-dot"></span>
                <span className="snow-dot"></span>
                <span className="snow-dot"></span>
                <span className="snow-dot"></span>
                <span className="snow-dot"></span>
                <div className="hover-content"></div>
                <i className="flaticon-value icon-s"></i>
                <h5 className="title">
                  <a>Farz-e-Ayin Maktab</a>
                </h5>
                <p>
                  Want to be Student of Farz-e-Ayin Maktab !
                </p>
                <a className="detail-button">
                  <i className="icon-img">
                    <img src="/images/diagram.gif" width="100%"></img>
                  </i>
                </a>
              </div>
            </div>
            <div
              onClick={clickHandler3}
              className="single-block aos-init aos-animate flex-signup-item"
              data-aos="fade-up"
              data-aos-delay="500"
            >
              <div className="service-block">
                <span className="snow-dot"></span>
                <span className="snow-dot"></span>
                <span className="snow-dot"></span>
                <span className="snow-dot"></span>
                <span className="snow-dot"></span>
                <span className="snow-dot"></span>
                <span className="snow-dot"></span>
                <div className="hover-content"></div>
                <i className="flaticon-login icon-s"></i>
                <h5 className="title">
                  <a>Farz e Ayin Najera</a>
                </h5>
                <p>
                  Want to be a student of Farz-e-Ayin Najera !
                </p>
                <a className="detail-button">
                  <i class="icon-img">
                    <img src="/images/checklist.gif" width="100%"></img>
                  </i>
                </a>
              </div>
            </div>
            
          </div>
          <div className="flex-signup">
            <div
              onClick={clickHandler4}
              className="single-block aos-init aos-animate flex-signup-item"
              data-aos="fade-up"
            >
              <div className="service-block">
                <span className="snow-dot"></span>
                <span className="snow-dot"></span>
                <span className="snow-dot"></span>
                <span className="snow-dot"></span>
                <span className="snow-dot"></span>
                <span className="snow-dot"></span>
                <span className="snow-dot"></span>
                <div className="hover-content"></div>
                <i className="flaticon-web user"></i>
                <h5 className="title">
                  <a>Shishu Maktab</a>
                </h5>
                <p>
                  Want to be admitted on Shishu Maktab ?
                </p>
                <a className="detail-button">
                  <i className="icon-img">
                    <img
                      src="https://cdn-icons-gif.flaticon.com/6172/6172532.gif"
                      width="100%"
                    ></img>
                  </i>
                </a>
              </div>
            </div>
            <div
              onClick={clickHandler5}
              className="single-block aos-init aos-animate flex-signup-item"
              data-aos="fade-up"
              data-aos-delay="300"
            >
              <div className="service-block">
                <span className="snow-dot"></span>
                <span className="snow-dot"></span>
                <span className="snow-dot"></span>
                <span className="snow-dot"></span>
                <span className="snow-dot"></span>
                <span className="snow-dot"></span>
                <span className="snow-dot"></span>
                <div className="hover-content"></div>
                <i className="flaticon-value icon-s"></i>
                <h5 className="title">
                  <a>Shishu Najera</a>
                </h5>
                <p>
                  Want to be Student of Shishi Najera ?
                </p>
                <a className="detail-button">
                  <i className="icon-img">
                    <img src="/images/diagram.gif" width="100%"></img>
                  </i>
                </a>
              </div>
            </div>
            <div
              onClick={clickHandler6}
              className="single-block aos-init aos-animate flex-signup-item"
              data-aos="fade-up"
              data-aos-delay="500"
            >
              <div className="service-block">
                <span className="snow-dot"></span>
                <span className="snow-dot"></span>
                <span className="snow-dot"></span>
                <span className="snow-dot"></span>
                <span className="snow-dot"></span>
                <span className="snow-dot"></span>
                <span className="snow-dot"></span>
                <div className="hover-content"></div>
                <i className="flaticon-login icon-s"></i>
                <h5 className="title">
                  <a>Hifz</a>
                </h5>
                <p>
                  Want to memorize the Glorious Al-Quran and become a Hafez/Hafeza ?
                </p>
                <a className="detail-button">
                  <i class="icon-img">
                    <img src="/images/checklist.gif" width="100%"></img>
                  </i>
                </a>
              </div>
            </div>
            
          </div>
        </div>
      </div>
    </div>
  );
}

export default SignupConditionMadrasaStudent;
