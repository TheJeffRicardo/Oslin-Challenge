const mysql = require("mysql");
require("dotenv").config()

const connection = mysql.createConnection({
  HOST: process.env.HOST,
  USER: process.env.USER,
  PASSWORD: process.env.PASSWORD,
  DATABASE: process.env.DATABASE
})

module.exports = connection;