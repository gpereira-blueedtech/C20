console.clear()
const prompt = require("prompt-sync")();

// let num = 0;

// while (num <= 5) {
//     console.log(num);
//     num++;
// }




// let num = 0;

// while (num <= 10) {
//     num = prompt("Digite um número maior que 10: ");
// }




// let senha = 'Blue123';
// let entrada = prompt('Digite a senha: ');

// while (entrada != senha){
//     console.log('Senha incorreta. Digite novamente');
//     entrada = prompt('Digite a senha: ')
// }





// // Uma validação beeem bacana.
// let resposta = prompt('Digite sua resposta: ').toLowerCase().trim()

// while(resposta  != 'sim' && resposta != 'nao'){
//     console.log('Inválida')
//     resposta = prompt('Digite sua resposta: ')
// }








//      DO... WHILE

// let senha = '';

// // // While convencional. Caso a condição seja falsa desde o início, nunca será executado
// // while (senha !== "Blue") {
// //     senha = prompt("Digite a senha de acesso: ");
// // }

// // No caso do do...while, independente da condição incial, sempre vai ser executado pelo menos uma vez.
// do {
//     senha = prompt("Digite a senha de acesso: ");
// } while (senha != 'Blue');




// //      BREAK

// // A instrução break vai encerrar um ciclo independente da sua condição
// // Assim que ela é executada, o laço é encerrado.
// let senha = '';
// let tentativas = 0;

// do {
//     if (tentativas === 5){
//         console.log("Número limite de tentativas atingido.");
//         break;
//     } 

//     senha = prompt("Digite a senha de acesso: ");
//     tentativas++;
// } while (senha !== "Blue");




//      CONTINUE

// let n = 0;
// let impares = [];

// while (n < 20) {
//     n++;
 
//     if (n % 2 == 0) {
//         continue;
//     }

//     console.log(n);
//     impares.push(n)
// }

// console.log(impares)




/*
Jogo da adivinhação - Escreva um programa que faça o computador “pensar” em um número inteiro
 entre 0 e 10 e peça para o usuário tentar descobrir qual foi o número escolhido pelo computador.
 O programa deve ser repetir até o usuário acertar o número, 
 e a cada palpite deve dizer se o número é maior ou menor que o palpite. 
 No final dele deve escrever na tela que o usuário encontrou o número, 
 e mostrar a quantidade de palpites que foi necessária.
*/

let maximo = +prompt('Até quanto você quer que eu pense? ')
let numPC = Math.ceil(Math.random() * (maximo + 1));
let numUser = +prompt('Qual número eu pensei? ');
let palpites = 1;

while (numUser != numPC){
    console.log('Número errado!');
    if (numUser > numPC){
        console.log(`O número que eu pensei é menor que ${numUser}`);
    } else {
        console.log(`O número que eu pensei é maior que ${numUser}`);
    }
    numUser = +prompt('Qual número eu pensei? ');
    palpites++
}

console.log(`Parabéns! Você encontrou o número: ${numPC}`);
console.log(`Você precisou de ${palpites} palpites.`)


console.log()