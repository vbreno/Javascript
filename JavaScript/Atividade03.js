/* Desenvolva uma função que realize a soma de uma quantidade variáveis de valores 
a ser informado na sua invocação. */

function somar(...valores) {
    return valores.reduce((acc, valor) => acc + valor, 0);
}


// Testando a função com diferentes quantidades de argumentos e novos valores

console.log(somar(3, 5)); // 8
console.log(somar(10, 20, 30, 40)); // 100
console.log(somar(4, 8, 15, 16, 23, 42)); // 108
console.log(somar(12, 45, 78, 90, 11, 34, 56, 87, 3, 9, 17)); // 442
console.log(somar(2, 34, 5, 6, 7, 8, 98, 90, 3, 3, 4, 4, 56, 7, 78, 7, 8, 9)); // 429
