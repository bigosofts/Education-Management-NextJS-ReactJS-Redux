const mongoose = require("mongoose");

const DataSchema = mongoose.Schema(
  {
    studentRole: { type: String, required: true, unique: true },
    departments: [],
    studentRoleCreatedDate: { type: Date },
    studentRoleUpdatedDate: { type: Date },
    activeStatus: {
      type: String,
      default: "active",
    },
  },
  { versionKey: false }
);

const StudentRoleModel = mongoose.model("studentRoleModels", DataSchema);

module.exports = StudentRoleModel;
