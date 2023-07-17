const express = require("express");
const router = express.Router();
const conntroller = require("../controllers/Hosting");
// This is Hosting router
router.route("/").get(conntroller.Get);

module.exports = router;
