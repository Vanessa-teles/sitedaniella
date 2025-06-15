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
  // Cria corações flutuantes
  function createHearts() {
    const heartsContainer = document.querySelector('.floating-hearts');
    const heartCount = 20;
    
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
      
      heartsContainer.appendChild(heart);
    }
  }
  
  // Animação de scroll para as seções
  function animateOnScroll() {
    const storyCards = document.querySelectorAll('.story-card');
    
    storyCards.forEach((card, index) => {
      const cardPosition = card.getBoundingClientRect().top;
      const screenPosition = window.innerHeight / 1.3;
      
      if (cardPosition < screenPosition) {
        // Adiciona um delay progressivo para cada card
        setTimeout(() => {
          card.classList.add('fade-in');
        }, index * 200);
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
  createHearts();
  window.addEventListener('scroll', animateOnScroll);
  animateOnScroll(); // Executa uma vez ao carregar
  
  // Configura o player de áudio para começar suave
  const audioPlayer = document.querySelector('.audio-player');
  audioPlayer.volume = 0.3;
});