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






function irParaTeste() {
    window.location.href = "teste.html";
}

function irParaProdutos() {
    window.location.href = "produtos.html";
}

function irParaCadastro() {
  window.location.href = "cadastro.html";
}



function calculaTeste() {

  let total = 0;

  const form = document.forms['formularioTeste'];
  
  // Somar os valores de cada pergunta
  total += parseInt(form['q1'].value);
  total += parseInt(form['q2'].value);
  total += parseInt(form['q3'].value);
  total += parseInt(form['q4'].value);
  total += parseInt(form['q5'].value);
  total += parseInt(form['q6'].value);
  total += parseInt(form['q7'].value);
  total += parseInt(form['q8'].value);

  let resultText = '';

if (total >= 8 && total <= 12) {
      resultText = 'Recomendamos o Shampoo Natural Brilho Vital!';
  } else if (total >= 13 && total <= 16) {
      resultText = 'Recomendamos o Condicionador Nutritivo de Açaí e Cupuaçu!';
  } else if (total >= 17 && total <= 20) {
      resultText = 'Recomendamos a Máscara de Hidratação Intensa com Murumuru!';
   } else if (total >= 21 && total <= 24) {
      resultText = 'Recomendamos o Óleo Capilar Reparador Buriti & Pracaxi!';
   } else if (total >= 25 && total <= 28) {
      resultText = 'Recomendamos o Sérum Anti-Frizz Nature Castanha-do-Pará!';
   } else if (total >= 29 && total <= 32) {
      resultText = 'Recomendamos o Leave-in Fortalecedor com Queratina Vegetal!';
   } else if (total >= 33 && total <= 36) {
      resultText = 'Recomendamos o Spray Revitalizante Água de Coco & Babosa!';
   } else if (total >= 37 && total <= 40) {
      resultText = 'Recomendamos a Ampola de Tratamento Crescimento Rápido com Biotina!';
}

  document.getElementById('result').innerText = resultText;
}
