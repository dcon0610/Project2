// Set up MySQL connection.
const mysql = require("mysql");
let connection;

if (process.env.JAWSDB_URL){
    connection = mysql.createConnection(process.env.JAWSDB_URL);
} else {
    connection = mysql.createConnection({
        host: "xq7t6tasopo9xxbs.cbetxkdyhwsb.us-east-1.rds.amazonaws.com",
        port: 3306,
        user: "yssb7n4ooc0qop8l",
        password: "pj6p0wtgywhbr69t",
        database: "a7hqp0phy2dmum28"
    });
}

connection.connect(function(err) {
  if (err) {
    console.error("error connecting: " + err.stack);
    return;
  }
  console.log("connected as id " + connection.threadId);
});


// Export connection
module.exports = connection;