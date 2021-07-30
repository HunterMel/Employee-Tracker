const mysql = require('mysql2');


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


module.exports = db