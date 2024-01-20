exports.isAdmin = async () => {
  const response = await fetch(
    `${process.env.NEXT_PUBLIC_URL}/apis/v1/isAdmin`,
    {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    }
  );

  if (!response.ok) {
    // This will activate the closest `error.js` Error Boundary
    throw new Error("Failed to fetch data");
  }

  const data = await response.json();
  return data;
};

exports.studentLogin = async (userName, password) => {
  const payloaddata = {
    userName,
    password,
  };
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_URL}/apis/v1/student-login`,
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(payloaddata),
    }
  );

  if (!res.ok) {
    // This will activate the closest `error.js` Error Boundary
    throw new Error("Failed to fetch data");
  }

  return res.json();
};

exports.teacherLogin = async (userName, password) => {
  const payloaddata = {
    userName,
    password,
  };
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_URL}/apis/v1/teacher-login`,
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(payloaddata),
    }
  );

  if (!res.ok) {
    // This will activate the closest `error.js` Error Boundary
    throw new Error("Failed to fetch data");
  }

  return res.json();
};

exports.logout = async () => {
  const res = await fetch(`${process.env.NEXT_PUBLIC_URL}/apis/v1/logout`, {
    method: "GET",
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
