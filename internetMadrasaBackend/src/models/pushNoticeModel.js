const mongoose = require("mongoose");

const DataSchema = mongoose.Schema(
  {
    subject: {
      en: { type: String },
      bn: { type: String },
    },
    text: {
      en: { type: String },
      bn: { type: String },
    },
    reciever: { type: Date },
    sender: { type: Date },
    link: { type: String },
    readStatus: { type: Boolean },
    createdDate: { type: Date },
    activeStatus: {
      type: String,
      required: true,
    },
  },
  { versionKey: false }
);

const pushNoticeModel = mongoose.model("pushNotices", DataSchema);

module.exports = pushNoticeModel;
