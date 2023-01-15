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
const init = async() => {
 await inquirer
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

        .then(({ action }) => {
   let result;
      if (action){
        switch (action){
          case "View all departments":
            viewDepartments();
           return result;
          case  "View all roles":
            viewRoles();
            return result;
           
          case  "View all employees":
              viewEmployees();
              return result;
          case  "Add a department":
              addDepartmentMenu();
              return result;
            
          case  "Add a role":
              addRoleMenu();
              return result;           
        }
        
     
      }})
    };
//       if (action === "View all departments") {
//        // viewDepartments();
//       } else if (action === "View all roles") {
//         viewRoles();
//       } else if (action === "View all employees") {
//         allEmployees();
//       } else if (action === "Add a department") {
//         addDepartment();
//       } else if (action === "Add a role") {
//         addRoleMenu();
//       }
//         else if (action === "Add an employee") {
//          addEmployee();
//       }
      
//     });
// }
init();


// Default response for any other request (Not Found)
app.use((req, res) => {
  res.status(404).end();
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
