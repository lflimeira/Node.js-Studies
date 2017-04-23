'use strict';

const util = require('util');
const express = require('express');
const app = express();

app.get('/user/:id/:name/:email/:cpf', (req, res) => {
    const id = req.params.id;
    console.log('o id é ' + id);
    let params = JSON.stringify(req.params);
    if(util.isObject(req.params)){
        console.log('é um objeto ');
    }
    console.log('os params são ' + params);
    res.json(req.params);
});

app.listen(3000, function () {
  console.log('Servidor rodando em locahost:3000');
});