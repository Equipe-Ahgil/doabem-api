'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class recebe extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      recebe.belongsTo(models.beneficiario, {
        foreignKey: 'id_beneficiario'
      })
      recebe.belongsTo(models.item, {
        foreignKey:'id_item'
      })
    }
  };
  recebe.init({
    id_item: DataTypes.INTEGER,
    id_beneficiario: DataTypes.INTEGER,
    quantidade: DataTypes.INTEGER,
    valor: DataTypes.DECIMAL
  }, {
    sequelize,
    modelName: 'recebe',
  });
  return recebe;
};