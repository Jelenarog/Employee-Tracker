
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
  