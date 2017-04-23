const mongoose = require('mongoose');

const Schema =  mongoose.Schema;
const _schema = {
    name: String,
    description: String,
    type: String,
    attack: Number,
    defense: Number,
    height: Number
};

const PokemonSchema = new Schema(_schema);
const Pokemon = mongoose.model('Pokemon', PokemonSchema);
const query = {_id : '58c5da633e523c34384b6e0b'};

Pokemon.remove(query, function(err, data){
    if (err) {return console.log('ERRO: ', err);}
    return console.log('Deletou: ', data);

});