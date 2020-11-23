'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class fidelizadopf extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      fidelizadopf.belongsTo(models.doador, {
        foreignKey: 'id_doador'
      })
    }
  };
  fidelizadopf.init({
    cpf: DataTypes.CHAR,
    id_doador: DataTypes.INTEGER,
    nome: DataTypes.STRING,
    data_nascimento: DataTypes.DATE,
    sexo: DataTypes.CHAR,
    rg: DataTypes.STRING,
    org_expedidor: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'fidelizadopf',
  });
  return fidelizadopf;
};