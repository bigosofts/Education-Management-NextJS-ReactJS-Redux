exports.selectData = async () => {
  const res = await fetch("/apis/v1/read-image", {
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
exports.selectDataTwo = async (query, projection) => {
  const payloaddata = {
    query: query,
    projection: projection,
  };
  const res = await fetch(`${process.env.URL}/apis/v1/read-image`, {
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
