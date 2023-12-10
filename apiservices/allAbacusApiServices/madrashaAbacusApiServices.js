exports.selectAllData = async (query, projection) => {
  const payloaddata = {
    query: query,
    projection: projection,
  };
  const res = await fetch("/apis/v1/select-all-madrasha-abacus", {
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

exports.deleteData = async (id) => {
  const res = await fetch(`/apis/v1/delete-madrasha-abacus/${id}`, {
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

exports.createData = async ({
  madrashaName,
  madrashaAbacusPass,
  directorName,
  directorPhone,
  responsiblePerson,
  responsiblePersonMobile,
  madrashaAddress,
  madrashaEmail,
}) => {
  const aboutdata = {
    madrashaName,
    password: madrashaAbacusPass,
    directorName,
    directorPhone,
    responsiblePerson,
    responsiblePersonMobile,
    madrashaAddress,
    madrashaEmail,
  };

  const res = await fetch(`/apis/v1/create-madrasha-abacus`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(aboutdata),
  });

  if (!res.ok) {
    console.log(res)
    // This will activate the closest `error.js` Error Boundary
    throw new Error("Failed to fetch data");
  }

  return res.json();
};

exports.updateData = async ({
  madrashaName,
  madrashaAbacusPass,
  directorName,
  directorPhone,
  responsiblePerson,
  responsiblePersonMobile,
  madrashaAddress,
  madrashaEmail,
  idValue,
}) => {
  const aboutdata = {
    _id: idValue,
    madrashaName,
    password: madrashaAbacusPass,
    directorName,
    directorPhone,
    responsiblePerson,
    responsiblePersonMobile,
    madrashaAddress,
    madrashaEmail,
  };

  const res = await fetch(`/apis/v1/update-madrasha-abacus`, {
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
