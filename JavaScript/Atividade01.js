/* Obtenha dados da altura e o sexo (M ou F) de 15 pessoas e apresente os seguintes resultados:
A maior e a menor altura do grupo;
A média de altura dos homens;
O número de mulheres.

Array de exemplo com dados de 15 pessoas */

const pessoas = [
    { altura: 1.80, sexo: 'Masculino' },
    { altura: 1.65, sexo: 'Feminino' },
    { altura: 1.75, sexo: 'Masculino' },
    { altura: 1.60, sexo: 'Feminino' },
    { altura: 1.82, sexo: 'Masculino' },
    { altura: 1.70, sexo: 'Feminino' },
    { altura: 1.68, sexo: 'Feminino' },
    { altura: 1.78, sexo: 'Masculino' },
    { altura: 1.55, sexo: 'Feminino' },
    { altura: 1.85, sexo: 'Masculino' },
    { altura: 1.90, sexo: 'Masculino' },
    { altura: 1.67, sexo: 'Feminino' },
    { altura: 1.72, sexo: 'Feminino' },
    { altura: 1.88, sexo: 'Masculino' },
    { altura: 1.60, sexo: 'Feminino' }
];


// Função para calcular a maior e menor altura

function maiorMenorAltura(pessoas) {
    let maior = pessoas[0].altura;
    let menor = pessoas[0].altura;

    pessoas.forEach(pessoa => {
        if (pessoa.altura > maior) maior = pessoa.altura;
        if (pessoa.altura < menor) menor = pessoa.altura;
    });

    return { maior, menor };
}


// Função para calcular a média de altura dos homens

function mediaAlturaHomens(pessoas) {
    let totalAltura = 0;
    let numeroHomens = 0;

    pessoas.forEach(pessoa => {
        if (pessoa.sexo === 'Masculino') {
            totalAltura += pessoa.altura;
            numeroHomens++;
        }
    });

    return numeroHomens ? (totalAltura / numeroHomens) : 0;
}


// Função para contar o número de mulheres

function numeroMulheres(pessoas) {
    let numero = 0;

    pessoas.forEach(pessoa => {
        if (pessoa.sexo === 'Feminino') {
            numero++;
        }
    });

    return numero;
}


// Obtendo os resultados

const { maior, menor } = maiorMenorAltura(pessoas);
const mediaHomens = mediaAlturaHomens(pessoas);
const totalMulheres = numeroMulheres(pessoas);


// Exibindo os resultados

console.log(`A maior altura do grupo é: ${maior} metros`);
console.log(`A menor altura do grupo é: ${menor} metros`);
console.log(`A média de altura dos homens é: ${mediaHomens.toFixed(2)} metros`);
console.log(`O número de mulheres é: ${totalMulheres}`);