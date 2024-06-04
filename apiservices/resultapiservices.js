const { getToken } = require("@/helper/sessionHelper");
const data2 = getToken("access_token");

exports.selectData = async (query, projection) => {
  const payloaddata = {
    query: query,
    projection: projection,
  };

  const res = await fetch(
    `${process.env.NEXT_PUBLIC_URL}/apis/v1/select-results`,
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

exports.selectDataLimit = async (query, projection) => {
  const payloaddata = {
    query: query,
    projection: projection,
  };

  const res = await fetch(
    `${process.env.NEXT_PUBLIC_URL}/apis/v1/select-results-limit`,
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
    `${process.env.NEXT_PUBLIC_URL}/apis/v1/select-results`,
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
      `${process.env.NEXT_PUBLIC_URL}/apis/v1/delete-result/${id}`,
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
      `${process.env.NEXT_PUBLIC_URL}/apis/v1/delete-result/${id}`,
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
  resultRollNo,
  resultRegNo,
  studentUserId,
  studentExamMadrasha,
  studentExamCentre,
  studentSubMark,
  studentGrade,
  studentMerit,
  activeStatus,
  passingYear,
  picture,
  marhala
) => {
  const aboutdata = {
    resultRollNo: resultRollNo,
    resultRegNo: resultRegNo,
    studentUserId: studentUserId,
    studentExamMadrasha: studentExamMadrasha,
    studentExamCentre: studentExamCentre,
    studentSubMark: studentSubMark,
    studentGrade: studentGrade,
    studentMerit: studentMerit,
    activeStatus: activeStatus,
    passingYear: passingYear,
    picture: picture,
    marhala: marhala,
  };
  if (data2) {
    const res = await fetch(
      `${process.env.NEXT_PUBLIC_URL}/apis/v1/create-result`,
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
      `${process.env.NEXT_PUBLIC_URL}/apis/v1/create-result`,
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
  resultRollNo,
  resultRegNo,
  studentUserId,
  studentExamMadrasha,
  studentExamCentre,
  studentSubMark,
  studentGrade,
  studentMerit,
  activeStatus,
  idValue,
  passingYear,
  picture,
  marhala
) => {
  const aboutdata = {
    _id: idValue,
    resultRollNo: resultRollNo,
    resultRegNo: resultRegNo,
    studentUserId: studentUserId,
    studentExamMadrasha: studentExamMadrasha,
    studentExamCentre: studentExamCentre,
    studentSubMark: studentSubMark,
    studentGrade: studentGrade,
    studentMerit: studentMerit,
    activeStatus: activeStatus,
    passingYear: passingYear,
    picture: picture,
    marhala: marhala,
  };

  if (data2) {
    const res = await fetch(
      `${process.env.NEXT_PUBLIC_URL}/apis/v1/update-result`,
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
      `${process.env.NEXT_PUBLIC_URL}/apis/v1/update-result`,
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
