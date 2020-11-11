exports.listAll = (req, res) => {
    let usuarios = [
        {
            nome: 'Samuel',
            email: 'Samuel@teste.com.br'
        }
    ]
    res.send(usuarios)
}