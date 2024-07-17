"use client";
import { useState } from "react";

import { updateData } from "@/apiservices/studentapiservices";
import { useSelector } from "react-redux";
import mytoast from "../toast/toast";
import allCountry from "./allCountry";
import { IoIosArrowDroprightCircle } from "react-icons/io";

import { useRouter, useSearchParams } from "next/navigation";

function ProfileUpdate() {
  const router = useRouter();
  const countries = allCountry();
  const [inputType, setInputType] = useState("text");
  const searchParams = useSearchParams();

  const code = searchParams.get("code");

  const handleFocus = () => {
    setInputType("date");
  };

  const handleBlur = () => {
    setInputType("text");
  };

  const hardRefresh = (code) => {
    if (typeof window !== "undefined") {
      if (code) {
        router.push(
          `/content/dashboard/${data.data.userDetails.userName}/fees?enroll=${code}&status=ok`
        );
      } else {
        window.location.href = `/content/dashboard/${data.data.userDetails.userName}/settings/profile-update?status=ok`;
      }
    }
  };
  const data = useSelector((state) => state.isAdmin.value);

  const [finalData, setFinalData] = useState({
    firstNameen: data.data.userDetails.firstName.en,
    lastNameen: data.data.userDetails.lastName.en,
    fatherNameen: data.data.userDetails.fatherName.en,

    gender: data.data.userDetails.gender,
    dateOfBirth: data.data.userDetails.dateOfBirth,
    countryName: data.data.userDetails.countryName,

    fullPresentAddress: data.data.userDetails.fullPresentAddress,
    fullPermanentAddress: data.data.userDetails.fullPermanentAddress,
  });

  function onChangeHander(name, value) {
    setFinalData((prev) => ({
      ...prev,
      [name]: value,
    }));
  }

  async function makeUpdate(e) {
    e.preventDefault();
    let obj = { ...finalData };

    let blankArrayList = [];

    for (let key in obj) {
      if (obj.hasOwnProperty(key)) {
        if (!obj[key]) {
          blankArrayList.push(key);
        }
      }
    }
    if (blankArrayList.length < 1) {
      const res = await updateData(
        undefined,
        finalData.firstNameen,
        "",
        finalData.lastNameen,
        "",
        undefined,
        undefined,
        finalData.fatherNameen,
        "",
        undefined,
        undefined,
        undefined,
        undefined,
        undefined,
        undefined,
        finalData.gender,
        finalData.dateOfBirth,
        finalData.countryName,
        finalData.fullPresentAddress,
        finalData.fullPermanentAddress,
        undefined,
        undefined,
        undefined,
        undefined,
        undefined,
        undefined,
        undefined,
        undefined,
        data.data.userDetails._id
      );

      if (res.status == "Alhamdulillah") {
        mytoast.success("User Data has been Updated Successfully");

        hardRefresh(code);
        // const res3 = await logout();
        // if (res3.status == "Alhamdulillah") {
        //   mytoast.info(
        //     "You are logging out"
        //   );
        //   removeToken("access_token");
        //   hardRefresh();
        // }
      } else {
        console.log(res);
      }
    } else {
      mytoast.warning(`One or More Field is Empty`);
    }
  }

  return (
    <div className="w-full md:w-[50%] mx-auto p-5 border-0 md:border-2 border-slate-300 rounded-3xl mt-0 md:mt-5">
      <form onSubmit={makeUpdate}>
        <label className="font-bold" htmlFor="firstnameen">
          First Name:
        </label>
        <input
          onChange={(e) => onChangeHander("firstNameen", e.target.value)}
          value={finalData.firstNameen}
          id="firstnameen"
          name="firstnameen"
          className="my-4 p-4 box-border w-full rounded-3xl"
          type="text"
          placeholder="Enter your First Name"
        ></input>
        {/* Input Field */}
        <label className="font-bold" htmlFor="lastnameen">
          Last Name:
        </label>
        <input
          onChange={(e) => onChangeHander("lastNameen", e.target.value)}
          value={finalData.lastNameen}
          id="lastnameen"
          name="lastnameen"
          className="my-4 p-4 box-border w-full rounded-3xl"
          type="text"
          placeholder="Enter your Last Name"
        ></input>

        {/* Input Field */}
        <label className="font-bold" htmlFor="fathername">
          Father Name:
        </label>
        <input
          onChange={(e) => onChangeHander("fatherNameen", e.target.value)}
          value={finalData.fatherNameen}
          id="fathername"
          name="fathername"
          className="my-4 p-4 box-border w-full rounded-3xl"
          type="text"
          placeholder="Enter your Father Name"
        ></input>

        {/* Input Field */}
        <label className="font-bold" htmlFor="gender">
          Gender:
        </label>
        <select
          onChange={(e) => onChangeHander("gender", e.target.value)}
          value={finalData.gender}
          id="gender"
          name="gender"
          className="bg-white my-4 p-4 box-border w-full rounded-3xl"
        >
          <option className="p-4" value="">
            Select your Gender
          </option>
          <option className="p-4" value="male">
            Male
          </option>
          <option className="p-4" value="female">
            Female
          </option>
        </select>

        {/* Input Field */}
        <label className="font-bold" htmlFor="dateofbirth">
          Date of Birth :
        </label>
        <input
          type="text"
          onChange={(e) => onChangeHander("dateOfBirth", e.target.value)}
          value={finalData.dateOfBirth}
          id="dateofbirth"
          name="dateofbirth"
          className="my-4 p-4 box-border w-full rounded-3xl"
          placeholder="Enter your Birth Date (ex. 27/07/1994)"
        ></input>
        {/* Input Field */}
        <label className="font-bold" htmlFor="country">
          Your Current Living Country: ( আপনি বর্তমানে যে দেশে বসবাস করছেন )
        </label>

        <select
          onChange={(e) => onChangeHander("countryName", e.target.value)}
          value={finalData.countryName}
          id="country"
          name="country"
          type="text"
          className="bg-white my-4 p-4 box-border w-full rounded-3xl mb-10"
        >
          <option className="p-4" value="">
            বর্তমানে আপনি কোন দেশে বাস করছেন
          </option>
          {countries.data.map((item, i) => (
            <option className="p-4" key={i} value={item.name}>
              {item.name}
            </option>
          ))}
        </select>

        {/* Input Field */}
        <label className="font-bold" htmlFor="presentaddress">
          Present Address:
        </label>
        <textarea
          onChange={(e) => onChangeHander("fullPresentAddress", e.target.value)}
          value={finalData.fullPresentAddress}
          rows="2"
          id="presentaddress"
          name="presentaddress"
          className="my-4 p-4 box-border w-full rounded-3xl"
          type="text"
          placeholder="Enter Present Address"
        ></textarea>
        {/* Input Field */}
        <label className="font-bold" htmlFor="parmanentaddress">
          Permanent Address:
        </label>
        <textarea
          onChange={(e) =>
            onChangeHander("fullPermanentAddress", e.target.value)
          }
          value={finalData.fullPermanentAddress}
          rows="2"
          id="parmanentaddress"
          name="parmanentaddress"
          className="my-4 p-4 box-border w-full rounded-3xl mb-12"
          type="text"
          placeholder="Enter Permanent Address"
        ></textarea>

        <button
          type="submit"
          className="bg-blue-500 text-white text-lg font-bold mt-6 rounded-3xl w-full overflow-hidden"
        >
          {code ? (
            <p className="flex justify-between">
              <span className="bg-pink-500 w-1/3 py-2 px-2">(ধাপ ২/৩)</span>{" "}
              <span className="w-2/3 py-2 px-2 relative">
                পরের ধাপে যান{" "}
                <span className="absolute right-1 top-2">
                  <IoIosArrowDroprightCircle className="text-3xl" />
                </span>
              </span>
            </p>
          ) : (
            <div className="p-5">প্রোফাইল আপডেট করুন</div>
          )}
        </button>
      </form>
    </div>
  );
}

export default ProfileUpdate;
