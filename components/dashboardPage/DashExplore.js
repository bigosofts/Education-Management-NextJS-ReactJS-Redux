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
        name: "Change Class",
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
        name: "Class Room",
        href: `/dashboard/${data.data.userName}/class-room`,
        icon: "/images/population.svg",
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
        } else if (item.name == "Change Class") {
          return {
            name: "Change Class",
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
        } else if (item.name == "Class Room") {
          return {
            name: "Class Room",
            href: `/dashboard/${data.data.userName}/class-room`,
            icon: "/images/population.svg",
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
        } else if (item.name == "Change Class") {
          return {
            name: "Change Class",
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
        } else if (item.name == "Class Room") {
          return {
            name: "Class Room",
            href: `/dashboard/${data.data.userName}/class-room`,
            icon: "/images/population.svg",
            show: false,
          };
        } else {
          return item;
        }
      });
    } else if (
      data.data.userDetails.studentCourseCode[
        data.data.userDetails.studentCourseCode.length - 1
      ].status == "active"
    ) {
      let FixedNewArray = [
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
          name: "Classes",
          href: `/dashboard/${data.data.userName}/classes`,
          icon: "/images/course.svg",
          show: true,
        },
        {
          name: "Library",
          href: `/dashboard/${data.data.userName}/books`,
          icon: "/images/books.svg",
          show: true,
        },
        {
          name: "Settings",
          href: `/dashboard/${data.data.userName}/settings`,
          icon: "/images/setting.svg",
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
          name: "Change Class",
          href: `/dashboard/${data.data.userName}/switches`,
          icon: "/images/switch.svg",
          show: true,
        },
        {
          name: "Attendance",
          href: `/dashboard/${data.data.userName}/attendance`,
          icon: "/images/attendance.svg",
          show: true,
        },
      ];

      let checkArray = [];
      data.data.userDetails.studentCourseCode.forEach((item) => {
        newArray = FixedNewArray;

        if (item.code == "alemalema" && item.status == "active") {
          let alemalemaArray = [
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
          ];
          if (
            !checkArray.some((item) => {
              return item == "alemalema";
            })
          ) {
            alemalemaArray.forEach((item) => {
              newArray.push(item);
            });
            checkArray.push("alemalema");
          }
        }
        if (item.code == "abacus_student" && item.status == "active") {
          let abacusArray = [
            {
              name: "Abacus Student",
              href: `/dashboard/${data.data.userName}/abacus`,
              icon: "/images/abacus.svg",
              show: true,
            },
          ];

          if (
            !checkArray.some((item) => {
              return item == "abacus_student";
            })
          ) {
            abacusArray.forEach((item) => {
              newArray.push(item);
            });
            checkArray.push("abacus_student");
          }
        }
        if (item.code == "abacus_teacher" && item.status == "active") {
          let abacusTeacherArray = [
            {
              name: "Abacus Teachers Training",
              href: `/dashboard/${data.data.userName}/abacus-teacher`,
              icon: "/images/abacus_teacher.svg",
              show: true,
            },
          ];

          if (
            !checkArray.some((item) => {
              return item == "abacus_teacher";
            })
          ) {
            abacusTeacherArray.forEach((item) => {
              newArray.push(item);
            });
            checkArray.push("abacus_teacher");
          }
        }
        if (item.code == "ramadanquranulkarim" && item.status == "active") {
          let ramadanquranulkarimArray = [
            {
              name: "Ramadan Quran",
              href: `/dashboard/${data.data.userName}/ramadan-quran`,
              icon: "/images/quran.svg",
              show: true,
            },
          ];

          if (
            !checkArray.some((item) => {
              return item == "ramadanquranulkarim";
            })
          ) {
            ramadanquranulkarimArray.forEach((item) => {
              newArray.push(item);
            });
            checkArray.push("ramadanquranulkarim");
          }
        }

        if (
          (item.code == "alemalema" && item.status == "active") ||
          (item.code == "farzeayinampara" && item.status == "active") ||
          (item.code == "ezranahusorof" && item.status == "active") ||
          (item.code == "shishumaktab" && item.status == "active") ||
          (item.code == "hifjulquran" && item.status == "active") ||
          (item.code == "farzeayinnajera" && item.status == "active") ||
          (item.code == "farzeayinmaktab" && item.status == "active") ||
          (item.code == "urdu" && item.status == "active") ||
          (item.code == "shishunajera" && item.status == "active")
        ) {
          let combinedArray = [
            {
              name: "Class Room",
              href: `/dashboard/${data.data.userName}/class-room`,
              icon: "/images/population.svg",
              show: true,
            },
          ];
          if (
            !checkArray.some((item) => {
              return item == "combinedItem";
            })
          ) {
            combinedArray.forEach((item) => {
              newArray.push(item);
            });
            checkArray.push("combinedItem");
          }
        }
      });
    } else {
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
          name: "Change Class",
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
        {
          name: "Class Room",
          href: `/dashboard/${data.data.userName}/class-room`,
          icon: "/images/population.svg",
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
