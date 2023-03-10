const db = require("../db/connection");
//sql queries
const employeeQuery = 'SELECT id, first_name FROM employee';
const employeeManagerQuery = 'SELECT first_name, id FROM employee WHERE manager_id IS NULL';
//get list of existing employee names and their ID from db
const employeeList = async () =>{
 try {
  const employeeArray= await db.promise().query(employeeQuery);

  return employeeArray[0].map(rlName => ({name: rlName.first_name, value: rlName.id}));
 }
catch (err){
  console.log(err);
}
};

const managerList = async () =>{
  try {
   const employeeArray= await db.promise().query(employeeManagerQuery);
 
   return employeeArray[0].map(rlName => ({name: rlName.first_name, value: rlName.id}));
  }
 catch (err){
   console.log(err);
 }
 };
 



module.exports = {employeeList, managerList};










