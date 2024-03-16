"use client";

import { useSelector } from "react-redux";
import { useRouter } from "next/navigation";
import DashboardExploreSingle from "./DashboardExploreSingle";

function DashExplore() {
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

      {
        name: "Settings",
        href: `/dashboard/${data.data.userName}/settings`,
        icon: "/images/setting.svg",
        show: true,
      },
    ];

    let newArray = [];

    if (data.data.userDetails.studentCourseCode.length < 1) {
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
        } else if (item.name == "Abacus Student") {
          return {
            name: "Abacus Student",
            href: `/dashboard/${data.data.userName}/abacus`,
            icon: "/images/abacus.svg",
            show: false,
          };
        } else if (item.name == "Abacus Teachers Training") {
          return {
            name: "Abacus Teachers Training",
            href: `/dashboard/${data.data.userName}/abacus-teacher`,
            icon: "/images/abacus_teacher.svg",
            show: false,
          };
        } else if (item.name == "Ramadan Quran") {
          return {
            name: "Ramadan Quran",
            href: `/dashboard/${data.data.userName}/ramadan-quran`,
            icon: "/images/quran.svg",
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
    } else if (
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
            name: "Abacus Student",
            href: `/dashboard/${data.data.userName}/abacus`,
            icon: "/images/abacus.svg",
            show: false,
          };
        } else if (item.name == "Abacus Teachers Training") {
          return {
            name: "Abacus Teachers Training",
            href: `/dashboard/${data.data.userName}/abacus-teacher`,
            icon: "/images/abacus_teacher.svg",
            show: false,
          };
        } else if (item.name == "Ramadan Quran") {
          return {
            name: "Ramadan Quran",
            href: `/dashboard/${data.data.userName}/ramadan-quran`,
            icon: "/images/quran.svg",
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
    } else if (
      data.data.userDetails.studentCourseCode[
        data.data.userDetails.studentCourseCode.length - 1
      ].code == "alemalema"
    ) {
      newArray = [
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
          show: "none",
        },
        {
          name: "Abacus Teachers Training",
          href: `/dashboard/${data.data.userName}/abacus-teacher`,
          icon: "/images/abacus_teacher.svg",
          show: "none",
        },
        {
          name: "Ramadan Quran",
          href: `/dashboard/${data.data.userName}/ramadan-quran`,
          icon: "/images/quran.svg",
          show: "none",
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
    } else if (
      data.data.userDetails.studentCourseCode[
        data.data.userDetails.studentCourseCode.length - 1
      ].code == "abacus_student"
    ) {
      newArray = [
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
          show: "none",
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
          show: "none",
        },
        {
          name: "Upload Exam",
          href: `/dashboard/${data.data.userName}/upload-exam`,
          icon: "/images/upload.svg",
          show: "none",
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
          show: "none",
        },
        {
          name: "Ramadan Quran",
          href: `/dashboard/${data.data.userName}/ramadan-quran`,
          icon: "/images/quran.svg",
          show: "none",
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
    } else if (
      data.data.userDetails.studentCourseCode[
        data.data.userDetails.studentCourseCode.length - 1
      ].code == "abacus_teacher"
    ) {
      newArray = [
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
          show: "none",
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
          show: "none",
        },
        {
          name: "Upload Exam",
          href: `/dashboard/${data.data.userName}/upload-exam`,
          icon: "/images/upload.svg",
          show: "none",
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
          show: "none",
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
          show: "none",
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
    } else if (
      data.data.userDetails.studentCourseCode[
        data.data.userDetails.studentCourseCode.length - 1
      ].code == "ramadanquranulkarim"
    ) {
      newArray = [
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
          show: "none",
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
          show: "none",
        },
        {
          name: "Upload Exam",
          href: `/dashboard/${data.data.userName}/upload-exam`,
          icon: "/images/upload.svg",
          show: "none",
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
          show: "none",
        },
        {
          name: "Abacus Teachers Training",
          href: `/dashboard/${data.data.userName}/abacus-teacher`,
          icon: "/images/abacus_teacher.svg",
          show: "none",
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

        {
          name: "Settings",
          href: `/dashboard/${data.data.userName}/settings`,
          icon: "/images/setting.svg",
          show: true,
        },
      ];
    } else if (
      data.data.userDetails.studentCourseCode[
        data.data.userDetails.studentCourseCode.length - 1
      ].code == "shishunajera"
    ) {
      newArray = [
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
          show: "none",
        },
        {
          name: "Abacus Teachers Training",
          href: `/dashboard/${data.data.userName}/abacus-teacher`,
          icon: "/images/abacus_teacher.svg",
          show: "none",
        },
        {
          name: "Ramadan Quran",
          href: `/dashboard/${data.data.userName}/ramadan-quran`,
          icon: "/images/quran.svg",
          show: "none",
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
    } else if (
      data.data.userDetails.studentCourseCode[
        data.data.userDetails.studentCourseCode.length - 1
      ].code == "shishumaktab"
    ) {
      newArray = [
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
          show: "none",
        },
        {
          name: "Abacus Teachers Training",
          href: `/dashboard/${data.data.userName}/abacus-teacher`,
          icon: "/images/abacus_teacher.svg",
          show: "none",
        },
        {
          name: "Ramadan Quran",
          href: `/dashboard/${data.data.userName}/ramadan-quran`,
          icon: "/images/quran.svg",
          show: "none",
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
    } else if (
      data.data.userDetails.studentCourseCode[
        data.data.userDetails.studentCourseCode.length - 1
      ].code == "farzeayinmaktab"
    ) {
      newArray = [
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
          show: "none",
        },
        {
          name: "Abacus Teachers Training",
          href: `/dashboard/${data.data.userName}/abacus-teacher`,
          icon: "/images/abacus_teacher.svg",
          show: "none",
        },
        {
          name: "Ramadan Quran",
          href: `/dashboard/${data.data.userName}/ramadan-quran`,
          icon: "/images/quran.svg",
          show: "none",
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
    } else if (
      data.data.userDetails.studentCourseCode[
        data.data.userDetails.studentCourseCode.length - 1
      ].code == "farzeayinnajera"
    ) {
      newArray = [
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
          show: "none",
        },
        {
          name: "Abacus Teachers Training",
          href: `/dashboard/${data.data.userName}/abacus-teacher`,
          icon: "/images/abacus_teacher.svg",
          show: "none",
        },
        {
          name: "Ramadan Quran",
          href: `/dashboard/${data.data.userName}/ramadan-quran`,
          icon: "/images/quran.svg",
          show: "none",
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
    } else if (
      data.data.userDetails.studentCourseCode[
        data.data.userDetails.studentCourseCode.length - 1
      ].code == "hifjulquran"
    ) {
      newArray = [
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
          show: "none",
        },
        {
          name: "Abacus Teachers Training",
          href: `/dashboard/${data.data.userName}/abacus-teacher`,
          icon: "/images/abacus_teacher.svg",
          show: "none",
        },
        {
          name: "Ramadan Quran",
          href: `/dashboard/${data.data.userName}/ramadan-quran`,
          icon: "/images/quran.svg",
          show: "none",
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
    } else if (
      data.data.userDetails.studentCourseCode[
        data.data.userDetails.studentCourseCode.length - 1
      ].code == "ezranahusorof"
    ) {
      newArray = [
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
          show: "none",
        },
        {
          name: "Abacus Teachers Training",
          href: `/dashboard/${data.data.userName}/abacus-teacher`,
          icon: "/images/abacus_teacher.svg",
          show: "none",
        },
        {
          name: "Ramadan Quran",
          href: `/dashboard/${data.data.userName}/ramadan-quran`,
          icon: "/images/quran.svg",
          show: "none",
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
    } else if (
      data.data.userDetails.studentCourseCode[
        data.data.userDetails.studentCourseCode.length - 1
      ].code == "urdu"
    ) {
      newArray = [
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
          show: "none",
        },
        {
          name: "Abacus Teachers Training",
          href: `/dashboard/${data.data.userName}/abacus-teacher`,
          icon: "/images/abacus_teacher.svg",
          show: "none",
        },
        {
          name: "Ramadan Quran",
          href: `/dashboard/${data.data.userName}/ramadan-quran`,
          icon: "/images/quran.svg",
          show: "none",
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
    } else if (
      data.data.userDetails.studentCourseCode[
        data.data.userDetails.studentCourseCode.length - 1
      ].code == "farzeayinampara"
    ) {
      newArray = [
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
          show: "none",
        },
        {
          name: "Abacus Teachers Training",
          href: `/dashboard/${data.data.userName}/abacus-teacher`,
          icon: "/images/abacus_teacher.svg",
          show: "none",
        },
        {
          name: "Ramadan Quran",
          href: `/dashboard/${data.data.userName}/ramadan-quran`,
          icon: "/images/quran.svg",
          show: "none",
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
    } else {
      newArray = [
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

        {
          name: "Settings",
          href: `/dashboard/${data.data.userName}/settings`,
          icon: "/images/setting.svg",
          show: true,
        },
      ];
    }

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

export default DashExplore;
