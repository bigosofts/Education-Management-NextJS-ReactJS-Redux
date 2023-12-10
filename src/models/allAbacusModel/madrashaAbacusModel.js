const mongoose = require("mongoose");

const DataSchema = mongoose.Schema(
  {
    madrashaAbacusID: { type: String, required: true, unique: true },
    madrashaAbacusPass: { type: String, required: true, unique: true },
    madrashaName: { type: String, required: true },
    directorName: { type: String, required: true },
    directorPhone: { type: String, required: true },
    responsiblePerson: {
      type: String,
      required: true,
    },
    responsiblePersonMobile: {
      type: String,
      required: true,
    },
    madrashaAddress: {
      type: String,
      required: true,
    },
    madrashaEmail: { type: String, required: true, unique:true },
    createdDate: { type: Date, required: true },
    updatedDate: { type: Date, required: true },
  },
  { versionKey: false }
);

const madrashaAbacusModel = mongoose.model("madrashaAbacus", DataSchema);

module.exports = madrashaAbacusModel;
