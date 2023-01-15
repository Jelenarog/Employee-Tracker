const inquirer = require("inquirer");
const {deptList} = require("../lib/department");
const db = require("../db/connection");
const deptQuery = `INSERT INTO roles (title, salary, department_id) VALUES(?, ?, ?)`;

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
    






module.exports = {addRoleMenu, addDepartmentMenu };

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