'use strict';

const express = require('express');
const app = express();

app.get('/user/:name', (req, res) => {
    const name = req.params.name;
    res.send('user name: ' + name );
});

app.listen(3000, function () {
  console.log('Servidor rodando em locahost:3000');
});