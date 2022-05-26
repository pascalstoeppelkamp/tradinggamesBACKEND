const mongoose = require("mongoose");

const connectDB = async () => {
  await mongoose.connect(
    "mongodb+srv://pascal123:pascal123@cluster0.heosc.mongodb.net/TradingGames?retryWrites=true&w=majority"
  );

  console.log("mongodb connected".green.bold);
};

module.exports = connectDB;
