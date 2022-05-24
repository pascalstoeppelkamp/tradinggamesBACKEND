const Mongoose = require("mongoose");
const bcrypt = require("bcryptjs");

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

module.exports = Mongoose.model("Member", MemberSchema);
