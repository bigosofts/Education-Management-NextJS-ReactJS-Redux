function AttendancePage() {
  return (
    <div>
      <h2 className="text-center">Female Attendance</h2>
      <div className="mt-10">
        <iframe
          style={{ position: "unset", height: "100vh", width: "100%" }}
          src="https://docs.google.com/spreadsheets/d/1SRLhqKbT-8Ozv00RBQumjxwwUiplqAfuKzcWzXiV8Dw/edit?usp=sharing"
          title="description"
        ></iframe>
      </div>

      <h2 className="text-center mt-20">Male Attendance</h2>
      <div className="mt-10">
        <iframe
          style={{ position: "unset", height: "100vh", width: "100%" }}
          src="https://docs.google.com/spreadsheets/d/15_Xc_MCLAvHb6GGyxVU7eGUtycSGvhvKq5TZgyijXIA/edit?usp=sharing"
          title="description"
        ></iframe>
      </div>
    </div>
  );
}

export default AttendancePage;
