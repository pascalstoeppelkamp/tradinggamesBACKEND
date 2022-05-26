const express = require("express");
var router = express.Router();
const { Login, Logout } = require("./../controller/Auth");

router.route("/login").post(Login);
router.route("/logout").post(Logout);
module.exports = router;
