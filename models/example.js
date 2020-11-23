module.exports = function(sequelize, DataTypes){
    var Example = sequelize.define("Example", {
        email: DataTypes.STRING,
        password: DataTypes.STRING
    });
    return Example;
}