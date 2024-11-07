// botao voltar
function voltar() {
    window.location.href = '../index.html'; // Redireciona para a página index.html
  }
  
  document.getElementById("btn-voltar").addEventListener("click", function(event) {
    event.preventDefault(); // Evita o comportamento padrão do link
    voltar(); // Chama a função para redirecionar
  });
  
  
  
    // mostrar conteudo de uma aba e esconder outro
  function mostrarConteudo(id) {
      
      var conteudos = document.getElementsByClassName("conteudo");
      for (var i = 0; i < conteudos.length; i++) {
        conteudos[i].style.display = "none";
      }
    
      // mostrar o conteydo da aba clicada
      document.getElementById(id).style.display = "block";
    }