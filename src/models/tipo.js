'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class tipo extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  };
  tipo.init({
    id_tipo: DataTypes.INTEGER,
    id_categoria: DataTypes.INTEGER,
    descricao: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'tipo',
  });
  return tipo;
};