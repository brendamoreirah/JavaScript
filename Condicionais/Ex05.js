//Verificar se um aluno foi aprovado

var prompt = require('prompt-sync')();

let nota =  Number(prompt("Olá, digite sua nota:"));

if(nota >= 7){
    console.log("Voce esta aprovado")
}else if(nota == 6 ){
    console.log("voce está de recuperacao")
}else{
    console.log("Voce esta reprovado")
};