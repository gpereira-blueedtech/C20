console.clear()
const prompt = require("prompt-sync")();

// let listaPessoa = ['Santo Andre', 'Everton', 18]

// console.log(listaPessoa[0]);


// Ao criar um objeto, eu passo as propriedades no formato: chave: valor
// Cada informação (valor) é localizada dentro dele através da sua chave.
let pessoa = {
    nome: 'Everton', 
    idade: 18,
    hobbies: ['Trabalhar', 'Estudar'],
    residencia: {cidade: 'Santo Andre', estado: 'SP'},
    casado: true
}

// // Para acessar o valor de uma propriedade, basta usar objeto.chave
// console.log(pessoa.estado);

// // Para alterar o valor de uma propriedade, basta chamá-la pela chave e passar o novo valor.
// pessoa.idade = 20;

// console.log(pessoa);
// console.log(pessoa.idade);

// // Caso a propriedade não exista, ela será criada.
// pessoa.altura = 1.75;

// console.log(pessoa);
// console.log(pessoa.altura);


// // Caso o valor de uma chave seja uma lista, posso trabalhar normalmente como qualquer outra
// console.log(pessoa.hobbies);

// pessoa.hobbies.push('Pescar');

// // console.log(pessoa.hobbies);

// // Posso inclusive iterar sobre ela.
// for (let i of pessoa.hobbies){
//     console.log(i);
// }


// // Trabalhando com um objeto dentro de um objeto.
// console.log(pessoa.residencia);
// console.log(pessoa.residencia.cidade);

// pessoa.residencia.rua = 'Rua dos Abacateiros';

// console.log(pessoa.residencia);


// // Um objeto não é iterável, portanto não posso usar um for diretamente nele.
// for (let i of pessoa){
//     console.log(i);
// }


// // Deletando uma propriedade de um objeto.
// delete pessoa.hobbies;

// console.log(pessoa);




// //          MÉTODOS

// // Um método é uma função dentro de um objeto. 
// // Essa função só existe ali dentro, por isso preciso chamar por objeto.metodo
// let carro = {
//     cor: 'Preta',
//     modelo: 'Fusca',
//     ano: 1974,
//     combustivel: 10,
//     kilometragem: 100000,

//     // Um método funciona como qualquer função, pode receber argumentos e alterar as propriedade do próprio objeto
//     acelerar10km: function(km){
//         for (let i = 0; i < km; i++){
//             console.log(`Andei ${(i+1) * 10} km`);
//             this.kilometragem += 10; // uso this.chave para me referir à uma chave do próprio objeto.
//             this.combustivel--
//             if (this.combustivel <= 0){
//                 console.log('Acabou o combustível =(');
//                 break;
//             }
//         }
//     },

//     mostraInfo: function(){
//         console.log(`
//         Aqui estão as informações:
//         Modelo: ${this.modelo}
//         Ano: ${this.ano}
//         Cor: ${this.cor}
//         Kilometragem: ${this.kilometragem}
//         Combustível no tanque: ${this.combustivel}
//         `);
//     },

//     abastecer: function(lt){
//         this.combustivel += lt
//     }
// }

// // Chamando um método:
// carro.mostraInfo();

// // Ao chamar o método, posso passar argumentos normalmente.
// carro.abastecer(50)

// carro.acelerar10km(20);

// carro.mostraInfo();





let aluno = {
    nome: 'Everton', 
    idade: 18,
    hobbies: ['Trabalhar', 'Estudar'],
    residencia: {cidade: 'Santo Andre', estado: 'SP'},
    casado: true
}

// console.log(Object.keys(aluno));

// for (let i of Object.keys(aluno)){
//     console.log(i);
// }


alunoChaves = Object.keys(aluno);
alunoValores = Object.values(aluno);
alunoProps = Object.entries(aluno);

// for (let i of alunoChaves){
//     console.log(i);
// }

// for (let i of alunoValores){
//     console.log(i);
// }


// console.log(`Chave: ${alunoProps[3] [1]}`);

// for (let i of alunoProps){
//     console.log('Chave: ', i[0]);
//     console.log('Valor: ', i[1]);
//     console.log();
// }



let lista = [
    ['x', 2, 3],
    [4,'o',6],
    ['o','o','o']
]

if (lista [2][0] == lista [2][1] && lista [2][1] == lista [2][2]){
    console.log('Ganhou!');
}



console.log();