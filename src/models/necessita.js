'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class necessita extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  };
  necessita.init({
    id_beneficiario: DataTypes.INTEGER,
    id_tipo: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'necessita',
  });
  return necessita;
};