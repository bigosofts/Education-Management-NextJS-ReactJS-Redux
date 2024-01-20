exports.selectData = async (query, projection) => {
  const payloaddata = {
    query: query,
    projection: projection,
  };
  const res = await fetch(`${process.env.NEXT_PUBLIC_URL}/apis/v1/select-videos`, {
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
exports.selectDataTwo = async (query, projection) => {
  const payloaddata = {
    query: query,
    projection: projection,
  };
  const res = await fetch(`${process.env.NEXT_PUBLIC_URL}/apis/v1/select-videos`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(payloaddata),
    cache: "no-store",
  });

  if (!res.ok) {
    // This will activate the closest `error.js` Error Boundary
    throw new Error("Failed to fetch data");
  }

  return res.json();
};

exports.deleteData = async (id) => {
    console.log(id);
  const res = await fetch(`${process.env.NEXT_PUBLIC_URL}/apis/v1/delete-video/${id}`, {
    method: "DELETE",
    headers: {
      "Content-Type": "application/json",
    },
  });

  if (!res.ok) {
    console.log(res);
    // This will activate the closest `error.js` Error Boundary
    throw new Error("Failed to fetch data");
  }

  return res.json();
};

exports.createData = async ({
  VideoGroupID,
  videos,
  courseID,
  activeStatus,
}) => {
  const aboutdata = {
    VideoGroupID,
    videos,
    courseID,
    activeStatus,
  };

  const res = await fetch(`${process.env.NEXT_PUBLIC_URL}/apis/v1/create-video`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(aboutdata),
  });

  if (!res.ok) {
    console.log(res.json());
    // This will activate the closest `error.js` Error Boundary
    throw new Error("Failed to fetch data");
  }

  return res.json();
};

exports.updateData = async ({
  VideoGroupID,
  videos,
  courseID,
  activeStatus,
  idValue,
}) => {
  const aboutdata = {
    _id: idValue,
    VideoGroupID,
    videos,
    courseID,
    activeStatus,
  };

  const res = await fetch(`${process.env.NEXT_PUBLIC_URL}/apis/v1/update-video`, {
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
