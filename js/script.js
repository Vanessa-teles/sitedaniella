// js/script.js
// Cria corações flutuantes
function createHearts() {
  const container = document.querySelector('.hearts-container');
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
    
    container.appendChild(heart);
  }
}

document.getElementById('enviarJustificativaBtn').addEventListener('click', function() {
  const justificativa = document.getElementById('justificativa').value.trim();
  const feedback = document.getElementById('feedback');

  if (justificativa.length < 10) {
    feedback.textContent = 'Escreva uma justificativa um pouco maior (mínimo 10 caracteres).';
    feedback.className = 'error';
    document.getElementById('justificativa').focus();
    return;
  }

  // 👉 Envia pelo WhatsApp
  const numero = '5511947824018'; // ex: 55 11 999999999
  const mensagem = encodeURIComponent(`Minha justificativa: ${justificativa}`);
  window.open(`https://wa.me/${numero}?text=${mensagem}`, '_blank');

  feedback.textContent = 'Obrigada pela justificativa — surpresa desbloqueada! ❤️';
  feedback.className = 'success';
  hideJustificationBox();
  desbloquearSurpresa();
});


  const erroElement = document.getElementById('mensagemErro');
  let todasCorretas = true;

  // Verifica cada pergunta
  for (let i = 1; i <= 10; i++) {
    const respostaUsuario = document.getElementById(`pergunta${i}`).value.trim().toLowerCase();
    const respostaCorreta = respostasCorretas[`pergunta${i}`];
    
    if (respostaUsuario !== respostaCorreta) {
      todasCorretas = false;
      // Adiciona classe de erro ao input
      document.getElementById(`pergunta${i}`).classList.add('input-error');
    } else {
      // Remove classe de erro se estiver correta
      document.getElementById(`pergunta${i}`).classList.remove('input-error');
    }
  }

  if (todasCorretas) {
    // Todas corretas - redireciona para a página de história
    window.location.href = 'historia.html';
  } else {
    // Mostra mensagem de erro
    erroElement.textContent = 'Algumas respostas não estão corretas. Tente lembrar com carinho! 💕';
    
    // Adiciona animação de shake nos inputs errados
    const inputsErrados = document.querySelectorAll('.input-error');
    inputsErrados.forEach(input => {
      input.classList.add('shake');
      setTimeout(() => input.classList.remove('shake'), 500);
    });
  }

// Inicializa a página
document.addEventListener('DOMContentLoaded', function() {
  createHearts();
  
  // Permite submeter com Enter
  document.querySelectorAll('input').forEach(input => {
    input.addEventListener('keypress', function(e) {
      if (e.key === 'Enter') {
        verificarRespostas();
      }
    });
  });
});





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


setInterval(function() {
  if (!isEnvelopeOpen) {
    // Escolhe qual borda (0: topo, 1: direita, 2: baixo, 3: esquerda)
    const border = Math.floor(Math.random() * 4);
    let x, y;
    
    switch(border) {
      case 0: // Topo
        x = Math.random() * (window.innerWidth - 100);
        y = 20;
        break;
      case 1: // Direita
        x = window.innerWidth - 120;
        y = Math.random() * (window.innerHeight - 150);
        break;
      case 2: // Baixo
        x = Math.random() * (window.innerWidth - 100);
        y = window.innerHeight - 170;
        break;
      case 3: // Esquerda
        x = 20;
        y = Math.random() * (window.innerHeight - 150);
        break;
    }
    
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

document.addEventListener('DOMContentLoaded', function() {
  // Forçar play em todos os vídeos
  const videos = document.querySelectorAll('video');
  videos.forEach(video => {
    const promise = video.play();
    if (promise !== undefined) {
      promise.catch(error => {
        // Tentar novamente com gesture
        video.muted = true;
        video.play();
      });
    }
  });
});