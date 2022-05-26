const asyncHandler = require("../middleware/async");
const ErrorResponse = require("../utils/errorResponse");
const Member = require("../models/Member");

exports.Login = asyncHandler(async (req, res, next) => {
  const { username, password } = req.body;

  if (!username || !password) {
    return next(new ErrorResponse("Please provide a username and password."));
  }

  const member = Member.findOne({ username }).select("+password");

  if (!member) {
    return next(new ErrorResponse("Invalid credentials", 401));
  }

  //check if password matches
  const isMatch = await Member.matchPassword(password);

  console.log(isMatch);
});
