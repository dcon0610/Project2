const Sequelize = require("sequelize");
const sequelize = require("../config/connection.js");

var Coffee = sequelize.define("coffees", {
    blend_name: Sequelize.STRING,
    brand: Sequelize.STRING,
    coffee_description: Sequelize.TEXT,
    price: Sequelize.DECIMAL(10,2),
    grams: Sequelize.INTEGER,
    img: Sequelize.STRING
  }, {
    freezeTableName: true
  });
  
  // Syncs with DB
  Coffee.sync();
  
  // Makes the Character Model available for other files (will also create a table)
  module.exports = Coffee;
  