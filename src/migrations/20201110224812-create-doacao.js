'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('doacaos', {
      id_doacao: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      id_doador: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
          model:'doador',
          key: 'id_doador'
        }
      },
      descricao: {
        type: Sequelize.STRING(100)
      },
      data: {
        type: Sequelize.DATE
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
    await queryInterface.dropTable('doacaos');
  }
};