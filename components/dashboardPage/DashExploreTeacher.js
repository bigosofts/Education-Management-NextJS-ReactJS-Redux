"use client";

import { useSelector } from "react-redux";
import { useRouter } from "next/navigation";
import DashboardExploreSingle from "./DashboardExploreSingle";

function DashExploreTeacher() {
  const data = useSelector((state) => state.isAdmin.value);

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
        show: true,
      },
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
        name: "Fees",
        href: `/dashboard/${data.data.userName}/fees`,
        icon: "/images/fees.svg",
        show: true,
      },
      {
        name: "Results",
        href: `/dashboard/${data.data.userName}/results`,
        icon: "/images/result.svg",
        show: true,
      },
      {
        name: "Upload Exam",
        href: `/dashboard/${data.data.userName}/upload-exam`,
        icon: "/images/upload.svg",
        show: true,
      },
      {
        name: "Handwork",
        href: `/dashboard/${data.data.userName}/works`,
        icon: "/images/work.svg",
        show: true,
      },
      {
        name: "Comments",
        href: `/dashboard/${data.data.userName}/comments`,
        icon: "/images/comment.svg",
        show: true,
      },

      {
        name: "Classes",
        href: `/dashboard/${data.data.userName}/classes`,
        icon: "/images/course.svg",
        show: true,
      },
      {
        name: "Switch",
        href: `/dashboard/${data.data.userName}/switches`,
        icon: "/images/switch.svg",
        show: true,
      },

      {
        name: "Abacus Student",
        href: `/dashboard/${data.data.userName}/abacus`,
        icon: "/images/abacus.svg",
        show: true,
      },
      {
        name: "Abacus Teachers Training",
        href: `/dashboard/${data.data.userName}/abacus-teacher`,
        icon: "/images/abacus_teacher.svg",
        show: true,
      },
      {
        name: "Ramadan Quran",
        href: `/dashboard/${data.data.userName}/ramadan-quran`,
        icon: "/images/quran.svg",
        show: true,
      },

      {
        name: "Attendance",
        href: `/dashboard/${data.data.userName}/attendance`,
        icon: "/images/attendance.svg",
        show: true,
      },
    ];

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
        name: "Evaluate Exam",
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

export default DashExploreTeacher;
