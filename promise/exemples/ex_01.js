'use strict';

const readFile = require('../modules/fs-promise');

readFile('../resources/persons.json').then(
    function(data) {
        success(data);
    }
).catch(
    function(err) {
        error(err);
    }
);

readFile('../resources/perso.json').then(success, error);

function success(data) {
    console.log(data);
}

function error(err) {
    console.error(err);
}
