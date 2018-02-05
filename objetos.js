//objeto literal 
let carro = {};

//conotação dot notation objeto.propriedade = "valor"
carro.cor = 'branco';
carro.modelo = 'hb20';

//conotação bracket notation objeto['propriedade'] = 'valor'

carro['fabricante'] = 'hyndai';
carro['ano'] = 2015;

//metodos dot notation objeto.metodo = function(){}
carro.ligar = function(){
    return 'carro ligado';
}

//metodo bracket notation objeto['metodo'] = function(){};

carro['desligar'] = function(){return 'carro desligado'};

//objeto literal auto definido
var wodson = {
    nome: 'wodson',
    altura: 1.89,
    andar : function(){return 'pessoa esta andando';},
    falar: function(){return 'wodson vc é pika'},
    dormi: function(){return this.nome + ' esta dormindo'}
};

