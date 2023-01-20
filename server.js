// connection with DB
const db = require("./db/connection");
require("console.table");//display to the console in a tabular form
const inquirer = require("inquirer");
require("dotenv").config(); //global variable
const express = require("express");
const {viewRoles, viewDepartments, viewEmployees, viewEmployeesByManager, viewEmployeesByDepartment ,viewBudgetByDepartment } = require("./lib/display");
const {addRoleMenu, addDepartmentMenu, addEmployeeMenu, updateEmployeeRole, updateEmployeeManager} = require("./src/menu");

const PORT = process.env.PORT || 3001;
const app = express();

// Express middleware
app.use(express.urlencoded({ extended: false }));
app.use(express.json());


//Starter init function
const init = () => {
  inquirer
    .prompt([
      {
        type: "list",
        message: "What would you like to do?",
        name: "action",
        choices: [
          "View all departments",
          "View all roles",
          "View all employees",
          "Add a department",
          "Add a role",
          "Add an employee",
          "Update an employee role",
          "Update employee's manager",
          "View employees by manager",
          "View employees by department",
          "View utilized budget by department",
          "Quit",
        ],
      },
    ]
    )

        .then( async ({ action }) => {

      if (action){
        switch (action){
          case "View all departments":
            const [rows] = await viewDepartments();
            console.table(rows)
            break;
          case  "View all roles":
           const [roles] = await viewRoles();
           console.table(roles);
            break;
          case  "View all employees":
            viewEmployees();
             const [employee] = await viewEmployees();
             console.table (employee);
              break;
          case  "Add a department":
              await addDepartmentMenu();
              break;
          case  "Add a role":
              await addRoleMenu();    
              break;
          case  "Add an employee":
              await addEmployeeMenu();    
              break;  
          case  "Update an employee role":
              await updateEmployeeRole();    
              break; 
          case  "Update employee's manager":
             await updateEmployeeManager();    
             break; 
          case  "View employees by manager":
            const [byManager] = await viewEmployeesByManager();    
            console.table(byManager);
            break; 
          case  "View employees by department":
            const [byDepartment] = await viewEmployeesByDepartment();    
            console.table(byDepartment);
            break; 
           case  "View utilized budget by department":
            const [viewBudget] = await viewBudgetByDepartment();    
            console.table(viewBudget);
            break; 
          case "Quit":
            process.exit();
        }

        init();
      }})
      .catch(error => {
        throw error;
    });
    };

 init();


// Default response for any other request (Not Found)
app.use((req, res) => {
  res.status(404).end();
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
