const mongoose = require("mongoose");

const DataSchema = mongoose.Schema(
  {
    courseCode: { type: String, required: true, unique: true },
    imageLink: {
      type: String,
      required: true,
    },
    title: {
      en: {
        type: String,
        required: true,
      },
      bn: {
        type: String,
        required: true,
      },
    },
    description: {
      en: {
        type: String,
        required: true,
      },
      bn: {
        type: String,
        required: true,
      },
    },
    categories: {
      en: {
        type: String,
        required: true,
      },
      bn: {
        type: String,
        required: true,
      },
    },
    createdDate: { type: Date },
    updatedDate: { type: Date },
    startingDate: {
      en: {
        type: Date,
        required: true,
      },
      bn: {
        type: String,
        required: true,
      },
    },
    popularity: {
      en: {
        type: String,
        required: true,
      },
      bn: {
        type: String,
        required: true,
      },
    },
    jamatName: {
      type: String,
      required: true,
    },
    activeStatus: {
      type: String,
      required: true,
    },
    instructor: [
      {
        name: { type: String },
        experience: { type: String },
      },
    ],
    coursePrice: {
      tk: { type: Number },
      us: { type: Number },
    },
    courseButton: {
      text: {
        en: { type: String },
        bn: { type: String },
      },
      link: {
        type: String,
      },
    },
    courseInfo: [
      {
        icon: { type: String },
        title: {
          en: { type: String },
          bn: { type: String },
        },
      },
    ],
    detailData: {
      type: String,
    },
    courseSyllabus: [
      {
        icon: { type: String },
        text: {
          en: { type: String },
          bn: { type: String },
        },
      },
    ],
    faq: [
      {
        question: {
          en: { type: String },
          bn: { type: String },
        },
        answer: {
          en: { type: String },
          bn: { type: String },
        },
      },
    ],
    commentID: [],
    courseMaterial: [
      {
        en: { type: String },
        bn: { type: String },
      },
    ],
    commonQuestion: [
      {
        question: {
          en: { type: String },
          bn: { type: String },
        },
        answer: {
          en: { type: String },
          bn: { type: String },
        },
      },
    ],
    courseVideoID: [],
  },
  { versionKey: false }
);

const courseModel = mongoose.model("courses", DataSchema);

module.exports = courseModel;
