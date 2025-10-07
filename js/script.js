// js/script.js
document.addEventListener('DOMContentLoaded', function() {
  // 🌹 Corações flutuantes
  function createHearts() {
    const container = document.querySelector('.hearts-container');
    const heartCount = 15;
    
    for (let i = 0; i < heartCount; i++) {
      const heart = document.createElement('div');
      heart.classList.add('heart');
      heart.style.left = `${Math.random() * 100}%`;
      heart.style.animationDelay = `${Math.random() * 5}s`;
      heart.style.animationDuration = `${Math.random() * 3 + 4}s`;
      const size = Math.random() * 15 + 10;
      heart.style.width = `${size}px`;
      heart.style.height = `${size}px`;
      container.appendChild(heart);
    }
  }

  createHearts();

  // 🌸 Enviar justificativa pro WhatsApp e redirecionar
  const btnEnviar = document.getElementById('enviarJustificativaBtn');
  if (btnEnviar) {
    btnEnviar.addEventListener('click', function() {
      const justificativa = document.getElementById('justificativa').value.trim();
      const feedback = document.getElementById('feedback');

      if (justificativa.length < 10) {
        feedback.textContent = 'Escreva uma justificativa um pouco maior (mínimo 10 caracteres).';
        feedback.className = 'error';
        document.getElementById('justificativa').focus();
        return;
      }

      // 👉 Envia a justificativa para seu WhatsApp
      const numero = '5511947824018'; // seu número
      const mensagem = encodeURIComponent(`Justificativa enviada pelo site: ${justificativa}`);
      window.open(`https://wa.me/${numero}?text=${mensagem}`, '_blank');

      // Mensagem de confirmação
      feedback.textContent = 'Obrigada pela justificativa 💌 redirecionando...';
      feedback.className = 'success';

      // 👉 Aguarda 2 segundos e redireciona pra historia.html
      setTimeout(() => {
        window.location.href = 'historia.html';
      }, 2000);
    });
  }

  // 🌼 Cancelar justificativa
  const cancelBtn = document.getElementById('cancelJustBtn');
  if (cancelBtn) {
    cancelBtn.addEventListener('click', function() {
      const box = document.getElementById('justificationBox');
      box.classList.add('hidden');
      document.getElementById('feedback').textContent = '';
    });
  }

  // 🌷 Permitir Enter no input principal
  const inputPergunta = document.getElementById('pergunta1');
  if (inputPergunta) {
    inputPergunta.addEventListener('keypress', function(e) {
      if (e.key === 'Enter') {
        e.preventDefault();
        document.getElementById('verificarBtn').click();
      }
    });
  }
});
