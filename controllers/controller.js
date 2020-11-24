var express = require("express");
const { sequelize } = require("../models");
var router = express.Router();

// load models eg db.Coffee
var db = require("../models");

// Create all our routes and set up logic within those routes where required.
router.get("/", function(req, res) {

  // get all coffees
  db.Coffee.findAll({
      // attributes: ['blend_name', 'brand', 'weight_grams', 'price', 
      //           [sequelize.fn('sum', sequelize.col('rating')), ]],
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
      });
      console.log(`review plain test ${JSON.stringify(data[1].Reviews)}`);
      console.log(`review plain test ${(data[1].Reviews)}`);
      console.log(`data values test ${JSON.stringify(data[0].Reviews[0].rating)}`);
      console.log(`review length test ${JSON.stringify(data[0].Reviews.length)}`);
      console.log(`data length test ${JSON.stringify(data.length)}`);

      for (let i = 0; i < data.length; i++){
        let aveRating =0;
        let count = 0;
        for (let j = 0; j < data[i].Reviews.length; j++){
          aveRating += parseFloat(data[i].Reviews[j].rating);
          console.log(`inside loop avRating ${aveRating}`);
          console.log(`inside loop ${(data[i].Reviews[j].rating)}`);
          // aveRating = aveRating + parseInt(JSON.stringify(data[i].Reviews[j].rating)) ;
          count++;
          console.log( `count: ${count}`);
        }
        console.log(`outside loop avRating ${aveRating}`);
        aveRating = aveRating/count;
        console.log( `count: ${count}`);
        console.log(aveRating);

        data[i].rating = aveRating;
        console.log(`data[i].rating ${data[i].rating}`);
      }
      // to get reviews:
      // data[i].Reviews: [array] || data[i].Reviews: [array], [array]
      console.log(data);

        var hbsObject ={coffee: data};

        res.render("index", hbsObject);
    });
  })

 
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


