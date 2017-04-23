const mongoose = require('mongoose');
const Schema =  mongoose.Schema;

const name = require('./fields/fields-name');
const description = require('./fields/fields-description');
const type = require('./fields/fields-type');
const attack = require('./fields/fields-attack.js');
const defense = require('./fields/fields-defense.js');
const height = require('./fields/fields-height');
const create_at= require('./fields/fields-create_at.js');

const _schema = {
    name,
    description,
    type,
    attack,
    defense,
    height,
    create_at
};

module.exports = new Schema(_schema);