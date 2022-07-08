console.clear()
const prompt = require("prompt-sync")();

/*
Exercício 3 - Aula 6

Faça um programa em que o usuário escolha a quantidade de alunos a serem cadastrados 
e peça o nome e nota de cada um. 
Armazene as informações em duas listas separadas e no final imprima 
o nome e a nota correspondente de cada aluno, e a média total das notas.
*/

let qtd = +prompt('Quantos alunos quer cadastrar? ');

// for (let i = 0; i < qtd; i++){
//     console.log('Repetiu!');
// }


let count = 1;
listaAlunos = [];
listaNotas = [];

while (count <= qtd){
    console.log(`Digite o nome do(a) aluno(a) ${count}: `);
    let novoaluno = prompt();
    listaAlunos.push(novoaluno);

    console.log(`Digite a nota do(a) aluno(a) ${count}: `);
    let novaNota = +prompt();
    listaNotas.push(novaNota);

    count++
    console.clear();
}



let indice = 0;
let totalNotas = 0;

while (indice < listaAlunos.length){
    console.log(`Aluno(a): ${listaAlunos[indice]} - Nota: ${listaNotas[indice]}`);
    totalNotas += listaNotas[indice];
    indice++
}


//      Resolução usando for:
// let totalNotas = 0;

// for(let i in listaNotas){
//     console.log(`Aluno(a): ${listaAlunos[i]} - Notas ${listaNotas[i]}`)
//     totalNotas += listaNotas[i];
// }




let mediaNotas = totalNotas / listaNotas.length;
console.log(`A média das notas é: ${mediaNotas}`);


console.log();