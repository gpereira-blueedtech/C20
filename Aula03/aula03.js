console.clear();
const prompt = require('prompt-sync')();

let num1 = 20;
let num2 = 30;
let num3 = 50;

// // Ao usar o operador lógico &&, eu preciso que TODAS as condições sejam verdadeiras
// // Não importa quantas condições eu tenha, se apenas uma for falsa, o resultado final é FALSO
// console.log(num1 > num2 && num1 < num3 && num1 > 0);

// // Ao usar o operador lógico ||, eu preciso que APENAS UMA condição seja verdadeira
// // Não importa quantas condições eu tenha, se apenas uma for verdadeira, o resultado final é VERDADEIRO
// console.log(num1 > num2 || num1 > num3 || num1 < 0);


// console.log(num1 > num2 || num1 > num3 && num1 < 0) ;
//             // true         false           false 


// num1 = 20;
// num2 = 30;

// // Obrigatóriamente ele vai cair em UM dos dois casos
// // É impossível ser verdadeiro e falso ao mesmo tempo, 
// // assim como é impossível não ser verdadeiro nem falso
// if (num1 >= num2){
//     console.log('É verdadeiro.');
// } else {
//     console.log('É falso.');
// }


let dinheiro = 5;


// As duas condições são verdadeiras, mas ele só vai testar a segunda, se a primeira for falsa
// Ou seja, apenas uma será executada, e ele só continua os testes enquanto elas forem falsas
// Assim que achar a primeira condição verdadeira, ele executa o código, para os testes e sai do bloco de if
if (dinheiro > 50){
    console.log('Vou fazer churrasco');
} else if (dinheiro > 10){
    console.log('Tomar cerveja em casa');
} else {
    console.log('Aí complica.');
}


// // Aqui as duas condições também são verdadeiras, mas como cada uma está em um if separado
// // As duas serão testadas, então ambas são executadas.
// if (dinheiro > 50){
//     console.log('Vou fazer churrasco');
// }

// if (dinheiro > 10){
//     console.log('Tomar cerveja em casa');
// }



console.log('Saiu da condicional.');

console.log();