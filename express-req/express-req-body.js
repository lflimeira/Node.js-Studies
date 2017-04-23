'use strict';

const fs = require('fs');
const express = require('express');
const app = express();
const bodyParser = require('body-parser');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

app.post('/user', (req, res) => {
    console.log(req.body);
    res.send(req.body);
});

app.get('/', (req, res) => {
    res.set('Content-type', 'text/html');
    fs.createReadStream('./index.html').pipe(res);
});

app.listen(3000, function () {
  console.log('Servidor rodando em locahost:3000');
});

