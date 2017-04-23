'use strict';

const util = require('util');
const express = require('express');
const app = express();

app.get('/user/:email', (req, res) => {
    const id = req.params.id;
    console.log('o id é ' + id);
    let params = util.inspect(req.params);
    console.log('os params são ' + params);
    res.send('user: ' + id );
});

app.listen(3000, function () {
  console.log('Servidor rodando em locahost:3000');
});