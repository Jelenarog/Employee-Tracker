const db = require("../db/connection");
const { managerList } = require("../lib/employee");
const { deptList } = require("../lib/department");
const inquirer = require("inquirer");


//SQL queries
const seeEmployeesByMgrQuery = `SELECT * FROM employee  WHERE manager_id=(?) `
const seeEmployeesByDeptQuery = `SELECT e1.id, e1.first_name, e1.last_name, roles.title, department.name as department, roles.salary, e2.first_name AS manager
FROM employee as e1 
LEFT JOIN employee as e2 ON e1.manager_id = e2.id
LEFT JOIN roles ON e1.role_id = roles.id
JOIN department ON roles.department_id = department.id WHERE department.id=(?) ORDER BY e1.id ;`
const seeBudgetQuery = `SELECT name as department, SUM(salary) AS total
FROM department 
JOIN roles ON department.id = roles.department_id
WHERE department.id = (?)
GROUP BY name;`



//view table that displays all roles
const viewRoles = () => {
 return db.promise().query(
    `select roles.id, roles.title, roles.salary, name as department 
  from roles JOIN department ON roles.department_id = department.id ORDER BY roles.id ;  `)
};

//view table for all departments
const viewDepartments = () => {
  return db.promise().query(`SELECT * FROM department ORDER BY department.id`)
};

//view table that contains all employees
const viewEmployees = () => {
  return db.promise().query(
    `SELECT e1.id, e1.first_name, e1.last_name, roles.title, department.name as department, roles.salary, e2.first_name AS manager
  FROM employee as e1 
  LEFT JOIN employee as e2 ON e1.manager_id = e2.id
  LEFT JOIN roles ON e1.role_id = roles.id
  JOIN department ON roles.department_id = department.id ORDER BY e1.id ;`)
};

const viewEmployeesByManager = async ()=>{
  const getManagerList = await managerList();
  const { managerId} = await
  inquirer
    .prompt([
      {
        type: "list",
        message: "Under what manager would you like to see all employees listed?",
        choices: getManagerList,
        name: "managerId",
      },
  ])
  
return db.promise().query(seeEmployeesByMgrQuery,[managerId])
    }

    const viewEmployeesByDepartment = async ()=>{
      const getDepartmentList = await deptList();
      const { departmentId} = await
      inquirer
        .prompt([
          {
            type: "list",
            message: "Under what department would you like to see all employees listed?",
            choices: getDepartmentList,
            name: "departmentId",
          },
      ])
    return db.promise().query(seeEmployeesByDeptQuery ,[departmentId])
        }

        const viewBudgetByDepartment = async ()=>{
          const getDepartmentList = await deptList();
          const { departmentId} = await
          inquirer
            .prompt([
              {
                type: "list",
                message: "What department would you like to see utilized budget for?",
                choices: getDepartmentList,
                name: "departmentId",
              },
          ])
        return db.promise().query(seeBudgetQuery ,[departmentId])
            }
    


module.exports = {viewRoles, viewDepartments, viewEmployees, viewEmployeesByManager, viewEmployeesByDepartment, viewBudgetByDepartment };