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

// Terceiro método: .every() 
// Função: este comando serve para nos dizer se todos os itens passam por uma condição
// Exemplo 1: verifica se todos os usuários possuem mais de R$1,00 e menos de R$1000 em suas contas
let usuariosDinheiro = [
	{usuario: 'Alejandra', dinheiro: 500},
	{usuario: 'Thiago', dinheiro: 90000},
	{usuario: 'Tony Stark', dinheiro: 12400000},
	{usuario: 'Vanessa Lopez', dinheiro: 2},
];

// No "verificacao1" vemos se todos tem mais que R$1,00 em suas contas
let verificacao1 = usuariosDinheiro.every((user, index, array) => user.dinheiro > 1);
// No "verificacao2" vemos se todos tem menos de R$1.000 em suas contas
let verificacao2 = usuariosDinheiro.every(user => user.dinheiro < 1.000);

// console.log("Verificando...");
// console.log(verificacao1);
// console.log(verificacao2);

// Exemplo 2: verifica se todos os dias (segunda à sexta) entraram 100 pessoas na loja
let diasSemana = [
	{dia: 'segunda-feira', pessoas: 45},
	{dia: 'terça-feira', pessoas: 134},
	{dia: 'quarta-feira', pessoas: 593},
	{dia: 'quinta-feira', pessoas: 2},
  {dia: 'sexta-feira', pessoas: 12},
];
let entraram1 = diasSemana.every((user, index, array) => user.pessoas > 100);

// console.log(diasSemana);
// console.log("Verificando se a meta de 100 pessoas todos os dias foi atingida...")
// console.log(entraram1);

// Quarto método: .findIndex()
// Função: serve para mostrar o índice de um item
// Exemplo 1: mostra a posição (índice) de um usuário quando inserido seu nome
let usuariosIndice = [
	{nome: 'Izabela', idade: 15},
	{nome: 'Rafael', idade: 23},
	{nome: 'Amanda', idade: 39},
	{nome: 'Izabel', idade: 20},
];

let achar = usuariosIndice.findIndex((user, index, array) => user.nome === 'Izabel');
// console.log(achar);

// Exemplo 2: mostra as informações de um usuário quando inserido o seu nome
let usuariosIndice2 = [
	{nome: 'Izabela', idade: 15},
	{nome: 'Rafael', idade: 23},
	{nome: 'Amanda', idade: 39},
	{nome: 'Izabel', idade: 20},
];

let procurar = usuariosIndice2.findIndex((user, index, array) => user.nome === 'Rafael');
// console.log(procurar);

