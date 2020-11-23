/* THIS FILE IS FOR CLIENT_SIDE SCRIPTING, SUCH AS BUTTON AJAX CALLS AND FORMS */
$(document).ready(function() {
    // Make sure to preventDefault on a submit event.
 

    $("#coffeeSubmitBtn").click( function(event) {
        var data = {
            name: $(`#name`).val().trim(),
            brand:$(`#brand`).val().trim(),
            description:$(`#description`).val().trim(),
            price:$(`#price`).val().trim(),
            grams: $(`#grams`).val().trim(),
          };
       //send ajax call with the id, which will pick out the reviews with the id of this.id
    
       $.ajax("/coffee/add-coffee", {
        type: "POST",
        data: data
      }).then(
        function(result) {
          console.log("created new id:", result);
    
          // Reload the page to get the updated list
          location.reload();
        }
      );
    

})

for (var i=0; i<5; i++) {
$(`#${i}`).click( function(event) {
    var data = {
        name: $(`#name${this.id}`).val().trim(),
        review: $(`#review${this.id}`).val().trim()
      };
   //send ajax call with the id, which will pick out the reviews with the id of this.id
   const reviewId = this.id
   $.ajax("/coffee/add-review", {
    type: "POST",
    data: data
  }).then(
    function(result) {
      console.log("created new id:", result);

      // Reload the page to get the updated list
      location.reload();
    }
  );
  });


        }
    });
 

