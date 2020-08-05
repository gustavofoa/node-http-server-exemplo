const express = require('express')
const app = express()
const port = 3000

app.get('/', (req, res) => {
    console.log('GET /')
    console.log('Headers:')
    console.log(req.headers['connection'])
    res.header('location', 'http://dicasdeprogramacao.com.br/')
    res.status(307).send()
})

app.post('/', (req, res) => {
    console.log('POST /')
    res.send('OK')
})

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
})