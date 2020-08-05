const express = require('express')
const app = express()
const port = 3000
const bodyParser = require('body-parser')

app.use(bodyParser.json());

app.get('/', (req, res) => {
    console.log('GET /')
    console.log('Headers:')
    console.log(req.headers['connection'])
    res.header('location', 'http://dicasdeprogramacao.com.br/')
    res.status(307).send()
})

app.post('/clientes', (req, res) => {
    console.log('POST /', req.body)
    res.send('OK')
})

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
})