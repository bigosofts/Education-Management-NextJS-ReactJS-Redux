"use client";
import "./SignupCondition.css";
import { useRouter } from "next/navigation";

function SignupCondition(props) {
  const router = useRouter();
  const clickHandler1 = (e) => {
    e.preventDefault();
    router.push("/signup/student");
  };
  const clickHandler2 = (e) => {
    e.preventDefault();
    router.push("/signup/teacher");
  };
  const clickHandler3 = (e) => {
    e.preventDefault();
    router.push("/");
  };
  const clickHandler4 = (e) => {
    e.preventDefault();
    router.push("/signup/abacus-madrasha");
  };
  const clickHandler5 = (e) => {
    e.preventDefault();
    router.push("/signup/abacus-teacher");
  };
  const clickHandler6 = (e) => {
    e.preventDefault();
    router.push("/signup/abacus-student");
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
                  <a>Create Student Account</a>
                </h5>
                <p>
                  Want to start you journey as a taleb or talibah ? This is a
                  complete Koumi madrasha
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
                  <a>Create Teacher Account</a>
                </h5>
                <p>
                  Want to teach our taleb or talibah and helps them to become
                  the great servant of Allah ?
                </p>
                <a className="detail-button">
                  <i className="icon-img">
                    <img
                      src="https://cdn-icons-gif.flaticon.com/6172/6172518.gif"
                      width="100%"
                    ></img>
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
                  <a>Go to Madrasha Home</a>
                </h5>
                <p>
                  Browse our course curriculum, achievement of taleb or talibah,
                  our activities and so on
                </p>
                <a className="detail-button">
                  <i class="icon-img">
                    <img
                      src="https://cdn-icons-gif.flaticon.com/6172/6172512.gif"
                      width="100%"
                    ></img>
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
                  <a>Abacus Madrasha Registration</a>
                </h5>
                <p>
                  Want to teach in a new way of madrasha curriculamn? Use abacus calculation for mind storming
                </p>
                <a className="detail-button">
                  <i className="icon-img">
                    <img
                      src="/images/checklist.gif"
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
                  <a>Registration for abacus Student</a>
                </h5>
                <p>
                  Want to study in abacus madrasha for improving your brain skill ?
                </p>
                <a className="detail-button">
                  <i className="icon-img">
                    <img
                      src="/images/diagram.gif"
                      width="100%"
                    ></img>
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
                  <a>Registration for Abacus Teacher</a>
                </h5>
                <p>
                  Want to Teach the students in abacus madrasha curriculamn?
                </p>
                <a className="detail-button">
                  <i class="icon-img">
                    <img
                      src="/images/tech-support.gif"
                      width="100%"
                    ></img>
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
