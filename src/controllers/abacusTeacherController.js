const abacusTeacherModel = require("../models/abacusTeacherModel");
const { hashedPasswordCustom } = require("../middlewares/passwordEncryption");

//creating madrasha Abacus records to database
exports.createAbacusTeacher = (req, res) => {
  let reqBody = req.body;
  const randomInteger = Math.floor(Math.random() * 100) + 1;

  //Receive Post Request Data from req body

  let teacherName = reqBody.teacherName;
  let teacherID = `${teacherName}${randomInteger}`;
  let teacherGender = reqBody.teacherGender;
  let workingInstitute = reqBody.workingInstitute;
  let teacherEmail = reqBody.teacherEmail;
  let teacherPhone = reqBody.teacherPhone;
  let teacherPass = req.headers["passKey"];
  let createdDate = new Date(Date.now()).toISOString();
  let updatedDate = new Date(Date.now()).toISOString();

  //Make res body for posting to the Database

  let postBody = {
    teacherName,
    teacherID,
    teacherGender,
    workingInstitute,
    teacherEmail,
    teacherPhone,
    teacherPass,
    createdDate,
    updatedDate,
  };

  // Create Database record
  abacusTeacherModel
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

// //Read or select Database Record
// exports.selectMadrashaAbacus = (req, res) => {
//   let query = req.headers["userName"];
//   let projection = req.body.projection;
//   madrashaAbacusModel
//     .find({ userName: query }, projection)
//     .then((data) => {
//       res.status(200).json({
//         status: "Alhamdulillah",
//         data: data,
//       });
//     })
//     .catch((err) => {
//       res.status(400).json({
//         status: "Innalillah",
//         data: err,
//       });
//     });
// };
exports.selectAbacusTeachers = (req, res) => {
  let query = req.body.query;
  let projection = req.body.projection;
  abacusTeacherModel
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
exports.updateAbacusTeacher = async (req, res) => {
  let reqBody = req.body;
  let filter = reqBody["_id"];
  let hashedPass = await hashedPasswordCustom(reqBody.madrashaAbacusPass);
  var postBody;
  if (hashedPass == null) {
    postBody = {
      teacherName: reqBody.teacherName,
      teacherID: reqBody.teacherID,
      teacherGender: reqBody.teacherGender,
      workingInstitute: reqBody.workingInstitute,
      teacherEmail: reqBody.teacherEmail,
      teacherPhone: reqBody.teacherPhone,
      updatedDate: new Date(Date.now()).toISOString(),
    };
  } else {
    postBody = {
      teacherName: reqBody.teacherName,
      teacherID: reqBody.teacherID,
      teacherGender: reqBody.teacherGender,
      workingInstitute: reqBody.workingInstitute,
      teacherEmail: reqBody.teacherEmail,
      teacherPhone: reqBody.teacherPhone,
      teacherPass: reqBody.teacherPass,
      updatedDate: new Date(Date.now()).toISOString(),
    };
  }

  abacusTeacherModel
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
exports.deleteAbacusTeacher = (req, res) => {
  let _id = req.params.id;

  abacusTeacherModel
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
