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
