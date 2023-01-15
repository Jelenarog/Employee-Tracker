const inquirer = require("inquirer");
const {deptList, findDeptByName } = require("../lib/department");
const db = require("../db/connection");
const deptQuery = `INSERT INTO department VALUES(?,?)`;

const addRoleMenu = async () =>{
   
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
       
       const deptId = await findDeptByName(department);
  console.log(deptId);
        // await db.promise().query(`INSERT INTO roles VALUES(?, ?, ?, ?)`,
        //      [title, salary, department ])
            
};





//if user wants to add department insert that value into department table
const addDepartmentMenu = async() => {
  await inquirer
    .prompt([
      {
        type: "input",
        message: "What is the name of the department?",
        name: "department",
      },
    ])
   // .then((answers) => {
     db.query(
      `INSERT INTO department VALUES(?,?)`, [department],
        //[answers.id, answers.department],
        (err, result) => {
          if (err) {
            console.log(err);
          }
          console.log(`Added ${department} to the database.`);

     
        }
      );
     init();
    }//);
//};





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