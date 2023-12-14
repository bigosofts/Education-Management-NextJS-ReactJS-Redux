"use client";

import "./SubMenu.css";

function SubMenu() {
  return (
    <div className="submenu">
      <div className="container-submenu">
        <input type="checkbox" name="" id="check" />

        <div className="logo-container">
          <h3 className="logo">Home</h3>
        </div>

        <div className="nav-btn">
          <div className="nav-links">
            <ul>
              <li className="nav-link" style={{ "--i": ".6s" }}>
                <a href="#">Home</a>
              </li>
              <li className="nav-link" style={{ "--i": "0.85s" }}>
                <a href="#">
                  Menu<i className="fa fa-caret-down"></i>
                </a>
                <div className="dropdown">
                  <ul>
                    <li className="dropdown-link">
                      <a href="#">Link 1</a>
                    </li>
                    <li className="dropdown-link">
                      <a href="#">Link 2</a>
                    </li>
                    <li className="dropdown-link">
                      <a href="#">
                        Link 3<i className="fa fa-caret-down"></i>
                      </a>
                      <div className="dropdown second">
                        <ul>
                          <li className="dropdown-link">
                            <a href="#">Link 1</a>
                          </li>
                          <li className="dropdown-link">
                            <a href="#">Link 2</a>
                          </li>
                          <li className="dropdown-link">
                            <a href="#">Link 3</a>
                          </li>
                          <li className="dropdown-link">
                            <a href="#">
                              More<i className="fa fa-caret-down"></i>
                            </a>
                            <div className="dropdown second">
                              <ul>
                                <li className="dropdown-link">
                                  <a href="#">Link 1</a>
                                </li>
                                <li className="dropdown-link">
                                  <a href="#">Link 2</a>
                                </li>
                                <li className="dropdown-link">
                                  <a href="#">Link 3</a>
                                </li>
                                <div className="arrow"></div>
                              </ul>
                            </div>
                          </li>
                          <div className="arrow"></div>
                        </ul>
                      </div>
                    </li>
                    <li className="dropdown-link">
                      <a href="#">Link 4</a>
                    </li>
                    <div className="arrow"></div>
                  </ul>
                </div>
              </li>
              <li className="nav-link" style={{ "--i": "1.1s" }}>
                <a href="#">
                  Services<i className="fa fa-caret-down"></i>
                </a>
                <div className="dropdown">
                  <ul>
                    <li className="dropdown-link">
                      <a href="#">Link 1</a>
                    </li>
                    <li className="dropdown-link">
                      <a href="#">Link 2</a>
                    </li>
                    <li className="dropdown-link">
                      <a href="#">
                        Link 3<i className="fa fa-caret-down"></i>
                      </a>
                      <div className="dropdown second">
                        <ul>
                          <li className="dropdown-link">
                            <a href="#">Link 1</a>
                          </li>
                          <li className="dropdown-link">
                            <a href="#">Link 2</a>
                          </li>
                          <li className="dropdown-link">
                            <a href="#">Link 3</a>
                          </li>
                          <li className="dropdown-link">
                            <a href="#">
                              More<i className="fa fa-caret-down"></i>
                            </a>
                            <div className="dropdown second">
                              <ul>
                                <li className="dropdown-link">
                                  <a href="#">Link 1</a>
                                </li>
                                <li className="dropdown-link">
                                  <a href="#">Link 2</a>
                                </li>
                                <li className="dropdown-link">
                                  <a href="#">Link 3</a>
                                </li>
                                <div className="arrow"></div>
                              </ul>
                            </div>
                          </li>
                          <div className="arrow"></div>
                        </ul>
                      </div>
                    </li>
                    <li className="dropdown-link">
                      <a href="#">Link 4</a>
                    </li>
                    <div className="arrow"></div>
                  </ul>
                </div>
              </li>
              <li className="nav-link" style={{ "--i": "1.35s" }}>
                <a href="#">About</a>
              </li>
            </ul>
          </div>

          <div className="log-sign" style={{ "--i": "1.8s" }}>
            <a href="#" className="btn transparent">
              Log in
            </a>
            <a href="#" className="btn solid">
              Sign up
            </a>
          </div>
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
