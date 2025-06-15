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


// js/script.js
document.addEventListener('DOMContentLoaded', function() {
  // Mensagens românticas para o envelope
  const messages = [
    "🌹 Você é o amor da minha vida e meu maior presente! Cada dia ao seu lado é uma bênção. 🌹",
    "💖 Se eu pudesse escolher novamente, escolheria você em todas as vidas possíveis. 💖",
    "✨ Você transformou minha vida em algo extraordinário. Obrigado por existir! ✨",
    "🌙 Quando estou com você, até as noites mais escuras têm estrelas. Te amo! 🌙",
    "🍀 Você é a sorte da minha vida. Meu maior tesouro. 🍀",
    "💫 Se amor fosse um superpoder, o seu seria o mais forte do universo. 💫",
    "🌻 Você é meu sol em dias nublados e minha luz nas noites escuras. 🌻",
    "💞 O meu coração bate no ritmo do seu nome. Você é minha melodia favorita. 💞",
    "🦋 Você me completa de um jeito que nem eu sabia que faltava. 🦋",
    "🌈 Com você, até a chuva tem cor de arco-íris. Obrigado por colorir minha vida! 🌈",
    "💌 Se o amor fosse uma carta, eu escreveria para você todos os dias da minha vida. 💌",
    "🎶 Você é a música que meu coração sempre quis cantar. 🎶",
    "💕 Meu amor por você é maior que o universo e todas as suas galáxias. 💕",
    "🌠 Você é a estrela que guia meus dias e ilumina minhas noites. 🌠",
    "💘 Amar você não é uma escolha, é algo tão natural quanto respirar. 💘"
  ];

  // Configura o envelope flutuante
  const envelope = document.getElementById('envelope');
  const envelopeContainer = document.getElementById('envelopeContainer');
  const envelopeMessage = document.getElementById('envelopeMessage');
  const messageText = document.getElementById('messageText');
  
  let isEnvelopeOpen = false;
  let currentMessageIndex = 0;

  // Mostra uma mensagem aleatória
  function showRandomMessage() {
    currentMessageIndex = Math.floor(Math.random() * messages.length);
    messageText.textContent = messages[currentMessageIndex];
  }

  // Abre/fecha o envelope
  envelopeContainer.addEventListener('click', function() {
    isEnvelopeOpen = !isEnvelopeOpen;
    
    if (isEnvelopeOpen) {
      envelope.classList.add('open');
      envelopeMessage.classList.add('show');
      showRandomMessage();
    } else {
      envelope.classList.remove('open');
      envelopeMessage.classList.remove('show');
    }
  });

  // Alterna mensagens periodicamente quando aberto
  setInterval(function() {
    if (isEnvelopeOpen) {
      let newIndex;
      do {
        newIndex = Math.floor(Math.random() * messages.length);
      } while (newIndex === currentMessageIndex);
      
      currentMessageIndex = newIndex;
      messageText.style.opacity = 0;
      
      setTimeout(function() {
        messageText.textContent = messages[currentMessageIndex];
        messageText.style.opacity = 1;
      }, 500);
    }
  }, 5000);

  // Move o envelope pela tela de vez em quando
  setInterval(function() {
    if (!isEnvelopeOpen) {
      const x = Math.random() * (window.innerWidth - 100);
      const y = Math.random() * (window.innerHeight - 150);
      envelopeContainer.style.left = `${x}px`;
      envelopeContainer.style.top = `${y}px`;
    }
  }, 15000);

  // (Manter o resto do código anterior...)
  playAudio();
  createHearts();
  window.addEventListener('scroll', animateOnScroll);
  animateOnScroll();
  checkIfMobile();
});