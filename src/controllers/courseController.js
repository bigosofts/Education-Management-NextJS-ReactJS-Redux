const courseModel = require("../models/courseModel");

exports.createCourse = (req, res) => {
  //Receive Post Request Data from req body
  let reqBody = req.body;
  let title = reqBody.title;
  let courseCode = reqBody.courseCode;
  let description = reqBody.description;
  let imageLink = reqBody.imageLink;
  let categories = reqBody.categories;
  let createdDate = new Date(Date.now()).toISOString();
  let updatedDate = new Date(Date.now()).toISOString();
  let startingDate = reqBody.startingDate;
  let popularity = reqBody.popularity;
  let jamatName = reqBody.jamatName;
  let activeStatus = reqBody.activeStatus;

  let instructor = reqBody.instructor;
  let coursePrice = reqBody.coursePrice;
  let courseButton = reqBody.courseButton;
  let courseInfo = reqBody.courseInfo;
  let detailData = reqBody.detailData;
  let courseSyllabus = reqBody.courseSyllabus;
  let faq = reqBody.faq;
  let commentID = reqBody.commentID;
  let courseMaterial = reqBody.courseMaterial;
  let commonQuestion = reqBody.commonQuestion;
  let courseVideoID = reqBody.courseVideoID;

  //Make res body for posting to the Database

  let postBody = {
    imageLink: imageLink,
    title: title,
    courseCode: courseCode,
    description: description,
    categories: categories,
    createdDate: createdDate,
    updatedDate: updatedDate,
    startingDate: startingDate,
    popularity: popularity,
    jamatName: jamatName,
    activeStatus: activeStatus,

    instructor: instructor,
    coursePrice: coursePrice,
    courseButton: courseButton,
    courseInfo: courseInfo,
    detailData: detailData,
    courseSyllabus: courseSyllabus,
    faq: faq,
    commentID: commentID,
    courseMaterial: courseMaterial,
    commonQuestion: commonQuestion,
    courseVideoID: courseVideoID,
  };

  // Create Database record
  courseModel
    .create(postBody)
    .then((data) => {
      res.status(200).json({
        status: "Alhamdulillah",
        data: data,
      });
    })
    .catch((err) => {
      res.status(400).json({
        status: "Innalillah",
        data: err,
      });
    });
};

//Read or select Database Record
exports.selectCourses = (req, res) => {
  let query = req.body.query;
  let projection = req.body.projection;
  courseModel
    .find(query, projection)
    .then((data) => {
      res.status(200).json({
        status: "Alhamdulillah",
        data: data,
      });
    })
    .catch((err) => {
      res.status(400).json({
        status: "Innalillah",
        data: err,
      });
    });
};

//Update Database Record
exports.updateCourse = (req, res) => {
  let reqBody = req.body;
  let filter = reqBody["_id"];
  let postBody = {
    imageLink: reqBody.imageLink,
    title: reqBody.title,
    courseCode: reqBody.courseCode,
    description: reqBody.description,
    categories: reqBody.categories,
    updatedDate: new Date(Date.now()).toISOString(),
    startingDate: reqBody.startingDate,
    popularity: reqBody.popularity,
    jamatName: reqBody.jamatName,
    activeStatus: reqBody.activeStatus,

    instructor: reqBody.instructor,
    coursePrice: reqBody.coursePrice,
    courseButton: reqBody.courseButton,
    courseInfo: reqBody.courseInfo,
    detailData: reqBody.detailData,
    courseSyllabus: reqBody.courseSyllabus,
    faq: reqBody.faq,
    commentID: reqBody.commentID,
    courseMaterial: reqBody.courseMaterial,
    commonQuestion: reqBody.commonQuestion,
    courseVideoID: reqBody.courseVideoID,
  };

  courseModel
    .updateOne({ _id: filter }, { $set: postBody }, { upsert: true })
    .then((data) => {
      res.status(200).json({
        status: "Alhamdulillah",
        data: data,
      });
    })
    .catch((err) => {
      res.status(400).json({
        status: "Innalillah",
        data: err,
      });
    });
};

//Deleting from database
exports.deleteCourse = (req, res) => {
  let _id = req.params.id;

  courseModel
    .deleteOne({ _id: _id })
    .then((data) => {
      res.status(200).json({
        status: "Alhamdulillah",
        data: data,
      });
    })
    .catch((err) => {
      res.status(400).json({
        status: "Innalillah",
        data: err,
      });
    });
};
