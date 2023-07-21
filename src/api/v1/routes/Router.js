const express = require("express");
const router = express.Router();
// const path=require('path')

const users = require("./User");

const login = require("../auth/Router");
const orders = require("./Order");
const workers = require("./Workers");
const cefr = require("./Cefr");
const ielts = require("./Ielts");
const sat = require("./Sat");
const contact = require("./Contact");
const auth = require("./Auth");
const Authentication = require("../middlewares/Authentication");
// router
router.get("/", (req, res) => {
  return res.send("Backend is working ...");
});
router.use("/login", login);
router.use("/users", users);
router.use("/orders", orders);
router.use("/workers", workers);
router.use("/cefr", cefr);
router.use("/ielts", ielts);
router.use("/sat", sat);
router.use("/contacts", contact);
router.use(Authentication);

router.use("/auth", auth);
module.exports = router;
