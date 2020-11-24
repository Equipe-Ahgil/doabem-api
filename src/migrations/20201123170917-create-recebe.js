'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('recebes', {
      id_item: {
        allowNull: false,
        primaryKey: true,
        type: Sequelize.INTEGER,
        references: {
          model: 'item',
          key: 'id_item'
        }
      },
      id_beneficiario: {
        allowNull: false,
        primaryKey: true,
        type: Sequelize.INTEGER,
        references: {
          model: 'beneficiario',
          key: 'id_beneficiario'
        }
      },
      quantidade: {
        type: Sequelize.INTEGER
      },
      valor: {
        type: Sequelize.DECIMAL(8,2)
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
    await queryInterface.dropTable('recebes');
  }
};