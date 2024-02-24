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
      href: `/dashboard/${data.data.userName}/abacus/books`,
      icon: "/images/books.svg",
      show: true,
    },
    
    {
      name: "Groups & Class schedule",
      href: `/dashboard/${data.data.userName}/group`,
      icon: "/images/population.svg",
      show: true,
    },
    {
      name: "Sheet Genrator",
      href: `/dashboard/${data.data.userName}/abacus-sheet-generator`,
      icon: "/images/abacus.svg",
      show: true,
    },
    {
      name: "Recorded Class & Quiz",
      href: `/dashboard/${data.data.userName}/recorded-classes`,
      icon: "/images/upload.svg",
      show: true,
    },
    {
      name: "Abacus Play",
      href: `/dashboard/${data.data.userName}/abacus-play`,
      icon: "/images/play.svg",
      show: true,
    },
   

   
  ];

  return (
    <div className="w-11/12 overflow-hidden mt-5 m-auto grid grid-cols-3 md:grid-cols-5 gap-3 md:gap-12">
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
