const fs = require('fs');

const file = 'teste.txt';
const data = 'Escrevendo sync no arquivo txt';
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

//Sync
//fs.writeFileSync(file, data);
//console.log('Salvei sync');

console.log('Final da execução');