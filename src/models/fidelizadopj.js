'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class fidelizadopj extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      fidelizadopj.belongsTo(models.doador, {
        foreignKey: 'id_doador'
      })
    }
  };
  fidelizadopj.init({
    cnpj: DataTypes.CHAR,
    id_doador: DataTypes.INTEGER,
    razaosocial: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'fidelizadopj',
  });
  return fidelizadopj;
};