exports.selectData = async (query, projection) => {
  const payloaddata = {
    query: query,
    projection: projection,
  };
  const res = await fetch(`/apis/v1/select-menus`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(payloaddata),
  });

  if (!res.ok) {
    // This will activate the closest `error.js` Error Boundary
    throw new Error("Failed to fetch data");
  }

  return res.json();
};
exports.selectDataTwo = async (query, projection) => {
  const payloaddata = {
    query: query,
    projection: projection,
  };
  const res = await fetch(`${process.env.URL}/apis/v1/select-menus`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(payloaddata),
    next: {
      revalidate: 300,
    },
  });

  if (!res.ok) {
    // This will activate the closest `error.js` Error Boundary
    throw new Error("Failed to fetch data");
  }

  return res.json();
};

exports.deleteData = async (id) => {
  const res = await fetch(`/apis/v1/delete-menu/${id}`, {
    method: "DELETE",
    headers: {
      "Content-Type": "application/json",
    },
  });

  if (!res.ok) {
    // This will activate the closest `error.js` Error Boundary
    throw new Error("Failed to fetch data");
  }

  return res.json();
};

exports.createData = async (
  menuTitleen,
  menuTitlebn,
  menuLink,
  menuIcon,
  menuType,
  activeStatus,
  subMenu
) => {
  const aboutdata = {
    menuTitle: {
      en: menuTitleen,
      bn: menuTitlebn,
    },
    menuLink: menuLink,
    menuIcon: menuIcon,
    menuType: menuType,
    activeStatus: activeStatus,
    subMenu: subMenu,
  };

  const res = await fetch(`/apis/v1/create-menu`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(aboutdata),
  });

  if (!res.ok) {
    // This will activate the closest `error.js` Error Boundary
    throw new Error("Failed to fetch data");
  }

  return res.json();
};

exports.updateData = async (
  menuTitleen,
  menuTitlebn,
  menuLink,
  menuIcon,
  menuType,
  activeStatus,
  idValue,
  subMenu
) => {
  const aboutdata = {
    _id: idValue,
    menuTitle: {
      en: menuTitleen,
      bn: menuTitlebn,
    },
    menuLink: menuLink,
    menuIcon: menuIcon,
    menuType: menuType,
    activeStatus: activeStatus,
    subMenu: subMenu,
  };

  const res = await fetch(`/apis/v1/update-menu`, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(aboutdata),
  });

  if (!res.ok) {
    // This will activate the closest `error.js` Error Boundary
    throw new Error("Failed to fetch data");
  }
  return res.json();
};
