module.exports = function(sequelize, DataTypes){
    var Coffee = sequelize.define("Coffee", {
        blend_name: DataTypes.STRING,
        brand: DataTypes.STRING,
        coffee_description: DataTypes.TEXT,
        price: DataTypes.INTEGER.UNSIGNED,
        weight_grams: {
            type: DataTypes.INTEGER.UNSIGNED,
            allowNull: false
        },
        img: DataTypes.STRING
    });
    Coffee.associate = (models) => {
        Coffee.hasMany(models.Review);
    };
    return Coffee;
}