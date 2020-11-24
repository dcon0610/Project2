var express = require("express");
var router = express.Router();

// load models eg db.Coffee
var db = require("../models");

// Create all our routes and set up logic within those routes where required.
router.get("/", function(req, res) {

  // get all coffees
  db.Coffee.findAll({
      include: 
        [{
          model: db.Review,
          raw: true,
          include: 
            [{  model: db.User,
              }]
        }]
    })
    .then(function(dbcoffees){
      let data = [];
      dbcoffees.map(function(coffee){
        data.push(coffee.dataValues);
      })
      // to get reviews:
      // data[i].Reviews: [array] || data[i].Reviews: [array], [array]
      console.log(data);

        var hbsObject ={coffee: data};

        res.render("index", hbsObject);

      

    });

  })




router.post("/api/coffees", function(req, res) {
  // create new coffee in db
  db.Coffee.create({
    blend_name:         req.body.name,
    brand:              req.body.brand,
    coffee_description: req.body.description,
    price:              req.body.price,
    weight_grams:       req.body.grams,
    img:                req.body.img
  }).then(function(dbCoffee){
    console.log(dbCoffee);
  })

});

router.post("/api/reviews/:id", function(req, res) {
  // id refers to the id of the coffee being reviewed

  // create new review in db
  db.User.create({
    user_name: req.body.user_name
  })
    .then(function(newUser){
        db.Review.create({
        review_text:         req.body.review,
        rating:              req.body.rating,
        UserId:              newUser.id,
        CoffeeId:            res.param.id
      })
        .then(function(newReview){
          console.log(newReview);
        })
    })
  

});

// Export routes for server.js to use.
module.exports = router;


