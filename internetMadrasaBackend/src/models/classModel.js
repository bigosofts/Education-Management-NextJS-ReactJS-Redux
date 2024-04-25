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
          completionProgress: {
            mark: { type: Number },
            answer1: { type: Boolean },
            answer2: { type: Boolean },
            answer3: { type: Boolean },
          },
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
            completionProgress: {
              question1: { type: String },
              multipleChoice1: {
                choice1: { type: String },
                choice2: { type: String },
                choice3: { type: String },
                choice4: { type: String },
                answer: { type: String },
              },
              question2: { type: String },
              multipleChoice2: {
                choice1: { type: String },
                choice2: { type: String },
                choice3: { type: String },
                choice4: { type: String },
                answer: { type: String },
              },
              question3: { type: String },
              multipleChoice3: {
                choice1: { type: String },
                choice2: { type: String },
                choice3: { type: String },
                choice4: { type: String },
                answer: { type: String },
              },
            },
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
