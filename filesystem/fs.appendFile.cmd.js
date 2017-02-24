const fs = require("fs");
const os = require("os");

const file = process.argv[2] || 'teste.txt';
let data = process.argv[3] || 'by Felipe';
const callback = (err) => {
	if (err) {
		throw err;
	}
	console.log('Adicionado conteúdo novo!');
}

data = os.EOL + data;

// Async
fs.appendFile(file, data, callback);

// Sync
//fs.appendFileSync(file, data);

console.log('Final da execução');