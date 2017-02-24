// hello-world.js

var http = require('http');

var server = http.createServer(
	function(request, response){

		response.writeHead(200, {'Content-Type':'text/html'});
		response.write('<h1>Hello World!!! Sou foda!!!</h1>');
		//response.end();  Se comentar o end ele continua 
		//enviando dados para a pagina sem usar socket;
		response.end();
	}
)

server.listen(3000, 
	function(){
		console.log('Servidor rodando em localhost:3000');
	}
);