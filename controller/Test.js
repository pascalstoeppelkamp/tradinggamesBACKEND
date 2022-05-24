const Member = require("./../models/Member");
exports.Test = async (req, res, next) => {
  const data = await Member.create(req.body);

  res.status(200).json({
    data: data,
    success: true,
  });
};
