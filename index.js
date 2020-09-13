var mysql = require("mysql");
var inquirer = require("inquirer");
var cTable = require("console.table");

var connection = mysql.createConnection({
  host: "localhost",

  // Your port;
  port: 3000,

  // Your username
  user: "root",

  // Your password
  password: "Thunder1",
  database: "employee_trackerDB"
});