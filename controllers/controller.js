var express = require("express");

var router = express.Router();

// Import the model (cat.js) to use its database functions.
//using mock data atm; uncomment when sequelize is working
var coffee = require("../models/Coffee.js");
console.log(coffee)

// Create all our routes and set up logic within those routes where required.
router.get("/", function(req, res) {

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


