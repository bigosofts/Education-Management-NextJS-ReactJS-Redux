import { selectDataTwo } from "@/apiservices/menuapiservices";
import Link from "next/link";

import "./SubMenu.css";
import SigninSignupmenuButton from "../SigninSignupmenuButton/SigninSignupmenuButton";

async function getData() {
  const res = await selectDataTwo({
    activeStatus: "active",
    menuType: "header",
  });
  if (res.status == "Alhamdulillah") {
    const dataObject = {
      menus: null,
    };
    dataObject.menus = res.data;
    return dataObject.menus;
  } else {
    mytoast.danger("Data fetching error. Try Refreshing the page");
  }
}

async function SubMenu({ pageName }) {
  const data = await getData();
  return (
    <div className="submenu">
      <div className="container-submenu">
        <input type="checkbox" name="" id="check" />

        <div className="logo-container">
          <h3 className="logo">{pageName}</h3>
        </div>

        <div className="nav-btn">
          <div className="nav-links">
            <ul>
              {data.map((item, i) => (
                <li className={`nav-link nav-link-${i}`} key={i}>
                  {item.subMenu ? (
                    <>
                      <Link href={item.menuLink}>
                        {item.menuTitle.en}
                        <i className="fa fa-caret-down"></i>
                      </Link>
                      <div className="dropdown">
                        <ul>
                          {item.subMenu.map((item2, i) => (
                            <li key={i} className="dropdown-link">
                              {item2.subMenu ? (
                                <>
                                  <Link href={item.menuLink}>
                                    {item2.menuTitle.en}
                                    <i className="fa fa-caret-down"></i>
                                  </Link>
                                  <div className="dropdown second">
                                    <ul>
                                      {item2.subMenu.map((item3, i) => (
                                        <li key={i} className="dropdown-link">
                                          {item3.subMenu ? (
                                            <>
                                              <Link href={item3.menuLink}>
                                                {item3.menuTitle.en}
                                                <i className="fa fa-caret-down"></i>
                                              </Link>
                                              <div className="dropdown second">
                                                <ul>
                                                  {item3.subMenu.map(
                                                    (item4, i) => (
                                                      <li
                                                        key={i}
                                                        className="dropdown-link"
                                                      >
                                                        <Link
                                                          href={item4.menuLink}
                                                        >
                                                          {item4.menuTitle.en}
                                                        </Link>
                                                      </li>
                                                    )
                                                  )}
                                                </ul>
                                              </div>
                                            </>
                                          ) : (
                                            <Link href={item3.menuLink}>
                                              {item3.menuTitle.en}
                                            </Link>
                                          )}
                                        </li>
                                      ))}
                                    </ul>
                                  </div>
                                </>
                              ) : (
                                <Link href={item2.menuLink}>
                                  {item2.menuTitle.en}
                                </Link>
                              )}
                            </li>
                          ))}
                        </ul>
                      </div>
                    </>
                  ) : (
                    <Link href={item.menuLink}>{item.menuTitle.en}</Link>
                  )}
                </li>
              ))}
            </ul>
          </div>

          <SigninSignupmenuButton />
        </div>

        <div className="hamburger-menu-container">
          <div className="hamburger-menu">
            <div></div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SubMenu;
