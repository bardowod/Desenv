console.log ('==> funcoes <==');

//expressão de função nomeada
function saudacao(){
    let msg = 'boa noite';

    return msg
}

//expressão de função anonima

let mensagem = function(){
    let txt = 'bem vindo';
    
    console.log(txt);
    return txt;
}

let soma = function(a,b){

    return a+b;
}

soma();
