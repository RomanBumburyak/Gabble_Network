'use strict';
module.exports = function(sequelize, DataTypes) {
  var user = sequelize.define('user', {
    displayname: DataTypes.STRING,
    username: DataTypes.STRING,
    password: DataTypes.STRING
  }, {});

  user.associate = function(models) {
      user.hasMany(models.user, {
        as: "likes",
        foreignKey: "userId"
      })
      user.hasMany(models.messages, {
        as: "messages",
        foreignKey: "messages"
      })
    }




  return user;
};
