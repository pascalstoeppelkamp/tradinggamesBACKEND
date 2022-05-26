const asyncHandler = require("../middleware/async");
const ErrorResponse = require("../utils/errorResponse");
const Member = require("../models/Member");

exports.Login = asyncHandler(async (req, res, next) => {
  const { username, password } = req.body;

  // Validate emil & password
  if (!username || !password) {
    return next(
      new ErrorResponse("Please provide an username and password", 400)
    );
  }

  // Check for member
  const member = await Member.findOne({ username: username }).select(
    "+password"
  );
  if (!member) {
    return next(new ErrorResponse("Invalid credentials", 401));
  }

  // Check if password matches
  const isMatch = await member.matchPassword(password);

  if (!isMatch) {
    return next(new ErrorResponse("Invalid credentials", 401));
  }

  sendTokenResponse(member, 200, res);
});

const sendTokenResponse = (member, status, res) => {
  console.log(member);
  const token = member.getSignedJwtToken();

  const options = {
    expires: new Date(
      Date.now() + process.env.JWT_COOKIE_EXPIRE * 24 * 60 * 60 * 1000
    ),
    httpOnly: true,
  };

  res
    .status(status)
    .cookie("token", token, options)
    .json({ success: true, token });
};
