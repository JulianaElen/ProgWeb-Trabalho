let currentSlide = 0; // Índice do slide atual
const totalSlides = document.querySelectorAll('.produtos').length; // Total de slides
const carrossel = document.querySelector('.carrossel');

// Função para mover o carrossel automaticamente para a direita
function moverParaDireita() {
    if (currentSlide < totalSlides - 1) {
      currentSlide++; // Vai para o próximo slide
    } else {
      currentSlide = 0; // Volta para o primeiro slide ao chegar no fim
    }
    atualizarCarrossel();
  }
  
  // Função para mover o carrossel para a esquerda
  function moverParaEsquerda() {
    if (currentSlide > 0) {
      currentSlide--; // Vai para o slide anterior
    } else {
      currentSlide = totalSlides - 1; // Vai para o último slide se estiver no primeiro
    }
    atualizarCarrossel();
  }
  
  // Função para atualizar o carrossel na tela
  function atualizarCarrossel() {
    const tamanhoDoItem = carrossel.clientWidth; // Pega o tamanho da tela/carrossel
    carrossel.style.transform = `translateX(-${currentSlide * tamanhoDoItem}px)`; // Move os itens
  }
  
  // Função para iniciar a passagem automática
  function iniciarPassagemAutomatica() {
    setInterval(moverParaDireita, 20000); // Muda de slide a cada 3 segundos
  }
  
  // Inicia a passagem automática assim que a página carrega
  window.onload = iniciarPassagemAutomatica;