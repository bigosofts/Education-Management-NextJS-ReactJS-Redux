exports.selectData = async (query, projection) => {
  const payloaddata = {
    query: query,
    projection: projection,
  };
  const res = await fetch("/apis/v1/select-posts", {
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
  const res = await fetch(`${process.env.URL}/apis/v1/select-posts`, {
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
  const res = await fetch(`/apis/v1/delete-post/${id}`, {
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
  postUser,
  postImageLink,
  postId,
  postTitleen,
  postTitlebn,
  postDescriptionen,
  postDescriptionbn,
  postCategoryen,
  postCategorybn,
  postPopularityen,
  postPopularitybn,
  activeStatus
) => {
  const aboutdata = {
    postUser: postUser,
    postImageLink: postImageLink,
    postId: postId,
    postTitle: {
      en: postTitleen,
      bn: postTitlebn,
    },
    postDescription: {
      en: postDescriptionen,
      bn: postDescriptionbn,
    },
    postCategory: {
      en: postCategoryen,
      bn: postCategorybn,
    },
    postPopularity: {
      en: postPopularityen,
      bn: postPopularitybn,
    },
    activeStatus: activeStatus,
  };

  const res = await fetch(`/apis/v1/create-post`, {
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
  postUser,
  postImageLink,
  postId,
  postTitleen,
  postTitlebn,
  postDescriptionen,
  postDescriptionbn,
  postCategoryen,
  postCategorybn,
  postPopularityen,
  postPopularitybn,
  activeStatus,
  idValue
) => {
  const aboutdata = {
    _id: idValue,
    postUser: postUser,
    postImageLink: postImageLink,
    postId: postId,
    postTitle: {
      en: postTitleen,
      bn: postTitlebn,
    },
    postDescription: {
      en: postDescriptionen,
      bn: postDescriptionbn,
    },
    postCategory: {
      en: postCategoryen,
      bn: postCategorybn,
    },
    postPopularity: {
      en: postPopularityen,
      bn: postPopularitybn,
    },
    activeStatus: activeStatus,
  };

  const res = await fetch(`/apis/v1/update-post`, {
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
