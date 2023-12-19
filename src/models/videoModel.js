const mongoose = require("mongoose");

const DataSchema = mongoose.Schema(
  {
    VideoGroupID: { type: String, required: true, unique: true },
    videos: [
      {
        title: {
          en: { type: String },
          bn: { type: String },
        },
        link: { type: String },
      },
    ],
    courseID: { type: String },
    createdDate: { type: Date },
    updatedDate: { type: Date },
    activeStatus: { type: String, required: true, default: "active" },
  },
  { versionKey: false }
);

const videoModel = mongoose.model("videos", DataSchema);

module.exports = videoModel;
