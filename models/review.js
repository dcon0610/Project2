// const Sequelize = require("sequelize");
// const sequelize = require("../config/connection.js");
// const Coffee = require("./Coffee.js");
// const User = require("./Coffee.js");

// var Review = sequelize.define("reviews", {
//     rating: Sequelize.DECIMAL(10, 2).UNSIGNED,
//     review_text: Sequelize.TEXT,
//   }, {
//     freezeTableName: true
//   });
  
// //   add foreign key
// Review.belongsTo(Coffee); //coffeesId
// Review.belongsTo(User);

//   // Syncs with DB
// //   Review.sync();
  
//   // Makes the Coffee Model available for other files (will also create a table)
//   module.exports = Review;