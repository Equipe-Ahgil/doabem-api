const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')

const app = express()

app.use(cors())

app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json())

require('../src/routes/usuario-routes')(app)
app.get('*', (req, res) => res.status(200).send({
    message: 'O início'
}))
// routes(app)

// app.route('/')
//     .get((req, res) => {
//         res.send('API DoaBem')
//     })

const usuarios = require('./routes/usuario-routes')
    
app.use('/', usuarios)

module.exports = app
