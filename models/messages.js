'use strict';
module.exports = function(sequelize, DataTypes) {
  var messages = sequelize.define('messages', {
    userid: DataTypes.INTEGER,
    text: DataTypes.STRING
  },{});


  messages.associate = function(models) {
      messages.belongsTo(models.user, {
        as: "user",
        foreignKey: "userId"
      })
      messages.belongsTo(models.messages, {
        as: "likes",
        foreignKey: "messagesId"
      })
    }




  return messages;
};
