'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('beneficiarios', {
      id_beneficiario: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      cpf: {
        type: Sequelize.STRING(11)
      },
      nome: {
        type: Sequelize.STRING(30)
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
      telefone: {
        type: Sequelize.STRING(10)
      },
      email: {
        type: Sequelize.STRING(20)
      },
      cep: {
        type: Sequelize.STRING(8)
      },
      logradouro: {
        type: Sequelize.STRING(50)
      },
      complemento: {
        type: Sequelize.STRING(50)
      },
      numero: {
        type: Sequelize.CHAR(5)
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
      desc_caso: {
        type: Sequelize.STRING(200)
      },
      video: {
        type: Sequelize.STRING(25)
      },
      coordenada_x: {
        type: Sequelize.STRING(20)
      },
      coordenada_y: {
        type: Sequelize.STRING(20)
      },
      conta_banc: {
        type: Sequelize.STRING(10)
      },
      agencia_banc: {
        type: Sequelize.STRING(10)
      },
      banco: {
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
    await queryInterface.dropTable('beneficiarios');
  }
};