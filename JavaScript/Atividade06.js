function adicionarTarefa() {
    const titulo = document.getElementById('titulo').value;
    const descricao = document.getElementById('descricao').value;

    if (titulo === '' || descricao === '') {
        alert('Por favor, preencha todos os campos.');
        return;
    }

    const tabela = document.getElementById('tabelaTarefas').getElementsByTagName('tbody')[0];
    const novaLinha = tabela.insertRow();

    const celulaTitulo = novaLinha.insertCell(0);
    const celulaDescricao = novaLinha.insertCell(1);
    const celulaAcoes = novaLinha.insertCell(2);

    celulaTitulo.innerText = titulo;
    celulaDescricao.innerText = descricao;

    const botaoExcluir = document.createElement('button');
    botaoExcluir.innerText = 'Excluir';
    botaoExcluir.onclick = function() {
        tabela.deleteRow(novaLinha.rowIndex - 1);
    };
    celulaAcoes.appendChild(botaoExcluir);

    // Limpar os campos após adicionar a tarefa
    document.getElementById('titulo').value = '';
    document.getElementById('descricao').value = '';
}
