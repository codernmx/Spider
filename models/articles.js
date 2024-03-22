const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('Articles', {
    articleId: {
      autoIncrement: true,
      type: DataTypes.BIGINT,
      allowNull: false,
      primaryKey: true
    },
    firstTitle: {
      type: DataTypes.TEXT,
      allowNull: true,
      comment: "一级标题"
    },
    secondaryTitle: {
      type: DataTypes.TEXT,
      allowNull: true,
      comment: "二级标题"
    },
    thirdTitle: {
      type: DataTypes.TEXT,
      allowNull: true,
      comment: "三级标题"
    },
    intro: {
      type: DataTypes.TEXT,
      allowNull: true,
      comment: "简介"
    },
    content: {
      type: DataTypes.TEXT,
      allowNull: true,
      comment: "内容"
    },
    img: {
      type: DataTypes.JSON,
      allowNull: true,
      comment: "图片"
    },
    programmeId: {
      type: DataTypes.BIGINT,
      allowNull: false
    },
    createTime: {
      type: DataTypes.DATE,
      allowNull: false,
      defaultValue: Sequelize.Sequelize.literal('CURRENT_TIMESTAMP')
    },
    language: {
      type: DataTypes.STRING(50),
      allowNull: false,
      comment: "语言"
    },
    author: {
      type: DataTypes.STRING(500),
      allowNull: true,
      comment: "作者"
    }
  }, {
    sequelize,
    tableName: 'articles',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "articleId" },
        ]
      },
    ]
  });
};
