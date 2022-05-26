const express = require("express");
const app = express();
const port = 3000;
const connectDB = require("./config/db");
const colors = require("colors");
const errorHandler = require("./middleware/error");
const dotenv = require('dotenv');
// Load env vars
dotenv.config({ path: './config/config.env' });

connectDB();
// Body parser
app.use(express.json());
const Auth = require("./routes/Auth");
const User = require("./routes/User");

app.use("/User", User);
app.use("/Auth", Auth);

app.use(errorHandler);

app.listen(port, console.log(`Server running on port ${port}`.yellow.bold));

// Handle unhandled promise rejections
process.on("unhandledRejection", (err, promise) => {
  console.log(`Error: ${err.message}`.red);
});
