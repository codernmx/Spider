var DataTypes = require("sequelize").DataTypes;
var _Articles = require("./articles");
var _Programmes = require("./programmes");
var _System = require("./system");
var _User = require("./user");

function initModels(sequelize) {
  var Articles = _Articles(sequelize, DataTypes);
  var Programmes = _Programmes(sequelize, DataTypes);
  var System = _System(sequelize, DataTypes);
  var User = _User(sequelize, DataTypes);


  return {
    Articles,
    Programmes,
    System,
    User,
  };
}
module.exports = initModels;
module.exports.initModels = initModels;
module.exports.default = initModels;
