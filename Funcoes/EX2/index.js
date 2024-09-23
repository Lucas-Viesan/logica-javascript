const prompt = require("prompt-sync")();

function somaValores(n1, n2, n3) {
  let soma = n1 + n2 + n3;
  return soma;
}

function mediaValores() {
  let retornaSoma = somaValores(n1, n2, n3);
  let media = retornaSoma / 3;
  return media;
}

let n1 = parseInt(prompt("Digite um número: "));
let n2 = parseInt(prompt("Digite um número: "));
let n3 = parseInt(prompt("Digite um número: "));
let total = somaValores(n1, n2, n3);
console.log("O total dos valores: ", total);
console.log("A média dos valores: ", mediaValores());
