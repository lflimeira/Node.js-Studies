const fs = require("fs");

const file = 'teste.txt';
const data = '\nby Felipe';
const encoding = 'utf8';
const callback = (err) => {
	if (err) {
		throw err;
	}
	console.log('Adicionado conteúdo novo!');
}

// Async
fs.appendFile(file, data, callback);

// Sync
//fs.appendFileSync(file, data);

console.log('Final da execução');