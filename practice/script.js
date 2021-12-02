$(document).ready(function() { // called when document is ready to run
    $("#hidden").hover(function() { // if i hover over hidden, run code inside
        $(this).css("color", "black"); //this element (turns black)
    },
    function() { // callback function, when mouse is not hovered over anymore, runs this code, always needed even if no code is there
        $(this).hide(); // hides forever, even if you hover again it won't show. sets display property to none
        //$(this).css("display", "none"); <-- more code, proves jQuery is easier
    });

    $("button").click(function() { // if any button on the page is clicked, this code runs
        alert("I'm alerting you");
    })
})
