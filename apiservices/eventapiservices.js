exports.selectData = async (query, projection) => {
  const payloaddata = {
    query: query,
    projection: projection,
  };
  const res = await fetch("/apis/v1/select-events", {
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
  const res = await fetch(`${process.env.URL}/apis/v1/select-events`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(payloaddata),
    next: {
      revalidate: 3600,
    },
  });

  if (!res.ok) {
    // This will activate the closest `error.js` Error Boundary
    throw new Error("Failed to fetch data");
  }

  return res.json();
};

exports.deleteData = async (id) => {
  const res = await fetch(`/apis/v1/delete-event/${id}`, {
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
  eventTitleen,
  eventTitlebn,
  eventId,
  eventUpcomingDateen,
  eventUpcomingDatebn,
  eventIcon,
  eventLink,
  eventImageLink,
  activeStatus
) => {
  const aboutdata = {
    eventTitle: {
      en: eventTitleen,
      bn: eventTitlebn,
    },
    eventId: eventId,
    eventUpcomingDate: {
      en: eventUpcomingDateen,
      bn: eventUpcomingDatebn,
    },
    eventIcon: eventIcon,
    eventLink: eventLink,
    activeStatus: activeStatus,
    eventImageLink: eventImageLink,
  };

  const res = await fetch(`/apis/v1/create-event`, {
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
  eventTitleen,
  eventTitlebn,
  eventId,
  eventUpcomingDateen,
  eventUpcomingDatebn,
  eventIcon,
  eventLink,
  eventImageLink,
  activeStatus,
  idValue
) => {
  const aboutdata = {
    _id: idValue,
    eventTitle: {
      en: eventTitleen,
      bn: eventTitlebn,
    },
    eventId: eventId,
    eventUpcomingDate: {
      en: eventUpcomingDateen,
      bn: eventUpcomingDatebn,
    },
    eventIcon: eventIcon,
    eventLink: eventLink,
    activeStatus: activeStatus,
    eventImageLink: eventImageLink,
  };

  const res = await fetch(`/apis/v1/update-event`, {
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
