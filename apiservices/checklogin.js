const { getToken } = require("@/helper/sessionHelper");
const data2 = getToken("access_token");

exports.isAdmin = async () => {
  if (data2) {
    const response = await fetch(
      `${process.env.NEXT_PUBLIC_URL}/apis/v1/isAdmin`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          access_token: data2,
        },
        next: { revalidate: 30 },
      }
    );
    if (!response.ok) {
      // This will activate the closest `error.js` Error Boundary
      throw new Error("Failed to fetch data");
    }

    const data = await response.json();
    return data;
  } else {
    const response = await fetch(
      `${process.env.NEXT_PUBLIC_URL}/apis/v1/isAdmin`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        cache: "no-store",
      }
    );
    if (!response.ok) {
      console.log(response);
      // This will activate the closest `error.js` Error Boundary
      throw new Error("Failed to fetch data");
    }

    const data = await response.json();
    return data;
  }
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
      withCredentials: true,
      mode: "cors",
      body: JSON.stringify(payloaddata),
      next: { revalidate: 30 },
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
      withCredentials: true,
      mode: "cors",
      body: JSON.stringify(payloaddata),
      next: { revalidate: 30 },
    }
  );

  if (!res.ok) {
    // This will activate the closest `error.js` Error Boundary
    throw new Error("Failed to fetch data");
  }

  return res.json();
};

exports.logout = async () => {
  if (data2) {
    const res = await fetch(`${process.env.NEXT_PUBLIC_URL}/apis/v1/logout`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        access_token: data2,
      },
      cache: "no-store",
    });

    if (!res.ok) {
      // This will activate the closest `error.js` Error Boundary
      throw new Error("Failed to fetch data");
    }

    return res.json();
  } else {
    const res = await fetch(`${process.env.NEXT_PUBLIC_URL}/apis/v1/logout`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
      cache: "no-store",
    });

    if (!res.ok) {
      // This will activate the closest `error.js` Error Boundary
      throw new Error("Failed to fetch data");
    }

    return res.json();
  }
};

exports.abacusLogin = async (userName, password) => {
  const payloaddata = {
    userName,
    password,
  };
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_URL}/apis/v1/institution-login`,
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      withCredentials: true,
      mode: "cors",
      body: JSON.stringify(payloaddata),
      next: { revalidate: 30 },
    }
  );

  if (!res.ok) {
    // This will activate the closest `error.js` Error Boundary
    throw new Error("Failed to fetch data");
  }

  return res.json();
};
