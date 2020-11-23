'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('necessita', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      id_beneficiario: {
        type: Sequelize.INTEGER,
        reference: {
          model: 'beneficiario',
          key: 'id'
        }
      },
      id_tipo: {
        type: Sequelize.INTEGER,
        reference: {
          model: 'tipos',
          key: 'id'
        }
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
    await queryInterface.dropTable('necessita');
  }
};