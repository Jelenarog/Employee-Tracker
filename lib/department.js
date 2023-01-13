const db = require("../db/connection");
const deptQuery = `INSERT INTO department VALUES(?,?)`;
//if user wants to add department insert that value into department table
const deprtmentList = 'SELECT name FROM department';
const deptList = async () =>{
 try {
  const deptArray= await db.promise().query(deprtmentList)

  return deptArray[0].map(dtName =>dtName.name);
 }
catch (err){
  console.log(err);
}

};

// const addDepartment = () => {
//     inquirer
//       .prompt([
//         {
//           type: "input",
//           message: "What is the name of the department?",
//           name: "department",
//         },
//       ])
//       .then((answers) => {
//         db.query(
//           deptQuery,
//           [answers.id, answers.department],
//           (err, result) => {
//             if (err) {
//               console.log(err);
//             }
//             console.log(`Added ${answers.department} to the database.`);
//           }
//         );
//         init();
//       });
//   };

module.exports = deptList;