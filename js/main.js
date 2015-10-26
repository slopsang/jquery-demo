/* your code goes here! */

/* Use clever selections and event handlers to assign the described interactivity */

var input = null;
var output= null;

$("#change-content").click(function(){
    input = $("#selector").val();
    output = $("#newContent").val();
    $(input).text(output);
});

$("#add-at-end").click(function(){
    // var input = $("#selector").val();
    // var output = $("#newContent").val();
    $(input).append(output);
})

$("#move-after").click(function() {
    $()
})

