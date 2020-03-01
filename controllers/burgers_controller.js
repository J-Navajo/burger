const express = require("express");

const router = express.Router();

const burger = require("..models/burger.js")

router.get("/", function(req, res) {
    burger.all(function(data) {
        const burgerObject = { burger: data};
        console.log(burgerObject);
        res.render("index", burgerObject);
    });
});

router.post("/api/burgers", function(req, res) {
    burger.create([
        "burger", "devoured"
    ],
    [
        req.body.burger,
        req.body.devoured
    ],
    function(result) {
        res.json({ id: result.insertId });
    });
});



module.exports = router;