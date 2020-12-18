'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class usuario extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      usuario.belongsTo(models.classificacao, {
        foreignKey: 'id_classificacao'
      })
    }
  };
  usuario.init({
    login: DataTypes.STRING,
    id_classificacao: DataTypes.INTEGER,
    nome: DataTypes.STRING,
    senha: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Usuario',
    tableName: 'usuarios',
    underscored: false,
    timestamps: true
  });
  return usuario;
};