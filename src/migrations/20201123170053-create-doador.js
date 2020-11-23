'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('doadors', {
      id_doador: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      cep: {
        type: Sequelize.CHAR(8)
      },
      logradouro: {
        type: Sequelize.STRING(50)
      },
      numero: {
        type: Sequelize.CHAR(5)
      },
      complemento: {
        type: Sequelize.STRING(50)
      },
      bairro: {
        type: Sequelize.STRING(20)
      },
      cidade: {
        type: Sequelize.STRING(25)
      },
      estado: {
        type: Sequelize.CHAR(2)
      },
      pais: {
        type: Sequelize.STRING(10)
      },
      telefone: {
        type: Sequelize.STRING(10)
      },
      email: {
        type: Sequelize.STRING(20)
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('doadors');
  }
};