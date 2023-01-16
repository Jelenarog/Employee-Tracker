
const db = require("../db/connection");
//sql queries
const roleQuery = 'SELECT id, title FROM roles';
const managerQuery = 'SELECT id, first_name FROM employee';
//get list of existing role names and their ID from db
const roleList = async () =>{
 try {
  const roleArray= await db.promise().query(roleQuery);
  return roleArray[0].map(rlName => ({name: rlName.title, value: rlName.id}));
 }
catch (err){
  console.log(err);
}
};


const managerList = async () =>{
  try {
   const managerArray= await db.promise().query(managerQuery);
   return managerArray[0].map(mgName => ({name: mgName.first_name, value: mgName.id}));
  }
 catch (err){
   console.log(err);
 }
 };
module.exports = {roleList, managerList};


