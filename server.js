const express = require("express");
const app = express();
const port = 3000;
const connectDB = require("./config/db");

connectDB();
// Body parser
app.use(express.json());

const Test = require("./routes/Test");

app.use("/", Test);

app.listen(port, () => {
  console.log("Server started on port " + port);
});
