const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('User', {
    userId: {
      autoIncrement: true,
      type: DataTypes.BIGINT,
      allowNull: false,
      primaryKey: true,
      comment: "用户id"
    },
    openid: {
      type: DataTypes.STRING(100),
      allowNull: true,
      comment: "小程序用户id"
    },
    username: {
      type: DataTypes.STRING(500),
      allowNull: true,
      comment: "用户名"
    },
    role: {
      type: DataTypes.INTEGER.UNSIGNED,
      allowNull: true,
      defaultValue: 2,
      comment: "用户类型 1 管理员 2 客户"
    },
    password: {
      type: DataTypes.STRING(100),
      allowNull: true,
      comment: "密码"
    }
  }, {
    sequelize,
    tableName: 'user',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "userId" },
        ]
      },
    ]
  });
};
