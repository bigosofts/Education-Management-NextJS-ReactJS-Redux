"use client";
import { useState, useEffect } from "react";
import DashboardNav from "@/customComponents/dashboardNav/dashboardNav";
import Sidebar from "@/customComponents/sidebar/sidebar";
import React from "react";
import { isAdmin } from "@/apiservices/checklogin";
import { useRouter } from "next/navigation";

import { useSelector, useDispatch } from "react-redux";
import { setInitialData } from "@/app/redux/features/isAdmin/isAdminSlice";
import { selectDataTwo } from "@/apiservices/studentapiservices";

function layout({ children, params }) {
  const router = useRouter();
  const dispatch = useDispatch();

  const data = useSelector((state) => state.isAdmin.value);

  useEffect(() => {
    async function fetchData() {
      const payload = await isAdmin();
      if (payload.status == "Alhamdulillah") {
        dispatch(setInitialData(payload));
      }
    }
    fetchData();
  }, []);

  const sidebarItems = [
    {
      name: "Dashboard",
      href: `/dashboard/${params.adminslug}`,
      icon: "MdOutlineDashboard",
    },
    {
      name: "Menus",
      href: `/dashboard/${params.adminslug}/menus`,
      icon: "MdMenuOpen",
    },
    {
      name: "Sliders",
      href: `/dashboard/${params.adminslug}/sliders`,
      icon: "TfiLayoutSlider",
    },
    {
      name: "Notices",
      href: `/dashboard/${params.adminslug}/notices`,
      icon: "MdOutlineNotificationAdd",
    },
    {
      name: "Events",
      href: `/dashboard/${params.adminslug}/events`,
      icon: "MdEventAvailable",
    },
    {
      name: "Posts",
      href: `/dashboard/${params.adminslug}/posts`,
      icon: "MdPostAdd",
    },
    {
      name: "Activities",
      href: `/dashboard/${params.adminslug}/activities`,
      icon: "BsActivity",
    },
    {
      name: "Courses",
      href: `/dashboard/${params.adminslug}/courses`,
      icon: "BsBookmarkPlus",
    },
    {
      name: "Teachers",
      href: `/dashboard/${params.adminslug}/teachers`,
      icon: "FaChalkboardTeacher",
    },
    {
      name: "Students",
      href: `/dashboard/${params.adminslug}/students`,
      icon: "LuGraduationCap",
    },
    {
      name: "Board Results",
      href: `/dashboard/${params.adminslug}/results`,
      icon: "BsClipboardData",
    },
    {
      name: "Comments",
      href: `/dashboard/${params.adminslug}/comments`,
      icon: "MdOutlineInsertComment",
    },
    {
      name: "About Us",
      href: `/dashboard/${params.adminslug}/abouts`,
      icon: "FaRegQuestionCircle",
    },
    {
      name: "Widgets",
      href: `/dashboard/${params.adminslug}/widgets`,
      icon: "BiCode",
    },
    {
      name: "Videos",
      href: `/dashboard/${params.adminslug}/videos`,
      icon: "LuGraduationCap",
    },
    {
      name: "Media",
      href: `/dashboard/${params.adminslug}/medias`,
      icon: "LuGraduationCap",
    },
    {
      name: "QAForm",
      href: `/dashboard/${params.adminslug}/qaform`,
      icon: "BiCode",
    },
    {
      name: "Work",
      href: `/dashboard/${params.adminslug}/works`,
      icon: "BsClipboardData",
    },
    {
      name: "Rich Text",
      href: `/dashboard/${params.adminslug}/richtexts`,
      icon: "BiCode",
    },
    {
      name: "Abacus Sheet",
      href: `/dashboard/${params.adminslug}/abacus-sheet`,
      icon: "BsClipboardData",
    },
    {
      name: "Education",
      href: `/dashboard/${params.adminslug}/education`,
      icon: "GoGear",
    },
    {
      name: "Class",
      href: `/dashboard/${params.adminslug}/class`,
      icon: "MdHotelClass",
    },
  ];

  if (data) {
    if (params.adminslug == data.data.userName) {
      return (
        <>
          <DashboardNav />
          <div className="layout">
            <Sidebar item={sidebarItems} />
            {children}
          </div>
        </>
      );
    } else {
      router.replace(`/dashboard/${data.data.userName}`);
    }
  }
}

export default layout;
