"use client";

import Link from "next/link";
import { useState } from "react";
import { MdKeyboardArrowLeft, MdKeyboardArrowRight } from "react-icons/md";
import { IoIosClose } from "react-icons/io";
import { usePathname } from "next/navigation";

function Sidebar(props) {
  const pathname = usePathname();
  const [isCollapsed, setToggleCollapse] = useState(false);
  const [isDestroy, setIsDestroy] = useState(false);

  const toggleCollapseHandler = () => {
    setToggleCollapse((prevState) => !prevState);
  };
  const toggleCollapseHandler2 = () => {
    setIsDestroy((prevState) => !prevState);
  };

  const pageCourse = props.pageCourse;
  let paddingCustom = pageCourse ? { paddingTop: "0px" } : {};
  let CustomMargin = pageCourse ? "sidebar__wrapper_custom" : "";

  const sidebarItems = props.item;

  return (
    <div style={paddingCustom} className={`sidebar__wrapper no-scrollbar`}>
      <div>
        <button onClick={toggleCollapseHandler} className="btn">
          {isCollapsed ? <MdKeyboardArrowRight /> : <MdKeyboardArrowLeft />}
        </button>
        <button
          style={{ marginTop: "40px" }}
          onClick={toggleCollapseHandler2}
          className="btn"
        >
          {isCollapsed ? <IoIosClose /> : <IoIosClose />}
        </button>
      </div>

      <aside
        style={!isCollapsed ? { width: "300px" } : {}}
        className={`sidebar`}
        data-collapse={isCollapsed}
        data-destroy={isDestroy}
      >
        <ul className="sidebar__list">
          {sidebarItems.map(({ name, href, icon }) => (
            <li key={name} className="sidebar__item">
              <Link
                className={`sidebar__link ${
                  pathname == href ? "sidebar__link--active" : ""
                }`}
                href={href}
              >
                <span className="sidebar__icon">{icon}</span>
                <span className="sidebar__name text-nowrap">{name}</span>
              </Link>
            </li>
          ))}
        </ul>
      </aside>
    </div>
  );
}

export default Sidebar;
