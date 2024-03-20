"use client";
import { useState, useEffect } from "react";

import { isAdmin } from "@/apiservices/checklogin";
import { useRouter } from "next/navigation";
import CommonMenu from "@/components/CommonMenu/CommonMenu";
import SideDrawer from "@/components/Drawer/SideDrawer";

function StudentLayout({ children, params }) {
  const router = useRouter();

  const [data, setData] = useState();
  const [show, setShow] = useState(false);

  function changeDrawerState() {
    setShow((prev) => !prev);
  }
  useEffect(() => {
    async function fetchData() {
      const payload = await isAdmin();
      setData(payload);
    }
    fetchData();
  }, []);

  const sidebarItems = [
    {
      name: "Dashboard",
      href: `/dashboard/${params.adminslug}`,
      icon: "/images/graph.svg",
    },
    {
      name: "Library",
      href: `/dashboard/${params.adminslug}/books`,
      icon: "/images/books.svg",
    },
    {
      name: "Notices",
      href: `/dashboard/${params.adminslug}/notices`,
      icon: "/images/notice.svg",
    },
    {
      name: "Fees",
      href: `/dashboard/${params.adminslug}/fees`,
      icon: "/images/fees.svg",
    },
    {
      name: "Results",
      href: `/dashboard/${params.adminslug}/results`,
      icon: "/images/result.svg",
    },
    {
      name: "Handwork",
      href: `/dashboard/${params.adminslug}/works`,
      icon: "/images/work.svg",
    },
    {
      name: "Comments",
      href: `/dashboard/${params.adminslug}/comments`,
      icon: "/images/comment.svg",
    },

    {
      name: "Courses",
      href: `/dashboard/${params.adminslug}/classes`,
      icon: "/images/course.svg",
    },
    {
      name: "Switch",
      href: `/dashboard/${params.adminslug}/switches`,
      icon: "/images/switch.svg",
    },

    {
      name: "Abacus",
      href: `/dashboard/${params.adminslug}/abacus`,
      icon: "/images/abacus.svg",
    },

    {
      name: "Attendance",
      href: `/dashboard/${params.adminslug}/attendance`,
      icon: "/images/attendance.svg",
    },

    {
      name: "Settings",
      href: `/dashboard/${params.adminslug}/settings`,
      icon: "/images/setting.svg",
    },
  ];

  if (data) {
    if (params.adminslug == data.data.userName) {
      return (
        <CommonMenu changeDrawerState={changeDrawerState}>
          {children}
          {show ? (
            <SideDrawer
              user={data.data}
              sidebarItems={sidebarItems}
              show={true}
              changeDrawerState={changeDrawerState}
            />
          ) : (
            <SideDrawer
              user={data.data}
              sidebarItems={sidebarItems}
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
