"use client";
import { useSelector } from "react-redux";
import EnrollButton from "./enroll";
import EnrollButtonb from "./enrollBlank";

function EnrollCondition({ courseCode, setProfileUpdate }) {
  const data = useSelector((state) => state.isAdmin.value);

  if (data) {
    if (data.status == "noToken") {
      return <EnrollButtonb code={courseCode} />;
    } else {
      return (
        <EnrollButton
          setProfileUpdate={setProfileUpdate}
          courseCode={courseCode}
        />
      );
    }
  } else {
    return <EnrollButtonb code={courseCode} />;
  }
}

export default EnrollCondition;
