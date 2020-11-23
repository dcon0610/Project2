module.exports = function(sequelize, DataTypes){
    var Review = sequelize.define("Review", {
        review_text: DataTypes.TEXT,
        rating: {
            type: DataTypes.DECIMAL(3, 2).UNSIGNED,
            allowNull: false,
            defaultValue: 0
        },
        // foreign keys
        user_id: {
            type: DataTypes.INTEGER,
            references: {
              // This is a reference to another model
              model: User,
              // This is the column name of the referenced model
              key: 'id',
            }
        },

        coffe_id: {
            type: DataTypes.INTEGER,
            references: {
              // This is a reference to another model
              model: Coffee,
              // This is the column name of the referenced model
              key: 'id',
            }
        }
    });
    return Review;
}