const { getToken } = require("@/helper/sessionHelper");
const data2 = getToken("access_token");

exports.selectData = async (query, projection) => {
  const payloaddata = {
    query: query,
    projection: projection,
  };
  const res = await fetch(`${process.env.NEXT_PUBLIC_URL}/apis/v1/select-departments`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(payloaddata),
    next: { revalidate: 600 },
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
  const res = await fetch(`${process.env.NEXT_PUBLIC_URL}/apis/v1/select-departments`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(payloaddata),
    next: { revalidate: 600 },
  });

  if (!res.ok) {
    // This will activate the closest `error.js` Error Boundary
    throw new Error("Failed to fetch data");
  }

  return res.json();
};

exports.deleteData = async (id) => {
  if(data2){
    const res = await fetch(`${process.env.NEXT_PUBLIC_URL}/apis/v1/delete-department/${id}`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
        access_token: data2,
      },
    });
  
    if (!res.ok) {
      // This will activate the closest `error.js` Error Boundary
      throw new Error("Failed to fetch data");
    }
  
    return res.json();
  }else{
    const res = await fetch(`${process.env.NEXT_PUBLIC_URL}/apis/v1/delete-department/${id}`, {
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
  }
  
};

exports.createData = async ({
  departmentID,
  departmentName,
  jamats,
  activeStatus,
}) => {
  const aboutdata = {
    departmentID,
    departmentName,
    jamats,
    activeStatus,
  };
  if(data2){
    const res = await fetch(`${process.env.NEXT_PUBLIC_URL}/apis/v1/create-department`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        access_token: data2,
      },
      body: JSON.stringify(aboutdata),
    });
  
    if (!res.ok) {
      console.log(res.json());
      // This will activate the closest `error.js` Error Boundary
      throw new Error("Failed to fetch data");
    }
  
    return res.json();
  }else{
    const res = await fetch(`${process.env.NEXT_PUBLIC_URL}/apis/v1/create-department`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(aboutdata),
    });
  
    if (!res.ok) {
      console.log(res.json());
      // This will activate the closest `error.js` Error Boundary
      throw new Error("Failed to fetch data");
    }
  
    return res.json();
  }
  
};

exports.updateData = async ({
  departmentID,
  departmentName,
  jamats,
  activeStatus,
  idValue,
}) => {
  const aboutdata = {
    _id: idValue,
    departmentID,
    departmentName,
    jamats,
    activeStatus,
  };
  if(data2){
    const res = await fetch(`${process.env.NEXT_PUBLIC_URL}/apis/v1/update-department`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
        access_token: data2,
      },
      body: JSON.stringify(aboutdata),
    });
  
    if (!res.ok) {
      // This will activate the closest `error.js` Error Boundary
      throw new Error("Failed to fetch data");
    }
    return res.json();
  }else{
    const res = await fetch(`${process.env.NEXT_PUBLIC_URL}/apis/v1/update-department`, {
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
  }
  
};
