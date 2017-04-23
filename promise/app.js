'use strict';

const promiseAll = require('./modules/promise-all');
const readFile = require('./modules/fs-promise.js');

promiseAll([
    readFile('./resources/persons.json'),
    readFile('./resources/friends.json')
])
.then(res => console.log(res))
.catch(err => console.error(err));