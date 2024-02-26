function CreatePassword() {
  return (
    <div className="flex justify-center items-center h-screen bg-[#eaeaea]">
      <form className="w-11/12 md:w-6/12 lg:w-4/12 mx-auto p-5 shadow-lg rounded-3xl border-[1px] border-slate-100 bg-white">
        <label className="block text-2xl mb-4 font-bold" htmlFor="sid">
          Your SID:
        </label>
        <input
          className="w-full border-[1px] border-slate-300 rounded-3xl p-5 text-2xl mb-4"
          type="text"
          name="sid"
          id="sid"
          value="IMS-2024020012"
          disabled
        />
        <label className="block text-2xl mb-4 font-bold" htmlFor="newPassword">
          New Password:
        </label>
        <input
          className="w-full border-[1px] border-slate-300 rounded-3xl p-5 text-2xl mb-4"
          type="password"
          name="newPassword"
          id="newPassword"
        />
        <label
          className="block text-2xl mb-4 font-bold"
          htmlFor="confirmPassword"
        >
          Confirm Password:
        </label>
        <input
          className="w-full border-[1px] border-slate-300 rounded-3xl p-5 text-2xl mb-4"
          type="password"
          name="confirmPassword"
          id="confirmPassword"
        />
        <button
          className="w-full bg-sky-500 mt-4 p-2 rounded-3xl text-white hover:bg-sky-800 text-2xl"
          type="submit"
        >
          Submit Request
        </button>
      </form>
    </div>
  );
}

export default CreatePassword;
