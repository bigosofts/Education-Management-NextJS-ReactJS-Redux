"use client";
import { useState, useEffect } from "react";
import { isAdmin } from "@/apiservices/checklogin";
import { useRouter } from "next/navigation";
import DashboardExploreSingle from "./DashboardExploreSingle";

function DashExplore() {
  const [data, setData] = useState();
  useEffect(() => {
    async function fetchData() {
      const payload = await isAdmin();
      setData(payload);
    }
    fetchData();
  }, []);

  const router = useRouter();
  function push(url) {
    router.push(url);
  }
  if (data) {
    const sidebarItems = [
      {
        name: "Dashboard",
        href: `/dashboard/${data.data.userName}`,
        icon: "/images/graph.svg",
      },
      {
        name: "Library",
        href: `/dashboard/${data.data.userName}/books`,
        icon: "/images/books.svg",
      },
      {
        name: "Notices",
        href: `/dashboard/${data.data.userName}/notices`,
        icon: "/images/notice.svg",
      },
      {
        name: "Fees",
        href: `/dashboard/${data.data.userName}/fees`,
        icon: "/images/fees.svg",
      },
      {
        name: "Results",
        href: `/dashboard/${data.data.userName}/results`,
        icon: "/images/result.svg",
      },
      {
        name: "Handwork",
        href: `/dashboard/${data.data.userName}/works`,
        icon: "/images/work.svg",
      },
      {
        name: "Comments",
        href: `/dashboard/${data.data.userName}/comments`,
        icon: "/images/comment.svg",
      },

      {
        name: "Courses",
        href: `/dashboard/${data.data.userName}/classes`,
        icon: "/images/course.svg",
      },
      {
        name: "Switch",
        href: `/dashboard/${data.data.userName}/switches`,
        icon: "/images/switch.svg",
      },

      {
        name: "Abacus",
        href: `/dashboard/${data.data.userName}/abacus`,
        icon: "/images/abacus.svg",
      },

      {
        name: "Attendance",
        href: `/dashboard/${data.data.userName}/attendance`,
        icon: "/images/attendance.svg",
      },

      {
        name: "Settings",
        href: `/dashboard/${data.data.userName}/settings`,
        icon: "/images/setting.svg",
      },
    ];

    return (
      <div className="py-2 md:py-12">
        <h1 className="text-lg md:text-3xl mt-2 text-slate-500">Explore</h1>
        <div className="grid grid-cols-3 md:grid-cols-5 gap-3 md:gap-12">
          {sidebarItems.map((item) => (
            <DashboardExploreSingle
              image={item.icon}
              link={item.href}
              text={item.name}
              push={push}
            />
          ))}
        </div>
      </div>
    );
  } else {
    return <div>Loading...</div>;
  }
}

export default DashExplore;
