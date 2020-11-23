/* THIS FILE IS FOR CLIENT_SIDE SCRIPTING, SUCH AS BUTTON AJAX CALLS AND FORMS */
$(document).ready(function() {
    
  // Submit a new coffee
    $("#coffeeSubmitBtn").click( function(event) {
      // Make sure to preventDefault on a submit event.
      event.preventDefault();

        var data = {
            name: $(`#formNameInput`).val().trim(),
            brand:$(`#formBrandInput`).val().trim(),
            description:$(`#formDescriptionInput`).val().trim(),
            price:$(`#formPriceInput`).val().trim(),
            grams: $(`#formGramsInput`).val().trim(),
          };
      
      //send ajax call with the id, which will create this coffee at a new id
      $.ajax("/coffee/add-coffee", {
        type: "POST",
        data: data
      }).then(
        function(result) {
          console.log("created new id:", result);
    
          // Reload the page to get the updated list
          location.reload();

        });
});


  // Submit a review for a coffee
  // (trying an alternative format)
  $(".submitReviewBtn").click(function(event){
    event.preventDefault();
    // get relevant coffee id
    let coffeeID = event.target.id.substring(12);
    console.log(`Event target id is ${event.target.id}. Coffee id is ${coffeeID}`);
    // create data packet
    var newReview = {
      name: $(`#reviewInputUserName${coffeeID}`).val().trim(),
      review_text: $(`#reviewInputTextbox${coffeeID}`).val().trim(),
      rating: $(`#reviewInputRating${coffeeID}`).val().trim()
    };
    // send ajax
    $.ajax("/coffee/add-review",{
      type: "POST",
      data: newReview
    }).then(function(result){
      console.log("Review submitted.");
      // refresh the page
      location.reload();
    });
  });

  // for (var i=0; i<5; i++) {
  // $(`#${i}`).click( function(event) {
  //   var data = {
  //       name: $(`#name${this.id}`).val().trim(),
  //       review: $(`#review${this.id}`).val().trim()
  //     };
  //    //send ajax call with the id, which will pick out the reviews with the id of this.id
  //   const reviewId = this.id
  //   $.ajax("/coffee/add-review", {
  //     type: "POST",
  //     data: data
  //   }).then(
  //     function(result) {
  //       console.log("created new id:", result);

  //       // Reload the page to get the updated list
  //       location.reload();
  //     }
  //   );
  // });
  // }
});
 

