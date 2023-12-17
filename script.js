const buttons = document.querySelectorAll(".buttons button");
const submit = document.querySelector(".submit");
const envio = document.querySelector(".envio");
const main = document.querySelector("main");

const btnOne = document.getElementById("btnOne");
const btnTwo = document.getElementById("btnTwo");
const btnThree = document.getElementById('btnThree');
const btnFor = document.getElementById('btnFor');
const btnFive = document.getElementById('btnFive');

const point = document.getElementById("point");

envio.classList.add("hide");

submit.addEventListener("click", () => {
  envio.classList.remove("hide");
  main.classList.add("hide");
});

// Adiciona um ouvinte de evento a cada botão
buttons.forEach((button) => {
  button.addEventListener("click", () => {
    // Remove a classe 'nota' de todos os botões
    buttons.forEach((btn) => btn.classList.remove("nota"));
    // Adiciona a classe 'nota' apenas ao botão clicado
    button.classList.add("nota");
    
      // Mostra o botão de submit
      submit.removeAttribute("disabled");
  });
});

btnOne.addEventListener("click", () => {
  point.innerHTML = "1";
});

btnTwo.addEventListener("click", () => {
  point.innerHTML = "2";
});

btnThree.addEventListener("click", () => { 
  point.innerHTML = "3";
});

btnFor.addEventListener('click', () => { 
  point.innerHTML = "4";
});

btnFive.addEventListener("click", () => { 
  point.innerHTML = "5";
});
