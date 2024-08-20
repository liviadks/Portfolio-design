// botao voltar
function voltar() {
    window.location.href = '../index.html'; // Redireciona para a página index.html
  }
  
  document.getElementById("btn-voltar").addEventListener("click", function(event) {
    event.preventDefault(); // Evita o comportamento padrão do link
    voltar(); // Chama a função para redirecionar
  });
  
