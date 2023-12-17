const submit = document.querySelector(".submit");
const envio = document.querySelector(".envio");
const main = document.querySelector("main");
const botao = document.getElementById('1')

// Começar 
envio.classList.add("hide");

submit.addEventListener("click", () => {
  envio.classList.remove("hide");
  main.classList.add("hide");
});

botao.addEventListener("click", () => {
  botao.style.backgroundColor = 'rgb(0, 0, 0)'
  botao.style.color = 'white'
})


