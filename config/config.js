const fs = require("fs");
require("dotenv").config();
module.exports = {
  development: {
    username: process.env.MYSQLUSER,
    password: process.env.MYSQLPASSWORD,
    database: process.env.MYSQLDATABASE,
    host: process.env.MYSQLHOST,
    port: process.env.MYSQLPORT,
    dialect: "mysql",
  },
  test: {
    username: process.env.MYSQLUSER,
    password: process.env.MYSQLPASSWORD,
    database: process.env.MYSQLDATABASE,
    host: process.env.MYSQLHOST,
    port: process.env.MYSQLPORT,
    dialect: "mysql",
  },
  production: {
    username: process.env.MYSQLUSER_PDU,
    password: process.env.MYSQLPASSWORD_PDU,
    database: process.env.MYSQLDATABASE_PDU,
    host: process.env.MYSQLHOST_PDU,
    port: process.env.MYSQLPORT_PDU,
    dialect: "mysql",
  },
};
