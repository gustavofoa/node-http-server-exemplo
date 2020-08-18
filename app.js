const express = require('express')
const app = express()
const port = 3000
const bodyParser = require('body-parser')
const cors = require('cors')

app.use(bodyParser.json());

app.use(cors())

app.get('/', (req, res) => {
    console.log('GET /', req.headers)
    console.log('Headers:')
    console.log(req.headers['connection'])
    res.header('location', 'http://dicasdejavascript.com.br/')
    res.status(307).send()
})

app.post('/clientes', (req, res) => {
    console.log('POST /clientes', req.body)
    console.log("tem email? ", req.body['email'])
    if(!req.body['email']){
        res.status(400).send("O email é obrigatório.")
    } else {
        res.json('{"nome":"Gustavo"}')
    }
})

app.listen(port, () => {
    console.log(`Rodando aplicação no endereço http://localhost:${port}`)
})