//Verificar senha com tentativa até acertar(Use o While)

var prompt = require('prompt-sync')();

let senha= 141107;
let senhaDigitada=Number(prompt("Digite sua senha"));

while(senhaDigitada != senha){
    console.log("Tente novamente")
    senhaDigitada = prompt("Digite sua senha:")
}

console.log("Sua senha esta correta",  senha);