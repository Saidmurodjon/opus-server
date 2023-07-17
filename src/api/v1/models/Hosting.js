const mongoose = require("mongoose");
// This is User model
const Schema = new mongoose.Schema(
  {
    title: { type: String, require: true },
    price: { type: Number, require: true },
    capacity: { type: Number, require: true },
    domain: { type: Number, require: true },
    subdomain: { type: Number, require: true },
    db: { type: Number, require: true },
    domainUz: { type: Boolean, require: true, default: false },
    pochta: { type: Number, require: true },
    trafik: { type: Number, require: true },
    backUp: { type: Boolean, require: true, default: false },
    ftp: { type: Boolean, require: true, default: false },
    dns: { type: Boolean, require: false, default: false },
    access_log: { type: Boolean, required: true, default: false },
    isPublished: { type: Boolean, default: false },
  },
  {
    timestamps: true,
  }
);
module.exports = mongoose.model("Hosting", Schema);
