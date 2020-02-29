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
        connection.query("INSERT INTO ?? (??, ??)val (?, ?)", [table,...col,...val] 
        function(err, result) {
            cb(result);
        })
    }


  };




module.exports = orm;