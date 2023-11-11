const mongoose = require("mongoose");

const DataSchema = mongoose.Schema(
  {
    studentID: { type: String, required: true, unique: true },
    studentPass: { type: String, required: true, unique: true },
    studentName: { type: String, required: true },
    studentGender: { type: String, required: true },
    studentParentsName: { type: String, required: true },
    schoolOrMadrashaName: { type: String, required: true },
    studentEmail: { type: String, required: true },
    studentPhone: {
      type: String,
      required: true,
    },
    createdDate: { type: Date, required: true },
    updatedDate: { type: Date, required: true },
  },
  { versionKey: false }
);

const abacusStudentModel = mongoose.model("abacusStudents", DataSchema);

module.exports = abacusStudentModel;
