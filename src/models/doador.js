'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class doador extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      doador.hasMany(models.doacao)
      doador.hasOne(models.fidelizadopj)
      doador.hasOne(models.fidelizadopf)
    }
  };
  doador.init({
    id_doador: DataTypes.INTEGER,
    cep: DataTypes.CHAR,
    logradouro: DataTypes.STRING,
    numero: DataTypes.CHAR,
    complemento: DataTypes.STRING,
    bairro: DataTypes.STRING,
    cidade: DataTypes.STRING,
    estado: DataTypes.CHAR,
    pais: DataTypes.STRING,
    telefone: DataTypes.STRING,
    email: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'doador',
  });
  return doador;
};