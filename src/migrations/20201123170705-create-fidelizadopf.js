'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('fidelizadopfs', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      cpf: {
        type: Sequelize.CHAR(11)
      },
      id_doador: {
        type: Sequelize.INTEGER,
        reference: {
          model: 'doador',
          key: 'id'
        }
      },
      nome: {
        type: Sequelize.STRING(50)
      },
      data_nascimento: {
        type: Sequelize.DATE
      },
      sexo: {
        type: Sequelize.CHAR(1)
      },
      rg: {
        type: Sequelize.STRING(10)
      },
      org_expedidor: {
        type: Sequelize.STRING(10)
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
    await queryInterface.dropTable('fidelizadopfs');
  }
};