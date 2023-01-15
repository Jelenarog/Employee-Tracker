const db = require("../db/connection");
//sql queries
const deprtmentList = 'SELECT * FROM department';

//get list of existing department names and their ID from db
const deptList = async () =>{
 try {
  const deptArray= await db.promise().query(deprtmentList);
  return deptArray[0].map(dtName => ({name: dtName.name, value: dtName.id}));
 }
catch (err){
  console.log(err);
}
};

module.exports = {deptList};