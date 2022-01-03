const express = require("express");
const bodyParser = require("body-parser");
const app = express();
var dbconnection = require("./db");
var blogsRoute = require("./routes/blogsRoute");
var userRoute = require("./routes/userRoute");

app.use(bodyParser.json());
const path = require("path");
app.use("/api/blogs/", blogsRoute);
app.use("/api/users/", userRoute);

app.get("/", (req, res) => {
  res.send("Server working 🔥");
});

const port = process.env.PORT || 8000;

app.listen(port, () => console.log(`Node JS Server Started`));
