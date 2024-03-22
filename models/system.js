const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('System', {
    id: {
      type: DataTypes.BIGINT,
      allowNull: true,
      primaryKey: true
    },
    setting: {
      type: DataTypes.JSON,
      allowNull: true,
      comment: "系统配置"
    }
  }, {
    sequelize,
    tableName: 'system',
    timestamps: false
  });
};
