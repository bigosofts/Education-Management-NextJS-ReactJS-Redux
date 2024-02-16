"use client";
import { useState, useEffect } from "react";

import { isAdmin } from "@/apiservices/checklogin";
import { useRouter } from "next/navigation";
import CommonMenu from "@/components/CommonMenu/CommonMenu";
import SideDrawer from "@/components/Drawer/SideDrawer";

import { useSelector, useDispatch } from "react-redux";
import { setInitialData } from "@/app/redux/features/isAdmin/isAdminSlice";

function StudentLayout({ children, params }) {
  const dispatch = useDispatch();

  const data = useSelector((state) => state.isAdmin.value);

  const router = useRouter();

  const [show, setShow] = useState(false);

  function changeDrawerState() {
    setShow((prev) => !prev);
  }
  useEffect(() => {
    async function fetchData() {
      const payload = await isAdmin();
      dispatch(setInitialData(payload));
    }
    fetchData();
  }, []);

  const sidebarItems = [
    {
      name: "Dashboard",
      href: `/dashboard/${params.adminslug}`,
      icon: "/images/graph.svg",
      show: true,
    },
    {
      name: "Library",
      href: `/dashboard/${params.adminslug}/books`,
      icon: "/images/books.svg",
      show: true,
    },
    {
      name: "Notices",
      href: `/dashboard/${params.adminslug}/notices`,
      icon: "/images/notice.svg",
      show: true,
    },
    {
      name: "Fees",
      href: `/dashboard/${params.adminslug}/fees`,
      icon: "/images/fees.svg",
      show: true,
    },
    {
      name: "Results",
      href: `/dashboard/${params.adminslug}/results`,
      icon: "/images/result.svg",
      show: true,
    },
    {
      name: "Upload Exam",
      href: `/dashboard/${params.adminslug}/upload-exam`,
      icon: "/images/upload.svg",
      show: true,
    },
    {
      name: "Handwork",
      href: `/dashboard/${params.adminslug}/works`,
      icon: "/images/work.svg",
      show: true,
    },
    {
      name: "Comments",
      href: `/dashboard/${params.adminslug}/comments`,
      icon: "/images/comment.svg",
      show: true,
    },

    {
      name: "Classes",
      href: `/dashboard/${params.adminslug}/classes`,
      icon: "/images/course.svg",
      show: true,
    },
    {
      name: "Switch",
      href: `/dashboard/${params.adminslug}/switches`,
      icon: "/images/switch.svg",
      show: true,
    },

    {
      name: "Abacus",
      href: `/dashboard/${params.adminslug}/abacus`,
      icon: "/images/abacus.svg",
      show: true,
    },

    {
      name: "Attendance",
      href: `/dashboard/${params.adminslug}/attendance`,
      icon: "/images/attendance.svg",
      show: true,
    },

    {
      name: "Settings",
      href: `/dashboard/${params.adminslug}/settings`,
      icon: "/images/setting.svg",
      show: true,
    },
  ];

  if (data) {
    let newArray = [];

    if (
      data.data.userDetails.studentCourseCode[
        data.data.userDetails.studentCourseCode.length - 1
      ].status == "inactive"
    ) {
      newArray = sidebarItems.map((item) => {
        if (item.name == "Library") {
          return {
            name: "Library",
            href: `/dashboard/${data.data.userName}/books`,
            icon: "/images/books.svg",
            show: false,
          };
        } else if (item.name == "Results") {
          return {
            name: "Results",
            href: `/dashboard/${data.data.userName}/results`,
            icon: "/images/result.svg",
            show: false,
          };
        } else if (item.name == "Handwork") {
          return {
            name: "Handwork",
            href: `/dashboard/${data.data.userName}/works`,
            icon: "/images/work.svg",
            show: false,
          };
        } else if (item.name == "Comments") {
          return {
            name: "Comments",
            href: `/dashboard/${data.data.userName}/comments`,
            icon: "/images/comment.svg",
            show: false,
          };
        } else if (item.name == "Switch") {
          return {
            name: "Switch",
            href: `/dashboard/${data.data.userName}/switches`,
            icon: "/images/switch.svg",
            show: false,
          };
        } else if (item.name == "Abacus") {
          return {
            name: "Abacus",
            href: `/dashboard/${data.data.userName}/abacus`,
            icon: "/images/abacus.svg",
            show: false,
          };
        } else if (item.name == "Attendance") {
          return {
            name: "Attendance",
            href: `/dashboard/${data.data.userName}/attendance`,
            icon: "/images/attendance.svg",
            show: false,
          };
        } else if (item.name == "Upload Exam") {
          return {
            name: "Upload Exam",
            href: `/dashboard/${data.data.userName}/upload-exam`,
            icon: "/images/upload.svg",
            show: false,
          };
        } else {
          return item;
        }
      });
    }

    if (params.adminslug == data.data.userName) {
      return (
        <CommonMenu changeDrawerState={changeDrawerState}>
          {children}
          {show ? (
            <SideDrawer
              user={data.data}
              sidebarItems={newArray}
              show={true}
              changeDrawerState={changeDrawerState}
            />
          ) : (
            <SideDrawer
              user={data.data}
              sidebarItems={newArray}
              show={false}
              changeDrawerState={changeDrawerState}
            />
          )}
        </CommonMenu>
      );
    } else {
      router.replace(`/dashboard/${data.data.userName}`);
    }
  }
}

export default StudentLayout;
