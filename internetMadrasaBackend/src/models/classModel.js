const mongoose = require("mongoose");

const DataSchema = mongoose.Schema(
  {
    classID: { type: String, unique: true, required: true },
    courseID: { type: String },
    departmentID: { type: String },
    jamatID: { type: String },
    semesterID: { type: String },
    bookID: { type: String },
    teacher: {
      TID: { type: String },
      tName: { type: String },
      mobileNumber: { type: String },
      attendance: [
        {
          month: { type: String },
          dayName: { type: String },
          dayNumber: { type: String },
          presentTimeStart: { type: Date },
          presentTimeEnd: { type: Date },
          isPresent: { type: Boolean },
          completionProgress: { type: String },
        },
      ],
    },
    examQuestion: { type: String },
    students: [
      {
        SID: { type: String },
        sName: { type: String },
        mobileNumber: { type: String },
        attendance: [
          {
            month: { type: String },
            dayName: { type: String },
            dayNumber: { type: String },
            presentTime: { type: Date },
            isPresent: { type: Boolean },
            completionProgress: { type: String },
          },
        ],
      },
    ],
    classStartTime: { type: String },
    classEndTime: { type: String },
    createdDate: { type: Date },
    updatedDate: { type: Date },
    activeStatus: { type: String },
  },
  { versionKey: false }
);

const classModel = mongoose.model("classes", DataSchema);

module.exports = classModel;
