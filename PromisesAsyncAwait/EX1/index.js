const prompt = require("prompt-sync")();

let nome = prompt("Digite seu nome: ");
let nascimento = prompt("Digite sua data de nascimento: ");

setTimeout(() => {
  console.log("Nome: ", nome, "|", " Nascimento: ", nascimento);
}, 2000);
