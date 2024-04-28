const abacusInstitutionModel = require("../models/abacusInstitutionModel");
const { hashedPasswordCustom } = require("../middlewares/passwordEncryption");

exports.createAbacusInstitution = (req, res) => {
  //Receive Post Request Data from req body
  let reqBody = req.body;
  function prefix(name) {
    const currentDate = new Date();
    const currentYear = currentDate.getFullYear();
    const currentMonthIndex = currentDate.getMonth() + 1;

    const prefix =
      "IMI" +
      currentYear +
      String(currentMonthIndex).padStart(2, "0") +
      String(name).padStart(4, "0");
    return prefix;
  }

  let autoGeneratedname = prefix(reqBody.institutionID);

  let institutionID = autoGeneratedname;
  let institutionName = reqBody.institutionName;

  let principalName = reqBody.principalName;

  let studentsNumber = reqBody.studentsNumber;

  let directorPhone = reqBody.directorPhone;

  let representativeName = reqBody.representativeName;

  let representativePhone = reqBody.representativePhone;

  let institutionalEmail = reqBody.institutionalEmail;

  let registrationFeeAmount = reqBody.registrationFeeAmount;

  let registrationPaymentWay = reqBody.registrationPaymentWay;

  let paymentTransactionID = reqBody.paymentTransactionID;

  let paymentNumber = reqBody.paymentNumber;

  let abacusBookOrderlimit = reqBody.abacusBookOrderlimit;

  let abacusKitOrderlimit = reqBody.abacusKitOrderlimit;

  let password = req.headers["passKey"];

  let abacusCreatedDate = new Date(Date.now()).toISOString();

  let abacusUpdatedDate = new Date(Date.now()).toISOString();

  let activeStatus = reqBody.activeStatus;

  //Make res body for posting to the Database

  let postBody = {
    institutionID,
    institutionName,
    principalName,
    studentsNumber,
    directorPhone,
    representativeName,
    representativePhone,
    institutionalEmail,
    registrationFeeAmount,
    registrationPaymentWay,
    paymentTransactionID,
    paymentNumber,
    abacusBookOrderlimit,
    abacusKitOrderlimit,
    password,
    abacusCreatedDate,
    abacusUpdatedDate,
    activeStatus,
  };

  // Create Database record
  abacusInstitutionModel
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

// find from the database record
exports.selectAbacusInstitutions = (req, res) => {
  let query = req.body.query;
  let projection = req.body.projection;
  abacusInstitutionModel
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
exports.updateAbacusInstitution = (req, res) => {
  let reqBody = req.body;
  let filter = reqBody["_id"];

  let institutionID = reqBody.institutionID;
  let institutionName = reqBody.institutionName;

  let principalName = reqBody.principalName;

  let studentsNumber = reqBody.studentsNumber;

  let directorPhone = reqBody.directorPhone;

  let representativeName = reqBody.representativeName;

  let representativePhone = reqBody.representativePhone;

  let institutionalEmail = reqBody.institutionalEmail;

  let registrationFeeAmount = reqBody.registrationFeeAmount;

  let registrationPaymentWay = reqBody.registrationPaymentWay;

  let paymentTransactionID = reqBody.paymentTransactionID;

  let paymentNumber = reqBody.paymentNumber;

  let abacusBookOrderlimit = reqBody.abacusBookOrderlimit;

  let abacusKitOrderlimit = reqBody.abacusKitOrderlimit;

  let password = reqBody.password;

  let abacusUpdatedDate = new Date(Date.now()).toISOString();

  let activeStatus = reqBody.activeStatus;

  let postBody = {
    institutionID,
    institutionName,
    principalName,
    studentsNumber,
    directorPhone,
    representativeName,
    representativePhone,
    institutionalEmail,
    registrationFeeAmount,
    registrationPaymentWay,
    paymentTransactionID,
    paymentNumber,
    abacusBookOrderlimit,
    abacusKitOrderlimit,
    password,
    abacusUpdatedDate,
    activeStatus,
  };

  abacusInstitutionModel
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
exports.deleteAbacusInstitution = (req, res) => {
  let _id = req.params.id;

  abacusInstitutionModel
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