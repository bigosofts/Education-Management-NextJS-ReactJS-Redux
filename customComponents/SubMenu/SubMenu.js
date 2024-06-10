import { selectDataTwo } from "@/apiservices/menuapiservices";


import "./SubMenu.css";

import ToggleButton from "./toggle";

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
        <ToggleButton data={data}/>
        

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
