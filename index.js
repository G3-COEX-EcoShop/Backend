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
app.use(cors());

app.use(passport.initialize());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, "public")));

app.use("/api", router);

app.set("port", process.env.PORT || 4000);

require("dotenv").config();
const config = {
  username: process.env.MYSQLUSER,
  password: process.env.MYSQLPASSWORD,
  database: process.env.MYSQLDATABASE,
  host: process.env.MYSQLHOST,
  port: process.env.MYSQLPORT,
  dialect: "mysql",
};

if (process.env.NODE_ENV !== "test") {
  app.listen(app.get("port"), () => {
    console.log("Server on port " + app.get("port") + " on dev");
  });
}

module.exports = app;
