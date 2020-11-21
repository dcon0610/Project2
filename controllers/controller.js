var express = require("express");

var router = express.Router();

// Import the model (cat.js) to use its database functions.
var coffee = require("../models/Coffee.js");


// Create all our routes and set up logic within those routes where required.
router.get("/", function(req, res) {

  
  coffee.findAll(function(data) {
    var hbsObject = {
      coffee: data
    };
    console.log(hbsObject);
 


     res.render("index", hbsObject);

    })
 

});

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


