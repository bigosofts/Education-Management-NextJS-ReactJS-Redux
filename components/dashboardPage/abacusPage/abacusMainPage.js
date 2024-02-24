"use client";
import DashboardExploreSingle from "../DashboardExploreSingle";
import { useSelector } from "react-redux";
import { useRouter } from "next/navigation";

function AbacusMainPage() {
  const data = useSelector((state) => state.isAdmin.value);
  const router = useRouter();

  function push(url) {
    router.push(url);
  }

  const newArray = [
    {
      name: "Dashboard",
      href: `/dashboard/${data.data.userName}`,
      icon: "/images/graph.svg",
      show: true,
    },
    {
      name: "Books & kit",
      href: `/dashboard/${data.data.userName}/books`,
      icon: "/images/books.svg",
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
      name: "Abacus",
      href: `/dashboard/${data.data.userName}/abacus`,
      icon: "/images/abacus.svg",
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
    <div className="grid grid-cols-3 md:grid-cols-5 gap-3 md:gap-12">
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
  );
}

export default AbacusMainPage;
