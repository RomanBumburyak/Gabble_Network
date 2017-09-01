'use strict';
module.exports = function(sequelize, DataTypes) {
  var messages = sequelize.define('messages', {
    userid: DataTypes.INTEGER,
    text: DataTypes.STRING
  }, {
    classMethods: {
      associate: function(models) {
        // associations can be defined here
      }
    }
  });
  return messages;
};