"use client";
import { useState, useEffect } from "react";
import Image from "next/image";
import { selectDataTwo } from "@/apiservices/courseapiservices";
import { selectDataTwo as selectDepartment } from "@/apiservices/departmentapiservices";
import { selectDataTwo as seletcJamat } from "@/apiservices/jamatapiservices";
import { selectDataTwo as selectSemester } from "@/apiservices/semesterapiservices";

function PreFeeSection({ profile }) {
  const [course, setCourse] = useState();
  const [department, setDepartment] = useState();
  const [jamat, setJamat] = useState();
  const [semester, setSemester] = useState();

  const [visible, setVisible] = useState(false);

  const [mainData, setMainData] = useState({
    currency: "",
    course: "",
    department: "",
    semester: "",
    jamat: "",
    admissionDate: "",
    amountPaid: "",
    transactionID: "",
  });

  function currencyDecision(e) {
    e.preventDefault();
    const currency = e.target.value;
    setMainData((prev) => ({
      ...prev,
      currency: currency,
    }));
  }

  useEffect(() => {
    async function getData() {
      const res = await selectDataTwo(null, null);
      const res2 = await selectDepartment(null, null);
      const res3 = await seletcJamat(null, null);
      const res4 = await selectSemester(null, null);

      const [course, department, jamat, semester] = await Promise.all([
        res,
        res2,
        res3,
        res4,
      ]);

      if (
        course.status == "Alhamdulillah" &&
        department.status == "Alhamdulillah" &&
        jamat.status == "Alhamdulillah" &&
        semester.status == "Alhamdulillah"
      ) {
        setCourse(
          course.data.map((item) => {
            return { title: item.title.bn, code: item.courseCode };
          })
        );
        setDepartment(
          department.data.map((item) => {
            return { ID: item.departmentID, name: item.departmentName };
          })
        );
        setJamat(
          jamat.data.map((item) => {
            return { ID: item.jamatID, name: item.jamatName };
          })
        );
        setSemester(
          semester.data.map((item) => {
            return { ID: item.semesterID, name: item.semesterName };
          })
        );
      }
    }
    getData();
  }, []);

  return (
    <div className="flex justify-center p-5 pb-10">
      <div className="">
        <form>
          <div className="currencySelector">
            <h1 className="w-full mx-auto text-sm md:text-3xl text-center mb-2">
              আপনি কোন মুদ্রায় পেমেন্ট জমা দিতে চান?
            </h1>

            <div className="flex gap-5 justify-center mb-10 md:mb-[100px]">
              <div className="relative">
                <input
                  onChange={currencyDecision}
                  className="absolute z-10 top-4 md:top-10 left-4 md:left-5 w-5 md:w-10 h-5 md:h-10"
                  type="radio"
                  id="option1"
                  name="currency"
                  value="taka"
                />
                <label for="option1">
                  <div className="w-full md:w-[300px] cursor-pointer shadow-md border-[1px] border-slate-200 bg-white m-1 md:mt-5 rounded-2xl border-box mx-0 p-5 md:p-12 relative">
                    <Image
                      className="m-auto h-12"
                      width={100}
                      height={100}
                      src="/images/taka.svg"
                    />
                    <h2 className="mt-5 text-[12px] md:text-2xl text-center">
                      টাকা
                    </h2>
                  </div>
                </label>
              </div>

              <div className="relative">
                <input
                  onChange={currencyDecision}
                  className="absolute z-10 top-4 md:top-10 left-4 md:left-5 w-5 md:w-10 h-5 md:h-10"
                  type="radio"
                  id="option2"
                  name="currency"
                  value="dollar"
                />
                <label for="option2">
                  <div className="cursor-pointer w-full md:w-[300px] shadow-md border-[1px] border-slate-200 bg-white m-1 md:mt-5 rounded-2xl border-box mx-0 p-5 md:p-12 relative">
                    <Image
                      className="m-auto h-12"
                      width={100}
                      height={100}
                      src="/images/dollar.svg"
                    />
                    <h2 className="mt-5 text-[12px] md:text-2xl text-center">
                      ডলার
                    </h2>
                  </div>
                </label>
              </div>
            </div>
          </div>

          <div className="courseSelector">
            <label htmlFor="course">
              <h1 className="w-full mx-auto text-sm md:text-3xl text-center mb-2">
                আপনি কোন ক্ল্যাসে ভর্তি হতে ইচ্ছুক?
              </h1>
            </label>

            <select
              id="course"
              name="course"
              className="bg-white my-4 p-4 box-border w-full rounded-3xl mb-10 md:mb-[100px]"
            >
              <option value="none">আপনার ক্ল্যাস নির্বাচন করুন</option>
              {course
                ? course.map((item) => (
                    <option value={item.code}>{item.title}</option>
                  ))
                : ""}
            </select>
          </div>

          <div className="JamatSelector">
            <label htmlFor="jamat">
              <h1 className="w-full mx-auto text-sm md:text-3xl text-center mb-2">
                আপনি কোন জামাতে ভর্তি হতে ইচ্ছুক?
              </h1>
            </label>

            <select
              id="jamat"
              name="jamat"
              className="bg-white my-4 p-4 box-border w-full rounded-3xl mb-10 md:mb-[100px]"
            >
              <option value="none">আপনার জামাত নির্বাচন করুন</option>
              {jamat
                ? jamat.map((item) => (
                    <option value={item.ID}>{item.name.toUpperCase()}</option>
                  ))
                : ""}
            </select>
          </div>

          <div className="SemesterSelector">
            <label htmlFor="semester">
              <h1 className="w-full mx-auto text-sm md:text-3xl text-center mb-2">
                আপনি কোন সেমিস্টারে ভর্তি হতে ইচ্ছুক?
              </h1>
            </label>

            <select
              id="semester"
              name="semester"
              className="bg-white my-4 p-4 box-border w-full rounded-3xl mb-10 md:mb-[100px]"
            >
              <option value="none">আপনার সেমিস্টার নির্বাচন করুন</option>
              {semester
                ? semester.map((item) => (
                    <option value={item.ID}>{item.name}</option>
                  ))
                : ""}
            </select>
          </div>

          <div className="TransactionSelector">
            <label htmlFor="transactionalID">
              <h1 className="w-full mx-auto text-sm md:text-3xl text-center mb-2">
                আপনার ট্রানজ্যাকশন কোডটি লিখুন
              </h1>
            </label>

            <input
              type="text"
              id="transactionalID"
              name="transactionalID"
              className="bg-white my-4 p-4 box-border w-full rounded-3xl mb-10 md:mb-[100px]"
              placeholder="213C34OP54ST5GJI5"
            ></input>
            <label htmlFor="payment">
              <h1 className="w-full mx-auto text-sm md:text-3xl text-center mb-2">
                আপনার জমাকৃত অর্থের পরিমাণ লিখুন
              </h1>
            </label>

            <input
              type="text"
              id="payment"
              name="payment"
              className="bg-white my-4 p-4 box-border w-full rounded-3xl mb-10 md:mb-[100px]"
              placeholder="1500 Taka, 30 Dollar"
            ></input>
          </div>
          <div className="submitSection">
            <button
              className="mt-10 w-full p-4 bg-lime-900 hover:bg-lime-700 transition duration-500 ease-out text-white absolute bottom-0 left-0"
              type="submit"
            >
              {" "}
              Submit Admission Request
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default PreFeeSection;
