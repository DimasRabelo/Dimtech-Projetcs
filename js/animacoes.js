$(document).ready(function () {
  /* BANNER */
  $('.banner').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    dots: true,
    arrows: true
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

  // Botão com transição antes de mudar de página
  document.querySelectorAll('.botao').forEach(function (botao) {
    botao.addEventListener('click', function (event) {
      event.preventDefault();
      const href = this.getAttribute('href');
      document.body.classList.add('fade-out');
      setTimeout(function () {
        window.location.href = href;
      }, 800);
    });
  });

  /* Menu do site */
  fetch("menu.html")
    .then(res => res.text())
    .then(data => {
      const menu = document.getElementById("menu");
      menu.innerHTML = data;
      menu.style.display = "block";
    });

  /* Rodapé do site */
  fetch("rodape.html")
    .then(res => res.text())
    .then(data => {
      const rodape = document.getElementById("rodape");
      rodape.innerHTML = data;
      rodape.style.display = "block";
    });

  /* Aviso de Cookies */
  $('#aviso-cookies').load('cookies.html', function () {
    const banner = document.getElementById('cookie-banner');
    const aceitar = document.getElementById('aceitar-cookies');

    if (banner && aceitar && !localStorage.getItem('cookieConsent')) {
      banner.style.display = 'block';
      aceitar.addEventListener('click', function () {
        localStorage.setItem('cookieConsent', 'true');
        banner.style.display = 'none';
      });
    }
  });
});
