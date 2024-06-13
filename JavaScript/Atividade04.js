/* Crie dois objetos com a estrutura abaixo:

Nome (tipo String)
Idade (tipo Number)
Filiacao (Array): nomeDoPai (tipo String) e nomeDaMae (tipo String)
Endereco (tipo Objeto): rua (tipo String), cidade (tipo String) e estado (tipo String)
dadosCompletos (tipo função) (verifica se os dados acimas estão preenchidos e retorna true, caso positivo, e false, caso negativo)


Criar uma função que receba os dois objetos acima criados
imprimir os valores de suas propriedades 
imprimir o resultado da função chamada dadosCompleto()
verificar se todos os campos estão preenhidos.

Definição dos dois objetos */

const pessoa1 = {
    nome: "João Silva",
    idade: 30,
    filiacao: { nomeDoPai: "Carlos Silva", nomeDaMae: "Maria Silva" },
    endereco: { rua: "João Vieira Carneiro", cidade: "João Pessoa", estado: "PB" },
    dadosCompletos: function() {
        return (
            this.nome && 
            this.idade && 
            this.filiacao.nomeDoPai && 
            this.filiacao.nomeDaMae && 
            this.endereco.rua && 
            this.endereco.cidade && 
            this.endereco.estado
        ) ? true : false;
    }
};

const pessoa2 = {
    nome: "Ana Souza",
    idade: 25,
    filiacao: { nomeDoPai: "José Souza", nomeDaMae: "Clara Souza" },
    endereco: { rua: "Guibaldo de Menezes", cidade: "João Pessoa", estado: "PB" },
    dadosCompletos: function() {
        return (
            this.nome && 
            this.idade && 
            this.filiacao.nomeDoPai && 
            this.filiacao.nomeDaMae && 
            this.endereco.rua && 
            this.endereco.cidade && 
            this.endereco.estado
        ) ? true : false;
    }
};

// Função para imprimir os valores das propriedades dos objetos e verificar se todos os campos estão preenchidos

function imprimirDados(obj1, obj2) {

    // Função auxiliar para imprimir as propriedades de um objeto

    function imprimirPropriedades(obj) {
        console.log(`Nome: ${obj.nome}`);
        console.log(`Idade: ${obj.idade}`);
        console.log(`Filiação: Pai - ${obj.filiacao.nomeDoPai}, Mãe - ${obj.filiacao.nomeDaMae}`);
        console.log(`Endereço: Rua - ${obj.endereco.rua}, Cidade - ${obj.endereco.cidade}, Estado - ${obj.endereco.estado}`);
        console.log(`Dados completos: ${obj.dadosCompletos()}`);
        console.log('---------------------------');
    }

    // Imprimindo os dados dos dois objetos

    imprimirPropriedades(obj1);
    imprimirPropriedades(obj2);
}

// Chamando a função para imprimir os dados das duas pessoas

imprimirDados(pessoa1, pessoa2);
