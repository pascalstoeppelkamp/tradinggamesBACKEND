const express = require("express");
var router = express.Router();
const { Login } = require("./../controller/Auth");

router.route("/login").post(Login);
module.exports = router;
