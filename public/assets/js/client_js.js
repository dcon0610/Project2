/* THIS FILE IS FOR CLIENT_SIDE SCRIPTING, SUCH AS BUTTON AJAX CALLS AND FORMS */

$(document).ready(function() {
    
// Submit a new coffee
$("#coffeeSubmitBtn").click( function(event) {
  // Make sure to preventDefault on a submit event.
  event.preventDefault();

  // cloudinary upload URL
  const cloudUploadURL = "https://api.cloudinary.com/v1_1/dw7h2b2j3/image/upload";
  // get image from page
  let imgToUpload = $(`#formImgInput`)[0].files[0];
  console.log(imgToUpload);
  var formData = new FormData();
  formData.append('file', imgToUpload);
  formData.append('upload_preset', "jmn6ot8z");

  $.ajax(cloudUploadURL, {
    type: 'POST',
    data: formData,
    processData: false,
    contentType: false,
  }).then(function(res){
    console.log(res);
    if (res){
       const imageURL = res.secure_url;
    //send ajax call, which will create this coffee at a new id
    $.ajax("/api/coffee", {
      type: "POST",
      data: {
        name: $(`#formNameInput`).val().trim(),
        brand:$(`#formBrandInput`).val().trim(),
        description:$(`#formDescriptionInput`).val().trim(),
        price:$(`#formPriceInput`).val().trim(),
        grams: $(`#formGramsInput`).val().trim(),
        img: imageURL
      }
    }).then(
      function(result) {
        console.log("created new id:", result);

        // Reload the page to get the updated list
        location.reload();

    })
  }
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
      coffeeID: coffeeID,
      user_name: $(`#reviewInputUserName${coffeeID}`).val().trim(),
      review: $(`#reviewInputTextbox${coffeeID}`).val().trim(),
      rating: $(`#reviewInputRating${coffeeID}`).val()
    };
    // send ajax
    $.ajax(`/api/reviews`,{
      type: "POST",
      data: newReview
    }).then(function(result){
      console.log("Review submitted.");
      // refresh the page
      $('.submitReviewBtn').prop('disabled', true);
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


   //     }

  //       // Reload the page to get the updated list
  //       location.reload();
  //     }
  //   );
  // });
  // }


  

});
 

