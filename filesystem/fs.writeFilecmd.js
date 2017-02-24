const fs = require('fs');

const file = process.argv[2] || 'teste.txt';
const data = process.argv[3] || 'Escrevendo sync no arquivo txt';
const encoding = 'utf8';
const callback = (err) =>{
	if(err){
		throw err;
	}else{
		console.log('Salvei async!!');
	}
}

//Async
fs.writeFile(file, data, encoding, callback);

console.log('Final da execução');