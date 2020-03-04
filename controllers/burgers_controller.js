const express = require("express");

const router = express.Router();

const burger = require("../models/burger.js")

router.get("/", function(req, res) {
    burger.selectAll(function(data) {
        const burgerObject = { 
            burgers: data 
        };
        console.log(burgerObject);
        res.render("index", burgerObject);
    });
});

router.post("/api/burgers", function (req, res) {
    // console.log(res);
    burger.insertOne([
        "burger_name", "devoured"
    ],
        [
            req.body.name,
            req.body.devoured
        ],
        function (result) {
            res.json({ id: result.insertId });
        });
});

router.put("/api/burgers/:id", function (req, res) {
    const condition = "id = " + req.params.id;
    console.log("condition", condition);
    console.log(req.body.devoured);

    burger.updateOne({
        devoured: req.body.devoured
    }, condition, function (result) {
        if (result.changedRows == 0) {
            return res.status(404).end();
        } else {
            res.status(200).end();
        }
    });
});

module.exports = router;