USE employee_trackerDB;

-- learned format from https://github.com/ruthtech/employee-tracker

-- make departments 
-- Template INSERT into Department (name) VALUES ("Dept");
INSERT into Department (name) VALUES ("Accounting");
INSERT into Department (name) VALUES ("Engineering");
INSERT into Department (name) VALUES ("Finance");
INSERT into Department (name) VALUES ("HR"); 
INSERT into Department (name) VALUES ("IT"); 
INSERT into Department (name) VALUES ("Marketing");
INSERT into Department (name) VALUES ("Production");
INSERT into Department (name) VALUES ("Purchasing");
INSERT into Department (name) VALUES ("Sales");
INSERT into Department (name) VALUES ("Redacted");

-- make jobs
-- Template INSERT into role (title, salary, department_id) VALUES ("Name", #, #);
INSERT into job (title, salary, department_id) VALUES ("Accounting Manager", 50000, 1);
INSERT into job (title, salary, department_id) VALUES ("Accountant", 25000, 1);
INSERT into job (title, salary, department_id) VALUES ("Engineering Manager", 50000, 2);
INSERT into job (title, salary, department_id) VALUES ("Engineer", 25000, 2);
INSERT into job (title, salary, department_id) VALUES ("Financial Manager", 50000, 3);
INSERT into job (title, salary, department_id) VALUES ("Financial Employee", 25000, 3);
INSERT into job (title, salary, department_id) VALUES ("HR Manager", 50000, 4);
INSERT into job (title, salary, department_id) VALUES ("HR Employee", 25000, 4);
INSERT into job (title, salary, department_id) VALUES ("IT Manager", 50000, 5);
INSERT into job (title, salary, department_id) VALUES ("IT Employee", 25000, 5);
INSERT into job (title, salary, department_id) VALUES ("Marketing Manager", 50000, 6);
INSERT into job (title, salary, department_id) VALUES ("Marketer", 25000, 6);
INSERT into job  (title, salary, department_id) VALUES ("Production Manager", 50000, 7);
INSERT into job (title, salary, department_id) VALUES ("Producer", 25000, 7);
INSERT into job (title, salary, department_id) VALUES ("Purchasing Manager", 50000, 8);
INSERT into job (title, salary, department_id) VALUES ("Purchaser", 25000, 8);
INSERT into job (title, salary, department_id) VALUES ("Sales Manager", 50000, 9);
INSERT into job (title, salary, department_id) VALUES ("Seller", 25000, 9);
INSERT into job (title, salary, department_id) VALUES ("Redacted Manager", 50000, 10);
INSERT into job (title, salary, department_id) VALUES ("Redacted", 25000, 10);

-- make employee

-- employee template INSERT into employee (first_name, last_name, role_id, manager_id) VALUES ("", "", #, # or null);
-- Accounting
INSERT into employee (first_name, last_name, role_id, manager_id) VALUES ("Count", "Ting", 1, null);
INSERT into employee (first_name, last_name, role_id, manager_id) VALUES ("Acu", "Bus", 2, 1);
-- Engineering
INSERT into employee (first_name, last_name, role_id, manager_id) VALUES ("Pointy-Haired", "Boss", 3, null);
INSERT into employee (first_name, last_name, role_id, manager_id) VALUES ("Dill", "Bert", 4, 2);
-- Finance
INSERT into employee (first_name, last_name, role_id, manager_id) VALUES ("Lotta", "Money", 5, null);
INSERT into employee (first_name, last_name, role_id, manager_id) VALUES ("Moren", "Dough", 6, 3);
-- HR
INSERT into employee (first_name, last_name, role_id, manager_id) VALUES ("HR", "McHR", 7, null);
INSERT into employee (first_name, last_name, role_id, manager_id) VALUES ("Toby", "Flenderson JR", 8, 4);
-- IT
INSERT into employee (first_name, last_name, role_id, manager_id) VALUES ("Jen", "Barber", 9, null);
INSERT into employee (first_name, last_name, role_id, manager_id) VALUES ("Maurice", "Moss", 10, 5);
INSERT into employee (first_name, last_name, role_id, manager_id) VALUES ("Roy", "Trenneman", 10, 5);
-- Marketing
INSERT into employee (first_name, last_name, role_id, manager_id) VALUES ("Pete", "Campbell", 11, null);
INSERT into employee (first_name, last_name, role_id, manager_id) VALUES ("Don", "Draper", 12, 6);
-- Production
INSERT into employee (first_name, last_name, role_id, manager_id) VALUES ("Pro", "Duce", 13, null);
INSERT into employee (first_name, last_name, role_id, manager_id) VALUES ("Make", "Stuff", 14, 7);
-- Purchasing
INSERT into employee (first_name, last_name, role_id, manager_id) VALUES ("Pur", "Chase", 15, null);
INSERT into employee (first_name, last_name, role_id, manager_id) VALUES ("Buy", "Stuff", 16, 8);
-- Sales
INSERT into employee (first_name, last_name, role_id, manager_id) VALUES ("Michael", "Scott", 17, null);
INSERT into employee (first_name, last_name, role_id, manager_id) VALUES ("Jim", "Halpert", 18, 9);
INSERT into employee (first_name, last_name, role_id, manager_id) VALUES ("Dwight", "Schrute", 18, 9);
-- Redacted
INSERT into employee (first_name, last_name, role_id, manager_id) VALUES ("Rec", "Dacted", 19, null);
INSERT into employee (first_name, last_name, role_id, manager_id) VALUES ("Cen", "Sured", 20, 10);