var express = require("express");
var router = express.Router();

// load models eg db.Coffee
var db = require("../models");

// Create all our routes and set up logic within those routes where required.
router.get("/", function(req, res) {

  // get data for coffees from db

  // get all coffees with reviews
  db.Coffee.findAll({ include: [{
    model: db.Review,
    include: [{
      model: db.User
    }]
  }], 
  raw: true
  }).then(function(dbReviews){
      var hbsObject ={coffee: dbReviews}
      console.log("this is the returned value:",dbReviews) ;
      res.render("index", hbsObject);
    });
  });
 
// POST a new coffee
router.post("/api/coffee", function(req, res) {
  // image manipulation if image attached
  if (req.body.img){
    let uploadedImg = req.body.img;
    let imgName = uploadedImg.name;
    console.log(`received image with name ${imgName}`);
    // file location to pass into the DB is...
    let savePath = "./assets/img/"+imgName;
    // file is a binary file, so... read buffer...
    // uploadedImg.arrayBuffer().then(buffer){
      // write it to a file on server-side
      // fs.writeFile(savePath, buffer, function(error){
        // if (error) throw error;
        // console.log("File received and saved");
      //});
    //}
  }

  // create new coffee in db
  db.Coffee.create({
    blend_name:         req.body.name,
    brand:              req.body.brand,
    coffee_description: req.body.description,
    price:              req.body.price,
    weight_grams:       req.body.grams,
    //img:                savePath
  }).then(function(dbCoffee){
    console.log(dbCoffee);
  });
});

router.post("/api/reviews/:id", function(req, res) {
  // id refers to the id of the coffee being reviewed

  // create new review in db
  db.User.create({
    user_name: req.body.user_name
  }).then(function(newUser){
    db.Review.create({
    review_text:         req.body.review,
    rating:              req.body.rating,
    UserId:              newUser.id,
    CoffeeId:            res.param.id
    }).then(function(newReview){
      console.log(newReview);
    });
  });
});

// Export routes for server.js to use.
module.exports = router;


