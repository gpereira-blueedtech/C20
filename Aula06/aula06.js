console.clear()
const prompt = require("prompt-sync")();

// aluno1 = 'Raphael'
// aluno2 = 'Johni'
// aluno3 = 'Adriano'
// aluno4 = 'Caio'

// Os elementos dentro de uma array são indexados, ou seja, serão criados índices para eles
// E será através desses índices que poderemos nos referir a cada um dos elementos.

let alunosC20 = ['Fellipe','Adriano','Gabriel','Raphael', 'Johni', 'Adriano', 'Caio', 'Everton'];
let idades = [20, 18, 22, 23, 35, 20, 45, 30]


// // Uma string também pode ser idnexada e seus elementos acessados através de índices
// let aluno = 'Raphael'
// console.log(aluno[0]);

// // O último índice de uma lista sempre será igual o seu 'tamanho - 1', 
// // pois quando contamos o tamanho (quantidade de itens), contamos a partir do 1
// // Já para contar os índices, começamos a partir de 0
// console.log(alunosC20.length);
// console.log(alunosC20[0]);


// // Nesse caso, estamos pegando o tamanho da lista e subtraindo 1 para ter o índice do último elemento.
// let ultimoInd = alunosC20.length - 1
// console.log(alunosC20[ultimoInd])
// // Aqui economizei um passo e fiz o cálculo já dentro dos [ ].
// console.log(alunosC20[alunosC20.length - 1]);


// // Quando chamo por um elemento dentro da lista pelo seu índice, ela me retorna esse elemento (no caso, uma string)
// // Caso esse elemento também seja indexado, eu posso passar o valor do índice que eu quero acessar dentro dele.
// console.log(alunosC20[0] [0]);
// console.log('Raphael' [0])

// // Quando tento acessar um índice que não existe na lista, ele me retorna o valor 'undefined'
// console.log(alunosC20[10]);



alunosC20 = ['Fellipe','Adriano','Gabriel','Raphael', 'Johni', 'Adriano', 'Caio', 'Everton'];
idades = [20, 18, 22, 23, 35, 20, 45, 30];



// // Usando o método reduce para somar todos os elementos do array
// // Nesse método, eu preciso passar uma função (nesse caso, uma arrow function) que será executada em todos os elementos da array.
// console.log(idades.reduce((total, numero) => total + numero));





// // Somando os elementos da array usando while
// let indice = 0;
// let soma = 0;
// // console.log(idades[indice]);

// // indice++ // Estou acrescentando 1 ao valor de indice
// // console.log(idades[indice]);

// while (indice < idades.length){
//     soma += idades[indice]      
//     indice++ // Os dois funcionam igual, acrescentando 1 ao valor do indice.
//     // indice += 1
// }

// console.log(soma);



// const turmas = ['C03','C04','C05','C06','C07','C08'];

// console.log(turmas);

// // Atribuindo um novo valor à um elemento da array
// turmas[0] = 'C02'

// console.log(turmas);





// // Declarando um array

// const numeros = [1, 2, 3];

// // Criando um variável para o primeiro item

// let primeiroItem = numeros[0];
// console.log(primeiroItem); // 1

// // // Alterando a variável
// primeiroItem = 5;

// console.log(numeros); // [1, 2, 3] - O array permanece sem alteração
// console.log(primeiroItem); // 5 - O valor da variável é alterado


// // // Alterando diretamente pelo índice
// numeros[0] = 99;

// // A var primeiroItem está com o valor de quando ela foi declarada, a array ainda tinha o valor antigo.
// // Se a atribuição fosse depois de alterar o valor na array, aí sim ela guardaria também o novo valor.
// console.log(numeros); // [99, 2, 3] - O array é atualizado
// console.log(primeiroItem); // 5 - a variável permanece com o valor





//          MÉTODOS DE ARRAY

alunosC20 = ['Fellipe','Adriano','Gabriel','Raphael', 'Johni', 'Adriano', 'Caio', 'Everton'];

// // O método push() vai adicionar um novo elemento ao final de um array já existente
// // Nesse caso os índices não são alterados
// alunosC20.push('Ricardo');

// let novoAluno = 'Everton Serpa'
// alunosC20.push(novoAluno);

// console.log(alunosC20);


// // O método unshift() vai adicionar um novo elemento ao começo de um array já existente
// // Nesse caso os índices SÃO alterados
// alunosC20.unshift('Ricardo');

// console.log(alunosC20);



// // pop: Remove o último elemento de uma array.
// // Esse elemento é RETORNADO e eu posso armazená-lo
// // Os índices não são alterados
// let removido = alunosC20.pop();

// console.log(removido);

// // shift: Remove o primeiro elemento de uma array.
// // Os índices SÃO alterados
// removido = alunosC20.shift();


// console.log(alunosC20);
// console.log(removido);


alunosC20 = ['Fellipe','Adriano','Gabriel','Raphael', 'Johni', 'Adriano', 'Caio', 'Everton'];

// // O primeiro argumento (2 nesse exemplo) é o índice onde o método vai começar a ser aplicado.
// // Caso eu não passe outro argumento, ele vai remover todos os elementos a partir desse índice
// alunosC20.splice(2);
// console.log(alunosC20);


// // Quando passo um segundo argumento, ele vai remover essa quantidade de itens
// //  (a partir do índice passado no primeiro argumento)
// // Esses elementos são retornados em uma lista, e eu posso armazená-los.
// let removidos = alunosC20.splice(2, 2);
// console.log(alunosC20);
// console.log(removidos);


// // A partir do terceiro argumento, eu passo os novos valores a serem adicionados ao array.
// let removidos = alunosC20.splice(2, 5, 'Luiz');
// console.log(alunosC20);
// console.log(removidos);


// // Caso eu use 0 como segundo argumento, ele não irá remover nenhum elemento, e apenas adicionar os que foram passados a partir do 3º argumento
// alunosC20.splice(2, 0, 'Luiz', 'Ricardo');
// console.log(alunosC20);





// console.log(alunosC20);

// let elementoRemover = prompt('Qual nome deseja remover? ');
// let novoElemento = prompt('Qual nome deseja adicionar? ')
// let indiceRemover = alunosC20.indexOf(elementoRemover);
// console.log(indiceRemover);

// alunosC20.splice(indiceRemover, 1, novoElemento);

// console.log(alunosC20);

console.log();