// get the client
const db = require("./db/connection");
const cTable = require("console.table");
const inquirer = require("inquirer");
require("dotenv").config(); //global variable
const express = require("express");
const {viewRoles, viewDepartments, viewEmployees } = require("./lib/display");
const {deptList, findDeptByName }= require("./lib/department");
const {addRoleMenu, addDepartmentMenu } = require("./src/menu");

const PORT = process.env.PORT || 3001;
const app = express();

// Express middleware
app.use(express.urlencoded({ extended: false }));
app.use(express.json());



  // db.query(
  //   ` SELECT id FROM department WHERE department.name = Sales `,
  //   (err, result) => {
  //     if (err) {
  //       console.log(err);
  //     }
  //     console.table(result);
  //     console.log(result);
    
  //   }
  // );



//addRoleMenu();



//TO DO id added to dept picked insert into dept table
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
             const [employee] = await viewEmployees();
              break;

          case  "Add a department":
              await addDepartmentMenu();
    
              break;
          case  "Add a role":
              await addRoleMenu();    
              break;
        }

        init();
      }})
    };

init();


// Default response for any other request (Not Found)
app.use((req, res) => {
  res.status(404).end();
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
