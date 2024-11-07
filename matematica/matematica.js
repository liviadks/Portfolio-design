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

  function mostrarTexto() {
    var texto = document.getElementById("texto-adc")
     
     if (texto.style.display === "block") {
       texto.style.display = "none"; 
     }
     else {
       texto.style.display = "block";
     }
   }
   document.getElementById("btn-ver-mais").addEventListener("click", function(event) {
     event.preventDefault()
     mostrarTexto()
     
    })
    function mostrarTexto2() {
     var texto = document.getElementById("texto-adc2")
      
      if (texto.style.display === "block") {
        texto.style.display = "none"; 
      }
      else {
        texto.style.display = "block";
      }
    }
    document.getElementById("btn-ver-mais2").addEventListener("click", function(event) {
     event.preventDefault()
     mostrarTexto2 ()
     
    })

    function mostrarTexto3() {
      var texto = document.getElementById("texto-adc3")
       
       if (texto.style.display === "block") {
         texto.style.display = "none"; 
       }
       else {
         texto.style.display = "block";
       }
     }
     document.getElementById("btn-ver-mais3").addEventListener("click", function(event) {
      event.preventDefault()
      mostrarTexto3 ()
      
     })