exports.selectAllData = async (query, projection) => {
  const payloaddata = {
    query: query,
    projection: projection,
  };
  const res = await fetch("/apis/v1/select-all-abacus-teachers", {
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
  const res = await fetch(`/apis/v1/delete-abacus-teacher/${id}`, {
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
  teacherName,
  teacherGender,
  workingInstitute,
  teacherEmail,
  teacherPhone,
  teacherPass,
}) => {
  const aboutdata = {
    teacherName,
    teacherGender,
    workingInstitute,
    teacherEmail,
    teacherPhone,
    password: teacherPass,
  };

  const res = await fetch(`/apis/v1/create-abacus-teacher`, {
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
  teacherName,
  teacherGender,
  workingInstitute,
  teacherEmail,
  teacherPhone,
  teacherPass,
  idValue,
}) => {
  const aboutdata = {
    _id: idValue,
    teacherName,
    teacherGender,
    workingInstitute,
    teacherEmail,
    teacherPhone,
    password: teacherPass,
  };

  const res = await fetch(`/apis/v1/update-abacus-teacher`, {
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
