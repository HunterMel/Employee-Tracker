require("console.table");


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


