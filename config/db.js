const mongoose = require("mongoose");

const connectDB = async () => {
  await mongoose.connect(
    "mongodb+srv://pascal123:pascal123@cluster0.heosc.mongodb.net/?retryWrites=true&w=majority/myFirstDatabase"
  );

  console.log("mongodb connected");

  mongoose.connection.db.listCollections().toArray(function (err, names) {
    console.log(names);
  });
};

module.exports = connectDB;
