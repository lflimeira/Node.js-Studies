'use strict';

const Schema = require('./schema');
const Model = require('./model')(Schema, 'pokemons');

const CRUD = {
    create: function (data) {
        Model.create(data,function(err, data){
            if(err){
                return console.log('ERRO: ', err);
            }
            return console.log('Inseriu:', data);
        });
    },
    retrieve: function (query) {
        Model.find(query, function(err, data){
            if (err) {
                return console.log('ERRO: ', err);
            }
            return console.log('Buscou: ', data);
        });
    },
    update: function (query, mod, options) {
        const option = options || {};
        Model.update(query, mod, option, function(err, data){
            if (err) {
                return console.log('ERRO: ', err);
            }
            return console.log('Alterou: ', data);
        });
    },
    delete: function (query) {
        Model.remove(query, function(err, data){
            if (err) {return console.log('ERRO: ', err);}
            return console.log('Deletou: ', data);

        });
    }
};

module.exports = CRUD;