console.clear()
const prompt = require("prompt-sync")();

// // Nesse momento, estou apenas ensinando o computador.
// // Ele ainda não vai executar nada, estou apenas passando as instruções de como será a função.
// function cumprimentar(){
//     let nome = prompt('Qual o seu nome? ');
//     console.log(`Boa noite ${nome}!`);
//     console.log('Estamos na aula 11');
//     console.log('Essa é a terceira semana de aula');
//     console.log('Seja feliz.');

//     let idade = +prompt('Qual a sua idade? ');
//     if (idade >= 18){
//         console.log('Você já pode dirigir.');
//     } else {
//         console.log('Melhor ir de bicicleta.')
//     }
// }

// // Aqui é onde eu estou de fato pedindo para a função ser executada.
// cumprimentar();





// //          ARGUMENTOS

// // Ao declarar uma função, eu posso definir parâmetros, 
// // Esses parâmetros são informações que a função vai receber do mundo externo.
// // Os dados de uma função devem ficar restritos à ela, ou seja, as informações que serão trabalhadas dentro dela
// // Não devem ser acessíveis de fora, assim como ela não deve acessar nada de fora também.
// // Então a maneira correta de passar alguma informação para dentro dela é através dos PARÂMETROS.

// // Ao definir um parâmetro, eu posso passar um valor padrão para ele.
// // Esse valor será usado caso o argumento não seja passado oa chamar a função.
// function boaNoite(nome = 'Aluno(a)', ano = 2000){
//     console.log(`Boa noite ${nome}`);

//     let idade = 2022 - ano;
//     console.log(`Você tem ${idade} anos.`);
//     if (idade >= 18){
//         console.log('Você já pode dirigir.');
//     } else {
//         console.log('Melhor ir de bicicleta.');
//     }
// }


// let aluno = 'Yago';
// let anoNasc = 1990

// // Ao chamar a função, estou passando dois valores como ARGUMENTOS.
// // A função irá receber esses valores e tratá-los através de seus parâmetros.
// // Então não importa o nome da variável que eu passo como argumento, dentro da função ela será tratada pelo nome definido no seu parâmetro
// // Por isso que a ORDEM desses argumentos é fundamental 
// boaNoite(aluno, anoNasc); // Nesse caso, o primeiro argumento a função vai entender como 'nome' e o segundo como 'ano'








//              RETORNO

// // Um exemplo de retorno é o método pop de listas.
// // Após remover o item, ele irá me RETORNAR o seu valor, e eu posso fazer o que quiser com ele.

// let lista = ['Adriano', 'Nicolas', 'Bruno', 'Rafael']

// // console.log(lista.pop());
// let removido = lista.pop();

// console.log(lista);
// console.log(removido);



// function boaNoite(nome = 'Aluno(a)', ano = 2000){
//     console.log(`Boa noite ${nome}`);

//     let idade = 2022 - ano;
//     let permissao;
//     console.log(`Você tem ${idade} anos.`);
//     if (idade >= 18){
//         console.log('Você já pode dirigir.');
//         permissao = true;
//     } else {
//         console.log('Melhor ir de bicicleta.');
//         permissao =  false;
//     }
//     // Para retornar um valor, ou seja, para a função entregar um resultado,
//     // É preciso que eu passe através de return. O que for colocado aqui, será devolvido ao final da função.
//     // Quando executo a declaração return, a função é encerrada, por isso só um return deve ser executado no código.
//     // Para passar mais de uma informação, eu posso utilizar uma lista.
//     return [idade, permissao];
// }


// // Eu tenho uma variável chamando a função.
// // Isso porque essa função tem um valor de retorno, e nesse caso, o que ela retornar
// // será guardado nessa variável.
// let idadePermissao = boaNoite('Diego', 2000);

// console.log(idadePermissao);






//      EXERCÍCIOS
/*
3.
Escreva uma função para conversão de temperatura. 
Ela deve receber 2 argumentos: um número e um caracter 'C', 'F' ou 'K', 
indicando que a temperatura está em Celsius, Fahrenheit ou Kelvin.
A função deve exibir a temperatura nas 3 escalas e perguntar qual valor quer retornar.
*/

function converteTemp(temp, escala){
    let tempC;
    let tempK;
    let tempF;

    if (escala == 'C'){
        tempC = temp;
        tempK = temp + 273.15;
        tempF = 1.8 * temp + 32;
    } else if (escala == 'K'){
        tempK = temp;
        tempC = temp - 273.15;
        tempF = 1.8 * tempC + 32
    } else if (escala == 'F'){
        tempF = temp;
        tempC = (temp - 32) / 1.8
        tempK = tempC + 273.15
    } else {
        console.log('Escala inválida.')
        return 0;
    }

    console.log(`
    Temperatura em Celsius: ${tempC}
    Temperatura em Farenheits: ${tempF}
    Temperatura em Kelvins: ${tempK}
    `);

    console.log('Qual desses valores quer retornar? ');
    let retorno = prompt();

    if (retorno == 'C'){
        return `${tempC} C`;
    } else if (retorno == 'K'){
        return `${tempK} K`;
    } else if (retorno == 'F'){
        return `${tempF} F`;
    } else {
        console.log('Valor inválido.');
        return 0;
    }
}


let temperatura = +prompt('Qual temperatura deseja converter? ');
let escala = prompt('Qual escala está usando? ');

let tempNova = converteTemp(temperatura, escala);
console.log();

console.log(`A temperatura retornada foi ${tempNova}`);

console.log();