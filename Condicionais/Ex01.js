//erificar se um número é positivo, negativo ou zero.

var prompt = require('prompt-sync')();
let numero = prompt("Olá, digite um numero:");

if(numero < 0){
   console.log("Esse numero é negativo");
}else if(numero >0){
    console.log("Esse numero é positivo");
}else{
    console.log("Esse numero é zero")
}