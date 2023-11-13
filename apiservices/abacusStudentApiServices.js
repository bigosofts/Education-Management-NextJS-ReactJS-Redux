exports.selectAllData = async (query, projection) => {
  const payloaddata = {
    query: query,
    projection: projection,
  };
  const res = await fetch("/apis/v1/select-all-abacus-students", {
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
  const res = await fetch(`/apis/v1/delete-abacus-student/${id}`, {
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
  studentName,
  studentGender,
  studentParentsName,
  schoolOrMadrashaName,
  studentEmail,
  studentPhone,
  studentPass,
}) => {
  const aboutdata = {
    studentName,
    studentGender,
    studentParentsName,
    schoolOrMadrashaName,
    studentEmail,
    studentPhone,
    password: studentPass,
  };

  const res = await fetch(`/apis/v1/create-abacus-student`, {
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

exports.updateData = async ({
  studentName,
  studentPass,
  studentGender,
  studentParentsName,
  schoolOrMadrashaName,
  studentEmail,
  studentPhone,
  idValue,
}) => {
  const aboutdata = {
    _id: idValue,
    studentName,
    password: studentPass,
    studentGender,
    studentParentsName,
    schoolOrMadrashaName,
    studentEmail,
    studentPhone,
  };

  const res = await fetch(`/apis/v1/update-abacus-student`, {
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
