const Mongoose = require("mongoose");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

const MemberSchema = new Mongoose.Schema({
  username: {
    type: String,
    required: [true, "Bitte einen Benutzer eingeben"],
    unique: true,
  },
  password: {
    type: String,
    required: [true, "Bitte ein Passwort eingeben"],
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

// Encrypt password using bcrypt
MemberSchema.pre("save", async function (next) {
  if (!this.isModified("password")) {
    next(); 
  }

  const salt = await bcrypt.genSalt(10);
  this.password = await bcrypt.hash(this.password, salt);
});

MemberSchema.methods.matchPassword = async function (enteredPassword) {
  return await bcrypt.compare(enteredPassword, this.password);
};

// Sign JWT and return
MemberSchema.methods.getSignedJwtToken = function () {
  return jwt.sign({ id: this._id }, process.env.JWT_SECRET, {
    expiresIn: process.env.JWT_EXPIRE,
  });
};

module.exports = Mongoose.model("Member", MemberSchema);
