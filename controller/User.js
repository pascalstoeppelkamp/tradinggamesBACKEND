const Member = require("../models/Member");
const asyncHandler = require("../middleware/async");
const ErrorResponse = require("../utils/errorResponse");

exports.CreateUser = asyncHandler(async (req, res, next) => {
  const data = await Member.create(req.body);

  if (!data) {
    return next(
      new ErrorResponse("Please provide an username and password", 400)
    );
  }
  res.status(200).json({
    data: data,
    success: true,
  });
});

exports.deleteUser = asyncHandler(async (req, res, next) => {
  const data = await Member.findById(req.params.id);
  if (!data) {
    return next(new ErrorResponse(`No Entry with id: ${req.params.id}`));
  }
  await Member.findByIdAndDelete(req.params.id);

  res.status(200).json({
    data: {},
    success: true,
  });
});

exports.getUser = asyncHandler(async (req, res, next) => {
  const data = await Member.findById(req.params.id);

  if (!data) {
    return next(new ErrorResponse("No Member with id: " + req.params.id));
  }

  res.status(200).json({
    data: data,
    success: true,
  });
});

exports.getMe = asyncHandler(async (req, res, next) => {
  const user = await Member.findById(req.member.id);

  res.status(200).json({
    success: true,
    data: user,
  });
});
