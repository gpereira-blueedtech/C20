console.clear()
const prompt = require("prompt-sync")();

// function pizzaPronta(sabor) {
//     console.log(`Sua pizza de ${sabor} está pronta.`);
// }
 
// function rejeitaPizza(sabor){
//     console.log(`Desculpa, estamos sem ${sabor}`);
// }

// function pedirPizza(callback) {
//     const sabor = prompt('Escolha o sabor da sua pizza: ');
//     callback(sabor);

//     console.log('Obrigado pela preferência.');
// }
  
// console.log('Temos todos os ingredientes? ')
// let ing = prompt();
// if (ing == 's'){
//     pedirPizza(pizzaPronta);
// } else {
//     pedirPizza(rejeitaPizza);
// }







// function primeiraFuncao(parametro) {
//     return new Promise((resolve, reject) => {
//         console.log(`Essa é a primeira função, ela escreve: ${parametro}`);
 
//         resolve(parametro);
//     });
// }

// function segundaFuncao(parametro) {
//     return new Promise((resolve, reject) => {
//         const novoParametro = parametro + 10;

//         console.log(`Essa vai adicionar 10, totalizando: ${novoParametro}`);
 
//         resolve(novoParametro);
//     });
// }

// function terceiraFuncao(parametro) {
//     return new Promise((resolve, reject) => {
//         const novoParametro = parametro * 2;

//         console.log(`Essa é a terceira função, ela dobra o valor: ${novoParametro}`);      

//         resolve(novoParametro);
//     });
// }

// function quartaFuncao(parametro) {
//     return new Promise((resolve, reject) => {
//         const novoParametro = parametro - 15;
 
//         console.log(`Essa é a quarta função, subtraindo 15: ${novoParametro}`);
    
//         resolve(novoParametro);
//     });
// }

// primeiraFuncao(10)
//     .then(segundaFuncao)
//     .then(terceiraFuncao)
//     .then(quartaFuncao);






function alteraNome(parametro) {
    return new Promise((resolve, reject) => {
        parametro = parametro.toUpperCase();

        resolve(parametro);
    });
}

function escreveNome(parametro) {
    return new Promise((resolve, reject) => {
        console.log(`Aqui está o nome em MAIÚSCULAS: ${parametro}`);

        resolve(parametro);
    });
}

alteraNome('blue')
    .then(escreveNome)
    .catch((err) => console.log('Alguma coisa deu errada no caminho...', err));


console.log();