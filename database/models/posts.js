// import the database connection
const conn = require('../index');

module.exports = {
  // a function which fetches all the posts
  getAll: function(callback) {
    const sql = 'SELECT * FROM `posts`';
    conn.query(sql, function(error, results, fields) {
      callback(error, results);
    });
  },

  // a function that retrieves one post record based on the provided id
  getOne: function(id, callback) {
    const sql = 'SELECT * FROM `posts` WHERE id = ?';
    conn.query(sql, id, function(error, results, fields) {
      callback(error, results[0]); 
    });
  },

  // a function that can be used to insert a post into the database
  add: function(callback, body) {
    const sql = 'INSERT INTO `posts` SET ?';
    conn.query(sql, body, function(error, results, fields) {
      callback(error, results);
    });
  }
};