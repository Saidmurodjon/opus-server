const Model = require("../models/Workers");
// This is workers controller
module.exports = {
  Get: async function (req, res) {
    try {
      const value = await Model.find({ isPublished: true });
      return res.status(200).send(value);
    } catch (err) {
      res.status(500).send(err);
    }
  },
};
