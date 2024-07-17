"use client";
import { useState, useEffect } from "react";

import { isAdmin } from "@/apiservices/checklogin";
import { useRouter } from "next/navigation";
import CommonMenu from "@/components/CommonMenu/CommonMenu";
import SideDrawer from "@/components/Drawer/SideDrawer";
import { useSelector, useDispatch } from "react-redux";
import { setInitialData } from "@/app/redux/features/isAdmin/isAdminSlice";
import { selectAllDataTwo } from "@/apiservices/teacherapiservices";



function TeacherLayout({ children, params }) {
  const dispatch = useDispatch();

  const router = useRouter();

  const data = useSelector((state) => state.isAdmin.value);
  const [show, setShow] = useState(false);

  function changeDrawerState() {
    setShow((prev) => !prev);
  }
  useEffect(() => {
    async function fetchData() {
      const payload = await isAdmin();
      if (payload.status == "Alhamdulillah") {
        const res = await selectAllDataTwo(
          { userName: payload.data.userName },
          null
        );
        if (res.status == "Alhamdulillah") {
          const desiredObj = {
            status: "Alhamdulillah",
            data: {
              userName: res.data[0].userName,
              userRole: res.data[0].userRole,
              isAdmin: res.data[0].isAdmin,
              userDetails: res.data[0],
            },
          };

          dispatch(setInitialData(desiredObj));
        }
      }
    }
    fetchData();
  }, []);

  const sidebarItems = [
    {
      name: "Dashboard",
      href: `/content/dashboard/${params.adminslug}`,
      icon: "/images/graph.svg",
      show: true,
    },
    {
      name: "Library",
      href: `/content/dashboard/${params.adminslug}/books`,
      icon: "/images/books.svg",
      show: true,
    },
    {
      name: "Notices",
      href: `/content/dashboard/${params.adminslug}/notices`,
      icon: "/images/notice.svg",
      show: true,
    },
    {
      name: "Salary",
      href: `/content/dashboard/${params.adminslug}/fees`,
      icon: "/images/fees.svg",
      show: true,
    },
    {
      name: "Exam & Report",
      href: `/content/dashboard/${params.adminslug}/download-exam`,
      icon: "/images/upload.svg",
      show: true,
    },
    {
      name: "Student Results",
      href: `/content/dashboard/${params.adminslug}/results`,
      icon: "/images/result.svg",
      show: true,
    },
    {
      name: "View Handwork",
      href: `/content/dashboard/${params.adminslug}/works`,
      icon: "/images/work.svg",
      show: true,
    },
    {
      name: "Attendance",
      href: `/content/dashboard/${params.adminslug}/attendance`,
      icon: "/images/attendance.svg",
      show: true,
    },

    {
      name: "Settings",
      href: `/content/dashboard/${params.adminslug}/settings`,
      icon: "/images/setting.svg",
      show: true,
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
      router.replace(`/content/dashboard/${data.data.userName}`);
    }
  }
}

export default TeacherLayout;
