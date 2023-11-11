const abacusStudentModel = require("../models/abacusStudentModel");
const { hashedPasswordCustom } = require("../middlewares/passwordEncryption");

//creating madrasha Abacus records to database
exports.createAbacusStudent = (req, res) => {
  let reqBody = req.body;
  const randomInteger = Math.floor(Math.random() * 100) + 1;

  //Receive Post Request Data from req body

  let studentName = reqBody.studentName;
  let studentID = `${studentName}${randomInteger}`;
  let studentGender = reqBody.studentGender;
  let studentParentsName = reqBody.studentParentsName;
  let schoolOrMadrashaName = reqBody.schoolOrMadrashaName;
  let studentEmail = reqBody.studentEmail;
  let studentPhone = reqBody.studentPhone;
  let studentPass = req.headers["passKey"];
  let createdDate = new Date(Date.now()).toISOString();
  let updatedDate = new Date(Date.now()).toISOString();

  //Make res body for posting to the Database

  let postBody = {
    studentName,
    studentID,
    studentGender,
    studentParentsName,
    schoolOrMadrashaName,
    studentEmail,
    studentPhone,
    studentPass,
    createdDate,
    updatedDate,
  };

  // Create Database record
  abacusStudentModel
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
exports.selectAbacusStudents = (req, res) => {
  let query = req.body.query;
  let projection = req.body.projection;
  abacusStudentModel
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
exports.updateAbacusStudent = async (req, res) => {
  let reqBody = req.body;
  let filter = reqBody["_id"];
  let hashedPass = await hashedPasswordCustom(reqBody.studentPass);
  var postBody;
  if (hashedPass == null) {
    postBody = {
      studentName: reqBody.studentName,
      studentID: reqBody.studentID,
      studentGender: reqBody.studentGender,
      studentParentsName: reqBody.studentParentsName,
      schoolOrMadrashaName: reqBody.schoolOrMadrashaName,
      studentEmail: reqBody.studentEmail,
      studentPhone: reqBody.studentPhone,
      updatedDate: new Date(Date.now()).toISOString(),
    };
  } else {
    postBody = {
      studentName: reqBody.studentName,
      studentID: reqBody.studentID,
      studentPass: hashedPass,
      studentGender: reqBody.studentGender,
      studentParentsName: reqBody.studentParentsName,
      schoolOrMadrashaName: reqBody.schoolOrMadrashaName,
      studentEmail: reqBody.studentEmail,
      studentPhone: reqBody.studentPhone,
      updatedDate: new Date(Date.now()).toISOString(),
    };
  }

  abacusStudentModel
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
exports.deleteAbacusStudent = (req, res) => {
  let _id = req.params.id;

  abacusStudentModel
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
