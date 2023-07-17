const Model = require("../models/Ielts");
// This is Ielts controller
module.exports = {
  Get: async function (req, res) {
    try {
      console.log(req.query);
      const report = await Model.find({ isPublished: true })
        .skip((req.query.page - 1) * req.query.limit)
        .limit(req.query.limit * 1);

      const count = await Model.find({ isPublished: true }).count();
      console.log(count);
      if (report.length > 0) {
        return res.status(200).json(report);
      } else {
        return res.status(404).send("ma'lumot yakunlandi!");
      }
    } catch (err) {
      res.status(400).send(err);
    }
  },
  Count: async function (req, res) {
    try {
      const count = await Model.find({ isPublished: true }).count();
      console.log(count);
      return res.status(200).json(count);
    } catch (err) {
      res.status(400).send(err);
    }
  },
};
