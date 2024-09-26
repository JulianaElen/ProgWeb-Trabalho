// Juliana Elen Silva Oliveira
// RA: 2021005540

// --------------------------------------------------------------------------------
// Carrossel de imagens de produtos
// --------------------------------------------------------------------------------

let currentSlide = 0;
const totalSlides = document.querySelectorAll(".produtos").length; // pega o total de slides de acordo com a classe produtos
const carrossel = document.querySelector(".carrossel");

// Mover o carrossel para a direita
function moverParaDireita() {
  if (currentSlide < totalSlides - 1) {
    currentSlide++; //proximo produto
  } else {
    currentSlide = 0; //volta para o inicio do carrossel
  }
  atualizarCarrossel();
}

// Mover o carrossel para a esquerda
function moverParaEsquerda() {
  if (currentSlide > 0) {
    currentSlide--; // produto anterior
  } else {
    currentSlide = totalSlides - 1; //vai para o final
  }
  atualizarCarrossel();
}

// Atualizar o carrossel na tela
function atualizarCarrossel() {
  const tamanhoDoItem = carrossel.clientWidth; 
  carrossel.style.transform = `translateX(-${currentSlide * tamanhoDoItem}px)`;
}

// Função para atualizar automaticamente o carrossel, mesmo o usuario não passando
function iniciarPassagemAutomatica() {
  setInterval(moverParaDireita, 20000);
}

// Passagem automatica assim que a tela começa
window.onload = iniciarPassagemAutomatica;

// --------------------------------------------------------------------------------
// Navegação dos botões
// --------------------------------------------------------------------------------

function irParaTeste() {
  window.location.href = "teste.html";
}

function irParaProdutos() {
  window.location.href = "produtos.html";
}

function irParaCadastro() {
  window.location.href = "cadastro.html";
}

// --------------------------------------------------------------------------------
// Calculo do resultado do teste
// --------------------------------------------------------------------------------

function calculaTeste() {
  let total = 0;

  const form = document.forms["formularioTeste"];

  let resultText = "";

  // verificando se todas as questões foram respondidas
  if (
    form["q1"].value == 0 ||
    form["q2"].value == 0 ||
    form["q3"].value == 0 ||
    form["q4"].value == 0 ||
    form["q5"].value == 0 ||
    form["q6"].value == 0 ||
    form["q7"].value == 0 ||
    form["q8"].value == 0
  ) {
    resultText = "Responda todas as questões!";
  }

  // Soma os valores de cada pergunta
  total += parseInt(form["q1"].value);
  total += parseInt(form["q2"].value);
  total += parseInt(form["q3"].value);
  total += parseInt(form["q4"].value);
  total += parseInt(form["q5"].value);
  total += parseInt(form["q6"].value);
  total += parseInt(form["q7"].value);
  total += parseInt(form["q8"].value);

  // Verifica a resposta de acordo com a pontuação
  if (total >= 8 && total <= 12) {
    resultText = "Recomendamos o Shampoo Natural Brilho Vital!";
  } else if (total >= 13 && total <= 16) {
    resultText = "Recomendamos o Condicionador Nutritivo de Açaí e Cupuaçu!";
  } else if (total >= 17 && total <= 20) {
    resultText = "Recomendamos a Máscara de Hidratação Intensa com Murumuru!";
  } else if (total >= 21 && total <= 24) {
    resultText = "Recomendamos o Óleo Capilar Reparador Buriti & Pracaxi!";
  } else if (total >= 25 && total <= 28) {
    resultText = "Recomendamos o Sérum Anti-Frizz Nature Castanha-do-Pará!";
  } else if (total >= 29 && total <= 32) {
    resultText = "Recomendamos o Leave-in Fortalecedor com Queratina Vegetal!";
  } else if (total >= 33 && total <= 36) {
    resultText = "Recomendamos o Spray Revitalizante Água de Coco & Babosa!";
  } else if (total >= 37 && total <= 40) {
    resultText =
      "Recomendamos a Ampola de Tratamento Crescimento Rápido com Biotina!";
  }

  //Mostra o resultado na tela
  document.getElementById("result").innerText = resultText;
}

// --------------------------------------------------------------------------------
// Ativação do Dark Mode
// --------------------------------------------------------------------------------

document.addEventListener("DOMContentLoaded", () => {
  const darkModeCheck = document.getElementById("darkModeCheck");
  const body = document.body;

  // Verifica se o usuário já selecionou um modo anteriormente
  if (localStorage.getItem("darkMode") === "enabled") {
    body.classList.add("dark");
    darkModeCheck.checked = true;
  }

  darkModeCheck.addEventListener("change", () => {
    if (darkModeCheck.checked) {
      body.classList.add("dark");
      localStorage.setItem("darkMode", "enabled");
    } else {
      body.classList.remove("dark");
      localStorage.setItem("darkMode", "disabled");
    }
  });
});

// --------------------------------------------------------------------------------
// Menu de hamburgue
// --------------------------------------------------------------------------------

document.addEventListener("DOMContentLoaded", () => {
  const menuToggle = document.getElementById("menuToggle");
  const menu = document.getElementById("listaMenu");

  menuToggle.addEventListener("click", () => {
    menu.classList.toggle("active");
  });
});
