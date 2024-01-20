exports.selectData = async (query, projection) => {
  const payloaddata = {
    query: query,
    projection: projection,
  };
  const res = await fetch(`${process.env.NEXT_PUBLIC_URL}/apis/v1/select-sliders`, {
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
  const res = await fetch(`${process.env.NEXT_PUBLIC_URL}/apis/v1/select-sliders`, {
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
  const res = await fetch(`${process.env.NEXT_PUBLIC_URL}/apis/v1/delete-slider/${id}`, {
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
  sliderImageLink,
  sliderId,
  sliderTitleen,
  sliderTitlebn,
  sliderDescriptionen,
  sliderDescriptionbn,
  sliderButtonTitleen,
  sliderButtonTitlebn,
  sliderButtonLink,
  activeStatus,
  sliderName
) => {
  const aboutdata = {
    sliderImageLink: sliderImageLink,
    sliderId: sliderId,
    sliderName: sliderName,
    sliderTitle: {
      en: sliderTitleen,
      bn: sliderTitlebn,
    },
    sliderDescription: {
      en: sliderDescriptionen,
      bn: sliderDescriptionbn,
    },
    sliderButtonTitle: {
      en: sliderButtonTitleen,
      bn: sliderButtonTitlebn,
    },
    sliderButtonLink: sliderButtonLink,
    activeStatus: activeStatus,
  };

  const res = await fetch(`${process.env.NEXT_PUBLIC_URL}/apis/v1/create-slider`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(aboutdata),
  });

  console.log(res);

  if (!res.ok) {
    // This will activate the closest `error.js` Error Boundary
    throw new Error("Failed to fetch data");
  }

  return res.json();
};

exports.updateData = async (
  sliderImageLink,
  sliderId,
  sliderTitleen,
  sliderTitlebn,
  sliderDescriptionen,
  sliderDescriptionbn,
  sliderButtonTitleen,
  sliderButtonTitlebn,
  sliderButtonLink,
  activeStatus,
  idValue,
  sliderName
) => {
  const aboutdata = {
    _id: idValue,
    sliderImageLink: sliderImageLink,
    sliderId: sliderId,
    sliderName: sliderName,
    sliderTitle: {
      en: sliderTitleen,
      bn: sliderTitlebn,
    },
    sliderDescription: {
      en: sliderDescriptionen,
      bn: sliderDescriptionbn,
    },
    sliderButtonTitle: {
      en: sliderButtonTitleen,
      bn: sliderButtonTitlebn,
    },
    sliderButtonLink: sliderButtonLink,
    activeStatus: activeStatus,
  };

  const res = await fetch(`${process.env.NEXT_PUBLIC_URL}/apis/v1/update-slider`, {
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
