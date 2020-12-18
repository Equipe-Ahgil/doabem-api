// const beneficiario = require('../models/beneficiario')

const Beneficiario = require('../models').Beneficiario

module.exports = {
  create(req, res) {
    return Beneficiario
      .create({
        cpf, nome, data_nascimento, sexo, rg, org_expedidor, telefone, email, cep, logradouro, complemento, numero, bairro, cidade, estado, pais, desc_caso, video, coordenada_x, coordenada_y, conta_banc, agencia_banc, banco: req.body,
      })
      .then(beneficiario => res.status(201).send(beneficiario))
      .catch(error => res.status(400).send(error))
  },
}

// exports.listAll = (req, res) => {
//   Beneficiario.findAll({
//     include:doador}).then(beneficiarios => {
//       res.send(beneficiarios)
//     }).catch(err => {
//       res.send(err)
//     })
// }

// module.exports = {
//   async list(req, res) {
//     try {
//       const beneficiarios = await Beneficiario.findAll()
//       return res.json(beneficiarios);
//     } catch (err) {
//       return console.error("Erro na listagem: ", err)
//     }
//   },
//   async show(req, res) {
//     try {
//       const beneficiario = await Beneficiario.findAll({ where: { id: req.params.id } })
//       return res.json(beneficiario)
//     } catch (err) {
//       return console.err("Erro na busca: ", err)
//     }
//   },
//   async create(req, res) {
//     const { cpf, nome, data_nascimento, sexo, rg, org_expedidor, telefone, email, cep, logradouro, complemento, numero, bairro, cidade, estado, pais, desc_caso, video, coordenada_x, coordenada_y, conta_banc, agencia_banc, banco } = req.body
//     try {
//       const beneficiario = await Beneficiario.create({ cpf, nome, data_nascimento, sexo, rg, org_expedidor, telefone, email, cep, logradouro, complemento, numero, bairro, cidade, estado, pais, desc_caso, video, coordenada_x, coordenada_y, conta_banc, agencia_banc, banco })
//       return res.json(beneficiario)
//     } catch (error) {
//       return console.error("Erro na criação", err)
//     }
//   },
//   async update(req, res) {
//     const Sequelize = require("sequelize")
//     const Op = Sequelize.Op;
//     const { cpf, nome, data_nascimento, sexo, rg, org_expedidor, telefone, email, cep, logradouro, complemento, numero, bairro, cidade, estado, pais, desc_caso, video, coordenada_x, coordenada_y, conta_banc, agencia_banc, banco } = req.body
//     const id = req.params.id
//     try {
//       await Beneficiario.update(
//         { cpf, nome, data_nascimento, sexo, rg, org_expedidor, telefone, email, cep, logradouro, complemento, numero, bairro, cidade, estado, pais, desc_caso, video, coordenada_x, coordenada_y, conta_banc, agencia_banc, banco },
//         { where: { id: { [Op.eq]: id } } }
//       );
//       return res.json({ msg: `Beneficiário ${nome} atualizado com sucesso!` })
//     } catch (error) {
//       return res.json({ msg: `Beneficiário ${nome} não foi atualizado` }, err)
//     }
//   },
//   async delete(req, res) {
//     try {
//       await Beneficiario.destroy({ where: { id: req.params.id } });
//       return res.json({
//         msg: `Exclusão de beneficiário de ID ${req.params.id} feita com sucesso!`,
//       });
//     } catch (err) {
//       return console.err("Erro na exclusão: ", err)
//     }
//   },
// }
