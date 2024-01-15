exports.selectData = async (query, projection) => {
  const payloaddata = {
    query: query,
    projection: projection,
  };
  const res = await fetch("/apis/v1/select-payments", {
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
  const res = await fetch(`${process.env.URL}/apis/v1/select-payments`, {
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
  const res = await fetch(`/apis/v1/delete-studentrole/${id}`, {
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

exports.createData = async ({ studentRole, departments, activeStatus }) => {
  const aboutdata = {
    studentRole,
    departments,
    activeStatus,
  };

  const res = await fetch(`/apis/v1/create-studentrole`, {
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
};

exports.updateData = async ({
  studentRole,
  departments,
  activeStatus,
  idValue,
}) => {
  const aboutdata = {
    _id: idValue,
    studentRole,
    departments,
    activeStatus,
  };

  const res = await fetch(`/apis/v1/update-studentrole`, {
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
