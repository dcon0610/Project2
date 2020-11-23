var express = require("express");

var router = express.Router();

// load models eg db.Coffee
var db = require("../models");

console.log(coffee)

// Create all our routes and set up logic within those routes where required.
router.get("/", function(req, res) {

  // get data for coffees from db
  db.Coffee.findAll().then(function(dbCoffees){
    console.log(dbCoffees);
  })

  var hbsObject = {
  //   review:[
  //     {id: 1, userName: 'David', reviewBody: 'this is an awesome coffee', rating:3},
  //     {id: 2, userName: 'Nick', reviewBody: 'this is an awesomer coffee', rating: 4},
  //     {id: 3, userName: 'Daniel', reviewBody: 'this is an awesomer coffee', rating: 5}
  
  
  
  // ],




      coffee: [ 
        {blendName: "Instant", brandname: "B3", description: "yummy", averageRating: "4", price: 40, grams: 100, review:[
          {id: 1, userName: 'David', reviewBody: 'this is an awesome coffee', rating:3}]},
        {blendName: "Arabica", brandname: "B3", description: "yummy", averageRating: "4", price: 60, grams: 100, 
          review:[{id: 2, userName: 'David', reviewBody: 'this is an awesomer coffee', rating: 4},
          {id: 2, userName: 'David', reviewBody: 'this is an awesomer coffee', rating: 4},{id: 2, userName: 'David', reviewBody: 'this is an awesomer coffee', rating: 4},{id: 2, userName: 'David', reviewBody: 'this is an awesomer coffee', rating: 4}]},
        {blendName: "New Coffee", brandname: "B3", description: "yummy", averageRating: "4", price: 40, grams: 100, review:[ {id: 2, userName: 'Nick', reviewBody: 'this is an awesomer coffee', rating: 4}]},
        {blendName: "Stale Coffee", brandname: "B3", description: "yummy", averageRating: "4", price: 40, grams: 100, review:[ {id: 2, userName: 'Daniel', reviewBody: 'this is an awesomer coffee', rating: 4}]}

      ],

  }

    console.log(hbsObject)

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


