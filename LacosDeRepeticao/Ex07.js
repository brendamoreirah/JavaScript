//g. Mostrar tabuada de um número(Use o for)

var prompt = require('prompt-sync')();
 
let numero = prompt("Digite um numero:");
numero = (numero);

for (let i = 1; 1<= 10; i++){
    console.log(numero, "x", i, "=" , (numero * i));
}