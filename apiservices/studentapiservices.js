const { getToken } = require("@/helper/sessionHelper");
const data2 = getToken("access_token");

exports.selectData = async (query, projection) => {
  const payloaddata = {
    query: query,
    projection: projection,
  };
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_URL}/apis/v1/select-students`,
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(payloaddata),
      next: { revalidate: 600 },
    }
  );

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
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_URL}/apis/v1/select-all-students`,
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(payloaddata),
      next: { revalidate: 600 },
    }
  );

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
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_URL}/apis/v1/select-all-students`,
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(payloaddata),
      next: { revalidate: 3600 },
    }
  );

  if (!res.ok) {
    // This will activate the closest `error.js` Error Boundary
    throw new Error("Failed to fetch data");
  }

  return res.json();
};

exports.deleteData = async (id) => {
  if (data2) {
    const res = await fetch(
      `${process.env.NEXT_PUBLIC_URL}/apis/v1/delete-student/${id}`,
      {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
          access_token: data2,
        },
      }
    );

    if (!res.ok) {
      // This will activate the closest `error.js` Error Boundary
      throw new Error("Failed to fetch data");
    }

    return res.json();
  } else {
    const res = await fetch(
      `${process.env.NEXT_PUBLIC_URL}/apis/v1/delete-student/${id}`,
      {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
        },
      }
    );

    if (!res.ok) {
      // This will activate the closest `error.js` Error Boundary
      throw new Error("Failed to fetch data");
    }

    return res.json();
  }
};

exports.createData = async ({
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
  occupation,
  studentCourseCode,
  studentJamatCode,
  gender,
  dateOfBirth,
  countryName,
  fullPresentAddress,
  fullPermanentAddress,
  admissionSession,
  studentMotive,
  paymentStatus,
  extracurricular,
  details,
  activeStatus,
  userRole,
  userName,
  studentDepartment,
  studentSemester,
  batchCount,
}) => {
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
    occupation: occupation,
    extracurricular: extracurricular,
    studentCourseCode: studentCourseCode,
    studentJamatCode: studentJamatCode,
    gender: gender,
    dateOfBirth: dateOfBirth,
    countryName: countryName,
    fullPresentAddress: fullPresentAddress,
    fullPermanentAddress: fullPermanentAddress,
    admissionSession: admissionSession,
    studentMotive: studentMotive,
    details: details,
    paymentStatus: paymentStatus,
    activeStatus: activeStatus,
    userRole: userRole,
    userName: userName,
    studentDepartment: studentDepartment,
    studentSemester: studentSemester,
    batchCount: batchCount,
  };
  console.log(aboutdata);
  if (data2) {
    const res = await fetch(
      `${process.env.NEXT_PUBLIC_URL}/apis/v1/create-student`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          access_token: data2,
        },
        body: JSON.stringify(aboutdata),
      }
    );

    if (!res.ok) {
      // This will activate the closest `error.js` Error Boundary
      throw new Error("Failed to fetch data");
    }

    return res.json();
  } else {
    const res = await fetch(
      `${process.env.NEXT_PUBLIC_URL}/apis/v1/create-student`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(aboutdata),
      }
    );

    if (!res.ok) {
      console.log(res);
      // This will activate the closest `error.js` Error Boundary
      throw new Error("Failed to fetch data");
    }

    return res.json();
  }
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
  occupation,
  studentCourseCode,
  studentJamatCode,
  gender,
  dateOfBirth,
  countryName,
  fullPresentAddress,
  fullPermanentAddress,
  admissionSession,
  admissionDate,
  studentMotive,
  details,
  paymentStatus,
  userRole,
  extracurricular,
  activeStatus,
  idValue,
  studentDepartment,
  studentSemester,
  batchCount
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
    occupation: occupation,
    extracurricular: extracurricular,
    studentCourseCode: studentCourseCode,
    studentJamatCode: studentJamatCode,
    gender: gender,
    dateOfBirth: dateOfBirth,
    countryName: countryName,
    fullPresentAddress: fullPresentAddress,
    fullPermanentAddress: fullPermanentAddress,
    admissionSession: admissionSession,
    studentMotive: studentMotive,
    details: details,
    paymentStatus: paymentStatus,
    activeStatus: activeStatus,
    userRole: userRole,
    userName: userName,
    admissionDate: admissionDate,
    studentDepartment: studentDepartment,
    studentSemester: studentSemester,
    batchCount: batchCount,
  };

  if (data2) {
    const res = await fetch(
      `${process.env.NEXT_PUBLIC_URL}/apis/v1/update-student`,
      {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
          access_token: data2,
        },
        body: JSON.stringify(aboutdata),
      }
    );

    if (!res.ok) {
      // This will activate the closest `error.js` Error Boundary
      console.log(res);
      throw new Error("Failed to fetch data");
    }
    return res.json();
  } else {
    const res = await fetch(
      `${process.env.NEXT_PUBLIC_URL}/apis/v1/update-student`,
      {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(aboutdata),
      }
    );

    if (!res.ok) {
      // This will activate the closest `error.js` Error Boundary
      throw new Error("Failed to fetch data");
    }
    return res.json();
  }
};
