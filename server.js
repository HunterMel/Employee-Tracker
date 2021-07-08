const mysql = require('mysql2');
require("console.table");

// create the connection to your database
const db = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "Trayehunter1!",
    database: "content_management"
})

// connect to the database
db.connect(function(err) {
    if(err) throw err;
})


//
function viewDepartments() {
    db.promise().query('SELECT * FROM department;')
    .then(function(results) {
        console.table(results[0]);
    })
}

// first ask the user what they want to do using inquirer
// options: view all departments,, create a departyment, view employees...
// for each options, create a function


