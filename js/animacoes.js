$(document).ready(function () {
  /* BANNER */
  $('.banner').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2500,
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
  if (!localStorage.getItem('cookieConsent')) {
    $('#aviso-cookies').load('cookies.html', function () {
      const banner = document.getElementById('cookie-banner');
      const aceitar = document.getElementById('aceitar-cookies');

      if (banner && aceitar) {
        banner.style.display = 'block';
        aceitar.addEventListener('click', function () {
          localStorage.setItem('cookieConsent', 'true');
          banner.style.display = 'none';
        });
      }
    });
  }
});
// Adicionar links "Veja também" dinamicamente
const vejaMaisLinks = [
    { href: 'backupwindows.html', texto: 'Veja também como criar backup no Windows' },
    { href: 'clonehd.html', texto: 'Veja também como clonar HD' },
    { href: 'ventoy.html', texto: 'Veja também como usar Ventoy' },
    { href: 'tutorias.html', texto: 'Veja também outros tutoriais' }
  ];

  // Página atual
  const paginaAtual = window.location.pathname.split("/").pop();

  // Div onde os links vão aparecer
  const container = document.getElementById('veja-mais');

  // Criar links, exceto o da página atual
  vejaMaisLinks.forEach(link => {
    if(link.href !== paginaAtual){
      const p = document.createElement('p');
      p.className = 'vejaMaisGeral';
      p.innerHTML = `<a href="${link.href}">${link.texto}</a>`;
      container.appendChild(p);
    }
  });