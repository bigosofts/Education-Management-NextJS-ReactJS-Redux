import "./Menu.css";
import Image from "next/image";

const MainMenu = () => {
  return (
    <div className="mainmenu">
      <div className="style-1">
        <div className="style-2">
          <div className="style-3">
            <div className="style-4">
              <div className="style-5">
                <a href="/" className="style-6">
                  <Image
                    width={68}
                    height={72}
                    src="/logo.png"
                    className="style-7"
                  />
                </a>
              </div>
            </div>
          </div>
          <div className="style-8">
            <div className="style-9">
              <div className="style-10">
                <Image
                  width={260}
                  height={78}
                  src="/images/hazrat-shaikh-name.png"
                  className="style-11"
                />
              </div>
            </div>
          </div>
          <div className="style-12">
            <div className="style-13">
              <div className="style-14">
                <a href="/abacus">
                  <Image
                    width={236}
                    height={77}
                    src="/images/abacus.png"
                    className="style-15"
                  />
                </a>
              </div>
            </div>
          </div>
          <div className="style-16">
            <div className="style-17">
              <div className="style-18">
                <Image
                  width={405}
                  height={78}
                  src="/images/hazrat-wala-name.png"
                  className="style-19"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MainMenu;
