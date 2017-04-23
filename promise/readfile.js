'use strict';

const fs = require('fs');

fs.readFile('./resources/persons.json', 'utf-8', function (err, file) {
	if (!err) { console.log(file); }
	else{ throw err;}
});