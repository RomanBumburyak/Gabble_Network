'use strict';
module.exports = function(sequelize, DataTypes) {
  var likes = sequelize.define('likes', {
    userid: DataTypes.INTEGER,
    messages: DataTypes.INTEGER
  }, {});
};


  likes.associate = function(models) {
      likes.belongsTo(models.user, {
        as: "Users",
        foreignKey: "userId"
      })
      likes.belongsTo(models.messages, {
        as: "messages",
        foreignKey: "messagesId"
      })
    }

  return likes;
