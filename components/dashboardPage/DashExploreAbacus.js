"use client";

import { useSelector } from "react-redux";
import { useRouter } from "next/navigation";
import DashboardExploreSingle from "./DashboardExploreSingle";

function DashExploreAbacus() {
  const data = useSelector((state) => state.isAdmin.value);

  const router = useRouter();

  function push(url) {
    router.push(url);
  }

  if (data) {
    let newArray = [];

    newArray = [
      {
        name: "Library",
        href: `/dashboard/${data.data.userName}/books`,
        icon: "/images/books.svg",
        show: true,
      },
      {
        name: "Notices",
        href: `/dashboard/${data.data.userName}/notices`,
        icon: "/images/notice.svg",
        show: true,
      },
      {
        name: "Salary",
        href: `/dashboard/${data.data.userName}/fees`,
        icon: "/images/fees.svg",
        show: true,
      },
      {
        name: "Student Results",
        href: `/dashboard/${data.data.userName}/results`,
        icon: "/images/result.svg",
        show: true,
      },
      {
        name: "Exam & Report",
        href: `/dashboard/${data.data.userName}/download-exam`,
        icon: "/images/upload.svg",
        show: true,
      },
      {
        name: "View Handwork",
        href: `/dashboard/${data.data.userName}/works`,
        icon: "/images/work.svg",
        show: true,
      },
      {
        name: "Attendance",
        href: `/dashboard/${data.data.userName}/attendance`,
        icon: "/images/attendance.svg",
        show: true,
      },

      {
        name: "Settings",
        href: `/dashboard/${data.data.userName}/settings`,
        icon: "/images/setting.svg",
        show: true,
      },
    ];

    return (
      <div className="py-2 md:py-12">
        <h1 className="text-lg md:text-3xl mt-2 text-slate-500">Explore</h1>
        <div className="grid grid-cols-3 md:grid-cols-3 lg:grid-cols-5 gap-3 md:gap-12">
          {newArray.map((item) => (
            <DashboardExploreSingle
              image={item.icon}
              link={item.href}
              text={item.name}
              push={push}
              show={item.show}
            />
          ))}
        </div>
      </div>
    );
  } else {
    return <div>Loading...</div>;
  }
}

export default DashExploreAbacus;
