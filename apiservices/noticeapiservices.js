exports.selectData = async (query, projection) => {
  const payloaddata = {
    query: query,
    projection: projection,
  };
  const res = await fetch("/apis/v1/select-notices", {
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
  const res = await fetch(`${process.env.URL}/apis/v1/select-notices`, {
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
  const res = await fetch(`/apis/v1/delete-notice/${id}`, {
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
  noticeId,
  noticeTitleen,
  noticeTitlebn,
  noticeIcon,
  noticeLink,
  activeStatus
) => {
  const aboutdata = {
    noticeId: noticeId,
    noticeTitle: {
      en: noticeTitleen,
      bn: noticeTitlebn,
    },
    noticeIcon: noticeIcon,
    noticeLink: noticeLink,
    activeStatus: activeStatus,
  };

  const res = await fetch(`/apis/v1/create-notice`, {
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
  noticeId,
  noticeTitleen,
  noticeTitlebn,
  noticeIcon,
  noticeLink,
  activeStatus,
  idValue
) => {
  const aboutdata = {
    _id: idValue,
    noticeId: noticeId,
    noticeTitle: {
      en: noticeTitleen,
      bn: noticeTitlebn,
    },
    noticeIcon: noticeIcon,
    noticeLink: noticeLink,
    activeStatus: activeStatus,
  };

  const res = await fetch(`/apis/v1/update-notice`, {
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
