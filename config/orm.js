const connection = require("../config/connection.js");

function objToSql(ob) {
  const arr = [];

  // loop through the keys and push the key/value as a string int arr
  for (let key in ob) {
    const value = ob[key];
    // check to skip hidden properties
    if (Object.hasOwnProperty.call(ob, key)) {
      // if string with spaces, add quotations (Lana Del Grey => 'Lana Del Grey')
      if (typeof value === "string" && value.indexOf(" ") >= 0) {
        value = "'" + value + "'";
      }
      // e.g. {name: 'Lana Del Grey'} => ["name='Lana Del Grey'"]
      // e.g. {sleepy: true} => ["sleepy=true"]
      arr.push(key + "=" + value);
    }
  }

  // translate array of strings to a single comma-separated string
  return arr.toString();
}


const orm = {
    // The last variable cb represents the anonymous function being passed from server.js
    selectAll: function(tableInput, cb) {
      const queryString = "SELECT * FROM ??";
      connection.query(queryString, tableInput, function(err, result) {
        if (err) {
        throw err;
      }
        cb(result);
      });
    },

    insertOne: function(table, cols, vals, cb) {

    connection.query("INSERT INTO ?? (??, ??) VALUES (?, ?)", [table,...cols,...vals], function(err, result) {
      if (err) {
        throw err;
      }

      cb(result);
    });
    },

    updateOne: function(table, cols, condition, cb) {
      const queryString = "UPDATE ?? SET ?? WHERE `id=6`";
      console.log(queryString);

      connection.query(queryString, [table, objToSql(cols)], function(err, result) {
        if (err) {
          throw err;
        }
        cb(result);
      });
    }


  };




module.exports = orm;