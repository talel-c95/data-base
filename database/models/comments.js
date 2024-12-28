// import the database connection
const conn= require("../index")

module.exports = {
  // a function which fetches all the comments for a respective post
  getAll: function (callback) {
    const sql = 'SELECT * FROM `comments`';
    conn.query(sql, function(error, results, fields) {
      callback(error, results);
    });
  },
  // a function that can be used to insert a comment into the database
  add: function (callback,body) {
    const sql = 'INSERT INTO `comments` SET ?';
    conn.query(sql, body, function(error, results, fields) {
      callback(error, results);
    });
  },
};
