'use strict';

const express = require('express');
const router = express.Router();
const PokemonModel = require('./model');

const callback = function(err,data,res){
    if (err) {
        return console.log('ERRO: ', err);
    }
    return res.json(data);
}

router.get('/', function(req, res, next) {
    const query = {};
    PokemonModel.find(query, (err, data) => {
        callback(err,data,res);
    });
});

router.post('/', function(req, res, next) {
    const body = req.body;
    const poke = new PokemonModel(body);
    poke.save((err, data) => {
        callback(err,data,res);
    });
});

router.get('/json', function(req, res, next) {
  res.json({ title: 'Estudos Node.js' });
});

module.exports = router;
