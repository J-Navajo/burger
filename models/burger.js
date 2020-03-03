const orm = require("../config/orm.js");

const burger = {
    selectAll: function(controllerCB) {
        orm.selectAll("burgers", function(result) {
            controllerCB(result)
        })
    },

    insertOne: function(burgerName, controllerCB) {
        orm.insertOne("burgers", ["burger_name", "devoured"],[burgerName, false], 
        function(result) {
            controllerCB(result)
        })
    },

    updateOne: function(burgerName, condition, controllerCB) {
        orm.updateOne("burgers", burgerName, condition, function(result) {
            controllerCB(result);
        });
    }
}

module.exports = burger;