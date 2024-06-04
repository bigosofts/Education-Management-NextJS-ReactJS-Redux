const { getToken } = require("@/helper/sessionHelper");
const data2 = getToken("access_token");

exports.selectData = async (query, projection) => {
  const payloaddata = {
    query: query,
    projection: projection,
  };

  const res = await fetch(
    `${process.env.NEXT_PUBLIC_URL}/apis/v1/select-abacus-institutions`,
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
    `${process.env.NEXT_PUBLIC_URL}/apis/v1/select-abacus-institutions`,
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

exports.deleteData = async (id) => {
  if (data2) {
    const res = await fetch(
      `${process.env.NEXT_PUBLIC_URL}/delete-abacus-institution/${id}`,
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
      `${process.env.NEXT_PUBLIC_URL}/delete-abacus-institution/${id}`,
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
  institutionID,
  institutionName,
  principalName,
  studentsNumber,
  directorPhone,
  representativeName,
  representativePhone,
  institutionalEmail,
  registrationFeeAmount,
  registrationPaymentWay,
  paymentTransactionID,
  paymentNumber,
  abacusBookOrderlimit,
  abacusKitOrderlimit,
  password,
  activeStatus,
  batchCount,
}) => {
  const aboutdata = {
    institutionID,
    institutionName,
    principalName,
    studentsNumber,
    directorPhone,
    representativeName,
    representativePhone,
    institutionalEmail,
    registrationFeeAmount,
    registrationPaymentWay,
    paymentTransactionID,
    paymentNumber,
    abacusBookOrderlimit,
    abacusKitOrderlimit,
    password,
    activeStatus,
    batchCount,
  };

  if (data2) {
    const res = await fetch(
      `${process.env.NEXT_PUBLIC_URL}/apis/v1/create-abacus-institution`,
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
      `${process.env.NEXT_PUBLIC_URL}/apis/v1/create-abacus-institution`,
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
  institutionName,
  principalName,
  studentsNumber,
  directorPhone,
  representativeName,
  representativePhone,
  institutionalEmail,
  registrationFeeAmount,
  registrationPaymentWay,
  paymentTransactionID,
  paymentNumber,
  abacusBookOrderlimit,
  abacusKitOrderlimit,
  password,
  activeStatus,
  idValue,
  batchCount
) => {
  const aboutdata = {
    _id: idValue,
    institutionName,
    principalName,
    studentsNumber,
    directorPhone,
    representativeName,
    representativePhone,
    institutionalEmail,
    registrationFeeAmount,
    registrationPaymentWay,
    paymentTransactionID,
    paymentNumber,
    abacusBookOrderlimit,
    abacusKitOrderlimit,
    password,
    activeStatus,
    batchCount,
  };

  if (data2) {
    const res = await fetch(
      `${process.env.NEXT_PUBLIC_URL}/apis/v1/update-abacus-institution`,
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
      `${process.env.NEXT_PUBLIC_URL}/apis/v1/update-abacus-institution`,
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
