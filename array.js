//array literala
let pessoas = ['wodson', 'junior', 'simone']; 

pessoas.push('joao') //adiciona um elemento na lista
pessoas.unshift('maria') //adicona um elemento no inicio da lista

pessoas.sort(); //ordena os itens da sua lista
pessoas.reverse(); //inverte a ordem da lista

pessoas.pop(); //remove o ultimo item da lista
pessoas.shift(); //remove o primeiro item da lista

pessoas.splice(1,0,'thalia','nayara') // anda nas possições do array 0* não faz nada com a lista
pessoas.splice(2,1,'sophia') //1* deleta o item da lista
//pessoas.splice(1,3);

pessoas.join(';'); //junta os campos pelo caractere selecionado

let frutas = 'uva pera maça banana';
frutas = frutas.split(' '); // transforma uma string em lista

//console.dir(Array.prototype)