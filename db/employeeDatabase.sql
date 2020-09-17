/*borrowed scehema from https://github.com/ruthtech/employee-tracker*/

DROP DATABASE IF EXISTS employee_trackerDB;
CREATE database employee_trackerDB;

USE employee_trackerDB;

CREATE TABLE department (
 id INTEGER NOT NULL auto_increment PRIMARY KEY,
 name VARCHAR(30)
);
/*changed to job because role was underlined*/
CREATE TABLE job (
  id INTEGER NOT NULL auto_increment PRIMARY KEY,
  title VARCHAR(30),
  salary DECIMAL,
  department_id INTEGER,
  FOREIGN KEY (department_id) REFERENCES department(id)
);
CREATE TABLE employee (
   id INTEGER NOT NULL auto_increment PRIMARY KEY,
  first_name VARCHAR(30),
  last_name VARCHAR(30),
  role_id INTEGER,
  manager_id INTEGER,
  FOREIGN KEY (role_id) REFERENCES job(id),
  FOREIGN KEY (manager_id) REFERENCES job(id)
);

SELECT * FROM department;
SELECT * FROM job;
SELECT * FROM employee