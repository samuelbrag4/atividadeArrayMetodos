// Primeiro método: .reduce()
// Função: esse comando transforma todos os elementos de um array em um só! Para ficar mais fácil de se entender vou dar dois exemplos:
// Primeiro exemplo: Números
let listaNumeros = [13, 64, 38, 32];
let total = listaNumeros.reduce((total, todosNumeros) => total + todosNumeros);
// console.log(total);
// Como podemos ver, ao invés de declararmos cada variável com um valor, declaramos uma só com o valor de várias e somo elas
// Segundo exemplo: preços de mercado
let listaMercadoPrecos = [12.99, 20.99, 100.00, 9.99];
let tudo = listaMercadoPrecos.reduce((tudo, precoTotal) => tudo + precoTotal);
// console.log(tudo);

// Segundo método: .some()
// Esse código serve para vermos se um elemento passa por uma condição (true) ou não (false)
// Exemplo 1: verifica se um usuário tem mais de 18 anos
let usuariosIdade = [
	{usuario: 'João', idade: 34},
	{usuario: 'Maria', idade: 65},
	{usuario: 'Carlos', idade: 34},
	{usuario: 'Vanessa', idade: 18},
];

let maiorDezoito = usuariosIdade.some((user, index, array) => user.idade === 18);
// console.log(maiorDezoito);
// console.log("Um dos usuários é maior de 18 anos!!");

// Exemplo 2: verifica se tem algum número par
let listaNum = [0, 34, 4, 7, 8, 2, 5];

let numPar = listaNum.some(function(numero) { return numero % 2 === 0;
});

// console.log(numPar);
// console.log("Tem número par!!");

