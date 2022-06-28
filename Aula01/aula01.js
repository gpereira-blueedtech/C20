console.clear();
const prompt = require('prompt-sync')();

// let nome = 'Gabriel';
// let turma = "C20";
// let alunos = 27;

// console.log('Hello world!');
// console.log(nome, turma, alunos);

// console.log('Meu nome é', nome, ', estou na', turma, 'com', alunos, 'alunos.')
// console.log(`Meu nome é ${nome}, estou na ${turma} com ${alunos} alunos.`)

// // typeof vai me mostrar o tipo do valor armazenado
// console.log(typeof nome);
// console.log(typeof alunos);

// nome = prompt('Digite o nome: ');




// console.log('Digite o nome: ');
// nome = prompt();

// console.log(`O nome é: ${nome}.`);






// // Por padrão, o prompt sempre vai salvar como string
// // Quando eu uso +prompt, ele salva o valor como number 
// var1 = +(prompt('Digite um número: '));
// var2 = +(prompt('Digite outro número: '));

// // Dessa forma estou transformando os valores em Int e Float
// var1 = parseInt(prompt('Digite um número: '));
// var2 = parseFloat(prompt('Digite outro número: '));

// // Outra forma é usar a função Number:
// var1 = Number(prompt('Digite um número: '));
// var2 = Number(prompt('Digite outro número: '));

// console.log(typeof var1);
// console.log(var1);

// console.log(typeof var2);
// console.log(var2);

// console.log();


// // console.log(var1 + var2);
// // console.log(var1 - var2);
// // console.log(var1 * var2);
// // console.log(var1 / var2);

// let soma = var1 + var2;
// let subt = var1 - var2;
// let mult = var1 * var2;
// let divi = var1 / var2;
// let rest = var1 % var2;
// let expo = var1 ** var2;

// console.log(`A soma é: ${soma}`);
// console.log(`A subtração é: ${subt}`);
// console.log(`A multiplicação é: ${mult}`);
// console.log(`A divisão é: ${divi}`);
// console.log(`O resto de divisão é: ${rest}`);
// console.log(`A exponenciação é: ${expo}`);

// console.log(var1);



let diasTotal = +prompt('Quantos dias você viveu? ');

let anos = parseInt(diasTotal / 365);

let meses = parseInt((diasTotal - (anos * 365))/30);

let dias = parseInt((diasTotal - (anos * 365) - (meses * 30)))

console.log(anos);
console.log(meses);
console.log(dias);



console.log();