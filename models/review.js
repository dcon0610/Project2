
module.exports = function(sequelize, DataTypes){
    
    var Review = sequelize.define("Review", {
        review_text: DataTypes.TEXT,
        rating: {
            type: DataTypes.DECIMAL(3, 2).UNSIGNED,
            allowNull: false,
            defaultValue: 0
        },

    });
    // add foreign keys
    Review.associate = (models) => {
        Review.belongsTo(models.Coffee);
        Review.belongsTo(models.User);
      };
    
    return Review;
}