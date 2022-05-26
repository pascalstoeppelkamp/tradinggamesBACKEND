const express = require("express");
var router = express.Router();
const { CreateUser, deleteUser } = require("../controller/User");
router.route("/create").post(CreateUser);
router.route("/:id").delete(deleteUser);
module.exports = router;
