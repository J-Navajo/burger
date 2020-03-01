const orm = require("../config/orm.js");

const burger = {
    all: function(controllerCB) {
        orm.selectAll("burgers", function(result) {
            controllerCB(result)
        })
    },

    insertOne: function(burgerName, controllerCB) {
        orm.insertOne("burgers", ["burger_name", "devoured"],[burgerName, false], 
        function(result) {
            controllerCB(result)
        })
    }
}

module.exports = burger;