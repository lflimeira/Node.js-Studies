'use strict';

const http = require('http');

const querystring = require('querystring');
const postData = querystring.stringify({
		name: 'Felipe'
	});
const options = {
	host: 'webschool-io.herokuapp.com'
	, method: 'DELETE'
	, path: '/api/pokemons/58853ba8c7364400128f28c2'
	,headers: {
		'Content-Type': 'application/x-www-form-urlencode'
		, 'Content-Length': postData.length
	}
};

function callback(res) {
	console.log('STATUS: ' + res.statusCode);
	console.log('HEADERS: ' + JSON.stringify(res.headers));

	let data = '';

	res.setEncoding('utf8');
	res.on('data', (chunk) => {
		data += chunk;
	});
	res.on('end', () => {
		console.log('Dados finalizados: ', data);
	});
}

const req = http.request(options, callback);

req.on('error', (e) => {
	console.log('ERROOOOO: ' + e.message);
});
req.write(postData);
req.end();
