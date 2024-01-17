exports.selectData = async (query, projection) => {
  const payloaddata = {
    query: query,
    projection: projection,
  };
  const res = await fetch(`${process.env.URL}/apis/v1/select-comments`, {
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
  const res = await fetch(`${process.env.URL}/apis/v1/select-comments`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(payloaddata),
    next: {
      revalidate: 300,
    },
  });

  if (!res.ok) {
    // This will activate the closest `error.js` Error Boundary
    throw new Error("Failed to fetch data");
  }

  return res.json();
};

exports.deleteData = async (id) => {
  const res = await fetch(`${process.env.URL}/apis/v1/delete-comment/${id}`, {
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
  userName,
  userNamebn,
  commentId,
  designation,
  designationbn,
  comment,
  commentbn,
  commentIcon,
  activeStatus
) => {
  const aboutdata = {
    userName: {
      en: userName,
      bn: userNamebn,
    },
    commentId: commentId,
    designation: {
      en: designation,
      bn: designationbn,
    },
    comment: {
      en: comment,
      bn: commentbn,
    },
    commentIcon: commentIcon,
    activeStatus: activeStatus,
  };

  const res = await fetch(`${process.env.URL}/apis/v1/create-comment`, {
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
  userNamebn,
  commentId,
  designation,
  designationbn,
  comment,
  commentbn,
  commentIcon,
  activeStatus,
  idValue
) => {
  const aboutdata = {
    userName: {
      en: userName,
      bn: userNamebn,
    },
    commentId: commentId,
    designation: {
      en: designation,
      bn: designationbn,
    },
    comment: {
      en: comment,
      bn: commentbn,
    },
    commentIcon: commentIcon,
    activeStatus: activeStatus,
    _id: idValue,
  };

  const res = await fetch(`${process.env.URL}/apis/v1/update-comment`, {
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
