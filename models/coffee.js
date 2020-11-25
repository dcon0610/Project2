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
        img: {
            type: DataTypes.STRING,
            defaultValue: "https://res.cloudinary.com/dw7h2b2j3/image/upload/v1606298876/default_coffee_dsebfg.jpg"
        }
    });
    Coffee.associate = (models) => {
        Coffee.hasMany(models.Review);
    };
    return Coffee;
}