select roles.id, roles.title, roles.salary, name as department 
from roles JOIN department ON roles.department_id = department.id;   

-- SELECT employee.id, employee.first_name, employee.last_name
SELECT *
from employee LEFT JOIN roles ON employee.role_id = roles.id;

SELECT *
from employee as e1 INNER JOIN roles ON e1.role_id = roles.id;
LEFT JOIN employee as e2 ON e1.manager_id = e2.id;


SELECT e1.id, e1.first_name, e1.last_name, roles.title, department.name, roles.salary, e2.first_name AS manager
FROM employee as e1
LEFT JOIN employee as e2 ON e1.manager_id = e2.id
LEFT JOIN roles ON e1.role_id = roles.id
JOIN department ON roles.department_id = department.id;


 const userINPUT="test"
 db.query(`INSERT INTO department VALUES(?)`,[userINPUT],(err,result)=>{ if (err) {
   console.log(err)
 }
 console.log(result)
 });


   INSERT INTO roles 
    SELECT * FROM roles 
   VALUES(test,test,1) 
  
   WHERE salary = 80000;


INSERT INTO roles (title, salary, department_id)
VALUES("test",2,2); WHERE salary = '80000';

SELECT * FROM roles 
WHERE title = 'Sales Lead';

SELECT * FROM roles 
WHERE salary = 80000;

   select * from department;



SELECT id FROM department WHERE name = "Sales";

SELECT e1.id, e1.first_name, e1.last_name, roles.title, department.name as department, roles.salary, e2.first_name AS manager
FROM employee as e1 
LEFT JOIN employee as e2 ON e1.manager_id = e2.id
LEFT JOIN roles ON e1.role_id = roles.id
JOIN department ON roles.department_id = department.id WHERE department.id=1 ORDER BY e1.id ;

SELECT name as department, SUM(salary) AS total
FROM department 
JOIN roles ON department.id = roles.department_id
WHERE department.id = 1
GROUP BY name;


