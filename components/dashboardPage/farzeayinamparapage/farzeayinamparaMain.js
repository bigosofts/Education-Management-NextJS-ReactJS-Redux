"use client";
import DashboardExploreSingle from "../DashboardExploreSingle";
import { useSelector } from "react-redux";
import { useRouter } from "next/navigation";

function FarzeayinamparaMain() {
  const data = useSelector((state) => state.isAdmin.value);
  const router = useRouter();

  function push(url) {
    router.push(url);
  }

  const newArray = [
   

    {
      name: "Live Class Link & Schedule",
      href: `/dashboard/${data.data.userName}/class-room/group?code=farzeayinampara`,
      icon: "/images/population.svg",
      show: true,
    },

    {
      name: "Class Record Management",
      href: `/dashboard/${data.data.userName}/class-room/recorded-classes?code=farzeayinampara`,
      icon: "/images/upload.svg",
      show: true,
    },
  ];

  return (
    <div className="w-11/12 md:w-9/12 my-5 m-auto">
      <h1 className="text-lg md:text-3xl mt-2 text-slate-500">Farze Ayin Ampara</h1>

      <div className="overflow-hidden grid grid-cols-2 md:grid-cols-5 gap-3 md:gap-12">
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
}

export default FarzeayinamparaMain;
