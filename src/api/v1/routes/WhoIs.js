const express = require("express");
const router = express.Router();
const whois = require("../controllers/WhoIs");

// post
router.route("/").get(whois.WhoIs);

module.exports = router;
