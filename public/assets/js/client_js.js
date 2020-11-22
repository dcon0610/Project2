/* THIS FILE IS FOR CLIENT_SIDE SCRIPTING, SUCH AS BUTTON AJAX CALLS AND FORMS */
$(document).ready(function() {
    // Make sure to preventDefault on a submit event.
 

    $("#coffeeSubmitBtn").click( function(event) {
    
        console.log(event)
        alert("hello")

    })


    
    $("#1").click( function(event) {
    
        console.log(event)
        alert("hello, review")

    })
})