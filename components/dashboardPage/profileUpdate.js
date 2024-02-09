function ProfileUpdate() {
  return (
    <div className="w-full md:w-[50%] mx-auto p-5 border-0 md:border-2 border-slate-300 rounded-3xl">
      {/* Input Field */}
      <label className="font-bold" htmlFor="firstnameen">
        First Name:
      </label>
      <input
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
        id="lastnameen"
        name="lastnameen"
        className="my-4 p-4 box-border w-full rounded-3xl"
        type="text"
        placeholder="Enter your Last Name"
      ></input>
      {/* Input Field */}
      <label className="font-bold" htmlFor="fisrtnamebn">
        নামের প্রথম অংশ:
      </label>
      <input
        id="fisrtnamebn"
        name="fisrtnamebn"
        className="my-4 p-4 box-border w-full rounded-3xl"
        type="text"
        placeholder="নামের প্রথম অংশ লিখুন"
      ></input>
      {/* Input Field */}
      <label className="font-bold" htmlFor="lastnamebn">
        নামের দ্বিতীয় অংশ:
      </label>
      <input
        id="lastnamebn"
        name="lastnamebn"
        className="my-4 p-4 box-border w-full rounded-3xl"
        type="text"
        placeholder="নামের দ্বিতীয় অংশ লিখুন"
      ></input>

      {/* Input Field */}
      <label className="font-bold" htmlFor="nidnumber">
        NID Number:
      </label>
      <input
        id="nidnumber"
        name="nidnumber"
        className="my-4 p-4 box-border w-full rounded-3xl"
        type="number"
        placeholder="Enter your NID Number"
      ></input>
      {/* Input Field */}
      <label className="font-bold" htmlFor="birthregno">
        Birth Registration Number:
      </label>
      <input
        id="birthregno"
        name="birthregno"
        className="my-4 p-4 box-border w-full rounded-3xl"
        type="number"
        placeholder="Enter Birth Registration No."
      ></input>
      {/* Input Field */}
      <label className="font-bold" htmlFor="occupation">
        Occupation:
      </label>
      <input
        id="occupation"
        name="occupation"
        className="my-4 p-4 box-border w-full rounded-3xl"
        type="text"
        placeholder="Enter your occupation"
      ></input>

      {/* Input Field */}
      <label className="font-bold" htmlFor="extracurricular">
        Extra-curricular Activities:
      </label>
      <textarea
        rows="1"
        id="extracurricular"
        name="extracurricular"
        className="my-4 p-4 box-border w-full rounded-3xl"
        type="text"
        placeholder="Do you involve in any Extra-curricular Activities or have expertise on any?"
      ></textarea>

      {/* Input Field */}
      <label className="font-bold" htmlFor="gender">
        Gender:
      </label>
      <select
        id="gender"
        name="gender"
        className="bg-white my-4 p-4 box-border w-full rounded-3xl"
      >
        <option value="none">Select your Gender</option>
        <option value="male">Male</option>
        <option value="female">Female</option>
      </select>

      {/* Input Field */}
      <label className="font-bold" htmlFor="dateofbirth">
        Birth Date:
      </label>
      <input
        id="dateofbirth"
        name="dateofbirth"
        className="my-4 p-4 box-border w-full rounded-3xl"
        type="date"
        placeholder="Enter your Birth Date"
      ></input>
      {/* Input Field */}
      <label className="font-bold" htmlFor="country">
        Country:
      </label>
      <input
        id="country"
        name="country"
        className="my-4 p-4 box-border w-full rounded-3xl"
        type="text"
        placeholder="Enter your Country Name"
      ></input>

      {/* Input Field */}
      <label className="font-bold" htmlFor="presentaddress">
        Present Address:
      </label>
      <textarea
        rows="1"
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
        rows="1"
        id="parmanentaddress"
        name="parmanentaddress"
        className="my-4 p-4 box-border w-full rounded-3xl"
        type="text"
        placeholder="Enter Permanent Address"
      ></textarea>

      {/* Input Field */}
      <label className="font-bold" htmlFor="targetGoal">
        Target or Goal:
      </label>
      <textarea
        rows="1"
        id="targetGoal"
        name="targetGoal"
        className="my-4 p-4 box-border w-full rounded-3xl"
        type="text"
        placeholder="আপনার জীবনের উদ্যেশ্য কি?"
      ></textarea>


      <button className="mt-10 w-full p-4 bg-lime-900 hover:bg-lime-700 transition duration-300 ease-out text-white rounded-3xl" type="submit"> Update Your Data</button>
    </div>
  );
}

export default ProfileUpdate;
