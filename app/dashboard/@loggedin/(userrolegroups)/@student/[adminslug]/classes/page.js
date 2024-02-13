"use client";
import { useState } from "react";
import DashCourses from "@/components/dashboardPage/courses/CoursesPage";
import ProfileUpdateLogic from "@/components/dashboardPage/profileUpdateLogic";
function BookPage() {
  const [profileUpdate, setProfileUpdate] = useState(false);

  return profileUpdate ? (
    <ProfileUpdateLogic setProfileUpdate={setProfileUpdate}/>
  ) : (
    <DashCourses
      setProfileUpdate={setProfileUpdate}
    />
  );
}

export default BookPage;
