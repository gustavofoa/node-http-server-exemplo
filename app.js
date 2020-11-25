const express = require('express')
const app = express()
const port = 3000
const bodyParser = require('body-parser');

app.use(bodyParser.json());


var clientes = [{
    id: 1,
    nome: 'Gustavo',
    email: 'gustavo@academiadoprogramador.com.br'
},{
    id: 2,
    nome: 'João',
    email: 'joao@academiadoprogramador.com.br'
},{
    id: 3,
    nome: 'Maria',
    email: 'maria@academiadoprogramador.com.br'
},{
    id: 2,
    nome: 'Maria',
    email: 'maria@academiadoprogramador.com.br'
}];


//listar
app.get('/clientes', (req, res) => {

    res.json(clientes);

})

//listar
app.get('/clientes/:idCliente', (req, res) => {

    const cliente = {
        id: req.params.idCliente,
        nome: 'Gustavo',
        email: 'gustavo@academiadoprogramador.com.br',
        telefone: '(11) 95486-5484',
        endereco: 'Rua das flores, 2345 - Bairro do João - Jacareí'
    };

    res.json(cliente);

})

//cadastrar
app.post('/clientes', (req, res) => {
    const cliente = req.body;

    clientes.push(cliente);

    res.sendStatus(201);
})

//atualizar
app.put('/clientes/:idCliente', (req, res) => {

    for(i=0; i < clientes.length; i++){
        if(clientes[i].id == req.params.idCliente){
            if(req.body.nome)
                clientes[i].nome = req.body.nome;
            if(req.body.email)
            clientes[i].email = req.body.email;
            res.sendStatus(200);
            return;
        }
    }

    res.sendStatus(404);

})

//excluir
app.delete('/clientes/:idCliente', (req, res) => {

    //clientes.splice(i, 1);
    const tamanhoAntes = clientes.length
    clientes = clientes.filter(cliente => cliente.id != req.params.idCliente);

    if(tamanhoAntes > clientes.length)
        res.sendStatus(200);
    else
        res.sendStatus(404);

})

app.listen(port, () => {
    console.log("O servidor está rodando...",);
})