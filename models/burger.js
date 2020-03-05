const orm = require("../config/orm.js");

const burger = {
    selectAll: function(cb) {
        orm.selectAll("burgers", function(res) {
            cb(res)
        });
    },

    insertOne: function(cols, vals, cb) {
        orm.insertOne("burgers", cols, vals, function(res) {
        // orm.insertOne("burgers", ["burger_name", "devoured"],[burgerName, false], 
        // function(result) {
            cb(res);
        });
    },

    updateOne: function(cols, condition, cb) {
        orm.updateOne("burgers", cols, condition, function(res) {
            cb(res);
        });
    }
};

module.exports = burger;