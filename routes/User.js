const express = require("express");
var router = express.Router();
const {
  CreateUser,
  deleteUser,
  getUser,
  getMe,
} = require("../controller/User");

const { protect } = require("./../middleware/protect");

router.route("/create").post(CreateUser);
router.route("/me").post(protect, getMe);
router.route("/:id").delete(protect, deleteUser).get(protect, getUser);
module.exports = router;
