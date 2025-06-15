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