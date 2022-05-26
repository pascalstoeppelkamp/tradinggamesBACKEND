const express = require("express");
var router = express.Router();
const { CreateUser, deleteUser } = require("../controller/User");

const { protect } = require("./../middleware/protect");

router.route("/create").post(CreateUser);
router.route("/:id").delete(protect, deleteUser);
module.exports = router;
