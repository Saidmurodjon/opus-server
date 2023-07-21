const mongoose = require("mongoose");
// This is Cefr model
const Schema = new mongoose.Schema(
  {
    candidate: { type: String, require: true },
    photo: { type: String, require: true },
    overall: { type: String, required: false },
    level: { type: String, require: false },
    teacher: { type: String, require: false },
    date: { type: Date, require: false },
    isPublished: { type: Boolean, default: false },
  },
  {
    timestamps: true,
  }
);
module.exports = mongoose.model("Cefr", Schema);
