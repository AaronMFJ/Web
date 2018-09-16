console.log("fnw.js connected")


//press enter in text box
$("input").keypress(function(event) {
    if (event.which == 13) {
        event.preventDefault();
        console.log("pressing ENTER")
        $("form").submit();
    }
});