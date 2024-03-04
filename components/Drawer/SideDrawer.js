"use client";
import { IoMdClose } from "react-icons/io";
import Image from "next/image";
import { useRouter, usePathname } from "next/navigation";

import home from "../../public/images/home.svg";
import "./SideDrawer.css";

function SideDrawer({ changeDrawerState, show, sidebarItems, user }) {
  const router = useRouter();
  function pushAndChange(name) {
    router.push(name);

    changeDrawerState(false);
  }

  const pathName = usePathname();

  return (
    <div
      className={`${
        show ? "w-full " : "w-0 "
      }box-border absolute h-screen z-50 sideDrawer`}
    >
      <div className={`w-full bg-[rgba(0,0,0,0.5)] overflow-none h-screen`}>
        <div
          className={`${
            show ? "w-5/6 md:w-1/4 " : "w-0 md:w-0"
          } bg-white h-screen transition-all ease-out duration-300 overflow-y-scroll sideDrawerOverflow`}
        >
          <div
            className="flex justify-between p-2 h-1/6 bg-[#013030]
          "
          >
            <div className="text-xl md:text-2xl text-white">
              <p>{user.userName}</p>
              <p className="text-sm md:text-lg">({user.userRole})</p>
            </div>
            <IoMdClose
              onClick={changeDrawerState}
              className="cursor-pointer text-3xl text-white"
            />
          </div>
          <div className="">
            <ul className="p-5">
              <li
                onClick={() => pushAndChange("/")}
                className="flex align-middle border-[1px] p-2 rounded-md mb-2 md:mb-5 hover:bg-[#013030] cursor-pointer hover:text-white transition-all ease-out duration-300"
              >
                <Image width={30} height={30} src={home} />
                <h1 className="my-auto px-5 text-[20px] md:text-2xl text-[inherit]">
                  Home
                </h1>
              </li>
              {sidebarItems.map((item, i) =>
                item.show === "none" ? (
                  ""
                ) : (
                  <li
                    key={i}
                    onClick={() => pushAndChange(item.href)}
                    className={`flex align-middle border-[1px] p-2 rounded-md mb-2 md:mb-5 hover:bg-[#013030] cursor-pointer hover:text-white transition-all ease-in-out duration-500 ${
                      pathName === item.href ? "bg-[#013030] text-white" : ""
                    } relative`}
                  >
                    {!item.show ? (
                      <div className="bg-[rgba(255,255,255,0.7)] absolute top-0 left-0 z-10 h-full w-full rounded-md"></div>
                    ) : (
                      ""
                    )}
                    <Image width={30} height={30} src={item.icon} />
                    <h1 className="my-auto px-5 text-[20px] md:text-2xl text-[inherit]">
                      {item.name}
                    </h1>
                  </li>
                )
              )}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SideDrawer;
