const mongoose = require("mongoose");

const DataSchema = mongoose.Schema(
  {
    userName: { type: String, required: true, unique: true },
    details: { type: Object, required: true },
    userRole: { type: String, required: true },
    firstName: {
      en: { type: String },
      bn: { type: String },
    },
    lastName: {
      en: { type: String },
      bn: { type: String },
    },
    nidNumber: { type: Number },
    birthRegNumber: { type: Number },
    fatherName: {
      en: { type: String },
      bn: { type: String },
    },
    emailAddress: { type: String, required: true, unique: true },
    password: { type: String },
    mobileNumber: { type: String, required: true },
    occupation: { type: String },
    extracurricular: { type: String },
    studentCourseCode: [],
    studentJamatCode: [],
    gender: { type: String },
    dateOfBirth: { type: Date },
    countryName: { type: String },
    fullPresentAddress: { type: String },
    fullPermanentAddress: { type: String },
    admissionDate: { type: Date },
    admissionSession: { type: String },
    studentMotive: { type: String },
    paymentStatus: { type: Object },
    activeStatus: {
      type: String,
      required: true,
    },
    isAdmin: { type: Boolean, default: false },
  },
  { versionKey: false }
);

const studentProfileModel = mongoose.model("students", DataSchema);

module.exports = studentProfileModel;
