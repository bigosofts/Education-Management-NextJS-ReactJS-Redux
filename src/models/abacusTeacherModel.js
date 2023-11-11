const mongoose = require("mongoose");

const DataSchema = mongoose.Schema(
  {
    teacherID: { type: String, required: true, unique: true },
    teacherPass: { type: String, required: true, unique: true },
    teacherName: { type: String, required: true },
    teacherGender: { type: String, required: true },
    workingInstitute: { type: String, required: true },
    teacherEmail: { type: String, required: true },
    teacherPhone: {
      type: String,
      required: true,
    },
    createdDate: { type: Date, required: true },
    updatedDate: { type: Date, required: true },
  },
  { versionKey: false }
);

const abacusTeacherModel = mongoose.model("abacusTeachers", DataSchema);

module.exports = abacusTeacherModel;
