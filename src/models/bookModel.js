const mongoose = require("mongoose");

const DataSchema = mongoose.Schema(
  {
    bookID: { type: String, required: true, unique: true },
    bookName: { type: String, required: true },
    bookPublicationName: { type: String },
    bookPage: [],
    bookCreatedDate: { type: Date },
    bookUpdatedDate: { type: Date },
    activeStatus: {
      type: String,
      default: "active",
    },
  },
  { versionKey: false }
);

const BookModel = mongoose.model("books", DataSchema);

module.exports = BookModel;
