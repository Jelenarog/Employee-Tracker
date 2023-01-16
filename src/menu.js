const inquirer = require("inquirer");
const {deptList} = require("../lib/department");
const db = require("../db/connection");
const { roleList, managerList } = require("../lib/role");
const {employeeList} = require ("../lib/employee");

//sql queries
const deptQuery = `INSERT INTO roles (title, salary, department_id) VALUES(?, ?, ?)`;
const employeeQuery = `INSERT INTO employee (first_name, last_name, role_id, manager_id) VALUES( ?, ?, ?, ?)`;
const updateEmployeeRoleQuery = `UPDATE employee SET role_id = (?) WHERE employee.id=(?)`;
const updateEmployeeManagerQuery = `UPDATE employee SET manager_id = (?) WHERE employee.id=(?)`;
//add new role to DB 
const addRoleMenu = async () =>{
//get list of existing department names and their ID from db
 const getDept = await deptList();
 
 const {title, salary, department} = await inquirer.prompt([
          {
            type: "input",
            message: "What is the name of the role?",
            name: "title",
          },
          {
            type: "input",
            message: "What is the salary of this role?",
            name: "salary",
          },
          {
            type: "list",
            message: "What is the department for this role?",
            name: "department",
            choices: getDept,
          },
        ])
        //add new role into DB with values passed by user
        return db.promise().query(deptQuery,[title, salary, department ])      
};

//if user wants to add department insert that value into department table
const addDepartmentMenu = async() => {
  return inquirer
    .prompt([
      {
        type: "input",
        message: "What is the name of the department?",
        name: "department",
      },
    ])
    .then(answers => {
      return db.promise().query(
        `INSERT INTO department VALUES(?,?)`, [answers.id,answers.department])
        .then(() => { console.log(`Added ${answers.department} to the database.`);})
    })

    }
    

//function to add new Employee to the db
const addEmployeeMenu = async () => {
  const getRole = await roleList();
  const getManager = await managerList();
  const {firstName, lastName, roleId, managerId} = await
  inquirer
    .prompt([
      {
        type: "input",
        message: "What is the employee's first name?",
        name: "firstName",
      },
      {
        type: "input",
        message: "What is the employee's last name?",
        name: "lastName",
      },
      {
        type: "list",
        message: "What is the employee's role?",
        choices: getRole,
        name: "roleId",
  
      },
      {
        type: "list",
        message: "Please choose employee's manager?",
        choices: getManager,
        name: "managerId",
  
      },
    ])
      return db.promise().query(employeeQuery,[firstName, lastName, roleId, managerId])
      
     // .then()=>{console.log(`Added ${answers.first_name} to the database.`)}
            
          }

  

//function to update an Employee role in existing db
const updateEmployeeRole = async () => {
  const getEmployeeList = await employeeList();
  const getRoleList = await roleList();
  const {roleId, firstName} = await
  inquirer
    .prompt([
      {
        type: "list",
        message: "Which employee's role do you want to update?",
        choices: getEmployeeList,
        name: "firstName",
        
      },
      {
        type: "list",
        message: "What is the employee's role?",
        choices: getRoleList,
        name: "roleId",
  
      },
    ])
      return db.promise().query(updateEmployeeQuery,[roleId, firstName])
     
          }

//function to update an Employee Manager in existing db
const updateEmployeeManager = async () => {
  const getEmployeeList = await employeeList();
  const getManagerList = await managerList();
  const {firstName, managerId} = await
  inquirer
    .prompt([
      {
        type: "list",
        message: "Which employee's manager do you want to update?",
        choices: getEmployeeList,
        name: "firstName",
        
      },
      {
        type: "list",
        message: "Who is the employee's manager?",
        choices: getEmployeeList,
        name: "managerId",
  
      },
    ])
    console.log(firstName);
    console.log(managerId);
      return db.promise().query(updateEmployeeManagerQuery,[managerId, firstName])
     
          }

  

module.exports = {addRoleMenu, addDepartmentMenu, addEmployeeMenu, updateEmployeeRole, updateEmployeeManager };

