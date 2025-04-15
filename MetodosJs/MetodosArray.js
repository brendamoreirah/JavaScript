// //.length() => tamanho

// let frutas = ["Maca", "Banana", "Kiwi", "Carambola", "Morango", "Ameixa", "Abacaxi", "Abacate", "Jabuticaba", "Roma,",
//     "Seriguela", "Embu", "Caqui", "Uva Verde", "Uva Roxa"
// ];

// console.log(frutas.length);

  //let numeros =[20,5,3]
  //console.log(numeros.lenght);

//-------------//--------------------------------------------------------------------------------------

 //.reverse() -> reverte o nosso array
// let numeros = [70, 100, 120, 1000];

// numeros.reverse();

// console.log(numeros);

//-------------------------//---------------------------------------------------------------------------

// let nomes = ["Brenda", "Clara", "Giovana", "Pamela"];

 //.push() => Adiciona no final
// nomes.push("Valeria");
 
// console.log(nomes);

//.unshift() => adiciona no inicio
// nomes.unshift("yasmin");

// console.log(nomes);

 //.pop() => remover no final

// console.log(nomes.pop());

// console.log(nomes)

//  console.log(nomes.splice(2,1))

  //.shifit() => remove do inicio

//  nomes.shift();
//  console.log(nomes.shift);

//-----------------------------------------------------------------------------------------------------------------
 
// let nomesAnimais = ["Julie", "Meg", "Mel", "Kiara", "Lola", "Sol"];

// //.includes() => Se existe no array, se existir ele retornara true

// console.log(nomesAnimais.includes("Bob"));

//------------------------------------------------------------------------------------------------------------------

// let valores = [30, 55, 90, 66];

// //Quero os valores maiores que 50
// let  maiores = valores.filter(num => num >50);

// console.log(maiores);


//------------------------------------------------------------------------------------------------------------------

//.map() => Definicao: metodo usado em arrays que permite transformar os elementos do arrays original em novos valores. criando um novo array, sem modificar o original

//lista de nomes de alunos e notas
// let alunos = [
//    {nome: "Clara" , nota: 8},
//     {nome: "Laura", nota: 10},
//     {nome: "Brenda", nota: 9},
//     {nome: "Isadora", nota: 7},
//     {nome: "Yasmin", nota: 8},
//     {nome: "Fernanda", nota: 9},
//     {nome: "Isabelle", nota: 9},
//     {nome: "Anna", nota: 9}
// ];
// //lista de nomes
// let alunoNomes = alunos.map(aluno => aluno.nome);

// console.log(alunoNomes);

// 2, Criar um array com mensagens personalizadas
//  let nomes = ["Caio", "Dani", "Ryan", "Vinicius"];

//  //Ola Caio
//  //Ola Dani

//  let mensagens = nomes.map(itemDoArrayNome => `Olá, ${intemDoArrayNomes}`);
// //  let mensagens2 = nomes.map(itemDoArrayNome => `Olá, ${intemDoArrayNomes}`);

// console.log(mensagens);

//3. Pegar apenas os primeiros caracteres de nomes
 
// let nomes = ["Brenda", "Emilly", "Machado", "Guilherme"]
// let inicialNomes = nomes.map(element => element[0]);

// console.log(inicialNomes);

//4.

let emails = [
    "brenda@hotmail.com", "pedro@outlook.com", "isadora@gmail.com"
]

let dominios = emails.map(element => element.split("@")[1]);

console.log(dominios);
    
