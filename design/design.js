// botao voltar
function voltar() {
  window.location.href = '../index.html'; 
}

document.getElementById("btn-voltar").addEventListener("click", function(event) {
  event.preventDefault(); 
  voltar();
});


