var express = require("express");

var router = express.Router();


// load models eg db.Coffee
var db = require("../models");


// Create all our routes and set up logic within those routes where required.
router.get("/", function(req, res) {

  // get data for coffees from db
  db.Coffee.findAll().then(function(dbCoffees){
    console.log(dbCoffees);
  });

  // get all coffees with reviews
  db.Coffee.findAll({ include: [{
                              model: db.Review,
                              include: [
                                {
                                  model: db.User
                                }
                              ]
                            }]
                          })
    .then(function(dbReviews){
    console.log(JSON.stringify(dbReviews, null, 2));
    });

  var hbsObject = {
  }

   

     res.render("index", hbsObject);

    })
 




router.post("/api/coffees", function(req, res) {
  // create new coffee in db
  db.Coffee.create({
    blend_name:         req.body.blend_name,
    brand:              req.body.brand,
    coffee_description: req.body.coffee_description,
    price:              req.body.price,
    weight_grams:       req.body.grams,
    img:                req.body.img
  }).then(function(dbCoffee){
    console.log(dbCoffee);
  })

});


router.post("/coffee/add-coffee", function(req, res) {


  console.log("received post", req.body)
  const id =  1
  res.json({"working": 24})
    //coffee.create();
  });

//router.put("/api/coffees/:id", function(req, res) {
//   var condition = "id = " + req.params.id;

//   console.log("condition", condition);

//   coffee.update(
//     {
//       sleepy: req.body.sleepy
//     },
//     condition,
//     function(result) {
//       if (result.changedRows === 0) {
//         // If no rows were changed, then the ID must not exist, so 404
//         return res.status(404).end();
//       }
//       res.status(200).end();

//     }
//   );
// });

// Export routes for server.js to use.
module.exports = router;


