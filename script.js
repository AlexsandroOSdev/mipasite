// script.js

// Obtém o botão de menu, o menu e o corpo da página
const menuIcon = document.getElementById('menu-icon');
const menu = document.getElementById('menu');

// Adiciona evento de clique no ícone de menu
menuIcon.addEventListener('click', (e) => {
  // Impede que o clique no ícone de menu se propague para o corpo da página
  e.stopPropagation();
  // Alterna a visibilidade do menu ao adicionar/remover a classe 'show'
  menu.classList.toggle('show');
});

// Fecha o menu se o usuário clicar fora do menu ou do ícone
document.addEventListener('click', (e) => {
  // Verifica se o clique foi fora do menu e do ícone de menu
  if (!menu.contains(e.target) && !menuIcon.contains(e.target)) {
    // Se sim, esconde o menu
    menu.classList.remove('show');
  }
});
