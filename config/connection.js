// Set up MySQL connection.
const mysql = require("mysql");
let connection;

if (process.env.JAWSDB_URL){
    connection = mysql.createConnection(process.env.JAWSDB_URL);
} else {
    connection = mysql.createConnection({
        host: "aqx5w9yc5brambgl.cbetxkdyhwsb.us-east-1.rds.amazonaws.com",
        port: 3306,
        user: "q1hw12w30odg5y0h",
        password: "v7zieqam9tk9ysl1",
        database: "grv10hc9r207k7e1"
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