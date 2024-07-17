"use client";
import { useState, useEffect } from "react";

import { isAdmin } from "@/apiservices/checklogin";
import { useRouter } from "next/navigation";
import CommonMenu from "@/components/CommonMenu/CommonMenu";
import SideDrawer from "@/components/Drawer/SideDrawer";
import { useSelector, useDispatch } from "react-redux";
import { setInitialData } from "@/app/redux/features/isAdmin/isAdminSlice";
import { selectDataTwo } from "@/apiservices/abacusinstitutionapiservices";

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
        const res = await selectDataTwo(
          { institutionID: payload.data.userName },
          null
        );

        if (res.status == "Alhamdulillah") {
          const desiredObj = {
            status: "Alhamdulillah",
            data: {
              userName: res.data[0].institutionID,
              userRole: "abacus_teacher",
              isAdmin: false,
              userDetails: res.data[0],
            },
          };

          dispatch(setInitialData(desiredObj));
        }
      }
    }
    fetchData();
  }, []);

  let sidebarItems = [];
  if (data) {
    if (data.data.userDetails.activeStatus == "active") {
      sidebarItems = [
        {
          name: "Abacus Books & kit",
          href: `/content/dashboard/${data.data.userName}/books`,
          icon: "/images/books.svg",
          show: true,
        },
        {
          name: "Live Class Link & Schedule",
          href: `/content/dashboard/${data.data.userName}/group`,
          icon: "/images/population.svg",
          show: true,
        },
        {
          name: "Abacus Sheet Genrator",
          href: `/content/dashboard/${data.data.userName}/abacus-sheet-generator`,
          icon: "/images/abacus.svg",
          show: true,
        },
        {
          name: "Recorded Classes & Quiz",
          href: `/content/dashboard/${data.data.userName}/recorded-classes`,
          icon: "/images/upload.svg",
          show: true,
        },
        {
          name: "Abacus Play- Japanese Abacus (Soroban)",
          href: `/content/dashboard/${data.data.userName}/abacus-play`,
          icon: "/images/play.svg",
          show: true,
        },
      ];
    } else {
      sidebarItems = [
        {
          name: "Abacus Books & kit",
          href: `/content/dashboard/${data.data.userName}/books`,
          icon: "/images/books.svg",
          show: true,
        },
        {
          name: "Live Class Link & Schedule",
          href: `/content/dashboard/${data.data.userName}/group`,
          icon: "/images/population.svg",
          show: false,
        },
        {
          name: "Abacus Sheet Genrator",
          href: `/content/dashboard/${data.data.userName}/abacus-sheet-generator`,
          icon: "/images/abacus.svg",
          show: false,
        },
        {
          name: "Recorded Classes & Quiz",
          href: `/content/dashboard/${data.data.userName}/recorded-classes`,
          icon: "/images/upload.svg",
          show: false,
        },
        {
          name: "Abacus Play- Japanese Abacus (Soroban)",
          href: `/content/dashboard/${data.data.userName}/abacus-play`,
          icon: "/images/play.svg",
          show: true,
        },
      ];
    }
  }

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
