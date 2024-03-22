const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('Programmes', {
    programmeId: {
      autoIncrement: true,
      type: DataTypes.BIGINT,
      allowNull: false,
      primaryKey: true
    },
    nameCn: {
      type: DataTypes.STRING(500),
      allowNull: true
    },
    nameEn: {
      type: DataTypes.STRING(500),
      allowNull: true
    },
    parentId: {
      type: DataTypes.BIGINT,
      allowNull: true
    },
    type: {
      type: DataTypes.INTEGER,
      allowNull: true,
      comment: "栏目类型 1 头部 2 侧边 3 二级"
    },
    components: {
      type: DataTypes.STRING(500),
      allowNull: true,
      comment: "组件"
    },
    createTime: {
      type: DataTypes.DATE,
      allowNull: false,
      defaultValue: Sequelize.Sequelize.literal('CURRENT_TIMESTAMP')
    },
    language: {
      type: DataTypes.STRING(10),
      allowNull: false,
      comment: "语言"
    },
    sort: {
      type: DataTypes.BIGINT,
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'programmes',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "programmeId" },
        ]
      },
    ]
  });
};
