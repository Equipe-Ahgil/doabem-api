'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Doacao extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  };
  Doacao.init({
    Id_Doacao: DataTypes.INTEGER,
    Id_Doador: DataTypes.INTEGER,
    Descricao: DataTypes.STRING,
    Data: DataTypes.DATE
  }, {
    sequelize,
    modelName: 'Doacao',
  });
  return Doacao;
};