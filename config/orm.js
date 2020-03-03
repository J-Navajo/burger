const connection = require("../config/connection.js");

const orm = {
    // The last variable cb represents the anonymous function being passed from server.js
    selectAll: function(tableInput, cb) {
      const queryString = "SELECT * FROM ??";
      connection.query(queryString, tableInput,  function(err, result) {
        if (err) throw err;
        cb(result);
      });
    },

    insertOne: function(table, col, val, cb) {
        connection.query("INSERT INTO ?? (??, ??) VALUES (?, ?)", [table,...col,...val], 
        function(err, result) {
            cb(result);
        });
    },

    updateOne: function(table, col2, val2, cb) {
      const update = 'UPDATE ?? SET ?? = ? WHERE ?? = ?';
      connection.query(update, [table, col2, val2], function(err, result) {
        cb(result);
      })
    }


  };




module.exports = orm;