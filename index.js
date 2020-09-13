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

connection.connect(function(err) {
  if (err) throw err;
  runSearch();
});

function runSearch() {
  inquirer
    .prompt({
      name: "action",
      type: "rawlist",
      message: "What would you like to do?",
      choices: [
        "Add departments, roles, or employees",
        "View departments, roles, or employees",
        "Update employee roles"
      ]
    })
    .then(function(answer) {
      switch (answer.action) {
      case "Add departments, roles, or employees":
        add();
        break;

      case "View departments, roles, or employees":
        view();
        break;

      case "Update employee roles":
        update();
        break;
      }
    });
}
function add(){
  inquirer
    .prompt({
      name: "new",
      type: "input",
      message: "Would you like to add a department, role, or employee?"
    })
}
function view(){
  inquirer
    .prompt({
      name: "search",
      type: "input",
      message: "Would you like to view a department, role, or employee?"
    })
}
function update(){
  inquirer
    .prompt({
      name: "promote",
      type: "input",
      message: "Who would you like to promote?"
    })
}