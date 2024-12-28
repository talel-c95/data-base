const mysql = require('mysql2');

//importing the config interface which organizes configuration files for different usage purpose, here development and testing.
const config = require('config');

// Create a database connection and export it from this file.
const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root', //username imported from the config files
    password: '0000', //password imported from the config files
    database: 'blog' //database name imported from the config files
  });
module.exports=connection
// Connect to the database and make sure to log a message related to the connection state 

