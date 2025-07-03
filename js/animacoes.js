/* BANNER */
$(document).ready(function () {
  $('.banner').slick({
      slidesToShow: 1,
      slidesToScroll: 1,
      autoplay: true,
      autoplaySpeed: 3000,
      dots: true,
      arrows: true // Opcional, remove as setas para focar no autoplay
  });
});


// ANIMAÇÃO DO MENU

$('.fade').slick({
  dots: true,
  autoplay: true,
  infinite: true,
  speed: 500,
  fade: true,
  cssEase: 'linear'
});

/* WOW JS */
new WOW().init();

document.querySelectorAll('.botao').forEach(function(botao) {
    botao.addEventListener('click', function(event) {
      event.preventDefault(); // Impede o redirecionamento imediato

      const href = this.getAttribute('href');
      document.body.classList.add('fade-out');

      setTimeout(function() {
        window.location.href = href;
      }, 800); // tempo igual ao do transition
    });
  });

 /* Menu do site Topo 1 e Topo 2*/

  
   fetch("menu.html")
  .then(res => res.text())
  .then(data => {
    const menu = document.getElementById("menu");
    menu.innerHTML = data;
    menu.style.display = "block"; // Só exibe quando estiver pronto
  });


  /* Rodapé do site */
  fetch("rodape.html")
  .then(res => res.text())
  .then(data => {
    const rodape = document.getElementById("rodape");
    rodape.innerHTML = data;
    rodape.style.display = "block"; // Só exibe quando estiver pronto
  });

 
emailjs.init({
    publicKey: "h4Do4BoEXXEYG9JPh"
  });

 

