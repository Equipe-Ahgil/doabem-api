exports.listAll = (req, res) => {
    let usuarios = [
        {
            nome: 'Samuel',
            email: 'Samuel@teste.com.br'
        }
    ]
    res.send(usuarios)
}

exports.createOne = (req, res) => {
    let response = {
        message : 'Usuario Criado',
        data: req.body
    }
    res.send(response)
}