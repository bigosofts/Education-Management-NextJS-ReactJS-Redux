"useclient";
import { useEffect, useState } from "react";
function CardWithPie({
  texthead,
  textbody,
  percentage,
  parameter,
  colors,
  specific,
}) {
  const randomNumber = Math.floor(100 + Math.random() * 900);
  useEffect(() => {
    const ppc = document.querySelector(`.progress-pie-chart${randomNumber}`);
    if (ppc) {
      const percent = parseInt(ppc.getAttribute("data-percent"), 10);
      const deg = (360 * percent) / 100;

      if (percent > 50) {
        ppc.classList.add(`gt-50${randomNumber}`);
      } else {
        ppc.classList.remove(`gt-50${randomNumber}`);
      }

      const ppcProgressFill = document.querySelector(
        `.ppc-progress-fill${randomNumber}`
      );
      if (ppcProgressFill) {
        ppcProgressFill.style.transform = `rotate(${deg}deg)`;
      }

      const ppcPercentsSpan = document.querySelector(
        `.ppc-percents${randomNumber} span`
      );
      if (ppcPercentsSpan) {
        ppcPercentsSpan.innerHTML = `${percent}${parameter}`;
      }
    }
  }, [randomNumber, colors]);


  return (
    <div className="cursor-pointer hover:scale-105 hover:shadow-xl transition-all duration-300">
      <style
        dangerouslySetInnerHTML={{
          __html: `
            .progress-pie-chart${randomNumber} {
              width: 100px;
              height: 100px;
              border-radius: 50%;
              background-color: #E5E5E5;
              position: relative;
            }
            .progress-pie-chart${randomNumber}.gt-50${randomNumber} {
              background-color: ${colors};
            }
            .ppc-progress${randomNumber} {
              content: "";
              position: absolute;
              border-radius: 50%;
              left: calc(50% - 50px);
              top: calc(50% - 50px);
              width: 100px;
              height: 100px;
              clip: rect(0, 100px, 100px, 50px);
            }
            .ppc-progress${randomNumber} .ppc-progress-fill${randomNumber} {
              content: "";
              position: absolute;
              border-radius: 50%;
              left: calc(50% - 50px);
              top: calc(50% - 50px);
              width: 100px;
              height: 100px;
              clip: rect(0, 50px, 100px, 0);
              background: ${colors};
              transform: rotate(60deg);
            }
            .gt-50${randomNumber} .ppc-progress${randomNumber} {
              clip: rect(0, 50px, 100px, 0);
            }
            .gt-50${randomNumber} .ppc-progress${randomNumber} .ppc-progress-fill${randomNumber} {
              clip: rect(0, 100px, 100px, 50px);
              background: #E5E5E5;
            }
            .ppc-percents${randomNumber} {
              content: "";
              position: absolute;
              border-radius: 50%;
              left: calc(50% - 80px / 2);
              top: calc(50% - 80px / 2);
              width: 80px;
              height: 80px;
              background: #fff;
              text-align: center;
              display: table;
            }
            .ppc-percents${randomNumber} span {
              display: block;
              font-size: 1.3em;
              font-weight: bold;
              color: ${colors};
            }
            .pcc-percents-wrapper${randomNumber} {
              display: table-cell;
              vertical-align: middle;
            }
            .progress-pie-chart${randomNumber} {
              margin: 0px auto 0;
            }
          `,
        }}
      />
      <div className="p-5 md:p-1 bg-white rounded-xl shadow-md flex flex-col md:flex-row justify-between items-center">
        <div className="w-full md:w-1/2 flex justify-center items-center text-center">
          <div className="text-sm">
            {texthead} <br />
            <br />
            <span
              style={{ fontSize: "52px", color: colors }}
              className="font-extrabold text-[72px]"
            >
              {textbody}
            </span>
          </div>
        </div>
        <div className="w-full md:w-1/2">
          <div
            className={`progress-pie-chart${randomNumber}`}
            data-percent={percentage}
          >
            <div className={`ppc-progress${randomNumber}`}>
              <div className={`ppc-progress-fill${randomNumber}`}></div>
            </div>
            <div className={`ppc-percents${randomNumber}`}>
              <div className={`pcc-percents-wrapper${randomNumber}`}>
                <span></span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CardWithPie;
