const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const _schema = {
    name: String
}

const pokemonSchema = new Schema(_schema);

const PokemonModel = mongoose.model('Pokemon', pokemonSchema)

const id = '58af9e84147575ba5cc5571a';

PokemonModel.findById(id, function(err, data){
    if (err) {
        return console.log('ERRO: ', err);
    }
    return console.log('Buscou: ', data);
});

module.exports = PokemonModel;