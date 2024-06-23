"use client";

import Link from "next/link";
import SigninSignupmenuButton from "../SigninSignupmenuButton/SigninSignupmenuButton";


function ToggleButton({ data }) {
 

  function changeChecked() {
    document.getElementById("check").checked = false;
  }

  return (
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
                                              {item3.subMenu.map((item4, i) => (
                                                <li
                                                  key={i}
                                                  className="dropdown-link"
                                                >
                                                  <Link
                                                    onClick={changeChecked}
                                                    href={item4.menuLink}
                                                  >
                                                    {item4.menuTitle.en}
                                                  </Link>
                                                </li>
                                              ))}
                                            </ul>
                                          </div>
                                        </>
                                      ) : (
                                        <Link
                                          onClick={changeChecked}
                                          href={item3.menuLink}
                                        >
                                          {item3.menuTitle.en}
                                        </Link>
                                      )}
                                    </li>
                                  ))}
                                </ul>
                              </div>
                            </>
                          ) : (
                            <Link onClick={changeChecked} href={item2.menuLink}>
                              {item2.menuTitle.en}
                            </Link>
                          )}
                        </li>
                      ))}
                    </ul>
                  </div>
                </>
              ) : (
                <Link onClick={changeChecked} href={item.menuLink}>
                  {item.menuTitle.en}
                </Link>
              )}
            </li>
          ))}
        </ul>
      </div>

      <SigninSignupmenuButton />
    </div>
  );
}

export default ToggleButton;
