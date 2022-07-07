console.clear()
const prompt = require("prompt-sync")();


// // Fazendo uma repetição 10 vezes com o While:

// let count = 0;

// while (count < 10){
//     console.log('Repetiu: ', count);
//     count++
//     // Outras formas de adicionar um valor à variável
//     // count += 2
//     // count = count + 2
// }


// // O mesmo resultado, utilizando for:
// // Nesse caso, a delcaração de variável e o incremento ficam na mesma linha

// for (let count = 0; count < 10; count++){
//     console.log('Repetiu: ', count);
// }



// // Nesse caso meu usuário vai escolher a quantidade de repetições
// // E a variável 'i' vai contar de 1 até a quantidade de vezes definida.
// let repeticoes = +prompt('Quantas vezes quer repetir? ');
// for (let i = 1; i <= repeticoes; i++){
//     console.log(`Repetiu: ${i}`)
// }


// // As 3 expressões dentro do for são opcionais,
// // Nesse exemplo eu não uso o incremento na expressão do for
// // Ele pode ir dentro do código em algum lugar
// // Isso seria útil no caso de eu ter uma condição em que eu posso incrementar valores diferentes
// let repeticoes = +prompt('Quantas vezes quer repetir? ');
// for (let i = 1; i <= repeticoes; ){
//     console.log(`Repetiu: ${i}`);
//     if (repeticoes < 100){
//         i++
//     } else {
//         i += 10
//     }
// }





//          FOR OF

// // Iterando sobre os elementos de uma lista com o for indexado
// let alunosC20 = ['Fellipe','Adriano','Gabriel','Raphael', 'Johni', 'Adriano', 'Caio', 'Everton'];

// for (let i = 0; i < alunosC20.length; i++){
//     console.log(alunosC20[i]);
// }


// // Mesma coisa, de uma maneira mais fácil:
// let alunosC20 = ['Fellipe','Adriano','Gabriel','Raphael', 'Johni', 'Adriano', 'Caio', 'Everton'];
// let nome = 'Gabriel Pereira';

// for (let i of alunosC20){
//     console.log(i);
// }







//      FOR IN

// // Recebendo os índices de uma lista independente do tamanho
// // Nesse caso, a variável 'i' é do tipo 'number'.
// let alunosC20 = ['Fellipe','Adriano','Gabriel','Raphael', 'Johni', 'Adriano', 'Caio', 'Everton'];
// for (let i = 0; i < alunosC20.length; i++){
//     console.log(i);
// }


// // Mesma coisa, só que mais fácil
// // Nesse caso, a variável 'i' é do tipo 'string'.
// let alunosC20 = ['Fellipe','Adriano','Gabriel','Raphael', 'Johni', 'Adriano', 'Caio', 'Everton'];
// let idades = [20, 16, 18, 30, 25, 23, 40, 22]

// // for (let i in alunosC20){
// //     console.log(i);
// // }

// // Acessando o mesmo índice de duas listas distintas.
// for (let i in alunosC20){
//     console.log(alunosC20[i]);
//     console.log(idades[i]);
// }


/*
Exercício 1:

Peça ao usuário uma quantidade de linhas e e outra de colunas, 
e imprima essas informações na forma de uma tabela como no exemplo de 3 linhas e 4 colunas:
[ 0, 1, 2, 3 ]
[ 1, 2, 3, 4 ]
[ 2, 3, 4, 5 ]
*/

let linhas = +prompt('Quantas linhas? ');
let colunas = +prompt('Quantas colunas? ');
let matriz = [];

for (let i = 0; i < linhas; i++){
    let linhaInterna = [];
    for (let j = 0; j < colunas; j++){
        linhaInterna.push(j + i);
    }
    matriz.push(linhaInterna);
}

for (let i of matriz){
    console.log(i)
}