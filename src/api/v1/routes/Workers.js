const express = require("express");
const router = express.Router();
const conntroller = require("../controllers/Workers");
// This is Workers router
router.route("/").get(conntroller.Get);

module.exports = router;
