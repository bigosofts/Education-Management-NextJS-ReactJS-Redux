exports.selectData = async (query, projection) => {
  const payloaddata = {
    query: query,
    projection: projection,
  };
  const res = await fetch("/apis/v1/select-teachers", {
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
exports.selectAllData = async (query, projection) => {
  const payloaddata = {
    query: query,
    projection: projection,
  };
  const res = await fetch("/apis/v1/select-all-teachers", {
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
exports.selectAllDataTwo = async (query, projection) => {
  const payloaddata = {
    query: query,
    projection: projection,
  };
  const res = await fetch(`${process.env.URL}/apis/v1/select-all-teachers`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(payloaddata),
    next:{
      revalidate:60
    }
  });

  if (!res.ok) {
    // This will activate the closest `error.js` Error Boundary
    throw new Error("Failed to fetch data");
  }

  return res.json();
};

exports.deleteData = async (id) => {
  const res = await fetch(`/apis/v1/delete-teacher/${id}`, {
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
  firstNameen,
  firstNamebn,
  lastNameen,
  lastNamebn,
  nidNumber,
  birthRegNumber,
  fatherNameen,
  fatherNamebn,
  emailAddress,
  password,
  mobileNumber,
  teacherCourseCode,
  teacherJamatCode,
  gender,
  dateOfBirth,
  countryName,
  fullPresentAddress,
  fullPermanentAddress,
  educationalBackground,
  userRole,
  activeStatus,
  designation
) => {
  const aboutdata = {
    firstName: {
      en: firstNameen,
      bn: firstNamebn,
    },
    lastName: {
      en: lastNameen,
      bn: lastNamebn,
    },
    nidNumber: nidNumber,
    birthRegNumber: birthRegNumber,
    fatherName: {
      en: fatherNameen,
      bn: fatherNamebn,
    },
    emailAddress: emailAddress,
    password: password,
    mobileNumber: mobileNumber,
    teacherCourseCode: teacherCourseCode,
    teacherJamatCode: teacherJamatCode,
    gender: gender,
    dateOfBirth: dateOfBirth,
    countryName: countryName,
    fullPresentAddress: fullPresentAddress,
    fullPermanentAddress: fullPermanentAddress,
    educationalBackground: educationalBackground,
    activeStatus: activeStatus,
    userRole: userRole,
    designation: designation,
  };

  const res = await fetch(`/apis/v1/create-teacher`, {
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
  userName,
  firstNameen,
  firstNamebn,
  lastNameen,
  lastNamebn,
  nidNumber,
  birthRegNumber,
  fatherNameen,
  fatherNamebn,
  emailAddress,
  password,
  mobileNumber,
  teacherCourseCode,
  teacherJamatCode,
  gender,
  dateOfBirth,
  countryName,
  fullPresentAddress,
  fullPermanentAddress,
  educationalBackground,
  userRole,
  activeStatus,
  idValue,
  designation
) => {
  const aboutdata = {
    _id: idValue,
    firstName: {
      en: firstNameen,
      bn: firstNamebn,
    },
    lastName: {
      en: lastNameen,
      bn: lastNamebn,
    },
    nidNumber: nidNumber,
    birthRegNumber: birthRegNumber,
    fatherName: {
      en: fatherNameen,
      bn: fatherNamebn,
    },
    emailAddress: emailAddress,
    password: password,
    mobileNumber: mobileNumber,
    teacherCourseCode: teacherCourseCode,
    teacherJamatCode: teacherJamatCode,
    gender: gender,
    dateOfBirth: dateOfBirth,
    countryName: countryName,
    fullPresentAddress: fullPresentAddress,
    fullPermanentAddress: fullPermanentAddress,
    educationalBackground: educationalBackground,
    activeStatus: activeStatus,
    userRole: userRole,
    userName: userName,
    designation: designation,
  };

  const res = await fetch(`/apis/v1/update-teacher`, {
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
