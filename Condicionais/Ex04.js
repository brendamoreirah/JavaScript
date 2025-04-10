//Verificar se uma senha digitada está correta

var prompt = require('prompt-sync')();
let senha =141107

let senhaDigitada = prompt("Digite sua senha:");

if(senhaDigitada == senha){
    console.log("Senha correta")
}else{
    console.log("Senha incorreta")
};

