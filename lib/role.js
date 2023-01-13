//function to add new role to the db
const addRole = () => {
    inquirer
      .prompt([
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
          choices: ["Sales", "Engineering", "Finance", "Legal"],
        },
      ])
      .then((answers) => {
        if (answers.department === "Sales") {
          console.log(answers);
          db.query(
            `INSERT INTO roles VALUES(?, ?, ?, ?)`,
            [answers.id, answers.title, answers.salary, 1],
            (err, result) => {
              if (err) {
                console.log(err);
              }
  
              console.log(`Added ${answers.title} to the database.`);
            }
          );
        }
        if (answers.department === "Engineering") {
          console.log(answers);
          db.query(
            `INSERT INTO roles VALUES(?, ?, ?, ?)`,
            [answers.id, answers.title, answers.salary, 2],
            (err, result) => {
              if (err) {
                console.log(err);
              }
            }
          );
        }
        if (answers.department === "Finance") {
          console.log(answers);
          db.query(
            `INSERT INTO roles VALUES(?, ?, ?, ?)`,
            [answers.id, answers.title, answers.salary, 3],
            (err, result) => {
              if (err) {
                console.log(err);
              }
            }
          );
        }
        if (answers.department === "Legal") {
          console.log(answers);
          db.query(
            `INSERT INTO roles VALUES(?, ?, ?, ?)`,
            [answers.id, answers.title, answers.salary, 4],
            (err, result) => {
              if (err) {
                console.log(err);
              }
  
              console.log(`Added ${answers.title} to the database.`);
            }
          );
        }
        init();
      });
  };