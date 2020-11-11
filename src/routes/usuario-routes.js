module.exports = function(app) {
    const usuarios = require('../controllers/usuarios-controller')
    app.route('/usuarios')
        .get(usuarios.listAll)
        .post(usuarios.createOne)
}