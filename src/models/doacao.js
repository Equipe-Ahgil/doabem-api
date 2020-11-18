'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class doacao extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  };
  doacao.init({
    id_doacao: DataTypes.INTEGER,
    id_doador: DataTypes.INTEGER,
    descricao: DataTypes.STRING,
    data: DataTypes.DATE
  }, {
    sequelize,
    modelName: 'doacao',
  });
  return Doacao;
};