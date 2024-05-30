var eventos = require('events');

//Atribuição da classe EventEmitter a uma variável 
var EmissorEventos = eventos.EventEmitter;

//Criação de uma instância do EventEmitter variávl:
var ee = new EmissorEventos();

//ou criando direto sem a variável intermedíaria var 
//var ee = new event

ee.on('dados', function(fecha){
    console.log(fecha);
});

//Emissão do evento a cada 500 milisegundos:
setInterval(function(){
    ee.emit('dados', Date.now());
}, 500);