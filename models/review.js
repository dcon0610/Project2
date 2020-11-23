
module.exports = function(sequelize, DataTypes){
    
    var Review = sequelize.define("Review", {
        review_text: DataTypes.TEXT,
        rating: {
            type: DataTypes.DECIMAL(3, 2).UNSIGNED,
            allowNull: false,
            defaultValue: 0
        },

    });
    Review.associate = (models) => {
        // {foreignKey: 'ID', as: 'coffee_id'}
        Review.belongsTo(models.Coffee);
        Review.belongsTo(models.User);
      };
    
    return Review;
}