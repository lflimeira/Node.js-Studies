const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const _schema = {
    pokemons: [{type: Schema.Types.ObjectId, ref: 'pokemons'}]
}

const pokemonSchema = new Schema(_schema);

const data = {
    pokemons: ['58af9f2d147575ba5cc5571b','58af9e84147575ba5cc5571a']
};

const Model = mongoose.model('mypokemons', pokemonSchema);
const poke = new Model(data);
poke.save(function(err, data){
    if (err) {
        return console.log('ERRO: ', err);
    }
    console.log('Inseriu: ', data);
});

module.exports = pokemonSchema;