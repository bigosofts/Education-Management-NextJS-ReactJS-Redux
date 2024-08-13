"use client";

import { useSelector } from "react-redux";
import { useRouter } from "next/navigation";
import DashboardExploreSingle from "./DashboardExploreSingle";
import ProgressBar from "./progressBar";
import { useState, useEffect } from "react";

function DashExploreTeacher() {
  const data = useSelector((state) => state.isAdmin.value);
  const [percentage, setPercentage] = useState(0);
  const [status, setStatus] = useState();
  const [targetPercentage, setTargetPercentage] = useState(0);

  const classes = useSelector((state) => state.classes.classes);

  const books = useSelector((state) => state.books.books);

  const payments = useSelector((state) => state.djs.payments);

  useEffect(() => {
    let completedCount = 0;
    let array = [];

    if (classes.length > 0) {
      completedCount++;
      array.push("attendance");
    }
    if (books.length > 0) {
      completedCount++;
      array.push("library");
    }
    if (data.data) {
      completedCount++;
      array.push("notice");
    }
    if (payments.length > 0) {
      completedCount++;
      array.push("payment");
    }

    const newTargetPercentage = completedCount * 25;

    setStatus(array);

    setTargetPercentage(newTargetPercentage);
  }, [classes, books, data, payments]);

  useEffect(() => {
    if (percentage < targetPercentage) {
      const increment = () => {
        setPercentage((prev) => {
          if (prev < targetPercentage) {
            return prev + 1;
          }
          clearInterval(intervalId);
          return prev;
        });
      };

      const intervalId = setInterval(increment, 10); // Adjust the interval duration for smoother or faster increments

      return () => clearInterval(intervalId);
    } else if (percentage > targetPercentage) {
      const decrement = () => {
        setPercentage((prev) => {
          if (prev > targetPercentage) {
            return prev - 1;
          }
          clearInterval(intervalId);
          return prev;
        });
      };

      const intervalId = setInterval(decrement, 10); // Adjust the interval duration for smoother or faster increments

      return () => clearInterval(intervalId);
    }
  }, [targetPercentage, percentage]);

  const router = useRouter();

  function push(url) {
    router.push(url);
  }

  if (data) {
    let newArray = [];

    newArray = [
      {
        name: "Library",
        href: `/content/dashboard/${data.data.userName}/books`,
        icon: "/images/books.svg",
        show: true,
      },
      {
        name: "Notices",
        href: `/content/dashboard/${data.data.userName}/notices`,
        icon: "/images/notice.svg",
        show: true,
      },
      {
        name: "Salary",
        href: `/content/dashboard/${data.data.userName}/fees`,
        icon: "/images/fees.svg",
        show: true,
      },
      {
        name: "Student Results",
        href: `/content/dashboard/${data.data.userName}/results`,
        icon: "/images/result.svg",
        show: true,
      },
      {
        name: "Exam & Report",
        href: `/content/dashboard/${data.data.userName}/download-exam`,
        icon: "/images/upload.svg",
        show: true,
      },
      {
        name: "View Handwork",
        href: `/content/dashboard/${data.data.userName}/works`,
        icon: "/images/work.svg",
        show: true,
      },
      {
        name: "Attendance",
        href: `/content/dashboard/${data.data.userName}/attendance`,
        icon: "/images/attendance.svg",
        show: true,
      },

      {
        name: "Settings",
        href: `/content/dashboard/${data.data.userName}/settings`,
        icon: "/images/setting.svg",
        show: true,
      },
    ];

    return (
      <div className="py-2 md:py-12">
        <ProgressBar percentage={percentage} status={status} />

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
