var mysql = require("mysql");
var inquirer = require("inquirer");

var connection = mysql.createConnection({
  host: "localhost",

  // Your port;
  port: 3000,

  // Your username
  user: "root",

  // Your password
  password: "",
  database: ""
});