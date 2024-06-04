const { getToken } = require("@/helper/sessionHelper");
const data2 = getToken("access_token");

exports.selectData = async (query, projection) => {
  const payloaddata = {
    query: query,
    projection: projection,
  };
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_URL}/apis/v1/select-teachers`,
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
    `${process.env.NEXT_PUBLIC_URL}/apis/v1/select-all-teachers`,
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
exports.selectAllDataTwo = async (query, projection) => {
  const payloaddata = {
    query: query,
    projection: projection,
  };
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_URL}/apis/v1/select-all-teachers`,
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(payloaddata),
      cache: "no-store",
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
      `${process.env.NEXT_PUBLIC_URL}/apis/v1/delete-teacher/${id}`,
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
      `${process.env.NEXT_PUBLIC_URL}/apis/v1/delete-teacher/${id}`,
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
  designation,
  userName,
  details
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
    userName: userName,
    details: details,
  };
  console.log(aboutdata);
  if (data2) {
    const res = await fetch(
      `${process.env.NEXT_PUBLIC_URL}/apis/v1/create-teacher`,
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
      console.log(res);
      // This will activate the closest `error.js` Error Boundary
      throw new Error("Failed to fetch data");
    }

    return res.json();
  } else {
    const res = await fetch(
      `${process.env.NEXT_PUBLIC_URL}/apis/v1/create-teacher`,
      {
        method: "POST",
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
  designation,
  details
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
    details,
  };
  if (data2) {
    const res = await fetch(
      `${process.env.NEXT_PUBLIC_URL}/apis/v1/update-teacher`,
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
      throw new Error("Failed to fetch data");
    }
    return res.json();
  } else {
    const res = await fetch(
      `${process.env.NEXT_PUBLIC_URL}/apis/v1/update-teacher`,
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
