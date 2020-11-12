// const Usuario = require('../models').Usuario

// exports.getAll = (req, res) => {
//     Usuario.findAll().then(usuarios => {
//         res.send(usuarios)
//     }).catch(error => {

//     }) 
// }

// exports.createOne = (req, res) => {
//     console.log(Usuario)
//     const { nome, email } = req.body
//     Usuario.create({nome, email}).then(usuario => {
//         res.send(usuario)
//     }).catch(error => {
//         res.send(error)
//     })
// }

exports.listAll = (req, res) => {
    let usuarios = [
        {
            nome: 'teste 01',
            email: 'teste@gmail.com'
        },
        {
            nome: 'teste 02',
            email: 'teste2@gmail.com'
        }
    ]
    res.send(usuarios)
}

exports.createOne = (req, res) => {
    let response = {
        message: 'Usuário criado com sucesso',
        data: req.body
    }
    res.send(response)
}