const botaoEnviar = document.getElementById('enviar');
const caixaMensagem = document.getElementById('texto');
const chat = document.getElementById('mensagens');
const socket = io();

botaoEnviar.addEventListener('click', () => {
  if (caixaMensagem.value !== '') {
    socket.emit('nova mensagem', caixaMensagem.value);
    caixaMensagem.value = '';
  }
});

socket.addEventListener('nova mensagem', (msg) => {
  const elementMsg = document.createElement('li');
  elementMsg.textContent = msg;
  elementMsg.classList.add('mensagem');
  chat.appendChild(elementMsg);
});
