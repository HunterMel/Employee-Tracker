const connection = require('./connection')

class DB { 
    constructor(connection) {
        this.connection = connection 
    }
    seeAllDepartments() {
        return this.connection.promise().query(`SELECT * FROM department`)
    };
    seeAllRoles() {
        return this.connection.promise().query(`SELECT * FROM role`)
    };
    selectAllEmployees() {
        return this.connection.promise().query(`SELECT 
    
        employee.id, employee.first_name, employee.last_name, role.title AS job_title, department.name AS department, role.salary
    
        FROM employee
        
        JOIN role ON employee.role_id = role.id
        
        JOIN department ON role.department_id = department.id;`)
    };
    createDepartment(department) {
        return this.connection.promise().query(`INSERT INTO department SET ?`, department)
    };   
    createRole(role) {
        return this.connection.promise().query(`INSERT INTO role SET ?`, role)
    };
    createEmployee(employee) {
        return this.connection.promise().query(`INSERT INTO employee SET ?, ?, ?, ?`, employee)
    }
}
module.exports = new DB(connection)