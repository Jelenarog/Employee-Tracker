const db = require("../db/connection");

const findDepartment = `SELECT id FROM department WHERE department.name =`;
//if user wants to add department insert that value into department table
const deprtmentList = 'SELECT * FROM department';

//get list of existing departments in db
const deptList = async () =>{
 try {
  const deptArray= await db.promise().query(deprtmentList)
   //console.log( deptArray);
 //console.log(deptArray[0].map(dtName =>dtName.name));
  return deptArray[0].map(dtName => ({name: dtName.name, value: dtName.id}));
 // return deptArray[0];
 }
catch (err){
  console.log(err);
}

};


const findDeptByName = async (name)=>{
 
  const sqlQuery = findDepartment + ' " ' +  name + '"' ;
try {
const queryResolved = await db.promise().query(sqlQuery);
//console.log (queryResolved[0].id);
//return queryResolved[0][0].id;
return queryResolved.id;
}
catch (err){
  console.log(err);
}
};


module.exports = {deptList, findDeptByName };