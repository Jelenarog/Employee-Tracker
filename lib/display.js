const db = require("../db/connection");


//view table that displays all roles
const viewRoles = () => {
 return db.promise().query(
    `select roles.id, roles.title, roles.salary, name as department 
  from roles JOIN department ON roles.department_id = department.id ORDER BY roles.id ;  `)
};

//view table for all departments
const viewDepartments = () => {
  return db.promise().query(`SELECT * FROM department`)
};

//view table that contains all employees
const viewEmployees = () => {
  return db.promise().query(
    `SELECT e1.id, e1.first_name, e1.last_name, roles.title, department.name, roles.salary, e2.first_name AS manager
  FROM employee as e1
  LEFT JOIN employee as e2 ON e1.manager_id = e2.id
  LEFT JOIN roles ON e1.role_id = roles.id
  JOIN department ON roles.department_id = department.id;`)
};

module.exports = {viewRoles, viewDepartments, viewEmployees };