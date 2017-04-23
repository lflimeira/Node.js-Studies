'use strict';

require('./db/config');
const CRUD = require('./pokemon-controller');

const query = {name: /atomincmon/i};
const data = {
    name: 'Atomincmon',
    description: 'Agora vai',
    type: "terra",
    attack: 69,
    defense: 96,
    height: 0.7
};
const mod = { attack: 51 };

const options = {multi: true};

CRUD.delete(query);