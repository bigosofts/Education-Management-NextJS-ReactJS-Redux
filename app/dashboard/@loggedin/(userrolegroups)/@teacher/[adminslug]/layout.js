"use client";
import { useState, useEffect } from "react";
import { isAdmin } from "@/apiservices/checklogin";
import { useRouter } from "next/navigation";
import Sidebar from "@/customComponents/sidebar/sidebar";
import MainMenu from "@/customComponents/Menu/Menu";
import SubMenu from "@/customComponents/SubMenu/SubMenu";
import Footer from "@/customComponents/Footer/Footer";
import "./dashsidebar.css";

function layout({ children, params }) {
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
      href: `/dashboard/${params.adminslug}`,
      icon: "MdOutlineDashboard",
    },
    {
      name: "Abacus",
      href: `/dashboard/${params.adminslug}/abacus`,
      icon: "LuGraduationCap",
    },
    {
      name: "Alem Alema",
      href: `/dashboard/${params.adminslug}/alemalema`,
      icon: "MdEventAvailable",
    },
    {
      name: "Hifz",
      href: `/dashboard/${params.adminslug}/hifz`,
      icon: "MdPostAdd",
    },
  ];

  if (data) {
    if (params.adminslug == data.data.userName) {
      if (true) {
        return (
          <>
            <MainMenu />
            <SubMenu />
            <div className="layout">
              <Sidebar item={sidebarItems} pageCourse={true} />

              {children}
            </div>
            <Footer />
          </>
        );
      }
    } else {
      router.replace(`/dashboard/${data.data.userName}`);
    }
  }
}
export default layout;
