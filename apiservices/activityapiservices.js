exports.selectData = async (query, projection) => {
  const payloaddata = {
    query: query,
    projection: projection,
  };
  const res = await fetch("/apis/v1/select-activities", {
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
  const res = await fetch(`${process.env.URL}/apis/v1/select-activities`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(payloaddata),
    cache: "force-cache",
  });

  if (!res.ok) {
    // This will activate the closest `error.js` Error Boundary
    throw new Error("Failed to fetch data");
  }

  return res.json();
};

exports.deleteData = async (id) => {
  const res = await fetch(`/apis/v1/delete-activity/${id}`, {
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
  activityimage,
  activityid,
  activitytitle,
  activitytitlebn,
  activitydescription,
  activitydescriptionbn,
  activityicon,
  activitystatus
) => {
  const aboutdata = {
    activityImageLink: activityimage,
    activityId: activityid,
    activityTitle: {
      en: activitytitle,
      bn: activitytitlebn,
    },
    activityDescription: {
      en: activitydescription,
      bn: activitydescriptionbn,
    },
    activityIcon: activityicon,
    activeStatus: activitystatus,
  };

  const res = await fetch(`/apis/v1/create-activity`, {
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
  activityid,
  activityimage,
  activitytitle,
  activitytitlebn,
  activitydescription,
  activitydescriptionbn,
  activityicon,
  activitystatus,
  idValue
) => {
  const aboutdata = {
    activityId: activityid,
    activityImageLink: activityimage,
    activityTitle: {
      en: activitytitle,
      bn: activitytitlebn,
    },
    activityDescription: {
      en: activitydescription,
      bn: activitydescriptionbn,
    },
    activityIcon: activityicon,
    activeStatus: activitystatus,
    _id: idValue,
  };

  const res = await fetch(`/apis/v1/update-activity`, {
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
