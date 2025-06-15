function verificarRespostas() {
  const r1 = document.getElementById('pergunta1').value.trim().toLowerCase();
  const r2 = document.getElementById('pergunta2').value.trim().toLowerCase();
  const r3 = document.getElementById('pergunta3').value.trim().toLowerCase();
  const r4 = document.getElementById('pergunta4').value.trim().toLowerCase();

  const certas = r1 === 'criança' && r2 === 'no trabalho' && r3 === 'vanessa' && r4 === 'daniella';

  const erro = document.getElementById('mensagemErro');

  if (certas) {
    window.location.href = 'historia.html';
  } else {
    erro.innerText = 'Hmm... tenta lembrar com carinho. Você consegue! 💗';
  }
}





// js/script.js
document.addEventListener('DOMContentLoaded', function() {
  // Configura o áudio para tocar automaticamente
  const audio = document.getElementById('loveSong');
  audio.volume = 0.3; // Volume mais baixo
  
  // Tenta reproduzir o áudio (alguns navegadores bloqueiam autoplay)
  function playAudio() {
    const promise = audio.play();
    
    if (promise !== undefined) {
      promise.catch(error => {
        // Mostra um botão se o autoplay for bloqueado
        const playButton = document.createElement('button');
        playButton.textContent = 'Tocar Música';
        playButton.className = 'letter-button';
        playButton.style.margin = '20px auto';
        playButton.style.display = 'block';
        playButton.onclick = () => {
          audio.play();
          playButton.remove();
        };
        document.querySelector('.main-header').appendChild(playButton);
      });
    }
  }
  
  // Cria corações flutuantes
  function createHearts() {
    const heartsContainer = document.querySelector('.floating-hearts');
    const heartCount = 15;
    
    for (let i = 0; i < heartCount; i++) {
      const heart = document.createElement('div');
      heart.classList.add('heart');
      
      // Posição aleatória
      heart.style.left = `${Math.random() * 100}%`;
      
      // Atraso e duração aleatórios
      heart.style.animationDelay = `${Math.random() * 5}s`;
      heart.style.animationDuration = `${Math.random() * 3 + 4}s`;
      
      // Tamanho aleatório
      const size = Math.random() * 15 + 10;
      heart.style.width = `${size}px`;
      heart.style.height = `${size}px`;
      
      // Opacidade aleatória
      heart.style.opacity = Math.random() * 0.3 + 0.1;
      
      heartsContainer.appendChild(heart);
    }
  }
  
  // Animação de scroll para as seções
  function animateOnScroll() {
    const animateElements = document.querySelectorAll('.story-text, .story-media, .section-title, .photo-item, .video-item');
    
    animateElements.forEach((element, index) => {
      const elementPosition = element.getBoundingClientRect().top;
      const screenPosition = window.innerHeight / 1.2;
      
      if (elementPosition < screenPosition) {
        setTimeout(() => {
          element.classList.add('animate-' + element.classList[0]);
        }, index * 100);
      }
    });
  }
  
  // Carta de amor interativa
  const openLetterBtn = document.getElementById('openLetter');
  const letterContent = document.getElementById('letterContent');
  
  openLetterBtn.addEventListener('click', function() {
    letterContent.classList.toggle('show');
    openLetterBtn.textContent = letterContent.classList.contains('show') ? 
      '💌 Fechar Carta' : '💌 Abrir Carta Especial';
  });
  
  // Inicializa tudo
  playAudio();
  createHearts();
  window.addEventListener('scroll', animateOnScroll);
  animateOnScroll(); // Executa uma vez ao carregar
  
  // Verifica se é mobile para ajustes específicos
  function checkIfMobile() {
    if (window.innerWidth <= 767) {
      document.body.classList.add('mobile');
    } else {
      document.body.classList.remove('mobile');
    }
  }
  
  window.addEventListener('resize', checkIfMobile);
  checkIfMobile();
});