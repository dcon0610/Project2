module.exports = function(sequelize, DataTypes){
    var User = sequelize.define("User", {
        user_name: DataTypes.STRING
    });
    User.associate = (models) => {
        User.hasMany(models.Review);
    };
    return User;
}