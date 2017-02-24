'use strict'

function callback(err, result){
	if(err){
		throw new Error(err);
	}
	console.log('Meu nome é '+result);
}

function sayName(name, callback){
	if (typeof name === 'string') {
		callback(null,name);
	}else{
		const err = 'você precisa passar uma String para name';
		callback(err, null);
	}
}

sayName('Luiz Felipe', callback);
sayName(666, callback);