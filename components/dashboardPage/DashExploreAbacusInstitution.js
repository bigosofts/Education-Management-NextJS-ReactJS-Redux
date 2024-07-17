"use client";

import { useSelector } from "react-redux";
import { useRouter } from "next/navigation";
import DashboardExploreSingle from "./DashboardExploreSingle";

function DashExploreAbacusInstitution() {
  const data = useSelector((state) => state.isAdmin.value);

  const router = useRouter();

  function push(url) {
    router.push(url);
  }

  if (data) {
    let newArray = [];
    if (data.data.userDetails.activeStatus == "active") {
      newArray = [
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
      newArray = [
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

export default DashExploreAbacusInstitution;
