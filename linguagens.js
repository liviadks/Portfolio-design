// Função para voltar para a página anterior
function voltar() {
    window.history.back(); // Volta para a página anterior
  }
  
  // Adiciona um evento de clique ao botão de voltar
  document.getElementById("btn-voltar").addEventListener("click", function(event) {
    event.preventDefault(); // Evita o comportamento padrão do link
    voltar(); // Chama a função para voltar
  });


  // Função para mostrar o conteúdo de uma aba e esconder os outros
function mostrarConteudo(id) {
    // Esconder todos os conteúdos das abas
    var conteudos = document.getElementsByClassName("conteudo");
    for (var i = 0; i < conteudos.length; i++) {
      conteudos[i].style.display = "none";
    }
  
    // Mostrar o conteúdo da aba clicada
    document.getElementById(id).style.display = "block";
  }