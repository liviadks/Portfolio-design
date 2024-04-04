const navLinks = document.getElementById("nav-links");
const menuBtn = document.getElementById("menu-btn");
const menuBtnIcon = menuBtn.querySelector("i");

var botao = document.getElementById('meuBotao');

botao.addEventListener('click', function() {
  var novaGuia = window.open('https://www.canva.com/design/DAFfF22N5eU/3cbk-CEfZ4D6fpEbZ4nQnw/edit?utm_content=DAFfF22N5eU&utm_campaign=designshare&utm_medium=link2&utm_source=sharebutton', '_blank');
  novaGuia.focus();
});


document.getElementById("humanas").addEventListener("click", function() {
  // Redirecionando para a nova página
  window.location.href = "humanas.html";
});

document.getElementById("linguagens").addEventListener("click", function() {
  // Redirecionando para a nova página
  window.location.href = "linguagens.html";
});
document.getElementById("matematica").addEventListener("click", function() {
  // Redirecionando para a nova página
  window.location.href = "matematica.html";
});
document.getElementById("natureza").addEventListener("click", function() {
  // Redirecionando para a nova página
  window.location.href = "natureza.html";
});
document.getElementById("dds").addEventListener("click", function() {
  // Redirecionando para a nova página
  window.location.href = "dds.html";
});
document.getElementById("mds").addEventListener("click", function() {
  // Redirecionando para a nova página
  window.location.href = "mds.html";
});
document.getElementById("sda").addEventListener("click", function() {
  // Redirecionando para a nova página
  window.location.href = "sda.html";
});
document.getElementById("imds").addEventListener("click", function() {
  // Redirecionando para a nova página
  window.location.href = "imds.html";
});




menuBtn.addEventListener("click", (e) => {
  navLinks.classList.toggle("open");

  const isOpen = navLinks.classList.contains("open");
  menuBtnIcon.setAttribute(
    "class",
    isOpen ? "ri-close-line" : "ri-menu-3-line"
  );
});

navLinks.addEventListener("click", (e) => {
  navLinks.classList.remove("open");
  menuBtnIcon.setAttribute("class", "ri-menu-3-line");
});

const scrollRevealOption = {
  distance: "50px",
  origin: "bottom",
  duration: 1000,
};

// header container
ScrollReveal().reveal(".header__content h1", {
  ...scrollRevealOption,
});

ScrollReveal().reveal(".header__content .section__description", {
  ...scrollRevealOption,
  delay: 500,
});

ScrollReveal().reveal(".header__content .header__btn", {
  ...scrollRevealOption,
  delay: 1000,
});

// about container
ScrollReveal().reveal(".about__content .section__header", {
  ...scrollRevealOption,
});

ScrollReveal().reveal(".about__content .section__description", {
  ...scrollRevealOption,
  delay: 500,
});

ScrollReveal().reveal(".about__content .about__btn", {
  ...scrollRevealOption,
  delay: 1000,
});

// service container
ScrollReveal().reveal(".service__card", {
  ...scrollRevealOption,
  interval: 500,
});

// portfolio container
ScrollReveal().reveal(".portfolio__card", {
  duration: 1000,
  interval: 500,
});
