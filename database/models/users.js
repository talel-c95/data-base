// import the database connection

const conn=require("../index")
module.exports = {
    //a function which fetches all the users.
    getAll: function (callback) {
      const sql = 'SELECT * FROM `users`'
      conn.query(sql, function (error, results, fields) {
        callback(error, results);
      });
    },
      //a function that retrieves one user record based on the provided id.
      getOne: function(id, callback) {
        const sql = 'SELECT * FROM `users` WHERE id = ?';
        conn.query(sql, [id], function(error, results, fields) {
          callback(error, results[0]);
        });
      },
      // a function that can be used to add a user to the users table.
      add: function (callback,body ) {
        const sql = 'INSERT INTO `users` set ?';
        conn.query(sql, body, function(error, results, fields) {
          callback(error, results);
        });
      } 
    };