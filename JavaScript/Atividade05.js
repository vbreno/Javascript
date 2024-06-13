/* criar uma página em HTML e quando for carregada informe para o usuário que ele está sendo redirecionado
 para a página http://www.google.com, e pergunte se ele deseja continuar com o redirecionamento ou deseja sair.
 Se o usuário aceitar o redirecionamento, o site deve abrir a referida página  (http:///www.google.com)
 caso contrário ele deve ser informado que a navegação está sendo interrompida 
 e posteriormente a página deve ser fechada.*/

 function redirecionar() {
    // Exibe uma mensagem informando sobre o redirecionamento
    alert("Você está sendo redirecionado para http://www.google.com");

    // Pergunta ao usuário se deseja continuar com o redirecionamento
    var continuar = confirm("Deseja continuar com o redirecionamento?");

    if (continuar) {
        // Se o usuário aceitar, redireciona para http://www.google.com
        window.location.href = "http://www.google.com";
    } else {
        // Se o usuário recusar, exibe uma mensagem e fecha a página
        alert("A navegação está sendo interrompida.");
        window.close();
    }
}

// Função será chamada quando a página for carregada
window.onload = redirecionar;
