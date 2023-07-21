const express = require("express");
const router = express.Router();
const conntroller = require("../controllers/Sat");
// This is Ielts router
router.route("/").get(conntroller.Get);
router.route("/count").get(conntroller.Count);
module.exports = router;
