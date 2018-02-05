console.log ('==> funcoes <==');

//expressão de função nomeada
function saudacao(){
    let msg = 'boa noite';

    return msg
}

//expressão de função anonima

let mensagem = function(){
    let txt = 'bem vindo';
    
    
    return txt;
}

//let soma = function(a,b){
  //  return a + b || a || b || 0;
//}

let soma = function(){

    let total = 0;

    for(let i = 0; i < arguments.length; i++){
        total = total + arguments[i];
    }

    return total;
}




