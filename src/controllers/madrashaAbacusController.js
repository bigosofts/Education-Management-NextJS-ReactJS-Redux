const madrashaAbacusModel = require("../models/madrashaAbacusModel");
const { hashedPasswordCustom } = require("../middlewares/passwordEncryption");

//creating madrasha Abacus records to database
exports.createMadrashaAbacus = (req, res) => {
  let reqBody = req.body;
  const randomInteger = Math.floor(Math.random() * 100) + 1;

  //Receive Post Request Data from req body

  let madrashaName = reqBody.madrashaName;
  let madrashaAbacusID = `${madrashaName}${randomInteger}`;
  let directorName = reqBody.directorName;
  let directorPhone = reqBody.directorPhone;
  let responsiblePerson = reqBody.responsiblePerson;
  let responsiblePersonMobile = reqBody.responsiblePersonMobile;
  let madrashaAddress = reqBody.madrashaAddress;
  let madrashaEmail = reqBody.madrashaEmail;
  let madrashaAbacusPass = req.headers["passKey"];
  let createdDate = new Date(Date.now()).toISOString();
  let updatedDate = new Date(Date.now()).toISOString();

  //Make res body for posting to the Database

  let postBody = {
    madrashaName,
    madrashaAbacusID,
    madrashaAbacusPass,
    directorName,
    directorPhone,
    responsiblePerson,
    responsiblePersonMobile,
    madrashaAddress,
    madrashaEmail,
    createdDate,
    updatedDate,
  };

  // Create Database record
  madrashaAbacusModel
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
exports.selectMadrashaAbacus = (req, res) => {
  let query = req.body.query;
  let projection = req.body.projection;
  madrashaAbacusModel
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
exports.updateMadrashaAbacus = async (req, res) => {
  let reqBody = req.body;
  let filter = reqBody["_id"];
  let hashedPass = await hashedPasswordCustom(reqBody.madrashaAbacusPass);
  var postBody;
  if (hashedPass == null) {
    postBody = { 
      madrashaAbacusID: reqBody.madrashaAbacusID,
      directorName: reqBody.directorName,
      directorPhone: reqBody.directorPhone,
      responsiblePerson: reqBody.responsiblePerson,
      responsiblePersonMobile: reqBody.responsiblePersonMobile,
      madrashaAddress: reqBody.madrashaAddress,
      madrashaEmail: reqBody.madrashaEmail,
      updatedDate: new Date(Date.now()).toISOString(),
    };
  } else {
    postBody = {
      madrashaAbacusID : reqBody.madrashaAbacusID,
      madrashaAbacusPass: hashedPass,
      directorName: reqBody.directorName,
      directorPhone: reqBody.directorPhone,
      responsiblePerson: reqBody.responsiblePerson,
      responsiblePersonMobile: reqBody.responsiblePersonMobile,
      madrashaAddress: reqBody.madrashaAddress,
      madrashaEmail: reqBody.madrashaEmail,
      updatedDate: new Date(Date.now()).toISOString(),
    };
  }

  madrashaAbacusModel
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
exports.deleteMadrashaAbacus = (req, res) => {
  let _id = req.params.id;

  madrashaAbacusModel
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
