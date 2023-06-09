require("dotenv").config();
const express = require("express");
const morgan = require("morgan");
const cors = require("cors");
const router = require("./routers");
const path = require("path");
const passport = require("passport");
const bodyParser = require("body-parser");
require("./middlewares/authExternal");

const app = express();
app.use(morgan("dev"));

app.use(
  cors({
    origin: [process.env.URL_FRONTEND, "http://localhost:3000"],
    credentials: true,
  })
);

app.use(passport.initialize());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, "public")));

app.use("/api", router);

app.set("port", process.env.PORT || 4000);

if (process.env.NODE_ENV !== "test") {
  app.listen(app.get("port"), () => {
    console.log("Server on port " + app.get("port") + " on dev");
  });
}

module.exports = app;
