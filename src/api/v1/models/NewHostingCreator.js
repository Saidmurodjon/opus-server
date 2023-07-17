const mongoose = require("mongoose");
// This is NewHostingCreator model
const Schema = new mongoose.Schema(
  {
    capacity: [
      {
        value: { type: String, required: true },
        cost: { type: Number, required: true },
      },
    ],
    domain: [
      {
        value: { type: String, required: true },
        cost: { type: Number, required: true },
      },
    ],
    subDomain: [
      {
        value: { type: String, required: true },
        cost: { type: Number, required: true },
      },
    ],
    db: [
      {
        value: { type: String, required: true },
        cost: { type: Number, required: true },
      },
    ],
    domainUz: { type: Number, required: true },
    pochta: { type: Number, required: true },
    trafik: { type: Number, required: true },
    backUp: { type: Number, required: true },
    ftp: { type: Number, required: true },
    dns: { type: Number, required: true },
    access_log: { type: Number, required: true },
    isPublished: { type: Boolean, default: false },
  },
  {
    timestamps: true,
  }
);
module.exports = mongoose.model("NewHostingCreator", Schema);
