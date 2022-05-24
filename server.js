const express = require("express");
const app = express();
const port = 3000;
const connectDB = require("./config/db");
const colors = require('colors');

connectDB();
// Body parser
app.use(express.json());

const Test = require("./routes/Test");

app.use("/", Test);

const server = app.listen(
  port,
  console.log(
    `Server running in ${process.env.NODE_ENV} mode on port ${port}`.yellow.bold
  )
);

// Handle unhandled promise rejections
process.on('unhandledRejection', (err, promise) => {
  console.log(`Error: ${err.message}`.red);
  // Close server & exit process
  // server.close(() => process.exit(1));
});