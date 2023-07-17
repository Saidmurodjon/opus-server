const express = require("express");
const router = express.Router();
const conntroller = require("../controllers/NewHostingCreator");
// This is NewHostingCreator router
router.route("/").get(conntroller.Get);
module.exports = router;
