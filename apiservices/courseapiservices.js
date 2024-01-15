exports.selectData = async (query, projection) => {
  const payloaddata = {
    query: query,
    projection: projection,
  };
  const res = await fetch("/apis/v1/select-courses", {
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
  const res = await fetch(`${process.env.URL}/apis/v1/select-courses`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(payloaddata),
    next: {
      revalidate: 60,
    },
  });

  if (!res.ok) {
    // This will activate the closest `error.js` Error Boundary
    throw new Error("Failed to fetch data");
  }

  return res.json();
};

exports.deleteData = async (id) => {
  const res = await fetch(`/apis/v1/delete-course/${id}`, {
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

exports.createData = async ({
  courseCode,
  imageLink,
  title,
  description,
  categories,
  startingDate,
  popularity,
  jamatName,
  activeStatus,
  instructor,
  coursePrice,
  courseButton,
  courseInfo,
  detailData,
  courseSyllabus,
  faq,
  commentID,
  courseMaterial,
  commonQuestion,
  courseVideoID,
}) => {
  const aboutdata = {
    courseCode,
    imageLink,
    title,
    description,
    categories,
    startingDate,
    popularity,
    jamatName,
    activeStatus,
    instructor,
    coursePrice,
    courseButton,
    courseInfo,
    detailData,
    courseSyllabus,
    faq,
    commentID,
    courseMaterial,
    commonQuestion,
    courseVideoID,
  };

  const res = await fetch(`/apis/v1/create-course`, {
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
  courseCode,
  imageLink,
  title,
  description,
  categories,
  startingDate,
  popularity,
  jamatName,
  activeStatus,
  instructor,
  coursePrice,
  courseButton,
  courseInfo,
  detailData,
  courseSyllabus,
  faq,
  commentID,
  courseMaterial,
  commonQuestion,
  courseVideoID,
  idValue,
}) => {
  const aboutdata = {
    _id: idValue,
    courseCode,
    imageLink,
    title,
    description,
    categories,
    startingDate,
    popularity,
    jamatName,
    activeStatus,
    instructor,
    coursePrice,
    courseButton,
    courseInfo,
    detailData,
    courseSyllabus,
    faq,
    commentID,
    courseMaterial,
    commonQuestion,
    courseVideoID,
  };

  const res = await fetch(`/apis/v1/update-course`, {
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
