$(function () {
    $(".futureDevoured").on("click", function (event) {
        event.preventDefault();
        const id = $(this).data("id");
        const newDevoured = $(this).data("newDevoured");

        const newDevouredState = {
            devoured: newDevoured
        };

        // Send the PUT request.
        $.ajax("/api/burgers/" + id, {
            type: "PUT",
            data: newDevouredState
        }).then(
            function () {
                console.log("changed to Devoured", newDevoured);
                // Reload the page to get the updated list
                location.reload();
            }
        );
    });


    $(".create-form").on("submit", function (event) {
        event.preventDefault();

        const newBurger = {
            burger: $("burg").val().trim(),
            devoured: false
        };

        $.ajax("/api/burgers", {
            type: "POST",
            data: newBurger
        })
            .then(function () {
                console.log("created a new burger");
                location.reload();
            });
    });
});