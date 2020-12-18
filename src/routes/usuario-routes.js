module.exports = function(app) {
    const usuarios = require('../controllers/usuarios-controller')
    app.route('/usuarios')
        .get(usuarios.getAll)
        .post(usuarios.createOne)
}

// const beneficiariosController = require('../controllers/beneficiariosController')

// const express = require('express')
// const router = express.Router()

// const BeneficiariosController = require('../controllers/beneficiarios-controller')


// router.get('/beneficiarios', BeneficiariosController.list)
// router.get('/beneficiarios/:id', BeneficiariosController.show)
// router.post('/beneficiarios', BeneficiariosController.create)
// router.put('/beneficiarios/:id', BeneficiariosController.update)
// router.delete('/beneficiarios/:id', BeneficiariosController.delete)

// module.exports = router

// const beneficiariosController = require('../controllers').beneficiarios

// module.exports = (app) => {
//     app.get('/', (req, res) => res.status(200).send({
//         message: 'DoaBem API'
//     }))

//     app.post('/beneficiarios', beneficiariosController.create)
// }
