const mongoose = require("mongoose");
// This is User model
const Schema = new mongoose.Schema(
  {
    title: { type: String, require: true },
    status: { type: String, require: true },
    capacity: { type: Number, default: 0 },
    box: { type: Number, require: true },
    price: { type: Number, require: true },
    isPublished: { type: Boolean, default: false },
  },
  {
    timestamps: true,
  }
);
module.exports = mongoose.model("Pochta", Schema);
