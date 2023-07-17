const Model = require("../models/Hosting");
// This is medicine controller
module.exports = {
  Get: async function (req, res) {
    try {
      const value = await Model.find();
      return res.status(200).send(value);
    } catch (err) {
      res.status(400).send(err);
    }
  },
};
