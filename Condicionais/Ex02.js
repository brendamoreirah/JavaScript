//b. Verificar se o usuário pode tirar carteira de motorista

//Qual sua idade?
//Voce é maior de idade, estao, pode tirar a carteira.
//Se nao for maior de idade voce nao pode tirar sua carteira.

//pessoas maiores de idade(>=18)

let idade = Number(prompt("Olá, digite sua idade:"));

if(idade >= 18){
    console.log("Voce poderá tirar a carteira");
}else if(idade < 18){
    console.log("Voce nao podera tirar a carteira")
}else{
    console.log("Essa informacao nao é válida");
}
