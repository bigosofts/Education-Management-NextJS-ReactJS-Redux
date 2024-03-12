"use client";
import { useSearchParams } from "next/navigation";
import { selectDataTwo as selectCourses } from "@/apiservices/courseapiservices";
import { selectDataTwo as selectJamats } from "@/apiservices/jamatapiservices";
import { selectDataTwo as selectSemesters } from "@/apiservices/semesterapiservices";
import { selectDataTwo as selectDepartments } from "@/apiservices/departmentapiservices";
import { useEffect, useState } from "react";
import { IoIosArrowDroprightCircle } from "react-icons/io";
import { useSelector } from "react-redux";

function SwitchDesign() {
  const [course, setCourse] = useState();
  const [jamat, setJamat] = useState();
  const [semester, setSemester] = useState();
  const [department, setDepartment] = useState();
  const [extraJamat, setExtraJamat] = useState(false);
  
  const data = useSelector((state) => state.isAdmin.value);

  const [extraSemester, setExtraSemester] = useState(false);

  const searchParams = useSearchParams();
  const enroll = searchParams.get("enroll");
  function submitData() {
    alert("hello");
  }

  const [mainData, setMainData] = useState({
    classes: enroll ? enroll : "",
    jamat: "",
    semester: "",
    department: "",
  });

  function classDecision(e) {
    e.preventDefault();

    function findDepartment(classes) {
      let departmentID = department.find((item) => {
        return item.departmentName == classes;
      });
      return departmentID ? departmentID.departmentID : "";
    }

    setMainData((prev) => ({
      ...prev,
      classes: e.target.value,
      department: findDepartment(e.target.value),
    }));

    if (e.target.value == "alemalema") {
      setExtraJamat(true);
      setExtraSemester(false);
    } else {
      setExtraJamat(false);
      setExtraSemester(false);
    }
  }

  useEffect(() => {
    async function getData() {
      const res = await selectCourses({ activeStatus: "active" }, null);
      const res2 = await selectJamats({ activeStatus: "active" }, null);
      const res3 = await selectSemesters(null, null);
      const res4 = await selectDepartments(null, null);

      if (
        res.status == "Alhamdulillah" &&
        res2.status == "Alhamdulillah" &&
        res3.status == "Alhamdulillah" &&
        res4.status == "Alhamdulillah"
      ) {
        setCourse(res.data);
        setJamat(res2.data);
        setSemester(res3.data);
        setDepartment(res4.data);
      }
    }
    getData();
    if (enroll == "alemalema") {
      setExtraJamat(true);
    } else {
      setExtraJamat(false);
      setExtraSemester(false);
    }
  }, []);

  return (
    <div className="w-full md:w-[50%] mx-auto p-5 border-0 md:border-2 border-slate-300 rounded-3xl mt-0 md:mt-5">
      <div className="flex justify-center p-5 pb-10">
        <div className="">
          <form onSubmit={submitData}>
            <div className="courseSelector h-[150px] md:h-[200px]">
              <label htmlFor="course">
                <h1 className="w-full mx-auto text-sm md:text-3xl text-center mb-2 ">
                  আপনি পরিবর্তিত হয়ে কোন ক্ল্যাসে যেতে ইচ্ছুক?
                </h1>
              </label>

              <select
                value={mainData.classes}
                onChange={classDecision}
                id="course"
                name="course"
                className="bg-white my-4 p-4 box-border w-full rounded-3xl mb-10 md:mb-[100px] text-sm md:text-2xl"
              >
                <option value="">আপনার ক্ল্যাস নির্বাচন করুন</option>
                {course
                  ? course.map((item, i) => (
                      <option key={i} value={item.courseCode}>
                        {item.title.bn}
                      </option>
                    ))
                  : ""}
              </select>
            </div>

            <div
              className={`JamatSelector ${
                extraJamat ? "h-[150px] md:h-[200px]" : "h-[0px]"
              } overflow-hidden transition-all duration-1000 ease-out`}
            >
              <label htmlFor="jamat">
                <h1 className="w-full mx-auto text-sm md:text-3xl text-center my-2">
                  আপনি জামাত নির্বাচন করুন?
                </h1>
              </label>

              <select
                value=""
                id="jamat"
                name="jamat"
                className="bg-white my-4 p-4 box-border w-full rounded-3xl mb-10 md:mb-[100px] text-sm md:text-2xl"
              >
                <option value="none">আপনার জামাত নির্বাচন করুন</option>
                {jamat
                  ? jamat.map((item, i) => (
                      <option key={i} value={item.jamatID}>
                        {item.jamatName.toUpperCase()}
                      </option>
                    ))
                  : ""}
              </select>
            </div>

            <div
              className={`SemesterSelector ${
                extraSemester ? "h-[150px] md:h-[200px]" : "h-[0px]"
              } overflow-hidden transition-all duration-1000 ease-out`}
            >
              <label htmlFor="semester">
                <h1 className="w-full mx-auto text-sm md:text-3xl text-center my-2">
                  আপনি সেমিস্টার নির্বাচন করুন?
                </h1>
              </label>

              <select
                value=""
                id="semester"
                name="semester"
                className="bg-white my-4 p-4 box-border w-full rounded-3xl mb-10 md:mb-[100px] text-sm md:text-2xl"
              >
                <option value="none">আপনার সেমিস্টার নির্বাচন করুন</option>
                {semester
                  ? semester.map((item, i) => (
                      <option key={i} value={item.semesterID}>
                        {item.semesterName}
                      </option>
                    ))
                  : ""}
              </select>
            </div>

            <div className="submitSection">
              <button
                type="submit"
                className="bg-blue-500 text-white text-lg font-bold mt-6 rounded-3xl w-full overflow-hidden"
              >
                {enroll ? (
                  <p className="flex justify-between">
                    <span className="bg-pink-500 w-1/3 py-2 px-2">
                      (ক্লাস পরিবর্তন)
                    </span>{" "}
                    <span className="w-2/3 py-2 px-2 relative">
                      ক্লাস পরিবর্তন রিকোয়েস্ট দিন
                      <span className="absolute right-1 top-2">
                        <IoIosArrowDroprightCircle className="text-3xl" />
                      </span>
                    </span>
                  </p>
                ) : (
                  <div className="p-5">ক্লাস পরিবর্তন রিকোয়েস্ট দিন</div>
                )}
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default SwitchDesign;
