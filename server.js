// get the client
//const db = require("./db/connection");
const cTable = require("console.table");
const inquirer = require("inquirer");
require("dotenv").config(); //global variable
const express = require("express");
const deptList = require("./lib/department");

const PORT = process.env.PORT || 3001;
const app = express();

// Express middleware
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

deptList();
//view table that displays all roles
// const viewRoles = () => {
//   db.query(
//     `select roles.id, roles.title, roles.salary, name as department 
//   from roles JOIN department ON roles.department_id = department.id ORDER BY roles.id ;  `,
//     (err, result) => {
//       if (err) {
//         console.log(err);
//       }
//       console.table(result);
//       init();
//     }
//   );
// };
// //view table for all departments
// const viewDepartments = () => {
//   db.query(`SELECT * FROM department`, (err, result) => {
//     if (err) {
//       console.log(err);
//     }
//     console.table(result);
//     init();
//   });
// };
// //view table that contains all employees
// const allEmployees = () => {
//   db.query(
//     `SELECT e1.id, e1.first_name, e1.last_name, roles.title, department.name, roles.salary, e2.first_name AS manager
//   FROM employee as e1
//   LEFT JOIN employee as e2 ON e1.manager_id = e2.id
//   LEFT JOIN roles ON e1.role_id = roles.id
//   JOIN department ON roles.department_id = department.id;`,
//     (err, result) => {
//       if (err) {
//         console.log(err);
//       }
//       console.table(result);
//       init();
//     }
//   );
// };

// //if user wants to add department insert that value into department table
// const addDepartment = () => {
//   inquirer
//     .prompt([
//       {
//         type: "input",
//         message: "What is the name of the department?",
//         name: "department",
//       },
//     ])
//     .then((answers) => {
//       db.query(
//         `INSERT INTO department VALUES(?,?)`,
//         [answers.id, answers.department],
//         (err, result) => {
//           if (err) {
//             console.log(err);
//           }
//           console.log(`Added ${answers.department} to the database.`);
//         }
//       );
//       init();
//     });
// };

// //function to add new Employee to the db
// // const addEmployee = () => {
// //   inquirer
// //     .prompt([
// //       {
// //         type: "input",
// //         message: "What is the employee's first name?",
// //         name: "firstName",
// //       },
// //       {
// //         type: "input",
// //         message: "What is the employee's last name?",
// //         name: "lastName",
// //       },
// //       {
// //         type: "list",
// //         message: "What is the employee's role?",
// //         choices: ["Sales Lead"],
// //         name: "role.id",
  
// //       },
// //     ])
// //     .then((answers) => {
// //       if (answers.role === "Sales Lead") {
// //         console.log(answers);
// //         db.query(
// //           `INSERT INTO employee VALUES( ?, ?, ?, ?)`,
// //           [answers.first_name, answers.last_name, answers.role_id, 7],
// //           (err, result) => {
// //             if (err) {
// //               console.log(err);
// //             }

// //             console.log(`Added ${answers.first_name} to the database.`);
// //           }
// //         );
// //         init();
// //       }
// //     });
// //   };
  
// //function to add new role to the db
// const addRole = () => {
//   inquirer
//     .prompt([
//       {
//         type: "input",
//         message: "What is the name of the role?",
//         name: "title",
//       },
//       {
//         type: "input",
//         message: "What is the salary of this role?",
//         name: "salary",
//       },
//       {
//         type: "list",
//         message: "What is the department for this role?",
//         name: "department",
//         choices: ["Sales", "Engineering", "Finance", "Legal"],
//       },
//     ])
//     .then((answers) => {
//       if (answers.department === "Sales") {
//         console.log(answers);
//         db.query(
//           `INSERT INTO roles VALUES(?, ?, ?, ?)`,
//           [answers.id, answers.title, answers.salary, 1],
//           (err, result) => {
//             if (err) {
//               console.log(err);
//             }

//             console.log(`Added ${answers.title} to the database.`);
//           }
//         );
//       }
//       if (answers.department === "Engineering") {
//         console.log(answers);
//         db.query(
//           `INSERT INTO roles VALUES(?, ?, ?, ?)`,
//           [answers.id, answers.title, answers.salary, 2],
//           (err, result) => {
//             if (err) {
//               console.log(err);
//             }
//           }
//         );
//       }
//       if (answers.department === "Finance") {
//         console.log(answers);
//         db.query(
//           `INSERT INTO roles VALUES(?, ?, ?, ?)`,
//           [answers.id, answers.title, answers.salary, 3],
//           (err, result) => {
//             if (err) {
//               console.log(err);
//             }
//           }
//         );
//       }
//       if (answers.department === "Legal") {
//         console.log(answers);
//         db.query(
//           `INSERT INTO roles VALUES(?, ?, ?, ?)`,
//           [answers.id, answers.title, answers.salary, 4],
//           (err, result) => {
//             if (err) {
//               console.log(err);
//             }

//             console.log(`Added ${answers.title} to the database.`);
//           }
//         );
//       }
//       init();
//     });
// };

// //TO DO id added to dept picked insert into dept table
// function init() {
//   inquirer
//     .prompt([
//       {
//         type: "list",
//         message: "What would you like to do?",
//         name: "action",
//         choices: [
//           "View all departments",
//           "View all roles",
//           "View all employees",
//           "Add a department",
//           "Add a role",
//           "Add an employee",
//           "Update an employee role",
//         ],
//       },
//     ])

//     .then(({ action }) => {
//       if (action === "View all departments") {
//         viewDepartments();
//       } else if (action === "View all roles") {
//         viewRoles();
//       } else if (action === "View all employees") {
//         allEmployees();
//       } else if (action === "Add a department") {
//         addDepartment();
//       } else if (action === "Add a role") {
//         addRole();
//       }
//         else if (action === "Add an employee") {
//          addEmployee();
//       }
      
//     });
// }
// init();


// // Default response for any other request (Not Found)
// app.use((req, res) => {
//   res.status(404).end();
// });

// app.listen(PORT, () => {
//   console.log(`Server running on port ${PORT}`);
// });
