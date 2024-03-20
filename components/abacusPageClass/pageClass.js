"use client";
import Link from "next/link";
import Image from "next/image";

function PageClassAbacus() {
  return (
    <div className="flex justify-between w-[95%] max-w-[1200px] mx-auto gap-10 pb-[100px] flex-col md:flex-row">
      <div className="w-full md:w-1/2 bg-[#efefef] rounded-3xl shadow-lg border-[1px] border-slate-200">
        <h1 className="text-[46px] text-slate-900 text-center font-extrabold">
          Abacus class
        </h1>
        <div className="flex p-4 items-center">
          <div className="w-1/2">
            <Image
              width={200}
              height={300}
              src="https://api.internetmadrasa.com/images/abacusstudent.jpg"
            />
          </div>

          <Link
            href="/classes/abacus_student"
            className="text-center p-5 bg-sky-500 m-5 rounded-3xl text-white font-bold w-1/2 hover:shadow-xl"
          >
            Ramadan Abacus Math and Quranul Karim
          </Link>
        </div>
        <div className="flex p-4 items-center">
          <div className="w-1/2">
            <Image
              width={200}
              height={300}
              src="https://api.internetmadrasa.com/images/TeacherAbacus.jpg"
            />
          </div>
          <Link
            href="/classes/abacus_teacher"
            className="text-center p-5 bg-sky-500 m-5 rounded-3xl text-white font-bold w-1/2 hover:shadow-xl"
          >
            Ramadan Abacus Teachers' Training
          </Link>
        </div>
      </div>
      <div className="w-full md:w-1/2 mx-auto">
        <h1 className="text-[46px] text-slate-900 text-center font-extrabold">
          Abacus Books and Kit
        </h1>
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            gap: "20px",
            marginTop: "50px",
          }}
        >
          <div
            style={{
              borderRadius: "20px",
              overflow: "hidden",
              boxShadow: "0px 1px 5px rgba(0,0,0,0.3)",
              border: "1px solid rgba(0,0,0,0.1)",
            }}
          >
            <Image
              width={600}
              height={800}
              src="https://api.internetmadrasa.com/images/play_nursery.jpg"
            />
            <div
              style={{
                padding: "10px 10%",
                fontSize: "16px",
                lineHeight: "22px",
                textAlign: "center",
                backgroundColor: "#efefef",
                fontWeight: "900",
              }}
            >
              <p>Package 1: Brain Math Abacus (Play & Nursery) + Abacus Kit</p>
            </div>
            <a target="_blank" href="/abacus-purchase">
              {" "}
              <div className="bg-sky-500 text-white text-center p-4">
                ক্রয় করুন
              </div>
            </a>
          </div>
          <div
            style={{
              borderRadius: "20px",
              overflow: "hidden",
              boxShadow: "0px 1px 5px rgba(0,0,0,0.3)",
              border: "1px solid rgba(0,0,0,0.1)",
            }}
          >
            <Image
              width={600}
              height={800}
              src="https://api.internetmadrasa.com/images/Level-1.jpg"
            />
            <div
              style={{
                padding: "10px 10%",
                fontSize: "16px",
                lineHeight: "22px",
                textAlign: "center",
                backgroundColor: "#efefef",
                fontWeight: "900",
              }}
            >
              <p>Package 2: Brain Math Abacus (Level 1) + Abacus Kit</p>
            </div>
            <a target="_blank" href="/abacus-purchase">
              {" "}
              <div className="bg-sky-500 text-white text-center p-4">
                ক্রয় করুন
              </div>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default PageClassAbacus;
