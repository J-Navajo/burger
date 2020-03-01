$(".create-form").on("submit", function(event) {
    event.preventDefault();

    const newBurger = {
        burger: $("burg").val()
    };

    $.ajax("/api/burgers", {
        type: "POST",
        data: newBurger
    })
    .then(function() {
        console.log("created a new burger");
        location.reload();
    })
})