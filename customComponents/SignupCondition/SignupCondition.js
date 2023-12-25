"use client";
import "./SignupCondition.css";
import { useRouter } from "next/navigation";

function SignupCondition(props) {
  const router = useRouter();
  const clickHandler1 = (e) => {
    e.preventDefault();
    router.push("/signup/guest");
  };
  const clickHandler2 = (e) => {
    e.preventDefault();
    router.push("/signup/madrasa-student");
  };
  const clickHandler3 = (e) => {
    e.preventDefault();
    router.push("/signup/teacher");
  };
  const clickHandler4 = (e) => {
    e.preventDefault();
    router.push("/signup/general-student");
  };
  const clickHandler5 = (e) => {
    e.preventDefault();
    router.push("/signup/gardian");
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
                  <a>Guest Account</a>
                </h5>
                <p>
                  Guset account is needed to access all of the free resources of
                  the Website
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
                  <a>Madrasa Student Account</a>
                </h5>
                <p>
                  Want to be Student of Alem-Alema. This is complete Koumi
                  madrasha
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
                  <a>Teacher Account</a>
                </h5>
                <p>
                  Want to teach our Madrasha or General Students on various
                  subject!{" "}
                </p>
                <a className="detail-button">
                  <i class="icon-img">
                    <img src="/images/checklist.gif" width="100%"></img>
                  </i>
                </a>
              </div>
            </div>
          </div>
          <div className="flex-special">
            <div
              onClick={clickHandler5}
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
                  <a>Gardian Account</a>
                </h5>
                <p>
                  Want to learn something new from our Website to teach your
                  child?
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
              onClick={clickHandler4}
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
                  <a>General Student Account</a>
                </h5>
                <p>
                  Be a skillfull person no matter you are General or Madrasa
                  Student
                </p>
                <a className="detail-button">
                  <i class="icon-img">
                    <img src="/images/tech-support.gif" width="100%"></img>
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

export default SignupCondition;
