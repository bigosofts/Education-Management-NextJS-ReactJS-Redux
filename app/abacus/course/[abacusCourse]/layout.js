"use client";
import { useState, useEffect } from "react";
import { isAdmin } from "@/apiservices/checklogin";
import { useRouter } from "next/navigation";
import Sidebar from "@/customComponents/sidebar/sidebar";
import MainMenu from "@/customComponents/Menu/Menu";
import SubMenu from "@/customComponents/SubMenu/SubMenu";
import Footer from "@/customComponents/Footer/Footer";
import "./dashsidebar.css";

function layout({ student, teacher, params }) {
  const router = useRouter();

  const [data, setData] = useState();

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
      href: `/abacus/course/${params.abacusCourse}`,
      icon: "MdOutlineDashboard",
    },
    {
      name: "Abacus",
      href: `/abacus/course/${params.abacusCourse}/abacus`,
      icon: "LuGraduationCap",
    },
    {
      name: "Alem Alema",
      href: `/abacus/course/${params.abacusCourse}/alemalema`,
      icon: "MdEventAvailable",
    },
    {
      name: "Hifz",
      href: `/abacus/course/${params.abacusCourse}/hifz`,
      icon: "MdPostAdd",
    },
  ];

  if (data) {
    if (true) {
      return (
        <>
          <MainMenu />
          <SubMenu />
          <div className="layout">
            <Sidebar item={sidebarItems} pageCourse={true} />

            {teacher}
          </div>
          <Footer />
        </>
      );
    }
  }
}
export default layout;
