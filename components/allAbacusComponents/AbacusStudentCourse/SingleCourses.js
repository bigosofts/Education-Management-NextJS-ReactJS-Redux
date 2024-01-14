function SingleCourses() {
  return (
    <div className="flex justify-center">
      <div className="rounded-lg shadow-lg bg-white max-w-sm">
        <a href="#">
          <video
            width="320"
            height="240"
            controls
            className="w-full rounded-t-lg"
          >
            <source
              src="https://www.youtube.com/watch?v=8D5zaUHi02U"
              type="video/mp4"
            />
            <source src="movie.ogg" type="video/ogg" />
            Your browser does not support the video tag.
          </video>
        </a>
        <div className="p-6">
          <h5 className="text-gray-900 text-xl font-medium mb-2">
            অ্যাবাকাস যোগ
          </h5>
          <p className="text-gray-700 text-base mb-4">
            কোর্সটি করলে তুমি দ্রুত অ্যাবাকাসের সাহায্যে যোগ করতে পারবে।
          </p>
          <button
            type="button"
            className=" inline-block px-6 py-2.5 bg-blue-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out"
          >
            Button
          </button>
        </div>
      </div>
    </div>
  );
}

export default SingleCourses;
