'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class beneficiario extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      beneficiario.hasMany(models.necessita)
      beneficiario.hasMany(models.recebe)
    }
  };
  beneficiario.init({
    id_beneficiario: DataTypes.INTEGER,
    cpf: DataTypes.STRING,
    nome: DataTypes.STRING,
    data_nascimento: DataTypes.DATE,
    sexo: DataTypes.CHAR,
    rg: DataTypes.STRING,
    org_expedidor: DataTypes.STRING,
    telefone: DataTypes.STRING,
    email: DataTypes.STRING,
    cep: DataTypes.STRING,
    logradouro: DataTypes.STRING,
    complemento: DataTypes.STRING,
    numero: DataTypes.CHAR,
    bairro: DataTypes.STRING,
    cidade: DataTypes.STRING,
    estado: DataTypes.CHAR,
    pais: DataTypes.STRING,
    desc_caso: DataTypes.STRING,
    video: DataTypes.STRING,
    coordenada_x: DataTypes.STRING,
    coordenada_y: DataTypes.STRING,
    conta_banc: DataTypes.STRING,
    agencia_banc: DataTypes.STRING,
    banco: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'beneficiario',
  });
  return beneficiario;
};