const express = require("express");
const bodyParser = require("body-parser");

const feedRoutes = require("./routes/feed");

const { use } = require("./routes/feed");
const mongoose = require("mongoose");

const app = express();

// app.use(bodyParser.userencoded());
app.use(bodyParser.json()); //application/json

app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader(
    "Access-Control-Allow-Methods",
    "GET, POST, PUT, PATCH, DELETE"
  );
  res.setHeader("Access-Control-Allow-Headers", "Content-Type, Authorization");
  next();
});

app.use("/feed", feedRoutes);

mongoose
  .connect(
    "mongodb+srv://matthias:password@node-complete.cqski.mongodb.net/myFirstDatabase?retryWrites=true&w=majority"
  )
  .then((result) => {
    app.listen(8080);
  })
  .catch((err) => {
    console.log(err);
  });
