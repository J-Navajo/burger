const orm = require("../config/orm.js");

const burger = {
    all: function(controllerCB) {
        orm.selectAll("burgers", function(result) {
            controllerCB(result)
        })
    },

    insertOne: function(burger, controllerCB) {
        orm.insertOne("burgers", ["burger", "devoured"],[burger, false], 
        function(result) {
            controllerCB(result)
        })
    }
}

module.exports = burger;