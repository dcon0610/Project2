// const Sequelize = require("sequelize");
// const sequelize = require("../config/connection.js");
// // const db = require("./index.js")

// blend_name: Sequelize.STRING,
    // brand: Sequelize.STRING,
    // coffee_description: Sequelize.TEXT,
    // price: Sequelize.DECIMAL(10,2),
    // grams: Sequelize.INTEGER,
    // img: Sequelize.STRING
    
module.exports = function(sequelize, DataTypes){
  var Coffee = sequelize.define("Coffee", {
    

    blend_name: DataTypes.STRING,
    brand: DataTypes.STRING,
    coffee_description: DataTypes.STRING,
    price: DataTypes.DECIMAL(10,2),
    weight_grams: DataTypes.INTEGER,
    img: DataTypes.STRING
    });
    return Coffee;
  };


  
  // // Syncs with DB
  // Coffee.sync();
  
  