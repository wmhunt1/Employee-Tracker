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
  }).then(answer => {
    let newDept = 'INSERT into Department (name) VALUES ?}';

    connection.query(newDept, answer), function (err) {
      if (err) throw err;;
    }
    connection.end();
    runSearch()
  }
  )
}
//add role
function addRole() {
  inquirer.prompt({
    name: "title",
    type: "input",
    message: "What is the title of the new role?"
  },
  {
    name: "salary",
    type: "input",
    message: "What is the salary for the new role?"
  },
  {
    name: "department",
    type: "rawlist",
    message: "What is department does this role belong to?",
    //need to print deptartment list
    choices: []
  }).then(answer => {
    let newRole = 'INSERT into Job (title, salary, department_id) VALUES ?, ?, ?}';
    let title = answer.title;
    let salary = answer.salary;
    //need something to find dept id
    let department_id = answers.department_id;
    connection.query(newRole, title, salary, department_id), function (err) {
      if (err) throw err;;
    }
    connection.end();
    runSearch()
  }
  )
 }
//add employee
function addEmployee() {
  inquirer.prompt({
    name: "firstName",
    type: "input",
    message: "What is the new employee's first name?"
  },
  {
    name: "lastName",
    type: "input",
    message: "What is the new employee's first name?"
  },
  {
    name: "job",
    type: "rawlist",
    message: "What is their job?",
    choices: []
  }).then(answer => {
    let newRole = 'INSERT into Job (first_name, last_name, role_id, manager_id) VALUES ?, ?, ?, ?}';
    let firstName = answer.firstName;
    let lastName = answer.lastName;
    //need something to find role id
    let job = answers.role_id;
    //need something to find manger id or select from managers
    let manager_id = answers.manager_id;
    connection.query(newRole, firstName, lastName, job, manager_id), function (err) {
      if (err) throw err;;
    }
    connection.end();
    runSearch()
  }
  )
 }
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
