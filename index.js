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

connection.connect(function (err) {
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
    .then(function (answer) {
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
function view() {
  inquirer
    .prompt({
      name: "new",
      type: "rawlist",
      message: "Would you like to add a department, role, or employee?",
      choices: ["Department", "Role", "Employee"]
    }).then(function (answer) {
      switch (answer.action) {
        case "Department":
          addDepartment()
          break;
        case "Role":
          addRole()
          break;
        case "Employee":
          addEmployee()
          break;
      }
    });
}
//add department
function addDepartment() {
  inquirer.prompt({
    name: "new",
    type: "input",
    message: "What is the name of the new department."
  })
}
//add role
function addRole() { }
//add employee
function addEmployee() { }
function view() {
  inquirer
    .prompt({
      name: "new",
      type: "rawlist",
      message: "Would you like to view a department, role, or employee?",
      choices: ["Department", "Role", "Employee"]
    }).then(function (answer) {
      switch (answer.action) {
        case "Department":
          viewDepartment()
          break;
        case "Role":
          viewRole()
          break;
        case "Employee":
          viewEmployee()
          break;
      }
    });
}
//view department
function viewDepartment() { }
//view Role
function viewRole() { }
//view employee
function viewEmployee() { }
//change employee role
function update() {
  inquirer
    .prompt({
      // name: "action",
      // type: "rawlist",
      // message: "What would you like to do?",
      // choices: [
      //   "Add departments, roles, or employees",
      //   "View departments, roles, or employees",
      //   "Update employee roles"
      // ]
    })
    .then(function (answer) {
      switch (answer.action) {
        // case "Add departments, roles, or employees":
        //   add();
        //   break;

        // case "View departments, roles, or employees":
        //   view();
        //   break;

        // case "Update employee roles":
        //   update();
        //   break;
      }
    });
}
