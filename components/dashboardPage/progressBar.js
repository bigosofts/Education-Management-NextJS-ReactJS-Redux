function ProgressBar({ percentage }) {
  return (
    <div className="w-full bg-white rounded-full dark:bg-gray-700 mb-10">
      <div
        className="bg-blue-600 text-xl font-xl text-blue-100 text-center p-2 leading-none rounded-full"
        style={{ width: percentage + "%", transition: "2s ease-out" }}
      >
        {percentage > 50 && "Loading your data: "} {percentage}%
      </div>
    </div>
  );
}

export default ProgressBar;
