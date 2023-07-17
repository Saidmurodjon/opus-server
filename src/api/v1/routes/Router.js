const express = require("express");
const router = express.Router();
// const path=require('path')

const users = require("./User");

const login = require("../auth/Router");
const whois = require("./WhoIs");
const pochta = require("./Pochta");
const hosting = require("./Hosting");
const orders = require("./Order");
const workers = require("./Workers");
const ielts = require("./Ielts");
const hostingcreators = require("./NewHostingCreator");
const contact = require("./Contact");
const auth = require("./Auth");
const Authentication = require("../middlewares/Authentication");
// router
router.get("/", (req, res) => {
  return res.send("Backend is working ...");
});
router.use("/login", login);
router.use("/users", users);
router.use("/whois", whois);
router.use("/pochtas", pochta);
router.use("/hostings", hosting);
router.use("/orders", orders);
router.use("/workers", workers);
router.use("/ielts", ielts);
router.use("/hostingcreators", hostingcreators);
router.use("/contacts", contact);
router.use(Authentication);

router.use("/auth",auth);
module.exports = router;
